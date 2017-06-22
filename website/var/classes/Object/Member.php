<?php 

/** 
* Generated at: 2017-06-20T16:55:53+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- Name [input]
- User [user]
*/ 

namespace Pimcore\Model\Object;



/**
* @method \Pimcore\Model\Object\Member\Listing getByName ($value, $limit = 0) 
* @method \Pimcore\Model\Object\Member\Listing getByUser ($value, $limit = 0) 
*/

class Member extends Concrete {

public $o_classId = 22;
public $o_className = "Member";
public $Name;
public $User;


/**
* @param array $values
* @return \Pimcore\Model\Object\Member
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get Name - Name
* @return string
*/
public function getName () {
	$preValue = $this->preGetValue("Name"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->Name;
	return $data;
}

/**
* Set Name - Name
* @param string $Name
* @return \Pimcore\Model\Object\Member
*/
public function setName ($Name) {
	$this->Name = $Name;
	return $this;
}

/**
* Get User - User
* @return string
*/
public function getUser () {
	$preValue = $this->preGetValue("User"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->User;
	return $data;
}

/**
* Set User - User
* @param string $User
* @return \Pimcore\Model\Object\Member
*/
public function setUser ($User) {
	$this->User = $User;
	return $this;
}

protected static $_relationFields = array (
);

public $lazyLoadedFields = NULL;

}

