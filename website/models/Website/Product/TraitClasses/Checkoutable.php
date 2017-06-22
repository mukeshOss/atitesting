<?php

namespace Website\Product\TraitClasses;

use OnlineShop\Framework\AvailabilitySystem\IAvailability;
use OnlineShop\Framework\Factory;

trait Checkoutable {

    public function getOSName() {
        return $this->getName();
    }

    public function getOSPrice($quantityScale = 1) {
        return $this->getOSPriceInfo($quantityScale)->getPrice();
    }

    public function getPriceSystemName() {
        return 'encompass';
    }

    public function getPriceSystemImplementation() {
        return Factory::getInstance()->getPriceSystem($this->getPriceSystemName());
    }

    public function getOSPriceInfo($quantityScale = 1, $forceListPrice = false) {
        return $this->getPriceSystemImplementation()->getPriceInfo($this,$quantityScale, null, $forceListPrice);
    }

    public function getOSProductNumber() {
        return $this->getId();
    }

    public function getAvailabilitySystemName()
    {
        return "default";
    }

    public function getOSIsBookable($quantityScale = 1)
    {
        $price = $this->getOSPrice($quantityScale);
        return !empty($price) && $this->isActive();
    }


    public function getAvailabilitySystemImplementation()
    {
        return Factory::getInstance()->getAvailabilitySystem($this->getAvailabilitySystemName());
    }

    /**
     * returns availability info based on given quantity
     *
     * @param int $quantity
     * @return IAvailability
     */
    public function getOSAvailabilityInfo($quantity = null)
    {
        return $this->getAvailabilitySystemImplementation()->getAvailabilityInfo($this, $quantity);
    }


    /**
     * @param array      $params
     * @param string     $route
     * @param bool|true  $reset
     *
     * @return string
     */
    public function getDetailUrl(array $params = [], $route = 'shop-detail', $reset = true)
    {
        // add id
        if(!array_key_exists('product', $params))
        {
            $params['product'] = $this->getId();
        }

        //add prefix / by default language/shop
        if(!array_key_exists('prefix', $params))
        {
            if($params["document"]) {
                $params["prefix"] = substr($params["document"]->getFullPath(), 1);
            } else {
                $params['prefix'] = \Zend_Registry::get("Zend_Locale")->getLanguage() . "/shop";
            }
        }

        // add name
        if(!array_key_exists('name', $params))
        {
            // add category path
            $category = $this->getFirstCategory();
            if($category) {
                $path = $category->getNavigationPath($params['rootCategory'], $params['document']);
                $params['name'] = $path;
            }

            // add name
            $name = \Pimcore\File::getValidFilename( $this->getOSName() );
            $params['name'] .= preg_replace('#-{2,}#','-', $name);
        }

        unset($params["rootCategory"]);
        unset($params["document"]);

        // create url
        $urlHelper = new \Pimcore\View\Helper\Url();
        return $urlHelper->url($params, $route, $reset);
    }


    public function getShopDetailLink($view, $canonical = false) {
        $params = is_array($view->params) ? $view->params : $view->getAllParams();
        unset($params['controller']);
        unset($params['action']);
        unset($params['module']);
        unset($params['document']);
        unset($params['pimcore_request_source']);
        unset($params['ajax-call']);
        unset($params['infinite-scroll']);
        unset($params['view']);
        unset($params['cartId']);

        if($canonical) {
            unset($params['category']);
        }

        $params = array_merge((array)$params, array('name'=>strtolower(\Website\Tool\Text::toUrl($this->getName() ? $this->getName() : $this->getDesc1())),'product' => $this->getId()));
        if(!$params['country']) {
            $params['country'] = $view->document->getProperty("country");
        }

        $urlCategory = $this->getFirstCategory();

        if($urlCategory) {
            $params['name'] = $urlCategory->getNavigationPath().'/'.$params['name'];
        }


        $params['country'] = str_replace('/','',$params['country']);

        return $view->url($params, "shop-detail");
    }



    /**
     * @param string $thumbnail thumbnail name configured in the Pimcore admin
     * @return string|null
     */
    public function getFirstImage($thumbnail) {
        $firstImageAsset = $this->getFirstImageAsset();
        if($firstImageAsset) {
            return $firstImageAsset->getThumbnail($thumbnail);
        }
        return null;
    }


    public function getHeroAttributes($view) {
        $heroAttributes = [];
        if($this->getArtno()) {
            $heroAttributes[] = "<strong>" . $view->translate("shop.sku") . ":</strong> " . $this->getArtno();
        }
        if($this->getEan()) {
            $heroAttributes[] = "<strong>" . $view->translate("shop.ean") . ":</strong> " . $this->getEan();
        }
        if($this->getSize() && $this->getSize() != " ") {
            $heroAttributes[] = "<strong>" . $view->translate("shop.size") . ":</strong> " . $this->getSize();
        }
        if($this->getColor()) {
            $colors = $this->getColor();
            $translatedColors = array();
            foreach($colors as $c) {
                $translatedColors[] = $view->translate("optionvalue." . $c);
            }
            $heroAttributes[] = "<strong>" . $view->translate("shop.color") . ":</strong> " .  implode(", ", $translatedColors);
        }
        return $heroAttributes;
    }

}