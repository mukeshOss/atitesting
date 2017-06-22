<?php 

/** 
* Generated at: 2017-06-20T16:54:48+02:00
* IP: 127.0.0.1


Fields Summary: 
 - footTypes [multiselect]
 - gaitTypes [multiselect]
*/ 

namespace Pimcore\Model\Object\Objectbrick\Data;

use Pimcore\Model\Object;

class Shoe extends Object\Objectbrick\Data\AbstractData  {

public $type = "shoe";
public $footTypes;
public $gaitTypes;


/**
* Set footTypes - Foot Type
* @return array
*/
public function getFootTypes () {
	$data = $this->footTypes;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("footTypes")->isEmpty($data)) {
		return $this->getValueFromParent("footTypes");
	}
	 return $data;
}

/**
* Set footTypes - Foot Type
* @param array $footTypes
* @return \Pimcore\Model\Object\Shoe
*/
public function setFootTypes ($footTypes) {
	$this->footTypes = $footTypes;
	return $this;
}

/**
* Set gaitTypes - Gait Types
* @return array
*/
public function getGaitTypes () {
	$data = $this->gaitTypes;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("gaitTypes")->isEmpty($data)) {
		return $this->getValueFromParent("gaitTypes");
	}
	 return $data;
}

/**
* Set gaitTypes - Gait Types
* @param array $gaitTypes
* @return \Pimcore\Model\Object\Shoe
*/
public function setGaitTypes ($gaitTypes) {
	$this->gaitTypes = $gaitTypes;
	return $this;
}

}

