<?php
/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @category   Pimcore
 * @package    EcommerceFramework
 * @copyright  Copyright (c) 2009-2016 pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */


namespace Elements\OutputDataConfigToolkit\ConfigElement\Value;

use Elements\OutputDataConfigToolkit\ConfigElement as ConfigElement;

class DimensionUnitField extends DefaultValue {

    CONST RAW_RESULT = "1";
    CONST ONLY_VALUE = "2";
    CONST VALUE_WITH_UNIT = "3";

    protected $mode = self::RAW_RESULT;

    public function __construct($config, $context = null) {
        parent::__construct($config, $context);

        if($config->mode) {
            $this->mode = $config->mode;
        }
    }


    public function getLabeledValue($object) {
        $rawResult = parent::getLabeledValue($object);
        if($this->mode == self::RAW_RESULT) {
            return $rawResult;
        } else if(!empty($rawResult)) {
            $result = new \stdClass();
            $result->label = $rawResult->label;
            $result->def = $rawResult->def;

            if(!empty($rawResult->value)) {
                if($this->mode == self::ONLY_VALUE) {
                    $value = $rawResult->value->getValue();
                    if(is_numeric($value)) {
                        $value = \Zend_Locale_Format::toNumber($value, array('locale' => \Zend_Registry::get("Zend_Locale")));
                    }
                    $result->value = $value;
                } else {
                    $value =  $rawResult->value->getValue();
                    if(is_numeric($value)) {
                        $value = \Zend_Locale_Format::toNumber($value);
                    }
                    $result->value = $value . " " . $rawResult->value->getUnit()->getAbbreviation();
                }
            }

            if(empty($result->value)) {
                $result->empty = true;
            } else {
                $result->empty = false;
            }

            return $result;
        }
    }

}

