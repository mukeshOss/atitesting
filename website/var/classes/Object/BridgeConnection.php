<?php 

/** 
* Generated at: 2017-06-20T16:55:54+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- PimClassName [input]
- ObjectParentID [input]
- SourceParentId [input]
- Json [textarea]
- SqlWhere [input]
- AttributeSetId [input]
- PostUrl [input]
- RestUrl [input]
- MagentoUsername [input]
- MagentoPassword [input]
- Bridge [objects]
- ProposedDataSetType [select]
- MappingRecordpath [input]
- Order [numeric]
- LanguageName [language]
- VaraintJSON [textarea]
*/ 

namespace Pimcore\Model\Object;



/**
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByPimClassName ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByObjectParentID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getBySourceParentId ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByJson ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getBySqlWhere ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByAttributeSetId ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByPostUrl ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByRestUrl ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByMagentoUsername ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByMagentoPassword ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByBridge ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByProposedDataSetType ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByMappingRecordpath ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByOrder ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByLanguageName ($value, $limit = 0) 
* @method \Pimcore\Model\Object\BridgeConnection\Listing getByVaraintJSON ($value, $limit = 0) 
*/

class BridgeConnection extends Concrete {

public $o_classId = 10;
public $o_className = "bridgeConnection";
public $PimClassName;
public $ObjectParentID;
public $SourceParentId;
public $Json;
public $SqlWhere;
public $AttributeSetId;
public $PostUrl;
public $RestUrl;
public $MagentoUsername;
public $MagentoPassword;
public $Bridge;
public $ProposedDataSetType;
public $MappingRecordpath;
public $Order;
public $LanguageName;
public $VaraintJSON;


/**
* @param array $values
* @return \Pimcore\Model\Object\BridgeConnection
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get PimClassName - Pimcore Class  Name
* @return string
*/
public function getPimClassName () {
	$preValue = $this->preGetValue("PimClassName"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->PimClassName;
	return $data;
}

/**
* Set PimClassName - Pimcore Class  Name
* @param string $PimClassName
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setPimClassName ($PimClassName) {
	$this->PimClassName = $PimClassName;
	return $this;
}

/**
* Get ObjectParentID - Category Target Parent ID
* @return string
*/
public function getObjectParentID () {
	$preValue = $this->preGetValue("ObjectParentID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ObjectParentID;
	return $data;
}

/**
* Set ObjectParentID - Category Target Parent ID
* @param string $ObjectParentID
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setObjectParentID ($ObjectParentID) {
	$this->ObjectParentID = $ObjectParentID;
	return $this;
}

/**
* Get SourceParentId - Pim Root  ID
* @return string
*/
public function getSourceParentId () {
	$preValue = $this->preGetValue("SourceParentId"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SourceParentId;
	return $data;
}

/**
* Set SourceParentId - Pim Root  ID
* @param string $SourceParentId
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setSourceParentId ($SourceParentId) {
	$this->SourceParentId = $SourceParentId;
	return $this;
}

/**
* Get Json - Payload Template (JSON)
* @return string
*/
public function getJson () {
	$preValue = $this->preGetValue("Json"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->Json;
	return $data;
}

/**
* Set Json - Payload Template (JSON)
* @param string $Json
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setJson ($Json) {
	$this->Json = $Json;
	return $this;
}

/**
* Get SqlWhere - Where
* @return string
*/
public function getSqlWhere () {
	$preValue = $this->preGetValue("SqlWhere"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SqlWhere;
	return $data;
}

/**
* Set SqlWhere - Where
* @param string $SqlWhere
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setSqlWhere ($SqlWhere) {
	$this->SqlWhere = $SqlWhere;
	return $this;
}

/**
* Get AttributeSetId - Product Attribute Set ID
* @return string
*/
public function getAttributeSetId () {
	$preValue = $this->preGetValue("AttributeSetId"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->AttributeSetId;
	return $data;
}

/**
* Set AttributeSetId - Product Attribute Set ID
* @param string $AttributeSetId
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setAttributeSetId ($AttributeSetId) {
	$this->AttributeSetId = $AttributeSetId;
	return $this;
}

/**
* Get PostUrl - Post Url
* @return string
*/
public function getPostUrl () {
	$preValue = $this->preGetValue("PostUrl"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->PostUrl;
	return $data;
}

/**
* Set PostUrl - Post Url
* @param string $PostUrl
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setPostUrl ($PostUrl) {
	$this->PostUrl = $PostUrl;
	return $this;
}

/**
* Get RestUrl - Rest Url
* @return string
*/
public function getRestUrl () {
	$preValue = $this->preGetValue("RestUrl"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->RestUrl;
	return $data;
}

/**
* Set RestUrl - Rest Url
* @param string $RestUrl
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setRestUrl ($RestUrl) {
	$this->RestUrl = $RestUrl;
	return $this;
}

/**
* Get MagentoUsername - Magento Username
* @return string
*/
public function getMagentoUsername () {
	$preValue = $this->preGetValue("MagentoUsername"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->MagentoUsername;
	return $data;
}

/**
* Set MagentoUsername - Magento Username
* @param string $MagentoUsername
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setMagentoUsername ($MagentoUsername) {
	$this->MagentoUsername = $MagentoUsername;
	return $this;
}

/**
* Get MagentoPassword - Magento Password
* @return string
*/
public function getMagentoPassword () {
	$preValue = $this->preGetValue("MagentoPassword"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->MagentoPassword;
	return $data;
}

/**
* Set MagentoPassword - Magento Password
* @param string $MagentoPassword
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setMagentoPassword ($MagentoPassword) {
	$this->MagentoPassword = $MagentoPassword;
	return $this;
}

/**
* Get Bridge - Bridge
* @return \Pimcore\Model\Object\bridge[]
*/
public function getBridge () {
	$preValue = $this->preGetValue("Bridge"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("Bridge")->preGetData($this);
	return $data;
}

/**
* Set Bridge - Bridge
* @param \Pimcore\Model\Object\bridge[] $Bridge
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setBridge ($Bridge) {
	$this->Bridge = $this->getClass()->getFieldDefinition("Bridge")->preSetData($this, $Bridge);
	return $this;
}

/**
* Get ProposedDataSetType - Data Type
* @return string
*/
public function getProposedDataSetType () {
	$preValue = $this->preGetValue("ProposedDataSetType"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ProposedDataSetType;
	return $data;
}

/**
* Set ProposedDataSetType - Data Type
* @param string $ProposedDataSetType
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setProposedDataSetType ($ProposedDataSetType) {
	$this->ProposedDataSetType = $ProposedDataSetType;
	return $this;
}

/**
* Get MappingRecordpath - Mapping Folder Path
* @return string
*/
public function getMappingRecordpath () {
	$preValue = $this->preGetValue("MappingRecordpath"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->MappingRecordpath;
	return $data;
}

/**
* Set MappingRecordpath - Mapping Folder Path
* @param string $MappingRecordpath
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setMappingRecordpath ($MappingRecordpath) {
	$this->MappingRecordpath = $MappingRecordpath;
	return $this;
}

/**
* Get Order - Order
* @return float
*/
public function getOrder () {
	$preValue = $this->preGetValue("Order"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->Order;
	return $data;
}

/**
* Set Order - Order
* @param float $Order
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setOrder ($Order) {
	$this->Order = $Order;
	return $this;
}

/**
* Get LanguageName - Language Name
* @return string
*/
public function getLanguageName () {
	$preValue = $this->preGetValue("LanguageName"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->LanguageName;
	return $data;
}

/**
* Set LanguageName - Language Name
* @param string $LanguageName
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setLanguageName ($LanguageName) {
	$this->LanguageName = $LanguageName;
	return $this;
}

/**
* Get VaraintJSON - Product Variant JSON
* @return string
*/
public function getVaraintJSON () {
	$preValue = $this->preGetValue("VaraintJSON"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->VaraintJSON;
	return $data;
}

/**
* Set VaraintJSON - Product Variant JSON
* @param string $VaraintJSON
* @return \Pimcore\Model\Object\BridgeConnection
*/
public function setVaraintJSON ($VaraintJSON) {
	$this->VaraintJSON = $VaraintJSON;
	return $this;
}

protected static $_relationFields = array (
  'Bridge' => 
  array (
    'type' => 'objects',
  ),
);

public $lazyLoadedFields = array (
  0 => 'Bridge',
);

}

