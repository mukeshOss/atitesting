<?php

use Website\Controller\Action;

class JBlearning_ContentController extends Action {

    private $defaultLayout;
    private $brandId;

    /**
     * init function 
     * called before every action in this controller
     */
    public function init() {
        parent::init();
        //$this->view->addHelperPath(PIMCORE_WEBSITE_PATH . "/lib/Website/View/Helper/Truroots", "Website_View_Helper_Truroots_");
        $this->defaultLayout = "jblearning/layout";
    }

    /**
     * home page
     */
    public function homeAction() {
        $this->enableLayout();
        $this->setLayout($this->defaultLayout); 
    }

    /**
     * content page,
     * renders every page that is made with pimcore admin
     */
    public function contentAction() {
        $this->enableLayout();
        $this->setLayout($this->defaultLayout);
    }

    public function productSolutionsAction() {
        $this->enableLayout();
        $this->setLayout($this->defaultLayout);
    }

    /**
     * header
     * renders header
     */
    public function headerAction() {
        
    }

    public function caraouselAction() {
        
    }

    /**
     * renders footer
     */
    public function footerAction() {
        
    }

}
