<?php 

/** 
* Generated at: 2017-06-20T16:54:47+02:00
* IP: 127.0.0.1


Fields Summary: 
 - specs [multiselect]
*/ 


return Pimcore\Model\Object\Objectbrick\Definition::__set_state(array(
   'classDefinitions' => 
  array (
  ),
   'key' => 'featuresBenefitsMats',
   'parentClass' => NULL,
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
          Pimcore\Model\Object\ClassDefinition\Data\Multiselect::__set_state(array(
             'fieldtype' => 'multiselect',
             'options' => 
            array (
              0 => 
              array (
                'key' => '<img src="/website/static/backend/img/bricks/featuresBenefits/icon_80.png"/> Lightweight',
                'value' => 'fB_MA.lightweight',
              ),
              1 => 
              array (
                'key' => '<img src="/website/static/backend/img/bricks/featuresBenefits/icon_81.png"/> Mummy shape',
                'value' => 'fB_MA.mummy-shape',
              ),
              2 => 
              array (
                'key' => '<img src="/website/static/backend/img/bricks/featuresBenefits/icon_82.png"/> Big size',
                'value' => 'fB_MA.big-size',
              ),
              3 => 
              array (
                'key' => '<img src="/website/static/backend/img/bricks/featuresBenefits/icon_83.png"/> Comfort',
                'value' => 'fB_MA.comfort',
              ),
              4 => 
              array (
                'key' => '<img src="/website/static/backend/img/bricks/featuresBenefits/icon_84.png"/> Two elastic straps',
                'value' => 'fB_MA.two-elastic-straps',
              ),
              5 => 
              array (
                'key' => '<img src="/website/static/backend/img/bricks/featuresBenefits/icon_85.png"/> Integrated pump',
                'value' => 'fB_MA.integrated-pump',
              ),
              6 => 
              array (
                'key' => '<img src="/website/static/backend/img/bricks/featuresBenefits/icon_86.png"/> Anti slipping',
                'value' => 'fB_MA.anti-slipping',
              ),
              7 => 
              array (
                'key' => '<img src="/website/static/backend/img/bricks/featuresBenefits/icon_87.png"/> Reversible pillow',
                'value' => 'fB_MA.reversible-pillow',
              ),
              8 => 
              array (
                'key' => '<img src="/website/static/backend/img/bricks/featuresBenefits/icon_88.png"/> One straps',
                'value' => 'fB_MA.one-straps',
              ),
            ),
             'width' => 800,
             'height' => 400,
             'maxItems' => '',
             'queryColumnType' => 'text',
             'columnType' => 'text',
             'phpdocType' => 'array',
             'name' => 'specs',
             'title' => '',
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
