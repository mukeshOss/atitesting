//Functions added for Primary Menu
function MM_preloadImages() { //v3.0
    var d = document; if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; }
    }
}

function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_findObj(n, d) { //v4.01
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}

function SayHello() {
 
}

function CheckPercentValue(percentage, selectAllTopics, selectSection, chkInclude, ErrorMsg, gvFR, visibleStates) {
    if (selectAllTopics.checked == true) { return true; }
    else {
        if (percentage == '') {
            for (var i = 0; i < lblPercentageValue.length; i++)
                $get(lblPercentageValue[i].RowID).style.display = '';
            //$get(lblPercentageValue[i].CheckBox).checked = true;
            ValidateMsg(ErrorMsg); 

            //$get(lblRequired).style.visibility = true;
            
        }
        else {
            var gvFocusedReview = gvFR;
            var intRows = gvFocusedReview.rows.length - 1;
            selectedassessments=[];
            selectedDataContextid=[];
             for(var intCount = 0;  intCount < intRows; intCount++)
             {
                 var row = gvFocusedReview.rows(intCount);
                 if (row.getElementsByTagName("Input"))
                     row.getElementsByTagName("Input")[0].checked = false;
             }

               
               var vStates = visibleStates;
               vStates.value = '';
            for (var i = 0; i < lblPercentageValue.length; i++) {
                var e = $get(lblPercentageValue[i].CheckBox);
                var level = e.getAttribute('checkIdentifier').split('checkboxCol:level')[1];
                var level1 = level.substring(0, 1);
                
                if ($get(lblPercentageValue[i].RowID) != null) {
                    
                    if (parseFloat(lblPercentageValue[i].Value) > percentage && level1 != 1) {
                        $get(lblPercentageValue[i].RowID).style.display = 'none';
                        $get(lblPercentageValue[i].RowID).visible = false;
                        vStates.value = vStates.value + 'false' + ',';
                    }
                    else {
                        $get(lblPercentageValue[i].RowID).style.display = '';
                        $get(lblPercentageValue[i].RowID).visible = true;
                        vStates.value = vStates.value + 'true' + ',';
                        chkInclude.checked = true;
                    }
                }
                if (e != null) {
                    e.checked = true;
                    SetSelectedAssessments(e, e.FocusedReviewQuestions, e.DataContextIds);
                   
                }
            }
            
        }
    }
            
    return false;

}




// IDs 1-7 are used for the Faculty
// IDs 8-13 are used fro the Student

function GetPage(i) {    
    var selMenuItem = document.getElementById("ctl00_selMenu");
    var str = "";

    // ATING-3227/3273:Security Issue - Get EditProfile.aspx page behind SSL
    //Changeed this method for the security ssl
    if (i == 12) {
        pathArray = document.location.pathname.split('/');
         str = "https://";
        if (document.location.host.indexOf(":") > 0) {
            str += document.location.host.substring(0, document.location.host.indexOf(':')) + "/" + pathArray[1];
        }
        else {
            str += document.location.host + "/" + pathArray[1];
        }        
    }
    else {
        pathArray = document.location.pathname.split('/');
         str = "http://";
        if (document.location.host.indexOf(":") > 0) {
            str += document.location.host.substring(0, document.location.host.indexOf(':')) + "/" + pathArray[1];
        }
        else {
            str += document.location.host + "/" + pathArray[1];
        }        
    }

    if (selMenuItem && selMenuItem.value == i) {  //ATI Plan, ATING-947 - JDJT - added verification that selMenuItem is not null
        //do nothing
    }
    else {
        if (selMenuItem) { selMenuItem.value = i; }   //ATI Plan, ATING-947 - JDJT - added verification that selMenuItem is not null
        switch (i) {
            case 1:
                document.location.href=str+ "/Faculty/FacultyLanding.aspx?id=1";              
                break;
            case 2:
                document.location.href = str + "/Faculty/ProctorManageAssessments.aspx?id=2";                
                break;
            case 3:
                document.location.href = str + "/Reports/ViewResults.aspx?id=3";                
                break;
            case 4:
                document.location.href = str + "/Faculty/ManageStudentGroups.aspx?id=4";                
                break;
            case 5:
                document.location.href = str + "/General/Demos.aspx?id=5";                
                break;
            case 6:
                document.location.href = str + "/CMAP/CMAPTermsAndCondition.aspx?id=6";                
                break;
            case 7:
                document.location.href = str + "/Faculty/FacultyLanding.aspx?academy=1";
                break;
            case 8:
                document.location.href = str + "/Student/StudentHome.aspx?id=8";                
                break;
            case 10:
                document.location.href = str + "/Student/MyResultsRemediation.aspx?id=10";                
                break;
            case 11:
                document.location.href = str + "/Student/MySigmaThetaTauStudent.aspx?id=11";                
                break;
            case 12:
                document.location.href = str + "/Student/PaymentsStudents.aspx?id=12";
                break;
            case 13:
                document.location.href = str + "/General/Demos.aspx?id=13";               
                break;
            case 14:
                document.location.href = str + "/Student/Myelearning.aspx?id=14";               
                break;
            case 15:
                document.location.href = str + "/Faculty/ManageLearningModules.aspx?id=15";              
                break;
            case 16:
                document.location.href = str + "/Faculty/FacultyLanding.aspx?id=1";                
                break;
            case 17:
                document.location.href = str + "/Student/MyCEs.aspx?id=17";               
                break;
            case 18:
                document.location.href = str + "/Faculty/Products.aspx?id=18";                
                break;
            //ATI Plan, ATING-947, 2012/07/26 JDJT - Adding controls for new help page
            case 19:
                document.location.href = str + "/General/Help.aspx?id=19";                
                break;
            default:
                document.location.href = str + "/Faculty/FacultyLanding.aspx?id=1";                
        }
    }  


}

function CloseActiveTabSelected(btn) {

    var btnToClick = 'ctl00_contentPlaceHolderBody_CloseAssessments1_' + btn;
    var buton = document.getElementById(btnToClick);
    buton.click();

}

function ActiveAssessmentTabSelected(btn) {
    //    alert("BA");
    var btnToClick = 'ctl00_contentPlaceHolderBody_BuildAssessments1_' + btn;
    var button = document.getElementById(btnToClick);
    //    alert(button.outerHTML);
    button.click();
}

function registerView(topLevelViewName) {

    if (RequiresConfirmBeforeNavigation) {
        var answer = confirm(ConfirmationMessage);
        if (EvalScript != '') {
            eval(EvalScript);
            setEvalScript('');
        }
        if (!answer) {
            if (ActivityBarUndoScript != '') {
                eval(ActivityBarUndoScript);
                setActivityBarUndoScript('');
            }
            return false;
        }

    }
    setRequiresConfirmBeforeNavigation('');
    setActivityBarUndoScript('');
    var hidViewName = document.getElementById('ctl00_contentPlaceHolderBody_hdnViewName');
    hidViewName.value = topLevelViewName;
    return true;
}


//functions   for dynamic list

function openWindow(url) {
    if (url + '' != '')
        window.open(url, "Test");
}

function openModalDialog(sender, name, phone, email) {

    ShowPopup(sender, 0, 0, name, phone, email);
}

function redirectWindow(url) {
    location.href = url;
}

//*****************End of Dynamic List functions **********


function CloseAssessment() {

    var hdnElement = document.getElementById("ctl00_contentPlaceHolderBody_hdnSelectedItems");
    var chk = document.getElementsByTagName("input");
    var flag = false;
    for (i = 0; i < chk.length; i++) {
        if (chk[i].type == "checkbox") {

            if (chk[i].checked) {
                flag = true;
                var siblingCount = chk[i].parentNode.childNodes.length;
                for (innerLoop = 0; innerLoop < siblingCount; innerLoop++) {
                    if (chk[i].parentNode.childNodes[innerLoop].type == "hidden") {
                        if (hdnElement.value == "") {
                            hdnElement.value = hdnElement.value + chk[i].parentNode.childNodes[innerLoop].value;
                        }
                        else
                            hdnElement.value = hdnElement.value + "," + chk[i].parentNode.childNodes[innerLoop].value;

                    }
                }
            }

        }

    }
    if (flag) {
        return confirm("Are you sure that you want to Close access to the selected assessments?");
    }
    else {

        return false;
    }
}


function open_win(url_add) {
    window.open(url_add, 'PurchaseDetails', 'width=600,height=500,menubar=yes,status=yes,resizable=1,location=yes,toolbar=yes,scrollbars=yes');
}

function HidePopup() {
    var ToolTip = $get(popupdiv);
    //    ToolTip.style.visibility = 'hidden';
    ToolTip.style.left = '-500px';
}

var popupdiv = "divContactPopup";
var popupSL = "SLContactPopup";
var popupheight = 170;

function ShowPopup(sender, topOffset, leftOffset, name, phone, email) {

    var senderPos = GetTopLeft(sender);
    var ToolTip = $get(popupdiv);


    ToolTip.style.top = (senderPos.Top + topOffset - popupheight) + 'px';
    ToolTip.style.left = (senderPos.Left + leftOffset) + 'px';

    var control = $get(popupSL);
    if (typeof control.Content.SilverlightPopup == 'undefined'
        || typeof control.Content.SilverlightPopup == 'unknown') {
        control.onload = function(s, a) {
            control.Content.SilverlightPopup.Title = "Contact:";
            control.Content.SilverlightPopup.ContactName = name;
            control.Content.SilverlightPopup.ContactPhone = phone;
            control.Content.SilverlightPopup.ContactEmail = email;
            control.Content.SilverlightPopup.Closed = function(s, e) { HidePopup(); }
        };
    }
    else {
        control.Content.SilverlightPopup.Title = "Contact:";
        control.Content.SilverlightPopup.ContactName = name;
        control.Content.SilverlightPopup.ContactPhone = phone;
        control.Content.SilverlightPopup.ContactEmail = email;
        control.Content.SilverlightPopup.Closed = function(s, e) { HidePopup(); }
    }
    ToolTip.style.visibility = 'visible';

}


function VerifyNumericInput(evt) {
    if (document.all) {
        if ((evt.keyCode < 48) || (evt.keyCode > 57)) {
            if ((evt.keyCode == 8) || (evt.keyCode == 46)) {
                return (true);
            }
            return (false);
        }
    }
    else {

        if ((evt.charCode < 48 || evt.charCode > 57) && (evt.keyCode != 36) && (evt.keyCode != 35) &&
				!(evt.keyCode == 8 || evt.keyCode == 9 || evt.charCode == 46 || evt.keyCode == 37 || evt.keyCode == 38 || evt.keyCode == 39 || evt.keyCode == 40) &&
				!(evt.ctrlKey && (evt.charCode == 86 || evt.charCode == 118 || evt.charCode == 67 || evt.charCode == 99 || evt.charCode == 88 || evt.charCode == 120 || evt.charCode == 122 || evt.charCode == 90 || evt.charCode == 121 || evt.charCode == 89))) {
            return (false);
        }
    }

    return (true);
}


function PrintSection(e) {

    var body = document.getElementById(ctrlBodyClientID);
    var receipt = document.getElementById(divReceiptClientID);
    var children = body.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].className)
            children[i].className = (children[i].className + ' noprint');
    }

    if (document.getElementById('divreceipt') == null) {
        var divmessage = document.createElement('div');
        divmessage.innerHTML = receipt.innerHTML;
        divmessage.align = 'center';
        divmessage.className = 'noscreen';
        divmessage.id = 'divreceipt';
        body.appendChild(divmessage);
    }
    else {
        document.getElementById('divreceipt').className = 'noscreen';
    }

    if (window.event) {
        window.event.returnValue = false;
        window.event.cancelBubble = true;
    }
    else if (e) {
        e.stopPropagation();
        e.preventDefault();
    }

    window.print();
    return false;
}
function ValidateAccomodation(message) {
    if(AccomodationArray != undefined || AccomodationArray != null) 
    {
        for (var i = 0; i < AccomodationArray.length; i++) {
        var txt = $get(AccomodationArray[i]);
        if (txt != null) {
                var TimeValue = txt.value;
                if ((parseFloat(TimeValue) > 100) ||
				(parseFloat(TimeValue) < 1.0) ||
				(TimeValue.split(".").length > 2) ||
				((TimeValue.indexOf(".") != -1) &&
				(TimeValue.substring(TimeValue.indexOf(".") + 1, TimeValue.length).length > 1))) {

                    ValidationBehaviorCallBack = function() {
                        txt.select();
                        txt.focus();
                    };
                    ValidateMsg(message);
                    return false;

                } 
            }
        }

   return true;
    }


 }


//function ValidateAccommodationFields(txt, errMsg) {

//    if ((parseFloat(txt.value) > 100) ||
//				(parseFloat(txt.value) < 0.0) ||
//				(txt.value.split(".").length > 2) ||
//				((txt.value.indexOf(".") != -1) &&
//				(txt.value.substring(txt.value.indexOf(".") + 1, txt.value.length).length > 1))) {



//        //    if ((parseFloat(txt.value) < 1.0) ||
//        //        (parseFloat(txt.value) > 100) ||
//        //        (txt.value.split(".").length > 2) ||
//        //        ((txt.value.indexOf(".") != -1) && (txt.value.substring(txt.value.indexOf(".") + 1, txt.value.length).length > 1))))
//        //        //((txt.value.indexOf(".") != -1) && (txt.value.substring(0, txt.value.indexOf(".")).length > 3)))
//        //        {
//        ValidationBehaviorCallBack = function() {
//            txt.select();
//            txt.focus();
//        };
//        ValidateMsg(errMsg);
//        //alert(errMsg);
//        //txt.value="";
//       
//        return false;
//    }
//}
/* Resize panel height according to grid height*/
function GridPanelSettings(GridID, PanelID) {


    if ($get(GridID) != null) {
        var Gridobj = $get(GridID);        
        var Panelobj = $get(PanelID);

        if (Gridobj.offsetHeight <= Panelobj.offsetHeight) {
            Panelobj.style.height = '260px';
            //Gridobj.style.height = Panelobj.offsetHeight + 'px';
            Panelobj.style.overflowY = 'scroll';
        }
        else {
            Panelobj.style.overflowY = 'scroll';
        }
    }
    else {
        if ($get(PanelID) != null) {
            $get(PanelID).style.height = '25px';
        }
    }
}



GEvent = function() {
    this.handlers = new Array();
}

GEvent.prototype.Subscribe = function(f) {

    this.handlers.push(f);
}

GEvent.prototype.UnSubscribe = function(f) {

    //TODO
}

GEvent.prototype.Fire = function() {

    for (var i = 0; i < this.handlers.length; i++) {
        try {
            this.handlers[i]();
        }
        catch (e) { }
    }
}

var GlobalEvent = new GEvent();

/** Begin CAA #3 Integration **/
/** Confirmation During Navigation Functionality **/
var ConfirmationMessage = '';
var RequiresConfirmBeforeNavigation = false;
function setRequiresConfirmBeforeNavigation(message) {
    if (message.toString().length > 0) {
        ConfirmationMessage = message.toString();
        RequiresConfirmBeforeNavigation = true;
    }
    else
        RequiresConfirmBeforeNavigation = false;
}

var EvalScript = '';
function setEvalScript(scriptString) {
    EvalScript = scriptString;
}

var ActivityBarUndoScript = '';
function setActivityBarUndoScript(scriptString) {
    if (RequiresConfirmBeforeNavigation)
        ActivityBarUndoScript = scriptString;
}

/** Override Navigation using Confirmation Logic **/
function GetPageWithConfirmation(targetImage, imageURL, PageID) {
    if (RequiresConfirmBeforeNavigation) {
        var answer = confirm(ConfirmationMessage);
        if (EvalScript != '') {
            eval(EvalScript);
            setEvalScript('');
        }
        if (!answer)
            return false;
    }
    setRequiresConfirmBeforeNavigation('');
    MM_swapImage(targetImage, '', getImageURL(imageURL), 1);
    GetPage(PageID);
}

var ProceedNavigation = false;
function NavigateViaLink(NavigationLink) {
    var answer = true;
    if (RequiresConfirmBeforeNavigation) {
        answer = confirm(ConfirmationMessage);
        if (EvalScript != '') {
            eval(EvalScript);
            setEvalScript('');
        }
    }
    if (answer) {
        ProceedNavigation = true;
        setRequiresConfirmBeforeNavigation('');
        document.location.href = NavigationLink;
    }
    else {
        ProceedNavigation = false;
    }
}
/** End CAA #3 Integration **/

function getSiteRoot() {
    var url = location.protocol + '//' + location.host;
    return url;
}

		
		