<?php 

/** 
* Generated at: 2017-06-20T16:55:52+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- localizedfields [localizedfields]
-- icon [image]
-- name [input]
-- seoname [input]
-- description [wysiwyg]
-- link [link]
-- images [multihref]
-- documents [multihref]
-- videos [multihref]
-- downloads [multihref]
*/ 

namespace Pimcore\Model\Object;



/**
* @method \Pimcore\Model\Object\ProductAttribute\Listing getByLocalizedfields ($field, $value, $locale = null, $limit = 0) 
*/

class ProductAttribute extends Concrete {

public $o_classId = 21;
public $o_className = "ProductAttribute";
public $localizedfields;


/**
* @param array $values
* @return \Pimcore\Model\Object\ProductAttribute
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get localizedfields - Base
* @return \Pimcore\Model\Object\Localizedfield
*/
public function getLocalizedfields () {
	$preValue = $this->preGetValue("localizedfields"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	$data = $this->getClass()->getFieldDefinition("localizedfields")->preGetData($this);
	return $data;
}

/**
* Get icon - Icon
* @return \Pimcore\Model\Asset\Image
*/
public function getIcon ($language = null) {
	$data = $this->getLocalizedfields()->getLocalizedValue("icon", $language);
	$preValue = $this->preGetValue("icon"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	 return $data;
}

/**
* Get name - Name
* @return string
*/
public function getName ($language = null) {
	$data = $this->getLocalizedfields()->getLocalizedValue("name", $language);
	$preValue = $this->preGetValue("name"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	 return $data;
}

/**
* Get seoname - SEO Name
* @return string
*/
public function getSeoname ($language = null) {
	$data = $this->getLocalizedfields()->getLocalizedValue("seoname", $language);
	$preValue = $this->preGetValue("seoname"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	 return $data;
}

/**
* Get description - Description
* @return string
*/
public function getDescription ($language = null) {
	$data = $this->getLocalizedfields()->getLocalizedValue("description", $language);
	$preValue = $this->preGetValue("description"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	 return $data;
}

/**
* Get link - Further Details Document (read more)
* @return \Pimcore\Model\Object\Data\Link
*/
public function getLink ($language = null) {
	$data = $this->getLocalizedfields()->getLocalizedValue("link", $language);
	$preValue = $this->preGetValue("link"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	 return $data;
}

/**
* Get images - Images
* @return \Pimcore\Model\Asset[]
*/
public function getImages ($language = null) {
	$data = $this->getLocalizedfields()->getLocalizedValue("images", $language);
	$preValue = $this->preGetValue("images"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	 return $data;
}

/**
* Get documents - Documents
* @return \Pimcore\Model\Document\Page[] | \Pimcore\Model\Document\Snippet[] | \Pimcore\Model\Document[]
*/
public function getDocuments ($language = null) {
	$data = $this->getLocalizedfields()->getLocalizedValue("documents", $language);
	$preValue = $this->preGetValue("documents"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	 return $data;
}

/**
* Get videos - Videos
* @return \Pimcore\Model\Asset\video[]
*/
public function getVideos ($language = null) {
	$data = $this->getLocalizedfields()->getLocalizedValue("videos", $language);
	$preValue = $this->preGetValue("videos"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	 return $data;
}

/**
* Get downloads - Downloads
* @return \Pimcore\Model\Asset[]
*/
public function getDownloads ($language = null) {
	$data = $this->getLocalizedfields()->getLocalizedValue("downloads", $language);
	$preValue = $this->preGetValue("downloads"); 
	if($preValue !== null && !\Pimcore::inAdmin()) { 
		return $preValue;
	}
	 return $data;
}

/**
* Set localizedfields - Base
* @param \Pimcore\Model\Object\Localizedfield $localizedfields
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setLocalizedfields ($localizedfields) {
	$this->localizedfields = $localizedfields;
	return $this;
}

/**
* Set icon - Icon
* @param \Pimcore\Model\Asset\Image $icon
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setIcon ($icon, $language = null) {
	$this->getLocalizedfields()->setLocalizedValue("icon", $icon, $language);
	return $this;
}

/**
* Set name - Name
* @param string $name
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setName ($name, $language = null) {
	$this->getLocalizedfields()->setLocalizedValue("name", $name, $language);
	return $this;
}

/**
* Set seoname - SEO Name
* @param string $seoname
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setSeoname ($seoname, $language = null) {
	$this->getLocalizedfields()->setLocalizedValue("seoname", $seoname, $language);
	return $this;
}

/**
* Set description - Description
* @param string $description
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setDescription ($description, $language = null) {
	$this->getLocalizedfields()->setLocalizedValue("description", $description, $language);
	return $this;
}

/**
* Set link - Further Details Document (read more)
* @param \Pimcore\Model\Object\Data\Link $link
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setLink ($link, $language = null) {
	$this->getLocalizedfields()->setLocalizedValue("link", $link, $language);
	return $this;
}

/**
* Set images - Images
* @param \Pimcore\Model\Asset[] $images
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setImages ($images, $language = null) {
	$this->getLocalizedfields()->setLocalizedValue("images", $images, $language);
	return $this;
}

/**
* Set documents - Documents
* @param \Pimcore\Model\Document\Page[] | \Pimcore\Model\Document\Snippet[] | \Pimcore\Model\Document[] $documents
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setDocuments ($documents, $language = null) {
	$this->getLocalizedfields()->setLocalizedValue("documents", $documents, $language);
	return $this;
}

/**
* Set videos - Videos
* @param \Pimcore\Model\Asset\video[] $videos
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setVideos ($videos, $language = null) {
	$this->getLocalizedfields()->setLocalizedValue("videos", $videos, $language);
	return $this;
}

/**
* Set downloads - Downloads
* @param \Pimcore\Model\Asset[] $downloads
* @return \Pimcore\Model\Object\ProductAttribute
*/
public function setDownloads ($downloads, $language = null) {
	$this->getLocalizedfields()->setLocalizedValue("downloads", $downloads, $language);
	return $this;
}

protected static $_relationFields = array (
);

public $lazyLoadedFields = NULL;

}

