<?php
namespace Website\OnlineShop\IndexService\Tenant\Config;

class MyOptimizedMysql extends \OnlineShop\Framework\IndexService\Config\OptimizedMysql {

    /**
     * @return string
     */
    public function getTablename() {
        return "plugin_onlineshop_optimized_productindex";
    }

    /**
     * @return string
     */
    public function getRelationTablename() {
        return "plugin_onlineshop_optimized_productindex_relations";
    }

    public function createMockupObject($objectId, $data, $relations) {
        return new \Website\Product\Mockup($objectId, $data, $relations);
    }


}