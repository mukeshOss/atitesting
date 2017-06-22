<?php
/**
 * Created by PhpStorm.
 * User: mmoser
 * Date: 23.05.2016
 * Time: 13:25
 */

namespace Website\OnlineShop\Tracking;

use Website\OnlineShop\Tracking\Tracker\EnhancedEcommerce;

class TrackingManager extends \OnlineShop\Framework\Tracking\TrackingManager {

    public function getEnhancedEcommerceTracker() {
        foreach($this->trackers as $tracker) {
            if($tracker instanceof EnhancedEcommerce) {
                return $tracker;
            }
        }
    }
}