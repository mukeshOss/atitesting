<?php


        return $config = array(
            "locking" => array(
                "enable" => 1,
                "disable" => 2
            ),
            "batchsize" => 30,
            "timeout" => '60', //in minutes
            "postUrl" => 'http://magentonew.local.com',
            "restUrl" => 'index.php/rest/V1/products',
            "object_id" => 12116,
            "username" => 'admin',
            "password" => 'Admin@1234',
            "image" => "/var/www/html/pimcoremage/website/var/assets/technolgies/footware/ortholite.eps",
            "Varient" => '{"product":{"sku":"##key##","name":"##key##","visibility":4,"type_id":"##PRODUCTTYPE##","price":"##price##","status":1,"attribute_set_id":9,"weight":1,"extension_attributes":{"stock_item":{"is_in_stock":1,"qty":77} ,"##VARIANTKEY##":"##VARIANTJSON##" }, "custom_attributes":[{"attribute_code":"category_ids","value":"##categories:objects##"},{"attribute_code":"meta_title","value":"##seoname##"},{"attribute_code":"description","value":"##description##"},
{"attribute_code":"size","value":"##size:variant##"},
{"attribute_code":"color","value":"##color:variant##"},
{"attribute_code":"shape","value":"##shape:variant##"},
{"attribute_code":"short_description","value":"Simple  Short Description"}]}}',
            "VarientWithoutSkuName" => '{"product":{"name":"##key##","visibility":4,"type_id":"##PRODUCTTYPE##","price":"##price##","status":1,"attribute_set_id":9,"weight":1,"extension_attributes":{"stock_item":{"is_in_stock":1,"qty":77} ,"##VARIANTKEY##":"##VARIANTJSON##" }, "custom_attributes":[{"attribute_code":"category_ids","value":"##categories:objects##"},{"attribute_code":"meta_title","value":"##seoname##"},{"attribute_code":"description","value":"##description##"},
{"attribute_code":"size","value":"##size:variant##"},
{"attribute_code":"color","value":"##color:variant##"},
{"attribute_code":"shape","value":"##shape:variant##"},
{"attribute_code":"short_description","value":"Simple  Short Description"}]}}',
            "sourceParentId" => 12738,
            "objectId" => "o_classId =12",
            "nonObjectId" => "o_classId =''",
            "proposedDataSet" => "products",
            "pimClassName" => "Product",
            "keywords" => array(
                "key0" => "key",
                "key1" => "key",
                "key2" => "PRODUCTTYPE",
                "key3" => "price",
                "key4" => "categories:objects",
                "key5" => "seoname",
                "key6" => "description",
                "key7" => "size:variant",
                "key8" => "color:variant",
                "key9" => "shape:variant"
            ),
            "keywordsForLocalizedData" => array(
                "key0" => "key",
                "key1" => "Attributes:localizedfields:{name}:fr_FR",
                "key2" => "PRODUCTTYPE",
                "key3" => "price",
                "key4" => "categories:objects",
                "key5" => "seoname",
                "key6" => "description",
                "key7" => "size:variant",
                "key8" => "color:variant",
                "key9" => "shape:variant"
            ),
            "keywordsBricksData" => array(
                "key0" => "key",
                "key1" => "myimagebrick:bricks:{testimage}",
                "key2" => "PRODUCTTYPE",
                "key3" => "price",
                "key4" => "categories:objects",
                "key5" => "seoname",
                "key6" => "description",
                "key7" => "size:variant",
                "key8" => "color:variant",
                "key9" => "shape:variant"
            ),
            "keywordsFieldCollectionData" => array(
                "key0" => "key",
                "key1" => "newImage:fieldcollection:{testimage}:0",
                "key2" => "PRODUCTTYPE",
                "key3" => "price",
                "key4" => "categories:objects",
                "key5" => "seoname",
                "key6" => "description",
                "key7" => "size:variant",
                "key8" => "color:variant",
                "key9" => "shape:variant"
            ),
            "manageKeywordForMagento" => array(
                "key0" => "magento:9:size:attr_id",
                "key1" => "magento:9:size:attr_code",
                "key2" => "size::magento:9:size:attr_values:values",
                "key3" => "magento:9:color:attr_id",
                "key4" => "magento:9:color:attr_code",
                "key5" => "color::magento:9:color:attr_values:values",
                "key6" => "magento:9:shape:attr_id",
                "key7" => "magento:9:shape:attr_code",
                "key8" => "shape::magento:9:shape:attr_values:values"
            ),
            "bridgeId" => "12116",
            "objectType" => "variant",
            "CurlCallPostJsonSuccess" => '{"product":{"sku":"supreme-sup_04","name":"supreme-sup_04","visibility":4,"type_id":"simple","price"
        :"32","status":1,"attribute_set_id":9,"weight":1,"extension_attributes":{"stock_item":{"is_in_stock"
        :1,"qty":77} ,"##VARIANTKEY##":"##VARIANTJSON##" }, "custom_attributes":[{"attribute_code":"category_ids"
        ,"value":[""]},{"attribute_code":"meta_title","value":"sup_04"},{"attribute_code":"description","value"
        :"hfdhd gfhfg fghggh mohit"},
        {"attribute_code":"size","value":19},
        {"attribute_code":"color","value":23},
        {"attribute_code":"shape","value":27},
        {"attribute_code":"short_description","value":"Simple  Short Description"}]}}',
            "CurlCallPostJsonFailure" => '{"product":{"name":"supreme-sup_04","visibility":4,"type_id":"simple","price"
        :"32","status":1,"attribute_set_id":9,"weight":1,"extension_attributes":{"stock_item":{"is_in_stock"
        :1,"qty":77} ,"##VARIANTKEY##":"##VARIANTJSON##" }, "custom_attributes":[{"attribute_code":"category_ids"
        ,"value":[""]},{"attribute_code":"meta_title","value":"sup_04"},{"attribute_code":"description","value"
        :"hfdhd gfhfg fghggh mohit"},
        {"attribute_code":"size","value":19},
        {"attribute_code":"color","value":23},
        {"attribute_code":"shape","value":27},
        {"attribute_code":"short_description","value":"Simple  Short Description"}]}}',
            "CreateJsonForMagentoLocalizedData" => '{"product":{"sku":"##key##","name":"##Attributes:localizedfields:{name}:fr_FR##","visibility":4,"type_id":"##PRODUCTTYPE##","price"
        :"##price##","status":1,"attribute_set_id":9,"weight":1,"extension_attributes":{"stock_item":{"is_in_stock"
        :1,"qty":77} ,"##VARIANTKEY##":"##VARIANTJSON##" }, "custom_attributes":[{"attribute_code":"category_ids"
        ,"value":"##categories:objects##"},{"attribute_code":"meta_title","value":"##seoname##"},{"attribute_code"
        :"description","value":"##description##"},
        {"attribute_code":"size","value":"##size:variant##"},
        {"attribute_code":"color","value":"##color:variant##"},
        {"attribute_code":"shape","value":"##shape:variant##"},
        {"attribute_code":"short_description","value":"Simple  Short Description"}]}}',
            "CreateJsonForMagentoBrickData" => '{"product":{"sku":"##key##","name":"##myimagebrick:bricks:{testimage}##","visibility":4,"type_id":"##PRODUCTTYPE##","price"
        :"##price##","status":1,"attribute_set_id":9,"weight":1,"extension_attributes":{"stock_item":{"is_in_stock"
        :1,"qty":77} ,"##VARIANTKEY##":"##VARIANTJSON##" }, "custom_attributes":[{"attribute_code":"category_ids"
        ,"value":"##categories:objects##"},{"attribute_code":"meta_title","value":"##seoname##"},{"attribute_code"
        :"description","value":"##description##"},
        {"attribute_code":"size","value":"##size:variant##"},
        {"attribute_code":"color","value":"##color:variant##"},
        {"attribute_code":"shape","value":"##shape:variant##"},
        {"attribute_code":"short_description","value":"Simple  Short Description"}]}}',
            "CreateJsonForMagentoFieldCollection" => '{"product":{"sku":"##key##","name":"##newImage:fieldcollection:{testimage}:0##","visibility":4,"type_id":"##PRODUCTTYPE##","price"
        :"##price##","status":1,"attribute_set_id":9,"weight":1,"extension_attributes":{"stock_item":{"is_in_stock"
        :1,"qty":77} ,"##VARIANTKEY##":"##VARIANTJSON##" }, "custom_attributes":[{"attribute_code":"category_ids"
        ,"value":"##categories:objects##"},{"attribute_code":"meta_title","value":"##seoname##"},{"attribute_code"
        :"description","value":"##description##"},
        {"attribute_code":"size","value":"##size:variant##"},
        {"attribute_code":"color","value":"##color:variant##"},
        {"attribute_code":"shape","value":"##shape:variant##"},
        {"attribute_code":"short_description","value":"Simple  Short Description"}]}}',
            "varientJson" => '{"configurable_product_options":[
{"attribute_id":"##magento:9:size:attr_id##","label":"##magento:9:size:attr_code##","position":0,
               "values":"##size::magento:9:size:attr_values:values##",
                     "product_id":"##TARGETID##"},
{"attribute_id":"##magento:9:color:attr_id##","label":"##magento:9:color:attr_code##","position":0,
               "values":"##color::magento:9:color:attr_values:values##",
                     "product_id":"##TARGETID##"},
{"attribute_id":"##magento:9:shape:attr_id##","label":"##magento:9:shape:attr_code##","position":0,
               "values":"##shape::magento:9:shape:attr_values:values##",
                     "product_id":"##TARGETID##"}
                   ],"configurable_product_links":[##VARIANT##]}',
        );
