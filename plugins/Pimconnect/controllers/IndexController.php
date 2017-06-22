<?php

/**
 * Pimconnect_IndexController Class
 */
class Pimconnect_IndexController extends \Pimcore\Controller\Action\Admin {

    /**
     * Function for index page  
     */
    public function indexAction() {
        $object_id = $this->getParam('object_id');
        $returnVal = false;
        if ($object_id != '') {

            
            $resultData = Object::getById($object_id);
            
            if (isset($resultData->o_className)) {
                $resultData = $resultData->o_className;
                
                if ($resultData == 'bridgeConnection' || $resultData == 'bridge') {
                    $returnVal = true;
                    $returnArray['className'] = $resultData;
                }
            }
            $magentoAttrObj = new Pimconnect\Model\MagentoAttributesSetsModel();
            $magentoResult = $magentoAttrObj->getMagentoAttributeSets($object_id);
            
            if (isset($magentoResult[0])) {
                $returnArray['bridgeId'] = $magentoResult[0]['bridge_id'];
                $returnArray['attributeId'] = $magentoResult[0]['attribute_set_id'];
            } else {
                $returnArray['bridgeId'] = '';
            }
        }
        $returnArray['status'] = $returnVal;
        echo json_encode($returnArray);
        exit();
    }

    /**
     * Function to import data from magento
     */
    public function importMagentoDataAction() {
        try {
            $object_id = $this->getParam('object_id');
            $list = new Object\BridgeConnection\Listing();
            $list->setCondition(" o_id = ?", $object_id);
            $listResult = $list->load();
            $obj = new \Pimconnect\ImportData();

            foreach ($listResult as $val) {
                $obj->attrSetId = $val->getAttributeSetId();
                $obj->baseURL = $val->getPostUrl();
                $obj->_username = $val->getMagentoUsername();
                $obj->_password = $val->getMagentoPassword();
            }
            $obj->bridgeId = $object_id;
            $obj->importData();
            $returnArray['status'] = true;
            $returnArray['msg'] = "Data Imported Successfully";
            echo json_encode($returnArray);
            exit();
        } catch (Exception $e) {
            $returnArray['status'] = false;
            $returnArray['msg'] = $e->getMessage();
            echo json_encode($returnArray);
            exit();
        }
    }

    /**
     * Function for run job and push data to magento
     */
    public function executeJobAction() {
        try {
            $object_id = $this->getParam('object_id');
            $sourceParentId = $this->getParam('sourceParentId');
            $bridgeRootId = $this->getParam('bridgeRootId');

            if (!empty($this->getParam('flag'))) {
                $flag = $this->getParam('flag');
                if ($flag == 2) {
                    $this->createJobMaster($object_id, $bridgeRootId, $flag);
                }
            }

            $obj = new PimconnectBridge();
            $obj->object_id = $object_id;
            $obj->sourceParentId = $sourceParentId;
            $obj->bridgeRootId = $bridgeRootId;
            $obj->flag = $flag;
            $message = $obj->runCron();

            if ($message == 1) {
                $returnArray['status'] = true;
                $returnArray['msg'] = "Data Migrated Successfully";
                echo json_encode($returnArray);
            } else {
                $returnArray['status'] = false;
                $returnArray['msg'] = $message;
                echo json_encode($returnArray);
            }
            exit();
        } catch (Exception $e) {
            $returnArray['status'] = false;
            $returnArray['msg'] = $message;
            echo json_encode($returnArray);
            exit();
        }
    }

    /**
     * This function will create the new job
     * @param int $objId
     * @param int $bridgeId
     * @param boolean $check
     */
    public function createJobMaster($objId, $bridgeId = NULL, $check) {

        $model = new \Pimconnect\PimconnectModel();
        $userId = \Pimcore\Tool\Authentication::authenticateSession()->getId();
        $model->killPreviousJobs($objId, $bridgeId);
        if ($bridgeId == NULL && $check == 2) {//case of single connection
            $bridgeId = \Pimcore\Model\Object\AbstractObject::getById($objId);
            $jobId = $this->randomNumber();
            $model->insertConnections($objId, $jobId, $userId, $bridgeId);
        } elseif (($objId == $bridgeId) && $bridgeId != NULL && $check == 2) {// case of bridge
            $parent = \Pimcore\Model\Object\AbstractObject::getById($objId);
            $childs = $parent->getChilds();
            foreach ($childs as $ckey => $child) {
                $jobId = $this->randomNumber();
                $model->insertConnections($child->o_id, $jobId, $userId, $bridgeId);
            }
        }
    }

    /**
     * This function will return the jobId
     * @return string
     */
    public function randomNumber() {
        $size = 5;
        $random_number = '';
        $count = 0;
        while ($count < $size) {
            $random_digit = mt_rand(1, 9);
            $random_number .= $random_digit;
            $count++;
        }
        return $random_number;
    }

    /**
     * This is the primary function which will check if any 
     *  in-progress job exists related to present object
     */
    public function authanticateJobAction() {
        $objectId = $this->getParam('object_id');
        $bridgeId = $this->getParam('bridgeRootId');
//        $returnResp = $this->checkMappingFolder($this->getParam('MappingRecordpath'));
//        if ($returnResp['status'] == false) {
//            echo json_encode($returnResp);
//            exit();
//        }

        $model = new \Pimconnect\PimconnectModel();
        $dataArray = [];
        $resp = $model->checkJobStatus($objectId, $bridgeId);
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $userId = \Pimcore\Tool\Authentication::authenticateSession()->getId();
        
        if (empty($resp)) {// for first time
            if ($bridgeId == $objectId) {//for bridge to run
                $parent = \Pimcore\Model\Object\AbstractObject::getById($bridgeId);
                $childs = $parent->getChilds();
                foreach ($childs as $ckey => $child) {
                    $jobId = $this->randomNumber();
                    $model->insertConnections($child->o_id, $jobId, $userId, $bridgeId);
                }
            } else {// for single connection
                $bridgeId = \Pimcore\Model\Object\AbstractObject::getById($objectId);
                $jobId = $this->randomNumber();
                $model->insertConnections($objectId, $jobId, $userId, $bridgeId->o_parentId);
            }
            $dataArray['status'] = false;
            $dataArray['valid'] = 1;
        } elseif (!empty($resp)) {
            if ($bridgeId == NULL) {//in case of singal connection
                if ($resp[0]['last_updated_time'] != NULL) {
                    if ((strtotime(date('Y-m-d H:i:s')) - strtotime($resp[0]['last_updated_time'])) / $configData->timeout < 60) {
                        $dataArray['status'] = false;
                        $dataArray['msg'] = "This job is already in process";
                    } else {
                        $dataArray['status'] = true;
                    }
                } else {
                    $dataArray['status'] = true;
                }
            } else {//in case of bridge
                foreach ($resp as $vv => $kValue) {
                    if ($kValue['last_updated_time'] != NULL) {
                        if ((strtotime(date('Y-m-d H:i:s')) - strtotime($kValue['last_updated_time'])) / $configData->timeout < 60) {
                            $dataArray['status'] = false;
                            $dataArray['msg'] = "This job is already in process";
                            break;
                        } else {
                            $dataArray['status'] = true;
                        }
                    } else {
                        $dataArray['status'] = true;
                    }
                }
            }
        }
        echo json_encode($dataArray);
        exit();
    }

    /**
     * This function will check if the mapping folder exists or not
     * @return boolean|string
     */
    protected function checkMappingFolder($mappingRecordpathOrg) {
        $returnArray['status'] = false;
        $obj = Object::getByPath($mappingRecordpathOrg);
        if(count($obj) > 0) {
            $returnArray['status'] = true;
            return $returnArray;
        } else {
            $returnArray['msg'] = "Please create mapping folder path '" . $mappingRecordpathOrg."'";
            return $returnArray;
        }
    }

}
