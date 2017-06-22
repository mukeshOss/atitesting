<?php

/**
 * this file will call the methods and push data to magento
 */
use Pimcore\Model\Object\BridgeSrcTargetMapping;

/**
 * PimconnectBridge Class
 */
class PimconnectBridge extends Pimconnect\PimconnectModel {

    public $_keyword = array();
    protected $_apiKey = '';
    public $bridgeRootId = '';
    public $_postUrl = '';
    public $_restUrl = '';
    public $_username = '';
    public $_password = '';
    public $modificationDate = 0;
    public $mappingModDate = 0;
    protected $_parentID = '';
    public $_token = '';
    public $_jsonString = '';
    protected $_orgJsonString = '';
    protected $_sourceID = '';
    protected $_proposedDataSet = '';
    public $_pimClassName = '';
    protected $_counter = 0;
    protected $_mappingPath = '';
    protected $_imagesArray = array();
    protected $_onlyImagesArray = array();
    protected $_onlyImagesArrayVar = array();
    public $object_id = '';
    public $sourceParentId = '';
    public $flag = '';
    protected $_logArray = array();
    protected $_logCount = 0;
    public $_objecttype = '';
    protected $_clsName = '';
    protected $_where = '';
    protected $_requestURL = '';
    protected $_method = '';
    public $_variantJson = '';
    protected $_orgVariantJson = '';
    public $bridgeId = '';
    protected $objArrayId = array();
    protected $objRecId = '';
    protected $parentRecord = '';

    /**
     * this is used for setting the data for used variables
     */
    private function setMemberVariable($list) {
        $this->logExecutionTime("Set Member Variable Start Time " . date("Y-m-d H:i:s"));
        $clsName = ucfirst($list->getPimClassName());
        $this->_where = $list->getSqlWhere();
        $this->_username = $list->getMagentoUsername();
        $this->_password = $list->getMagentoPassword();
        $this->_postUrl = $list->getPostUrl();
        $this->_restUrl = $list->getRestUrl();
        $this->_proposedDataSet = $list->getProposedDataSetType();
        $this->_mappingPath = $list->getMappingRecordpath();
        $this->_parentID = $list->getObjectParentID();
        $this->sourceParentId = $list->getSourceParentId();
        $this->_pimClassName = ucfirst($list->getPimClassName());
        $this->_variantJson = $list->getVaraintJSON();
        $this->bridgeId = $list->getId();
        $this->_orgVariantJson = $list->getJson();
        $this->_keyword = array();
        $this->logExecutionTime("Set Member Variable End Time " . date("Y-m-d H:i:s"));
    }

    /**
     * Used to migrate data to magento
     */
    public function runCron() {  
        $userId = \Pimcore\Tool\Authentication::authenticateSession()->getId();
        $this->logExecutionTime("Start Time " . date("Y-m-d H:i:s"));
        try {
            $totalRowsCount = 0;
            // Fetching Bridge Connection data
            $listResult = $this->getBridgeConnectionMappingData();
            
            // Check For Attribute Set
            $resultAttributeChk = $this->chkforAttributeSet($listResult);

            if (count($resultAttributeChk) > 0) {
                throw new Exception('You need to Import Attribute Set 
                        for ' . implode(',', $resultAttributeChk));
            }
            foreach ($listResult as $listKey => $list) {
                $jsonString = str_replace("##VARIANTJSON##", "", $list->getJson());
                $jsonToArray = json_decode($jsonString, 1);

                if (!is_array($jsonToArray)) {
                    $this->logMessage("Unable to to convert Json String into Array", $name = 'Pimconnect');
                    return "Unable to to convert Json String into Array";
                    exit();
                }
                
                //for checking any job related to this user and connection
                 $jobData = $this->checkJobStatus($list->o_id, $list->o_ParentId);
                 
                $this->setMemberVariable($list);
                $configObj = new \Pimconnect\Config();
                $configData = $configObj->getConfig();
               
                
                foreach ($jobData as $connKey => $connValue) {
                    $this->logExecutionTime("##### ".$connValue['con_id']."##". $list->o_id);
                    $batchSize = $configData->batchsize;
                    //$batchSize = 10;
                    if ($connValue['con_id'] == $list->o_id) {
                        if (!empty($this->sourceParentId)) {
                            $totalCount = $this->createProcCount();
                            $this->logExecutionTime("##### ".$totalCount[0]['count(o_id)']);
                            $count = ceil($totalCount[0]['count(o_id)'] / $batchSize);
                        }
                        $offset = 0;
                        for ($i = 0; $i < $count; $i++) {
                            if (!empty($this->sourceParentId)) {
                                $this->logExecutionTime("## $i : $count##");
                                $resultData = $this->createProc($batchSize, $offset);
                            }
                            $offset += $batchSize;
                            $checkStartTime = $this->checkStartTime($connValue['job_id']);
                            $this->updateStartTime($connValue['job_id'], $totalCount);
                            $totalRowsCount += $this->objectProcessing($resultData, $connValue, $jsonToArray, $list); //New function
                            $this->updateProcessedTime($connValue['job_id']);
                        }
                        $this->updateJobMaster($connValue['job_id'], $userId);
                        break;
                    }
                }
            }
            if (!empty($totalRowsCount)) {
                $this->logExecutionTime("Rows Affected " . $totalRowsCount);
            }
            $this->logExecutionTime(" End Time " . date("Y-m-d H:i:s"));
            return (int) 1;
        } catch (Exception $e) {
            $this->logMessage("Error =  " . json_encode($e->getMessage()), $name = 'PimconnectLog');
            return $e->getMessage();
        }
    } //183 //71

    /**
     * Object processing for migration
     * @param type $records
     * @param type $connection
     * @param type $json
     * @return int
     */
    protected function objectProcessing($records, $connection, $json, $connectionList) {
        $totalRowsCount = 0;
        $this->logExecutionTime("Object Processing Start Time " . date("Y-m-d H:i:s"));
        foreach ($records as $rowProc) {
            if ($this->flag == 1) { // to handle resume connection/bridge
                $checkIfObjectSend = $this->checkQueueExists($connection['job_id'], $rowProc['id']);

                if ($checkIfObjectSend['status'] == false) {
                    $totalRowsCount += $this->objectVariantProcessing($connectionList, $rowProc, $json);
                } else {
                    continue;
                }
            } else{ // start bridge/connection from the begining
                $totalRowsCount += $this->objectVariantProcessing($connectionList, $rowProc, $json);
            }
            $this->createJobQueue($connection['job_id'], $rowProc['id']);
        }
        $this->logExecutionTime("Object Processing End Time " . date("Y-m-d H:i:s"));
        return $totalRowsCount;
    } //123 //74 //23

    /**
     * Object Variant processing
     * @param type $objArray
     * @param type $list
     * @param type $rowProc
     * @return int
     */
    protected function objectVariantProcessing($list, $rowProc, $jsonToArray) {
        $totalRowsCount = 0;
        $this->logExecutionTime("Object Variant Processing Start Time " . date("Y-m-d H:i:s"));
        $this->_objecttype = $rowProc['objectType'];
        array_map(array($this, 'getKewords'), $jsonToArray);
        $classObjArray = $this->getObjectVariantData($rowProc);

        foreach ($classObjArray as $record) {
            $this->_objecttype = $record->getType();
            // For Inherited Object
            if (($this->_objecttype == 'object' && $record->getParent()->getType() == 'object' && $this->_proposedDataSet == 'products') /* || $this->_objecttype == 'variant'  */) { // to handle the case of multi level Object or Inherited Object
                // $this->_objecttype = $rowProc['objectType'] = 'variant';
                continue;
            }
            $this->_sourceID = $record->getId();
            $this->modificationDate = 0;

            $this->modificationDate = $record->getModificationDate();
            $this->recordExist(); // Check if Record Already Exists
            if ($this->_proposedDataSet == 'productsimages') {
                $this->mappingModDate = 0;
            }
            if (($this->modificationDate > $this->mappingModDate) || $this->mappingModDate == 0) { // Check in Case of Update
                $this->_imagesArray = array();
                $this->_jsonString = $list->getJson();
                $this->_jsonString = $this->createJsonForMagento($this->_jsonString, '', $record, $rowProc);

                $this->_token = ($this->_token == "") ? $this->getToken() : $this->_token;
                if (!empty($this->_token)) { // If Token Generated
                    $totalRowsCount ++;
                    $this->migrateProcessData($rowProc); 
                }
                $this->unsetVariables();
            } // End of Update Check
        } // End Of For
        $this->logExecutionTime("Object Variant Processing End Time " . date("Y-m-d H:i:s"));
        return $totalRowsCount;
    }
    
    /**
     * Migrate the full processed data
     * @param type $rowProc
     */
    protected function migrateProcessData($rowProc) {
        $this->logExecutionTime("Migrate Processed Data Start Time " . date("Y-m-d H:i:s"));
        if (count($this->_onlyImagesArrayVar) > 0 && $this->_proposedDataSet == 'productsimages') { // In Case of Multiple Images
            if (!empty($this->_requestURL)) {
                $this->handleAssetData();
            } else {
                $this->logMessage("Error =  ID = " . $rowProc['id'], 'Pimconnect');
                //continue;
            }
        } else {
            $this->curlPostCallMagento($this->_jsonString, $this->_method, $this->_requestURL); // For Product and category Upload
        }
        
        if ($this->_proposedDataSet == 'products' && $rowProc['objectType'] == 'object') {
            $this->updateVaraint($rowProc['id']); // For Updating Variant for a Object
        }
        $this->logExecutionTime("Migrate Processed Data End Time " . date("Y-m-d H:i:s"));
    }

    /**
     * Function to Update Variant in product
     * @param int $id
     */
    public function updateVaraint($id) {
        $this->logExecutionTime("Update Variant Start Time " . date("Y-m-d H:i:s"));
        $listResult = $this->getSrcTargetMappingData($id);

        foreach ($listResult as $listVal) {
            $result = $this->getDataForPimAndMagentoIds($id);

            $magentoVariant = $result['magentoVariant'];
            $sourceVariant = $result['sourceVariant'];

            // Check If Variant Exits
            if (!empty($magentoVariant) && !empty($sourceVariant)) {
                $myString = str_replace("##VARIANT##", $magentoVariant, $this->_variantJson);
                $myString = str_replace("##TARGETID##", $listVal->getTargetID(), $myString);
                array_map(array($this, 'getKewords'), json_decode($myString, true));

                $record = $this->getAllChildsListing($id, 1);

                $this->_keyword = array();
                array_map(array($this, 'getKewords'), json_decode($myString, true));
                $sourceVariantArray = explode(',', $sourceVariant);

                // For Variant Data Replacenment in macros value of Product JSON
                $resultData = array();
                foreach ($sourceVariantArray as $key => $varaintId) {
                    $record = $this->getAllChildsListing($varaintId);
                    $resultData[] = $this->mangaeKeywordForMagento($record, $myString);
                }

                $variantString = array();
                foreach ($resultData as $resultKey => $resultValue) {
                    if (is_array($resultValue)) {
                        foreach ($resultValue as $key => $value) {
                            $tmpKey = explode("::", $key);
                            if (count($tmpKey) > 1) {
                                $myKey = explode(":", $tmpKey[1]);
                                if (key_exists($key, $variantString)) {
                                    $variantString[$key][] = array(
                                        "value_index" => $value
                                    );
                                } else {
                                    $variantString[$key][] = array(
                                        "value_index" => $value
                                    );
                                }
                            } else {
                                $myString = str_replace("##" . $key . "##", $value, $myString);
                            }
                        }
                    }
                }
                // For Variant Data attachement in Product
                // Varriant ID Replacement
                foreach ($variantString as $key => $val) {
                    $myString = str_replace('"##' . $key . '##"', json_encode($val), $myString);
                }

                $myString = substr($myString, 1, strlen($myString) - 2);
                $jsonToArray = json_decode($myString, 1);
                $this->_jsonString = str_replace(',"##VARIANTKEY##":"##VARIANTJSON##"', ',' . $myString, $this->_jsonString);

                // Varriant ID Replacement
                $requestUrl = $listVal->getSite() . "/" . $this->_restUrl . "/" . $listVal->getTargetSKU();
                $this->curlPostCallMagento($this->_jsonString, 'PUT', $requestUrl);
            }
        }

        // For Updating the modification Date
        $this->updateModificationDate();
        $this->unsetVariables();
        $this->logExecutionTime("Update Variant End Time " . date("Y-m-d H:i:s"));
    }

    /**
     * Unsetting the varables used in runCron()
     */
    private function unsetVariables() {
        unset($targetString);
        unset($this->_jsonString);
        unset($this->_onlyImagesArray);
        unset($this->_keyword);
    }

}
