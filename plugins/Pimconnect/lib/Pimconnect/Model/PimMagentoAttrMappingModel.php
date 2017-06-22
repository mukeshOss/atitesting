<?php

/**
 * 
 */

namespace Pimconnect\Model;

/**
 * PimconnectModel Class
 */
class PimMagentoAttrMappingModel {

    public $db = '';
    public $table = '';
    
    public function __construct() {
        $this->db = \Pimcore\Resource\Mysql::get();
        $this->table = "tblPimMagentoAttributesMapping";
    }
    
    public function insertPimMagentoMappings($param) {
        $insertSQL = "INSERT IGNORE INTO $this->table  
        	                          SET attr_set_id = '" . $param['attr_set_id']."' ,
        	                          attr_id = '" . $param['attr_id']. "', 
        	                          attr_code = '" . $param['attr_code'] . "', 
        	                          attr_type = '" . $param['attr_type'] . "',
        	                          is_required = '" . $param['is_required'] . "',
        	                          bridge_id = '" . $param['bridge_id'] . "'";

        $this->db->query($insertSQL);
    }
    
}
