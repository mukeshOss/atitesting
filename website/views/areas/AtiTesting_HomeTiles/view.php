

<?php while($this->block("tiles_block")->loop()) {  ?>
<td>

<div>
     <div class="headingRedHome">
     	<?= $this->input("heading") ?>
     </div>
         <?= $this->wysiwyg("description")?>
         <?= $this->link("link")?>
</div>
</td>

<?php  } ?>




