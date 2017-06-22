<div id="ContentHolder">    
    <div>
        <div id="LeftColumn">
            <?php $this->inc("/atitesting/shared/product-filter"); ?>
        </div>
        <div id="RightColumn">
            <div id="QuickNavigation" style="margin-bottom:10px; margin-top:10px;">
                <span id="ctl00_ctl00_MainContent_BREAD_CRUMBS_lblPath">
                    <?php 
                    $category = $this->category;
                    if (!empty($category) && count($category)>0) {?>
                        <a href='product-listing.htm'><strong>Home</strong></a> >
                        <?php echo $this->view->getBreadcrumb($category); ?>
                    <?php } else {?>
                        <a href='product-listing.htm'><strong>Home</strong></a>
                    <?php } ?>
                    
            </div>
            <div id="cart_btn_full"><a href="shoppingcart.htm">View Cart</a></div>


            <script language="JavaScript1.2" type="text/javascript">
                function openwindow()
                {
                    var query = 'ProductZoom.aspx?zpid=1528&prdtImgName=' + document.getElementById('Hidden1').value + '&prdtImgfile=' + document.getElementById('Hidden2').value;
                    window.open(query, 'win', 'height=580,width=570,top=110,left=200,location=no,menubar=no,scrollbars=yes,resizable=no,status=no,toolbar=no,titlebar=no');
                }
            </script>

            <div id="ctl00_ctl00_MainContent_uxProduct_UpdatePnlProductDetail">

                <div class="ProductDetail">
                    <input id="Hidden1" type="hidden"><input id="Hidden2" type="hidden">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td valign="top" align="center">                        
                                <div class="Image">
                                    <div><a href="javascript:openwindow()"><img id="ctl00_ctl00_MainContent_uxProduct_CatalogItemImage" src="ati_store/data/default/images/catalog/medium/computer.jpg" alt="ATI TEAS SmartPrep Study Package" border="0"></a>
                                        <div class="ProductPageNewItem"><img id="ctl00_ctl00_MainContent_uxProduct_NewItemImage" src="ati_store/themes/Default/Images/NEW.gif" border="0"></div></div>
                                </div>                        
                                <div class="PrdtAddtionalImages">
                                    <div style="text-align:left;">


                                    </div>         


                                </div>
                                <div class="PrdtAddtionalImages">
                                    <div style="text-align:left;">


                                    </div>         


                                </div>
                                <div></div>
                                <div><span id="ctl00_ctl00_MainContent_uxProduct_CustomMessage1_lblMsg"></span> </div>
                            </td> 
                            <td><!-- <img src="images/clear.gif" width="20" height="1" /> --></td>          
                            <td valign="top">
                                <!--Ordering Options-->  
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <tr>
                                        <td valign="top">
                                            <div class="Title"><span id="ctl00_ctl00_MainContent_uxProduct_ProductTitle"><h1>ATI TEAS SmartPrep Study Package</h1></span></div>

   <div><!-- <span class="Label">Item#&nbsp;</span> --></div>
   <div><!-- <span class="Label">Brand:&nbsp;</span> --></div>
                                            <div class="StarRating"></div>
                                            <div class="Description"><span id="ctl00_ctl00_MainContent_uxProduct_ProductDescription"><strong>ATI TEAS SmartPrep <br></strong><p>
                                                    <p>ATI TEAS Smartprep is available for unlimited use for 90 days after the module has been accessed for the first time. This multi-media tutorial accelerates past traditional methods and drives student readiness with personalized study plans, engaging content, and frequent comprehension checks.</p>
                                                    <p>&nbsp;</p>
                                                    <ul>
                                                        <li>65 lessons across the four subjects tested by the ATI TEAS: Science, Reading, Math, English &amp; Language usage.</li>
                                                        <li>650 questions to check your comprehension.</li>
                                                        <li>Customized study plans that address each learner&rsquo;s strengths and weaknesses.</li>
                                                        <li>Focused remediation directly connects students with content that helps them improve.&nbsp;</li>
                                                    </ul>
                                                    <p>&nbsp;</p>
                                                    <p><strong>ATI TEAS Study Manual&nbsp;</strong></p>
                                                    <p>The TEAS study manual streamlines applicants' preparation for the TEAS. This official TEAS resource, written specifically to address the needs of students preparing to take the TEAS, is proven to work. On average, students who used TEAS prep materials from ATI scored higher on their TEAS test than those using other companies' materials or no study prep materials.</p>
                                                    <p>&nbsp;</p>
                                                    <p><strong>ATI TEAS Online Practice Assessments (form A and B)</strong></p>
                                                    <ul>
                                                        <li>Two 150 question assessments (form A and B) patterned after the actual ATI TEAS exam</li>
                                                        <li>Designed to give a sense of what to expect both in content and in format</li>
                                                        <li>Ability to take each assessment twice (same set of questions) Items accompanied by detailed rationales for correct and incorrect responses</li>
                                                        <li>Available via the internet</li>
                                                    </ul>
                                                    <p>&nbsp;</p>
                                                    <p><strong>Important Product Information:</strong></p>
                                                    <ul>
                                                        <li>ATI TEAS Smartprep is available for unlimited use for 90 days.&nbsp; After 90 days, there will be a $30 fee to activate your SmartPrep account for an additional 90 day period</li>
                                                        <li>The ATI TEAS Study Manual is copyrighted and is only available for a single use only. There is only one version of the practice test.</li>
                                                    </ul></span></div>


                                            <div class="WishLink"> </div>

                                        </td>
                                        <td valign="top"> 
                                            <div class="OrderingOptions">
                                                <h2>Order Now</h2>

                                                <div class="OptionsTitle"></div>

                                                <div id="Attributes">

                                                </div>

                                                <div class="PriceContent">
                                                    <span class="TotalPriceText"><span id="ctl00_ctl00_MainContent_uxProduct_uxProductPrice_PriceTotal">Price:</span></span><span id="ctl00_ctl00_MainContent_uxProduct_uxProductPrice_Price" class="ProductPrice"><span class='SalePrice'>$209.00 </span></span>

                                                </div>
                                                <div class="SalePrice"></div>

                                                <div id="Add-Ons">

                                                </div>

                                                <!--Information : If you change Add-Ons <div> tag ID [EX:<div ID ="Add-Ons">] , then you need to update that
                                                    name in this javascript [File:"thumbnailviewer.js"] on line no :43 and 111. If we did't update 
                                                    enlarge image won't work.-->                              
                                                <div id="ctl00_ctl00_MainContent_uxProduct_pnlQty">

                                                    <div class="TotalQuantity"><span class="Quantity">Quantity: </span><select name="ctl00$ctl00$MainContent$uxProduct$uxQty" id="ctl00_ctl00_MainContent_uxProduct_uxQty">
                                                            <option selected="selected" value="1">1

                                                        </select></div>

                                                </div>


                                                <div class="StockMsg"></div>
                                                <div class="StatusMsg"></div>
                                                <div class="CallForPrice"></div>
                                                <div><input type="image" name="ctl00$ctl00$MainContent$uxProduct$uxAddToCart" id="ctl00_ctl00_MainContent_uxProduct_uxAddToCart" src="ati_store/themes/Default/images/addtocart.gif" align="absmiddle" border="0"></div>
                                            </div>                                    
                                        </td>
                                    </tr>
                                </table>  
                                <!--Ajax Tabs-->   

                            </td>
                        </tr>    
                    </table>
                    <div class="RelatedProducts">
                        <div id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_pnlIncludedProducts">

                            <h5><span id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_CustomMessage1_lblMsg">Included Products</span> </h5>
                            <div class="RecentlyViewedProduct">             
                                <div>
                                    <table cellspacing="0" border="0" id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_grdIncludedProducts">
                                        <tr>
                                            <th scope="col">&nbsp;</th>
                                        </tr><tr class="ItemStyle">
                                            <td>
                                                <div class="RecentlyViewedItem" style="width: 600px; text-align: left;">
                                                    <div class="StarRating">

                                                    </div>
                                                    <div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <a href="ati_store/product-78.htm?zpid=1484" id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_grdIncludedProducts_ctl02_A1">

                                                                    </a>                                            
                                                                </td>
                                                                <td>
                                                                    <a id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_grdIncludedProducts_ctl02_hlName" class="DetailLink" href="ati_store/product-78.htm?zpid=1484">ATI TEAS Online Practice Assessment Form A</a> 
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>                
                                                    <div class="ShortDescription"></div>                       
                                                    <div class="CallForPrice"></div>
                                                    <div class="Price"> </div>                
                                                    <div class="BuyButton"></div>
                                                </div>        
                                            </td>
                                        </tr><tr class="ItemStyle">
                                            <td>
                                                <div class="RecentlyViewedItem" style="width: 600px; text-align: left;">
                                                    <div class="StarRating">

                                                    </div>
                                                    <div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <a href="ati_store/product-77.htm?zpid=1489" id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_grdIncludedProducts_ctl03_A1">

                                                                    </a>                                            
                                                                </td>
                                                                <td>
                                                                    <a id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_grdIncludedProducts_ctl03_hlName" class="DetailLink" href="ati_store/product-77.htm?zpid=1489">ATI TEAS Online Practice Assessment Form B</a> 
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>                
                                                    <div class="ShortDescription"></div>                       
                                                    <div class="CallForPrice"></div>
                                                    <div class="Price"> </div>                
                                                    <div class="BuyButton"></div>
                                                </div>        
                                            </td>
                                        </tr><tr class="ItemStyle">
                                            <td>
                                                <div class="RecentlyViewedItem" style="width: 600px; text-align: left;">
                                                    <div class="StarRating">

                                                    </div>
                                                    <div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <a href="ati_store/product-127.htm?zpid=1527" id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_grdIncludedProducts_ctl04_A1">

                                                                    </a>                                            
                                                                </td>
                                                                <td>
                                                                    <a id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_grdIncludedProducts_ctl04_hlName" class="DetailLink" href="ati_store/product-127.htm?zpid=1527">ATI TEAS SMART PREP COURSE</a> 
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>                
                                                    <div class="ShortDescription"></div>                       
                                                    <div class="CallForPrice"></div>
                                                    <div class="Price"> </div>                
                                                    <div class="BuyButton"></div>
                                                </div>        
                                            </td>
                                        </tr><tr class="ItemStyle">
                                            <td>
                                                <div class="RecentlyViewedItem" style="width: 600px; text-align: left;">
                                                    <div class="StarRating">

                                                    </div>
                                                    <div>
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <a href="ati_store/product-79.htm?zpid=1483" id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_grdIncludedProducts_ctl05_A1">

                                                                    </a>                                            
                                                                </td>
                                                                <td>
                                                                    <a id="ctl00_ctl00_MainContent_uxProduct_ucIncludedProducts_grdIncludedProducts_ctl05_hlName" class="DetailLink" href="ati_store/product-79.htm?zpid=1483">ATI TEAS Study Manual – Sixth Edition</a> 
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>                
                                                    <div class="ShortDescription"></div>                       
                                                    <div class="CallForPrice"></div>
                                                    <div class="Price"> </div>                
                                                    <div class="BuyButton"></div>
                                                </div>        
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>

                        <div class="CrossSell">


                        </div>

                        <div class="RelatedProducts">

                        </div>                         
                    </div>                         
                    <div>
                    </div>          


                    <div class="Tabs">

                        <div id="Tab">    
                            <div id="ctl00_ctl00_MainContent_uxProduct_uxProductTabs_UpdatePnlProductDetails">



                            </div>
                        </div>
                    </div>

                    <div class="Reviews">
                        <span id="ctl00_ctl00_MainContent_uxProduct_Review1_lblReview"></span>
                        <span id="ctl00_ctl00_MainContent_uxProduct_Review2_lblReview"></span>
                    </div>

                </div>

            </div>


        </div>
    </div>         

</div>               
<div id="footer">
    <div id="footer-content">
        <div id="footer-copyright">
            <div id="footer-copyright-text">
                Copyright &#169; <span id="date"></span> Assessment Technologies Institute®, LLC. All rights reserved.
            </div>
            <div id="footer-copyright-links">
                <a href="http://www.atitesting.com/PrivacyPolicy.aspx">Privacy Policy</a> | 
                <a href="http://www.atitesting.com/TermsOfUse.aspx">Website Terms of Use</a> |
                <a href="http://www.atitesting.com/terms-conditions.aspx">User Terms and Conditions</a> | 
                <a href="http://www.atitesting.com/sitemap.aspx">Sitemap</a>
            </div>
        </div>
        <div id="footer-links">
            <a href="http://www.atitesting.com/Solutions.aspx">ATI Product Solutions</a> | 
            <a href="/ati_store"> Online Store</a> | 
            <a href="http://www.atitesting.com/About/CanWeHelpYou.aspx">Contact Us</a>
        </div>
    </div>
    <div id="footer-sidebar"></div>
</div>

</div>

<!-- Start of Async HubSpot Analytics Code -->
<script type="text/javascript">
    (function (d, s, i, r) {
        if (d.getElementById(i)) {
            return;
        }
        var n = d.createElement(s), e = d.getElementsByTagName(s)[0];
        n.id = i;
        n.src = '//js.hs-analytics.net/analytics/' + (Math.ceil(new Date() / r) * r) + '/1270502.js';
        e.parentNode.insertBefore(n, e);
    })(document, "script", "hs-analytics", 300000);
</script>
<!-- End of Async HubSpot Analytics Code -->
<script type="text/javascript">
//<![CDATA[
    Sys.Application.initialize();
//]]>
</script>
</form>
</div>
</body>
</html>