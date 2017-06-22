<?php 

/** 
* Generated at: 2017-06-20T16:54:42+02:00
* IP: 127.0.0.1


Fields Summary: 
 - label [input]
 - field [indexFieldSelection]
 - useAndCondition [checkbox]
 - scriptPath [input]
 - availableRelations [objects]
*/ 

namespace Pimcore\Model\Object\Fieldcollection\Data;

use Pimcore\Model\Object;

class FilterMultiRelation extends \OnlineShop\Framework\Model\AbstractFilterDefinitionType  {

public $type = "FilterMultiRelation";
public $label;
public $field;
public $useAndCondition;
public $scriptPath;
public $availableRelations;


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
* @return \Pimcore\Model\Object\FilterMultiRelation
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
* @return \Pimcore\Model\Object\FilterMultiRelation
*/
public function setField ($field) {
	$this->field = $field;
	return $this;
}

/**
* Get useAndCondition - Use And Condition
* @return boolean
*/
public function getUseAndCondition () {
	$data = $this->useAndCondition;
	 return $data;
}

/**
* Set useAndCondition - Use And Condition
* @param boolean $useAndCondition
* @return \Pimcore\Model\Object\FilterMultiRelation
*/
public function setUseAndCondition ($useAndCondition) {
	$this->useAndCondition = $useAndCondition;
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
* @return \Pimcore\Model\Object\FilterMultiRelation
*/
public function setScriptPath ($scriptPath) {
	$this->scriptPath = $scriptPath;
	return $this;
}

/**
* Get availableRelations - Available Relations
* @return \Pimcore\Model\Object\AbstractObject[]
*/
public function getAvailableRelations () {
	$container = $this;
	$fd = $this->getDefinition()->getFieldDefinition("availableRelations");
	$data = $fd->preGetData($container);
	 return $data;
}

/**
* Set availableRelations - Available Relations
* @param \Pimcore\Model\Object\AbstractObject[] $availableRelations
* @return \Pimcore\Model\Object\FilterMultiRelation
*/
public function setAvailableRelations ($availableRelations) {
	$this->availableRelations = $this->getDefinition()->getFieldDefinition("availableRelations")->preSetData($this, $availableRelations);
	return $this;
}

}

