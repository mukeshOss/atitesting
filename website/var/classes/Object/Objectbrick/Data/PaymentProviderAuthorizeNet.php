<?php 

/** 
* Generated at: 2017-06-20T16:54:44+02:00
* IP: 127.0.0.1


Fields Summary: 
 - auth_transactionNumber [input]
*/ 

namespace Pimcore\Model\Object\Objectbrick\Data;

use Pimcore\Model\Object;

class PaymentProviderAuthorizeNet extends Object\Objectbrick\Data\AbstractData  {

public $type = "PaymentProviderAuthorizeNet";
public $auth_transactionNumber;


/**
* Set auth_transactionNumber - Transaction Number
* @return string
*/
public function getAuth_transactionNumber () {
	$data = $this->auth_transactionNumber;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("auth_transactionNumber")->isEmpty($data)) {
		return $this->getValueFromParent("auth_transactionNumber");
	}
	 return $data;
}

/**
* Set auth_transactionNumber - Transaction Number
* @param string $auth_transactionNumber
* @return \Pimcore\Model\Object\PaymentProviderAuthorizeNet
*/
public function setAuth_transactionNumber ($auth_transactionNumber) {
	$this->auth_transactionNumber = $auth_transactionNumber;
	return $this;
}

}

