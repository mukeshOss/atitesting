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


namespace Elements\OutputDataConfigToolkit\ConfigElement\Operator;
 
class TranslateValue extends AbstractOperator {

    private $prefix;

    public function __construct($config, $context = null) {
        parent::__construct($config, $context);

        $this->prefix = $config->prefix;
    }

    public function getLabeledValue($object) {
        $childs = $this->getChilds();
        if($childs[0]) {
            $translate = new \Pimcore\Translate\Website(\Zend_Registry::get('Zend_Locale'));

            $value = $childs[0]->getLabeledValue($object);
            if($value->value) {
                $value->value = $translate->translate($this->prefix . $value->value);
            }

            return $value;
        }
        return null;
    }

    /**
     * @return mixed
     */
    public function getPrefix()
    {
        return $this->prefix;
    }

    /**
     * @param mixed $prefix
     */
    public function setPrefix($prefix)
    {
        $this->prefix = $prefix;
    }



}
