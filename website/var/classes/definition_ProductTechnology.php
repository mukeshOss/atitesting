<?php 

/** 
* Generated at: 2017-06-20T16:55:52+02:00
* Inheritance: no
* Variants: no
* Changed by: admin (2)
* IP: 127.0.0.1


Fields Summary: 
- localizedfields [localizedfields]
-- icon [image]
-- name [input]
-- seoname [input]
-- description [wysiwyg]
-- link [link]
-- images [multihref]
-- documents [multihref]
-- videos [multihref]
-- downloads [multihref]
*/ 


return Pimcore\Model\Object\ClassDefinition::__set_state(array(
   'name' => 'ProductTechnology',
   'description' => NULL,
   'creationDate' => NULL,
   'modificationDate' => 1497970552,
   'userOwner' => NULL,
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
      Pimcore\Model\Object\ClassDefinition\Data\Localizedfields::__set_state(array(
         'fieldtype' => 'localizedfields',
         'phpdocType' => '\\Pimcore\\Model\\Object\\Localizedfield',
         'childs' => 
        array (
          0 => 
          Pimcore\Model\Object\ClassDefinition\Layout\Region::__set_state(array(
             'fieldtype' => 'region',
             'name' => 'Layout',
             'type' => '',
             'region' => 'center',
             'title' => '',
             'width' => NULL,
             'height' => 680,
             'collapsible' => false,
             'collapsed' => false,
             'bodyStyle' => '',
             'datatype' => 'layout',
             'permissions' => '',
             'childs' => 
            array (
              0 => 
              Pimcore\Model\Object\ClassDefinition\Layout\Panel::__set_state(array(
                 'fieldtype' => 'panel',
                 'labelWidth' => 100,
                 'layout' => '',
                 'name' => 'Layout',
                 'type' => '',
                 'region' => 'center',
                 'title' => 'Base',
                 'width' => '',
                 'height' => '',
                 'collapsible' => false,
                 'collapsed' => NULL,
                 'bodyStyle' => NULL,
                 'datatype' => 'layout',
                 'permissions' => '',
                 'childs' => 
                array (
                  0 => 
                  Pimcore\Model\Object\ClassDefinition\Data\Image::__set_state(array(
                     'fieldtype' => 'image',
                     'width' => 250,
                     'height' => 150,
                     'uploadPath' => '',
                     'queryColumnType' => 'int(11)',
                     'columnType' => 'int(11)',
                     'phpdocType' => '\\Pimcore\\Model\\Asset\\Image',
                     'name' => 'icon',
                     'title' => 'Icon',
                     'tooltip' => '',
                     'mandatory' => false,
                     'noteditable' => false,
                     'index' => false,
                     'locked' => false,
                     'style' => 'float:right',
                     'permissions' => '',
                     'datatype' => 'data',
                     'relationType' => false,
                     'invisible' => false,
                     'visibleGridView' => false,
                     'visibleSearch' => false,
                  )),
                  1 => 
                  Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
                     'fieldtype' => 'input',
                     'width' => 250,
                     'queryColumnType' => 'varchar',
                     'columnType' => 'varchar',
                     'columnLength' => 255,
                     'phpdocType' => 'string',
                     'regex' => '',
                     'name' => 'name',
                     'title' => 'Name',
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
                     'visibleGridView' => true,
                     'visibleSearch' => true,
                  )),
                  2 => 
                  Pimcore\Model\Object\ClassDefinition\Data\Input::__set_state(array(
                     'fieldtype' => 'input',
                     'width' => 250,
                     'queryColumnType' => 'varchar',
                     'columnType' => 'varchar',
                     'columnLength' => 255,
                     'phpdocType' => 'string',
                     'regex' => '',
                     'name' => 'seoname',
                     'title' => 'SEO Name',
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
                  3 => 
                  Pimcore\Model\Object\ClassDefinition\Data\Wysiwyg::__set_state(array(
                     'fieldtype' => 'wysiwyg',
                     'width' => '',
                     'height' => '',
                     'queryColumnType' => 'longtext',
                     'columnType' => 'longtext',
                     'phpdocType' => 'string',
                     'toolbarConfig' => '',
                     'name' => 'description',
                     'title' => 'Description',
                     'tooltip' => '',
                     'mandatory' => false,
                     'noteditable' => false,
                     'index' => false,
                     'locked' => false,
                     'style' => 'width: 100%',
                     'permissions' => '',
                     'datatype' => 'data',
                     'relationType' => false,
                     'invisible' => false,
                     'visibleGridView' => false,
                     'visibleSearch' => false,
                  )),
                  4 => 
                  Pimcore\Model\Object\ClassDefinition\Data\Link::__set_state(array(
                     'fieldtype' => 'link',
                     'queryColumnType' => 'text',
                     'columnType' => 'text',
                     'phpdocType' => '\\Pimcore\\Model\\Object\\Data\\Link',
                     'name' => 'link',
                     'title' => 'Further Details Document (read more)',
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
              1 => 
              Pimcore\Model\Object\ClassDefinition\Layout\Panel::__set_state(array(
                 'fieldtype' => 'panel',
                 'labelWidth' => 100,
                 'layout' => '',
                 'name' => 'Layout',
                 'type' => '',
                 'region' => 'east',
                 'title' => 'Media',
                 'width' => 500,
                 'height' => NULL,
                 'collapsible' => false,
                 'collapsed' => false,
                 'bodyStyle' => '',
                 'datatype' => 'layout',
                 'permissions' => '',
                 'childs' => 
                array (
                  0 => 
                  Pimcore\Model\Object\ClassDefinition\Data\Multihref::__set_state(array(
                     'fieldtype' => 'multihref',
                     'width' => '',
                     'height' => 200,
                     'maxItems' => '',
                     'assetUploadPath' => '',
                     'queryColumnType' => 'text',
                     'phpdocType' => 'array',
                     'relationType' => true,
                     'objectsAllowed' => false,
                     'assetsAllowed' => true,
                     'assetTypes' => 
                    array (
                      0 => 
                      array (
                        'assetTypes' => 'image',
                      ),
                    ),
                     'documentsAllowed' => false,
                     'documentTypes' => 
                    array (
                    ),
                     'lazyLoading' => false,
                     'classes' => 
                    array (
                    ),
                     'pathFormatterClass' => NULL,
                     'name' => 'images',
                     'title' => 'Images',
                     'tooltip' => '',
                     'mandatory' => false,
                     'noteditable' => false,
                     'index' => false,
                     'locked' => false,
                     'style' => '',
                     'permissions' => '',
                     'datatype' => 'data',
                     'columnType' => '',
                     'invisible' => false,
                     'visibleGridView' => false,
                     'visibleSearch' => false,
                  )),
                  1 => 
                  Pimcore\Model\Object\ClassDefinition\Data\Multihref::__set_state(array(
                     'fieldtype' => 'multihref',
                     'width' => '',
                     'height' => 200,
                     'maxItems' => '',
                     'assetUploadPath' => '',
                     'queryColumnType' => 'text',
                     'phpdocType' => 'array',
                     'relationType' => true,
                     'objectsAllowed' => false,
                     'assetsAllowed' => false,
                     'assetTypes' => 
                    array (
                    ),
                     'documentsAllowed' => true,
                     'documentTypes' => 
                    array (
                    ),
                     'lazyLoading' => false,
                     'classes' => 
                    array (
                    ),
                     'pathFormatterClass' => NULL,
                     'name' => 'documents',
                     'title' => 'Documents',
                     'tooltip' => 'Link to Documents',
                     'mandatory' => false,
                     'noteditable' => false,
                     'index' => false,
                     'locked' => false,
                     'style' => '',
                     'permissions' => '',
                     'datatype' => 'data',
                     'columnType' => '',
                     'invisible' => false,
                     'visibleGridView' => false,
                     'visibleSearch' => false,
                  )),
                  2 => 
                  Pimcore\Model\Object\ClassDefinition\Data\Multihref::__set_state(array(
                     'fieldtype' => 'multihref',
                     'width' => '',
                     'height' => '',
                     'maxItems' => '',
                     'assetUploadPath' => '',
                     'queryColumnType' => 'text',
                     'phpdocType' => 'array',
                     'relationType' => true,
                     'objectsAllowed' => false,
                     'assetsAllowed' => true,
                     'assetTypes' => 
                    array (
                    ),
                     'documentsAllowed' => false,
                     'documentTypes' => 
                    array (
                    ),
                     'lazyLoading' => false,
                     'classes' => 
                    array (
                    ),
                     'pathFormatterClass' => NULL,
                     'name' => 'videos',
                     'title' => 'Videos',
                     'tooltip' => '',
                     'mandatory' => false,
                     'noteditable' => false,
                     'index' => false,
                     'locked' => false,
                     'style' => '',
                     'permissions' => '',
                     'datatype' => 'data',
                     'columnType' => '',
                     'invisible' => false,
                     'visibleGridView' => false,
                     'visibleSearch' => false,
                  )),
                  3 => 
                  Pimcore\Model\Object\ClassDefinition\Data\Multihref::__set_state(array(
                     'fieldtype' => 'multihref',
                     'width' => '',
                     'height' => '',
                     'maxItems' => '',
                     'assetUploadPath' => NULL,
                     'queryColumnType' => 'text',
                     'phpdocType' => 'array',
                     'relationType' => true,
                     'objectsAllowed' => '',
                     'assetsAllowed' => '1',
                     'assetTypes' => 
                    array (
                    ),
                     'documentsAllowed' => '',
                     'documentTypes' => 
                    array (
                    ),
                     'lazyLoading' => '',
                     'classes' => 
                    array (
                    ),
                     'pathFormatterClass' => NULL,
                     'name' => 'downloads',
                     'title' => 'Downloads',
                     'tooltip' => '',
                     'mandatory' => false,
                     'noteditable' => false,
                     'index' => '',
                     'locked' => false,
                     'style' => '',
                     'permissions' => '',
                     'datatype' => 'data',
                     'columnType' => '',
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
        ),
         'name' => 'localizedfields',
         'region' => '',
         'layout' => '',
         'title' => '',
         'width' => '',
         'height' => '',
         'maxTabs' => NULL,
         'labelWidth' => NULL,
         'hideLabelsWhenTabsReached' => NULL,
         'referencedFields' => 
        array (
        ),
         'tooltip' => '',
         'mandatory' => false,
         'noteditable' => false,
         'index' => '',
         'locked' => false,
         'style' => '',
         'permissions' => '',
         'datatype' => 'data',
         'columnType' => '',
         'queryColumnType' => '',
         'relationType' => false,
         'invisible' => false,
         'visibleGridView' => true,
         'visibleSearch' => true,
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
