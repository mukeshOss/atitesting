<?php 

/** 
* Generated at: 2017-06-20T16:54:43+02:00
* IP: 127.0.0.1


Fields Summary: 
 - field [indexFieldSelectionCombo]
 - weight [numeric]
*/ 


return Pimcore\Model\Object\Fieldcollection\Definition::__set_state(array(
   'key' => 'SimilarityField',
   'parentClass' => '',
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
          Pimcore\Model\Object\ClassDefinition\Data\IndexFieldSelectionCombo::__set_state(array(
             'fieldtype' => 'indexFieldSelectionCombo',
             'specificPriceField' => false,
             'showAllFields' => true,
             'considerTenants' => true,
             'options' => 
            array (
              0 => 
              array (
                'key' => 'categoryIds',
                'value' => 'categoryIds',
              ),
              1 => 
              array (
                'key' => 'name',
                'value' => 'name',
              ),
              2 => 
              array (
                'key' => 'seoname',
                'value' => 'seoname',
              ),
              3 => 
              array (
                'key' => 'description',
                'value' => 'description',
              ),
              4 => 
              array (
                'key' => 'ean',
                'value' => 'ean',
              ),
              5 => 
              array (
                'key' => 'artno',
                'value' => 'artno',
              ),
              6 => 
              array (
                'key' => 'gender',
                'value' => 'gender',
              ),
              7 => 
              array (
                'key' => 'color',
                'value' => 'color',
              ),
              8 => 
              array (
                'key' => 'size',
                'value' => 'size',
              ),
              9 => 
              array (
                'key' => 'price',
                'value' => 'price',
              ),
              10 => 
              array (
                'key' => 'foottype',
                'value' => 'foottype',
              ),
              11 => 
              array (
                'key' => 'gaittype',
                'value' => 'gaittype',
              ),
              12 => 
              array (
                'key' => 'fittings',
                'value' => 'fittings',
              ),
              13 => 
              array (
                'key' => 'zips',
                'value' => 'zips',
              ),
              14 => 
              array (
                'key' => 'approvals',
                'value' => 'approvals',
              ),
              15 => 
              array (
                'key' => 'rating',
                'value' => 'rating',
              ),
              16 => 
              array (
                'key' => 'features',
                'value' => 'features',
              ),
              17 => 
              array (
                'key' => 'attributes',
                'value' => 'attributes',
              ),
              18 => 
              array (
                'key' => 'technologies',
                'value' => 'technologies',
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
             'index' => false,
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
          Pimcore\Model\Object\ClassDefinition\Data\Numeric::__set_state(array(
             'fieldtype' => 'numeric',
             'width' => 300,
             'defaultValue' => 1,
             'queryColumnType' => 'double',
             'columnType' => 'double',
             'phpdocType' => 'float',
             'integer' => false,
             'unsigned' => false,
             'minValue' => NULL,
             'maxValue' => NULL,
             'decimalPrecision' => NULL,
             'name' => 'weight',
             'title' => 'Weight',
             'tooltip' => '',
             'mandatory' => false,
             'noteditable' => false,
             'index' => false,
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
