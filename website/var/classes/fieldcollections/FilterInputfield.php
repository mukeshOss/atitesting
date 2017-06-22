<?php 

/** 
* Generated at: 2017-06-20T16:54:44+02:00
* IP: 127.0.0.1


Fields Summary: 
 - label [input]
 - field [indexFieldSelectionCombo]
 - preSelect [input]
 - scriptPath [input]
*/ 


return Pimcore\Model\Object\Fieldcollection\Definition::__set_state(array(
   'key' => 'FilterInputfield',
   'parentClass' => '\\OnlineShop\\Framework\\Model\\AbstractFilterDefinitionType',
   'layoutDefinitions' => 
  Pimcore\Model\Object\ClassDefinition\Layout\Panel::__set_state(array(
     'fieldtype' => 'panel',
     'labelWidth' => 100,
     'layout' => NULL,
     'name' => NULL,
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
         'labelWidth' => 100,
         'layout' => '',
         'name' => 'Layout',
         'type' => '',
         'region' => '',
         'title' => '',
         'width' => '',
         'height' => '',
         'collapsible' => false,
         'collapsed' => '',
         'bodyStyle' => '',
         'datatype' => 'layout',
         'permissions' => '',
         'childs' => 
        array (
          0 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => '300',
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => '255',
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'label',
             'title' => 'Label',
             'tooltip' => '',
             'mandatory' => false,
             'noteditable' => false,
             'index' => '',
             'locked' => false,
             'style' => '',
             'permissions' => '',
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          1 => 
          Pimcore\Model\Object\ClassDefinition\Data\IndexFieldSelectionCombo::__set_state(array(
             'fieldtype' => 'indexFieldSelectionCombo',
             'specificPriceField' => '',
             'showAllFields' => '',
             'considerTenants' => false,
             'options' => 
            array (
              0 => 
              array (
                'key' => 'name',
                'value' => 'name',
              ),
              1 => 
              array (
                'key' => 'shortDescription',
                'value' => 'shortDescription',
              ),
              2 => 
              array (
                'key' => 'supplierRemoteId',
                'value' => 'supplierRemoteId',
              ),
              3 => 
              array (
                'key' => 'mainImage',
                'value' => 'mainImage',
              ),
              4 => 
              array (
                'key' => 'weight',
                'value' => 'weight',
              ),
              5 => 
              array (
                'key' => 'specialFeatures',
                'value' => 'specialFeatures',
              ),
              6 => 
              array (
                'key' => 'bundledSoftware',
                'value' => 'bundledSoftware',
              ),
              7 => 
              array (
                'key' => 'warranty',
                'value' => 'warranty',
              ),
              8 => 
              array (
                'key' => 'totalStorageCapacity',
                'value' => 'totalStorageCapacity',
              ),
              9 => 
              array (
                'key' => 'processorClockSpeed',
                'value' => 'processorClockSpeed',
              ),
              10 => 
              array (
                'key' => 'compatibleOperatingSystems',
                'value' => 'compatibleOperatingSystems',
              ),
              11 => 
              array (
                'key' => 'hardDiskRotationalSpeed',
                'value' => 'hardDiskRotationalSpeed',
              ),
              12 => 
              array (
                'key' => 'hardDiskDriveCapacity',
                'value' => 'hardDiskDriveCapacity',
              ),
              13 => 
              array (
                'key' => 'accessories',
                'value' => 'accessories',
              ),
            ),
             'width' => 300,
             'defaultValue' => NULL,
             'queryColumnType' => 'varchar(255)',
             'columnType' => 'varchar(255)',
             'phpdocType' => 'string',
             'name' => 'field',
             'title' => 'Field',
             'tooltip' => '',
             'mandatory' => false,
             'noteditable' => false,
             'index' => '',
             'locked' => false,
             'style' => '',
             'permissions' => '',
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          2 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => '300',
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => '255',
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'preSelect',
             'title' => 'PreSelect',
             'tooltip' => '',
             'mandatory' => false,
             'noteditable' => false,
             'index' => '',
             'locked' => false,
             'style' => '',
             'permissions' => '',
             'datatype' => 'data',
             'relationType' => false,
             'invisible' => false,
             'visibleGridView' => false,
             'visibleSearch' => false,
          )),
          3 => 
          Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
             'fieldtype' => 'input',
             'width' => '300',
             'queryColumnType' => 'varchar',
             'columnType' => 'varchar',
             'columnLength' => '255',
             'phpdocType' => 'string',
             'regex' => '',
             'name' => 'scriptPath',
             'title' => 'Script Path',
             'tooltip' => '',
             'mandatory' => false,
             'noteditable' => false,
             'index' => '',
             'locked' => false,
             'style' => '',
             'permissions' => '',
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
   'dao' => NULL,
));
