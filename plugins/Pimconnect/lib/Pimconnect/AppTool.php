<?php
/**
 * this file will prepare all the data for magento
 */
namespace Pimconnect;

use Pimcore\Model\Object\BridgeConnection;

/**
 * AppTool Class
 */
class AppTool
{

    /**
     * For Get Token Curl Call
     *
     * @return mixed
     */
    public function getToken()
    {
        // Authentication rest API magento2.Please change url accordingly your url
        $adminUrl = $this->_postUrl . '/index.php/rest/V1/integration/admin/token';
        $ch = curl_init();
        $data = array(
            "username" => $this->_username,
            "password" => $this->_password
        );
        
        $data_string = json_encode($data);
        $headers = array(
            'Content-type: application/json',
            'Content-Length: ' . strlen($data_string),
            'accept:application/json'
        );
        
        $adapter = new \Zend_Http_Client_Adapter_Curl();
        $config = array(
            'curloptions' => array(
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_RETURNTRANSFER => true
            )
        );
        
        $client = new \Zend_Http_Client($adminUrl, $config);
        $client->setAdapter($adapter);
        $client->setMethod(\Zend_Http_Client::POST);
        $client->setRawData($data_string);
        $client->setHeaders($headers);
        $response = $client->request();
        $this->_token = $token = $response->getRawBody();
        
        return $this->_token;
    }

    /**
     * For POST Curl Call
     */
    public function curlPostCallMagento($myString, $method = '', $requestUrl = '')
    {
        $this->logExecutionTime("Curl Post Magento Start Time " . date("Y-m-d H:i:s"));
        // Use above token into header
        $myString = str_replace(',"##VARIANTKEY##":"##VARIANTJSON##"', " ", $myString);
        
        if (preg_match('#^(\'|").+\1$#', $this->_token) == 1) {
            $this->_token = substr($this->_token, 1, strlen($this->_token) - 2);
        }
        
        $headers = array(
            "Authorization: Bearer $this->_token",
            'Content-Type: application/json',
            'Content-Length: ' . strlen($myString)
        );
        
        if ($requestUrl == '') {
            $requestUrl = $this->_postUrl . '/' . $this->_restUrl;
        }
        
        if ($method == '') {
            $method = 'POST';
        }
        
        $adapter = new \Zend_Http_Client_Adapter_Curl();
        $config = array(
            'curloptions' => array(
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_RETURNTRANSFER => true
            )
        );
        
        $client = new \Zend_Http_Client($requestUrl, $config);
        $client->setAdapter($adapter);
        if ($method == 'POST') {
            $client->setMethod(\Zend_Http_Client::POST);
        } else {
            $client->setMethod(\Zend_Http_Client::PUT);
        }
        
        $client->setRawData($myString);
        $client->setHeaders($headers);
        $response = $client->request();
        $responseData = json_decode($response->getBody());
      
        if (is_object($responseData) && (! isset($responseData->message) || $responseData->message == '') && count($responseData) > 0) {
            $this->saveMapping($responseData, $myString);
            $msg = " POST Response = " . json_encode($responseData);
            $this->logMessage($msg);
        } else {
            
            $msg = " Pimcore ID " . $this->_sourceID;
            $msg .= "\n\n\n Request = " . $myString;
            $msg .= "\n\n\n Response = " . json_encode($responseData);
            $this->logMessage($msg, "pimconnect_error");
        }
        $this->logExecutionTime("Curl Post Magento End Time " . date("Y-m-d H:i:s"));
        return $responseData;
    }

    /**
     * For Escaping
     */
    protected function escapeJsonString($value)
    {
        $escapers = array(
            "\\",
            "/",
            "\"",
            "\n",
            "\r",
            "\t",
            "\x08",
            "\x0c"
        );
        $replacements = array(
            "\\\\",
            "\\/",
            "\\\"",
            "\\n",
            "\\r",
            "\\t",
            "\\f",
            "\\b"
        );
        $result = str_replace($escapers, $replacements, $value);
        return $result;
    }

    /**
     * Function to return Gallery JSON for Product
     */
    public function formartImage($images, $counter = '')
    {
        $iterator = 0;
        if (! empty($counter)) {
            $iterator = $counter;
        }
        
        foreach ($images as $image) {
            $entries[] = [
                'position' => $iterator,
                'media_type' => 'image',
                'disabled' => false,
                'types' => [
                    'image',
                    'small_image',
                    'thumbnail'
                ],
                'content' => [
                    'type' => mime_content_type($image),
                    'name' => pathinfo($image, PATHINFO_FILENAME) . '.' . pathinfo($image, PATHINFO_EXTENSION),
                    'base64_encoded_data' => base64_encode(file_get_contents($image))
                ]
            ];
            $iterator ++;
            // break;
        }
        return $entries;
    }

    /**
     * Function to find all the place holder in Template
     *
     * @return key
     */
    public function getKewords($v)
    {
        if (is_array($v)) {
            return array_map(array(
                $this,
                'getKewords'
            ), $v);
        } else {
            preg_match_all('/##(.*?)##/', $v, $result, PREG_PATTERN_ORDER);
            if (count($result[1]) > 0) {
                $this->_keyword[] = $result[1][0];
            }
        }
        return ($v);
    }

    /**
     * For Managing Pimcore Structered Data
     *
     * @param Array $value            
     * @param Record $record            
     * @return multitype:NULL string
     */
    public function manageStructureData($value, $record)
    {
        preg_match_all('/{(.*?)}/', $value[2], $brickElements, PREG_PATTERN_ORDER);
        $collectionData = array();
        $strutureDataType = $value['1'];
        
        $lang = '';
        if (isset($value['3']) && $value['3'] != '') {
            $lang = $value['3'];
        }
        
        if ($strutureDataType == 'localizedfields') { // For Localized Fields Only
            $collectionData = $this->manageStructureLocalizedData($value, $record, $brickElements, $lang);
        } else {
            if ($strutureDataType == 'bricks') { // For Bricks
                $collectionData = $this->manageStructureBrickData($value, $record, $brickElements);
            } else 
                if ($strutureDataType == 'fieldcollection') { // For Collection
                    $collectionData = $this->manageStructureFieldData($value, $record, $brickElements);
                }
        }
        if (is_array($collectionData) && array_key_exists('images', $collectionData)) {
            $this->_imagesArray = $collectionData['images'];
        }
        
        if (is_array($collectionData['others'])) {
            $collectionData['others'] = implode($collectionData['others'], ' ');
            
            if (isset($value[4]) && $value[4] == 'variant') { // Field Collection / Bricks etc
                $attr_value_code = $collectionData['others'];
                if ($attr_value_code != '') {
                    $collectionData['others'] = $this->getMagentoAttrValue($value[5], $record, $attr_value_code);
                }
            }
        }
        
        return $collectionData;
    }

    /**
     * Function to manage Localized Data
     *
     * @param array $value            
     * @param array $record            
     * @param array $brickElements            
     */
    public function manageStructureLocalizedData($value, $record, $brickElements, $lang)
    {
        $LocalizedData = explode(",", $brickElements[1][0]);
        
        foreach ($LocalizedData as $key => $val) {
            
            $element = '';
            $element = 'get' . $val;
            
            if (method_exists($record->{$element}($lang), 'getType') && $record->{$element}($lang)->getType() == 'image') {
                $collectionData['images'][] = PIMCORE_ASSET_DIRECTORY . $record->{$element}($lang)->getPath() . $record->{$element}($lang)->getFilename();
            } else {
                
                if ($this->_objecttype == 'variant' && method_exists($record, 'getItems') && $record->getItems()[0]->{$element}() == '') {
                    $collectionData['others'][] = $record->getParent()->getItems()[0]->{$element}();
                } else {
                    $collectionData['others'] = $record->{$element}($lang);
                }
            }
        }
        
        return $collectionData;
    }

    /**
     * Function to manage Brick Data
     *
     * @param array $value            
     * @param array $record            
     * @param array $brickElements            
     */
    public function manageStructureBrickData($value, $record, $brickElements)
    {
        
        $field = 'get' . ucfirst($value[0]);
        $myData = $record->{$field}();
        if (count($myData) > 0) {
            $fieldCollectionElements = explode(',', $brickElements[1][0]);
           
            foreach ($fieldCollectionElements as $key => $val) {
                $element = '';
                $element = 'get' . ucfirst($val);
                
                if (count($myData->getItems()) > 0) {
                    if (method_exists($myData->getItems()[0]->{$element}(), 'getType') && $myData->getItems()[0]->{$element}()->getType() == 'image') {
                        $collectionData['images'][] = PIMCORE_ASSET_DIRECTORY . $myData->getItems()[0]->{$element}()->getPath() . $myData->getItems()[0]->{$element}()->getFilename();
                    } else {
                        if ($this->_objecttype == 'variant' && $myData->getItems()[0]->{$element}() == '') {
                            $collectionData['others'][] = $record->getParent()
                                ->{$field}()
                                ->getItems()[0]->{$element}();
                        } else {
                            $collectionData['others'][] = $myData->getItems()[0]->{$element}();
                        }
                    }
                }
            }
        }
        
        return $collectionData;
    }

    /**
     * Function to manage Field Collection Data
     *
     * @param array $value            
     * @param Object $record            
     * @param array $brickElements            
     * @return return array
     */
    public function manageStructureFieldData($value, $record, $brickElements)
    {
        $field = 'get' . ucfirst($value[0]);
        $myData = $record->{$field}();
        $collectionKeys = [
            0
        ];
        if (isset($value[3])) {
            $collectionKeys = $value[3];
            $collectionKeys = explode(',', $collectionKeys);
        }
        if (count($myData) > 0) {
            $fieldCollectionElements = explode(',', $brickElements[1][0]);
            foreach ($fieldCollectionElements as $key => $val) {
                $element = '';
                $element = 'get' . ucfirst($val);
                foreach ($collectionKeys as $cKey => $collectionKeyVal) {
                    if (isset($myData->getItems()[$cKey])) {
                        if (method_exists($myData->getItems()[$cKey]->{$element}(), 'getType') && $myData->getItems()[$cKey]->{$element}()->getType() == 'image') {
                            $collectionData['images'][] = PIMCORE_ASSET_DIRECTORY . $myData->getItems()[$cKey]->{$element}()->getPath() . $myData->getItems()[$cKey]->{$element}()->getFilename();
                        } else {
                            if ($this->_objecttype == 'variant' && $myData->getItems()[$cKey]->{$element}() == '') {
                                $collectionData['others'][] = $record->getParent()
                                    ->{$field}()
                                    ->getItems()[$cKey]->{$element}();
                            } else {
                                $collectionData['others'][] = $myData->getItems()[$cKey]->{$element}();
                            }
                        }
                    }
                }
                unset($element);
            }
        } else {
            $collectionData['images'] = "";
        }
        
        return $collectionData;
    }

    /**
     * This function is used to get Object type values for the supplied keywords
     *
     * @param array $objectsElements            
     * @param array $record            
     */
    public function manageObjectsData($objectsElements, $record)
    {
        preg_match_all('/{(.*?)}/', $objectsElements[2], $objectData, PREG_PATTERN_ORDER);
        $objectData = explode(",", $objectData[1][0]);
        $objectField = get . ucfirst($objectsElements[0]);
        $returnData = array();
        foreach ($objectData as $key => $val) {
            $element = '';
            $element = get . $val;
            if (count($record->{$objectField}()) > 0) {
                $returnData[] = $record->{$objectField}()[$key]->{$element}();
            } else {
                $returnData[] = $record->getParent()->{$objectField}()[$key]->{$element}();
            }
        }
        $returnData = implode($returnData, ' ');
        return $returnData;
    }

    /**
     * This function is used to get Target ID on the basis of Keyword
     *
     * @param array $value            
     * @param array $record            
     * @return return JSON
     */
    public function manageData($value, $record, $myString = '')
    {
        $field = 'get' . ucfirst($value[0]);
        $fieldValue = '';
        $fieldValue = $record->{$field}();
        
        if (is_array($fieldValue)) {
            $linkedIdString = '';
            foreach ($fieldValue as $k => $v) {
                $sourceId = $record->{$field}()[$k]->getId();
                $targetId = $this->getTargetId($sourceId);
                if ($linkedIdString == '') {
                    $linkedIdString = $targetId;
                } else {
                    $linkedIdString .= ',' . $targetId;
                }
            } // END OF FOR
        }
        $linkedIdString = explode(",", $linkedIdString);
        $linkedIdString = json_encode($linkedIdString);
        return $linkedIdString;
    }

    /**
     * Function replace all the keywords to prepare JSON String
     *
     * @return return JSON
     */
    public function createJsonForMagento($myString, $targetString, $record, $row)
    {
        $this->logExecutionTime("Create Json For Magento Start Time " . date("Y-m-d H:i:s"));
        foreach ($this->_keyword as $key => $val) {
            
            $value = explode(":", $val);
            
            if (count($value) > 1) {
                switch ($value[1]) {
                    case 'localizedfields':
                    case 'fieldcollection':
                    case 'bricks':
                        $structureData = $this->manageStructureData($value, $record);
                        
                        if(isset($structureData['images'])){
                        if (! empty($structureData['images'])) { // For Handling Only Image Data
                            $this->_onlyImagesArrayVar = $structureData['images'];
                            $base64Image = $this->formartImage($structureData['images']);
                            $targetString = json_encode(array(
                                'entry' => $base64Image[0]
                            ));
                            $myString = str_replace("\"##" . $val . "##\"", $targetString, $myString);
                        } else 
                            if (empty($structureData['images'] && isset($value[4]) && $value[4] == 'image')) {
                                $myString = str_replace("##" . $val . "##", '', $myString);
                            }
                        }
                        
                        if (! empty($structureData['others']) && isset($structureData['others'])) { // For Handling All data other than Images
                            $targetString = trim($this->escapeJsonString($structureData['others'])); // $targetString = $structureData['others'];
                            $myString = str_replace("##" . $val . "##", $targetString, $myString);
                            
                        } else {
                            $myString = str_replace("##" . $val . "##", '', $myString);
                        }
                        break;
                    case 'image':
                        
                        $imageValue = explode(",", $value[0]);
                        $tmpImage = array();
                        foreach ($imageValue as $kk => $vv) {
                            $field = 'get' . ucfirst($vv);
                            $tmpImage[] = PIMCORE_ASSET_DIRECTORY . $record->{$field}();
                            $this->_onlyImagesArray = $tmpImage;
                            $base64Image = $this->formartImage($tmpImage);
                            $targetString = json_encode(array(
                                'entry' => $base64Image[0]
                            ));
                            $myString = str_replace("\"##" . $val . "##\"", $targetString, $myString);
                        }
                        $this->_onlyImagesArrayVar = $tmpImage;
                        break;
                    case 'objects':
                        if (count($value) > 2) { // Handling ##images:objects:{fieldname}##
                            $targetString = $this->manageObjectsData($value, $record);
                            $myString = str_replace("##" . $val . "##", $targetString, $myString);
                            break;
                        } else { // For handling values like "12,13,15"
                            $targetString = $this->manageData($value, $record, $myString);
                            $myString = str_replace("\"##" . $val . "##\"", $targetString, $myString);
                            break;
                        }
                    case 'multihref':
                        $linkedId = $this->manageData($value, $record, $myString);
                        $myString = str_replace("\"##" . $val . "##\"", $linkedId, $myString);
                        break;
                    case 'variant':
                        $field = 'get' . ucfirst($value[0]);
                        $attr_value_code = $record->{$field}();
                        if (is_array($attr_value_code)) {
                            $attr_value_code = $attr_value_code[0];
                        }
                        $magentoValue = $this->getMagentoAttrValue($value[0], $record, $attr_value_code);
                        $myString = str_replace("\"##" . $val . "##\"", $magentoValue, $myString);
                        break;
                }
            } else {
                $field = 'get' . ucfirst($val);
                
                if (strtolower($val) == 'parentid') {
                    $sourceId = $record->{$field}();
                    $targetId = $this->getTargetId($sourceId);
                    $targetString = $this->_parentID;
                    if ($targetId > 0) { // IF Target ID Exist
                        $targetString = $targetId;
                    }
                } else 
                    if (strtolower($val) == 'producttype') {
                        $targetString = 'configurable';
                        if ($row['objectType'] == 'variant') {
                            $targetString = 'simple';
                        }
                    } else {
                        $valueToBeReplaced = $record->{$field}();
                        if ($this->_objecttype == 'variant' && $record->{$field}() == '') {
                            
                            if ($record->getParent()
                                ->getParent()
                                ->getType() == 'object') {
                                $valueToBeReplaced = $record->getParent()
                                    ->getParent()
                                    ->{$field}();
                            } else {
                                $valueToBeReplaced = $record->getParent()->{$field}();
                            }
                        }
                        
                        if ($val == 'key' && $record->getType() == 'variant') {
                            $valueToBeReplaced = $this->getSkuID($field, $val, $record);
                        }
                        $targetString = trim($this->escapeJsonString($valueToBeReplaced));
                    }
                $myString = str_replace("##" . $val . "##", $targetString, $myString);
            }
            // }
        } // End Of For
        $this->logExecutionTime("Create Json For Magento End Time " . date("Y-m-d H:i:s")); 
        return $myString;
    }

    public function getSkuID($field, $val, $record)
    {
        if ($record->getType() == 'variant' && empty($record->{$field}())) {
            $valueToBeReplaced = /* $record->getParent()->getKey() . '-' . */ $record->getParent()->{$field}();
        } else {
            $valueToBeReplaced = /* $record->getParent()->getKey() . '-' . */ $record->{$field}();
        }
        return $valueToBeReplaced;
    }

    /**
     * Function to replace Magento Related keywords at the time of varaint creation
     *
     * @param
     *            Object Array $record
     * @param
     *            JSON String $myString
     * @return mixed
     */
    public function mangaeKeywordForMagento($record, $myString)
    {
        $this->logExecutionTime("Manage Keyword For Magento Start Time " . date("Y-m-d H:i:s"));
        $resultData = array();
        $myData = array();
        
        foreach ($this->_keyword as $key => $value) {
            $val = explode("::", $value);
            
            if (count($val) <= 1) {
                foreach ($val as $kk => $vv) {
                    $vv = explode(',', $vv);
                    foreach ($vv as $k => $v) {
                        $myValue = explode(":", $v);
                        if ($myValue[0] == 'magento') {
                            if (count($myValue) > 4) {
                                $resultData[$value] = $this->getMagentoData($myValue, 1);
                            } else {
                                if (key_exists($value, $resultData)) {
                                    $resultData[$value] = $resultData[$value] . ',' . $this->getMagentoData($myValue);
                                } else {
                                    $resultData[$value] = $this->getMagentoData($myValue);
                                }
                            }
                        } else {
                            $result = $this->getValueForVariant($val[0], $record);
                            $resultData[$val[0]] = $result;
                        }
                    }
                }
            } else {
                
                $kVal = explode(',', $val[0]);
                $vVal = explode(',', $val[1]);
                
                foreach ($vVal as $k => $v) {
                    foreach ($kVal as $vv => $kk) {
                        
                        $pimcoreValue = $this->getValueForVariant($kk, $record);
                        if (is_array($pimcoreValue)) {
                            $pimcoreValue = $pimcoreValue[0];
                        }
                        $pimcoreValue = $this->getMagentoAttrValue($kk, $record, $pimcoreValue);
                        $myValue = explode(":", $v);
                        $tmpValue = $this->getMagentoData($myValue, 1, $pimcoreValue);
                        
                        if (! empty($tmpValue)) {
                            $resultData[$value][] = $tmpValue;
                        }
                    }
                }
                if (is_array($resultData[$value])) {
                    $resultData[$value] = implode($resultData[$value], ',');
                }
            }
        }
        $this->logExecutionTime("Manage Keyword For Magento End Time " . date("Y-m-d H:i:s"));
        return $resultData;
    }

    /**
     * Function to replace all the keywords related to Variant
     *
     * @param unknown $valueRecord            
     * @param unknown $record            
     * @return string
     */
    protected function getValueForVariant($valueRecord, $record, $myString = '')
    {
        $val = $valueRecord;
        $value = explode(":", $val);
        
        if (count($value) >= 1) {
            switch ($value[1]) {
                case 'localizedfields':
                case 'fieldcollection':
                case 'bricks':
                    $structureData = $this->manageStructureData($value, $record);
                    $this->_onlyImagesArray = $structureData;
                    
                    if (! empty($structureData['images'])) { // For Handling Only Image Data
                        $base64Image = $this->formartImage($structureData['images']);
                        $targetString = json_encode(array(
                            'entry' => $base64Image[0]
                        ));
                    }
                    if (! empty($structureData['others'])) { // For Handling All data other than Images
                        $targetString = $structureData['others'];
                    }
                    break;
                case 'image':
                    $field = 'get' . ucfirst($value[0]);
                    $tmpImage = array();
                    $tmpImage[] = PIMCORE_ASSET_DIRECTORY . $record->{$field}();
                    $base64Image = $this->formartImage($tmpImage);
                    $targetString = json_encode(array(
                        'entry' => $base64Image[0]
                    ));
                    break;
                case 'objects':
                    if (count($value) > 2) { // Handling ##images:objects:{fieldname}##
                        $targetString = $this->manageObjectsData($value, $record);
                        break;
                    } else { // For handling values like "12,13,15"
                        $targetString = $this->manageData($value, $record, $myString);
                        break;
                    }
                case 'multihref':
                    $targetString = $this->manageData($value, $record, $myString);
                    break;
                
                default:
                    $field = 'get' . ucfirst($val);
                    $targetString = $record->{$field}();
            }
        }
        
        return $targetString;
    }

    /**
     * function takes Object ID as a input parameter and return all object and it's sub objects and variant along with
     *
     * @param Object $id            
     * @return array of Pimcore Object ID and Magento Target ID
     */
    public function getDataForPimAndMagentoIds($id)
    {
        $this->logExecutionTime("Data For Pim And Magento Start Time " . date("Y-m-d H:i:s"));
        // Fetching all Childs of a Object till 3 level
        $childs = $this->getAllChilds($id);
        $magentoVariant = $sourceVariant = '';
        $tmpId = array();
        
        foreach ($childs as $key => $child) {
            if ($child->getType() == 'object' || $child->getType() == 'variant') {
                $childsx = $this->getAllChilds($child->getId());
                foreach ($childsx as $keyx => $childx) {
                    $sourceVariant .= $childx->getId() . ",";
                }
                $sourceVariant .= $child->getId() . ',';
            }
        }
        $sourceVariant = substr($sourceVariant, 0, strlen($sourceVariant) - 1);
        
        $sourceVariantArray = explode(',', $sourceVariant);
        
        foreach ($sourceVariantArray as $tt) {
            
            if ($magentoVariant == '') {
                $magentoVariant = $this->getTargetId($tt);
            } else {
                $magentoVariant .= ',' . $this->getTargetId($tt);
            }
        }
        
        $magentoVariant = explode(',', $magentoVariant);
        $magentoVariant = array_unique($magentoVariant);
        
        $remove = array(
            0
        );
        $magentoVariant = array_diff($magentoVariant, $remove);
        $magentoVariant = implode(',', $magentoVariant);
        
        $result = array();
        $result['magentoVariant'] = $magentoVariant;
        $result['sourceVariant'] = $sourceVariant;
        $this->logExecutionTime("Get Data For Pim And Magento End Time " . date("Y-m-d H:i:s"));
        return $result;
    }

    /**
     * Function to Upload Images at Magento End
     */
    public function handleAssetData()
    {
        $this->logExecutionTime("Handle Asset Data  Start Time " . date("Y-m-d H:i:s"));
        $counter = 1;
        foreach ($this->_onlyImagesArrayVar as $imgVal) {
            $base64Image = $this->formartImage(array(
                $imgVal
            ), $counter);
            $myImageString = json_encode(array(
                'entry' => $base64Image[0]
            ));
            $this->curlPostCallMagento($myImageString, 'POST', $this->_requestURL);
            $counter ++;
        }
        $this->logExecutionTime("Handle Asset Data End Time " . date("Y-m-d H:i:s"));
    }

    /**
     * Function to Upload Images at Magento End
     */
    protected function logMessage($message, $name = 'PimconnectLog')
    {
        \Pimcore\Log\Simple::log($name . date('Y-m-d'), $message);
    }

    /**
     * Function to Generate a log File
     */
    public function logExecutionTime($message)
    {
        \Pimcore\Log\Simple::log("PimconnectTimeLog" . date('Y-m-d'), $message . "\n");
    }
}
