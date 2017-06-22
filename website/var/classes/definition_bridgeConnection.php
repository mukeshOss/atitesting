<?php 

/** 
* Generated at: 2017-06-20T16:55:54+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- PimClassName [input]
- ObjectParentID [input]
- SourceParentId [input]
- Json [textarea]
- SqlWhere [input]
- AttributeSetId [input]
- PostUrl [input]
- RestUrl [input]
- MagentoUsername [input]
- MagentoPassword [input]
- Bridge [objects]
- ProposedDataSetType [select]
- MappingRecordpath [input]
- Order [numeric]
- LanguageName [language]
- VaraintJSON [textarea]
*/ 


return Pimcore\Model\Object\ClassDefinition::__set_state(array(
   'name' => 'bridgeConnection',
   'description' => NULL,
   'creationDate' => 0,
   'modificationDate' => 1497970554,
   'userOwner' => 0,
   'userModification' => 2,
   'parentClass' => NULL,
   'useTraits' => NULL,
   'allowInherit' => false,
   'allowVariants' => false,
   'showVariants' => false,
   'layoutDefinitions' => 
  Pimcore\Model\Object\ClassDefinition\Layout\Panel::__set_state(array(
     'fieldtype' => 'panel',
     'labelWidth' => 100,
     'layout' => NULL,
     'name' => 'pimcore_root',
     'type' => NULL,
     'region' => NULL,
     'title' => NULL,
     'width' => NULL,
     'height' => NULL,
     'collapsible' => false,
     'collapsed' => NULL,
     'bodyStyle' => NULL,
     'datatype' => 'layout',
     'permissions' => NULL,
     'childs' => 
    array (
      0 => 
      Pimcore\Model\Object\ClassDefinition\Layout\Panel::__set_state(array(
         'fieldtype' => 'panel',
         'labelWidth' => 200,
         'layout' => NULL,
         'name' => 'mylayout',
         'type' => NULL,
         'region' => NULL,
         'title' => '',
         'width' => NULL,
         'height' => NULL,
         'collapsible' => false,
         'collapsed' => false,
         'bodyStyle' => '',
         'datatype' => 'layout',
         'permissions' => NULL,
         'childs' => 
        array (
          0 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'PimClassName',
             'title' => 'Pimcore Class  Name',
             'tooltip' => 'Name of pimcore class on which computation will be done',
             'mandatory' => true,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          1 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'ObjectParentID',
             'title' => 'Category Target Parent ID',
             'tooltip' => 'By Default Magento Parent ID',
             'mandatory' => false,
             'noteditable' => false,
             'index' => true,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          2 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'SourceParentId',
             'title' => 'Pim Root  ID',
             'tooltip' => 'ID of the Object/Folder under which all Product/Category will be read for  processing fro pimcore',
             'mandatory' => true,
             'noteditable' => false,
             'index' => true,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          3 => 
          Pimcore\Model\Object\ClassDefinition\Data\Textarea::__set_state(array(
             'fieldtype' => 'textarea',
             'width' => 500,
             'height' => 300,
             'queryColumnType' => 'longtext',
             'columnType' => 'longtext',
             'phpdocType' => 'string',
             'name' => 'Json',
             'title' => 'Payload Template (JSON)',
             'tooltip' => 'Payload Template (JSON)',
             'mandatory' => true,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          4 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'SqlWhere',
             'title' => 'Where',
             'tooltip' => 'Where condition',
             'mandatory' => false,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          5 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'AttributeSetId',
             'title' => 'Product Attribute Set ID',
             'tooltip' => 'Magento Attribute Set ID requires only for ',
             'mandatory' => false,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          6 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'PostUrl',
             'title' => 'Post Url',
             'tooltip' => 'Magento URL',
             'mandatory' => true,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          7 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'RestUrl',
             'title' => 'Rest Url',
             'tooltip' => '',
             'mandatory' => true,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          8 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'MagentoUsername',
             'title' => 'Magento Username',
             'tooltip' => '',
             'mandatory' => true,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          9 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'MagentoPassword',
             'title' => 'Magento Password',
             'tooltip' => '',
             'mandatory' => false,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          10 => 
          Pimcore\Model\Object\ClassDefinition\Data\Objects::__set_state(array(
             'fieldtype' => 'objects',
             'width' => '',
             'height' => '',
             'maxItems' => 1,
             'queryColumnType' => 'text',
             'phpdocType' => 'array',
             'relationType' => true,
             'lazyLoading' => true,
             'classes' => 
            array (
              0 => 
              array (
                'classes' => 'bridge',
              ),
            ),
             'pathFormatterClass' => NULL,
             'name' => 'Bridge',
             'title' => 'Bridge',
             'tooltip' => 'Link the Connection class with Bridge Class',
             'mandatory' => true,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'columnType' => NULL,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          11 => 
          Pimcore\Model\Object\ClassDefinition\Data\Select::__set_state(array(
             'fieldtype' => 'select',
             'options' => 
            array (
              0 => 
              array (
                'key' => '(Empty)',
                'value' => '',
              ),
              1 => 
              array (
                'key' => 'Product Images',
                'value' => 'productsimages',
              ),
              2 => 
              array (
                'key' => 'Category',
                'value' => 'categories',
              ),
              3 => 
              array (
                'key' => 'Product',
                'value' => 'products',
              ),
            ),
             'width' => '',
             'defaultValue' => '',
             'queryColumnType' => 'varchar(255)',
             'columnType' => 'varchar(255)',
             'phpdocType' => 'string',
             'name' => 'ProposedDataSetType',
             'title' => 'Data Type',
             'tooltip' => 'Product / Category',
             'mandatory' => true,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          12 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => NULL,
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => 255,
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'MappingRecordpath',
             'title' => 'Mapping Folder Path',
             'tooltip' => 'Path of mapped Object kept for reference.',
             'mandatory' => true,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          13 => 
          Pimcore\Model\Object\ClassDefinition\Data\Numeric::__set_state(array(
             'fieldtype' => 'numeric',
             'width' => '',
             'defaultValue' => NULL,
             'queryColumnType' => 'double',
             'columnType' => 'double',
             'phpdocType' => 'float',
             'integer' => false,
             'unsigned' => false,
             'minValue' => NULL,
             'maxValue' => NULL,
             'decimalPrecision' => NULL,
             'name' => 'Order',
             'title' => 'Order',
             'tooltip' => 'Order in Records will get Executed',
             'mandatory' => false,
             'noteditable' => false,
             'index' => true,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          14 => 
          Pimcore\Model\Object\ClassDefinition\Data\Language::__set_state(array(
             'fieldtype' => 'language',
             'onlySystemLanguages' => false,
             'options' => 
            array (
              0 => 
              array (
                'key' => 'Afar',
                'value' => 'aa',
              ),
              1 => 
              array (
                'key' => 'Afar (Djibouti)',
                'value' => 'aa_DJ',
              ),
              2 => 
              array (
                'key' => 'Afar (Eritrea)',
                'value' => 'aa_ER',
              ),
              3 => 
              array (
                'key' => 'Afar (Ethiopia)',
                'value' => 'aa_ET',
              ),
              4 => 
              array (
                'key' => 'Afrikaans',
                'value' => 'af',
              ),
              5 => 
              array (
                'key' => 'Afrikaans (Namibia)',
                'value' => 'af_NA',
              ),
              6 => 
              array (
                'key' => 'Afrikaans (South Africa)',
                'value' => 'af_ZA',
              ),
              7 => 
              array (
                'key' => 'Aghem',
                'value' => 'agq',
              ),
              8 => 
              array (
                'key' => 'Aghem (Cameroon)',
                'value' => 'agq_CM',
              ),
              9 => 
              array (
                'key' => 'Akan',
                'value' => 'ak',
              ),
              10 => 
              array (
                'key' => 'Akan (Ghana)',
                'value' => 'ak_GH',
              ),
              11 => 
              array (
                'key' => 'Albanian',
                'value' => 'sq',
              ),
              12 => 
              array (
                'key' => 'Albanian (Albania)',
                'value' => 'sq_AL',
              ),
              13 => 
              array (
                'key' => 'Albanian (Kosovo)',
                'value' => 'sq_XK',
              ),
              14 => 
              array (
                'key' => 'Albanian (Macedonia)',
                'value' => 'sq_MK',
              ),
              15 => 
              array (
                'key' => 'American English',
                'value' => 'en_US',
              ),
              16 => 
              array (
                'key' => 'Amharic',
                'value' => 'am',
              ),
              17 => 
              array (
                'key' => 'Amharic (Ethiopia)',
                'value' => 'am_ET',
              ),
              18 => 
              array (
                'key' => 'Arabic',
                'value' => 'ar',
              ),
              19 => 
              array (
                'key' => 'Arabic (Algeria)',
                'value' => 'ar_DZ',
              ),
              20 => 
              array (
                'key' => 'Arabic (Bahrain)',
                'value' => 'ar_BH',
              ),
              21 => 
              array (
                'key' => 'Arabic (Chad)',
                'value' => 'ar_TD',
              ),
              22 => 
              array (
                'key' => 'Arabic (Comoros)',
                'value' => 'ar_KM',
              ),
              23 => 
              array (
                'key' => 'Arabic (Djibouti)',
                'value' => 'ar_DJ',
              ),
              24 => 
              array (
                'key' => 'Arabic (Egypt)',
                'value' => 'ar_EG',
              ),
              25 => 
              array (
                'key' => 'Arabic (Eritrea)',
                'value' => 'ar_ER',
              ),
              26 => 
              array (
                'key' => 'Arabic (Iraq)',
                'value' => 'ar_IQ',
              ),
              27 => 
              array (
                'key' => 'Arabic (Israel)',
                'value' => 'ar_IL',
              ),
              28 => 
              array (
                'key' => 'Arabic (Jordan)',
                'value' => 'ar_JO',
              ),
              29 => 
              array (
                'key' => 'Arabic (Kuwait)',
                'value' => 'ar_KW',
              ),
              30 => 
              array (
                'key' => 'Arabic (Lebanon)',
                'value' => 'ar_LB',
              ),
              31 => 
              array (
                'key' => 'Arabic (Libya)',
                'value' => 'ar_LY',
              ),
              32 => 
              array (
                'key' => 'Arabic (Mauritania)',
                'value' => 'ar_MR',
              ),
              33 => 
              array (
                'key' => 'Arabic (Morocco)',
                'value' => 'ar_MA',
              ),
              34 => 
              array (
                'key' => 'Arabic (Oman)',
                'value' => 'ar_OM',
              ),
              35 => 
              array (
                'key' => 'Arabic (Palestinian Territories)',
                'value' => 'ar_PS',
              ),
              36 => 
              array (
                'key' => 'Arabic (Qatar)',
                'value' => 'ar_QA',
              ),
              37 => 
              array (
                'key' => 'Arabic (Saudi Arabia)',
                'value' => 'ar_SA',
              ),
              38 => 
              array (
                'key' => 'Arabic (Somalia)',
                'value' => 'ar_SO',
              ),
              39 => 
              array (
                'key' => 'Arabic (South Sudan)',
                'value' => 'ar_SS',
              ),
              40 => 
              array (
                'key' => 'Arabic (Sudan)',
                'value' => 'ar_SD',
              ),
              41 => 
              array (
                'key' => 'Arabic (Syria)',
                'value' => 'ar_SY',
              ),
              42 => 
              array (
                'key' => 'Arabic (Tunisia)',
                'value' => 'ar_TN',
              ),
              43 => 
              array (
                'key' => 'Arabic (United Arab Emirates)',
                'value' => 'ar_AE',
              ),
              44 => 
              array (
                'key' => 'Arabic (Western Sahara)',
                'value' => 'ar_EH',
              ),
              45 => 
              array (
                'key' => 'Arabic (Yemen)',
                'value' => 'ar_YE',
              ),
              46 => 
              array (
                'key' => 'Armenian',
                'value' => 'hy',
              ),
              47 => 
              array (
                'key' => 'Armenian (Armenia)',
                'value' => 'hy_AM',
              ),
              48 => 
              array (
                'key' => 'Assamese',
                'value' => 'as',
              ),
              49 => 
              array (
                'key' => 'Assamese (India)',
                'value' => 'as_IN',
              ),
              50 => 
              array (
                'key' => 'Asturian',
                'value' => 'ast',
              ),
              51 => 
              array (
                'key' => 'Asturian (Spain)',
                'value' => 'ast_ES',
              ),
              52 => 
              array (
                'key' => 'Asu',
                'value' => 'asa',
              ),
              53 => 
              array (
                'key' => 'Asu (Tanzania)',
                'value' => 'asa_TZ',
              ),
              54 => 
              array (
                'key' => 'Australian English',
                'value' => 'en_AU',
              ),
              55 => 
              array (
                'key' => 'Austrian German',
                'value' => 'de_AT',
              ),
              56 => 
              array (
                'key' => 'Azerbaijani',
                'value' => 'az',
              ),
              57 => 
              array (
                'key' => 'Azerbaijani (Azerbaijan)',
                'value' => 'az_AZ',
              ),
              58 => 
              array (
                'key' => 'Azerbaijani (Azerbaijan)',
                'value' => 'az_Cyrl_AZ',
              ),
              59 => 
              array (
                'key' => 'Azerbaijani (Azerbaijan)',
                'value' => 'az_Latn_AZ',
              ),
              60 => 
              array (
                'key' => 'Bafia',
                'value' => 'ksf',
              ),
              61 => 
              array (
                'key' => 'Bafia (Cameroon)',
                'value' => 'ksf_CM',
              ),
              62 => 
              array (
                'key' => 'Bambara',
                'value' => 'bm',
              ),
              63 => 
              array (
                'key' => 'Bambara (Mali)',
                'value' => 'bm_ML',
              ),
              64 => 
              array (
                'key' => 'Basaa',
                'value' => 'bas',
              ),
              65 => 
              array (
                'key' => 'Basaa (Cameroon)',
                'value' => 'bas_CM',
              ),
              66 => 
              array (
                'key' => 'Basque',
                'value' => 'eu',
              ),
              67 => 
              array (
                'key' => 'Basque (Spain)',
                'value' => 'eu_ES',
              ),
              68 => 
              array (
                'key' => 'Belarusian',
                'value' => 'be',
              ),
              69 => 
              array (
                'key' => 'Belarusian (Belarus)',
                'value' => 'be_BY',
              ),
              70 => 
              array (
                'key' => 'Bemba',
                'value' => 'bem',
              ),
              71 => 
              array (
                'key' => 'Bemba (Zambia)',
                'value' => 'bem_ZM',
              ),
              72 => 
              array (
                'key' => 'Bena',
                'value' => 'bez',
              ),
              73 => 
              array (
                'key' => 'Bena (Tanzania)',
                'value' => 'bez_TZ',
              ),
              74 => 
              array (
                'key' => 'Bengali',
                'value' => 'bn',
              ),
              75 => 
              array (
                'key' => 'Bengali (Bangladesh)',
                'value' => 'bn_BD',
              ),
              76 => 
              array (
                'key' => 'Bengali (India)',
                'value' => 'bn_IN',
              ),
              77 => 
              array (
                'key' => 'Blin',
                'value' => 'byn',
              ),
              78 => 
              array (
                'key' => 'Blin (Eritrea)',
                'value' => 'byn_ER',
              ),
              79 => 
              array (
                'key' => 'Bodo',
                'value' => 'brx',
              ),
              80 => 
              array (
                'key' => 'Bodo (India)',
                'value' => 'brx_IN',
              ),
              81 => 
              array (
                'key' => 'Bosnian',
                'value' => 'bs',
              ),
              82 => 
              array (
                'key' => 'Bosnian (Bosnia and Herzegovina)',
                'value' => 'bs_Cyrl_BA',
              ),
              83 => 
              array (
                'key' => 'Bosnian (Bosnia and Herzegovina)',
                'value' => 'bs_Latn_BA',
              ),
              84 => 
              array (
                'key' => 'Bosnian (Bosnia and Herzegovina)',
                'value' => 'bs_BA',
              ),
              85 => 
              array (
                'key' => 'Brazilian Portuguese',
                'value' => 'pt_BR',
              ),
              86 => 
              array (
                'key' => 'Breton',
                'value' => 'br',
              ),
              87 => 
              array (
                'key' => 'Breton (France)',
                'value' => 'br_FR',
              ),
              88 => 
              array (
                'key' => 'British English',
                'value' => 'en_GB',
              ),
              89 => 
              array (
                'key' => 'Bulgarian',
                'value' => 'bg',
              ),
              90 => 
              array (
                'key' => 'Bulgarian (Bulgaria)',
                'value' => 'bg_BG',
              ),
              91 => 
              array (
                'key' => 'Burmese',
                'value' => 'my',
              ),
              92 => 
              array (
                'key' => 'Burmese (Myanmar (Burma))',
                'value' => 'my_MM',
              ),
              93 => 
              array (
                'key' => 'Canadian English',
                'value' => 'en_CA',
              ),
              94 => 
              array (
                'key' => 'Canadian French',
                'value' => 'fr_CA',
              ),
              95 => 
              array (
                'key' => 'Catalan',
                'value' => 'ca',
              ),
              96 => 
              array (
                'key' => 'Catalan (Andorra)',
                'value' => 'ca_AD',
              ),
              97 => 
              array (
                'key' => 'Catalan (France)',
                'value' => 'ca_FR',
              ),
              98 => 
              array (
                'key' => 'Catalan (Italy)',
                'value' => 'ca_IT',
              ),
              99 => 
              array (
                'key' => 'Catalan (Spain)',
                'value' => 'ca_ES',
              ),
              100 => 
              array (
                'key' => 'Catalan (Spain)',
                'value' => 'ca_ES_VALENCIA',
              ),
              101 => 
              array (
                'key' => 'Central Atlas Tamazight',
                'value' => 'tzm',
              ),
              102 => 
              array (
                'key' => 'Central Atlas Tamazight (Morocco)',
                'value' => 'tzm_Latn_MA',
              ),
              103 => 
              array (
                'key' => 'Central Atlas Tamazight (Morocco)',
                'value' => 'tzm_MA',
              ),
              104 => 
              array (
                'key' => 'Cherokee',
                'value' => 'chr',
              ),
              105 => 
              array (
                'key' => 'Cherokee (United States)',
                'value' => 'chr_US',
              ),
              106 => 
              array (
                'key' => 'Chiga',
                'value' => 'cgg',
              ),
              107 => 
              array (
                'key' => 'Chiga (Uganda)',
                'value' => 'cgg_UG',
              ),
              108 => 
              array (
                'key' => 'Chinese',
                'value' => 'zh',
              ),
              109 => 
              array (
                'key' => 'Chinese (China)',
                'value' => 'zh_Hans_CN',
              ),
              110 => 
              array (
                'key' => 'Chinese (China)',
                'value' => 'zh_CN',
              ),
              111 => 
              array (
                'key' => 'Chinese (Hong Kong SAR China)',
                'value' => 'zh_Hant_HK',
              ),
              112 => 
              array (
                'key' => 'Chinese (Hong Kong SAR China)',
                'value' => 'zh_Hans_HK',
              ),
              113 => 
              array (
                'key' => 'Chinese (Hong Kong SAR China)',
                'value' => 'zh_HK',
              ),
              114 => 
              array (
                'key' => 'Chinese (Macau SAR China)',
                'value' => 'zh_Hans_MO',
              ),
              115 => 
              array (
                'key' => 'Chinese (Macau SAR China)',
                'value' => 'zh_Hant_MO',
              ),
              116 => 
              array (
                'key' => 'Chinese (Macau SAR China)',
                'value' => 'zh_MO',
              ),
              117 => 
              array (
                'key' => 'Chinese (Singapore)',
                'value' => 'zh_SG',
              ),
              118 => 
              array (
                'key' => 'Chinese (Singapore)',
                'value' => 'zh_Hans_SG',
              ),
              119 => 
              array (
                'key' => 'Chinese (Taiwan)',
                'value' => 'zh_Hant_TW',
              ),
              120 => 
              array (
                'key' => 'Chinese (Taiwan)',
                'value' => 'zh_TW',
              ),
              121 => 
              array (
                'key' => 'Colognian',
                'value' => 'ksh',
              ),
              122 => 
              array (
                'key' => 'Colognian (Germany)',
                'value' => 'ksh_DE',
              ),
              123 => 
              array (
                'key' => 'Congo Swahili',
                'value' => 'swc',
              ),
              124 => 
              array (
                'key' => 'Congo Swahili (Congo - Kinshasa)',
                'value' => 'swc_CD',
              ),
              125 => 
              array (
                'key' => 'Cornish',
                'value' => 'kw',
              ),
              126 => 
              array (
                'key' => 'Cornish (United Kingdom)',
                'value' => 'kw_GB',
              ),
              127 => 
              array (
                'key' => 'Croatian',
                'value' => 'hr',
              ),
              128 => 
              array (
                'key' => 'Croatian (Bosnia and Herzegovina)',
                'value' => 'hr_BA',
              ),
              129 => 
              array (
                'key' => 'Croatian (Croatia)',
                'value' => 'hr_HR',
              ),
              130 => 
              array (
                'key' => 'Czech',
                'value' => 'cs',
              ),
              131 => 
              array (
                'key' => 'Czech (Czech Republic)',
                'value' => 'cs_CZ',
              ),
              132 => 
              array (
                'key' => 'Danish',
                'value' => 'da',
              ),
              133 => 
              array (
                'key' => 'Danish (Denmark)',
                'value' => 'da_DK',
              ),
              134 => 
              array (
                'key' => 'Danish (Greenland)',
                'value' => 'da_GL',
              ),
              135 => 
              array (
                'key' => 'Duala',
                'value' => 'dua',
              ),
              136 => 
              array (
                'key' => 'Duala (Cameroon)',
                'value' => 'dua_CM',
              ),
              137 => 
              array (
                'key' => 'Dutch',
                'value' => 'nl',
              ),
              138 => 
              array (
                'key' => 'Dutch (Aruba)',
                'value' => 'nl_AW',
              ),
              139 => 
              array (
                'key' => 'Dutch (Caribbean Netherlands)',
                'value' => 'nl_BQ',
              ),
              140 => 
              array (
                'key' => 'Dutch (Curaçao)',
                'value' => 'nl_CW',
              ),
              141 => 
              array (
                'key' => 'Dutch (Netherlands)',
                'value' => 'nl_NL',
              ),
              142 => 
              array (
                'key' => 'Dutch (Sint Maarten)',
                'value' => 'nl_SX',
              ),
              143 => 
              array (
                'key' => 'Dutch (Suriname)',
                'value' => 'nl_SR',
              ),
              144 => 
              array (
                'key' => 'Dzongkha',
                'value' => 'dz',
              ),
              145 => 
              array (
                'key' => 'Dzongkha (Bhutan)',
                'value' => 'dz_BT',
              ),
              146 => 
              array (
                'key' => 'Embu',
                'value' => 'ebu',
              ),
              147 => 
              array (
                'key' => 'Embu (Kenya)',
                'value' => 'ebu_KE',
              ),
              148 => 
              array (
                'key' => 'English',
                'value' => 'en',
              ),
              149 => 
              array (
                'key' => 'English (American Samoa)',
                'value' => 'en_AS',
              ),
              150 => 
              array (
                'key' => 'English (Anguilla)',
                'value' => 'en_AI',
              ),
              151 => 
              array (
                'key' => 'English (Antigua and Barbuda)',
                'value' => 'en_AG',
              ),
              152 => 
              array (
                'key' => 'English (Bahamas)',
                'value' => 'en_BS',
              ),
              153 => 
              array (
                'key' => 'English (Barbados)',
                'value' => 'en_BB',
              ),
              154 => 
              array (
                'key' => 'English (Belgium)',
                'value' => 'en_BE',
              ),
              155 => 
              array (
                'key' => 'English (Belize)',
                'value' => 'en_BZ',
              ),
              156 => 
              array (
                'key' => 'English (Bermuda)',
                'value' => 'en_BM',
              ),
              157 => 
              array (
                'key' => 'English (Botswana)',
                'value' => 'en_BW',
              ),
              158 => 
              array (
                'key' => 'English (British Indian Ocean Territory)',
                'value' => 'en_IO',
              ),
              159 => 
              array (
                'key' => 'English (British Virgin Islands)',
                'value' => 'en_VG',
              ),
              160 => 
              array (
                'key' => 'English (Cameroon)',
                'value' => 'en_CM',
              ),
              161 => 
              array (
                'key' => 'English (Cayman Islands)',
                'value' => 'en_KY',
              ),
              162 => 
              array (
                'key' => 'English (Christmas Island)',
                'value' => 'en_CX',
              ),
              163 => 
              array (
                'key' => 'English (Cocos (Keeling) Islands)',
                'value' => 'en_CC',
              ),
              164 => 
              array (
                'key' => 'English (Cook Islands)',
                'value' => 'en_CK',
              ),
              165 => 
              array (
                'key' => 'English (Diego Garcia)',
                'value' => 'en_DG',
              ),
              166 => 
              array (
                'key' => 'English (Dominica)',
                'value' => 'en_DM',
              ),
              167 => 
              array (
                'key' => 'English (Eritrea)',
                'value' => 'en_ER',
              ),
              168 => 
              array (
                'key' => 'English (Europe)',
                'value' => 'en_150',
              ),
              169 => 
              array (
                'key' => 'English (Falkland Islands)',
                'value' => 'en_FK',
              ),
              170 => 
              array (
                'key' => 'English (Fiji)',
                'value' => 'en_FJ',
              ),
              171 => 
              array (
                'key' => 'English (Gambia)',
                'value' => 'en_GM',
              ),
              172 => 
              array (
                'key' => 'English (Ghana)',
                'value' => 'en_GH',
              ),
              173 => 
              array (
                'key' => 'English (Gibraltar)',
                'value' => 'en_GI',
              ),
              174 => 
              array (
                'key' => 'English (Grenada)',
                'value' => 'en_GD',
              ),
              175 => 
              array (
                'key' => 'English (Guam)',
                'value' => 'en_GU',
              ),
              176 => 
              array (
                'key' => 'English (Guernsey)',
                'value' => 'en_GG',
              ),
              177 => 
              array (
                'key' => 'English (Guyana)',
                'value' => 'en_GY',
              ),
              178 => 
              array (
                'key' => 'English (Hong Kong SAR China)',
                'value' => 'en_HK',
              ),
              179 => 
              array (
                'key' => 'English (India)',
                'value' => 'en_IN',
              ),
              180 => 
              array (
                'key' => 'English (Ireland)',
                'value' => 'en_IE',
              ),
              181 => 
              array (
                'key' => 'English (Isle of Man)',
                'value' => 'en_IM',
              ),
              182 => 
              array (
                'key' => 'English (Jamaica)',
                'value' => 'en_JM',
              ),
              183 => 
              array (
                'key' => 'English (Jersey)',
                'value' => 'en_JE',
              ),
              184 => 
              array (
                'key' => 'English (Kenya)',
                'value' => 'en_KE',
              ),
              185 => 
              array (
                'key' => 'English (Kiribati)',
                'value' => 'en_KI',
              ),
              186 => 
              array (
                'key' => 'English (Lesotho)',
                'value' => 'en_LS',
              ),
              187 => 
              array (
                'key' => 'English (Liberia)',
                'value' => 'en_LR',
              ),
              188 => 
              array (
                'key' => 'English (Macau SAR China)',
                'value' => 'en_MO',
              ),
              189 => 
              array (
                'key' => 'English (Madagascar)',
                'value' => 'en_MG',
              ),
              190 => 
              array (
                'key' => 'English (Malawi)',
                'value' => 'en_MW',
              ),
              191 => 
              array (
                'key' => 'English (Malta)',
                'value' => 'en_MT',
              ),
              192 => 
              array (
                'key' => 'English (Marshall Islands)',
                'value' => 'en_MH',
              ),
              193 => 
              array (
                'key' => 'English (Mauritius)',
                'value' => 'en_MU',
              ),
              194 => 
              array (
                'key' => 'English (Micronesia)',
                'value' => 'en_FM',
              ),
              195 => 
              array (
                'key' => 'English (Montserrat)',
                'value' => 'en_MS',
              ),
              196 => 
              array (
                'key' => 'English (Namibia)',
                'value' => 'en_NA',
              ),
              197 => 
              array (
                'key' => 'English (Nauru)',
                'value' => 'en_NR',
              ),
              198 => 
              array (
                'key' => 'English (New Zealand)',
                'value' => 'en_NZ',
              ),
              199 => 
              array (
                'key' => 'English (Nigeria)',
                'value' => 'en_NG',
              ),
              200 => 
              array (
                'key' => 'English (Niue)',
                'value' => 'en_NU',
              ),
              201 => 
              array (
                'key' => 'English (Norfolk Island)',
                'value' => 'en_NF',
              ),
              202 => 
              array (
                'key' => 'English (Northern Mariana Islands)',
                'value' => 'en_MP',
              ),
              203 => 
              array (
                'key' => 'English (Pakistan)',
                'value' => 'en_PK',
              ),
              204 => 
              array (
                'key' => 'English (Palau)',
                'value' => 'en_PW',
              ),
              205 => 
              array (
                'key' => 'English (Papua New Guinea)',
                'value' => 'en_PG',
              ),
              206 => 
              array (
                'key' => 'English (Philippines)',
                'value' => 'en_PH',
              ),
              207 => 
              array (
                'key' => 'English (Pitcairn Islands)',
                'value' => 'en_PN',
              ),
              208 => 
              array (
                'key' => 'English (Puerto Rico)',
                'value' => 'en_PR',
              ),
              209 => 
              array (
                'key' => 'English (Rwanda)',
                'value' => 'en_RW',
              ),
              210 => 
              array (
                'key' => 'English (Saint Helena)',
                'value' => 'en_SH',
              ),
              211 => 
              array (
                'key' => 'English (Saint Kitts and Nevis)',
                'value' => 'en_KN',
              ),
              212 => 
              array (
                'key' => 'English (Saint Lucia)',
                'value' => 'en_LC',
              ),
              213 => 
              array (
                'key' => 'English (Samoa)',
                'value' => 'en_WS',
              ),
              214 => 
              array (
                'key' => 'English (Seychelles)',
                'value' => 'en_SC',
              ),
              215 => 
              array (
                'key' => 'English (Sierra Leone)',
                'value' => 'en_SL',
              ),
              216 => 
              array (
                'key' => 'English (Singapore)',
                'value' => 'en_SG',
              ),
              217 => 
              array (
                'key' => 'English (Sint Maarten)',
                'value' => 'en_SX',
              ),
              218 => 
              array (
                'key' => 'English (Solomon Islands)',
                'value' => 'en_SB',
              ),
              219 => 
              array (
                'key' => 'English (South Africa)',
                'value' => 'en_ZA',
              ),
              220 => 
              array (
                'key' => 'English (South Sudan)',
                'value' => 'en_SS',
              ),
              221 => 
              array (
                'key' => 'English (St. Vincent & Grenadines)',
                'value' => 'en_VC',
              ),
              222 => 
              array (
                'key' => 'English (Sudan)',
                'value' => 'en_SD',
              ),
              223 => 
              array (
                'key' => 'English (Swaziland)',
                'value' => 'en_SZ',
              ),
              224 => 
              array (
                'key' => 'English (Tanzania)',
                'value' => 'en_TZ',
              ),
              225 => 
              array (
                'key' => 'English (Tokelau)',
                'value' => 'en_TK',
              ),
              226 => 
              array (
                'key' => 'English (Tonga)',
                'value' => 'en_TO',
              ),
              227 => 
              array (
                'key' => 'English (Trinidad and Tobago)',
                'value' => 'en_TT',
              ),
              228 => 
              array (
                'key' => 'English (Turks and Caicos Islands)',
                'value' => 'en_TC',
              ),
              229 => 
              array (
                'key' => 'English (Tuvalu)',
                'value' => 'en_TV',
              ),
              230 => 
              array (
                'key' => 'English (U.S. Outlying Islands)',
                'value' => 'en_UM',
              ),
              231 => 
              array (
                'key' => 'English (U.S. Virgin Islands)',
                'value' => 'en_VI',
              ),
              232 => 
              array (
                'key' => 'English (Uganda)',
                'value' => 'en_UG',
              ),
              233 => 
              array (
                'key' => 'English (United States)',
                'value' => 'en_US_POSIX',
              ),
              234 => 
              array (
                'key' => 'English (United States)',
                'value' => 'en_Dsrt_US',
              ),
              235 => 
              array (
                'key' => 'English (Vanuatu)',
                'value' => 'en_VU',
              ),
              236 => 
              array (
                'key' => 'English (World)',
                'value' => 'en_001',
              ),
              237 => 
              array (
                'key' => 'English (Zambia)',
                'value' => 'en_ZM',
              ),
              238 => 
              array (
                'key' => 'English (Zimbabwe)',
                'value' => 'en_ZW',
              ),
              239 => 
              array (
                'key' => 'Esperanto',
                'value' => 'eo',
              ),
              240 => 
              array (
                'key' => 'Esperanto (World)',
                'value' => 'eo_001',
              ),
              241 => 
              array (
                'key' => 'Estonian',
                'value' => 'et',
              ),
              242 => 
              array (
                'key' => 'Estonian (Estonia)',
                'value' => 'et_EE',
              ),
              243 => 
              array (
                'key' => 'European Portuguese',
                'value' => 'pt_PT',
              ),
              244 => 
              array (
                'key' => 'European Spanish',
                'value' => 'es_ES',
              ),
              245 => 
              array (
                'key' => 'Ewe',
                'value' => 'ee',
              ),
              246 => 
              array (
                'key' => 'Ewe (Ghana)',
                'value' => 'ee_GH',
              ),
              247 => 
              array (
                'key' => 'Ewe (Togo)',
                'value' => 'ee_TG',
              ),
              248 => 
              array (
                'key' => 'Ewondo',
                'value' => 'ewo',
              ),
              249 => 
              array (
                'key' => 'Ewondo (Cameroon)',
                'value' => 'ewo_CM',
              ),
              250 => 
              array (
                'key' => 'Faroese',
                'value' => 'fo',
              ),
              251 => 
              array (
                'key' => 'Faroese (Faroe Islands)',
                'value' => 'fo_FO',
              ),
              252 => 
              array (
                'key' => 'Filipino',
                'value' => 'fil',
              ),
              253 => 
              array (
                'key' => 'Filipino (Philippines)',
                'value' => 'fil_PH',
              ),
              254 => 
              array (
                'key' => 'Finnish',
                'value' => 'fi',
              ),
              255 => 
              array (
                'key' => 'Finnish (Finland)',
                'value' => 'fi_FI',
              ),
              256 => 
              array (
                'key' => 'Flemish',
                'value' => 'nl_BE',
              ),
              257 => 
              array (
                'key' => 'French',
                'value' => 'fr',
              ),
              258 => 
              array (
                'key' => 'French (Algeria)',
                'value' => 'fr_DZ',
              ),
              259 => 
              array (
                'key' => 'French (Belgium)',
                'value' => 'fr_BE',
              ),
              260 => 
              array (
                'key' => 'French (Benin)',
                'value' => 'fr_BJ',
              ),
              261 => 
              array (
                'key' => 'French (Burkina Faso)',
                'value' => 'fr_BF',
              ),
              262 => 
              array (
                'key' => 'French (Burundi)',
                'value' => 'fr_BI',
              ),
              263 => 
              array (
                'key' => 'French (Cameroon)',
                'value' => 'fr_CM',
              ),
              264 => 
              array (
                'key' => 'French (Central African Republic)',
                'value' => 'fr_CF',
              ),
              265 => 
              array (
                'key' => 'French (Chad)',
                'value' => 'fr_TD',
              ),
              266 => 
              array (
                'key' => 'French (Comoros)',
                'value' => 'fr_KM',
              ),
              267 => 
              array (
                'key' => 'French (Congo - Brazzaville)',
                'value' => 'fr_CG',
              ),
              268 => 
              array (
                'key' => 'French (Congo - Kinshasa)',
                'value' => 'fr_CD',
              ),
              269 => 
              array (
                'key' => 'French (Côte d’Ivoire)',
                'value' => 'fr_CI',
              ),
              270 => 
              array (
                'key' => 'French (Djibouti)',
                'value' => 'fr_DJ',
              ),
              271 => 
              array (
                'key' => 'French (Equatorial Guinea)',
                'value' => 'fr_GQ',
              ),
              272 => 
              array (
                'key' => 'French (France)',
                'value' => 'fr_FR',
              ),
              273 => 
              array (
                'key' => 'French (French Guiana)',
                'value' => 'fr_GF',
              ),
              274 => 
              array (
                'key' => 'French (French Polynesia)',
                'value' => 'fr_PF',
              ),
              275 => 
              array (
                'key' => 'French (Gabon)',
                'value' => 'fr_GA',
              ),
              276 => 
              array (
                'key' => 'French (Guadeloupe)',
                'value' => 'fr_GP',
              ),
              277 => 
              array (
                'key' => 'French (Guinea)',
                'value' => 'fr_GN',
              ),
              278 => 
              array (
                'key' => 'French (Haiti)',
                'value' => 'fr_HT',
              ),
              279 => 
              array (
                'key' => 'French (Luxembourg)',
                'value' => 'fr_LU',
              ),
              280 => 
              array (
                'key' => 'French (Madagascar)',
                'value' => 'fr_MG',
              ),
              281 => 
              array (
                'key' => 'French (Mali)',
                'value' => 'fr_ML',
              ),
              282 => 
              array (
                'key' => 'French (Martinique)',
                'value' => 'fr_MQ',
              ),
              283 => 
              array (
                'key' => 'French (Mauritania)',
                'value' => 'fr_MR',
              ),
              284 => 
              array (
                'key' => 'French (Mauritius)',
                'value' => 'fr_MU',
              ),
              285 => 
              array (
                'key' => 'French (Mayotte)',
                'value' => 'fr_YT',
              ),
              286 => 
              array (
                'key' => 'French (Monaco)',
                'value' => 'fr_MC',
              ),
              287 => 
              array (
                'key' => 'French (Morocco)',
                'value' => 'fr_MA',
              ),
              288 => 
              array (
                'key' => 'French (New Caledonia)',
                'value' => 'fr_NC',
              ),
              289 => 
              array (
                'key' => 'French (Niger)',
                'value' => 'fr_NE',
              ),
              290 => 
              array (
                'key' => 'French (Rwanda)',
                'value' => 'fr_RW',
              ),
              291 => 
              array (
                'key' => 'French (Réunion)',
                'value' => 'fr_RE',
              ),
              292 => 
              array (
                'key' => 'French (Saint Barthélemy)',
                'value' => 'fr_BL',
              ),
              293 => 
              array (
                'key' => 'French (Saint Martin)',
                'value' => 'fr_MF',
              ),
              294 => 
              array (
                'key' => 'French (Saint Pierre and Miquelon)',
                'value' => 'fr_PM',
              ),
              295 => 
              array (
                'key' => 'French (Senegal)',
                'value' => 'fr_SN',
              ),
              296 => 
              array (
                'key' => 'French (Seychelles)',
                'value' => 'fr_SC',
              ),
              297 => 
              array (
                'key' => 'French (Syria)',
                'value' => 'fr_SY',
              ),
              298 => 
              array (
                'key' => 'French (Togo)',
                'value' => 'fr_TG',
              ),
              299 => 
              array (
                'key' => 'French (Tunisia)',
                'value' => 'fr_TN',
              ),
              300 => 
              array (
                'key' => 'French (Vanuatu)',
                'value' => 'fr_VU',
              ),
              301 => 
              array (
                'key' => 'French (Wallis and Futuna)',
                'value' => 'fr_WF',
              ),
              302 => 
              array (
                'key' => 'Friulian',
                'value' => 'fur',
              ),
              303 => 
              array (
                'key' => 'Friulian (Italy)',
                'value' => 'fur_IT',
              ),
              304 => 
              array (
                'key' => 'Fulah',
                'value' => 'ff',
              ),
              305 => 
              array (
                'key' => 'Fulah (Cameroon)',
                'value' => 'ff_CM',
              ),
              306 => 
              array (
                'key' => 'Fulah (Guinea)',
                'value' => 'ff_GN',
              ),
              307 => 
              array (
                'key' => 'Fulah (Mauritania)',
                'value' => 'ff_MR',
              ),
              308 => 
              array (
                'key' => 'Fulah (Senegal)',
                'value' => 'ff_SN',
              ),
              309 => 
              array (
                'key' => 'Galician',
                'value' => 'gl',
              ),
              310 => 
              array (
                'key' => 'Galician (Spain)',
                'value' => 'gl_ES',
              ),
              311 => 
              array (
                'key' => 'Ganda',
                'value' => 'lg',
              ),
              312 => 
              array (
                'key' => 'Ganda (Uganda)',
                'value' => 'lg_UG',
              ),
              313 => 
              array (
                'key' => 'Georgian',
                'value' => 'ka',
              ),
              314 => 
              array (
                'key' => 'Georgian (Georgia)',
                'value' => 'ka_GE',
              ),
              315 => 
              array (
                'key' => 'German',
                'value' => 'de',
              ),
              316 => 
              array (
                'key' => 'German (Belgium)',
                'value' => 'de_BE',
              ),
              317 => 
              array (
                'key' => 'German (Germany)',
                'value' => 'de_DE',
              ),
              318 => 
              array (
                'key' => 'German (Liechtenstein)',
                'value' => 'de_LI',
              ),
              319 => 
              array (
                'key' => 'German (Luxembourg)',
                'value' => 'de_LU',
              ),
              320 => 
              array (
                'key' => 'Greek',
                'value' => 'el',
              ),
              321 => 
              array (
                'key' => 'Greek (Cyprus)',
                'value' => 'el_CY',
              ),
              322 => 
              array (
                'key' => 'Greek (Greece)',
                'value' => 'el_GR',
              ),
              323 => 
              array (
                'key' => 'Gujarati',
                'value' => 'gu',
              ),
              324 => 
              array (
                'key' => 'Gujarati (India)',
                'value' => 'gu_IN',
              ),
              325 => 
              array (
                'key' => 'Gusii',
                'value' => 'guz',
              ),
              326 => 
              array (
                'key' => 'Gusii (Kenya)',
                'value' => 'guz_KE',
              ),
              327 => 
              array (
                'key' => 'Hausa',
                'value' => 'ha',
              ),
              328 => 
              array (
                'key' => 'Hausa (Ghana)',
                'value' => 'ha_GH',
              ),
              329 => 
              array (
                'key' => 'Hausa (Ghana)',
                'value' => 'ha_Latn_GH',
              ),
              330 => 
              array (
                'key' => 'Hausa (Niger)',
                'value' => 'ha_NE',
              ),
              331 => 
              array (
                'key' => 'Hausa (Niger)',
                'value' => 'ha_Latn_NE',
              ),
              332 => 
              array (
                'key' => 'Hausa (Nigeria)',
                'value' => 'ha_NG',
              ),
              333 => 
              array (
                'key' => 'Hausa (Nigeria)',
                'value' => 'ha_Latn_NG',
              ),
              334 => 
              array (
                'key' => 'Hawaiian',
                'value' => 'haw',
              ),
              335 => 
              array (
                'key' => 'Hawaiian (United States)',
                'value' => 'haw_US',
              ),
              336 => 
              array (
                'key' => 'Hebrew',
                'value' => 'he',
              ),
              337 => 
              array (
                'key' => 'Hebrew (Israel)',
                'value' => 'he_IL',
              ),
              338 => 
              array (
                'key' => 'Hindi',
                'value' => 'hi',
              ),
              339 => 
              array (
                'key' => 'Hindi (India)',
                'value' => 'hi_IN',
              ),
              340 => 
              array (
                'key' => 'Hungarian',
                'value' => 'hu',
              ),
              341 => 
              array (
                'key' => 'Hungarian (Hungary)',
                'value' => 'hu_HU',
              ),
              342 => 
              array (
                'key' => 'Icelandic',
                'value' => 'is',
              ),
              343 => 
              array (
                'key' => 'Icelandic (Iceland)',
                'value' => 'is_IS',
              ),
              344 => 
              array (
                'key' => 'Igbo',
                'value' => 'ig',
              ),
              345 => 
              array (
                'key' => 'Igbo (Nigeria)',
                'value' => 'ig_NG',
              ),
              346 => 
              array (
                'key' => 'Indonesian',
                'value' => 'id',
              ),
              347 => 
              array (
                'key' => 'Indonesian (Indonesia)',
                'value' => 'id_ID',
              ),
              348 => 
              array (
                'key' => 'Interlingua',
                'value' => 'ia',
              ),
              349 => 
              array (
                'key' => 'Interlingua (France)',
                'value' => 'ia_FR',
              ),
              350 => 
              array (
                'key' => 'Irish',
                'value' => 'ga',
              ),
              351 => 
              array (
                'key' => 'Irish (Ireland)',
                'value' => 'ga_IE',
              ),
              352 => 
              array (
                'key' => 'Italian',
                'value' => 'it',
              ),
              353 => 
              array (
                'key' => 'Italian (Italy)',
                'value' => 'it_IT',
              ),
              354 => 
              array (
                'key' => 'Italian (San Marino)',
                'value' => 'it_SM',
              ),
              355 => 
              array (
                'key' => 'Italian (Switzerland)',
                'value' => 'it_CH',
              ),
              356 => 
              array (
                'key' => 'Japanese',
                'value' => 'ja',
              ),
              357 => 
              array (
                'key' => 'Japanese (Japan)',
                'value' => 'ja_JP',
              ),
              358 => 
              array (
                'key' => 'Jola-Fonyi',
                'value' => 'dyo',
              ),
              359 => 
              array (
                'key' => 'Jola-Fonyi (Senegal)',
                'value' => 'dyo_SN',
              ),
              360 => 
              array (
                'key' => 'Kabuverdianu',
                'value' => 'kea',
              ),
              361 => 
              array (
                'key' => 'Kabuverdianu (Cape Verde)',
                'value' => 'kea_CV',
              ),
              362 => 
              array (
                'key' => 'Kabyle',
                'value' => 'kab',
              ),
              363 => 
              array (
                'key' => 'Kabyle (Algeria)',
                'value' => 'kab_DZ',
              ),
              364 => 
              array (
                'key' => 'Kako',
                'value' => 'kkj',
              ),
              365 => 
              array (
                'key' => 'Kako (Cameroon)',
                'value' => 'kkj_CM',
              ),
              366 => 
              array (
                'key' => 'Kalaallisut',
                'value' => 'kl',
              ),
              367 => 
              array (
                'key' => 'Kalaallisut (Greenland)',
                'value' => 'kl_GL',
              ),
              368 => 
              array (
                'key' => 'Kalenjin',
                'value' => 'kln',
              ),
              369 => 
              array (
                'key' => 'Kalenjin (Kenya)',
                'value' => 'kln_KE',
              ),
              370 => 
              array (
                'key' => 'Kamba',
                'value' => 'kam',
              ),
              371 => 
              array (
                'key' => 'Kamba (Kenya)',
                'value' => 'kam_KE',
              ),
              372 => 
              array (
                'key' => 'Kannada',
                'value' => 'kn',
              ),
              373 => 
              array (
                'key' => 'Kannada (India)',
                'value' => 'kn_IN',
              ),
              374 => 
              array (
                'key' => 'Kashmiri',
                'value' => 'ks',
              ),
              375 => 
              array (
                'key' => 'Kashmiri (India)',
                'value' => 'ks_IN',
              ),
              376 => 
              array (
                'key' => 'Kashmiri (India)',
                'value' => 'ks_Arab_IN',
              ),
              377 => 
              array (
                'key' => 'Kazakh',
                'value' => 'kk',
              ),
              378 => 
              array (
                'key' => 'Kazakh (Kazakhstan)',
                'value' => 'kk_KZ',
              ),
              379 => 
              array (
                'key' => 'Kazakh (Kazakhstan)',
                'value' => 'kk_Cyrl_KZ',
              ),
              380 => 
              array (
                'key' => 'Khmer',
                'value' => 'km',
              ),
              381 => 
              array (
                'key' => 'Khmer (Cambodia)',
                'value' => 'km_KH',
              ),
              382 => 
              array (
                'key' => 'Kikuyu',
                'value' => 'ki',
              ),
              383 => 
              array (
                'key' => 'Kikuyu (Kenya)',
                'value' => 'ki_KE',
              ),
              384 => 
              array (
                'key' => 'Kinyarwanda',
                'value' => 'rw',
              ),
              385 => 
              array (
                'key' => 'Kinyarwanda (Rwanda)',
                'value' => 'rw_RW',
              ),
              386 => 
              array (
                'key' => 'Konkani',
                'value' => 'kok',
              ),
              387 => 
              array (
                'key' => 'Konkani (India)',
                'value' => 'kok_IN',
              ),
              388 => 
              array (
                'key' => 'Korean',
                'value' => 'ko',
              ),
              389 => 
              array (
                'key' => 'Korean (North Korea)',
                'value' => 'ko_KP',
              ),
              390 => 
              array (
                'key' => 'Korean (South Korea)',
                'value' => 'ko_KR',
              ),
              391 => 
              array (
                'key' => 'Koyra Chiini',
                'value' => 'khq',
              ),
              392 => 
              array (
                'key' => 'Koyra Chiini (Mali)',
                'value' => 'khq_ML',
              ),
              393 => 
              array (
                'key' => 'Koyraboro Senni',
                'value' => 'ses',
              ),
              394 => 
              array (
                'key' => 'Koyraboro Senni (Mali)',
                'value' => 'ses_ML',
              ),
              395 => 
              array (
                'key' => 'Kwasio',
                'value' => 'nmg',
              ),
              396 => 
              array (
                'key' => 'Kwasio (Cameroon)',
                'value' => 'nmg_CM',
              ),
              397 => 
              array (
                'key' => 'Kyrgyz',
                'value' => 'ky',
              ),
              398 => 
              array (
                'key' => 'Lakota',
                'value' => 'lkt',
              ),
              399 => 
              array (
                'key' => 'Lakota (United States)',
                'value' => 'lkt_US',
              ),
              400 => 
              array (
                'key' => 'Langi',
                'value' => 'lag',
              ),
              401 => 
              array (
                'key' => 'Langi (Tanzania)',
                'value' => 'lag_TZ',
              ),
              402 => 
              array (
                'key' => 'Lao',
                'value' => 'lo',
              ),
              403 => 
              array (
                'key' => 'Lao (Laos)',
                'value' => 'lo_LA',
              ),
              404 => 
              array (
                'key' => 'Latin American Spanish',
                'value' => 'es_419',
              ),
              405 => 
              array (
                'key' => 'Latvian',
                'value' => 'lv',
              ),
              406 => 
              array (
                'key' => 'Latvian (Latvia)',
                'value' => 'lv_LV',
              ),
              407 => 
              array (
                'key' => 'Lingala',
                'value' => 'ln',
              ),
              408 => 
              array (
                'key' => 'Lingala (Angola)',
                'value' => 'ln_AO',
              ),
              409 => 
              array (
                'key' => 'Lingala (Central African Republic)',
                'value' => 'ln_CF',
              ),
              410 => 
              array (
                'key' => 'Lingala (Congo - Brazzaville)',
                'value' => 'ln_CG',
              ),
              411 => 
              array (
                'key' => 'Lingala (Congo - Kinshasa)',
                'value' => 'ln_CD',
              ),
              412 => 
              array (
                'key' => 'Lithuanian',
                'value' => 'lt',
              ),
              413 => 
              array (
                'key' => 'Lithuanian (Lithuania)',
                'value' => 'lt_LT',
              ),
              414 => 
              array (
                'key' => 'Luba-Katanga',
                'value' => 'lu',
              ),
              415 => 
              array (
                'key' => 'Luba-Katanga (Congo - Kinshasa)',
                'value' => 'lu_CD',
              ),
              416 => 
              array (
                'key' => 'Luo',
                'value' => 'luo',
              ),
              417 => 
              array (
                'key' => 'Luo (Kenya)',
                'value' => 'luo_KE',
              ),
              418 => 
              array (
                'key' => 'Luyia',
                'value' => 'luy',
              ),
              419 => 
              array (
                'key' => 'Luyia (Kenya)',
                'value' => 'luy_KE',
              ),
              420 => 
              array (
                'key' => 'Macedonian',
                'value' => 'mk',
              ),
              421 => 
              array (
                'key' => 'Macedonian (Macedonia)',
                'value' => 'mk_MK',
              ),
              422 => 
              array (
                'key' => 'Machame',
                'value' => 'jmc',
              ),
              423 => 
              array (
                'key' => 'Machame (Tanzania)',
                'value' => 'jmc_TZ',
              ),
              424 => 
              array (
                'key' => 'Makhuwa-Meetto',
                'value' => 'mgh',
              ),
              425 => 
              array (
                'key' => 'Makhuwa-Meetto (Mozambique)',
                'value' => 'mgh_MZ',
              ),
              426 => 
              array (
                'key' => 'Makonde',
                'value' => 'kde',
              ),
              427 => 
              array (
                'key' => 'Makonde (Tanzania)',
                'value' => 'kde_TZ',
              ),
              428 => 
              array (
                'key' => 'Malagasy',
                'value' => 'mg',
              ),
              429 => 
              array (
                'key' => 'Malagasy (Madagascar)',
                'value' => 'mg_MG',
              ),
              430 => 
              array (
                'key' => 'Malay',
                'value' => 'ms',
              ),
              431 => 
              array (
                'key' => 'Malay (Brunei)',
                'value' => 'ms_Latn_BN',
              ),
              432 => 
              array (
                'key' => 'Malay (Brunei)',
                'value' => 'ms_BN',
              ),
              433 => 
              array (
                'key' => 'Malay (Malaysia)',
                'value' => 'ms_MY',
              ),
              434 => 
              array (
                'key' => 'Malay (Malaysia)',
                'value' => 'ms_Latn_MY',
              ),
              435 => 
              array (
                'key' => 'Malay (Singapore)',
                'value' => 'ms_Latn_SG',
              ),
              436 => 
              array (
                'key' => 'Malay (Singapore)',
                'value' => 'ms_SG',
              ),
              437 => 
              array (
                'key' => 'Malayalam',
                'value' => 'ml',
              ),
              438 => 
              array (
                'key' => 'Malayalam (India)',
                'value' => 'ml_IN',
              ),
              439 => 
              array (
                'key' => 'Maltese',
                'value' => 'mt',
              ),
              440 => 
              array (
                'key' => 'Maltese (Malta)',
                'value' => 'mt_MT',
              ),
              441 => 
              array (
                'key' => 'Manx',
                'value' => 'gv',
              ),
              442 => 
              array (
                'key' => 'Manx (Isle of Man)',
                'value' => 'gv_IM',
              ),
              443 => 
              array (
                'key' => 'Marathi',
                'value' => 'mr',
              ),
              444 => 
              array (
                'key' => 'Marathi (India)',
                'value' => 'mr_IN',
              ),
              445 => 
              array (
                'key' => 'Masai',
                'value' => 'mas',
              ),
              446 => 
              array (
                'key' => 'Masai (Kenya)',
                'value' => 'mas_KE',
              ),
              447 => 
              array (
                'key' => 'Masai (Tanzania)',
                'value' => 'mas_TZ',
              ),
              448 => 
              array (
                'key' => 'Meru',
                'value' => 'mer',
              ),
              449 => 
              array (
                'key' => 'Meru (Kenya)',
                'value' => 'mer_KE',
              ),
              450 => 
              array (
                'key' => 'Meta\'',
                'value' => 'mgo',
              ),
              451 => 
              array (
                'key' => 'Meta\' (Cameroon)',
                'value' => 'mgo_CM',
              ),
              452 => 
              array (
                'key' => 'Mexican Spanish',
                'value' => 'es_MX',
              ),
              453 => 
              array (
                'key' => 'Modern Standard Arabic',
                'value' => 'ar_001',
              ),
              454 => 
              array (
                'key' => 'Moldavian',
                'value' => 'ro_MD',
              ),
              455 => 
              array (
                'key' => 'Mongolian',
                'value' => 'mn',
              ),
              456 => 
              array (
                'key' => 'Mongolian (Mongolia)',
                'value' => 'mn_MN',
              ),
              457 => 
              array (
                'key' => 'Mongolian (Mongolia)',
                'value' => 'mn_Cyrl_MN',
              ),
              458 => 
              array (
                'key' => 'Morisyen',
                'value' => 'mfe',
              ),
              459 => 
              array (
                'key' => 'Morisyen (Mauritius)',
                'value' => 'mfe_MU',
              ),
              460 => 
              array (
                'key' => 'Mundang',
                'value' => 'mua',
              ),
              461 => 
              array (
                'key' => 'Mundang (Cameroon)',
                'value' => 'mua_CM',
              ),
              462 => 
              array (
                'key' => 'Nama',
                'value' => 'naq',
              ),
              463 => 
              array (
                'key' => 'Nama (Namibia)',
                'value' => 'naq_NA',
              ),
              464 => 
              array (
                'key' => 'Nepali',
                'value' => 'ne',
              ),
              465 => 
              array (
                'key' => 'Nepali (India)',
                'value' => 'ne_IN',
              ),
              466 => 
              array (
                'key' => 'Nepali (Nepal)',
                'value' => 'ne_NP',
              ),
              467 => 
              array (
                'key' => 'Ngiemboon',
                'value' => 'nnh',
              ),
              468 => 
              array (
                'key' => 'Ngiemboon (Cameroon)',
                'value' => 'nnh_CM',
              ),
              469 => 
              array (
                'key' => 'Ngomba',
                'value' => 'jgo',
              ),
              470 => 
              array (
                'key' => 'Ngomba (Cameroon)',
                'value' => 'jgo_CM',
              ),
              471 => 
              array (
                'key' => 'North Ndebele',
                'value' => 'nd',
              ),
              472 => 
              array (
                'key' => 'North Ndebele (Zimbabwe)',
                'value' => 'nd_ZW',
              ),
              473 => 
              array (
                'key' => 'Northern Sami',
                'value' => 'se',
              ),
              474 => 
              array (
                'key' => 'Northern Sami (Finland)',
                'value' => 'se_FI',
              ),
              475 => 
              array (
                'key' => 'Northern Sami (Norway)',
                'value' => 'se_NO',
              ),
              476 => 
              array (
                'key' => 'Northern Sotho',
                'value' => 'nso',
              ),
              477 => 
              array (
                'key' => 'Northern Sotho (South Africa)',
                'value' => 'nso_ZA',
              ),
              478 => 
              array (
                'key' => 'Norwegian Bokmål',
                'value' => 'nb',
              ),
              479 => 
              array (
                'key' => 'Norwegian Bokmål (Norway)',
                'value' => 'nb_NO',
              ),
              480 => 
              array (
                'key' => 'Norwegian Bokmål (Svalbard and Jan Mayen)',
                'value' => 'nb_SJ',
              ),
              481 => 
              array (
                'key' => 'Norwegian Nynorsk',
                'value' => 'nn',
              ),
              482 => 
              array (
                'key' => 'Norwegian Nynorsk (Norway)',
                'value' => 'nn_NO',
              ),
              483 => 
              array (
                'key' => 'Nuer',
                'value' => 'nus',
              ),
              484 => 
              array (
                'key' => 'Nuer (Sudan)',
                'value' => 'nus_SD',
              ),
              485 => 
              array (
                'key' => 'Nyankole',
                'value' => 'nyn',
              ),
              486 => 
              array (
                'key' => 'Nyankole (Uganda)',
                'value' => 'nyn_UG',
              ),
              487 => 
              array (
                'key' => 'Oriya',
                'value' => 'or',
              ),
              488 => 
              array (
                'key' => 'Oriya (India)',
                'value' => 'or_IN',
              ),
              489 => 
              array (
                'key' => 'Oromo',
                'value' => 'om',
              ),
              490 => 
              array (
                'key' => 'Oromo (Ethiopia)',
                'value' => 'om_ET',
              ),
              491 => 
              array (
                'key' => 'Oromo (Kenya)',
                'value' => 'om_KE',
              ),
              492 => 
              array (
                'key' => 'Ossetic',
                'value' => 'os',
              ),
              493 => 
              array (
                'key' => 'Ossetic (Georgia)',
                'value' => 'os_GE',
              ),
              494 => 
              array (
                'key' => 'Ossetic (Russia)',
                'value' => 'os_RU',
              ),
              495 => 
              array (
                'key' => 'Pashto',
                'value' => 'ps',
              ),
              496 => 
              array (
                'key' => 'Pashto (Afghanistan)',
                'value' => 'ps_AF',
              ),
              497 => 
              array (
                'key' => 'Persian',
                'value' => 'fa',
              ),
              498 => 
              array (
                'key' => 'Persian (Afghanistan)',
                'value' => 'fa_AF',
              ),
              499 => 
              array (
                'key' => 'Persian (Iran)',
                'value' => 'fa_IR',
              ),
              500 => 
              array (
                'key' => 'Polish',
                'value' => 'pl',
              ),
              501 => 
              array (
                'key' => 'Polish (Poland)',
                'value' => 'pl_PL',
              ),
              502 => 
              array (
                'key' => 'Portuguese',
                'value' => 'pt',
              ),
              503 => 
              array (
                'key' => 'Portuguese (Angola)',
                'value' => 'pt_AO',
              ),
              504 => 
              array (
                'key' => 'Portuguese (Cape Verde)',
                'value' => 'pt_CV',
              ),
              505 => 
              array (
                'key' => 'Portuguese (Guinea-Bissau)',
                'value' => 'pt_GW',
              ),
              506 => 
              array (
                'key' => 'Portuguese (Macau SAR China)',
                'value' => 'pt_MO',
              ),
              507 => 
              array (
                'key' => 'Portuguese (Mozambique)',
                'value' => 'pt_MZ',
              ),
              508 => 
              array (
                'key' => 'Portuguese (São Tomé and Príncipe)',
                'value' => 'pt_ST',
              ),
              509 => 
              array (
                'key' => 'Portuguese (Timor-Leste)',
                'value' => 'pt_TL',
              ),
              510 => 
              array (
                'key' => 'Punjabi',
                'value' => 'pa',
              ),
              511 => 
              array (
                'key' => 'Punjabi (India)',
                'value' => 'pa_IN',
              ),
              512 => 
              array (
                'key' => 'Punjabi (India)',
                'value' => 'pa_Guru_IN',
              ),
              513 => 
              array (
                'key' => 'Punjabi (Pakistan)',
                'value' => 'pa_PK',
              ),
              514 => 
              array (
                'key' => 'Punjabi (Pakistan)',
                'value' => 'pa_Arab_PK',
              ),
              515 => 
              array (
                'key' => 'Romanian',
                'value' => 'ro',
              ),
              516 => 
              array (
                'key' => 'Romanian (Romania)',
                'value' => 'ro_RO',
              ),
              517 => 
              array (
                'key' => 'Romansh',
                'value' => 'rm',
              ),
              518 => 
              array (
                'key' => 'Romansh (Switzerland)',
                'value' => 'rm_CH',
              ),
              519 => 
              array (
                'key' => 'Rombo',
                'value' => 'rof',
              ),
              520 => 
              array (
                'key' => 'Rombo (Tanzania)',
                'value' => 'rof_TZ',
              ),
              521 => 
              array (
                'key' => 'Rundi',
                'value' => 'rn',
              ),
              522 => 
              array (
                'key' => 'Rundi (Burundi)',
                'value' => 'rn_BI',
              ),
              523 => 
              array (
                'key' => 'Russian',
                'value' => 'ru',
              ),
              524 => 
              array (
                'key' => 'Russian (Belarus)',
                'value' => 'ru_BY',
              ),
              525 => 
              array (
                'key' => 'Russian (Kazakhstan)',
                'value' => 'ru_KZ',
              ),
              526 => 
              array (
                'key' => 'Russian (Kyrgyzstan)',
                'value' => 'ru_KG',
              ),
              527 => 
              array (
                'key' => 'Russian (Moldova)',
                'value' => 'ru_MD',
              ),
              528 => 
              array (
                'key' => 'Russian (Russia)',
                'value' => 'ru_RU',
              ),
              529 => 
              array (
                'key' => 'Russian (Ukraine)',
                'value' => 'ru_UA',
              ),
              530 => 
              array (
                'key' => 'Rwa',
                'value' => 'rwk',
              ),
              531 => 
              array (
                'key' => 'Rwa (Tanzania)',
                'value' => 'rwk_TZ',
              ),
              532 => 
              array (
                'key' => 'Saho',
                'value' => 'ssy',
              ),
              533 => 
              array (
                'key' => 'Saho (Eritrea)',
                'value' => 'ssy_ER',
              ),
              534 => 
              array (
                'key' => 'Sakha',
                'value' => 'sah',
              ),
              535 => 
              array (
                'key' => 'Sakha (Russia)',
                'value' => 'sah_RU',
              ),
              536 => 
              array (
                'key' => 'Samburu',
                'value' => 'saq',
              ),
              537 => 
              array (
                'key' => 'Samburu (Kenya)',
                'value' => 'saq_KE',
              ),
              538 => 
              array (
                'key' => 'Sango',
                'value' => 'sg',
              ),
              539 => 
              array (
                'key' => 'Sango (Central African Republic)',
                'value' => 'sg_CF',
              ),
              540 => 
              array (
                'key' => 'Sangu',
                'value' => 'sbp',
              ),
              541 => 
              array (
                'key' => 'Sangu (Tanzania)',
                'value' => 'sbp_TZ',
              ),
              542 => 
              array (
                'key' => 'Scottish Gaelic',
                'value' => 'gd',
              ),
              543 => 
              array (
                'key' => 'Scottish Gaelic (United Kingdom)',
                'value' => 'gd_GB',
              ),
              544 => 
              array (
                'key' => 'Sena',
                'value' => 'seh',
              ),
              545 => 
              array (
                'key' => 'Sena (Mozambique)',
                'value' => 'seh_MZ',
              ),
              546 => 
              array (
                'key' => 'Serbian',
                'value' => 'sr',
              ),
              547 => 
              array (
                'key' => 'Serbian (Bosnia and Herzegovina)',
                'value' => 'sr_Cyrl_BA',
              ),
              548 => 
              array (
                'key' => 'Serbian (Bosnia and Herzegovina)',
                'value' => 'sr_BA',
              ),
              549 => 
              array (
                'key' => 'Serbian (Bosnia and Herzegovina)',
                'value' => 'sr_Latn_BA',
              ),
              550 => 
              array (
                'key' => 'Serbian (Kosovo)',
                'value' => 'sr_Latn_XK',
              ),
              551 => 
              array (
                'key' => 'Serbian (Kosovo)',
                'value' => 'sr_XK',
              ),
              552 => 
              array (
                'key' => 'Serbian (Kosovo)',
                'value' => 'sr_Cyrl_XK',
              ),
              553 => 
              array (
                'key' => 'Serbian (Montenegro)',
                'value' => 'sr_Cyrl_ME',
              ),
              554 => 
              array (
                'key' => 'Serbian (Montenegro)',
                'value' => 'sr_Latn_ME',
              ),
              555 => 
              array (
                'key' => 'Serbian (Montenegro)',
                'value' => 'sr_ME',
              ),
              556 => 
              array (
                'key' => 'Serbian (Serbia)',
                'value' => 'sr_Cyrl_RS',
              ),
              557 => 
              array (
                'key' => 'Serbian (Serbia)',
                'value' => 'sr_Latn_RS',
              ),
              558 => 
              array (
                'key' => 'Serbian (Serbia)',
                'value' => 'sr_RS',
              ),
              559 => 
              array (
                'key' => 'Shambala',
                'value' => 'ksb',
              ),
              560 => 
              array (
                'key' => 'Shambala (Tanzania)',
                'value' => 'ksb_TZ',
              ),
              561 => 
              array (
                'key' => 'Shona',
                'value' => 'sn',
              ),
              562 => 
              array (
                'key' => 'Shona (Zimbabwe)',
                'value' => 'sn_ZW',
              ),
              563 => 
              array (
                'key' => 'Sichuan Yi',
                'value' => 'ii',
              ),
              564 => 
              array (
                'key' => 'Sichuan Yi (China)',
                'value' => 'ii_CN',
              ),
              565 => 
              array (
                'key' => 'Simplified Chinese',
                'value' => 'zh_Hans',
              ),
              566 => 
              array (
                'key' => 'Sinhala',
                'value' => 'si',
              ),
              567 => 
              array (
                'key' => 'Sinhala (Sri Lanka)',
                'value' => 'si_LK',
              ),
              568 => 
              array (
                'key' => 'Slovak',
                'value' => 'sk',
              ),
              569 => 
              array (
                'key' => 'Slovak (Slovakia)',
                'value' => 'sk_SK',
              ),
              570 => 
              array (
                'key' => 'Slovenian',
                'value' => 'sl',
              ),
              571 => 
              array (
                'key' => 'Slovenian (Slovenia)',
                'value' => 'sl_SI',
              ),
              572 => 
              array (
                'key' => 'Soga',
                'value' => 'xog',
              ),
              573 => 
              array (
                'key' => 'Soga (Uganda)',
                'value' => 'xog_UG',
              ),
              574 => 
              array (
                'key' => 'Somali',
                'value' => 'so',
              ),
              575 => 
              array (
                'key' => 'Somali (Djibouti)',
                'value' => 'so_DJ',
              ),
              576 => 
              array (
                'key' => 'Somali (Ethiopia)',
                'value' => 'so_ET',
              ),
              577 => 
              array (
                'key' => 'Somali (Kenya)',
                'value' => 'so_KE',
              ),
              578 => 
              array (
                'key' => 'Somali (Somalia)',
                'value' => 'so_SO',
              ),
              579 => 
              array (
                'key' => 'South Ndebele',
                'value' => 'nr',
              ),
              580 => 
              array (
                'key' => 'South Ndebele (South Africa)',
                'value' => 'nr_ZA',
              ),
              581 => 
              array (
                'key' => 'Southern Sotho',
                'value' => 'st',
              ),
              582 => 
              array (
                'key' => 'Southern Sotho (Lesotho)',
                'value' => 'st_LS',
              ),
              583 => 
              array (
                'key' => 'Southern Sotho (South Africa)',
                'value' => 'st_ZA',
              ),
              584 => 
              array (
                'key' => 'Spanish',
                'value' => 'es',
              ),
              585 => 
              array (
                'key' => 'Spanish (Argentina)',
                'value' => 'es_AR',
              ),
              586 => 
              array (
                'key' => 'Spanish (Bolivia)',
                'value' => 'es_BO',
              ),
              587 => 
              array (
                'key' => 'Spanish (Canary Islands)',
                'value' => 'es_IC',
              ),
              588 => 
              array (
                'key' => 'Spanish (Ceuta and Melilla)',
                'value' => 'es_EA',
              ),
              589 => 
              array (
                'key' => 'Spanish (Chile)',
                'value' => 'es_CL',
              ),
              590 => 
              array (
                'key' => 'Spanish (Colombia)',
                'value' => 'es_CO',
              ),
              591 => 
              array (
                'key' => 'Spanish (Costa Rica)',
                'value' => 'es_CR',
              ),
              592 => 
              array (
                'key' => 'Spanish (Cuba)',
                'value' => 'es_CU',
              ),
              593 => 
              array (
                'key' => 'Spanish (Dominican Republic)',
                'value' => 'es_DO',
              ),
              594 => 
              array (
                'key' => 'Spanish (Ecuador)',
                'value' => 'es_EC',
              ),
              595 => 
              array (
                'key' => 'Spanish (El Salvador)',
                'value' => 'es_SV',
              ),
              596 => 
              array (
                'key' => 'Spanish (Equatorial Guinea)',
                'value' => 'es_GQ',
              ),
              597 => 
              array (
                'key' => 'Spanish (Guatemala)',
                'value' => 'es_GT',
              ),
              598 => 
              array (
                'key' => 'Spanish (Honduras)',
                'value' => 'es_HN',
              ),
              599 => 
              array (
                'key' => 'Spanish (Nicaragua)',
                'value' => 'es_NI',
              ),
              600 => 
              array (
                'key' => 'Spanish (Panama)',
                'value' => 'es_PA',
              ),
              601 => 
              array (
                'key' => 'Spanish (Paraguay)',
                'value' => 'es_PY',
              ),
              602 => 
              array (
                'key' => 'Spanish (Peru)',
                'value' => 'es_PE',
              ),
              603 => 
              array (
                'key' => 'Spanish (Philippines)',
                'value' => 'es_PH',
              ),
              604 => 
              array (
                'key' => 'Spanish (Puerto Rico)',
                'value' => 'es_PR',
              ),
              605 => 
              array (
                'key' => 'Spanish (United States)',
                'value' => 'es_US',
              ),
              606 => 
              array (
                'key' => 'Spanish (Uruguay)',
                'value' => 'es_UY',
              ),
              607 => 
              array (
                'key' => 'Spanish (Venezuela)',
                'value' => 'es_VE',
              ),
              608 => 
              array (
                'key' => 'Standard Moroccan Tamazight',
                'value' => 'zgh',
              ),
              609 => 
              array (
                'key' => 'Standard Moroccan Tamazight (Morocco)',
                'value' => 'zgh_MA',
              ),
              610 => 
              array (
                'key' => 'Swahili',
                'value' => 'sw',
              ),
              611 => 
              array (
                'key' => 'Swahili (Kenya)',
                'value' => 'sw_KE',
              ),
              612 => 
              array (
                'key' => 'Swahili (Tanzania)',
                'value' => 'sw_TZ',
              ),
              613 => 
              array (
                'key' => 'Swahili (Uganda)',
                'value' => 'sw_UG',
              ),
              614 => 
              array (
                'key' => 'Swati',
                'value' => 'ss',
              ),
              615 => 
              array (
                'key' => 'Swati (South Africa)',
                'value' => 'ss_ZA',
              ),
              616 => 
              array (
                'key' => 'Swati (Swaziland)',
                'value' => 'ss_SZ',
              ),
              617 => 
              array (
                'key' => 'Swedish',
                'value' => 'sv',
              ),
              618 => 
              array (
                'key' => 'Swedish (Finland)',
                'value' => 'sv_FI',
              ),
              619 => 
              array (
                'key' => 'Swedish (Sweden)',
                'value' => 'sv_SE',
              ),
              620 => 
              array (
                'key' => 'Swedish (Åland Islands)',
                'value' => 'sv_AX',
              ),
              621 => 
              array (
                'key' => 'Swiss French',
                'value' => 'fr_CH',
              ),
              622 => 
              array (
                'key' => 'Swiss German',
                'value' => 'gsw',
              ),
              623 => 
              array (
                'key' => 'Swiss German (Liechtenstein)',
                'value' => 'gsw_LI',
              ),
              624 => 
              array (
                'key' => 'Swiss German (Switzerland)',
                'value' => 'gsw_CH',
              ),
              625 => 
              array (
                'key' => 'Swiss High German',
                'value' => 'de_CH',
              ),
              626 => 
              array (
                'key' => 'Tachelhit',
                'value' => 'shi',
              ),
              627 => 
              array (
                'key' => 'Tachelhit (Morocco)',
                'value' => 'shi_Latn_MA',
              ),
              628 => 
              array (
                'key' => 'Tachelhit (Morocco)',
                'value' => 'shi_Tfng_MA',
              ),
              629 => 
              array (
                'key' => 'Tachelhit (Morocco)',
                'value' => 'shi_MA',
              ),
              630 => 
              array (
                'key' => 'Taita',
                'value' => 'dav',
              ),
              631 => 
              array (
                'key' => 'Taita (Kenya)',
                'value' => 'dav_KE',
              ),
              632 => 
              array (
                'key' => 'Tajik',
                'value' => 'tg',
              ),
              633 => 
              array (
                'key' => 'Tajik (Tajikistan)',
                'value' => 'tg_Cyrl_TJ',
              ),
              634 => 
              array (
                'key' => 'Tajik (Tajikistan)',
                'value' => 'tg_TJ',
              ),
              635 => 
              array (
                'key' => 'Tamil',
                'value' => 'ta',
              ),
              636 => 
              array (
                'key' => 'Tamil (India)',
                'value' => 'ta_IN',
              ),
              637 => 
              array (
                'key' => 'Tamil (Malaysia)',
                'value' => 'ta_MY',
              ),
              638 => 
              array (
                'key' => 'Tamil (Singapore)',
                'value' => 'ta_SG',
              ),
              639 => 
              array (
                'key' => 'Tamil (Sri Lanka)',
                'value' => 'ta_LK',
              ),
              640 => 
              array (
                'key' => 'Tasawaq',
                'value' => 'twq',
              ),
              641 => 
              array (
                'key' => 'Tasawaq (Niger)',
                'value' => 'twq_NE',
              ),
              642 => 
              array (
                'key' => 'Telugu',
                'value' => 'te',
              ),
              643 => 
              array (
                'key' => 'Telugu (India)',
                'value' => 'te_IN',
              ),
              644 => 
              array (
                'key' => 'Teso',
                'value' => 'teo',
              ),
              645 => 
              array (
                'key' => 'Teso (Kenya)',
                'value' => 'teo_KE',
              ),
              646 => 
              array (
                'key' => 'Teso (Uganda)',
                'value' => 'teo_UG',
              ),
              647 => 
              array (
                'key' => 'Thai',
                'value' => 'th',
              ),
              648 => 
              array (
                'key' => 'Thai (Thailand)',
                'value' => 'th_TH',
              ),
              649 => 
              array (
                'key' => 'Tibetan',
                'value' => 'bo',
              ),
              650 => 
              array (
                'key' => 'Tibetan (China)',
                'value' => 'bo_CN',
              ),
              651 => 
              array (
                'key' => 'Tibetan (India)',
                'value' => 'bo_IN',
              ),
              652 => 
              array (
                'key' => 'Tigre',
                'value' => 'tig',
              ),
              653 => 
              array (
                'key' => 'Tigre (Eritrea)',
                'value' => 'tig_ER',
              ),
              654 => 
              array (
                'key' => 'Tigrinya',
                'value' => 'ti',
              ),
              655 => 
              array (
                'key' => 'Tigrinya (Eritrea)',
                'value' => 'ti_ER',
              ),
              656 => 
              array (
                'key' => 'Tigrinya (Ethiopia)',
                'value' => 'ti_ET',
              ),
              657 => 
              array (
                'key' => 'Tongan',
                'value' => 'to',
              ),
              658 => 
              array (
                'key' => 'Tongan (Tonga)',
                'value' => 'to_TO',
              ),
              659 => 
              array (
                'key' => 'Traditional Chinese',
                'value' => 'zh_Hant',
              ),
              660 => 
              array (
                'key' => 'Tsonga',
                'value' => 'ts',
              ),
              661 => 
              array (
                'key' => 'Tsonga (South Africa)',
                'value' => 'ts_ZA',
              ),
              662 => 
              array (
                'key' => 'Tswana',
                'value' => 'tn',
              ),
              663 => 
              array (
                'key' => 'Tswana (Botswana)',
                'value' => 'tn_BW',
              ),
              664 => 
              array (
                'key' => 'Tswana (South Africa)',
                'value' => 'tn_ZA',
              ),
              665 => 
              array (
                'key' => 'Turkish',
                'value' => 'tr',
              ),
              666 => 
              array (
                'key' => 'Turkish (Cyprus)',
                'value' => 'tr_CY',
              ),
              667 => 
              array (
                'key' => 'Turkish (Turkey)',
                'value' => 'tr_TR',
              ),
              668 => 
              array (
                'key' => 'Ukrainian',
                'value' => 'uk',
              ),
              669 => 
              array (
                'key' => 'Ukrainian (Ukraine)',
                'value' => 'uk_UA',
              ),
              670 => 
              array (
                'key' => 'Urdu',
                'value' => 'ur',
              ),
              671 => 
              array (
                'key' => 'Urdu (India)',
                'value' => 'ur_IN',
              ),
              672 => 
              array (
                'key' => 'Urdu (Pakistan)',
                'value' => 'ur_PK',
              ),
              673 => 
              array (
                'key' => 'Uyghur',
                'value' => 'ug',
              ),
              674 => 
              array (
                'key' => 'Uzbek',
                'value' => 'uz',
              ),
              675 => 
              array (
                'key' => 'Uzbek (Afghanistan)',
                'value' => 'uz_Arab_AF',
              ),
              676 => 
              array (
                'key' => 'Uzbek (Afghanistan)',
                'value' => 'uz_AF',
              ),
              677 => 
              array (
                'key' => 'Uzbek (Uzbekistan)',
                'value' => 'uz_UZ',
              ),
              678 => 
              array (
                'key' => 'Uzbek (Uzbekistan)',
                'value' => 'uz_Cyrl_UZ',
              ),
              679 => 
              array (
                'key' => 'Uzbek (Uzbekistan)',
                'value' => 'uz_Latn_UZ',
              ),
              680 => 
              array (
                'key' => 'Vai',
                'value' => 'vai',
              ),
              681 => 
              array (
                'key' => 'Vai (Liberia)',
                'value' => 'vai_Latn_LR',
              ),
              682 => 
              array (
                'key' => 'Vai (Liberia)',
                'value' => 'vai_Vaii_LR',
              ),
              683 => 
              array (
                'key' => 'Vai (Liberia)',
                'value' => 'vai_LR',
              ),
              684 => 
              array (
                'key' => 'Venda',
                'value' => 've',
              ),
              685 => 
              array (
                'key' => 'Venda (South Africa)',
                'value' => 've_ZA',
              ),
              686 => 
              array (
                'key' => 'Vietnamese',
                'value' => 'vi',
              ),
              687 => 
              array (
                'key' => 'Vietnamese (Vietnam)',
                'value' => 'vi_VN',
              ),
              688 => 
              array (
                'key' => 'Volapük',
                'value' => 'vo',
              ),
              689 => 
              array (
                'key' => 'Volapük (World)',
                'value' => 'vo_001',
              ),
              690 => 
              array (
                'key' => 'Vunjo',
                'value' => 'vun',
              ),
              691 => 
              array (
                'key' => 'Vunjo (Tanzania)',
                'value' => 'vun_TZ',
              ),
              692 => 
              array (
                'key' => 'Walser',
                'value' => 'wae',
              ),
              693 => 
              array (
                'key' => 'Walser (Switzerland)',
                'value' => 'wae_CH',
              ),
              694 => 
              array (
                'key' => 'Welsh',
                'value' => 'cy',
              ),
              695 => 
              array (
                'key' => 'Welsh (United Kingdom)',
                'value' => 'cy_GB',
              ),
              696 => 
              array (
                'key' => 'Western Frisian',
                'value' => 'fy',
              ),
              697 => 
              array (
                'key' => 'Western Frisian (Netherlands)',
                'value' => 'fy_NL',
              ),
              698 => 
              array (
                'key' => 'Wolaytta',
                'value' => 'wal',
              ),
              699 => 
              array (
                'key' => 'Wolaytta (Ethiopia)',
                'value' => 'wal_ET',
              ),
              700 => 
              array (
                'key' => 'Xhosa',
                'value' => 'xh',
              ),
              701 => 
              array (
                'key' => 'Xhosa (South Africa)',
                'value' => 'xh_ZA',
              ),
              702 => 
              array (
                'key' => 'Yangben',
                'value' => 'yav',
              ),
              703 => 
              array (
                'key' => 'Yangben (Cameroon)',
                'value' => 'yav_CM',
              ),
              704 => 
              array (
                'key' => 'Yoruba',
                'value' => 'yo',
              ),
              705 => 
              array (
                'key' => 'Yoruba (Benin)',
                'value' => 'yo_BJ',
              ),
              706 => 
              array (
                'key' => 'Yoruba (Nigeria)',
                'value' => 'yo_NG',
              ),
              707 => 
              array (
                'key' => 'Zarma',
                'value' => 'dje',
              ),
              708 => 
              array (
                'key' => 'Zarma (Niger)',
                'value' => 'dje_NE',
              ),
              709 => 
              array (
                'key' => 'Zulu',
                'value' => 'zu',
              ),
              710 => 
              array (
                'key' => 'Zulu (South Africa)',
                'value' => 'zu_ZA',
              ),
              711 => 
              array (
                'key' => 'az_Cyrl',
                'value' => 'az_Cyrl',
              ),
              712 => 
              array (
                'key' => 'az_Latn',
                'value' => 'az_Latn',
              ),
              713 => 
              array (
                'key' => 'bs_Cyrl',
                'value' => 'bs_Cyrl',
              ),
              714 => 
              array (
                'key' => 'bs_Latn',
                'value' => 'bs_Latn',
              ),
              715 => 
              array (
                'key' => 'en_Dsrt',
                'value' => 'en_Dsrt',
              ),
              716 => 
              array (
                'key' => 'ha_Latn',
                'value' => 'ha_Latn',
              ),
              717 => 
              array (
                'key' => 'kk_Cyrl',
                'value' => 'kk_Cyrl',
              ),
              718 => 
              array (
                'key' => 'ks_Arab',
                'value' => 'ks_Arab',
              ),
              719 => 
              array (
                'key' => 'ky_Cyrl',
                'value' => 'ky_Cyrl',
              ),
              720 => 
              array (
                'key' => 'ky_Cyrl_KG',
                'value' => 'ky_Cyrl_KG',
              ),
              721 => 
              array (
                'key' => 'mn_Cyrl',
                'value' => 'mn_Cyrl',
              ),
              722 => 
              array (
                'key' => 'ms_Latn',
                'value' => 'ms_Latn',
              ),
              723 => 
              array (
                'key' => 'ordinals',
                'value' => 'ordinals',
              ),
              724 => 
              array (
                'key' => 'pa_Arab',
                'value' => 'pa_Arab',
              ),
              725 => 
              array (
                'key' => 'pa_Guru',
                'value' => 'pa_Guru',
              ),
              726 => 
              array (
                'key' => 'plurals',
                'value' => 'plurals',
              ),
              727 => 
              array (
                'key' => 'shi_Latn',
                'value' => 'shi_Latn',
              ),
              728 => 
              array (
                'key' => 'shi_Tfng',
                'value' => 'shi_Tfng',
              ),
              729 => 
              array (
                'key' => 'sr_Cyrl',
                'value' => 'sr_Cyrl',
              ),
              730 => 
              array (
                'key' => 'sr_Latn',
                'value' => 'sr_Latn',
              ),
              731 => 
              array (
                'key' => 'tg_Cyrl',
                'value' => 'tg_Cyrl',
              ),
              732 => 
              array (
                'key' => 'tzm_Latn',
                'value' => 'tzm_Latn',
              ),
              733 => 
              array (
                'key' => 'ug_Arab',
                'value' => 'ug_Arab',
              ),
              734 => 
              array (
                'key' => 'ug_Arab_CN',
                'value' => 'ug_Arab_CN',
              ),
              735 => 
              array (
                'key' => 'uz_Arab',
                'value' => 'uz_Arab',
              ),
              736 => 
              array (
                'key' => 'uz_Cyrl',
                'value' => 'uz_Cyrl',
              ),
              737 => 
              array (
                'key' => 'uz_Latn',
                'value' => 'uz_Latn',
              ),
              738 => 
              array (
                'key' => 'vai_Latn',
                'value' => 'vai_Latn',
              ),
              739 => 
              array (
                'key' => 'vai_Vaii',
                'value' => 'vai_Vaii',
              ),
            ),
             'width' => '',
             'defaultValue' => NULL,
             'queryColumnType' => 'varchar(255)',
             'columnType' => 'varchar(255)',
             'phpdocType' => 'string',
             'name' => 'LanguageName',
             'title' => 'Language Name',
             'tooltip' => 'By Default Language',
             'mandatory' => false,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          15 => 
          Pimcore\Model\Object\ClassDefinition\Data\Textarea::__set_state(array(
             'fieldtype' => 'textarea',
             'width' => 500,
             'height' => 300,
             'queryColumnType' => 'longtext',
             'columnType' => 'longtext',
             'phpdocType' => 'string',
             'name' => 'VaraintJSON',
             'title' => 'Product Variant JSON',
             'tooltip' => 'JSON for the variant',
             'mandatory' => false,
             'noteditable' => false,
             'index' => false,
             'locked' => false,
             'style' => '',
             'permissions' => NULL,
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
        ),
         'locked' => false,
      )),
    ),
     'locked' => false,
  )),
   'icon' => NULL,
   'previewUrl' => NULL,
   'group' => NULL,
   'propertyVisibility' => 
  array (
    'grid' => 
    array (
      'id' => true,
      'path' => true,
      'published' => true,
      'modificationDate' => true,
      'creationDate' => true,
    ),
    'search' => 
    array (
      'id' => true,
      'path' => true,
      'published' => true,
      'modificationDate' => true,
      'creationDate' => true,
    ),
  ),
   'dao' => NULL,
));
