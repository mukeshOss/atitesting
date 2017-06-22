<?php

/**
 * 
 */

namespace Pimconnect\Model;

/**
 * PimconnectModel Class
 */
class PimMagentoAttrValueModel {

    public $db = '';
    public $table = '';
    
    public function __construct() {
        $this->db = \Pimcore\Resource\Mysql::get();
        $this->table = "tblMagentoAttributeValues";
    }

    /**
     * 
     * @param array $param
     */
    public function insertPimMagentoValue($param) {
        $insertSQL = " INSERT IGNORE INTO $this->table 
            	                     SET attr_id = '" . $param['attr_id'] . "' ,
            	                     attr_set_id = '" . $param['attr_set_id'] . "', 
            	                     attr_label = '" . $param['attr_label'] . "', 
            	                     attr_values = '" . $param['attr_values'] . "',
            	                     bridge_id = '" . $param['bridge_id'] . "'     ";
        $this->db->query($insertSQL);
    }
    
}