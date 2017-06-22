<?php 

/** 
* Generated at: 2017-06-20T16:55:47+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- orderState [select]
- product [href]
- productNumber [input]
- productName [input]
- amount [numeric]
- totalPrice [numeric]
- pricingRules [fieldcollections]
- comment [textarea]
- subItems [objects]
- localizedfields [localizedfields]
*/ 

namespace Pimcore\Model\Object;



/**
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getByOrderState ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getByProduct ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getByProductNumber ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getByProductName ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getByAmount ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getByTotalPrice ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getByPricingRules ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getByComment ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getBySubItems ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OnlineShopOrderItem\Listing getByLocalizedfields ($field, $value, $locale = null, $limit = 0) 
*/

class OnlineShopOrderItem extends \OnlineShop\Framework\Model\AbstractOrderItem {

public $o_classId = 2;
public $o_className = "OnlineShopOrderItem";
public $orderState;
public $product;
public $productNumber;
public $productName;
public $amount;
public $totalPrice;
public $pricingRules;
public $comment;
public $subItems;
public $localizedfields;


/**
* @param array $values
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get orderState - Order Item State
* @return string
*/
public function getOrderState () {
	$preValue = $this->preGetValue("orderState"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->orderState;
	return $data;
}

/**
* Set orderState - Order Item State
* @param string $orderState
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setOrderState ($orderState) {
	$this->orderState = $orderState;
	return $this;
}

/**
* Get product - Produkt
* @return \Pimcore\Model\Object\AbstractObject
*/
public function getProduct () {
	$preValue = $this->preGetValue("product"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("product")->preGetData($this);
	return $data;
}

/**
* Set product - Produkt
* @param \Pimcore\Model\Object\AbstractObject $product
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setProduct ($product) {
	$this->product = $this->getClass()->getFieldDefinition("product")->preSetData($this, $product);
	return $this;
}

/**
* Get productNumber - Produktnummer
* @return string
*/
public function getProductNumber () {
	$preValue = $this->preGetValue("productNumber"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->productNumber;
	return $data;
}

/**
* Set productNumber - Produktnummer
* @param string $productNumber
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setProductNumber ($productNumber) {
	$this->productNumber = $productNumber;
	return $this;
}

/**
* Get productName - Produktname
* @return string
*/
public function getProductName () {
	$preValue = $this->preGetValue("productName"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->productName;
	return $data;
}

/**
* Set productName - Produktname
* @param string $productName
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setProductName ($productName) {
	$this->productName = $productName;
	return $this;
}

/**
* Get amount - Amount
* @return float
*/
public function getAmount () {
	$preValue = $this->preGetValue("amount"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->amount;
	return $data;
}

/**
* Set amount - Amount
* @param float $amount
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setAmount ($amount) {
	$this->amount = $amount;
	return $this;
}

/**
* Get totalPrice - Preis
* @return float
*/
public function getTotalPrice () {
	$preValue = $this->preGetValue("totalPrice"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->totalPrice;
	return $data;
}

/**
* Set totalPrice - Preis
* @param float $totalPrice
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setTotalPrice ($totalPrice) {
	$this->totalPrice = $totalPrice;
	return $this;
}

/**
* @return \Pimcore\Model\Object\Fieldcollection
*/
public function getPricingRules () {
	$preValue = $this->preGetValue("pricingRules"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { return $preValue;}
	$data = $this->getClass()->getFieldDefinition("pricingRules")->preGetData($this);
	 return $data;
}

/**
* Set pricingRules - Pricing Rules
* @param \Pimcore\Model\Object\Fieldcollection $pricingRules
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setPricingRules ($pricingRules) {
	$this->pricingRules = $this->getClass()->getFieldDefinition("pricingRules")->preSetData($this, $pricingRules);
	return $this;
}

/**
* Get comment - Comment
* @return string
*/
public function getComment () {
	$preValue = $this->preGetValue("comment"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->comment;
	return $data;
}

/**
* Set comment - Comment
* @param string $comment
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setComment ($comment) {
	$this->comment = $comment;
	return $this;
}

/**
* Get subItems - Subitems
* @return \Pimcore\Model\Object\OnlineShopOrderItem[]
*/
public function getSubItems () {
	$preValue = $this->preGetValue("subItems"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("subItems")->preGetData($this);
	return $data;
}

/**
* Set subItems - Subitems
* @param \Pimcore\Model\Object\OnlineShopOrderItem[] $subItems
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setSubItems ($subItems) {
	$this->subItems = $this->getClass()->getFieldDefinition("subItems")->preSetData($this, $subItems);
	return $this;
}

/**
* Get localizedfields - 
* @return \Pimcore\Model\Object\Localizedfield
*/
public function getLocalizedfields () {
	$preValue = $this->preGetValue("localizedfields"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("localizedfields")->preGetData($this);
	return $data;
}

/**
* Set localizedfields - 
* @param \Pimcore\Model\Object\Localizedfield $localizedfields
* @return \Pimcore\Model\Object\OnlineShopOrderItem
*/
public function setLocalizedfields ($localizedfields) {
	$this->localizedfields = $localizedfields;
	return $this;
}

protected static $_relationFields = array (
  'product' => 
  array (
    'type' => 'href',
  ),
  'subItems' => 
  array (
    'type' => 'objects',
  ),
);

public $lazyLoadedFields = array (
  0 => 'pricingRules',
);

}

