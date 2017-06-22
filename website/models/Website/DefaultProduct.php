<?php

namespace Website;

use Pimcore\Model\Cache;
use Pimcore\Model\Object\AbstractObject;
use Pimcore\Model\Object\Folder;
use Pimcore\Model\Object\Product;
use Website\Tool\AdminStyle;
use Website\Product\TraitClasses\Checkoutable;
use Website\Tool\SizeSort;

class DefaultProduct extends Product {

    use Checkoutable;

    public function getElementAdminStyle() {
        if (!$this->o_elementAdminStyle) {
            $this->o_elementAdminStyle = new AdminStyle($this);
        }
        return $this->o_elementAdminStyle;
    }

    public function save() {
        parent::save();

        Cache::clearTag("object_" . $this->internalGetBaseProduct()->getId());
    }


    public function isActive($inProductList = false) {
        return $this->isPublished();
    }

    public function getOSDoIndexProduct() {
        if($this->getType() == "object" && $this->getParent() instanceof Product) {
            return false;
        } else {
            return true;
        }
    }

    public function getOSParentId() {
        if($this->getType() == "variant" && $this->getParent()->getParent() instanceof Product) {
            return $this->getParent()->getParent()->getId();
        } elseif ($this->getParent() instanceof Product) {
            return parent::getOSParentId();
        } else {
            return $this->getId();
        }
    }

    protected $prices = array();

    /**
     * Returns an array on min and max price for a product based on all it's children
     *
     * @param string $priceType (new|old)
     * @return array|int|null
     */
    public function getPriceRange($priceType = 'new') {
        if(!array_key_exists($priceType, $this->prices)) {
            $method = $priceType == 'new' ? 'getPrice' : 'getPriceOld';
            if($this->isVariant()) {
                return $this->$method();
            } else {
                $prices = array();

                $colorSizeVariants = $this->internalGetSizeVariants();
                foreach($colorSizeVariants as $sizeVariants) {
                    foreach($sizeVariants as $sizeVariant) {
                        $prices[] = $sizeVariant->$method();
                    }
                }
                if ($prices) {
                    $min = min($prices);
                    $max = max($prices);
                    if($min == $max) {
                        $this->prices[$priceType] = $min;
                    } else {
                        $this->prices[$priceType] = array('min' => $min, 'max' => $max);
                    }
                } else {
                    $this->prices[$priceType] = null;
                }
            }
        }
        return $this->prices[$priceType];

    }

    /**
     * @return \Pimcore\Model\Asset\Image|null
     */
    public function getFirstImageAsset() {
        $images = $this->getImages();
        if ($images->items[0] && $images->items[0]->getImage()) {
            $firstImage = $images->items[0]->getImage();
            return $firstImage;
        } elseif (\Pimcore\Tool\Frontend::getWebsiteConfig()->fallbackImage) {
            return \Pimcore\Tool\Frontend::getWebsiteConfig()->fallbackImage;
        } else {
            return null;
        }
    }

    /**
     * returns product variant that should be used for detail link
     *
     * @return \Website\DefaultProduct
     */
    public function getLinkProduct() {
        $firstSizeVariants = $this->getColorVariants(true);
        if(count($firstSizeVariants) == 0)
        {
            // no variants
            return $this;
        }
        else
        {
            return $firstSizeVariants[0];
        }
    }


    /**
     * Returns concatenated category names for product
     * @param bool $seo to suppress seo name, default is true and returns the seo name if available
     * @return string
     */
    public function getCategoriesText( $seo = true) {
        $categories = $this->getCategories();
        $categoriesArray = array();
        foreach ($categories as $item) {
            $categoriesArray[] = ( $item->getSeoname() && $seo) ? $item->getSeoname() : $item->getName();
        }
        return implode(',' , $categoriesArray);
    }

    public function getMainMaterialText() {
        $mainMaterials = $this->getMaterialComposition() ? $this->getMaterialComposition() : array();
        $mainMaterialsArray = array();
        foreach ($mainMaterials as $item) {
            if ($item->getPercent()) {
                $mainMaterialsArray[] = $item->getPercent() . '% ' . $item->getObject()->getName();
            } else {
                $mainMaterialsArray[] = $item->getObject()->getName();
            }

        }
        return implode(',', $mainMaterialsArray);
    }

    public function getSecondaryMaterialText() {
        $secondaryMaterials = $this->getSecondaryMaterialComposition() ? $this->getSecondaryMaterialComposition() : array() ;
        $secondaryMaterialsArray = array();
        foreach ($secondaryMaterials as $item) {
            if ($item->getPercent()) {
                $secondaryMaterialsArray[] = $item->getPercent() . '% ' .$item->getObject()->getName();
            } else {
                $secondaryMaterialsArray[] = $item->getObject()->getName();
            }
        }
        return implode(',', $secondaryMaterialsArray);
    }

    public function getCanonicalId() {
        if($this->isVariant() ) {
            return $this->getParent()->getCanonicalId();
        } else {
            return $this->getId();
        }
    }

    /**
     * Returns the first size variant for all color variants (or just the color variants) of a product regardless if it's the main product or already a color variant
     *
     * @param $withSize switch the color with ot without the first size variant
     * @return \Website\DefaultProduct[]
     */
    public function getColorVariants($withSize = true) {
        if($withSize) {
            $firstSizeVariants = array();
            foreach($this->internalGetFirstSizeVariants() as $id => $sizeVariant) {
                if($sizeVariant) {
                    $firstSizeVariants[] = $sizeVariant;
                } else {
                    $firstSizeVariants[] = AbstractObject::getById($id);
                }
            }
            return $firstSizeVariants;
        } else {
            return $this->internalGetColorVariants();
        }

    }


    public $baseProduct = null;
    public $baseColorVariant = null;
    private $colorVariants = null;
    public $firstSizeVariants = null;
    private $sizeVariants = null;

    protected function fillBaseProducts() {
        if(!$this->isVariant()) {
            $this->baseProduct = $this;
            $this->baseColorVariant = null;
        } elseif($this->getType() == AbstractObject::OBJECT_TYPE_OBJECT) {
            $this->baseProduct = $this->getParent();
            $this->baseColorVariant = $this;
        } elseif($this->getType() == AbstractObject::OBJECT_TYPE_VARIANT && $this->getParent()->getType() == AbstractObject::OBJECT_TYPE_OBJECT) {
            $this->baseColorVariant = $this->getParent();
            $this->baseProduct = $this->getParent()->getParent();
        } else {
            throw new \Exception("Invalid Product Tree with object " . $this->getId());
        }
    }

    protected function fillVariants() {

        $this->fillBaseProducts();

        $this->colorVariants = $this->internalGetColorVariants(); // $this->baseProduct->getChilds(array(Object_Abstract::OBJECT_TYPE_OBJECT));
        $this->firstSizeVariants = array();
        if(!empty($this->colorVariants)) {
            foreach($this->colorVariants as $colorVariant) {
                $childs = $colorVariant->getChilds((array(AbstractObject::OBJECT_TYPE_VARIANT)));
                $this->firstSizeVariants[$colorVariant->getId()] = $childs[0];
            }
        }
    }

    public function internalGetBaseProduct() {
        if(empty($this->baseProduct)) {
            $this->fillVariants();
        }
        return $this->baseProduct;
    }

    protected function internalGetColorVariants() {
        if($this->colorVariants === null) {
            $this->colorVariants = $this->internalGetBaseProduct()->getChilds(array(AbstractObject::OBJECT_TYPE_OBJECT));
        }
        return $this->colorVariants;
    }

    protected function internalGetSizeVariants() {
        if($this->sizeVariants === null) {
            $this->sizeVariants = array();
            if(!empty($this->colorVariants)) {
                foreach($this->colorVariants as $colorVariant) {
                    $this->sizeVariants[$colorVariant->getId()] = $colorVariant->getChilds((array(AbstractObject::OBJECT_TYPE_VARIANT)));
                }
            }
        }
        return $this->sizeVariants;
    }


    protected function internalGetFirstSizeVariants() {
        if($this->firstSizeVariants === null) {
            $this->fillVariants();
        }
        return $this->firstSizeVariants;
    }

    public function getBaseColorVariant() { 
        if(empty($this->baseColorVariant)) {
            $this->fillVariants();
        }
        return $this->baseColorVariant;
    }


    /**
     * Returns size variants for a product regardless if it's the main product, a color child or a size variant
     *
     * @return \Website\DefaultProduct[]|null
     */
    public function getSizeVariants() {

        if(empty($this->baseProduct)) {
            $this->fillBaseProducts();
        }

        if($this->baseColorVariant) {
            $list = new Product\Listing();
            $list->setCondition("o_parentId = ?", $this->baseColorVariant->getId());
            $list->setObjectTypes(array(AbstractObject::OBJECT_TYPE_VARIANT));
            $list->setOrderKey("size");
            $list->setOrder("ASC");
            return SizeSort::sort($list->load());
        } else {
            return array();
        }

    }


    protected $isVariant = null;

    /**
     * Checks if a a product is a variant or the main product
     *
     * @return bool
     */
    public function isVariant() {
        if($this->isVariant === null) {
            if($this->getType() == "object" && $this->getParent() instanceof Folder) {
                $this->isVariant = false;
            } else {
                $this->isVariant = true;
            }
        }
        return $this->isVariant;
    }


    public function hasTechnologyAttributes() {
        return $this->getMainMaterialText() || $this->getSecondaryMaterialText() || $this->getFeatures();
    }

    public function getFirstCategory() {
        if($categories = $this->getCategories()) {
            foreach($categories as $cat) {
                return $cat;
            }
        }
    }

    /**
     * enables inheritance for field collections, if xxxInheritance field is available and set to string 'true'
     *
     * @param string $key
     * @return mixed|\Pimcore\Model\Object\Fieldcollection
     */
    public function preGetValue($key) {

        if ($this->getClass()->getAllowInherit()
            && AbstractObject::doGetInheritedValues()
            && $this->getClass()->getFieldDefinition($key) instanceof \Pimcore\Model\Object\ClassDefinition\Data\Fieldcollections
        ) {

            $checkInheritanceKey = $key . "Inheritance";
            if ($this->{
                'get' . $checkInheritanceKey
                }() == "true"
            ) {
                $parentValue = $this->getValueFromParent($key);
                $data = $this->$key;
                if(!$data) {
                    $data = $this->getClass()->getFieldDefinition($key)->preGetData($this);;
                }
                if (!$data) {
                    return $parentValue;
                } else {
                    $value = new \Pimcore\Model\Object\Fieldcollection($data->getItems());
                    if (!empty($parentValue)) {
                        foreach ($parentValue as $entry) {
                            $value->add($entry);
                        }
                    }
                    return $value;
                }
            }
        }

        return parent::preGetValue($key);
    }

}
