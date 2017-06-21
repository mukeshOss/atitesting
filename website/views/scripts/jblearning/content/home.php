 <div id="page" class="clearfix">
        <div id="contentWrap" class="clearfix">
          <div id="content">
            <div id="homeleftnav">
              <div class="socMediaSection"> <a href="iframe/facebook996b.html?keepThis=true&amp;TB_iframe=true&amp;height=410&amp;width=640" class="thickbox"><img src="/website/static/jblearning/img/facebook_hm.png" /></a> <a href="iframe/twitter996b.html?keepThis=true&amp;TB_iframe=true&amp;height=410&amp;width=640"class="thickbox"><img src="/website/static/jblearning/img/twitter_hm.png" /></a> <a href="iframe/blogs46fc.html?keepThis=true&amp;TB_iframe=true&amp;height=427&amp;width=640" class="thickbox"><img src="/website/static/jblearning/img/blog_hm.png" /></a> <a href="http://www.linkedin.com/company/jones-&amp;-bartlett-learning" target="_blank"><img src="/website/static/jblearning/img/linkedin_hm.png" class="last" /></a> <a href="http://click.oo155.com/ViewLandingPage.aspx?pubids=133|-6|5|670&amp;digest=IuNtFxKFq38FnqGu%2b4ZOEg&amp;sysid=1&amp;mobile=0?keepThis=true&amp;TB_iframe=true&amp;height=600&amp;width=900" class="thickbox"><img src="/website/static/jblearning/img/email_signup_bkg.png" class="emlsignup" alt="Email Updates"/></a> <a href="http://authors.jblearning.com/" target="_blank" style="display: block; width: 186px; height: 51px; background-image: url('/website/static/jblearning/img/author_corner_bkg.png'); margin: 6px 0 0 0;"></a> <a href="aboutus/careers/index.html" style="display: block; width: 186px; height: 51px; background-image: url('/website/static/jblearning/img/career_opp_bkg.png'); margin: 6px 0 0 0;"></a> </div>
            </div>
            <div id="homeMidArea">
              <div id="wrapper" style="margin: 0; background-color: white; position: relative;">
                <div class="slider-wrapper">
                  <div id="sideFloatSection" style="padding: 0px 10px; margin: 0; z-index: 3; position: absolute; left: 540px; top: 40px;">
                    <div id="loginAcct"> <a href="#"><img src="/website/static/jblearning/img/login_hmbtn.png" alt="Log In To Your Account" /></a> </div>
                    <div id="redeemAccess"> <a href="#"><img src="/website/static/jblearning/img/access2.png" alt="Redeem an acces code" /></a> </div>
                    <div id="findSalesRep"> <a href="#"><img src="/website/static/jblearning/img/findyoursalesrep.png" alt="Find Your Sales Rep" /></a> </div>
                  </div>
                 <?= $this->areablock("carousel" ,["width" => 760, "height" => 265]) ?>
                  <!-- nivoslider --> 
                </div>
                <!-- slider-wrapper --> 
              </div>
              <!-- wrapper --> 
              
              <script type="text/javascript">
    $(window).load(function() {
        $('#slider').nivoSlider();
    });
    </script>
    
    <?php
                        $allowedAreas = [
                            'JbLearning_Tiles',
                        ];
                        ?>
    <div class ="hometilesContainer">
                        <?php
                        echo $this->areablock('content_block', array(
                            'allowed' => $allowedAreas,
                            "areablock_toolbar" => array(
                                "title" => "",
                                "width" => 230,
                                "x" => 20,
                                "y" => 300,
                                "xAlign" => "left",
                                "buttonWidth" => 218,
                                "buttonMaxCharacters" => 35,
                                "collapsible" => true)
                                )
                        );
                        ?>
    
    </div>
             
                <div class="minicol5"> 
                    <img src="/website/static/jblearning/img/imprints.png" class="imprints-img" /> 
                    
                       <?php while($this->block("contentblocklinks")->loop()) { ?>
                        <?= $this->link("subline"); ?>
                    <?php } ?>
                        
                </div>
              <div class="clear"> </div>
            </div>
          </div>
          <!-- #content --> 
        </div>
        <!-- #contentWrap --> 
      </div>
      <!-- #page -->