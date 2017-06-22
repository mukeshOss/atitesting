<?php 

/** 
* Generated at: 2017-06-20T16:54:38+02:00
* IP: 127.0.0.1


Fields Summary: 
 - label [input]
 - preSelect [href]
 - rootCategory [href]
 - includeParentCategories [checkbox]
 - scriptPath [input]
 - availableCategories [objects]
*/ 

namespace Pimcore\Model\Object\Fieldcollection\Data;

use Pimcore\Model\Object;

class FilterCategory extends \OnlineShop\Framework\Model\CategoryFilterDefinitionType  {

public $type = "FilterCategory";
public $label;
public $preSelect;
public $rootCategory;
public $includeParentCategories;
public $scriptPath;
public $availableCategories;


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
* @return \Pimcore\Model\Object\FilterCategory
*/
public function setLabel ($label) {
	$this->label = $label;
	return $this;
}

/**
* Get preSelect - Pre Select
* @return \Pimcore\Model\Object\ProductCategory
*/
public function getPreSelect () {
	$container = $this;
	$fd = $this->getDefinition()->getFieldDefinition("preSelect");
	$data = $fd->preGetData($container);
	 return $data;
}

/**
* Set preSelect - Pre Select
* @param \Pimcore\Model\Object\ProductCategory $preSelect
* @return \Pimcore\Model\Object\FilterCategory
*/
public function setPreSelect ($preSelect) {
	$this->preSelect = $this->getDefinition()->getFieldDefinition("preSelect")->preSetData($this, $preSelect);
	return $this;
}

/**
* Get rootCategory - Root Category
* @return \Pimcore\Model\Object\ProductCategory
*/
public function getRootCategory () {
	$container = $this;
	$fd = $this->getDefinition()->getFieldDefinition("rootCategory");
	$data = $fd->preGetData($container);
	 return $data;
}

/**
* Set rootCategory - Root Category
* @param \Pimcore\Model\Object\ProductCategory $rootCategory
* @return \Pimcore\Model\Object\FilterCategory
*/
public function setRootCategory ($rootCategory) {
	$this->rootCategory = $this->getDefinition()->getFieldDefinition("rootCategory")->preSetData($this, $rootCategory);
	return $this;
}

/**
* Get includeParentCategories - Include SubCategories
* @return boolean
*/
public function getIncludeParentCategories () {
	$data = $this->includeParentCategories;
	 return $data;
}

/**
* Set includeParentCategories - Include SubCategories
* @param boolean $includeParentCategories
* @return \Pimcore\Model\Object\FilterCategory
*/
public function setIncludeParentCategories ($includeParentCategories) {
	$this->includeParentCategories = $includeParentCategories;
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
* @return \Pimcore\Model\Object\FilterCategory
*/
public function setScriptPath ($scriptPath) {
	$this->scriptPath = $scriptPath;
	return $this;
}

/**
* Get availableCategories - Available Categories
* @return \Pimcore\Model\Object\ProductCategory[]
*/
public function getAvailableCategories () {
	$container = $this;
	$fd = $this->getDefinition()->getFieldDefinition("availableCategories");
	$data = $fd->preGetData($container);
	 return $data;
}

/**
* Set availableCategories - Available Categories
* @param \Pimcore\Model\Object\ProductCategory[] $availableCategories
* @return \Pimcore\Model\Object\FilterCategory
*/
public function setAvailableCategories ($availableCategories) {
	$this->availableCategories = $this->getDefinition()->getFieldDefinition("availableCategories")->preSetData($this, $availableCategories);
	return $this;
}

}

