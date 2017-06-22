<?php
/**
 * this file will get the data from config.php
 */
namespace Pimconnect;
/**
 * Config Class
 */
class XmlData
{

    /**
     * Function to get the data from the config file to use for Codeception
     * 
     */
    public static function getConfig()
    {
        $configuration = array();
        if (file_exists(PIMCORE_PLUGINS_PATH . "/pocm/Pimconnect/plugin.xml")) {
            $filename = PIMCORE_PLUGINS_PATH . "/pocm/Pimconnect/plugin.xml";
            $pluginConf = new \Zend_Config_Xml(require $filename);
            $configuration = $pluginConf->plugin->toArray();
            return $pluginConf;
        } else {
            return false;
        }
    }
    
}
