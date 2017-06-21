<div id="header">
        <div id="siteSearch"> 
          <script type="text/javascript">
    function doClick(buttonName, e) {
        //the purpose of this function is to allow the enter key to 
        //point to the correct button to click.
        var key;

        if (window.event)
            key = window.event.keyCode;     //IE
        else
            key = e.which;     //firefox

        if (key == 13) {
            //Get the button the user wants to have clicked
            var btn = document.getElementById(buttonName);
            if (btn != null) { //If we find the button click it
                btn.click();
                event.keyCode = 0
            }
        }
    }
</script>
          <style type="text/css">
    .wrapper {
        border: 1px solid #036;
        display: inline-block;
        background-color: white;
    }

    .searchButton {
        background-color:#ffc423 !important;
        cursor: pointer;
        height: 40px !important;
        width:50px !important;
        line-height:2;
        border: 0;
        color:#036 !important;
        /*padding: 9px 5px 5px 5px;*/
    }

    .searchField {
        width:345px;
        font-size:12pt !important;
        padding-left:10px;
        padding-right:10px;
        line-height:2;
        color:#036;
        height:30px;
        border: 0;
    }
</style>
          <link rel="stylesheet" href="/website/static/jblearning/css/font-awesome.min.css" type="text/css">
          <div class="wrapper">
            <input name="ctlSiteSearch$siteSearchText" type="text" id="ctlSiteSearch_siteSearchText" class="searchField" placeholder="Enter Keyword, Title, Author or ISBN">
            <button onclick="if (typeof(Page_ClientValidate) == 'function') Page_ClientValidate('ctlSiteSearch_searchgroup'); __doPostBack('ctlSiteSearch$btnSearch','')" id="ctlSiteSearch_btnSearch" type="submit" class="searchButton" validationgroup="ctlSiteSearch_searchgroup"><i class="fa fa-search fa-2x"></i></button>
          </div>
          <br>
          <script type="text/javascript">
    $('#ctlSiteSearch_btnSearch').on("click", function () {
        if (Page_ClientValidate('ctlSiteSearch_searchgroup') == true)
            __doPostBack('ctlSiteSearch$btnSearch', '');
        else
            return false;
    });
    
    $('#ctlSiteSearch_btnSearch').on("keypress", (function (e) {
      if (e.which == 13) {
        $('form').submit();
        return false;    //<---- Add this line
      }
    }));
</script> 
        </div>
        <!-- #siteSearch -->
        <div id="siteNav">
          <dl>
            <dt><a title="Jones &amp; Bartlett Learning" href="index.html"><img class="homeNavSpacer" src="/website/static/jblearning/images/spacer.gif" alt="Jones &amp; Bartlett Learning"></a></dt>
            <dd>
              <ul>
                <li id="navBrowseSubjects" class="on">
                  <?php echo $this->inc("/jblearning/shared/leftnav"); ?>
                </li>
                <li><a href="elearning/index.html">eLearning</a></li>
                <li><a href="custom/overview/index.html">Custom Solutions</a></li>
                <li><a href="brandspartners/brands/index.html">Brand &amp; Partners</a></li>
                <li><a href="about/overview/index.html">About Us</a></li>
                <li><a href="booksellers/wholesaler/index.html">Booksellers</a></li>
              </ul>
            </dd>
          </dl>
          <style type="text/css">
    /*.no-arrow{background: url('/img/sitenav-arrow2.gif') no-repeat 0 0px;}*/
    .no-arrow {background: url('') 138px -129px no-repeat !important;}
</style>
        </div>
        <!-- #siteNav -->
        <div id="shopTools" class="mininav">
          <dl>
            <dt>Shopping Tools</dt>
            <dd>
              <ul>
                <li><a href="techsupport/index.html">Technical Support</a></li>
                <li><a href="about/contact/index.html">Contact Us</a></li>
                <li><a href="myaccount/index.html">My Account</a></li>
                <li><a href="http://www2.jblearning.com/my-account/terms-and-conditions">Redeem Code</a></li>
                <li class="cart last"><a href="cart/indexf483.html?ref=jblearning" id="ctlShopTools_hfCartLink">Shopping Cart</a></li>
              </ul>
            </dd>
          </dl>
        </div>
        <!-- #supernav --> 
      </div>