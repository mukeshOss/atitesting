<?php
/**
 * this is the Codeception file which will test all code secnerios
 */
use Pimcore\Model\Object\BridgeConnection;
use Pimcore\Model\Object\BridgeSrcTargetMapping;

/**
 * PimConnectTest Class
 */
class PimConnectTest extends \Codeception\Test\Unit
{

    /**
     *
     * @var \EcommerceFramework\UnitTester
     */
    protected $tester;

    protected $config;

    protected function _before()
    {
        $this->config = new \Zend_Config(array(
            'database' => array(
                'adapter' => "Pdo_Mysql", // Set the Database adapter
                'params' => array(
                    'host' => "127.0.0.1",
                    'dbname' => "pimcoremage",
                    'username' => "root",
                    'password' => "root",
                    'port' => 3306
                )
            )
        ));
    }

    protected function _after()
    {}
    
    /**
     * Function for getting mapping data of bridge 
     */
    public function testgetBridgeConnectionMappingData()
    {
        $class = \PimconnectBridge::class;
        $obj = new PimconnectBridge();
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $obj->object_id = $configData->object_id;
        $result = $obj->getBridgeConnectionMappingData();
        $this->assertNotEmpty($result, "his result is not empty");
        return $result;
    }

    /**
     * Function to execute runCron function of PimconnectBridge
     */
    public function testRunCronSuccess()
    {
        $class = \PimconnectBridge::class;
        $obj = new PimconnectBridge();
        $result = $obj->runCron();
        $this->assertSame(1, $result);
    }

    /**
     * Function to execute UpdateVarient function of PimconnectBridge
     */
    public function testUpdateVariantSuccess()
    {
        $varientObj = new \Pimcore\Model\Object\BridgeSrcTargetMapping();
        $class = \PimconnectBridge::class;
        $obj = new PimconnectBridge();
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $obj->_postUrl = $configData->postUrl;
        $obj->_pimClassName = $configData->pimClassName;
        $obj->_variantJson = $configData->varientJson;
        $obj->_jsonString = $configData->CurlCallPostJsonSuccess;
        $obj->bridgeId = $configData->bridgeId;
        $result = $obj->updateVaraint(14599);
        $this->assertNull($result, "this result is null");
    }

    /**
     * Function to create token from AppTool Class 
     */
    public function testTokenSuccess()
    {
        $class = \Pimconnect\AppTool::class;
        $obj = new \Pimconnect\AppTool();
        $this->assertTrue(class_exists(\Pimconnect\AppTool::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $obj->_postUrl = $configData->postUrl;
        $obj->_username = $configData->username;
        $obj->_password = $configData->password;
        $result = $obj->getToken();
        $this->assertNotEmpty($result, "this result is not empty");
        return $result;
    }

    /**
     * Function to execute the curlPostMagento of AppTool Class
     */
    public function testCurlPostCallMagentoSuccess()
    {
        $class = \PimconnectBridge::class;
        $obj = new PimconnectBridge();
        $this->assertTrue(class_exists(\Pimconnect\AppTool::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $obj->_postUrl = $configData->postUrl;
        $obj->_restUrl = $configData->restUrl;
        $obj->_token = $this->testTokenSuccess();
        $string = $configData->CurlCallPostJsonSuccess;
        $result = $obj->curlPostCallMagento($string, '', '');
        $result = (array) $result;
        $this->assertArrayNotHasKey("message", $result, "this array key does not exist");
    }

    /**
     * Function for execute the negative test of curlPostMagento of Apptool Class
     * 
     */
    public function testCurlPostCallMagentoFailure()
    {
        $class = \PimconnectBridge::class;
        $obj = new PimconnectBridge();
        $this->assertTrue(class_exists(\Pimconnect\AppTool::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $obj->_postUrl = $configData->postUrl;
        $obj->_restUrl = $configData->restUrl;
        $obj->_token = $this->testTokenSuccess();
        $string = $configData->CurlCallPostJsonFailure;
        $result = $obj->curlPostCallMagento($string, '', '');
        $result = (array) $result;
        $this->assertArrayHasKey("message", $result, "this array key does not exist");
    }

    /**
     * Function to execute image and get 
     * format in base64 of Apptool Class
     * 
     */
    public function testformartImageSuccess()
    {
        $images = array();
        $class = \Pimconnect\AppTool::class;
        $obj = new \Pimconnect\AppTool();
        $this->assertTrue(class_exists(\Pimconnect\AppTool::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $images[] = $configData->image;
        $result = $obj->formartImage($images, $counter = '');
        $this->assertArrayHasKey('content', $result[0]);
    }

     /**
     * Function to get negative result of format Image of Apptool Class
     * 
     */
    public function testformartImageFailure()
    {
        $images = array();
        $class = \Pimconnect\AppTool::class;
        $obj = new \Pimconnect\AppTool();
        $this->assertTrue(class_exists(\Pimconnect\AppTool::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $images[] = $configData->image;
        $result = $obj->formartImage($images, $counter = '');
        $this->assertArrayNotHasKey('mohit', $result[0]);
    }

    /**
     * Function to execute getKeywords of AppTool Class
     */
    public function testGetKewordsSuccess()
    {
        $class = \Pimconnect\AppTool::class;
        $obj = new \Pimconnect\AppTool();
        $this->assertTrue(class_exists(\Pimconnect\AppTool::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $data = json_decode($configData->Varient, true);
        $result = $obj->getKewords($data['product']);
        $this->assertArrayHasKey('sku', $result);
    }

    /**
     * Function to get negative result for getKeywords of AppTool Class
     */
    public function testGetKewordsFailure()
    {
        $class = \Pimconnect\AppTool::class;
        $obj = new \Pimconnect\AppTool();
        $this->assertTrue(class_exists(\Pimconnect\AppTool::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $data = json_decode($configData->VarientWithoutSkuName, true);
        $result = $obj->getKewords($data['product']);
        $this->assertArrayNotHasKey('sku', $result);
    }

    /**
     * Function to execute CreateProc of PimconnectModel Class
     */
    public function testCreateProcSuccess()
    {
        $class = \Pimconnect\PimconnectModel::class;
        $obj = new \Pimconnect\PimconnectModel();
        $this->assertTrue(class_exists(\Pimconnect\PimconnectModel::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $obj->sourceParentId = $configData->sourceParentId;
        $obj->_where = $configData->objectId;
        $obj->_proposedDataSet = $configData->proposedDataSet;
        $result = $obj->createProc('10');
        $this->assertNotEmpty($result, "this result is not empty");
        return $result;
    }

    /**
     * Function to execute getObjectVariantData of PimconnectModel Class
     */
    public function testGetObjectVariantDataSuccess()
    {
        $class = \Pimconnect\PimconnectModel::class;
        $obj = new \Pimconnect\PimconnectModel();
        $this->assertTrue(class_exists(\Pimconnect\PimconnectModel::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $obj->_where = $configData->objectId;
        $obj->_pimClassName = $configData->pimClassName;
        $row = $this->testCreateProcSuccess();
        $result = $obj->getObjectVariantData($row);
        $this->assertNotEmpty($result, "this result is not empty");
        return $result[0];
    }

    /**
     * Function to get negative result of getObjectVariantData of PimconnectModel Class
     * 
     */
    public function testGetObjectVariantDataFailure()
    {
        $class = \Pimconnect\PimconnectModel::class;
        $obj = new \Pimconnect\PimconnectModel();
        $this->assertTrue(class_exists(\Pimconnect\PimconnectModel::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configData = $configObj->getConfig();
        $obj->_where = $configData->nonObjectId;
        $obj->_pimClassName = $configData->pimClassName;
        $row = $this->testCreateProcSuccess();
        $result = $obj->getObjectVariantData($row);
        $this->assertEmpty($result, "this result is empty");
    }

    /**
     * Function to execute createJsonForMagento of Apptool Class
     */
    public function testCreateJsonForMagentoSuccess()
    {
        $class = \PimconnectBridge::class;
        $obj = new \PimconnectBridge();
        $this->assertTrue(class_exists(\PimconnectBridge::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configObj = $configObj->getConfig();
        $targetString = '';
        $string = $configObj->CurlCallPostJsonSuccess;
        $obj->_keyword = $configObj->keywords->toArray();
        $obj->_objecttype = $configObj->objectType;
        $result = $obj->createJsonForMagento($string, $targetString, $this->testGetObjectVariantDataSuccess(), $this->testCreateProcSuccess());
        $this->assertNotEmpty($result, "this result is not empty");
    }

    /**
     * Function to get negative result of createJsonForMagento of Apptool Class
     *  
     */
    public function testCreateJsonForMagentoFailure()
    {
        $class = \PimconnectBridge::class;
        $obj = new \PimconnectBridge();
        $this->assertTrue(class_exists(\PimconnectBridge::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configObj = $configObj->getConfig();
        $targetString = '';
        $string = $configObj->CurlCallPostJsonFailure;
        $obj->_keyword = $configObj->keywords->toArray();
        $obj->_objecttype = $configObj->objectType;
        $result = $obj->createJsonForMagento($string, $targetString, $this->testGetObjectVariantDataSuccess(), $this->testCreateProcSuccess());
        $this->assertNotEmpty($result, "this result is not empty");
    }
    
    /** 
     * this function will  call the function manageStructureLocalizedData($value, $record, $brickElements, $lang)
     */
    public function testCreateJsonForMagentoLocalizedData()
    {
        $class = \PimconnectBridge::class;
        $obj = new \PimconnectBridge();
        $this->assertTrue(class_exists(\PimconnectBridge::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configObj = $configObj->getConfig();
        $targetString = '';
        $string = $configObj->CreateJsonForMagentoLocalizedData;
        $obj->_keyword = $configObj->keywordsForLocalizedData->toArray();
        $obj->_objecttype = $configObj->objectType;
        $result = $obj->createJsonForMagento($string, $targetString, $this->testGetObjectVariantDataSuccess(), $this->testCreateProcSuccess());
        $this->assertNotEmpty($result, "this result is not empty");
    }
    
    /** 
     * this function will also call the function manageStructureBrickData($value, $record, $brickElements)
     */
    public function testCreateJsonForMagentoBrickData()
    {
        $class = \PimconnectBridge::class;
        $obj = new \PimconnectBridge();
        $this->assertTrue(class_exists(\PimconnectBridge::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configObj = $configObj->getConfig();
        $targetString = '';
        $string = $configObj->CreateJsonForMagentoBrickData;
        $obj->_keyword = $configObj->keywords->toArray();
        $obj->_objecttype = $configObj->objectType;
        $result = $obj->createJsonForMagento($string, $targetString, $this->testGetObjectVariantDataSuccess(), $this->testCreateProcSuccess());
        $this->assertNotEmpty($result, "this result is not empty");
    }
    
    /** 
     * this function will also call the function manageStructureFieldData($value, $record, $brickElements)
     */
    public function testCreateJsonForMagentoFieldCollection()
    {
        $class = \PimconnectBridge::class;
        $obj = new \PimconnectBridge();
        $this->assertTrue(class_exists(\PimconnectBridge::class));
        $configClass = \Pimconnect\Config::class;
        $configObj = new \Pimconnect\Config();
        $configObj = $configObj->getConfig();
        $targetString = '';
        $string = $configObj->CreateJsonForMagentoBrickData;
        $obj->_keyword = $configObj->keywords->toArray();
        $obj->_objecttype = $configObj->objectType;
        $result = $obj->createJsonForMagento($string, $targetString, $this->testGetObjectVariantDataSuccess(), $this->testCreateProcSuccess());
        $this->assertNotEmpty($result, "this result is not empty");
    }

    /**
     * Function to execute getDataForPimAndMagentoIds of Apptool Class
     */
    public function testGetDataForPimAndMagentoIdsSuccess()
    {
        $class = \PimconnectBridge::class;
        $obj = new \PimconnectBridge();
        $class1 = \Pimconnect\PimconnectModel::class;
        $obj1 = new \Pimconnect\PimconnectModel();
        $configObj = new \Pimconnect\Config();
        $configObj = $configObj->getConfig();
        $obj->_pimClassName = $configObj->pimClassName;
        $obj->_postUrl = $configObj->postUrl;
        $result = $obj->getDataForPimAndMagentoIds(15053);
        $this->assertNotEmpty($result, "this result is not empty");
    }

    /**
     * Function to get negative result of getDataForPimAndMagentoIds of Apptool Class
     * 
     */
    public function testGetDataForPimAndMagentoIdsFailure()
    {
        $class = \PimconnectBridge::class;
        $obj = new \PimconnectBridge();
        $class1 = \Pimconnect\PimconnectModel::class;
        $obj1 = new \Pimconnect\PimconnectModel();
        $configObj = new \Pimconnect\Config();
        $configObj = $configObj->getConfig();
        $obj->_pimClassName = $configObj->pimClassName;
        // $obj->_postUrl = $configObj['postUrl'];
        $result = $obj->getDataForPimAndMagentoIds(15053);
        $this->assertEmpty($result['magentoVariant'], "this result is empty");
    }

    /**
     * Function to execute handleAssetData of Apptool Class
     */
    public function testhandleAssetData()
    {
        $class = \PimconnectBridge::class;
        $obj = new \PimconnectBridge();
        $result = $obj->handleAssetData();
        $this->assertEmpty($result,"This result is empty");
    }
    
    
    
}