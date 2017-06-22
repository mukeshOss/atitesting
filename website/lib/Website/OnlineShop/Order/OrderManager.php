<?php
namespace Website\OnlineShop\Order;

use OnlineShop\Framework\CartManager\ICart;
use OnlineShop\Framework\Exception\InvalidConfigException;
use OnlineShop\Framework\Model\AbstractOrder;

class OrderManager extends \OnlineShop\Framework\OrderManager\OrderManager {

    /**
     * @param ICart $cart
     * @param AbstractOrder $order
     * @return AbstractOrder
     * @throws InvalidConfigException
     */
    public function applyCustomCheckoutDataToOrder(\OnlineShop\Framework\CartManager\ICart $cart, \OnlineShop\Framework\Model\AbstractOrder $order)
    {
        $order = parent::applyCustomCheckoutDataToOrder($cart, $order);

        /* @var OnlineShop_Framework_AbstractOrder $order*/

        $checkout = \OnlineShop\Framework\Factory::getInstance()->getCheckoutManager( $cart );
        $deliveryAddress = $checkout->getCheckoutStep('deliveryaddress')->getData();

        // insert delivery address
        $order->setCustomerFirstname( $deliveryAddress->firstname );
        $order->setCustomerLastname( $deliveryAddress->lastname );
        $order->setCustomerCompany( $deliveryAddress->company );
        $order->setCustomerStreet( $deliveryAddress->address );
        $order->setCustomerZip( $deliveryAddress->zip );
        $order->setCustomerCity( $deliveryAddress->city );
        $order->setCustomerCountry( $deliveryAddress->country );
        $order->setCustomerEmail( $deliveryAddress->email );

        // insert delivery address
        $order->setDeliveryFirstname( $deliveryAddress->firstname );
        $order->setDeliveryLastname( $deliveryAddress->lastname );
        $order->setDeliveryCompany( $deliveryAddress->company );
        $order->setDeliveryStreet( $deliveryAddress->address );
        $order->setDeliveryZip( $deliveryAddress->zip );
        $order->setDeliveryCity( $deliveryAddress->city );
        $order->setDeliveryCountry( $deliveryAddress->country );

        return $order;
    }
    
    
    public function setCurrentCustomerToOrder(\OnlineShop\Framework\Model\AbstractOrder $order) {
        //sets customer to order - if available
        $env = \OnlineShop\Framework\Factory::getInstance()->getEnvironment();
        if(@\Pimcore\Tool::classExists("\\Pimcore\\Model\\Object\\Member")) {
            $customer = \Pimcore\Model\Object\Member::getByUser($env->getCurrentUserId(), true);
            $order->setCustomer($customer);
        }
        return $order;
    }
    

}