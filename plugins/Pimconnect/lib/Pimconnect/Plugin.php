<?php
/**
 * this is the installer file which is used at the time of installation
 */
namespace Pimconnect;

use Pimcore\API\Plugin as PluginLib;
/**
 * Plugin Class
 */
class Plugin extends PluginLib\AbstractPlugin implements PluginLib\PluginInterface
{

    public function init()
    {
        parent::init();
        
        
        // register your events here
        
        
        
        // using anonymous function
        \Pimcore::getEventManager()->attach("document.postAdd", function ($event) {
            // do something
            $document = $event->getTarget();
        });
        
        // using methods
        \Pimcore::getEventManager()->attach("document.postUpdate", [
            $this,
            "handleDocument"
        ]);
    }

    public function handleDocument($event)
    {
        // do something
        $document = $event->getTarget();
    }

    /**
     * This is the installer of the plugin
     */
    public static function install()
    {
        $path = self::getInstallPath();
        // implement your own logic here
        if (! is_dir($path)) {
            mkdir($path);
        }
        
        $query1 = "DROP PROCEDURE IF EXISTS pimobj_tree";
        $query2 = " CREATE PROCEDURE pimobj_tree ( IN pimid INT)
        BEGIN
        DECLARE TEMP INT DEFAULT 1;
        DECLARE P_ID INT DEFAULT 0;
        DECLARE ORD_NO INT DEFAULT 2;
        DROP TABLE IF EXISTS tempobj_table;
        CREATE TABLE tempobj_table (o_id int, ord int);
        DROP TABLE IF EXISTS objects_tree_1;
        CREATE TABLE objects_tree_1 LIKE objects;
        ALTER TABLE objects_tree_1 ADD COLUMN `ORD` int(11) unsigned DEFAULT 2;
        SET P_ID=pimid;
        INSERT INTO objects_tree_1 SELECT *, 1 'ORD' FROM objects WHERE o_id=P_ID;
        WHILE TEMP != 0 DO
        INSERT INTO tempobj_table SELECT o_id, ORD_NO FROM objects WHERE o_parentId=P_ID;
        INSERT INTO objects_tree_1 SELECT *, ORD_NO FROM objects WHERE o_parentId=P_ID;
        DELETE FROM tempobj_table WHERE o_id=P_ID;
        SELECT o_id INTO P_ID FROM tempobj_table LIMIT 1;
        SELECT ord INTO ORD_NO FROM tempobj_table WHERE o_id=P_ID;
        SELECT COUNT(*) INTO TEMP FROM tempobj_table;
        SET ORD_NO=ORD_NO+1;
        END WHILE;
        DROP TABLE IF EXISTS objects_tree;
        SET @rownum := 0;
        CREATE TABLE objects_tree LIKE objects_tree_1;
        ALTER TABLE  objects_tree ADD COLUMN `myrank` int(11);
        INSERT INTO  objects_tree select o_id,o_parentId,
        o_type,o_key,o_path,o_index,o_published,o_creationDate,o_modificationDate,
        o_userOwner,o_userModification,o_classId,o_className,ORD,
         @rownum:=@rownum + 1 as myrank  
        from objects_tree_1  order by myrank asc;
        
        DROP TABLE tempobj_table;
        END;";
        
        $query3 = "CREATE TABLE `tblMagentoAttributeValues` (
                `attr_id` int(11) NOT NULL,
                `attr_set_id` int(11) DEFAULT NULL,
                `attr_label` varchar(30) NOT NULL,
                `attr_values` varchar(30) DEFAULT NULL,
                `bridge_id` int(11) DEFAULT 0,
                 PRIMARY KEY (`attr_id`,`attr_label`,bridge_id)
                ) ENGINE=InnoDB;";
        
        $query4 = "CREATE TABLE `tblMagentoAttributesSets` (
                 `attribute_set_id` int(11) unsigned NOT NULL DEFAULT '0',
                 `attribute_set_name` varchar(30) NOT NULL,
                 `entity_type_id` tinyint(3) DEFAULT NULL,
                 `status` enum('A','D') DEFAULT 'A',
                 `bridge_id` int(11) DEFAULT 0,
                  PRIMARY KEY (`attribute_set_id`,`attribute_set_name`,bridge_id)
                ) ENGINE=InnoDB;";
        
        $query5 = "CREATE TABLE `tblPimMagentoAttributesMapping` (
                  `attr_set_id` int(11) unsigned NOT NULL DEFAULT '0',
                  `attr_id` int(11) NOT NULL,
                  `attr_code` varchar(30) DEFAULT NULL,
                  `attr_type` varchar(20) DEFAULT NULL,
                  `is_required` tinyint(1) DEFAULT NULL,
		          `bridge_id` int(11) DEFAULT 0,
                  PRIMARY KEY (`attr_set_id`,`attr_id`,bridge_id)
                ) ENGINE=InnoDB;";
        
        $query6 = "ALTER TABLE application_logs MODIFY COLUMN message text";
        
        $query7 = "CREATE TABLE `tblJobMaster` (
                      `job_id` int(11) NOT NULL,
                      `source_records` int(11) DEFAULT NULL,
                      `user_id` int(11) DEFAULT NULL,
                      `bridge_id` int(11) DEFAULT NULL,
                      `con_id` varchar(150) DEFAULT NULL,
                      `start_time` timestamp NULL DEFAULT NULL,
                      `end_time` timestamp NULL DEFAULT NULL,
                      `status` enum('in-progress','done','in- complete') NOT NULL DEFAULT 'in-progress',
                      `last_updated_time` datetime NULL DEFAULT NULL,
                      KEY `index1` (`job_id`)
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
        
        $query8 =  "CREATE TABLE `tblJobQueue` (
                    `job_id` int(11) NOT NULL,
                    `source_id` varchar(50) DEFAULT NULL,
                    `dest_id` int(11) DEFAULT NULL,
                    `status` enum('1','0') NOT NULL DEFAULT '1' COMMENT '''0'' : fail\n''1'' : pass',
                    KEY `index1` (`job_id`)
                  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
        
        $db = \Pimcore\Resource\Mysql::get();
        $db->query($query1);
        $db->query($query2);
        $db->query($query3);
        $db->query($query4);
        $db->query($query5);
        $db->query($query6);
        $db->query($query7);
        $db->query($query8);
        

        self::createClass("bridge", PIMCORE_PLUGINS_PATH . '/Pimconnect/install/class_source/class_bridge_export.json');
        self::createClass("bridgeConnection", PIMCORE_PLUGINS_PATH . '/Pimconnect/install/class_source/class_bridgeConnection_export.json');
        self::createClass("bridgeSrcTargetMapping", PIMCORE_PLUGINS_PATH . '/Pimconnect/install/class_source/class_bridgeSrcTargetMapping_export.json');
        
        self::createFolder("magento", 1);
        $select = " SELECT o_id as  id,o_parentId as parentId from objects Where o_key = 'magento' and  o_type='folder' ";
        $resultData = $db->fetchAll($select);
        if (count($resultData) > 0) {
            self::createFolder('product', $resultData[0]['id']);
            self::createFolder('categories', $resultData[0]['id']);
        }

        // implement your own logic here
        return " Pimconnect Plugin successfully installed.";
    }

    /**
     * Function to create the folder at the time of the installation
     */

    private static function createFolder($name, $parentid)
    {
        $folder = \Object\Folder::create(array(
            "o_key" => $name,
            "o_parentId" => $parentid,
            "o_creationDate" => time(),
            "o_userOwner" => 1,
            "o_userModification" => 1,
            "o_published" => true
        ));
        
        $folder->setCreationDate(time());
        $folder->setUserOwner(1);
        $folder->setUserModification(1);
        $folder->save();
    }



    /**
     * Function to create the class
     */
    private static function createClass($classname, $filepath)
    {
        $class = \Pimcore\Model\Object\ClassDefinition::getByName($classname);
        
        if (! $class) {
            $class = new \Pimcore\Model\Object\ClassDefinition();
            $class->setName($classname);
        }
        $json = file_get_contents($filepath);
        
        $success = \Pimcore\Model\Object\ClassDefinition\Service::importClassDefinitionFromJson($class, $json);
        if (! $success) {
            \Logger::err("Could not import $classname .");
        }
    }

    /**
     * Function to uninstall the plugin
     */
    public static function uninstall()
    {
        $db = \Pimcore\Resource\Mysql::get();
        $query1 = "DROP PROCEDURE IF EXISTS pimobj_tree";
        $query2 = "DROP TABLE IF EXISTS objects_tree";
        $query3 = "DROP TABLE IF EXISTS tblMagentoAttributeValues";
        $query4 = "DROP TABLE IF EXISTS tblMagentoAttributesSets";
        $query5 = "DROP TABLE IF EXISTS tblPimMagentoAttributesMapping";
        $query6 = "DROP TABLE IF EXISTS tblJobQueue";
        $query7 = "DROP TABLE IF EXISTS tblJobMaster";
        $db->query($query1);
        $db->query($query2);
        $db->query($query3);
        $db->query($query4);
        $db->query($query5);
        $db->query($query6);
        $db->query($query7);
        rmdir(self::getInstallPath());
        return " Pimconnect Plugin Uninstalled successfully";
    }

    /**
     * Function to check if the plugin is already installed
     */
    public static function isInstalled()
    {
        return is_dir(self::getInstallPath());
    }

    /**
     * Funtion to the path for the installation
     */
    public static function getInstallPath()
    {
        return PIMCORE_PLUGINS_PATH . "/Pimconnect/install/check";
    }
}
