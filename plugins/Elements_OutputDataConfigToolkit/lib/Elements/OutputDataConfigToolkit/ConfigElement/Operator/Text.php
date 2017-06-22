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
 
class Text extends AbstractOperator {

    protected $textValue;

    public function __construct($config, $context = null) {
        $this->textValue = $config->textValue;
        $this->label = $config->label;

        $this->context = $context;
    }

    public function getLabeledValue($object) {
        $result = new \stdClass();
        $result->label = $this->label;
        $result->value = $this->textValue;
        return $result;
    }
}
