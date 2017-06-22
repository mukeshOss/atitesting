<?php

namespace Website\OnlineShop\Tool;
use OnlineShop\Framework\IEnvironment;
use OnlineShop\Framework\Model\AbstractProduct;

/**
 * class to handle recently viewed products
 */
class RecentlyViewedProducts
{
    /**
     * @var int
     */
    protected $maxCount = 10;

    /**
     * @var string
     */
    protected $namespace = 'RECENTLY_VIEWED_PRODUCTS';

    /**
     * @var IEnvironment
     */
    protected $env;

    /**
     * @var callable
     */
    protected $loadProduct;


    /**
     * @param IEnvironment $env
     * @param callable                          $loadProduct
     */
    public function __construct( IEnvironment $env, \closure $loadProduct )
    {
        $this->env = $env;
        $this->loadProduct = $loadProduct;
    }


    /**
     * @param int $maxCount
     *
     * @return RecentlyViewedProducts
     */
    public function setMaxCount($maxCount)
    {
        $this->maxCount = (int)$maxCount;

        return $this;
    }

    /**
     * @return int
     */
    public function getMaxCount()
    {
        return $this->maxCount;
    }

    /**
     * @param string $namespace
     *
     * @return RecentlyViewedProducts
     */
    public function setNamespace($namespace)
    {
        $this->namespace = $namespace;

        return $this;
    }

    /**
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }


    /**
     * @return array
     */
    protected function getList()
    {
        $recentlyViewed = $this->env->getCustomItem( $this->getNamespace() );
        if (!$recentlyViewed) {
            $recentlyViewed = array();
        }

        return $recentlyViewed;
    }

    /**
     * @param int[] $list
     *
     * @return RecentlyViewedProducts
     */
    protected function saveList(array $list)
    {
        $this->env->setCustomItem($this->getNamespace(), $list);
        $this->env->save();

        return $this;
    }


    /**
     * @param AbstractProduct $product
     *
     * @return RecentlyViewedProducts
     */
    public function addProduct(AbstractProduct $product)
    {
        // load
        $list = $this->getList();

        // exists?
        if(($pos = array_search($product->getId(), $list)) > 0)
        {
            unset($list[$pos]);
        }

        // add
        if(!in_array($product->getId(), $list))
        {
            array_unshift($list, $product->getId());
        }

        // limit?
        if(count($list) > $this->getMaxCount())
        {
            array_pop($list);
        }

        // save
        $this->saveList( $list );

        return $this;
    }


    /**
     * @param int $count
     *
     * @return AbstractProduct[]
     */
    public function getProducts($count)
    {
        // init
        $loader = $this->loadProduct;
        $products = array();

        // load products
        $list = array_slice( $this->getList(), 1, $count);
        foreach($list as $id)
        {
            $products[] = $loader( $id );
        }

        return $products;
    }
}