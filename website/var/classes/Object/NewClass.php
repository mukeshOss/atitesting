<?php 

/** 
* Generated at: 2017-06-21T12:36:55+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- ProductID [input]
- PortalID [input]
- ProductName [input]
- ProductNum [input]
- ProductTypeID [input]
- SKU [input]
- Weight [input]
- Length [input]
- ShortDescription [wysiwyg]
- Description [wysiwyg]
- FeaturesDesc [wysiwyg]
- RetailPrice [quantityValue]
- SalePrice [quantityValue]
- WholesalePrice [quantityValue]
- ImageFile [image]
- ImageAltTag [input]
- width [input]
- Height [input]
- BeginActiveDate [datetime]
- EndActiveDate [datetime]
- ActiveInd [checkbox]
- DisplayOrder [select]
- CallForPricing [select]
- HomepageSpecial [select]
- CategorySpecial [select]
- InventoryDisplay [select]
- Keywords [input]
- ManufacturerID [input]
- AdditionalInfoLink [href]
- AdditionalInfoLinkLabel [input]
- ShippingRuleTypeID [input]
- SEOTitle [input]
- SEOKeywords [input]
- SEOURL [input]
- SEODescription [textarea]
- ShipEachItemSeparately [select]
- QuantityOnHand [input]
- AllowBackOrder [select]
- BackOrderMsg [wysiwyg]
- DropShipInd [input]
- DropShipEmailID [input]
- Specifications [input]
- AdditionalInformation [textarea]
- InStockMsg [textarea]
- OutOfStockMsg [textarea]
- TrackInventoryInd [input]
- DownloadLink [href]
- FreeShippingInd [input]
- NewProductInd [input]
- MaxQty [input]
- ShipSeparately [select]
- FeaturedInd [input]
- SupplierID [input]
- RecurringBillingInd [input]
- RecurringBillingInstallmentInd [input]
- RecurringBillingPeriod [input]
- RecurringBillingFrequency [input]
- RecurringBillingTotalCycles [input]
- RecurringBillingInitialAmount [input]
- TaxClassID [input]
- TestInfoID [input]
- QBItem [href]
- ProductKey [input]
- CNESurveyBatchID [input]
- CNESurveyAssessmentID [input]
- CNECertificateID [input]
- CNEUnits [input]
- BookletsPerUser [input]
- CE [input]
- PostProcessID [input]
- LibraryID [input]
- PackageID [input]
- EcomCatalogTaxSchedulID [input]
- EcomCatalogTaxOptions [select]
- EcomCatalogTaxability [input]
- EcomCatalogClassificationID [input]
- NumberOfDays [input]
- HideStudyMaterials [checkbox]
- HideTakeExam [checkbox]
- IsMandatory [checkbox]
- IsHealthcare [checkbox]
- IsVisible [checkbox]
- IsAvailableOnline [checkbox]
- IsHideBatchInfo [checkbox]
- IsShipped [checkbox]
- IsLiveSession [checkbox]
- IsException [checkbox]
*/ 

namespace Pimcore\Model\Object;



/**
* @method \Pimcore\Model\Object\NewClass\Listing getByProductID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByPortalID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByProductName ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByProductNum ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByProductTypeID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getBySKU ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByWeight ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByLength ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByShortDescription ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByDescription ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByFeaturesDesc ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByRetailPrice ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getBySalePrice ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByWholesalePrice ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByImageFile ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByImageAltTag ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByWidth ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByHeight ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByBeginActiveDate ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByEndActiveDate ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByActiveInd ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByDisplayOrder ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByCallForPricing ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByHomepageSpecial ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByCategorySpecial ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByInventoryDisplay ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByKeywords ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByManufacturerID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByAdditionalInfoLink ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByAdditionalInfoLinkLabel ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByShippingRuleTypeID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getBySEOTitle ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getBySEOKeywords ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getBySEOURL ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getBySEODescription ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByShipEachItemSeparately ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByQuantityOnHand ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByAllowBackOrder ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByBackOrderMsg ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByDropShipInd ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByDropShipEmailID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getBySpecifications ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByAdditionalInformation ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByInStockMsg ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByOutOfStockMsg ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByTrackInventoryInd ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByDownloadLink ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByFreeShippingInd ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByNewProductInd ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByMaxQty ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByShipSeparately ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByFeaturedInd ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getBySupplierID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByRecurringBillingInd ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByRecurringBillingInstallmentInd ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByRecurringBillingPeriod ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByRecurringBillingFrequency ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByRecurringBillingTotalCycles ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByRecurringBillingInitialAmount ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByTaxClassID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByTestInfoID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByQBItem ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByProductKey ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByCNESurveyBatchID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByCNESurveyAssessmentID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByCNECertificateID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByCNEUnits ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByBookletsPerUser ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByCE ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByPostProcessID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByLibraryID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByPackageID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByEcomCatalogTaxSchedulID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByEcomCatalogTaxOptions ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByEcomCatalogTaxability ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByEcomCatalogClassificationID ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByNumberOfDays ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByHideStudyMaterials ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByHideTakeExam ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByIsMandatory ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByIsHealthcare ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByIsVisible ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByIsAvailableOnline ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByIsHideBatchInfo ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByIsShipped ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByIsLiveSession ($value, $limit = 0) 
* @method \Pimcore\Model\Object\NewClass\Listing getByIsException ($value, $limit = 0) 
*/

class NewClass extends Concrete {

public $o_classId = 23;
public $o_className = "newClass";
public $ProductID;
public $PortalID;
public $ProductName;
public $ProductNum;
public $ProductTypeID;
public $SKU;
public $Weight;
public $Length;
public $ShortDescription;
public $Description;
public $FeaturesDesc;
public $RetailPrice;
public $SalePrice;
public $WholesalePrice;
public $ImageFile;
public $ImageAltTag;
public $width;
public $Height;
public $BeginActiveDate;
public $EndActiveDate;
public $ActiveInd;
public $DisplayOrder;
public $CallForPricing;
public $HomepageSpecial;
public $CategorySpecial;
public $InventoryDisplay;
public $Keywords;
public $ManufacturerID;
public $AdditionalInfoLink;
public $AdditionalInfoLinkLabel;
public $ShippingRuleTypeID;
public $SEOTitle;
public $SEOKeywords;
public $SEOURL;
public $SEODescription;
public $ShipEachItemSeparately;
public $QuantityOnHand;
public $AllowBackOrder;
public $BackOrderMsg;
public $DropShipInd;
public $DropShipEmailID;
public $Specifications;
public $AdditionalInformation;
public $InStockMsg;
public $OutOfStockMsg;
public $TrackInventoryInd;
public $DownloadLink;
public $FreeShippingInd;
public $NewProductInd;
public $MaxQty;
public $ShipSeparately;
public $FeaturedInd;
public $SupplierID;
public $RecurringBillingInd;
public $RecurringBillingInstallmentInd;
public $RecurringBillingPeriod;
public $RecurringBillingFrequency;
public $RecurringBillingTotalCycles;
public $RecurringBillingInitialAmount;
public $TaxClassID;
public $TestInfoID;
public $QBItem;
public $ProductKey;
public $CNESurveyBatchID;
public $CNESurveyAssessmentID;
public $CNECertificateID;
public $CNEUnits;
public $BookletsPerUser;
public $CE;
public $PostProcessID;
public $LibraryID;
public $PackageID;
public $EcomCatalogTaxSchedulID;
public $EcomCatalogTaxOptions;
public $EcomCatalogTaxability;
public $EcomCatalogClassificationID;
public $NumberOfDays;
public $HideStudyMaterials;
public $HideTakeExam;
public $IsMandatory;
public $IsHealthcare;
public $IsVisible;
public $IsAvailableOnline;
public $IsHideBatchInfo;
public $IsShipped;
public $IsLiveSession;
public $IsException;


/**
* @param array $values
* @return \Pimcore\Model\Object\NewClass
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get ProductID - Product ID
* @return string
*/
public function getProductID () {
	$preValue = $this->preGetValue("ProductID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ProductID;
	return $data;
}

/**
* Set ProductID - Product ID
* @param string $ProductID
* @return \Pimcore\Model\Object\NewClass
*/
public function setProductID ($ProductID) {
	$this->ProductID = $ProductID;
	return $this;
}

/**
* Get PortalID - Portal ID
* @return string
*/
public function getPortalID () {
	$preValue = $this->preGetValue("PortalID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->PortalID;
	return $data;
}

/**
* Set PortalID - Portal ID
* @param string $PortalID
* @return \Pimcore\Model\Object\NewClass
*/
public function setPortalID ($PortalID) {
	$this->PortalID = $PortalID;
	return $this;
}

/**
* Get ProductName - Product Name
* @return string
*/
public function getProductName () {
	$preValue = $this->preGetValue("ProductName"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ProductName;
	return $data;
}

/**
* Set ProductName - Product Name
* @param string $ProductName
* @return \Pimcore\Model\Object\NewClass
*/
public function setProductName ($ProductName) {
	$this->ProductName = $ProductName;
	return $this;
}

/**
* Get ProductNum - Product Number
* @return string
*/
public function getProductNum () {
	$preValue = $this->preGetValue("ProductNum"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ProductNum;
	return $data;
}

/**
* Set ProductNum - Product Number
* @param string $ProductNum
* @return \Pimcore\Model\Object\NewClass
*/
public function setProductNum ($ProductNum) {
	$this->ProductNum = $ProductNum;
	return $this;
}

/**
* Get ProductTypeID - Product Type ID
* @return string
*/
public function getProductTypeID () {
	$preValue = $this->preGetValue("ProductTypeID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ProductTypeID;
	return $data;
}

/**
* Set ProductTypeID - Product Type ID
* @param string $ProductTypeID
* @return \Pimcore\Model\Object\NewClass
*/
public function setProductTypeID ($ProductTypeID) {
	$this->ProductTypeID = $ProductTypeID;
	return $this;
}

/**
* Get SKU - SKU
* @return string
*/
public function getSKU () {
	$preValue = $this->preGetValue("SKU"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SKU;
	return $data;
}

/**
* Set SKU - SKU
* @param string $SKU
* @return \Pimcore\Model\Object\NewClass
*/
public function setSKU ($SKU) {
	$this->SKU = $SKU;
	return $this;
}

/**
* Get Weight - Weight
* @return string
*/
public function getWeight () {
	$preValue = $this->preGetValue("Weight"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->Weight;
	return $data;
}

/**
* Set Weight - Weight
* @param string $Weight
* @return \Pimcore\Model\Object\NewClass
*/
public function setWeight ($Weight) {
	$this->Weight = $Weight;
	return $this;
}

/**
* Get Length - Length
* @return string
*/
public function getLength () {
	$preValue = $this->preGetValue("Length"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->Length;
	return $data;
}

/**
* Set Length - Length
* @param string $Length
* @return \Pimcore\Model\Object\NewClass
*/
public function setLength ($Length) {
	$this->Length = $Length;
	return $this;
}

/**
* Get ShortDescription - Short Description
* @return string
*/
public function getShortDescription () {
	$preValue = $this->preGetValue("ShortDescription"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("ShortDescription")->preGetData($this);
	return $data;
}

/**
* Set ShortDescription - Short Description
* @param string $ShortDescription
* @return \Pimcore\Model\Object\NewClass
*/
public function setShortDescription ($ShortDescription) {
	$this->ShortDescription = $ShortDescription;
	return $this;
}

/**
* Get Description - Description
* @return string
*/
public function getDescription () {
	$preValue = $this->preGetValue("Description"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("Description")->preGetData($this);
	return $data;
}

/**
* Set Description - Description
* @param string $Description
* @return \Pimcore\Model\Object\NewClass
*/
public function setDescription ($Description) {
	$this->Description = $Description;
	return $this;
}

/**
* Get FeaturesDesc - Features Desc
* @return string
*/
public function getFeaturesDesc () {
	$preValue = $this->preGetValue("FeaturesDesc"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("FeaturesDesc")->preGetData($this);
	return $data;
}

/**
* Set FeaturesDesc - Features Desc
* @param string $FeaturesDesc
* @return \Pimcore\Model\Object\NewClass
*/
public function setFeaturesDesc ($FeaturesDesc) {
	$this->FeaturesDesc = $FeaturesDesc;
	return $this;
}

/**
* Get RetailPrice - Retail Price
* @return Pimcore\Model\Object\Data\QuantityValue
*/
public function getRetailPrice () {
	$preValue = $this->preGetValue("RetailPrice"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->RetailPrice;
	return $data;
}

/**
* Set RetailPrice - Retail Price
* @param Pimcore\Model\Object\Data\QuantityValue $RetailPrice
* @return \Pimcore\Model\Object\NewClass
*/
public function setRetailPrice ($RetailPrice) {
	$this->RetailPrice = $RetailPrice;
	return $this;
}

/**
* Get SalePrice - Sale Price
* @return Pimcore\Model\Object\Data\QuantityValue
*/
public function getSalePrice () {
	$preValue = $this->preGetValue("SalePrice"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SalePrice;
	return $data;
}

/**
* Set SalePrice - Sale Price
* @param Pimcore\Model\Object\Data\QuantityValue $SalePrice
* @return \Pimcore\Model\Object\NewClass
*/
public function setSalePrice ($SalePrice) {
	$this->SalePrice = $SalePrice;
	return $this;
}

/**
* Get WholesalePrice - Wholesale Price
* @return Pimcore\Model\Object\Data\QuantityValue
*/
public function getWholesalePrice () {
	$preValue = $this->preGetValue("WholesalePrice"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->WholesalePrice;
	return $data;
}

/**
* Set WholesalePrice - Wholesale Price
* @param Pimcore\Model\Object\Data\QuantityValue $WholesalePrice
* @return \Pimcore\Model\Object\NewClass
*/
public function setWholesalePrice ($WholesalePrice) {
	$this->WholesalePrice = $WholesalePrice;
	return $this;
}

/**
* Get ImageFile - Image File
* @return \Pimcore\Model\Asset\Image
*/
public function getImageFile () {
	$preValue = $this->preGetValue("ImageFile"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ImageFile;
	return $data;
}

/**
* Set ImageFile - Image File
* @param \Pimcore\Model\Asset\Image $ImageFile
* @return \Pimcore\Model\Object\NewClass
*/
public function setImageFile ($ImageFile) {
	$this->ImageFile = $ImageFile;
	return $this;
}

/**
* Get ImageAltTag - Image Alt Tag
* @return string
*/
public function getImageAltTag () {
	$preValue = $this->preGetValue("ImageAltTag"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ImageAltTag;
	return $data;
}

/**
* Set ImageAltTag - Image Alt Tag
* @param string $ImageAltTag
* @return \Pimcore\Model\Object\NewClass
*/
public function setImageAltTag ($ImageAltTag) {
	$this->ImageAltTag = $ImageAltTag;
	return $this;
}

/**
* Get width - Width
* @return string
*/
public function getWidth () {
	$preValue = $this->preGetValue("width"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->width;
	return $data;
}

/**
* Set width - Width
* @param string $width
* @return \Pimcore\Model\Object\NewClass
*/
public function setWidth ($width) {
	$this->width = $width;
	return $this;
}

/**
* Get Height - Height
* @return string
*/
public function getHeight () {
	$preValue = $this->preGetValue("Height"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->Height;
	return $data;
}

/**
* Set Height - Height
* @param string $Height
* @return \Pimcore\Model\Object\NewClass
*/
public function setHeight ($Height) {
	$this->Height = $Height;
	return $this;
}

/**
* Get BeginActiveDate - Begin Active Date
* @return \Carbon\Carbon
*/
public function getBeginActiveDate () {
	$preValue = $this->preGetValue("BeginActiveDate"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->BeginActiveDate;
	return $data;
}

/**
* Set BeginActiveDate - Begin Active Date
* @param \Carbon\Carbon $BeginActiveDate
* @return \Pimcore\Model\Object\NewClass
*/
public function setBeginActiveDate ($BeginActiveDate) {
	$this->BeginActiveDate = $BeginActiveDate;
	return $this;
}

/**
* Get EndActiveDate - End Active Date
* @return \Carbon\Carbon
*/
public function getEndActiveDate () {
	$preValue = $this->preGetValue("EndActiveDate"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->EndActiveDate;
	return $data;
}

/**
* Set EndActiveDate - End Active Date
* @param \Carbon\Carbon $EndActiveDate
* @return \Pimcore\Model\Object\NewClass
*/
public function setEndActiveDate ($EndActiveDate) {
	$this->EndActiveDate = $EndActiveDate;
	return $this;
}

/**
* Get ActiveInd - Active Ind
* @return boolean
*/
public function getActiveInd () {
	$preValue = $this->preGetValue("ActiveInd"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ActiveInd;
	return $data;
}

/**
* Set ActiveInd - Active Ind
* @param boolean $ActiveInd
* @return \Pimcore\Model\Object\NewClass
*/
public function setActiveInd ($ActiveInd) {
	$this->ActiveInd = $ActiveInd;
	return $this;
}

/**
* Get DisplayOrder - Display Order
* @return string
*/
public function getDisplayOrder () {
	$preValue = $this->preGetValue("DisplayOrder"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->DisplayOrder;
	return $data;
}

/**
* Set DisplayOrder - Display Order
* @param string $DisplayOrder
* @return \Pimcore\Model\Object\NewClass
*/
public function setDisplayOrder ($DisplayOrder) {
	$this->DisplayOrder = $DisplayOrder;
	return $this;
}

/**
* Get CallForPricing - Call For Pricing
* @return string
*/
public function getCallForPricing () {
	$preValue = $this->preGetValue("CallForPricing"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->CallForPricing;
	return $data;
}

/**
* Set CallForPricing - Call For Pricing
* @param string $CallForPricing
* @return \Pimcore\Model\Object\NewClass
*/
public function setCallForPricing ($CallForPricing) {
	$this->CallForPricing = $CallForPricing;
	return $this;
}

/**
* Get HomepageSpecial - Homepage Special
* @return string
*/
public function getHomepageSpecial () {
	$preValue = $this->preGetValue("HomepageSpecial"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->HomepageSpecial;
	return $data;
}

/**
* Set HomepageSpecial - Homepage Special
* @param string $HomepageSpecial
* @return \Pimcore\Model\Object\NewClass
*/
public function setHomepageSpecial ($HomepageSpecial) {
	$this->HomepageSpecial = $HomepageSpecial;
	return $this;
}

/**
* Get CategorySpecial - Category Special
* @return string
*/
public function getCategorySpecial () {
	$preValue = $this->preGetValue("CategorySpecial"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->CategorySpecial;
	return $data;
}

/**
* Set CategorySpecial - Category Special
* @param string $CategorySpecial
* @return \Pimcore\Model\Object\NewClass
*/
public function setCategorySpecial ($CategorySpecial) {
	$this->CategorySpecial = $CategorySpecial;
	return $this;
}

/**
* Get InventoryDisplay - Inventory Display
* @return string
*/
public function getInventoryDisplay () {
	$preValue = $this->preGetValue("InventoryDisplay"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->InventoryDisplay;
	return $data;
}

/**
* Set InventoryDisplay - Inventory Display
* @param string $InventoryDisplay
* @return \Pimcore\Model\Object\NewClass
*/
public function setInventoryDisplay ($InventoryDisplay) {
	$this->InventoryDisplay = $InventoryDisplay;
	return $this;
}

/**
* Get Keywords - Keywords
* @return string
*/
public function getKeywords () {
	$preValue = $this->preGetValue("Keywords"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->Keywords;
	return $data;
}

/**
* Set Keywords - Keywords
* @param string $Keywords
* @return \Pimcore\Model\Object\NewClass
*/
public function setKeywords ($Keywords) {
	$this->Keywords = $Keywords;
	return $this;
}

/**
* Get ManufacturerID - Manufacturer ID
* @return string
*/
public function getManufacturerID () {
	$preValue = $this->preGetValue("ManufacturerID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ManufacturerID;
	return $data;
}

/**
* Set ManufacturerID - Manufacturer ID
* @param string $ManufacturerID
* @return \Pimcore\Model\Object\NewClass
*/
public function setManufacturerID ($ManufacturerID) {
	$this->ManufacturerID = $ManufacturerID;
	return $this;
}

/**
* Get AdditionalInfoLink - Additional Info Link
* @return \Pimcore\Model\Document\Page | \Pimcore\Model\Document\Snippet | \Pimcore\Model\Document | \Pimcore\Model\Asset
*/
public function getAdditionalInfoLink () {
	$preValue = $this->preGetValue("AdditionalInfoLink"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("AdditionalInfoLink")->preGetData($this);
	return $data;
}

/**
* Set AdditionalInfoLink - Additional Info Link
* @param \Pimcore\Model\Document\Page | \Pimcore\Model\Document\Snippet | \Pimcore\Model\Document | \Pimcore\Model\Asset $AdditionalInfoLink
* @return \Pimcore\Model\Object\NewClass
*/
public function setAdditionalInfoLink ($AdditionalInfoLink) {
	$this->AdditionalInfoLink = $this->getClass()->getFieldDefinition("AdditionalInfoLink")->preSetData($this, $AdditionalInfoLink);
	return $this;
}

/**
* Get AdditionalInfoLinkLabel - Additional Info Link Label
* @return string
*/
public function getAdditionalInfoLinkLabel () {
	$preValue = $this->preGetValue("AdditionalInfoLinkLabel"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->AdditionalInfoLinkLabel;
	return $data;
}

/**
* Set AdditionalInfoLinkLabel - Additional Info Link Label
* @param string $AdditionalInfoLinkLabel
* @return \Pimcore\Model\Object\NewClass
*/
public function setAdditionalInfoLinkLabel ($AdditionalInfoLinkLabel) {
	$this->AdditionalInfoLinkLabel = $AdditionalInfoLinkLabel;
	return $this;
}

/**
* Get ShippingRuleTypeID - Shipping Rule Type ID
* @return string
*/
public function getShippingRuleTypeID () {
	$preValue = $this->preGetValue("ShippingRuleTypeID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ShippingRuleTypeID;
	return $data;
}

/**
* Set ShippingRuleTypeID - Shipping Rule Type ID
* @param string $ShippingRuleTypeID
* @return \Pimcore\Model\Object\NewClass
*/
public function setShippingRuleTypeID ($ShippingRuleTypeID) {
	$this->ShippingRuleTypeID = $ShippingRuleTypeID;
	return $this;
}

/**
* Get SEOTitle - SEO Title
* @return string
*/
public function getSEOTitle () {
	$preValue = $this->preGetValue("SEOTitle"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SEOTitle;
	return $data;
}

/**
* Set SEOTitle - SEO Title
* @param string $SEOTitle
* @return \Pimcore\Model\Object\NewClass
*/
public function setSEOTitle ($SEOTitle) {
	$this->SEOTitle = $SEOTitle;
	return $this;
}

/**
* Get SEOKeywords - SEO Keywords
* @return string
*/
public function getSEOKeywords () {
	$preValue = $this->preGetValue("SEOKeywords"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SEOKeywords;
	return $data;
}

/**
* Set SEOKeywords - SEO Keywords
* @param string $SEOKeywords
* @return \Pimcore\Model\Object\NewClass
*/
public function setSEOKeywords ($SEOKeywords) {
	$this->SEOKeywords = $SEOKeywords;
	return $this;
}

/**
* Get SEOURL - SEO URL
* @return string
*/
public function getSEOURL () {
	$preValue = $this->preGetValue("SEOURL"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SEOURL;
	return $data;
}

/**
* Set SEOURL - SEO URL
* @param string $SEOURL
* @return \Pimcore\Model\Object\NewClass
*/
public function setSEOURL ($SEOURL) {
	$this->SEOURL = $SEOURL;
	return $this;
}

/**
* Get SEODescription - SEO Description
* @return string
*/
public function getSEODescription () {
	$preValue = $this->preGetValue("SEODescription"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SEODescription;
	return $data;
}

/**
* Set SEODescription - SEO Description
* @param string $SEODescription
* @return \Pimcore\Model\Object\NewClass
*/
public function setSEODescription ($SEODescription) {
	$this->SEODescription = $SEODescription;
	return $this;
}

/**
* Get ShipEachItemSeparately - Ship Each Item Separately
* @return string
*/
public function getShipEachItemSeparately () {
	$preValue = $this->preGetValue("ShipEachItemSeparately"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ShipEachItemSeparately;
	return $data;
}

/**
* Set ShipEachItemSeparately - Ship Each Item Separately
* @param string $ShipEachItemSeparately
* @return \Pimcore\Model\Object\NewClass
*/
public function setShipEachItemSeparately ($ShipEachItemSeparately) {
	$this->ShipEachItemSeparately = $ShipEachItemSeparately;
	return $this;
}

/**
* Get QuantityOnHand - Quantity On Hand
* @return string
*/
public function getQuantityOnHand () {
	$preValue = $this->preGetValue("QuantityOnHand"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->QuantityOnHand;
	return $data;
}

/**
* Set QuantityOnHand - Quantity On Hand
* @param string $QuantityOnHand
* @return \Pimcore\Model\Object\NewClass
*/
public function setQuantityOnHand ($QuantityOnHand) {
	$this->QuantityOnHand = $QuantityOnHand;
	return $this;
}

/**
* Get AllowBackOrder - Allow Back Order
* @return string
*/
public function getAllowBackOrder () {
	$preValue = $this->preGetValue("AllowBackOrder"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->AllowBackOrder;
	return $data;
}

/**
* Set AllowBackOrder - Allow Back Order
* @param string $AllowBackOrder
* @return \Pimcore\Model\Object\NewClass
*/
public function setAllowBackOrder ($AllowBackOrder) {
	$this->AllowBackOrder = $AllowBackOrder;
	return $this;
}

/**
* Get BackOrderMsg - Back Order Message
* @return string
*/
public function getBackOrderMsg () {
	$preValue = $this->preGetValue("BackOrderMsg"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("BackOrderMsg")->preGetData($this);
	return $data;
}

/**
* Set BackOrderMsg - Back Order Message
* @param string $BackOrderMsg
* @return \Pimcore\Model\Object\NewClass
*/
public function setBackOrderMsg ($BackOrderMsg) {
	$this->BackOrderMsg = $BackOrderMsg;
	return $this;
}

/**
* Get DropShipInd - Drop Ship Ind
* @return string
*/
public function getDropShipInd () {
	$preValue = $this->preGetValue("DropShipInd"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->DropShipInd;
	return $data;
}

/**
* Set DropShipInd - Drop Ship Ind
* @param string $DropShipInd
* @return \Pimcore\Model\Object\NewClass
*/
public function setDropShipInd ($DropShipInd) {
	$this->DropShipInd = $DropShipInd;
	return $this;
}

/**
* Get DropShipEmailID - Drop Ship Email ID
* @return string
*/
public function getDropShipEmailID () {
	$preValue = $this->preGetValue("DropShipEmailID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->DropShipEmailID;
	return $data;
}

/**
* Set DropShipEmailID - Drop Ship Email ID
* @param string $DropShipEmailID
* @return \Pimcore\Model\Object\NewClass
*/
public function setDropShipEmailID ($DropShipEmailID) {
	$this->DropShipEmailID = $DropShipEmailID;
	return $this;
}

/**
* Get Specifications - Specifications
* @return string
*/
public function getSpecifications () {
	$preValue = $this->preGetValue("Specifications"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->Specifications;
	return $data;
}

/**
* Set Specifications - Specifications
* @param string $Specifications
* @return \Pimcore\Model\Object\NewClass
*/
public function setSpecifications ($Specifications) {
	$this->Specifications = $Specifications;
	return $this;
}

/**
* Get AdditionalInformation - Additional Information
* @return string
*/
public function getAdditionalInformation () {
	$preValue = $this->preGetValue("AdditionalInformation"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->AdditionalInformation;
	return $data;
}

/**
* Set AdditionalInformation - Additional Information
* @param string $AdditionalInformation
* @return \Pimcore\Model\Object\NewClass
*/
public function setAdditionalInformation ($AdditionalInformation) {
	$this->AdditionalInformation = $AdditionalInformation;
	return $this;
}

/**
* Get InStockMsg - In Stock Message
* @return string
*/
public function getInStockMsg () {
	$preValue = $this->preGetValue("InStockMsg"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->InStockMsg;
	return $data;
}

/**
* Set InStockMsg - In Stock Message
* @param string $InStockMsg
* @return \Pimcore\Model\Object\NewClass
*/
public function setInStockMsg ($InStockMsg) {
	$this->InStockMsg = $InStockMsg;
	return $this;
}

/**
* Get OutOfStockMsg - Out Of Stock Message
* @return string
*/
public function getOutOfStockMsg () {
	$preValue = $this->preGetValue("OutOfStockMsg"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->OutOfStockMsg;
	return $data;
}

/**
* Set OutOfStockMsg - Out Of Stock Message
* @param string $OutOfStockMsg
* @return \Pimcore\Model\Object\NewClass
*/
public function setOutOfStockMsg ($OutOfStockMsg) {
	$this->OutOfStockMsg = $OutOfStockMsg;
	return $this;
}

/**
* Get TrackInventoryInd - Track Inventory Ind
* @return string
*/
public function getTrackInventoryInd () {
	$preValue = $this->preGetValue("TrackInventoryInd"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->TrackInventoryInd;
	return $data;
}

/**
* Set TrackInventoryInd - Track Inventory Ind
* @param string $TrackInventoryInd
* @return \Pimcore\Model\Object\NewClass
*/
public function setTrackInventoryInd ($TrackInventoryInd) {
	$this->TrackInventoryInd = $TrackInventoryInd;
	return $this;
}

/**
* Get DownloadLink - Download Link
* @return \Pimcore\Model\Document\Page | \Pimcore\Model\Document\Snippet | \Pimcore\Model\Document | \Pimcore\Model\Asset
*/
public function getDownloadLink () {
	$preValue = $this->preGetValue("DownloadLink"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("DownloadLink")->preGetData($this);
	return $data;
}

/**
* Set DownloadLink - Download Link
* @param \Pimcore\Model\Document\Page | \Pimcore\Model\Document\Snippet | \Pimcore\Model\Document | \Pimcore\Model\Asset $DownloadLink
* @return \Pimcore\Model\Object\NewClass
*/
public function setDownloadLink ($DownloadLink) {
	$this->DownloadLink = $this->getClass()->getFieldDefinition("DownloadLink")->preSetData($this, $DownloadLink);
	return $this;
}

/**
* Get FreeShippingInd - Free Shipping Ind
* @return string
*/
public function getFreeShippingInd () {
	$preValue = $this->preGetValue("FreeShippingInd"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->FreeShippingInd;
	return $data;
}

/**
* Set FreeShippingInd - Free Shipping Ind
* @param string $FreeShippingInd
* @return \Pimcore\Model\Object\NewClass
*/
public function setFreeShippingInd ($FreeShippingInd) {
	$this->FreeShippingInd = $FreeShippingInd;
	return $this;
}

/**
* Get NewProductInd - New Product Ind
* @return string
*/
public function getNewProductInd () {
	$preValue = $this->preGetValue("NewProductInd"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->NewProductInd;
	return $data;
}

/**
* Set NewProductInd - New Product Ind
* @param string $NewProductInd
* @return \Pimcore\Model\Object\NewClass
*/
public function setNewProductInd ($NewProductInd) {
	$this->NewProductInd = $NewProductInd;
	return $this;
}

/**
* Get MaxQty - Maximum Quantity
* @return string
*/
public function getMaxQty () {
	$preValue = $this->preGetValue("MaxQty"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->MaxQty;
	return $data;
}

/**
* Set MaxQty - Maximum Quantity
* @param string $MaxQty
* @return \Pimcore\Model\Object\NewClass
*/
public function setMaxQty ($MaxQty) {
	$this->MaxQty = $MaxQty;
	return $this;
}

/**
* Get ShipSeparately - Ship Separately
* @return string
*/
public function getShipSeparately () {
	$preValue = $this->preGetValue("ShipSeparately"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ShipSeparately;
	return $data;
}

/**
* Set ShipSeparately - Ship Separately
* @param string $ShipSeparately
* @return \Pimcore\Model\Object\NewClass
*/
public function setShipSeparately ($ShipSeparately) {
	$this->ShipSeparately = $ShipSeparately;
	return $this;
}

/**
* Get FeaturedInd - Featured Ind
* @return string
*/
public function getFeaturedInd () {
	$preValue = $this->preGetValue("FeaturedInd"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->FeaturedInd;
	return $data;
}

/**
* Set FeaturedInd - Featured Ind
* @param string $FeaturedInd
* @return \Pimcore\Model\Object\NewClass
*/
public function setFeaturedInd ($FeaturedInd) {
	$this->FeaturedInd = $FeaturedInd;
	return $this;
}

/**
* Get SupplierID - Supplier ID
* @return string
*/
public function getSupplierID () {
	$preValue = $this->preGetValue("SupplierID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->SupplierID;
	return $data;
}

/**
* Set SupplierID - Supplier ID
* @param string $SupplierID
* @return \Pimcore\Model\Object\NewClass
*/
public function setSupplierID ($SupplierID) {
	$this->SupplierID = $SupplierID;
	return $this;
}

/**
* Get RecurringBillingInd - Recurring Billing Ind
* @return string
*/
public function getRecurringBillingInd () {
	$preValue = $this->preGetValue("RecurringBillingInd"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->RecurringBillingInd;
	return $data;
}

/**
* Set RecurringBillingInd - Recurring Billing Ind
* @param string $RecurringBillingInd
* @return \Pimcore\Model\Object\NewClass
*/
public function setRecurringBillingInd ($RecurringBillingInd) {
	$this->RecurringBillingInd = $RecurringBillingInd;
	return $this;
}

/**
* Get RecurringBillingInstallmentInd - Recurring Billing Installment Ind
* @return string
*/
public function getRecurringBillingInstallmentInd () {
	$preValue = $this->preGetValue("RecurringBillingInstallmentInd"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->RecurringBillingInstallmentInd;
	return $data;
}

/**
* Set RecurringBillingInstallmentInd - Recurring Billing Installment Ind
* @param string $RecurringBillingInstallmentInd
* @return \Pimcore\Model\Object\NewClass
*/
public function setRecurringBillingInstallmentInd ($RecurringBillingInstallmentInd) {
	$this->RecurringBillingInstallmentInd = $RecurringBillingInstallmentInd;
	return $this;
}

/**
* Get RecurringBillingPeriod - Recurring Billing Period
* @return string
*/
public function getRecurringBillingPeriod () {
	$preValue = $this->preGetValue("RecurringBillingPeriod"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->RecurringBillingPeriod;
	return $data;
}

/**
* Set RecurringBillingPeriod - Recurring Billing Period
* @param string $RecurringBillingPeriod
* @return \Pimcore\Model\Object\NewClass
*/
public function setRecurringBillingPeriod ($RecurringBillingPeriod) {
	$this->RecurringBillingPeriod = $RecurringBillingPeriod;
	return $this;
}

/**
* Get RecurringBillingFrequency - Recurring Billing Frequency
* @return string
*/
public function getRecurringBillingFrequency () {
	$preValue = $this->preGetValue("RecurringBillingFrequency"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->RecurringBillingFrequency;
	return $data;
}

/**
* Set RecurringBillingFrequency - Recurring Billing Frequency
* @param string $RecurringBillingFrequency
* @return \Pimcore\Model\Object\NewClass
*/
public function setRecurringBillingFrequency ($RecurringBillingFrequency) {
	$this->RecurringBillingFrequency = $RecurringBillingFrequency;
	return $this;
}

/**
* Get RecurringBillingTotalCycles - Recurring Billing Total Cycles
* @return string
*/
public function getRecurringBillingTotalCycles () {
	$preValue = $this->preGetValue("RecurringBillingTotalCycles"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->RecurringBillingTotalCycles;
	return $data;
}

/**
* Set RecurringBillingTotalCycles - Recurring Billing Total Cycles
* @param string $RecurringBillingTotalCycles
* @return \Pimcore\Model\Object\NewClass
*/
public function setRecurringBillingTotalCycles ($RecurringBillingTotalCycles) {
	$this->RecurringBillingTotalCycles = $RecurringBillingTotalCycles;
	return $this;
}

/**
* Get RecurringBillingInitialAmount - Recurring Billing Initial Amount
* @return string
*/
public function getRecurringBillingInitialAmount () {
	$preValue = $this->preGetValue("RecurringBillingInitialAmount"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->RecurringBillingInitialAmount;
	return $data;
}

/**
* Set RecurringBillingInitialAmount - Recurring Billing Initial Amount
* @param string $RecurringBillingInitialAmount
* @return \Pimcore\Model\Object\NewClass
*/
public function setRecurringBillingInitialAmount ($RecurringBillingInitialAmount) {
	$this->RecurringBillingInitialAmount = $RecurringBillingInitialAmount;
	return $this;
}

/**
* Get TaxClassID - Tax Class ID
* @return string
*/
public function getTaxClassID () {
	$preValue = $this->preGetValue("TaxClassID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->TaxClassID;
	return $data;
}

/**
* Set TaxClassID - Tax Class ID
* @param string $TaxClassID
* @return \Pimcore\Model\Object\NewClass
*/
public function setTaxClassID ($TaxClassID) {
	$this->TaxClassID = $TaxClassID;
	return $this;
}

/**
* Get TestInfoID - Test Info ID
* @return string
*/
public function getTestInfoID () {
	$preValue = $this->preGetValue("TestInfoID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->TestInfoID;
	return $data;
}

/**
* Set TestInfoID - Test Info ID
* @param string $TestInfoID
* @return \Pimcore\Model\Object\NewClass
*/
public function setTestInfoID ($TestInfoID) {
	$this->TestInfoID = $TestInfoID;
	return $this;
}

/**
* Get QBItem - QB Item
* @return \Pimcore\Model\Document\Page | \Pimcore\Model\Document\Snippet | \Pimcore\Model\Document | \Pimcore\Model\Asset
*/
public function getQBItem () {
	$preValue = $this->preGetValue("QBItem"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("QBItem")->preGetData($this);
	return $data;
}

/**
* Set QBItem - QB Item
* @param \Pimcore\Model\Document\Page | \Pimcore\Model\Document\Snippet | \Pimcore\Model\Document | \Pimcore\Model\Asset $QBItem
* @return \Pimcore\Model\Object\NewClass
*/
public function setQBItem ($QBItem) {
	$this->QBItem = $this->getClass()->getFieldDefinition("QBItem")->preSetData($this, $QBItem);
	return $this;
}

/**
* Get ProductKey - ProductKey
* @return string
*/
public function getProductKey () {
	$preValue = $this->preGetValue("ProductKey"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->ProductKey;
	return $data;
}

/**
* Set ProductKey - ProductKey
* @param string $ProductKey
* @return \Pimcore\Model\Object\NewClass
*/
public function setProductKey ($ProductKey) {
	$this->ProductKey = $ProductKey;
	return $this;
}

/**
* Get CNESurveyBatchID - CNE Survey Batch ID
* @return string
*/
public function getCNESurveyBatchID () {
	$preValue = $this->preGetValue("CNESurveyBatchID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->CNESurveyBatchID;
	return $data;
}

/**
* Set CNESurveyBatchID - CNE Survey Batch ID
* @param string $CNESurveyBatchID
* @return \Pimcore\Model\Object\NewClass
*/
public function setCNESurveyBatchID ($CNESurveyBatchID) {
	$this->CNESurveyBatchID = $CNESurveyBatchID;
	return $this;
}

/**
* Get CNESurveyAssessmentID - CNE Survey Assessment ID
* @return string
*/
public function getCNESurveyAssessmentID () {
	$preValue = $this->preGetValue("CNESurveyAssessmentID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->CNESurveyAssessmentID;
	return $data;
}

/**
* Set CNESurveyAssessmentID - CNE Survey Assessment ID
* @param string $CNESurveyAssessmentID
* @return \Pimcore\Model\Object\NewClass
*/
public function setCNESurveyAssessmentID ($CNESurveyAssessmentID) {
	$this->CNESurveyAssessmentID = $CNESurveyAssessmentID;
	return $this;
}

/**
* Get CNECertificateID - CNE Certificate ID
* @return string
*/
public function getCNECertificateID () {
	$preValue = $this->preGetValue("CNECertificateID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->CNECertificateID;
	return $data;
}

/**
* Set CNECertificateID - CNE Certificate ID
* @param string $CNECertificateID
* @return \Pimcore\Model\Object\NewClass
*/
public function setCNECertificateID ($CNECertificateID) {
	$this->CNECertificateID = $CNECertificateID;
	return $this;
}

/**
* Get CNEUnits - CNE Units
* @return string
*/
public function getCNEUnits () {
	$preValue = $this->preGetValue("CNEUnits"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->CNEUnits;
	return $data;
}

/**
* Set CNEUnits - CNE Units
* @param string $CNEUnits
* @return \Pimcore\Model\Object\NewClass
*/
public function setCNEUnits ($CNEUnits) {
	$this->CNEUnits = $CNEUnits;
	return $this;
}

/**
* Get BookletsPerUser - Booklets Per User
* @return string
*/
public function getBookletsPerUser () {
	$preValue = $this->preGetValue("BookletsPerUser"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->BookletsPerUser;
	return $data;
}

/**
* Set BookletsPerUser - Booklets Per User
* @param string $BookletsPerUser
* @return \Pimcore\Model\Object\NewClass
*/
public function setBookletsPerUser ($BookletsPerUser) {
	$this->BookletsPerUser = $BookletsPerUser;
	return $this;
}

/**
* Get CE - CE
* @return string
*/
public function getCE () {
	$preValue = $this->preGetValue("CE"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->CE;
	return $data;
}

/**
* Set CE - CE
* @param string $CE
* @return \Pimcore\Model\Object\NewClass
*/
public function setCE ($CE) {
	$this->CE = $CE;
	return $this;
}

/**
* Get PostProcessID - Post Process ID
* @return string
*/
public function getPostProcessID () {
	$preValue = $this->preGetValue("PostProcessID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->PostProcessID;
	return $data;
}

/**
* Set PostProcessID - Post Process ID
* @param string $PostProcessID
* @return \Pimcore\Model\Object\NewClass
*/
public function setPostProcessID ($PostProcessID) {
	$this->PostProcessID = $PostProcessID;
	return $this;
}

/**
* Get LibraryID - Library ID
* @return string
*/
public function getLibraryID () {
	$preValue = $this->preGetValue("LibraryID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->LibraryID;
	return $data;
}

/**
* Set LibraryID - Library ID
* @param string $LibraryID
* @return \Pimcore\Model\Object\NewClass
*/
public function setLibraryID ($LibraryID) {
	$this->LibraryID = $LibraryID;
	return $this;
}

/**
* Get PackageID - Package ID
* @return string
*/
public function getPackageID () {
	$preValue = $this->preGetValue("PackageID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->PackageID;
	return $data;
}

/**
* Set PackageID - Package ID
* @param string $PackageID
* @return \Pimcore\Model\Object\NewClass
*/
public function setPackageID ($PackageID) {
	$this->PackageID = $PackageID;
	return $this;
}

/**
* Get EcomCatalogTaxSchedulID - Ecom Catalog Tax Schedul ID
* @return string
*/
public function getEcomCatalogTaxSchedulID () {
	$preValue = $this->preGetValue("EcomCatalogTaxSchedulID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->EcomCatalogTaxSchedulID;
	return $data;
}

/**
* Set EcomCatalogTaxSchedulID - Ecom Catalog Tax Schedul ID
* @param string $EcomCatalogTaxSchedulID
* @return \Pimcore\Model\Object\NewClass
*/
public function setEcomCatalogTaxSchedulID ($EcomCatalogTaxSchedulID) {
	$this->EcomCatalogTaxSchedulID = $EcomCatalogTaxSchedulID;
	return $this;
}

/**
* Get EcomCatalogTaxOptions - Ecom Catalog Tax Options
* @return string
*/
public function getEcomCatalogTaxOptions () {
	$preValue = $this->preGetValue("EcomCatalogTaxOptions"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->EcomCatalogTaxOptions;
	return $data;
}

/**
* Set EcomCatalogTaxOptions - Ecom Catalog Tax Options
* @param string $EcomCatalogTaxOptions
* @return \Pimcore\Model\Object\NewClass
*/
public function setEcomCatalogTaxOptions ($EcomCatalogTaxOptions) {
	$this->EcomCatalogTaxOptions = $EcomCatalogTaxOptions;
	return $this;
}

/**
* Get EcomCatalogTaxability - Ecom Catalog Taxability
* @return string
*/
public function getEcomCatalogTaxability () {
	$preValue = $this->preGetValue("EcomCatalogTaxability"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->EcomCatalogTaxability;
	return $data;
}

/**
* Set EcomCatalogTaxability - Ecom Catalog Taxability
* @param string $EcomCatalogTaxability
* @return \Pimcore\Model\Object\NewClass
*/
public function setEcomCatalogTaxability ($EcomCatalogTaxability) {
	$this->EcomCatalogTaxability = $EcomCatalogTaxability;
	return $this;
}

/**
* Get EcomCatalogClassificationID - Ecom Catalog Classification ID
* @return string
*/
public function getEcomCatalogClassificationID () {
	$preValue = $this->preGetValue("EcomCatalogClassificationID"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->EcomCatalogClassificationID;
	return $data;
}

/**
* Set EcomCatalogClassificationID - Ecom Catalog Classification ID
* @param string $EcomCatalogClassificationID
* @return \Pimcore\Model\Object\NewClass
*/
public function setEcomCatalogClassificationID ($EcomCatalogClassificationID) {
	$this->EcomCatalogClassificationID = $EcomCatalogClassificationID;
	return $this;
}

/**
* Get NumberOfDays - Number Of Days
* @return string
*/
public function getNumberOfDays () {
	$preValue = $this->preGetValue("NumberOfDays"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->NumberOfDays;
	return $data;
}

/**
* Set NumberOfDays - Number Of Days
* @param string $NumberOfDays
* @return \Pimcore\Model\Object\NewClass
*/
public function setNumberOfDays ($NumberOfDays) {
	$this->NumberOfDays = $NumberOfDays;
	return $this;
}

/**
* Get HideStudyMaterials - Hide Study Materials
* @return boolean
*/
public function getHideStudyMaterials () {
	$preValue = $this->preGetValue("HideStudyMaterials"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->HideStudyMaterials;
	return $data;
}

/**
* Set HideStudyMaterials - Hide Study Materials
* @param boolean $HideStudyMaterials
* @return \Pimcore\Model\Object\NewClass
*/
public function setHideStudyMaterials ($HideStudyMaterials) {
	$this->HideStudyMaterials = $HideStudyMaterials;
	return $this;
}

/**
* Get HideTakeExam - Hide Take Exam
* @return boolean
*/
public function getHideTakeExam () {
	$preValue = $this->preGetValue("HideTakeExam"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->HideTakeExam;
	return $data;
}

/**
* Set HideTakeExam - Hide Take Exam
* @param boolean $HideTakeExam
* @return \Pimcore\Model\Object\NewClass
*/
public function setHideTakeExam ($HideTakeExam) {
	$this->HideTakeExam = $HideTakeExam;
	return $this;
}

/**
* Get IsMandatory - Is Mandatory
* @return boolean
*/
public function getIsMandatory () {
	$preValue = $this->preGetValue("IsMandatory"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->IsMandatory;
	return $data;
}

/**
* Set IsMandatory - Is Mandatory
* @param boolean $IsMandatory
* @return \Pimcore\Model\Object\NewClass
*/
public function setIsMandatory ($IsMandatory) {
	$this->IsMandatory = $IsMandatory;
	return $this;
}

/**
* Get IsHealthcare - Is Healthcare
* @return boolean
*/
public function getIsHealthcare () {
	$preValue = $this->preGetValue("IsHealthcare"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->IsHealthcare;
	return $data;
}

/**
* Set IsHealthcare - Is Healthcare
* @param boolean $IsHealthcare
* @return \Pimcore\Model\Object\NewClass
*/
public function setIsHealthcare ($IsHealthcare) {
	$this->IsHealthcare = $IsHealthcare;
	return $this;
}

/**
* Get IsVisible - Is Visible
* @return boolean
*/
public function getIsVisible () {
	$preValue = $this->preGetValue("IsVisible"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->IsVisible;
	return $data;
}

/**
* Set IsVisible - Is Visible
* @param boolean $IsVisible
* @return \Pimcore\Model\Object\NewClass
*/
public function setIsVisible ($IsVisible) {
	$this->IsVisible = $IsVisible;
	return $this;
}

/**
* Get IsAvailableOnline - Is Available Online
* @return boolean
*/
public function getIsAvailableOnline () {
	$preValue = $this->preGetValue("IsAvailableOnline"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->IsAvailableOnline;
	return $data;
}

/**
* Set IsAvailableOnline - Is Available Online
* @param boolean $IsAvailableOnline
* @return \Pimcore\Model\Object\NewClass
*/
public function setIsAvailableOnline ($IsAvailableOnline) {
	$this->IsAvailableOnline = $IsAvailableOnline;
	return $this;
}

/**
* Get IsHideBatchInfo - Is Hide Batch Info
* @return boolean
*/
public function getIsHideBatchInfo () {
	$preValue = $this->preGetValue("IsHideBatchInfo"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->IsHideBatchInfo;
	return $data;
}

/**
* Set IsHideBatchInfo - Is Hide Batch Info
* @param boolean $IsHideBatchInfo
* @return \Pimcore\Model\Object\NewClass
*/
public function setIsHideBatchInfo ($IsHideBatchInfo) {
	$this->IsHideBatchInfo = $IsHideBatchInfo;
	return $this;
}

/**
* Get IsShipped - Is Shipped
* @return boolean
*/
public function getIsShipped () {
	$preValue = $this->preGetValue("IsShipped"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->IsShipped;
	return $data;
}

/**
* Set IsShipped - Is Shipped
* @param boolean $IsShipped
* @return \Pimcore\Model\Object\NewClass
*/
public function setIsShipped ($IsShipped) {
	$this->IsShipped = $IsShipped;
	return $this;
}

/**
* Get IsLiveSession - Is Live Session
* @return boolean
*/
public function getIsLiveSession () {
	$preValue = $this->preGetValue("IsLiveSession"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->IsLiveSession;
	return $data;
}

/**
* Set IsLiveSession - Is Live Session
* @param boolean $IsLiveSession
* @return \Pimcore\Model\Object\NewClass
*/
public function setIsLiveSession ($IsLiveSession) {
	$this->IsLiveSession = $IsLiveSession;
	return $this;
}

/**
* Get IsException - Is Exception
* @return boolean
*/
public function getIsException () {
	$preValue = $this->preGetValue("IsException"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->IsException;
	return $data;
}

/**
* Set IsException - Is Exception
* @param boolean $IsException
* @return \Pimcore\Model\Object\NewClass
*/
public function setIsException ($IsException) {
	$this->IsException = $IsException;
	return $this;
}

protected static $_relationFields = array (
  'AdditionalInfoLink' => 
  array (
    'type' => 'href',
  ),
  'DownloadLink' => 
  array (
    'type' => 'href',
  ),
  'QBItem' => 
  array (
    'type' => 'href',
  ),
);

public $lazyLoadedFields = array (
  0 => 'AdditionalInfoLink',
  1 => 'DownloadLink',
  2 => 'QBItem',
);

}

