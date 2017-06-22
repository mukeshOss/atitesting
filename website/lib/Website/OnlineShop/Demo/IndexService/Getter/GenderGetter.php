<?php
namespace Website\OnlineShop\Demo\IndexService\Getter;

use OnlineShop\Framework\IndexService\Getter\IGetter;

class GenderGetter implements IGetter {

    public static function get( $object, $config = null) {


        if ( $object->isFemaleProduct() ) {
            return array('w');
        }

        $genders = $object->getGender();
        if ( $genders ){
            $men = in_array('m', $genders);
            $women =  in_array('w', $genders);
            if ( $men && $women){
                $genders[ array_search('w', $genders)] = 'm';

            }
            $genders = array_unique($genders);
            return $genders;
        }

    }

}