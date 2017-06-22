<?php 

/** 
* Generated at: 2017-06-20T16:55:54+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- SourceID [input]
- TargetID [input]
- TargetSKU [input]
- RecordType [input]
- Site [input]
- ISProduct [checkbox]
- PimClassName [input]
- ModificiationDate [numeric]
*/ 

namespace Pimcore\Model\Object;



/**
* @method \Pimcore\Model\Object\BridgeSrcTargetMapping\Listing getBySourceID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeSrcTargetMapping\Listing getByTargetID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeSrcTargetMapping\Listing getByTargetSKU ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeSrcTargetMapping\Listing getByRecordType ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeSrcTargetMapping\Listing getBySite ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeSrcTargetMapping\Listing getByISProduct ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeSrcTargetMapping\Listing getByPimClassName ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeSrcTargetMapping\Listing getByModificiationDate ($value, $limit = 0) 
*/

class BridgeSrcTargetMapping extends Concrete {

public $o_classId = 11;
public $o_className = "bridgeSrcTargetMapping";
public $SourceID;
public $TargetID;
public $TargetSKU;
public $RecordType;
public $Site;
public $ISProduct;
public $PimClassName;
public $ModificiationDate;


/**
* @param array $values
* @return \Pimcore\Model\Object\BridgeSrcTargetMapping
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get SourceID - SourceID
* @return string
*/
public function getSourceID () {
	$preValue = $this->preGetValue("SourceID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SourceID;
	return $data;
}

/**
* Set SourceID - SourceID
* @param string $SourceID
* @return \Pimcore\Model\Object\BridgeSrcTargetMapping
*/
public function setSourceID ($SourceID) {
	$this->SourceID = $SourceID;
	return $this;
}

/**
* Get TargetID - TargetID
* @return string
*/
public function getTargetID () {
	$preValue = $this->preGetValue("TargetID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->TargetID;
	return $data;
}

/**
* Set TargetID - TargetID
* @param string $TargetID
* @return \Pimcore\Model\Object\BridgeSrcTargetMapping
*/
public function setTargetID ($TargetID) {
	$this->TargetID = $TargetID;
	return $this;
}

/**
* Get TargetSKU - TargetSKU
* @return string
*/
public function getTargetSKU () {
	$preValue = $this->preGetValue("TargetSKU"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->TargetSKU;
	return $data;
}

/**
* Set TargetSKU - TargetSKU
* @param string $TargetSKU
* @return \Pimcore\Model\Object\BridgeSrcTargetMapping
*/
public function setTargetSKU ($TargetSKU) {
	$this->TargetSKU = $TargetSKU;
	return $this;
}

/**
* Get RecordType - RecordType
* @return string
*/
public function getRecordType () {
	$preValue = $this->preGetValue("RecordType"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->RecordType;
	return $data;
}

/**
* Set RecordType - RecordType
* @param string $RecordType
* @return \Pimcore\Model\Object\BridgeSrcTargetMapping
*/
public function setRecordType ($RecordType) {
	$this->RecordType = $RecordType;
	return $this;
}

/**
* Get Site - Site
* @return string
*/
public function getSite () {
	$preValue = $this->preGetValue("Site"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->Site;
	return $data;
}

/**
* Set Site - Site
* @param string $Site
* @return \Pimcore\Model\Object\BridgeSrcTargetMapping
*/
public function setSite ($Site) {
	$this->Site = $Site;
	return $this;
}

/**
* Get ISProduct - ISProduct
* @return boolean
*/
public function getISProduct () {
	$preValue = $this->preGetValue("ISProduct"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ISProduct;
	return $data;
}

/**
* Set ISProduct - ISProduct
* @param boolean $ISProduct
* @return \Pimcore\Model\Object\BridgeSrcTargetMapping
*/
public function setISProduct ($ISProduct) {
	$this->ISProduct = $ISProduct;
	return $this;
}

/**
* Get PimClassName - Pimcore Class Name
* @return string
*/
public function getPimClassName () {
	$preValue = $this->preGetValue("PimClassName"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->PimClassName;
	return $data;
}

/**
* Set PimClassName - Pimcore Class Name
* @param string $PimClassName
* @return \Pimcore\Model\Object\BridgeSrcTargetMapping
*/
public function setPimClassName ($PimClassName) {
	$this->PimClassName = $PimClassName;
	return $this;
}

/**
* Get ModificiationDate - ModificiationDate
* @return float
*/
public function getModificiationDate () {
	$preValue = $this->preGetValue("ModificiationDate"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ModificiationDate;
	return $data;
}

/**
* Set ModificiationDate - ModificiationDate
* @param float $ModificiationDate
* @return \Pimcore\Model\Object\BridgeSrcTargetMapping
*/
public function setModificiationDate ($ModificiationDate) {
	$this->ModificiationDate = $ModificiationDate;
	return $this;
}

protected static $_relationFields = array (
);

public $lazyLoadedFields = NULL;

}

