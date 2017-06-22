<?php 

/** 
* Generated at: 2017-06-20T16:55:48+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- date [datetime]
- person [href]
- message [textarea]
- terms [checkbox]
*/ 

namespace Pimcore\Model\Object;



/**
* @method \Pimcore\Model\Object\Inquiry\Listing getByDate ($value, $limit = 0) 
* @method \Pimcore\Model\Object\Inquiry\Listing getByPerson ($value, $limit = 0) 
* @method \Pimcore\Model\Object\Inquiry\Listing getByMessage ($value, $limit = 0) 
* @method \Pimcore\Model\Object\Inquiry\Listing getByTerms ($value, $limit = 0) 
*/

class Inquiry extends Concrete {

public $o_classId = 16;
public $o_className = "inquiry";
public $date;
public $person;
public $message;
public $terms;


/**
* @param array $values
* @return \Pimcore\Model\Object\Inquiry
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get date - Date
* @return \Carbon\Carbon
*/
public function getDate () {
	$preValue = $this->preGetValue("date"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->date;
	return $data;
}

/**
* Set date - Date
* @param \Carbon\Carbon $date
* @return \Pimcore\Model\Object\Inquiry
*/
public function setDate ($date) {
	$this->date = $date;
	return $this;
}

/**
* Get person - Person
* @return \Pimcore\Model\Object\person
*/
public function getPerson () {
	$preValue = $this->preGetValue("person"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("person")->preGetData($this);
	return $data;
}

/**
* Set person - Person
* @param \Pimcore\Model\Object\person $person
* @return \Pimcore\Model\Object\Inquiry
*/
public function setPerson ($person) {
	$this->person = $this->getClass()->getFieldDefinition("person")->preSetData($this, $person);
	return $this;
}

/**
* Get message - Message
* @return string
*/
public function getMessage () {
	$preValue = $this->preGetValue("message"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->message;
	return $data;
}

/**
* Set message - Message
* @param string $message
* @return \Pimcore\Model\Object\Inquiry
*/
public function setMessage ($message) {
	$this->message = $message;
	return $this;
}

/**
* Get terms - Terms of Use
* @return boolean
*/
public function getTerms () {
	$preValue = $this->preGetValue("terms"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->terms;
	return $data;
}

/**
* Set terms - Terms of Use
* @param boolean $terms
* @return \Pimcore\Model\Object\Inquiry
*/
public function setTerms ($terms) {
	$this->terms = $terms;
	return $this;
}

protected static $_relationFields = array (
  'person' => 
  array (
    'type' => 'href',
  ),
);

public $lazyLoadedFields = NULL;

}

