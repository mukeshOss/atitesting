<?php 

/** 
* Generated at: 2017-06-20T16:55:53+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- BridgeName [input]
- BridgeDescription [wysiwyg]
- BridgeType [select]
*/ 

namespace Pimcore\Model\Object;



/**
* @method \Pimcore\Model\Object\Bridge\Listing getByBridgeName ($value, $limit = 0) 
* @method \Pimcore\Model\Object\Bridge\Listing getByBridgeDescription ($value, $limit = 0) 
* @method \Pimcore\Model\Object\Bridge\Listing getByBridgeType ($value, $limit = 0) 
*/

class Bridge extends Concrete {

public $o_classId = 9;
public $o_className = "bridge";
public $BridgeName;
public $BridgeDescription;
public $BridgeType;


/**
* @param array $values
* @return \Pimcore\Model\Object\Bridge
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get BridgeName - Bridge Name
* @return string
*/
public function getBridgeName () {
	$preValue = $this->preGetValue("BridgeName"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->BridgeName;
	return $data;
}

/**
* Set BridgeName - Bridge Name
* @param string $BridgeName
* @return \Pimcore\Model\Object\Bridge
*/
public function setBridgeName ($BridgeName) {
	$this->BridgeName = $BridgeName;
	return $this;
}

/**
* Get BridgeDescription - Bridge Description
* @return string
*/
public function getBridgeDescription () {
	$preValue = $this->preGetValue("BridgeDescription"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("BridgeDescription")->preGetData($this);
	return $data;
}

/**
* Set BridgeDescription - Bridge Description
* @param string $BridgeDescription
* @return \Pimcore\Model\Object\Bridge
*/
public function setBridgeDescription ($BridgeDescription) {
	$this->BridgeDescription = $BridgeDescription;
	return $this;
}

/**
* Get BridgeType - Bridge Type
* @return string
*/
public function getBridgeType () {
	$preValue = $this->preGetValue("BridgeType"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->BridgeType;
	return $data;
}

/**
* Set BridgeType - Bridge Type
* @param string $BridgeType
* @return \Pimcore\Model\Object\Bridge
*/
public function setBridgeType ($BridgeType) {
	$this->BridgeType = $BridgeType;
	return $this;
}

protected static $_relationFields = array (
);

public $lazyLoadedFields = NULL;

}

