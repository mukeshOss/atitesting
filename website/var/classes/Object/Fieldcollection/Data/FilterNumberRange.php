<?php 

/** 
* Generated at: 2017-06-20T16:54:39+02:00
* IP: 127.0.0.1


Fields Summary: 
 - label [input]
 - field [indexFieldSelection]
 - rangeFrom [numeric]
 - rangeTo [numeric]
 - preSelectFrom [numeric]
 - preSelectTo [numeric]
 - scriptPath [input]
*/ 

namespace Pimcore\Model\Object\Fieldcollection\Data;

use Pimcore\Model\Object;

class FilterNumberRange extends \OnlineShop\Framework\Model\AbstractFilterDefinitionType  {

public $type = "FilterNumberRange";
public $label;
public $field;
public $rangeFrom;
public $rangeTo;
public $preSelectFrom;
public $preSelectTo;
public $scriptPath;


/**
* Get label - Label
* @return string
*/
public function getLabel () {
	$data = $this->label;
	 return $data;
}

/**
* Set label - Label
* @param string $label
* @return \Pimcore\Model\Object\FilterNumberRange
*/
public function setLabel ($label) {
	$this->label = $label;
	return $this;
}

/**
* Get field - Field
* @return Object_Data_IndexFieldSelection
*/
public function getField () {
	$data = $this->field;
	 return $data;
}

/**
* Set field - Field
* @param Object_Data_IndexFieldSelection $field
* @return \Pimcore\Model\Object\FilterNumberRange
*/
public function setField ($field) {
	$this->field = $field;
	return $this;
}

/**
* Get rangeFrom - Range From
* @return float
*/
public function getRangeFrom () {
	$data = $this->rangeFrom;
	 return $data;
}

/**
* Set rangeFrom - Range From
* @param float $rangeFrom
* @return \Pimcore\Model\Object\FilterNumberRange
*/
public function setRangeFrom ($rangeFrom) {
	$this->rangeFrom = $rangeFrom;
	return $this;
}

/**
* Get rangeTo - Range To
* @return float
*/
public function getRangeTo () {
	$data = $this->rangeTo;
	 return $data;
}

/**
* Set rangeTo - Range To
* @param float $rangeTo
* @return \Pimcore\Model\Object\FilterNumberRange
*/
public function setRangeTo ($rangeTo) {
	$this->rangeTo = $rangeTo;
	return $this;
}

/**
* Get preSelectFrom - Pre Select From
* @return float
*/
public function getPreSelectFrom () {
	$data = $this->preSelectFrom;
	 return $data;
}

/**
* Set preSelectFrom - Pre Select From
* @param float $preSelectFrom
* @return \Pimcore\Model\Object\FilterNumberRange
*/
public function setPreSelectFrom ($preSelectFrom) {
	$this->preSelectFrom = $preSelectFrom;
	return $this;
}

/**
* Get preSelectTo - Pre Select To
* @return float
*/
public function getPreSelectTo () {
	$data = $this->preSelectTo;
	 return $data;
}

/**
* Set preSelectTo - Pre Select To
* @param float $preSelectTo
* @return \Pimcore\Model\Object\FilterNumberRange
*/
public function setPreSelectTo ($preSelectTo) {
	$this->preSelectTo = $preSelectTo;
	return $this;
}

/**
* Get scriptPath - Script Path
* @return string
*/
public function getScriptPath () {
	$data = $this->scriptPath;
	 return $data;
}

/**
* Set scriptPath - Script Path
* @param string $scriptPath
* @return \Pimcore\Model\Object\FilterNumberRange
*/
public function setScriptPath ($scriptPath) {
	$this->scriptPath = $scriptPath;
	return $this;
}

}

