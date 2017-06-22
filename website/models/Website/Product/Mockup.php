<?php
namespace Website\Product;

class Mockup extends \OnlineShop\Framework\Model\DefaultMockup implements \OnlineShop\Framework\Model\ICheckoutable {

    use \Website\Product\TraitClasses\Checkoutable;

}