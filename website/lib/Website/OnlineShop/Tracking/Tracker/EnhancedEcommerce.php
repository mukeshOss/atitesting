<?php
/**
 * Created by PhpStorm.
 * User: mmoser
 * Date: 23.05.2016
 * Time: 13:18
 */

namespace Website\OnlineShop\Tracking\Tracker;

use Pimcore\Google\Analytics;

class EnhancedEcommerce extends \OnlineShop\Framework\Tracking\Tracker\Analytics\EnhancedEcommerce {

    public function getProductActionData($product, $quantity = 1) {
        $item = $this->getTrackingItemBuilder()->buildProductActionItem($product);
        $item->setQuantity($quantity);

        return $this->transformProductAction($item);
    }
    
}