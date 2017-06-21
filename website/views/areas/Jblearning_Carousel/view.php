 <?php if($this->editmode) {?>
 <?php echo "Select number of carousel images" . $this->select("mySelectval", array("store" => array(array("1", "1"), array("2", "2"), array("3", "3"), array("4", "4"), array("5", "5"), array("6", "6"), array("7", "7"), array("8", "8"), array("9", "9"), array("10", "10")), "reload" => true)); ?>

<?php $selectedval = $this->select("mySelectval")->getValue(); ?>

<?php for ($i = 1; $i <= $selectedval; $i++) { ?>

<?= $this->image("carousel_image".$i) ?>
<?= $this->link("carousel_link".$i) ?>
 <?php } }?>



 <div id="slider" class="nivoSlider"> 

<?php 
$selectedval = $this->select("mySelectval")->getValue();
for ($i = 1 ; $i <= $selectedval; $i++) { ?>
 	 <a href= "<?php echo  $this->link("carousel_link".$i)->getHref();?>" target="_blank">
    <img src= "<?php echo  $this->image("carousel_image".$i)->getSrc();?>"  title="&nbsp;" />
     </a>  




<?php } ?>
</div>  