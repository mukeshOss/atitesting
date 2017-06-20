
function onSilverlightError(sender, args) {
}

window.onload = function() {
    //$get(tooltipdiv).style.visibility = 'hidden';
}


function HideToolTip() {
    try {
        //var control = $get(tooltipSL);
        //if (control != null && null != control.Content && null != control.Content.SilverlightToolTip) {
        //    control.Content.SilverlightToolTip.Change("", "", "RB");
        //}
        //var ToolTip = $get(tooltipdiv);
        //ToolTip.style.visibility = 'hidden';
    } catch (e) { }
}

var tooltipdiv = "divToolTip";
var tooltipSL = "slToolTip";
var toolTipheight = 100;
var counter = 0;
var browserName = navigator.appName;
var isMacOS = navigator.userAgent.indexOf('Mac OS X');

function ShowToolTip(senderID, topOffset, leftOffset, title, content, loc) {
    try {
        
        //var control = $get(tooltipSL);
        //if (control == null)
        //    return;

        //control.Content.SilverlightToolTip.Change(title, content, loc);

        //control.Content.SilverlightToolTip.Resize();
        //toolTipheight = control.height;
        //var senderPos = GetTopLeft(document.getElementById(senderID));
        //var ToolTip = $get(tooltipdiv);



        //ToolTip.style.top = (senderPos.Top + topOffset - toolTipheight) + 'px';
        //ToolTip.style.left = (senderPos.Left + leftOffset) + 'px';


        //ToolTip.style.visibility = 'visible';
    }
    catch (e) { }
}

function getInternetExplorerVersion()
{
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function GetTopLeftPopup(elm) {
    var originElm = elm;
    var e = elm;
    var x, y, yy = 0;

    //set x to elm’s offsetLeft
    x = e.offsetLeft;

    //set y to elm’s offsetTop
    y = e.offsetTop;

    //set elm to its offsetParent
    e = e.offsetParent;

    var ver = getInternetExplorerVersion();
    if ((ver > -1) && (ver <= 8.0)) {
        //use while loop to check if elm is null
        // if not then add current elm’s offsetLeft to x
        //offsetTop to y and set elm to its offsetParent
        while (e != null && e.tagName.toUpperCase() != "HTML") {
            x = parseInt(x) + parseInt(e.offsetLeft);
            y = parseInt(y) + parseInt(e.offsetTop);
            if (e.tagName.toUpperCase() == "DIV") {
                y = y + e.scrollTop;
                break;
            }
            e = e.offsetParent;
        }
    }
    else {
        //use while loop to check if elm is null
        // if not then add current elm’s offsetLeft to x
        //offsetTop to y and set elm to its offsetParent
        while (e != null && e.tagName.toUpperCase() != "HTML") {
            if (e.tagName.toUpperCase() == "DIV") {
                y = y + e.scrollTop;
                break;
            }
            x = parseInt(x) + parseInt(e.offsetLeft);
            y = parseInt(y) + parseInt(e.offsetTop);
            e = e.offsetParent;
        }
    }

    e = originElm.parentNode;
    while (e != null && e.tagName.toUpperCase() != "HTML") {
        if (e.tagName.toUpperCase() == "DIV") {
            yy = yy + e.scrollTop;
            break;
        }
        e = e.parentNode;
    }
    y = y - yy;

    return { Top: y, Left: x };
}

function HideToolTipPopup(containerId) {
    try {
        //var container = $get(containerId);
        //if (container == null)
        //    return;
        //var control = $get(tooltipSL, container);
        //if (control != null && null != control.Content && null != control.Content.SilverlightToolTip) {
        //    control.Content.SilverlightToolTip.Change("", "", "RB");
        //}
        //var ToolTip = $get(tooltipdiv, container);
        //ToolTip.style.visibility = 'hidden';
    } catch (e) { }
}

function ShowToolTipPopup(senderID, containerId, topOffset, leftOffset, title, content, loc) {
    try {

        //var container = $get(containerId);
        //if (container == null)
        //    return;
        //var control = $get(tooltipSL, container);
        //if (control == null)
        //    return;

        //var sender = $get(senderID, container);
        //if (sender == null)
        //    return;

        //control.Content.SilverlightToolTip.Change(title, content, loc);

        //if ((counter == 0) && (browserName == "Netscape") && (isMacOS == -1)) {
        //    control.Content.SilverlightToolTip.InitialResize();
        //}
        //else {
        //    control.Content.SilverlightToolTip.Resize();
        //}
        //counter++;

        //var toolTipheight = control.height;
        //var toolTipwidth = control.width;

        //var containerHeight = container.offsetHeight;
        //var containerWidth = container.offsetWidth;

        //var buttonHeight = sender.offsetHeight;
        //var buttonWidth = sender.offsetWidth;

        ////Calculate optimum tooltip position
        //var optTooltipTop = containerHeight - buttonHeight - toolTipheight - 5;
        //var optTooltipLeft = leftOffset;

        //var senderPos = GetTopLeftPopup(document.getElementById(senderID));
        //var ToolTip = $get(tooltipdiv, container);

        ////Calculated tooltip position
        //var calcTooltipTop = (senderPos.Top + topOffset - toolTipheight);
        //var calcTooltipLeft = (senderPos.Left + leftOffset);

        ////Replace calculated tooltip top position with optimum tooltip top position for IE8 Non-Compatible mode
        //if (calcTooltipTop > optTooltipTop) {
        //    calcTooltipTop = optTooltipTop;
        //}

        ////Replace calculated tooltip left position with optimum tooltip left position for IE8 Non-Compatible mode
        //if (calcTooltipLeft > optTooltipLeft) {
        //    calcTooltipLeft = optTooltipLeft
        //}

        //ToolTip.style.top = calcTooltipTop + 'px';
        //ToolTip.style.left = calcTooltipLeft + 'px';

        //ToolTip.style.visibility = 'visible';
    }
    catch (e) { }
}


function ShowToolTipNew(senderID, topOffset, leftOffset, title1, content1, title2, content2, imgurl, loc) {
    try {
        //var control = $get(tooltipSL);
        //if (control == null)
        //    return;

        //var senderPos = GetTopLeft(document.getElementById(senderID));
        //var ToolTip = $get(tooltipdiv);
        //var path = imgurl.src;
        //if (path.indexOf('expand-icon.png') > 0) {
        //    control.Content.SilverlightToolTip.Change(title1, content1, loc);
        //}
        //else if (path.indexOf('collapse-icon.png') > 0) {
        //    control.Content.SilverlightToolTip.Change(title2, content2, loc);
        //}
        //control.Content.SilverlightToolTip.Resize();
        //toolTipheight = control.height;

        //ToolTip.style.top = (senderPos.Top + topOffset - toolTipheight) + 'px';
        //ToolTip.style.left = (senderPos.Left + leftOffset) + 'px';

        //ToolTip.style.visibility = 'visible';
    }
    catch (e) { }
}

var productsTabtooltipdiv = "divProductsTabToolTip";
var productsTabtooltipSL = "slProductsTabToolTip";
var productsTabtoolTipheight = 100;

function HideProductsTabToolTip() {
    if (productsTabtooltipdiv != undefined && productsTabtooltipdiv != null) {
        var productsTabToolTip = $get(productsTabtooltipdiv);
        if (productsTabToolTip != null)
            productsTabToolTip.style.visibility = 'hidden';
    }
}


function ShowProductsTabToolTip(senderID, topOffset, leftOffset) {
    try {

        leftOffset = 135;
        var control = $get(productsTabtooltipSL);
        if (control == null) return;

        var ToolTip = $get(productsTabtooltipdiv);
        var senderPos = GetTopLeft(document.getElementById(senderID));
        toolTipheight = control.height;
        ToolTip.style.top = senderPos.Top + topOffset + 'px';
        ToolTip.style.left = senderPos.Left + leftOffset + 'px';
        ToolTip.style.visibility = 'visible';
    }
    catch (e) { }
}

var manageAssessmentsToolTipDiv = "divManageAssessmentsToolTip";
var manageAssessmentsToolTipSL = "slManageAssessmentsToolTip";

function HideManageAssessmentToolTip() {
    if (manageAssessmentsToolTipDiv != undefined && manageAssessmentsToolTipDiv != null) {
        var productsTabToolTip = $get(manageAssessmentsToolTipDiv);
        if (productsTabToolTip != null)
            productsTabToolTip.style.visibility = 'hidden';
    }
}

function ShowManageAssessmentToolTip(senderID, topOffset, leftOffset) {
    try {

        leftOffset = 0;
        var control = $get(manageAssessmentsToolTipSL);
        if (control == null) return;

        var ToolTip = $get(manageAssessmentsToolTipDiv);
        var senderPos = GetTopLeft(document.getElementById(senderID));
        toolTipheight = control.height;
        ToolTip.style.top = senderPos.Top + topOffset + 'px';
        ToolTip.style.left = senderPos.Left + leftOffset + 'px';
        ToolTip.style.visibility = 'visible';
    }
    catch (e) { }
}

var manageTutorialsToolTipDiv = "divTutorialsToolTip";
var manageTutorialsToolTipSL = "slManageTutorialsToolTip";

function HideManageTutorialToolTip() {
    if (manageTutorialsToolTipDiv != undefined && manageTutorialsToolTipDiv != null) {
        var productsTabToolTip = $get(manageTutorialsToolTipDiv);
        if (productsTabToolTip != null)
            productsTabToolTip.style.visibility = 'hidden';
    }
}

function ShowManageTutorialToolTip(senderID, topOffset, leftOffset) {
    try {

        leftOffset = 120;
        var control = $get(manageTutorialsToolTipSL);
        if (control == null) return;

        var ToolTip = $get(manageTutorialsToolTipDiv);
        var senderPos = GetTopLeft(document.getElementById(senderID));
        toolTipheight = control.height;
        ToolTip.style.top = senderPos.Top + topOffset + 'px';
        ToolTip.style.left = senderPos.Left + leftOffset + 'px';
        ToolTip.style.visibility = 'visible';
    }
    catch (e) { }
}

function GetTopLeft(elm) {

    var originElm = elm;
    var e = elm;
    var x, y, yy = 0;

    //set x to elm’s offsetLeft
    x = e.offsetLeft;

    //set y to elm’s offsetTop
    y = e.offsetTop;

    //set elm to its offsetParent
    e = e.offsetParent;

    //use while loop to check if elm is null
    // if not then add current elm’s offsetLeft to x
    //offsetTop to y and set elm to its offsetParent
    while (e != null && e.tagName.toUpperCase() != "HTML") {
        x = parseInt(x) + parseInt(e.offsetLeft);
        y = parseInt(y) + parseInt(e.offsetTop);

        e = e.offsetParent;
    }

    e = originElm.parentNode;
    while (e != null && e.tagName.toUpperCase() != "HTML") {
        if (e.tagName.toUpperCase() == "DIV")
            yy = yy + e.scrollTop;

        e = e.parentNode;
    }
    y = y - yy;

    return { Top: y, Left: x };
}



//------------------------- elearning assessment grids  ---------------------------------//start

function ShowInfoToolTip(sender, top, left, displayText) {
    //alert("sender" + sender + top + "   " + left + "   " + displayText);

    var divid = 'divAssessmentInfoPopup';
    var slid = 'slAssessmentInfoPopup';

    OpenInfoToolTip(divid, slid, sender, top, left, displayText);
}

function HideInfoToolTip() {
    var PopUp = $get('divAssessmentInfoPopup');
    //PopUp.style.visibility = 'hidden';
    PopUp.style.left = '-500px';
}


function OpenInfoToolTip(divID, slID, sender, topOffset, leftOffset, displayText) {
    //var senderPos = GetTopLeft(sender);
    //var addedSpaceCount = 9;
    //var standardPixelWidthMultiplier = 8;
    //var PopUp = $get(divID);

    //PopUp.style.width = ((displayText.length * standardPixelWidthMultiplier) + addedSpaceCount) + 'px';
    //PopUp.style.height = (45) + 'px';


    //PopUp.style.top = (senderPos.Top + topOffset) + 'px';
    //PopUp.style.left = (senderPos.Left + leftOffset) + 'px';

    //var control = $get(slID);
    //control.Content.SilverlightToolTip.DisplayText = displayText;
    //PopUp.style.visibility = 'visible';
}

//------------------------- elearning assessment grids  ---------------------------------//end