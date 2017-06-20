<?php if($this->editmode){  ?>
    
    <?php echo $this->input("programTitle"); ?>
 <?php echo $this->wysiwyg("description"); ?>
<?php } else { ?>
    <div class="h1bg"> 
    <h2 style="background: none repeat scroll 0% 0% #ffffff; padding-right: 15px;">
        <a href="Solutions\pre-program.htm"><?php echo $this->input("programTitle")->text ?></a>
    </h2> 
</div>
<div class="sixty"> 
    <?php echo $this->wysiwyg("description")->text; ?>
</div>
<?php } ?>



<div class="clear"></div>
