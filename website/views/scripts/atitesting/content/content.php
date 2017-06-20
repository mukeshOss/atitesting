


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
                    
                    <?php
                        $allowedAreas = [
                            'Atitesting_Headlines',
                        ];
                        echo $this->areablock('content_block', ['allowed' => $allowedAreas]);
                    ?>

                    <div class="topContent">
                        <div class="clear">
                        </div>

                        <div class="h1bg"> <h1>About Us</h1> </div><h2>We’re a company that’s in good company.</h2> <p class="pullquote" style="margin-top: 25px; margin-left: 25px;">ATI Nursing Education is located in Leawood, Kansas, a suburb just south of Kansas City. We moved into our new, corporate headquarters in mid-2012 where we enjoy beautiful panoramic views and collaborative working spaces.</p> <p>We have a real understanding for what it takes to become a nurse.&nbsp;ATI Nursing Education began with the help of a nurse and many nurses are a valued part of our company today. We also have a real understanding for what it takes to pass high stakes tests. We boast a team of people (graduate degreed psychometricians) who specialize in tests.</p> <p>Nursing students are not created equally. Some are young. Some are middle-aged. Some are moms. Some are dads. Some are morning people. Some are night owls. Some learn by the book. Others learn best online – which you should know, we are the leader in online learning. Intuitively, ATI Nursing Education's learning systems are designed to teach the way individuals learn. Whether it’s an RN or a PN program, we’re with your students from the beginning of school through the beginning of their nursing career and it’s done with the kind of personal caring attention that’s synonymous with nursing.</p> <p>With our help, students garner great results in high stakes test preparation with pass rates closer to 100% than any other education system in the market. It’s no surprise that we’re the first choice for more nurse educators, universities and colleges nationwide.</p> <h2>You may begin.</h2>
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