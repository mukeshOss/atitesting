<?php 

/** 
* Generated at: 2017-06-20T16:54:38+02:00
* IP: 127.0.0.1


Fields Summary: 
 - label [input]
 - field [indexFieldSelection]
 - scriptPath [input]
 - UseAndCondition [checkbox]
*/ 

namespace Pimcore\Model\Object\Fieldcollection\Data;

use Pimcore\Model\Object;

class FilterMultiSelect extends \OnlineShop\Framework\Model\AbstractFilterDefinitionType  {

public $type = "FilterMultiSelect";
public $label;
public $field;
public $scriptPath;
public $UseAndCondition;


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
* @return \Pimcore\Model\Object\FilterMultiSelect
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
* @return \Pimcore\Model\Object\FilterMultiSelect
*/
public function setField ($field) {
	$this->field = $field;
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
* @return \Pimcore\Model\Object\FilterMultiSelect
*/
public function setScriptPath ($scriptPath) {
	$this->scriptPath = $scriptPath;
	return $this;
}

/**
* Get UseAndCondition - Use And Condition
* @return boolean
*/
public function getUseAndCondition () {
	$data = $this->UseAndCondition;
	 return $data;
}

/**
* Set UseAndCondition - Use And Condition
* @param boolean $UseAndCondition
* @return \Pimcore\Model\Object\FilterMultiSelect
*/
public function setUseAndCondition ($UseAndCondition) {
	$this->UseAndCondition = $UseAndCondition;
	return $this;
}

}

