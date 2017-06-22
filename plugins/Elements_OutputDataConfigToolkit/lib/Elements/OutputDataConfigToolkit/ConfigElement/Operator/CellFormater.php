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
 
class CellFormater extends AbstractOperator {

    private $cssClass;
    private $styles;

    public function __construct($config, $context = null) {
        parent::__construct($config, $context);

        $this->cssClass = $config->cssClass;
        $this->styles = $config->styles;
        $this->label = $config->cssClass;
    }

    public function getLabeledValue($object) {
        $childs = $this->getChilds();
        if($childs[0]) {
            return $childs[0]->getLabeledValue($object);
        }
        return null;
    }

    public function getCssClass() {
        return $this->cssClass;
    }

    public function setStyles($styles) {
        $this->styles = $styles;
    }

    public function getStyles() {
        return $this->styles;
    }



}
