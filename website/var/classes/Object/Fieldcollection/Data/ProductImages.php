<?php 

/** 
* Generated at: 2017-06-20T16:54:44+02:00
* IP: 127.0.0.1


Fields Summary: 
 - image [image]
*/ 

namespace Pimcore\Model\Object\Fieldcollection\Data;

use Pimcore\Model\Object;

class ProductImages extends Object\Fieldcollection\Data\AbstractData  {

public $type = "productImages";
public $image;


/**
* Get image - Image
* @return \Pimcore\Model\Asset\Image
*/
public function getImage () {
	$data = $this->image;
	 return $data;
}

/**
* Set image - Image
* @param \Pimcore\Model\Asset\Image $image
* @return \Pimcore\Model\Object\ProductImages
*/
public function setImage ($image) {
	$this->image = $image;
	return $this;
}

}

