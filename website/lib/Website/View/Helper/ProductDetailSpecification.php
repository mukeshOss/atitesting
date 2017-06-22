<?php

namespace Website\View\Helper;

use Pimcore\Model\Object\AbstractObject;
use Pimcore\Model\Object\ClassDefinition\Data\Checkbox;
use Pimcore\Model\Object\ClassDefinition\Data\Image;
use Pimcore\Model\Object\ClassDefinition\Data\Multiselect;
use Pimcore\Model\Object\ClassDefinition\Data\Objects;
use Pimcore\Model\Object\ClassDefinition\Data\Select;

class ProductDetailSpecification extends \Zend_View_Helper_Abstract {


    public function productDetailSpecification($property, $product) {
        if($property instanceof \Elements\OutputDataConfigToolkit\ConfigElement\Operator\Group) {
            $labeledValue = $property->getLabeledValue($product);
            if($labeledValue) {
                $result = "
                            <tr class='groupheading' >
                                <th colspan='2'>" . $this->view->translate("attr." . $property->getLabel()) . "</th>
                            </tr>
                ";

                foreach($property->getChilds() as $child) {

                    $result .= $this->view->productDetailSpecification($child, $product);

                }

                return $result;
            }

        } else if($property instanceof \Elements\OutputDataConfigToolkit\ConfigElement\Value\DefaultValue ||
            $property instanceof \Elements\OutputDataConfigToolkit\ConfigElement\Operator\Concatenator) {
            $labeledValue = $property->getLabeledValue($product);
            if($labeledValue->def instanceof Select) {
                $value = $this->getSelectValue($labeledValue->def, $labeledValue->value);
            } else if($labeledValue->def instanceof Multiselect) {

                $values = $labeledValue->value;
                $translatedValues = array();
                if(is_array($values)) {
                    foreach($values as $value) {
                        $translatedValues[] = $this->getSelectValue($labeledValue->def, $value);
                    }

                    $value = "<div class='optionvalue'>" . implode("</div><div class='optionvalue'>", $translatedValues) . "</div>";
                } else {
                    $value = '';
                }


            } else if($labeledValue->def instanceof Objects) {

                $names = array();
                if(is_array($labeledValue->value)) {
                    foreach($labeledValue->value as $entry) {
                        if($entry instanceof AbstractObject && method_exists($entry, "getName")) {
                            $names[] = $entry->getName();
                        }
                    }
                }

                $value = implode(", ", $names);

            } else if($labeledValue->value instanceof AbstractObject && method_exists($labeledValue->value, "getName")) {
                    $value = $labeledValue->value->getName();
            } else if($labeledValue->def instanceof Checkbox) {
                $value = $this->view->translate("optionvalue." . ($labeledValue->value ? "true" : "false"));
            } else if($labeledValue->def instanceof Image) {
                $value = '<img src="' . $labeledValue->value . '" />';
            } else {
                $value = $labeledValue->value;
                if(is_object($value)) {
                    p_r($labeledValue);
                    p_r($property);
                    die();
                }
            }


            if(is_numeric($value)) {
                $value = \Zend_Locale_Format::toNumber($value, array('locale' => \Zend_Registry::get('Zend_Locale')));
            }

            if($labeledValue->value) {
                $result = "
                            <tr>
                                <td class=\"firstcol\">" . $this->view->translate("attr." . $labeledValue->label) . "</td>
                                <td class=\"secondcol\">" . $value . "</td>
                            </tr>
                ";
                return $result;
            }

        } else {
            p_r($property);
        }

    }


    private function getSelectValue($def, $value) {
        return $this->view->translate("optionvalue." . $value);
    }
    
    /**
     * function for navigation
     * @param type $lang
     * @return string
     */
    public function getBreadcrumb($category) {
        $html = '';
        $parent = $category->getParent();
        if ((strtolower($parent->getType()) == 'folder') || (strtolower($parent->getType()) == 'object' && strtolower($parent->getClassName()) != 'productcategory')) {
            return '<a href="">'.$category->getName().'</a></span>';
        } else {
            $html .= $this->getBreadcrumb($parent);
        }
        return $html;
    }
}
