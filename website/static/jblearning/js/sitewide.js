
$(document).ready(function () {

    //	$.preloadCssImages();

    $('#content #keyFeatures dl dd:last').addClass('last');

    $("#ctlSiteSearch_siteSearchText").focus(function () {
        if (this.value == this.defaultValue) {
            this.value = "";
        }
    }).blur(function () {
        if (!this.value.length) {
            this.value = this.defaultValue;
        }
    });

    $("#ctl00_ctlSiteSearch_siteSearchText").focus(function () {
        if (this.value == this.defaultValue) {
            this.value = "";
        }
    }).blur(function () {
        if (!this.value.length) {
            this.value = this.defaultValue;
        }
    });

    $('#siteSearchText').focus(function () {
        $('#siteSearch fieldset fieldset').addClass('on');
    });

    $('#siteSearchText').blur(function () {
        $('#siteSearch fieldset fieldset').removeClass('on');
    });

    $('li#navBrowseSubjects, li#navBrowseSubjects li', 'div#stayConnected li').hover(function () {

        if ($("div#homeleftnav").length > 0) { } else {

            $(this).addClass('on');
            $("#callouts div#stayConnected .button").addClass('hovered');

        }
    }, function () {

        if ($("div#homeleftnav").length > 0) { } else {

            $(this).removeClass('on');
            $("#callouts div#stayConnected .button").removeClass('hovered');

        }
    });


    $('#valuePackages ul li:first, #stayConnected li:first, #siteNav li#navBrowseSubjects li:first, #siteNav dl dd ul li#navBrowseSubjects.on dl#browseByAudience li:first, #introduction #details table tr:first')
		.addClass('first');

    $('#page .box, div#stayConnected li dl:has(dl dl) dt a, #callouts #newsResources dt, #callouts dl dd ul div#stayConnected dl dd ul li dl dd:has(dd), #siteNav li#navBrowseSubjects li dl:has(dl dl) dt a, #siteNav dl dd ul li#navBrowseSubjects dl dd ul li dl dd:has(dd), #siteNav dl dd ul li#navBrowseSubjects dl#browseByAudience dd:has(dd)')
		.prepend('<span class="top"></span>')
		.append('<span class="bottom"></span>');

    $('#siteNav dl dd ul li#navBrowseSubjects li ul:has(ul)').wrap('<div class="navwrap"></div>');

    //$('#siteNav dl dd ul li#navBrowseSubjects li ul:has(ul)').makeacolumnlists({cols:2,colWidth:210,equalHeight:false,startN:1});

    $('.navwrap ul li dd ul').each(function () {
        var sublength = $(this).children().length;
        //console.log(sublength);
        if (sublength > 10) {
            if (sublength > 32) {
                $(this).parent('dd').css('width', 615);
                $(this).makeacolumnlists({ cols: 3, colWidth: 205, equalHeight: false, startN: 1 });
            }
            else {
                $(this).parent('dd').css('width', 410);
                $(this).makeacolumnlists({ cols: 2, colWidth: 205, equalHeight: false, startN: 1 });
            }
        }
    });
    //$('div.mininav > div.jblCompanyInfo').css('padding-top', '10%');
    //$('.navwrap ul li dd ul').makeacolumnlists({cols:2,colWidth:205,equalHeight:false,startN:1});

    $('#toc li:has(ul)').addClass('pa');

    $('#callouts div.box ul li:has(img)').addClass('clear');

    $('.mininav li:last-child').addClass('last');

    $('li#navBrowseSubjects, li#navBrowseSubjects li').hover(function () {
        $(this).addClass('on');
    }, function () {
        $(this).removeClass('on');
        $('.homepage #navBrowseSubjects').addClass('on');
    });

    $('li#navBrowseSubjects').hover(function () {
        if ($("div#homeleftnav").length > 0) { } else {

            $(this).addClass('on');
        }
    }, function () {
        if ($("div#homeleftnav").length > 0) { } else {
            $(this).removeClass('on');
        }
    });

    $('#contentWrap').append('<div id="shareWrap"></div>');

    $('#pageTools li.share a').click(function () {
        $(this).toggleClass('on');
        $('#shareWrap').toggleClass('on');
        return false;
    });

    //$('#shareWrap').bookmark({icons: 'img/bookmarks.png'});

    /*
    $('#siteNav dl dt').click(function () {       
        //Copy URL from href in anchor id=home (server-side generated URL)
        document.location = $("dt[id*='home'] a").attr("href");
    });
	*/

    $('.navwrap > ul > li').hover(function () {
        // on
        $(this).prev('li').children('dl').children('dt').children('a').css('border-color', '#244153');
    }, function () {
        // off
        $(this).prev('li').children('dl').children('dt').children('a').css('border-color', '#466F81');
    });

    //vertImg(); // this has to be outside the document load to work in IE


    $('#contentContainer .productImage div img.vcenter').vAlign();

    /*
    $('.section > div').slideUp('fast');
    $('.section h2').click(function () {
        if ($(this).siblings('div').hasClass('on')) {
            $(this).children('span').html('Show');
            $(this).siblings('div').slideUp('medium');
            $(this).removeClass('on');
            $(this).siblings('div').removeClass('on');
        }
        else {
            $(this).children('span').html('Hide');
            $(this).siblings('div').slideDown('medium');
            $(this).addClass('on');
            $(this).siblings('div').addClass('on');
        }
    });
	*/

    $('.tab-nav li a').click(function () {
        var index = $('.tab-nav li a').index(this);
        $('.tab-nav li').removeClass('on');
        $(this).parent('li').addClass('on');
        $('.tab-content li').removeClass('on');
        $('.tab-content > li:eq(' + index + ')').addClass('on');
        return false;
    });

    $('.tab-content .hide').click(function () {
        if ($(this).parent('span').siblings('dl').hasClass('on')) {
            $(this).parent('span').siblings('dl').slideUp('medium');
            $(this).parent('span').siblings('dl').removeClass('on');
            $(this).parent('span').parent('li').removeClass('on');
            $(this).html('show overview');
        }
        else {
            $(this).parent('span').siblings('dl').slideDown('medium');
            $(this).parent('span').siblings('dl').addClass('on');
            $(this).parent('span').parent('li').addClass('on');
            $(this).html('hide overview');
        }

        return false;
    });


});
	
	(function ($) {
	// VERTICALLY ALIGN FUNCTION
	$.fn.vAlign = function() {
		return this.each(function(i){
		var ah = $(this).height();
		var ph = $(this).parent().height();
		var mh = (ph - ah) / 2;
		$(this).css('margin-top', mh);
		});
	};
	})(jQuery);
	
function vertImg(){
	var i = $('#introduction #mainGraphic span.img img');
	var imgH = $(i).height();
	if (imgH < 250) {
		$(i).parent('span').css({
			'padding-top': ( (250 - imgH) / 2 ) + "px",
			'padding-bottom': ( (250 - imgH) / 2 ) + "px",
			'min-height' : 0
		});
	} else return;
}