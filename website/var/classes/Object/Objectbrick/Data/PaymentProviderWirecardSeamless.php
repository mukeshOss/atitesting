<?php 

/** 
* Generated at: 2017-06-20T16:54:46+02:00
* IP: 127.0.0.1


Fields Summary: 
 - auth_paymentType [input]
 - auth_orderNumber [input]
 - auth_paymentState [input]
 - auth_amount [input]
 - auth_currency [input]
 - auth_gatewyReferenceNumber [input]
*/ 

namespace Pimcore\Model\Object\Objectbrick\Data;

use Pimcore\Model\Object;

class PaymentProviderWirecardSeamless extends Object\Objectbrick\Data\AbstractData  {

public $type = "PaymentProviderWirecardSeamless";
public $auth_paymentType;
public $auth_orderNumber;
public $auth_paymentState;
public $auth_amount;
public $auth_currency;
public $auth_gatewyReferenceNumber;


/**
* Set auth_paymentType - paymentType
* @return string
*/
public function getAuth_paymentType () {
	$data = $this->auth_paymentType;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("auth_paymentType")->isEmpty($data)) {
		return $this->getValueFromParent("auth_paymentType");
	}
	 return $data;
}

/**
* Set auth_paymentType - paymentType
* @param string $auth_paymentType
* @return \Pimcore\Model\Object\PaymentProviderWirecardSeamless
*/
public function setAuth_paymentType ($auth_paymentType) {
	$this->auth_paymentType = $auth_paymentType;
	return $this;
}

/**
* Set auth_orderNumber - orderNumber
* @return string
*/
public function getAuth_orderNumber () {
	$data = $this->auth_orderNumber;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("auth_orderNumber")->isEmpty($data)) {
		return $this->getValueFromParent("auth_orderNumber");
	}
	 return $data;
}

/**
* Set auth_orderNumber - orderNumber
* @param string $auth_orderNumber
* @return \Pimcore\Model\Object\PaymentProviderWirecardSeamless
*/
public function setAuth_orderNumber ($auth_orderNumber) {
	$this->auth_orderNumber = $auth_orderNumber;
	return $this;
}

/**
* Set auth_paymentState - paymentState
* @return string
*/
public function getAuth_paymentState () {
	$data = $this->auth_paymentState;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("auth_paymentState")->isEmpty($data)) {
		return $this->getValueFromParent("auth_paymentState");
	}
	 return $data;
}

/**
* Set auth_paymentState - paymentState
* @param string $auth_paymentState
* @return \Pimcore\Model\Object\PaymentProviderWirecardSeamless
*/
public function setAuth_paymentState ($auth_paymentState) {
	$this->auth_paymentState = $auth_paymentState;
	return $this;
}

/**
* Set auth_amount - amount
* @return string
*/
public function getAuth_amount () {
	$data = $this->auth_amount;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("auth_amount")->isEmpty($data)) {
		return $this->getValueFromParent("auth_amount");
	}
	 return $data;
}

/**
* Set auth_amount - amount
* @param string $auth_amount
* @return \Pimcore\Model\Object\PaymentProviderWirecardSeamless
*/
public function setAuth_amount ($auth_amount) {
	$this->auth_amount = $auth_amount;
	return $this;
}

/**
* Set auth_currency - currency
* @return string
*/
public function getAuth_currency () {
	$data = $this->auth_currency;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("auth_currency")->isEmpty($data)) {
		return $this->getValueFromParent("auth_currency");
	}
	 return $data;
}

/**
* Set auth_currency - currency
* @param string $auth_currency
* @return \Pimcore\Model\Object\PaymentProviderWirecardSeamless
*/
public function setAuth_currency ($auth_currency) {
	$this->auth_currency = $auth_currency;
	return $this;
}

/**
* Set auth_gatewyReferenceNumber - gatewayReferenceNumber
* @return string
*/
public function getAuth_gatewyReferenceNumber () {
	$data = $this->auth_gatewyReferenceNumber;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("auth_gatewyReferenceNumber")->isEmpty($data)) {
		return $this->getValueFromParent("auth_gatewyReferenceNumber");
	}
	 return $data;
}

/**
* Set auth_gatewyReferenceNumber - gatewayReferenceNumber
* @param string $auth_gatewyReferenceNumber
* @return \Pimcore\Model\Object\PaymentProviderWirecardSeamless
*/
public function setAuth_gatewyReferenceNumber ($auth_gatewyReferenceNumber) {
	$this->auth_gatewyReferenceNumber = $auth_gatewyReferenceNumber;
	return $this;
}

}

