<?php 

/** 
* Generated at: 2017-06-20T16:54:42+02:00
* IP: 127.0.0.1


Fields Summary: 
 - name [input]
 - amount [numeric]
*/ 

namespace Pimcore\Model\Object\Fieldcollection\Data;

use Pimcore\Model\Object;

class OrderPriceModifications extends Object\Fieldcollection\Data\AbstractData  {

public $type = "OrderPriceModifications";
public $name;
public $amount;


/**
* Get name - Name
* @return string
*/
public function getName () {
	$data = $this->name;
	 return $data;
}

/**
* Set name - Name
* @param string $name
* @return \Pimcore\Model\Object\OrderPriceModifications
*/
public function setName ($name) {
	$this->name = $name;
	return $this;
}

/**
* Get amount - Amount
* @return float
*/
public function getAmount () {
	$data = $this->amount;
	 return $data;
}

/**
* Set amount - Amount
* @param float $amount
* @return \Pimcore\Model\Object\OrderPriceModifications
*/
public function setAmount ($amount) {
	$this->amount = $amount;
	return $this;
}

}

