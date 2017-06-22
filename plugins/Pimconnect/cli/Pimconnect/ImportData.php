<?php

namespace Pimconnect;

/**
 * ImportData Class
 */
class ImportData extends PimconnectModel {

    protected $_token = '';
    public $baseURL = '';
    protected $_tokenURL = 'index.php/rest/V1/integration/admin/token';
    public $_username = '';
    public $_password = '';
    protected $_headers = '';
    protected $_attrSetURL = 'index.php/rest/V1/products/attribute-sets/sets/list?searchCriteria=0';
    protected $_attrURL = 'index.php/rest/V1/products/attribute-sets/##attr_set_id##/attributes';
    public $attrSetId = '19';
    public $db = '';
    public $bridgeId = '';

    public function __construct() {
        $this->getDBConnection();
    }

    /**
     * Function to empty the database tables
     */
    public function emptyTable() {
        $this->getDBConnection();
        $this->db->query("TRUNCATE TABLE tblMagentoAttributesSets");
        $this->db->query("TRUNCATE TABLE tblPimMagentoAttributesMapping");
        $this->db->query("TRUNCATE TABLE tblMagentoAttributeValues");
    }

    /**
     * Function to set the token
     */
    public function getToken() {
        // Authentication rest API magento2.Please change url accordingly your url
        $tokenURL = $this->baseURL . "/" . $this->_tokenURL;

        $data = array(
            "username" => $this->_username,
            "password" => $this->_password
        );
        $token = $this->getPostCall($data, $tokenURL);
        $this->_token = $token;
    }

    /**
     * Function to return the token from curl call
     * 
     * @param array $data
     * @param string $url
     * @return mixed
     */
    public function getPostCall($data, $url) {
        $ch = curl_init();
        
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
        
        $client = new \Zend_Http_Client($url, $config);
        $client->setAdapter($adapter);
        $client->setMethod(\Zend_Http_Client::POST);
        $client->setRawData($data_string);
        $client->setHeaders($headers);
        $response = $client->request();
        $result = $response->getRawBody();
        $result = str_replace('"', "", $result);
         return $result;
    }

    /**
     * Function for GET curl call
     * 
     * @param string $url
     * @return  mixed
     */
    public function getGetCall($url) {
           $ch = curl_init();
     
        $adapter = new \Zend_Http_Client_Adapter_Curl();
        $config = array(
            'curloptions' => array(
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_RETURNTRANSFER => true
            )
        );
        
        $client = new \Zend_Http_Client($url, $config);
        $client->setAdapter($adapter);
        $client->setMethod(\Zend_Http_Client::GET);
        $client->setHeaders($this->_headers);
        $response = $client->request();
        $responseData = json_decode($response->getRawBody());
        return $responseData;
    }

    /**
     * Function to delete all records for bridge
     */
    public function deleteRecordForBridge() {
        $this->db->query(
                "Delete  from  tblPimMagentoAttributesMapping 
            Where bridge_id =" . $this->bridgeId
        );
        $this->db->query(
                "Delete  from  tblMagentoAttributeValues 
            Where bridge_id =" . $this->bridgeId
        );
        $this->db->query(
                "Delete  from  tblMagentoAttributesSets 
            Where bridge_id =" . $this->bridgeId
        );
    }

    /**
     * Function to import the data from magento
     */
    public function importData() {
        $this->getToken();

        $headers = array(
            "Authorization: Bearer $this->_token",
            'Content-Type: application/json'
        );

        $this->_headers = $headers;
        $requestUrl = trim($this->baseURL . "/" . $this->_attrSetURL);
        $responseData = $this->getGetCall($requestUrl);
        
        // Delete Bridge Specific Records
        $this->deleteRecordForBridge();
        // Delete Bridge Specific Records

        if (count($responseData->items) > 0) {
            $magentoObj = new Model\MagentoAttributesSetsModel();
            $magentoObj->saveImportMagentoAttrSet(
                    $responseData->items, $this->bridgeId
            );
        }
        
        $requestUrl = trim($this->baseURL . "/" . $this->_attrURL);

        $requestUrl = str_replace('##attr_set_id##', $this->attrSetId, $requestUrl);

        $responseData = $this->getGetCall($requestUrl);
        
        $pimMagentObj = new Model\PimMagentoAttrMappingModel();
        $pimMagentoVal = new Model\PimMagentoAttrValueModel();
        
        foreach ($responseData as $k => $v) {
            $pimMagentObj->insertPimMagentoMappings([
                'attr_set_id' => $this->attrSetId,
                'attr_id' => $v->attribute_id, 
                'attr_code' => $v->attribute_code, 
                'attr_type' => $v->frontend_input,
                'is_required' => $v->is_required,
                'bridge_id' => $this->bridgeId
            ]);
            
            if (count($v->options) > 0) {
                foreach ($v->options as $vKkey => $vData) {
                    $pimMagentoVal->insertPimMagentoValue([
                                'attr_id' => $v->attribute_id,
                                'attr_set_id' => $attr_set_id, 
                                'attr_label' => strtolower($vData->label), 
                                'attr_values' => $vData->value,
                                'bridge_id' => $this->bridgeId     
                            ]);
                }
            }
        }
    }

    

}
