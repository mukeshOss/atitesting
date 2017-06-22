<?php

namespace Website\Controller;

class CartAware extends Action
{

    /**
     * @param string $cartName
     *
     * @return \OnlineShop\Framework\CartManager\ICart
     */
    protected function getCart($cartName = 'cart')
    {
        //use guest cart since there are no users in this demo
        $environment = \OnlineShop\Framework\Factory::getInstance()->getEnvironment();
        $environment->setUseGuestCart(false);
        $environment->save();
        
        // init
        $manager = \OnlineShop\Framework\Factory::getInstance()->getCartManager();
        $cart = null;
        
        $cart = $manager->getCartByName($cartName);
        
        // create new cart if not exists
        if(!$cart)
        {
            $cartId = $manager->createCart(array('name' => $cartName));
            $cart = $manager->getCart( $cartId );
        }
        
        // done :-)
        return $cart;
    }

}
