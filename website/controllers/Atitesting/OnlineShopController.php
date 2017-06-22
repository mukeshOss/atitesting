<?php

use Website\Controller\Action;

class Atitesting_OnlineShopController extends Action
{
    
    public function init() {
        parent::init();
        $this->defaultLayout = "layout";
        $this->view->addHelperPath(PIMCORE_WEBSITE_PATH . "/lib/Website/View/Helper", "Website_View_Helper_");
    }
    
    public function indexAction()
    {
        $this->enableLayout();
        try{
            
            /* plugin service instance for product list filtering */
            $products = \OnlineShop\Framework\Factory::getInstance()->getIndexService()->getProductListForCurrentTenant();
            $products->setVariantMode(\OnlineShop\Framework\IndexService\ProductList\IProductList::PRODUCT_TYPE_OBJECT);
            //echo "<pre>";print_r($product);die;
            $this->view->productList = $products;
            print_r($products->load());die;

//            if (!empty($this->getParam("gender"))) {
//                $gender = $this->getParam("gender");
//                if (!empty($title)) {
//                    $title .= 'for '.ucwords($gender);
//                }
//                $this->view->gender = $this->getParam("gender");
//                unset($params['color']);
//                $params['gender'] = $gender;
//                $this->view = \OnlineShop\Framework\FilterService\Helper::getProductListFilteredByGender($params, $products, $this->view);
//            }

//            $this->view->productListingFlag = true;
//            $this->view->measurement = \OnlineShop\Framework\FilterService\Helper::getProductListGroupedByProduct($this->view->productList);
//            $this->view->productList = \OnlineShop\Framework\FilterService\Helper::getProductListGroupedByCategory($this->view->productList, $colorid);
//            $this->view->title = $title;
        } catch (Exception $exc){
            $this->redirect(\Website\Tool\Utility::getErrorDocument());
        }
        
    }
    public function detailAction()
    {
        $this->enableLayout();
        try{
            $productId = $this->getParam('id');
            $product = \Website\DefaultProduct::getById($productId);
            $category = $product->getCategories();
            $category = $category[0];
            
            $this->view->category = $category;
            //echo "<pre>";print_r($product);die;
            $this->view->product = $product;
            
        } catch (Exception $exc){
            $this->redirect(\Website\Tool\Utility::getErrorDocument());
        }
        
    }
    public function filtersAction()
    {
        try{
            
            
        } catch (Exception $exc){
            $this->redirect(\Website\Tool\Utility::getErrorDocument());
        }
    }
}
