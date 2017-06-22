<?php 

/** 
* Generated at: 2017-06-20T16:54:44+02:00
* IP: 127.0.0.1


Fields Summary: 
 - token [input]
 - usages [numeric]
 - onlyTokenPerCart [checkbox]
*/ 

namespace Pimcore\Model\Object\Fieldcollection\Data;

use Pimcore\Model\Object;

class VoucherTokenTypeSingle extends \OnlineShop\Framework\Model\AbstractVoucherTokenType  {

public $type = "VoucherTokenTypeSingle";
public $token;
public $usages;
public $onlyTokenPerCart;


/**
* Get token - Token
* @return string
*/
public function getToken () {
	$data = $this->token;
	 return $data;
}

/**
* Set token - Token
* @param string $token
* @return \Pimcore\Model\Object\VoucherTokenTypeSingle
*/
public function setToken ($token) {
	$this->token = $token;
	return $this;
}

/**
* Get usages - Usage count
* @return float
*/
public function getUsages () {
	$data = $this->usages;
	 return $data;
}

/**
* Set usages - Usage count
* @param float $usages
* @return \Pimcore\Model\Object\VoucherTokenTypeSingle
*/
public function setUsages ($usages) {
	$this->usages = $usages;
	return $this;
}

/**
* Get onlyTokenPerCart - Only token of a cart
* @return boolean
*/
public function getOnlyTokenPerCart () {
	$data = $this->onlyTokenPerCart;
	 return $data;
}

/**
* Set onlyTokenPerCart - Only token of a cart
* @param boolean $onlyTokenPerCart
* @return \Pimcore\Model\Object\VoucherTokenTypeSingle
*/
public function setOnlyTokenPerCart ($onlyTokenPerCart) {
	$this->onlyTokenPerCart = $onlyTokenPerCart;
	return $this;
}

}

