<?php 

/** 
* Generated at: 2017-06-20T16:54:47+02:00
* IP: 127.0.0.1


Fields Summary: 
 - specs [multiselect]
*/ 

namespace Pimcore\Model\Object\Objectbrick\Data;

use Pimcore\Model\Object;

class FeaturesBenefitsTents extends Object\Objectbrick\Data\AbstractData  {

public $type = "featuresBenefitsTents";
public $specs;


/**
* Set specs - 
* @return array
*/
public function getSpecs () {
	$data = $this->specs;
	if(\Pimcore\Model\Object::doGetInheritedValues($this->getObject()) && $this->getDefinition()->getFieldDefinition("specs")->isEmpty($data)) {
		return $this->getValueFromParent("specs");
	}
	 return $data;
}

/**
* Set specs - 
* @param array $specs
* @return \Pimcore\Model\Object\FeaturesBenefitsTents
*/
public function setSpecs ($specs) {
	$this->specs = $specs;
	return $this;
}

}

