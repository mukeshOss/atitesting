<?php
/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @category   Pimcore
 * @package    EcommerceFramework
 * @copyright  Copyright (c) 2009-2016 pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */


namespace Website\OnlineShop\PriceSystem;
use OnlineShop\Framework\PriceSystem\AbstractPriceInfo;
use OnlineShop\Framework\PriceSystem\IPriceInfo;
use OnlineShop\Framework\PriceSystem\IPrice;

/**
 * Class EncompassPriceInfo
 *
 * attribute info for attribute price system
 */
class EncompassPriceInfo extends AbstractPriceInfo implements IPriceInfo {

    /**
     * @var IPrice
     */
    protected $price;

    /**
     * @var IPrice
     */
    protected $totalPrice;


    public function __construct(IPrice $price, $quantity, IPrice $totalPrice) {
        $this->price = $price;
        $this->totalPrice = $totalPrice;
        $this->quantity = $quantity;
    }

    public function getPrice() {
        return $this->price;
    }

    public function getTotalPrice() {
        return $this->totalPrice;
    }

    /**
     * try to delegate all other functions to the product
     *
     * @param $name
     * @param $arguments
     * @return mixed
     */
    public function __call($name, $arguments) {
        return $this->product->$name($arguments);
    }

}
