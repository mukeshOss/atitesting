 <div id="footer">
    <div id="footer-content">
        <div id="footer-copyright">
            <div id="footer-copyright-text">
                Copyright &copy; 2016 Assessment Technologies Institute, L.L.C. All rights reserved.
            </div><div id="footer-copyright-links">
                           <?php 
  while($this->block("footer_block_common")->loop()) { ?>

                    <?= $this->link("footer_links_common")?>

  <?php } ?> 
            </div>
        </div>
        <div id="footer-links"> <?php 
  while($this->block("footer_left_block_common")->loop()) { ?>
          <?= $this->link("footer_left_links_common")?>

  <?php } ?>  
         </div>
        <div class="clear"> </div>
        <div id="footer-followus"> <img alt="Follow Us On" class="followuson" id="ctl00_footerContent_followuson" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/followuson.gif">
        <a title="ATI Facebook" target="_blank" class="facebook" id="ctl00_footerContent_facebook" href="s"><img border="0" style="border-width:0px;" alt="ATI Facebook" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/facebook.png"></a>
        <a title="ATI Twitter" target="_blank" class="twitter" id="ctl00_footerContent_twitter" href=""><img border="0" style="border-width:0px;" alt="ATI Twitter" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/twitter.png"></a>
        <a title="ATI YouTube" target="_blank" class="youtube" id="ctl00_footerContent_youtube" href=""><img border="0" style="border-width:0px;" alt="ATI YouTube" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/youtube.png"></a>
        <a title="ATI LinkedIn" target="_blank" class="linkedin" id="ctl00_footerContent_linkedin" href=""><img border="0" style="border-width:0px;" alt="ATI LinkedIn" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/linkedin.png"></a> </div>
        <div class="clear"> </div>
        <div class="clear"> </div>
      </div>
      <div id="footer-sidebar"> </div>
    </div>  
