<?php 

/** 
* Generated at: 2017-06-20T16:55:44+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- product [href]
- productNumber [input]
- productName [input]
- amount [numeric]
- originalTotalPrice [numeric]
- DiscountType [select]
- discount [numeric]
- finalTotalPrice [numeric]
- subItems [objects]
- comment [textarea]
- cartItemKey [input]
*/ 

namespace Pimcore\Model\Object;



/**
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByProduct ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByProductNumber ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByProductName ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByAmount ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByOriginalTotalPrice ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByDiscountType ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByDiscount ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByFinalTotalPrice ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getBySubItems ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByComment ($value, $limit = 0) 
* @method \Pimcore\Model\Object\OfferToolOfferItem\Listing getByCartItemKey ($value, $limit = 0) 
*/

class OfferToolOfferItem extends \OnlineShop\Framework\OfferTool\AbstractOfferItem {

public $o_classId = 7;
public $o_className = "OfferToolOfferItem";
public $product;
public $productNumber;
public $productName;
public $amount;
public $originalTotalPrice;
public $DiscountType;
public $discount;
public $finalTotalPrice;
public $subItems;
public $comment;
public $cartItemKey;


/**
* @param array $values
* @return \Pimcore\Model\Object\OfferToolOfferItem
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
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
* @return \Pimcore\Model\Object\OfferToolOfferItem
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
* @return \Pimcore\Model\Object\OfferToolOfferItem
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
* @return \Pimcore\Model\Object\OfferToolOfferItem
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
* @return \Pimcore\Model\Object\OfferToolOfferItem
*/
public function setAmount ($amount) {
	$this->amount = $amount;
	return $this;
}

/**
* Get originalTotalPrice - Original Total Price
* @return float
*/
public function getOriginalTotalPrice () {
	$preValue = $this->preGetValue("originalTotalPrice"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->originalTotalPrice;
	return $data;
}

/**
* Set originalTotalPrice - Original Total Price
* @param float $originalTotalPrice
* @return \Pimcore\Model\Object\OfferToolOfferItem
*/
public function setOriginalTotalPrice ($originalTotalPrice) {
	$this->originalTotalPrice = $originalTotalPrice;
	return $this;
}

/**
* Get DiscountType - Discount Type
* @return string
*/
public function getDiscountType () {
	$preValue = $this->preGetValue("DiscountType"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->DiscountType;
	return $data;
}

/**
* Set DiscountType - Discount Type
* @param string $DiscountType
* @return \Pimcore\Model\Object\OfferToolOfferItem
*/
public function setDiscountType ($DiscountType) {
	$this->DiscountType = $DiscountType;
	return $this;
}

/**
* Get discount - Discount
* @return float
*/
public function getDiscount () {
	$preValue = $this->preGetValue("discount"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->discount;
	return $data;
}

/**
* Set discount - Discount
* @param float $discount
* @return \Pimcore\Model\Object\OfferToolOfferItem
*/
public function setDiscount ($discount) {
	$this->discount = $discount;
	return $this;
}

/**
* Get finalTotalPrice - Preis
* @return float
*/
public function getFinalTotalPrice () {
	$preValue = $this->preGetValue("finalTotalPrice"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->finalTotalPrice;
	return $data;
}

/**
* Set finalTotalPrice - Preis
* @param float $finalTotalPrice
* @return \Pimcore\Model\Object\OfferToolOfferItem
*/
public function setFinalTotalPrice ($finalTotalPrice) {
	$this->finalTotalPrice = $finalTotalPrice;
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
* @return \Pimcore\Model\Object\OfferToolOfferItem
*/
public function setSubItems ($subItems) {
	$this->subItems = $this->getClass()->getFieldDefinition("subItems")->preSetData($this, $subItems);
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
* @return \Pimcore\Model\Object\OfferToolOfferItem
*/
public function setComment ($comment) {
	$this->comment = $comment;
	return $this;
}

/**
* Get cartItemKey - CartItemKey
* @return string
*/
public function getCartItemKey () {
	$preValue = $this->preGetValue("cartItemKey"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->cartItemKey;
	return $data;
}

/**
* Set cartItemKey - CartItemKey
* @param string $cartItemKey
* @return \Pimcore\Model\Object\OfferToolOfferItem
*/
public function setCartItemKey ($cartItemKey) {
	$this->cartItemKey = $cartItemKey;
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
  0 => 'subItems',
);

}

