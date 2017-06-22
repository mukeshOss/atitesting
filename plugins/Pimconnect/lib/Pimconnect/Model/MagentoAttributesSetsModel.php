<?php

/**
 * 
 */

namespace Pimconnect\Model;

//use Pimcore\Model\Object\BridgeConnection;
//use Pimcore\Model\Object\BridgeSrcTargetMapping;

/**
 * PimconnectModel Class
 */
class MagentoAttributesSetsModel {

    public $db = '';
    public $table = '';
    
    public function __construct() {
        $this->db = \Pimcore\Resource\Mysql::get();
        $this->table = "tblMagentoAttributesSets";
    }
    
    public function getMagentoAttributeSets($objectId) {
        
        $select = "select 
                        bridge_id, attribute_set_id
                    from
                        $this->table
                    Where
                        bridge_id = '" . $objectId . "'";
        
        $resultData = $this->db->fetchAll($select);
        return $resultData;
    }
    
    /**
     * Function to save the imported data from magento
     * 
     * @param array $data
     * @param string $table
     */
    public function saveImportMagentoAttrSet($data, $bridgeId) {
        foreach ($data as $key => $val) {
            $insertSql = " INSERT IGNORE INTO $this->table  
        	               SET attribute_set_id = '" . $val->attribute_set_id . "',
	                            attribute_set_name = '" . $val->attribute_set_name . "',
	                            entity_type_id = '" . $val->entity_type_id . "',
	                            bridge_id = '" . $bridgeId . "'     
	                           ";
            $this->db->query($insertSql);
        }
    }
    

    
}
