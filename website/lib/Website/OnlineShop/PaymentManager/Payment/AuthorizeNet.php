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
namespace Website\OnlineShop\PaymentManager\Payment;
use OnlineShop\Framework\PaymentManager\Payment\IPayment;

use net\authorize\api\contract\v1 as AnetAPI;
use net\authorize\api\controller as AnetController;

class AuthorizeNet implements IPayment
{
    /**
     * @var AnetAPI\MerchantAuthenticationType
     */
    protected $merchantAuth;
    
    /**
     *
     * @var AnetAPI\PaymentType 
     */
    protected $paymentType;
    
    /**
     *
     * @var AnetAPI\TransactionRequestType 
     */
    protected $transactionRequestType;
    
    /**
     * @var string
     */
    protected $internalTransactionID;

    /**
     * @var string[]
     */
    protected $authorizedData;


    /**
     * @param \Zend_Config $xml
     */
    public function __construct(\Zend_Config $xml)
    {
        // Common setup for API credentials
        $this->merchantAuth = new AnetAPI\MerchantAuthenticationType();
        $this->merchantAuth->setName($xml->config->{$xml->mode}->ID);
        $this->merchantAuth->setTransactionKey($xml->config->{$xml->mode}->transaction_key);        
    }


    /**
     * @return string
     */
    public function getName()
    {
        return 'AuthorizeNet';
    }


    /**
     * start payment
     * @param \OnlineShop\Framework\PriceSystem\IPrice $price
     * @param array                       $config
     *
     * @return string
     * @throws \Exception
     */
    public function initPayment(\OnlineShop\Framework\PriceSystem\IPrice $price, array $config=[])
    {
        // Create the payment data for a credit card
        $creditCard = new AnetAPI\CreditCardType();
        $creditCard->setCardNumber("4111111111111111");
        $creditCard->setExpirationDate("1226");
        $creditCard->setCardCode("123");
        $this->paymentType = new AnetAPI\PaymentType();
        $this->paymentType->setCreditCard($creditCard);
        $this->internalTransactionID = time();
        $order = new AnetAPI\OrderType();
        $order->setDescription($config['refNumber']);

        //create a transaction
        $this->transactionRequestType = new AnetAPI\TransactionRequestType();
        $this->transactionRequestType->setTransactionType("authCaptureTransaction"); 
        $this->transactionRequestType->setAmount(round($price->getAmount(), 2));
        $this->transactionRequestType->setOrder($order);
        $this->transactionRequestType->setPayment($this->paymentType);
    }


    /**
     * execute payment
     * @param mixed $response
     *
     * @return \OnlineShop\Framework\PaymentManager\IStatus
     * @throws \Exception
     */
    public function handleResponse($response)
    {
        if ($response != null) {
            if($response['responseCode'] === '1') {
                $this->setAuthorizedData([
                    'TransactionNumber' => $response['transactionID'],
                ]);
                return new \OnlineShop\Framework\PaymentManager\Status(
                    $response['refNumber'],
                    $response['transactionID'],
                    null,
                    \OnlineShop\Framework\Model\AbstractOrder::ORDER_STATE_COMMITTED,
                    [
                        'transactionNumber' => $response['transactionID'],
                        'responseCode' => $response['responseCode'],
                        'authCode' => $response['authCode'],
                    ]
                );
            } else {
                return new \OnlineShop\Framework\PaymentManager\Status(
                    $response['refNumber'],
                    'ERROR',
                    $response['messages'][0],
                    \OnlineShop\Framework\Model\AbstractOrder::ORDER_STATE_ABORTED,
                    [
                        'responseCode' => $response['responseCode'],
                    ]
                );
            }
        } else {
            throw new \Exception('Invalid response');
        }

    }


    /**
     * return the authorized data from payment provider
     *
     * @return array
     */
    public function getAuthorizedData()
    {
        return $this->authorizedData;
    }


    /**
     * set authorized data from payment provider
     *
     * @param array $authorizedData
     */
    public function setAuthorizedData(array $authorizedData)
    {
        $this->authorizedData = $authorizedData;
    }


    /**
     * execute payment
     *
     * @param \OnlineShop\Framework\PriceSystem\IPrice $price
     * @param string                      $reference
     *
     * @return \OnlineShop\Framework\PaymentManager\IStatus
     */
    public function executeDebit(\OnlineShop\Framework\PriceSystem\IPrice $price = null, $reference = null)
    {
        // TODO: Implement executeDebit() method.
    }

    /**
     * execute credit
     *
     * @param \OnlineShop\Framework\PriceSystem\IPrice $price
     * @param string                      $reference
     * @param                             $transactionId
     *
     * @return \OnlineShop\Framework\PaymentManager\IStatus
     */
    public function executeCredit(\OnlineShop\Framework\PriceSystem\IPrice $price, $reference = null, $transactionId = null)
    {
        $request = new AnetAPI\CreateTransactionRequest();
        $request->setMerchantAuthentication($this->merchantAuth);
        $request->setRefId($this->internalTransactionID);
        $request->setTransactionRequest( $this->transactionRequestType);
        try {
            $controller = new AnetController\CreateTransactionController($request);
            $response = $controller->executeWithApiResponse(\net\authorize\api\constants\ANetEnvironment::SANDBOX);
        } catch(Exception $e) {
            throw new \Exception($e->getMessage());
        }
        return $response;
        
    }


    /**
     * @param \OnlineShop\Framework\PriceSystem\IPrice $price
     *
     * @return \stdClass
     */
    protected function createPaymentDetails(\OnlineShop\Framework\PriceSystem\IPrice $price)
    {
        // TODO: Implement createPaymentDetails() method.
    }
}

