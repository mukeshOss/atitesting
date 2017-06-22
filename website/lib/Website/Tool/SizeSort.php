<?php
namespace Website\Tool;

use Pimcore\Model\Object\Product;

class SizeSort
{
    static $order = array(
        's0' => "XXXS",
        's1' => "XXS",
        's2' => "XS",
        's3' => 'S',
        's4' => 'M',
        's5' => 'L',
        's6' => 'XL',
        's7' => 'XXL'
    );

    /**
     * @static
     * @param Product\Listing $unorderedSizes
     * @return array;
     */
    public static function sort($unorderedSizes) {
        $unorderedArray = array();
        $orphanSizes = array();

        foreach ($unorderedSizes as $unorderedSize) {
            $size = trim($unorderedSize->getSize());

            if(is_numeric($size)) {
                $unorderedArray[$size] = $unorderedSize;
            } else {
                if ($size = array_search(strtoupper($size), self::$order)) {
                    $unorderedArray[$size] = $unorderedSize;
                } else {
                    $orphanSizes[] = $unorderedSize;
                }
            }
        }

        ksort($unorderedArray);

        $orderedSizes = $unorderedArray;
        $orderedSizes = array_merge($orderedSizes, $orphanSizes);

        return $orderedSizes;
    }
}
