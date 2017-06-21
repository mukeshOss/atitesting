<div class="minicol3 homeTileClass"> 
<?php if ($this->editmode) { ?>
<?= $this->image("image_for_link"); ?>
<?= $this->link("jb_link");?>
<?php }else{
    $data = $this->link("jb_link")->getData();
    $txt = $data['text'];
    ?>
    <?php if(!empty($data['path'])) {
        $attributes = $data['attributes'];
        ?>
    <a  target="<?= $data['target'] ?>" href="<?= $data['path'] ?>" >
    <?php } ?>                
        <img src="<?php echo $this->image("image_for_link")->getSrc(); ?>" border="0" style="float: left; margin-bottom: 7px;" >
    <?php if(is_array($data)) { ?>       
        </a>
    <?php } ?> 
<?php } ?>
<a href="http://www.jblnavigate.com/" target="_blank" class="learmore_hm_btn"></a>
<div class="clear"></div>

<span style="font-size: 11px;">
        <?php echo $this->wysiwyg("jb_text") ?>
</span> 
</div>








