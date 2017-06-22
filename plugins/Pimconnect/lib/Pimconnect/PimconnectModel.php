<?php

/**
 * this is the model file which will supply data from DB
 */

namespace Pimconnect;

use Pimcore\Model\Object\BridgeConnection;
use Pimcore\Model\Object\BridgeSrcTargetMapping;

/**
 * PimconnectModel Class
 */
class PimconnectModel extends AppTool {

    public $db = '';

    public function __construct() {
        $this->db = \Pimcore\Resource\Mysql::get();
    }

    /**
     * Function to get the database connection
     */
    public function getDBConnection() {
        $this->db = \Pimcore\Resource\Mysql::get();
    }

    /**
     * Function to take count using  form store procedure pimobj_tree
     */
    public function createProcCount() {
        $this->logExecutionTime("Proc Count Start Time " . date("Y-m-d H:i:s"));
        $objectProc = " call  pimobj_tree($this->sourceParentId); ";
        $this->db->query($objectProc);
        $select = " select count(o_id)
                    from
                        objects_tree ";
        if ($this->_where != '') {
            $select .= ' Where ' . $this->_where;
        }

        $result = $this->db->fetchAll($select);
        $this->logExecutionTime("Proc Count End Time " . date("Y-m-d H:i:s"));
        return $result;
    }

    /**
     * Function to get data from tables using store procedure
     */
    public function createProc($limit, $offset) {
        $this->logExecutionTime("Proc Start Time " . date("Y-m-d H:i:s"));
        $objectProc = " call  pimobj_tree($this->sourceParentId); ";
        $this->db->query($objectProc);
        $select = " select 
                        o_id as id,o_parentId as parentId,
                        o_type as objectType,ORD,myrank as rank,o_modificationDate as modificationDate
                    from 
                        objects_tree ";

        if ($this->_where != '') {
            $select .= ' Where ' . $this->_where;
        }
        $select .= " order by myrank ";

        if ($this->_proposedDataSet == 'products') {
            $select .= " ASC";
        } else {
            $select .= " DESC";
        }

        $select .= "  limit $limit";
        $select .= "  OFFSET $offset";
        $result = $this->db->fetchAll($select);
        $this->logExecutionTime("Proc End Time " . date("Y-m-d H:i:s"));
        return $result;
    }

    /**
     * Function to fetch all Bridge Connection Listing
     *
     * @return array
     */
    public function getBridgeConnectionMappingData() {
        $this->logExecutionTime("BridgeConnection Mapping Start Time " . date("Y-m-d H:i:s"));
        $list = new BridgeConnection\Listing();
        $list->setCondition("o_published = '1' ");

        if (isset($this->bridgeRootId) && !empty($this->bridgeRootId)) {
            $list->setCondition("Bridge = '," . $this->bridgeRootId . ",'");
        } else {
            if ($this->object_id != '') {
                $list->setCondition(" o_id='" . $this->object_id . "' ");
            }
        }
        // $list->setCondition(" o_id='12116' ");
        $list->addConditionParam("o_published = ?", '1', "AND");

        $list->setOrderKey("Order");
        $list->setOrder("asc");
        $listResult = $list->load();
        $this->logExecutionTime("BridgeConnection Mapping End Time " . date("Y-m-d H:i:s"));
        return $listResult;
    }

    /**
     * Check for Imported Attribute Set
     *
     * @param Array $listResult            
     */
    protected function chkforAttributeSet($listResult) {
        $this->logExecutionTime("Check Attribute Set Start Time " . date("Y-m-d H:i:s"));
        $resultArray = array();
        foreach ($listResult as $key => $val) {
            if ($val->getProposedDataSetType() == 'products') {
                $selectQuery = " SELECT bridge_id,attribute_set_id 
                             FROM 
                             tblMagentoAttributesSets 
                             Where bridge_id = '" . $val->getId() . "'";
                $result = $this->db->fetchAll($selectQuery);

                if (count($result) < 1) {
                    $resultArray[] = $val->getId();
                }
            }
        }
        $this->logExecutionTime("Check Attribute Set End Time " . date("Y-m-d H:i:s"));
        return $resultArray;
    }

    /**
     * Function to fetch all Bridge Connection Listing
     * 
     * @param int $id 
     * @return array
     */
    public function getSrcTargetMappingData($id) {
        $list = new BridgeSrcTargetMapping\Listing();
        $list->setCondition("ISProduct = 1 ");
        $list->addConditionParam("SourceID =  ?", $id, "AND");
        $list->addConditionParam("RecordType =  ?", "products", "AND");
        $list->addConditionParam("Site = ?", $this->_postUrl, "AND");
        $listResult = $list->load();

        return $listResult;
    }

    /**
     * Function to fetch all Bridge Connection Listing
     *
     * @return array
     */
    public function getObjectVariantData($row) {
        $this->logExecutionTime("Object Variant Data Start Time " . date("Y-m-d H:i:s"));
        $className = "\\Object\\" . $this->_pimClassName . "\\Listing";
        $classObj = new $className();
        if ($row['objectType'] == 'variant') {
            $classObj->setObjectTypes([
                \Object\AbstractObject::OBJECT_TYPE_VARIANT
            ]);
        }

        $classObj->setCondition($this->_where);
        $classObj->addConditionParam(" o_id = ?", $row['id'], "AND");
        $classObj->addConditionParam("o_type != ?", 'folder', "AND");
        $classObjArray = $classObj->load();
        $this->logExecutionTime("Object Variant Data End  Time " . date("Y-m-d H:i:s"));
        return $classObjArray;
    }

    /**
     * Function to get All objects and Variant of Root Object
     *
     * @param unknown $id            
     */
    public function getAllChilds($id) {
        $cls = "\\Pimcore\\Model\\Object\\" . $this->_pimClassName;
        $objectX = $objectXX = $cls::getById($id);
        $childs = $objectX->getChilds(array(
            \Pimcore\Model\Object\AbstractObject::OBJECT_TYPE_VARIANT,
            \Pimcore\Model\Object\AbstractObject::OBJECT_TYPE_OBJECT
                ), true);

        return $childs;
    }

    /**
     * Function to get All objects and Variant of Root Object
     *
     * @param
     *            Object Id $id
     */
    protected function getAllChildsListing($varaintId, $variant = 0) {
        $this->logExecutionTime("Get All Childs Listing Start Time " . date("Y-m-d H:i:s"));
        $className = "\\Object\\" . $this->_pimClassName . "\\Listing";
        $classObj = new $className();
        if ($variant == 0) {
            $classObj->setObjectTypes([
                \Object\AbstractObject::OBJECT_TYPE_VARIANT,
                \Object\AbstractObject::OBJECT_TYPE_OBJECT
            ]);
        }
        $classObj->setCondition(" o_id = ?", $varaintId);
        $record = $classObj->load();
        $record = $record[0];
        $this->logExecutionTime("Get All Childs Listing End Time " . date("Y-m-d H:i:s"));
        return $record;
    }

    /**
     * Function to Get Magento attribute data
     *
     * @param Array $myValueindex            
     * @param number $join
     *            If Joins required
     * @param string $pimcoreValue
     *            Search a attribute value on the basis of Pimcore Value
     * @return Array
     */
    public function getMagentoData($myValue, $join = 0, $pimcoreValue = '') {
        if ($join == 0) {
            $sSQL = " SELECT " . $myValue['3'] . " FROM
        	          tblPimMagentoAttributesMapping
        	          WHERE
        	          attr_set_id = '" . $myValue['1'] . "' and attr_code = '" . $myValue['2'] . "'
        	          AND bridge_id = '" . $this->bridgeId . "'
        	        ";
            $result = $this->db->fetchAll($sSQL);
            if (isset($result[0])) {
                $result = $result[0];
            }

            return $result[$myValue['3']];
        } else {
            $sSQL = "SELECT
            	     tmav." . $myValue['3'] . "
            	     FROM
            	     tblPimMagentoAttributesMapping  tpmam
            	     JOIN tblMagentoAttributeValues tmav ON tmav.attr_id = tpmam.attr_id
            	     WHERE
            	     tpmam.attr_set_id = '" . $myValue['1'] . "'
            	     and tpmam.attr_code = '" . $myValue['2'] . "'
            	     AND tpmam.bridge_id = '" . $this->bridgeId . "'
            	     AND tmav.bridge_id = '" . $this->bridgeId . "'
            	     ";

            if ($pimcoreValue != '') {
                $sSQL .= " AND tmav.attr_values = '" . $pimcoreValue . "' ";
            }

            $result = $this->db->fetchAll($sSQL);
            $resultArray = '';
            foreach ($result as $key => $val) {
                $resultArray = $val[$myValue['3']];
            }
            return $resultArray;
        }
    }

    /**
     * Function to get the magento attribute value
     */
    public function getMagentoAttrValue($attr_code, $record, $attr_value_code) {
        $sSQL = '';
        $sSQL = " SELECT
                  tmav.attr_values
                  FROM
                  tblPimMagentoAttributesMapping tpmam
                  JOIN tblMagentoAttributeValues tmav ON tmav.attr_id = tpmam.attr_id
                  WHERE
                  tpmam.attr_code = '" . $attr_code . "' and tmav.attr_label like '" . strtolower($attr_value_code) . "'
                  and tmav.bridge_id = '" . $this->bridgeId . "' and tpmam.bridge_id = '" . $this->bridgeId . "' ";

        $result = $this->db->fetchAll($sSQL);

        if (count($result) > 0) {
            return $result[0]['attr_values'];
        } else {
            return 0;
        }
    }

    /**
     * Function to get Magento Target ID
     *
     * @param
     *            Source Data ID $linkedId
     * @return Target Data ID
     */
    protected function getTargetId($linkedId) {
        $list = new BridgeSrcTargetMapping\Listing();
        $list->setCondition("SourceID = '$linkedId' ");
        $list->addConditionParam("Site = ?", $this->_postUrl, "AND");
        $listResult = $list->load();

        if ($listResult > 0) {

            if (isset($listResult[0])) {
                $listResult = $listResult[0];
            }
            if (count($listResult) > 0) {
                return $listResult->getTargetID();
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    /**
     * Function to Save Data Mapping b/w Magento and Pimcore
     */
    protected function saveMapping($responseData, $myString) {
        $key = str_replace(' ', '_', strtolower($responseData->name)) . "_" . \Pimcore_File::getValidFilename(uniqid());
        $list = new BridgeSrcTargetMapping\Listing();
        $list->setCondition("SourceID = '$this->_sourceID'");
        if ($responseData != '') {
            $list->addConditionParam("TargetID = ?", $responseData->id, "AND");
        }
        $list->addConditionParam("Site = ?", $this->_postUrl, "AND");
        $listResult = $list->load();

        if (count($listResult) < 1) { // Insert Case
            $newObject = new \Object\BridgeSrcTargetMapping();
            $newObject->setParent(\Object::getByPath("/" . $this->_mappingPath));
            $newObject->setKey($key);
            $newObject->setPublished(true);
            $newObject->setSourceID($this->_sourceID);
            $newObject->setTargetID($responseData->id);
            $newObject->setTargetSKU($responseData->sku);
            $newObject->setRecordType($this->_proposedDataSet);
            if ($this->_objecttype == 'object') {
                $newObject->setISProduct(true);
            }
            $newObject->setPimClassName($this->_pimClassName);
            $newObject->setSite($this->_postUrl);
            $newObject->setModificiationDate($this->modificationDate);
            $newObject->save();
        } else { // Update Case
            $newObject = \Object\BridgeSrcTargetMapping::getById($listResult[0]->getId());
            $newObject->setSourceID($this->_sourceID);
            $newObject->setTargetID($responseData->id);
            $newObject->setPimClassName($this->_pimClassName);
            if ($this->_objecttype == 'object') {
                $newObject->setISProduct(true);
            }

            $newObject->setModificiationDate($this->modificationDate);
            $newObject->setSite($this->_postUrl);
        }
    }

    /**
     * Function to update Modification Date at Source Target Mapping Table
     */
    public function updateModificationDate() {
        $this->logExecutionTime("Update Modification Date Start Time " . date("Y-m-d H:i:s"));
        $list = new BridgeSrcTargetMapping\Listing();
        $list->setCondition("SourceID = '$this->_sourceID'");
        $list->addConditionParam("Site = ?", $this->_postUrl, "AND");
        $listResult = $list->load();

        if (count($listResult) >= 1) {
            $listResult = $listResult[0];
            $newObject = \Object\BridgeSrcTargetMapping::getById($listResult->getId());
            $newObject->setModificiationDate($this->modificationDate);
            $newObject->save();
        }
        $this->logExecutionTime("Update Modification Date End Time " . date("Y-m-d H:i:s"));
    }

    /**
     * Function to Check IF Record Exists in Target system
     */
    protected function recordExist() {
        $this->logExecutionTime("Record Exist Start Time " . date("Y-m-d H:i:s"));
        $list = new BridgeSrcTargetMapping\Listing();
        $list->setCondition("SourceID = '$this->_sourceID'");
        $list->addConditionParam("Site = ?", $this->_postUrl, "AND");
        $listResult = $list->load();

        if (count($listResult) >= 1) {
            $listResult = $listResult[0];

            $this->mappingModDate = $listResult->getModificiationDate();

            $targetId = $listResult->getTargetID();
            if ($this->_proposedDataSet == 'categories') {
                $this->_requestURL = $this->_postUrl . '/' . $this->_restUrl . '/' . $this->_proposedDataSet . '/' . $targetId;
            }
            if ($this->_proposedDataSet == 'products') {
                $targetsku = $listResult->getTargetSKU();
                $this->_requestURL = $this->_postUrl . '/' . $this->_restUrl . '/' . $targetsku;
            }
            $this->_method = 'PUT';

            if ($this->_proposedDataSet == 'productsimages') {
                $targetsku = $listResult->getTargetSKU();
                $this->_requestURL = $this->_postUrl . '/' . $this->_restUrl;
                $this->_requestURL = str_replace('##sku##', $targetsku, $this->_requestURL);
                $this->_method = 'POST';
            }
        } else {
            $this->_requestURL = '';
            $this->_method = '';
        }
        $this->logExecutionTime("Record Exist End Time " . date("Y-m-d H:i:s"));
    }

    /**
     * This function will check if the logged in user has
     * some job whose status is in-progress
     */
    public function checkJobStatus($objectId,$bridgeId = NULL) {
        $this->logExecutionTime("Check Job Start Time " . date("Y-m-d H:i:s"));
        if($bridgeId == NULL){
            $query = "Select job_id,con_id,user_id,last_updated_time,start_time from tblJobMaster where con_id = '" . $objectId . "'  and  status = 'in-progress'";
        }else{
            $query = "Select job_id,con_id,user_id,bridge_id,last_updated_time,start_time from tblJobMaster where bridge_id = '" . $bridgeId . "'  and  status = 'in-progress'";
        }
        $result = $this->db->fetchAll($query);
        $this->logExecutionTime("Check Job Status End Time " . date("Y-m-d H:i:s"));
        return $result; 
    }
    

    /**
     * function will check tblJobQueue and decide if this object is send to target 
     * @param int $jobId
     * @param int $objectId
     */
    public function checkQueueExists($jobId, $objectId) {
        $resultArray = array();
        if (!empty($jobId) && !empty($objectId)) {
            $query = "Select * from tblJobQueue where job_id ='" . $jobId . "' and source_id ='" . $objectId . "' and status = '1'";
            $result = $this->db->fetchAll($query);
        }
        if (count($result) > 0) {
            $resultArray['status'] = true;
            return $resultArray;
        } elseif (empty($result)) {
            $resultArray['status'] = false;
            return $resultArray;
        }
    }

    /**
     * This will insert the records in the tblJobQueue
     * @param int $jobId
     * @param int $objectId
     */
    public function createJobQueue($jobId, $objectId) {
        $this->logExecutionTime("Create Job Queue Start Time " . date("Y-m-d H:i:s"));
        $targetId = $this->getTargetId($objectId);
        $insertSQL = " INSERT INTO tblJobQueue 
                             (job_id,source_id,
                             dest_id,status) values ('" . $jobId . "' ,"
                             . "'" . $objectId . "','" . $targetId . "','1')"; 
        $this->db->query($insertSQL);
        $this->logExecutionTime("Create Job Queue End Time " . date("Y-m-d H:i:s"));
    }

    /**
     * This will update the records in the tblJobMaster
     * @param int $job_id
     * @param int $userId
     */
    public function updateJobMaster($job_id, $userId) {
        $end_time = date('Y-m-d H:i:s');
        $updateSQL = " UPDATE tblJobMaster 
                             SET user_id = '" . $userId . "' ,
                             end_time = '" . $end_time . "', 
                             status = 'done'
                             where job_id = '" . $job_id . "' and status = 'in-progress'";

        $this->db->query($updateSQL);
    }

    /**
     * this will update start time
     * @param int $job_id
     * @param array $totalRec
     */
    public function updateStartTime($job_id, $totalRec) {
        $this->logExecutionTime("Update Job Start Time " . date("Y-m-d H:i:s"));
        $updateSQL = " UPDATE tblJobMaster 
                             SET source_records = '" . $totalRec[0]['count(o_id)'] . "' ,
                             last_updated_time = '".date('Y-m-d H:i:s')."'
                             where job_id = '" . $job_id . "'";

        $this->db->query($updateSQL);
        $this->logExecutionTime("Update Job End Time " . date("Y-m-d H:i:s"));
    }

    /**
     * 
     * @param int $job_id
     * @return boolean
     */
    public function checkStartTime($job_id) {
        $query = "Select start_time from tblJobMaster where job_id ='" . $job_id . "'";
        $result = $this->db->fetchAll($query);

        return $result;
    }
    
    
    /**
     * this function will insert all the bridge connection in DB
     * @param type $param
     */
    public function insertConnections($conId,$jobId,$userId,$bridgeId) {
     
        $insertSQL = " INSERT INTO tblJobMaster 
                                   (job_id,user_id,bridge_id,
                                   con_id,start_time,status) values('" . $jobId . "',"
                                   . "'" . $userId . "','" . $bridgeId . "',"
                                   . "'" . $conId . "','".date('Y-m-d H:i:s')."','in-progress')";
                                       
        $this->db->query($insertSQL);
    }
    
    /**
     * this function will kill all the previous jobs 
     * whose status is in-progress
     * @param type $param
     */
    public function killPreviousJobs($objId,$bridgeId = NULL) {
        
        if($bridgeId == NULL){
          $query = "Update tblJobMaster SET  end_time = '" . date('Y-m-d H:i:s') . "', "
                . "status = 'in-complete' where con_id = '".$objId."' and "
                . "(start_time !='0000-00-00 00:00:00' or  start_time != NULL )";
        }else{
             $query = "Update tblJobMaster SET  end_time = '" . date('Y-m-d H:i:s') . "', "
                . "status = 'in-complete' where bridge_id ='".$bridgeId."' and "
                . "(start_time !='0000-00-00 00:00:00' or  start_time != NULL )";
        }
          $this->db->query($query); 
    }
    
    /**
     * this function will update the processed time
     * @param type $param
     */
    public function updateProcessedTime($jobId) {
          $query = "Update tblJobMaster SET  last_updated_time = '". date('Y-m-d H:i:s')."' where job_id = '".$jobId."'"; 
          $this->db->query($query);
    }

}
