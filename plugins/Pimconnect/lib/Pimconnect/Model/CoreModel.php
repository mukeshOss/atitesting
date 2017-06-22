<?php

/**
 * 
 */

namespace Pimconnect\Model;
class CoreModel {

    public $db = '';
    public $table;
    
    public function __construct() {
        $this->db = \Pimcore\Resource\Mysql::get();
        $this->table = 'objects';
    }
    
    function getObjectData($column='', $where='') {
        
        $select = "SELECT 
                        $column
                    from
                        $this->table";
        if($where!='') {
            $select .= " where $where";
        }
        $resultData = $this->db->fetchAll($select);
        return $resultData;
    }
    
    

    

    
}
