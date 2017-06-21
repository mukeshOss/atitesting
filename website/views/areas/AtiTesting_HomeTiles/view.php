

<?php while($this->block("tiles_block")->loop()) {  ?>
<?php if(!$this->editmode):?>
    <td>
<?php endif;?>

<div>
     <div class="headingRedHome">
     	<?= $this->input("heading") ?>
     </div>
         <?= $this->wysiwyg("description")?>
         <?= $this->link("link")?>
</div>
        <?php if(!$this->editmode):?>
</td>
<?php endif;?>
<?php  } ?>




