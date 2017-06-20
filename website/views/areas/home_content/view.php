 <?php 

 $i = 1 ;
  while($this->block("table_block")->loop()) { ?>
<td ><div >
                    <div class="headingRedHome"><?= $this->input("heading".$i) ?></div>
                    <p><?= $this->wysiwyg("description".$i)?></p>
                    <p><?= $this->link("link".$i)?></p>
                  </div></td>

  <?php   $i++; } ?>         

