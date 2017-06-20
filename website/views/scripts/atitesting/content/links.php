<div style="background-color: #ffffff; height: 7px;"></div>
            <div class="sidebar-actionLinks"> <a href="" style="margin-bottom: 0px;"><?= $this->link("first_part_link") ?></a></div>
            <div style="background-color: #ffffff; height: 7px;"></div>
            <div class="sidebar-actionLinks">
              <?php while($this->block("link_block")->loop()) { ?>
                <?= $this->link("second_part_link"); ?>
            <?php } ?>
              <!-- a href="ati_next_gen\customecom\SessionTypeSelection.htm?stf=1">Register for TEAS</a>&nbsp;
              <a href="ati_next_gen\customecom\SessionTypeSelection-1.htm?stf=7" 
              title="PSI is our national testing center for the TEAS">Register for TEAS with PSI</a>
               <a shape="rect" href="ati_next_gen\customecom\SessionCityStateSelection.htm?stf=2&amp;
               stype=3&amp;prev=1">
                Register for NCLEX Live Review</a> <a shape="rect" href="">Shop Online</a> </div> -->
           
          </div>