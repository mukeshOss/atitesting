<?php 

/** 
* Generated at: 2017-06-20T16:54:38+02:00
* IP: 127.0.0.1


Fields Summary: 
 - field [indexFieldSelectionCombo]
 - direction [select]
*/ 

namespace Pimcore\Model\Object\Fieldcollection\Data;

use Pimcore\Model\Object;

class OrderByFields extends Object\Fieldcollection\Data\AbstractData  {

public $type = "OrderByFields";
public $field;
public $direction;


/**
* Get field - Field
* @return string
*/
public function getField () {
	$data = $this->field;
	 return $data;
}

/**
* Set field - Field
* @param string $field
* @return \Pimcore\Model\Object\OrderByFields
*/
public function setField ($field) {
	$this->field = $field;
	return $this;
}

/**
* Get direction - Direction
* @return string
*/
public function getDirection () {
	$data = $this->direction;
	 return $data;
}

/**
* Set direction - Direction
* @param string $direction
* @return \Pimcore\Model\Object\OrderByFields
*/
public function setDirection ($direction) {
	$this->direction = $direction;
	return $this;
}

}

