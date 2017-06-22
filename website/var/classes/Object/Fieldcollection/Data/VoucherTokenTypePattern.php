<?php 

/** 
* Generated at: 2017-06-20T16:54:43+02:00
* IP: 127.0.0.1


Fields Summary: 
 - count [numeric]
 - prefix [input]
 - length [numeric]
 - characterType [select]
 - separator [input]
 - separatorCount [numeric]
 - allowOncePerCart [checkbox]
 - onlyTokenPerCart [checkbox]
*/ 

namespace Pimcore\Model\Object\Fieldcollection\Data;

use Pimcore\Model\Object;

class VoucherTokenTypePattern extends \OnlineShop\Framework\Model\AbstractVoucherTokenType  {

public $type = "VoucherTokenTypePattern";
public $count;
public $prefix;
public $length;
public $characterType;
public $separator;
public $separatorCount;
public $allowOncePerCart;
public $onlyTokenPerCart;


/**
* Get count - Token Count
* @return float
*/
public function getCount () {
	$data = $this->count;
	 return $data;
}

/**
* Set count - Token Count
* @param float $count
* @return \Pimcore\Model\Object\VoucherTokenTypePattern
*/
public function setCount ($count) {
	$this->count = $count;
	return $this;
}

/**
* Get prefix - Prefix
* @return string
*/
public function getPrefix () {
	$data = $this->prefix;
	 return $data;
}

/**
* Set prefix - Prefix
* @param string $prefix
* @return \Pimcore\Model\Object\VoucherTokenTypePattern
*/
public function setPrefix ($prefix) {
	$this->prefix = $prefix;
	return $this;
}

/**
* Get length - Length
* @return float
*/
public function getLength () {
	$data = $this->length;
	 return $data;
}

/**
* Set length - Length
* @param float $length
* @return \Pimcore\Model\Object\VoucherTokenTypePattern
*/
public function setLength ($length) {
	$this->length = $length;
	return $this;
}

/**
* Get characterType - Character Type
* @return string
*/
public function getCharacterType () {
	$data = $this->characterType;
	 return $data;
}

/**
* Set characterType - Character Type
* @param string $characterType
* @return \Pimcore\Model\Object\VoucherTokenTypePattern
*/
public function setCharacterType ($characterType) {
	$this->characterType = $characterType;
	return $this;
}

/**
* Get separator - Separator
* @return string
*/
public function getSeparator () {
	$data = $this->separator;
	 return $data;
}

/**
* Set separator - Separator
* @param string $separator
* @return \Pimcore\Model\Object\VoucherTokenTypePattern
*/
public function setSeparator ($separator) {
	$this->separator = $separator;
	return $this;
}

/**
* Get separatorCount - Every x character 
* @return float
*/
public function getSeparatorCount () {
	$data = $this->separatorCount;
	 return $data;
}

/**
* Set separatorCount - Every x character 
* @param float $separatorCount
* @return \Pimcore\Model\Object\VoucherTokenTypePattern
*/
public function setSeparatorCount ($separatorCount) {
	$this->separatorCount = $separatorCount;
	return $this;
}

/**
* Get allowOncePerCart - Only allow one token of this type per cart
* @return boolean
*/
public function getAllowOncePerCart () {
	$data = $this->allowOncePerCart;
	 return $data;
}

/**
* Set allowOncePerCart - Only allow one token of this type per cart
* @param boolean $allowOncePerCart
* @return \Pimcore\Model\Object\VoucherTokenTypePattern
*/
public function setAllowOncePerCart ($allowOncePerCart) {
	$this->allowOncePerCart = $allowOncePerCart;
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
* @return \Pimcore\Model\Object\VoucherTokenTypePattern
*/
public function setOnlyTokenPerCart ($onlyTokenPerCart) {
	$this->onlyTokenPerCart = $onlyTokenPerCart;
	return $this;
}

}

