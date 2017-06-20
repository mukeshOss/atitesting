<table cellpadding="0" cellspacing="0" id="contentAndSidebar">
      <tbody><tr>
        <td valign="top" align="left"><div id="content">
            <div class="topContent">
              <div class="clear"> </div>
            </div>
            <table cellpadding="0" cellspacing="0" id="tableContent">
              <tbody><tr>
                <?= $this->areablock("content"); ?>
              </tr>
            </tbody></table>
            <div class="bottomContent">
              <div class="clear"> </div>
            </div>
          </div></td>
        <td valign="top" align="right"><div class="sidebar">
            <div id="signOnForm" style="">
              <input tabindex="100" id="signOnForm-userId" onfocus="JavaScript:userIdFocus(event, this);" onblur="JavaScript:userIdBlur(event, this);" onkeypress="JavaScript: return userIdKeyPress(event,'');" name="txtUserName" type="text" value="Username">
              <div id="userNameErrorMessage" class="userId-error" style="display:none;"> </div>
              <div id="signOnForm-passwordAndGo">
                <input tabindex="101" id="signOnForm-passwordText" name="signOnForm-passwordText" value="Password" onfocus="JavaScript:passwordTextFocus(event, this);">
                <input tabindex="102" id="signOnForm-password" name="txtPassword" type="password" onblur="JavaScript:passwordBlur(event, this);" onkeypress="JavaScript: return passwordKeyPress(event,'');" value="" style="display:none;">
                <input tabindex="102" class="signOnForm-go" type="button" onclick="JavaScript: return submitSignOnForm('');" onmouseover="JavaScript: signInGoMouseOver(event, this);" onmouseout="JavaScript: signInGoMouseOut(event, this);">
                <div class="clear"> </div>
                <div id="passwordErrorMessage" class="password-error" style="display:none;"> </div>
              </div>
              <div id="signOnForm-other">
                <div id="signOnForm-needHelp"> <a href="ati_next_gen\General\Login_Step1.htm" id="ctl00_forgotPassword" class="signOnForm-needHelp-link">Forgot username and/or password?</a> </div>
                <div id="signOnForm-register"> <a href="" id="ctl00_register" class="signOnForm-register-link">Create an account.</a> </div>
              </div>
            </div>
            <!-- ATING-823 - 2012/08/01 - JDJT - modify 'forgotPassword' text --> 
            <script type="text/javascript">
								function modifyLoginHelpText()
								{
									var myAnchors;
									myAnchors = document.getElementsByTagName('a');
									for (i = 0; i < myAnchors.length; i++)
									{
										if(myAnchors[i].id.indexOf('forgotPassword') != -1)
										{
											myanchor = document.getElementById(myAnchors[i].id);
										}
									}
									if (myanchor && myanchor != '') 
									{
										myanchor.innerHTML = 'Forgot username and/or password?';
									}
								}
								modifyLoginHelpText();
							</script> 
            
            <!-- Start of Async HubSpot Analytics Code --> <script type="text/javascript">
    (function(d,s,i,r) {
      if (d.getElementById(i)){return;}
      var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
      n.id=i;n.src='//js.hs-analytics.net/analytics/'+(Math.ceil(new Date()/r)*r)+'/497482.js';
      e.parentNode.insertBefore(n, e);
    })(document,"script","hs-analytics",300000);
  </script> <!-- End of Async HubSpot Analytics Code -->
            <div style="background-color: #ffffff; height: 7px;"></div>
            <div class="orange">
              <p style="font-weight: bold; font-size: 16px;"><?= $this->wysiwyg("important_desc") ?></p>
              
            </div>
            <style>
    .orange p {color:#ffffff; text-align:left !important; font-size:12px;}
    .orange { background:#eb8031; padding:15px 8px 8px 8px; }
    .orange a {color:#ffffff; text-align:left !important; text-decoration:underline;}
</style>
            <?= $this->snippet("links") ?>
            <script>document.write("<scr"+"ipt src='https://bp.specificclick.net?pixid=99068583&u="+escape(parent.document.location)+"&r="+escape(parent.document.referrer)+"'></scri"+"pt>");</script>
                        <noscript>
                           <img src="https://bp.specificclick.net?pixid=99068583" width="0" height="0" border="0">
                        </noscript>
                        <div style="background-color: #ffffff; height: 7px;"></div>
                      </div>
            </td>

      </tr>
    </tbody></table>