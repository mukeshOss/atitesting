<?php
namespace Website\OnlineShop\Order;

use OnlineShop\Framework\Model\AbstractOrder;

class Processor extends \OnlineShop\Framework\CheckoutManager\CommitOrderProcessor
{
    /**
     * save individually data
     * @param AbstractOrder $order
     */
    protected function processOrder(\OnlineShop\Framework\Model\AbstractOrder $order)
    {

        //nothing to do here

    }

    protected function sendConfirmationMail(\OnlineShop\Framework\Model\AbstractOrder $order) {
        $params = array();
        $params["order"] = $order;
        $params["ordernumber"] = $order->getOrdernumber();

        $email = $order->getCustomerEmail();

        $mail = new \Pimcore\Mail(array("document" => $this->confirmationMail, "params" => $params));
        $mail->addTo($email);
        $mail->send();
    }
}