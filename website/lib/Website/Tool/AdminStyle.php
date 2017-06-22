<?php

namespace Website\Tool;

use Pimcore\Model\Object\AbstractObject;
use Pimcore\Model\Object\Product;

class AdminStyle extends \Pimcore\Model\Element\AdminStyle {

    public function __construct($element) {
        parent::__construct($element);

        if($element instanceof Product) {
            $backup = AbstractObject::doGetInheritedValues($element);
            AbstractObject::setGetInheritedValues(true);
            if($element->getParent() instanceof Product) {
                $this->elementIcon = '/pimcore/static/img/icon/tag_green.png';
                $this->elementIconClass = null;
            } else {
                $this->elementIcon = '/pimcore/static/img/icon/tag_blue.png';
                $this->elementIconClass = null;
            }
            AbstractObject::setGetInheritedValues($backup);
        }
    }

}