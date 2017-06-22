<?php
/**
 * Created by PhpStorm.
 * User: mmoser
 * Date: 23.05.2016
 * Time: 11:05
 */

namespace Website\OnlineShop\Tracking;

use OnlineShop\Framework\Model\AbstractOrder;
use OnlineShop\Framework\Model\ICheckoutable;
use OnlineShop\Framework\Model\IProduct;
use OnlineShop\Framework\Tracking\ProductAction;
use Pimcore\Model\Object\AbstractObject;
use Pimcore\Model\Object\ProductCategory;

class TrackingItemBuilder extends \OnlineShop\Framework\Tracking\TrackingItemBuilder {
    public function buildProductViewItem(IProduct $product)
    {
        $item = parent::buildProductViewItem($product);

        $item->setId($product->getOSProductNumber());

        return $item;
    }

    private static $impressionPosition = 0;
    public function buildProductImpressionItem(IProduct $product)
    {
        $item = parent::buildProductImpressionItem($product);

        $item->setId($product->getOSProductNumber());

        $item->setList($this->getImpressionListName());

        self::$impressionPosition++;
        $item->setPosition(self::$impressionPosition);

        return $item;
    }

    /**
     * Get Product Impression list name.
     * i.e.: shop - list, shop - search
     * @return string
     */
    protected function getImpressionListName()
    {
        return \Zend_Controller_Front::getInstance()->getRequest()->getControllerName() . ' - '
        . \Zend_Controller_Front::getInstance()->getRequest()->getActionName();

    }

    /**
     *
     * Build a product action item
     *
     * @param IProduct $product
     * @param int $quantity
     * @return ProductAction
     */
    public function buildProductActionItem(IProduct $product, $quantity = 1) {
        $item = new ProductAction();
        $item
            ->setId($product->getOSProductNumber())
            ->setName($this->normalizeName($product->getOSName()))
            ->setCategories($this->getProductCategories($product))
            ->setQuantity($quantity);

        // set price if product is ready to check out
        if ($product instanceof ICheckoutable) {
            $item->setPrice($product->getOSPrice()->getAmount());
        }

        return $item;
    }

    /**
     * Build checkout items
     *
     * @param AbstractOrder $order
     * @return ProductAction[]
     */
    public function buildCheckoutItems(AbstractOrder $order)
    {
        $items = (array)parent::buildCheckoutItems($order);

        return $items;
    }

    /**
     * Get order shipping
     *
     * @param AbstractOrder $order
     * @return float
     */
    protected function getOrderShipping(AbstractOrder $order)
    {
        $shipping = 0;

        // calculate shipping
        $modifications = $order->getPriceModifications();
        if ($modifications) {
            foreach ($modifications as $modification) {
                if ($modification->getName() === 'shipping') {
                    $shipping += $modification->getAmount();
                }
            }
        }


        return $shipping;
    }

    /**
     * Get a product's categories
     *
     * @param IProduct $product
     * @param bool|false $first
     * @return array
     */
    protected function getProductCategories(IProduct $product, $first = false)
    {
        $resultCategories = [];

        if ($categories = $product->getCategories()) {

                $names = [];

                foreach($categories as $category) {
                    if(!$category instanceof ProductCategory) {
                        break;
                    }

                    $names[] = $category->getName();
                }

                if(sizeof($names)) {
                    $resultCategories[] = implode('/', array_reverse($names));
                }

        }

        return $resultCategories;
    }
}