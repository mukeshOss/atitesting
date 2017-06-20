<table cellpadding="0" cellspacing="0" id="contentAndSidebar">
    <tbody><tr>
            <td valign="top" class="sidebar">
                <div id="sidebarNav">
                    <div class="sidebarNavItem-level1">
                        <a href="/About/ascend-learning.aspx">Ascend Learning</a>
                    </div><div style="display:none;">

                    </div><div class="sidebarNavItem-level1">
                        <a href="/About/nursing-test-banks.aspx">ATI Test Banks</a>
                    </div><div style="display:none;">

                    </div><div class="sidebarNavItem-level1">
                        <a href="/About/careers.aspx">Careers</a>
                    </div><div style="display:none;">

                    </div><div class="sidebarNavItem-level1">
                        <a href="/About/CanWeHelpYou.aspx">Contact Us</a>
                    </div><div style="display:none;">

                    </div><div class="sidebarNavItem-level1">
                        <a href="/About/News.aspx">News</a>
                    </div><div style="display:none;">

                    </div>
                </div>
            </td>
            <td rowspan="2" valign="top">
                <div id="content">
                    <div class="topContent">
                        <div class="clear">
                        </div>

                        <?php
                        $allowedAreas = [
                            'AtiTesting_Headline',
                            'AtiTesting_SubHeadline',
                            'AtiTesting_Wysiwyg',
                            'AtiTesting_HomeTiles',
                            'AtiTesting_Solution',
                            'AtiTesting_LeftNav',
                        ];
                        ?>
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
                    <table cellpadding="0" cellspacing="0" id="tableContent">
                        <tbody><tr>
                                <td id="tableContent-leftColumn">
                                    <div class="leftContent">


                                    </div>
                                </td>
                                <td id="tableContent-rightColumn">
                                    <div class="rightContent">


                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                    <div class="bottomContent">
                        <div class="clear">
                        </div>


                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td valign="bottom" class="sidebar">
                <div id="signOnForm" style="display: none;">
                    <input tabindex="100" id="signOnForm-userId" onfocus="JavaScript:userIdFocus(event, this);" onblur="JavaScript:userIdBlur(event, this);" onkeypress="JavaScript: return userIdKeyPress(event, 'http://www.atitesting.com/ati_next_gen/Default.aspx');" name="txtUserName" type="text" value="Username"><div id="userNameErrorMessage" class="userId-error" style="display:none;">

                    </div><div id="signOnForm-passwordAndGo">
                        <input tabindex="101" id="signOnForm-passwordText" name="signOnForm-passwordText" value="Password" onfocus="JavaScript:passwordTextFocus(event, this);"><input tabindex="102" id="signOnForm-password" name="txtPassword" type="password" onblur="JavaScript:passwordBlur(event, this);" onkeypress="JavaScript: return passwordKeyPress(event, 'http://www.atitesting.com/ati_next_gen/Default.aspx');" value="" style="display:none;"><input tabindex="102" class="signOnForm-go" type="button" onclick="JavaScript: return submitSignOnForm('http://www.atitesting.com/ati_next_gen/Default.aspx');" onmouseover="JavaScript: signInGoMouseOver(event, this);" onmouseout="JavaScript: signInGoMouseOut(event, this);"><div class="clear">

                        </div><div id="passwordErrorMessage" class="password-error" style="display:none;">

                        </div>
                    </div><div id="signOnForm-other">
                        <div id="signOnForm-needHelp">
                            <a href="http://www.atitesting.com/ati_next_gen/General/Login_Step1.aspx" id="ctl00_forgotPassword" class="signOnForm-needHelp-link">Forgot username and/or password?</a>
                        </div><div id="signOnForm-register">
                            <a href="http://student.atitesting.com/login?mode=1" id="ctl00_register" class="signOnForm-register-link">Create an account.</a>
                        </div>
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
                            if (myAnchors[i].id.indexOf('forgotPassword') != -1)
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
                    (function (d, s, i, r) {
                        if (d.getElementById(i)) {
                            return;
                        }
                        var n = d.createElement(s), e = d.getElementsByTagName(s)[0];
                        n.id = i;
                        n.src = '//js.hs-analytics.net/analytics/' + (Math.ceil(new Date() / r) * r) + '/497482.js';
                        e.parentNode.insertBefore(n, e);
                    })(document, "script", "hs-analytics", 300000);
                </script> <!-- End of Async HubSpot Analytics Code -->
                <div class="sidebar-block">
                </div>
            </td>
        </tr>
    </tbody></table>
