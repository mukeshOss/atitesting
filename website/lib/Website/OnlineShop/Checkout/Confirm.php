<?php
namespace Website\OnlineShop\Checkout;

use OnlineShop\Framework\CheckoutManager\AbstractStep;
use OnlineShop\Framework\CheckoutManager\ICheckoutStep;

class Confirm extends AbstractStep implements ICheckoutStep
{
    /**
     * namespace key
     */
    const PRIVATE_NAMESPACE = 'confirm';

    /**
     * @return string
     */
    public function getName()
    {
        return 'confirm';
    }

    /**
     * commits step and sets delivered data
     * @param  $data
     * @return bool
     */
    public function commit($data) {
        $this->cart->setCheckoutData(self::PRIVATE_NAMESPACE, json_encode($data));
        return true;
    }

    /**
     * @return mixed
     */
    public function getData() {
        $data = json_decode($this->cart->getCheckoutData(self::PRIVATE_NAMESPACE));
        return $data;
    }
}