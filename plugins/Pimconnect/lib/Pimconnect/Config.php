<?php
/**
 * this file will get the data from config.php
 */
namespace Pimconnect;
/**
 * Config Class
 */
class Config
{

    /**
     * Function to get the data from the config file to use for Codeception
     * 
     */
    public function getConfig()
    {
        $configuration = array();
        if (file_exists(PIMCORE_PLUGINS_PATH . "/Pimconnect/config.php")) {
            $filename = PIMCORE_PLUGINS_PATH . "/Pimconnect/config.php";
            $pluginConf = new \Zend_Config(require $filename);
            return $pluginConf;
        } else {
            return false;
        }
    }
}
