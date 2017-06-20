

var popUpdiv = "divPopUp";
var popUpSL = "slShowHidePopup";
var popUpheight = 150;

function IsIE() {
    if (navigator.appName == 'Microsoft Internet Explorer' || navigator.appName.match('Netscape'))
        return true;
    else
        return false;
}

function DeleteUserFromRoster(btn) {
    $("#hdnDeletingButtonId").val(btn.id);
    $("#divViewRosterDelete").css("display", "block");
    $("#blkRosterModal").addClass('blkViewRosterBackground');

    return false;
};
function ConfirmViewRosterDelete() {
    var userId = $("#hdnDeletingButtonId").val();
    var productId = $("span[id$=lblProductIdValue]").text();
    $.ajax({
        type: 'POST',
        data: '{"userID":' + userId + ',"productID":"' + productId + '"}',
        url: '../Faculty/AssessmentService.asmx/DeleteStudentFromRoster',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: OnDeleteUserFromRosterSuccess(userId),
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('jqXHR,textStatus,errorThrown', jqXHR, textStatus, errorThrown);
        }
    });
    return false;
};

function RejectViewRosterDelete() {
    $("#divViewRosterDelete").css("display", "none");
    $("#blkRosterModal").removeClass('blkViewRosterBackground');
}

function HideSLPopup() {
    var PopUp = $get(popUpdiv);
    //PopUp.style.visibility = 'hidden';
    PopUp.style.left = '-2000px';
}

//--------------------------------Allow Acess Popup-------------------//
//-------------------------Proctored PreviewWindow-------------------//
function ShowPAPreview(url, ispreview, ldbEnabled, loginUrl) {

    if (ldbEnabled == "allowed") {
        document.getElementById('ctl00_contentPlaceHolderBody_aLockdown').click();
        setTimeout("window.location.href='../Student/LDBLogin.aspx'?securetoken=" + loginUrl, 20000);
        //setTimeout(loginUrl, 20000);
        return false;
    }

    var params = 'top=0,left=0,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,modal=yes';
    params += ',width=' + screen.width;
    params += ',height=' + screen.height;
    params += ',fullscreen=yes';
    var queryStr = url + '&rldbsv=1&rldbqn=1&IsPreview=' + ispreview;
    var newwin = window.open(queryStr, 'Assessment', params);
    //alert('ShowPAPreview');
    if (!newwin) {
        //alert('ShowPAPreview->!newwin');
        ValidateMsg("Please select OK to begin your Proctored Assessment.");
        $get("ctl00_btnOK").onclick = function () { ShowPAPreview(queryStr, ispreview, ldbEnabled, loginUrl); HideError(); return false; };
        return;
    }
    else {
        $get("ctl00_btnOK").onclick = function () { HideError(); return false };
    }
    if (window.focus) {
        newwin.focus();
    }
}


function ShowProctoredAssessmentPreview(url, ispreview, ldbEnabled) {

    if (ldbEnabled == "allowed") {
        //document.getElementById('ctl00_contentPlaceHolderBody_aLockdown').click();
        document.getElementById('ctl00_contentPlaceHolderBody_ucELearning_ucMyProctoredAssessments_aSecureBrowser').click();
        setTimeout("window.location.href='../Student/LDBLogin.aspx'", 20000);
        //setTimeout(loginUrl, 20000);
        return false;
    }

    var params = 'top=0,left=0,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,modal=yes';
    params += ',width=' + screen.width;
    params += ',height=' + screen.height;
    params += ',fullscreen=yes';
    var queryStr = url + '&rldbsv=1&rldbqn=1&IsPreview=' + ispreview;
    var newwin = window.open(queryStr, 'Assessment', params);
    //alert('ShowProctoredAssessmentPreview');
    if (!newwin) {
        //alert('ShowProctoredAssessmentPreview->!newwin');
        ValidateMsg("Please select OK to begin your Proctored Assessment.");
        $get("ctl00_btnOK").onclick = function () { ShowProctoredAssessmentPreview(queryStr, ispreview, ldbEnabled); HideError(); return false; };
        return;
    }
    else {
        $get("ctl00_btnOK").onclick = function () { HideError(); return false };
    }
    if (window.focus) {
        newwin.focus();
    }
}

function ShowSLPopup(sender, topOffset, leftOffset, title, content, loc) {
    var senderPos = GetTopLeft(sender);
    var PopUp = $get(popUpdiv);

    PopUp.style.top = (senderPos.Top + topOffset - popUpheight) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';

    var control = $get(popUpSL);


    control.Content.SilverlightPopup.Title = title;


    control.Content.SilverlightPopup.Message = content;
    control.Content.SilverlightPopup.Saved = function (sender, e) {

        control.Content.SilverlightPopup.IsMessageSelected = false;
        control.Content.SilverlightPopup.IsLock = true;
        HideSLPopup();
    };

    control.Content.SilverlightPopup.Canceled = function (sender, e) {
        control.Content.SilverlightPopup.IsMessageSelected = false;
        control.Content.SilverlightPopup.IsLock = true;
        HideSLPopup();
    };
    PopUp.style.visibility = 'visible';

}



//------------------------- Cut Score ---------------------------------//
function ShowCutScorePopup(sender, top, left, title, loc, institutionpurchaseid, batchid, tutorialid, institutionid, btnid) {
    var divid = 'divCutScorePopup';
    var slid = 'slCutScorePopup';
    var control = $get(slid);
    var updatefield = sender.getAttribute("CutScore");
    Saved = function (s, e) {
        sender.innerHTML = s.CutScore;
        if (s.IsMessageSelected) {
            var btn = $get(btnid);
            btn.click();
        }
        sender.setAttribute("CutScore", s.CutScore);
        //alert("Saved");
        control.Content.SilverlightPopup.Reset();
        ClosePopup(divid);
    }
    Canceled = function (s, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    OpenCutScorePopup(divid, slid, sender, top, left, title, '', loc, 150, Saved, Canceled, institutionpurchaseid, batchid, updatefield, 4, tutorialid, institutionid);
}

function ShowCutScoreRationalesSinglePopup(sender, top, left, title, loc) {
    var divid = 'divCutScoreSinglePopup';
    var slid = 'slCutScoreSinglePopup';
    var control = $get(slid);
    Saved = function (sender, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    Canceled = function (sender, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    OpenCutScorePopup(divid, slid, sender, top, left, title, '', loc, 100, Saved, Canceled);
}


function ShowCutScoreSinglePopup(sender, top, left, title, loc) {
    var divid = 'divCutScoreSinglePopup';
    var slid = 'slCutScoreSinglePopup';
    var control = $get(slid);
    Saved = function (sender, e) { /*alert("Saved");*/control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    Canceled = function (sender, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    OpenCutScorePopup(divid, slid, sender, top, left, title, '', loc, 100, Saved, Canceled);
}
function OpenCutScorePopup(divid, slid, sender, topOffset, leftOffset, title, content, loc, height, fnSavedcallback, fnCanceledcallback, institutionpurchaseid, batchid, updatefield, updateon, tutorialid, institutionid) {
    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divid);
    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';
    var control = $get(slid);
    control.Content.SilverlightPopup.Title = title;
    //control.Content.SilverlightPopup.Message = content;
    control.Content.SilverlightPopup.CutScore = updatefield;
    control.Content.SilverlightPopup.BatchID = batchid;
    control.Content.SilverlightPopup.InstitutionPurchaseID = institutionpurchaseid;
    control.Content.SilverlightPopup.UpdateOn = updateon;
    control.Content.SilverlightPopup.TutorialID = tutorialid;
    control.Content.SilverlightPopup.InstitutionID = institutionid;
    control.Content.SilverlightPopup.SetCutScore();
    control.Content.SilverlightPopup.Saved = fnSavedcallback;
    control.Content.SilverlightPopup.Canceled = fnCanceledcallback;
    PopUp.style.visibility = 'visible';
}

//----------------------Show Hide Popup ------------------------------//
function ShowHideRationalesPopup(sender, top, left, title, content, loc, institutionpurchaseid, batchid, tutorialid, institutionid, btnid) {
    var divid = 'divShowHidePopUp';
    var slid = 'slShowHidePopUp';
    var control = $get(slid);
    var updatefield = sender.getAttribute("IsRational");
    Saved = function (s, e) {
        if (s.IsLock == true) {
            sender.src = sender.src.replace("button-REDLock.png", "button-GREENLock.png");
            sender.setAttribute("IsRational", "true");
        }
        else {
            sender.src = sender.src.replace("button-GREENLock.png", "button-REDLock.png");
            sender.setAttribute("IsRational", "false");
        }

        if (s.IsMessageSelected) {
            var btn = $get(btnid);
            btn.click();
        }


        //alert("Saved");
        control.Content.SilverlightPopup.Reset();
        ClosePopup(divid);

    }
    Canceled = function (s, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    OpenShowHidePopupEnableDisableFeature(divid, slid, sender, top, left, title, '', loc, 150, Saved, Canceled, institutionpurchaseid, batchid, updatefield, 1, tutorialid, institutionid);

}
function ShowThinkingFeaturesPopup(sender, top, left, title, content, loc, institutionpurchaseid, batchid, tutorialid, institutionid, btnid) {
    var divid = 'divShowHidePopUp';
    var slid = 'slShowHidePopUp';
    var control = $get(slid);
    var updatefield = sender.getAttribute("IsThinkingFeature");
    Saved = function (s, e) {
        if (s.IsLock == true) {
            sender.src = sender.src.replace("button-REDLock.png", "button-GREENLock.png");
            sender.setAttribute("IsThinkingFeature", "true");
        }
        else {
            sender.src = sender.src.replace("button-GREENLock.png", "button-REDLock.png");
            sender.setAttribute("IsThinkingFeature", "false");
        }

        if (s.IsMessageSelected) {
            var btn = $get(btnid);
            btn.click();
        }
        control.Content.SilverlightPopup.Reset();
        ClosePopup(divid);

    }
    Canceled = function (s, e) { ClosePopup(divid); }
    OpenShowHidePopupEnableDisableFeature(divid, slid, sender, top, left, title, '', loc, 150, Saved, Canceled, institutionpurchaseid, batchid, updatefield, 2, tutorialid, institutionid);
}
function ShowEnableDisableScoringPopup(sender, top, left, title, content, loc, institutionpurchaseid, batchid, tutorialid, institutionid, btnid) {
    var divid = 'divShowHidePopUp';
    var slid = 'slShowHidePopUp';
    var control = $get(slid);
    var updatefield = sender.getAttribute("IsScoring");
    Saved = function (s, e) {
        if (s.IsLock == true) {
            sender.src = sender.src.replace("button-REDLock.png", "button-GREENLock.png");
            sender.setAttribute("IsScoring", "true");
        }
        else {
            sender.src = sender.src.replace("button-GREENLock.png", "button-REDLock.png");
            sender.setAttribute("IsScoring", "false");
        }

        if (s.IsMessageSelected) {
            var btn = $get(btnid);
            btn.click();
        }


        //alert("Saved");
        control.Content.SilverlightPopup.Reset();
        ClosePopup(divid);

    }
    Canceled = function (s, e) { ClosePopup(divid); }
    OpenShowHidePopupEnableDisableFeature(divid, slid, sender, top, left, title, '', loc, 150, Saved, Canceled, institutionpurchaseid, batchid, updatefield, 3, tutorialid, institutionid);
}
function OpenShowHidePopupEnableDisableFeature(divid, slid, sender, topOffset, leftOffset, title, content, loc, height, fnSavedcallback, fnCanceledcallback, institutionpurchaseid, batchid, updatefield, updateon, tutorialid, institutionid) {

    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divid);
    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';
    var control = $get(slid);
    control.Content.SilverlightPopup.Title = title;
    //control.Content.SilverlightPopup.Message = content;
    control.Content.SilverlightPopup.Saved = fnSavedcallback;
    control.Content.SilverlightPopup.Canceled = fnCanceledcallback;
    control.Content.SilverlightPopup.IsLock = updatefield;
    control.Content.SilverlightPopup.BatchID = batchid;
    control.Content.SilverlightPopup.InstitutionPurchaseID = institutionpurchaseid;
    control.Content.SilverlightPopup.UpdateOn = updateon;
    control.Content.SilverlightPopup.TutorialID = tutorialid;
    control.Content.SilverlightPopup.InstitutionID = institutionid;
    PopUp.style.visibility = 'visible';

}

//---------------------------------------------------------------------//

function ShowHideRationalesSinglePopup(sender, top, left, title, loc, isLock, batchID) {
    var divid = 'divShowHideSinglePopUp';
    var slid = 'slShowHideSinglePopUp';
    Saved = function (sender, e) { /*alert("Saved");*/ClosePopup(divid); }
    Canceled = function (sender, e) { ClosePopup(divid); }
    OpenShowHidePopup(divid, slid, sender, top, left, title, '', loc, 100, Saved, Canceled, isLock, batchID);
}

function ShowHideSinglePopup(sender, top, left, title, loc, batchID, isProctored) {
    var divid = 'divShowHideSinglePopUp';
    var slid = 'slShowHideSinglePopUp';
    var isLock = sender.getAttribute("IsLock");
    Saved = function (s, e) {

        if (isProctored) {
            if (s.IsLock) {
                sender.src = sender.src.replace("button-GREENLock.png", "button-REDLock.png");
                sender.setAttribute("IsLock", "true");
            }
            else {
                sender.src = sender.src.replace("button-REDLock.png", "button-GREENLock.png");
                sender.setAttribute("IsLock", "false");
            }

            ClosePopup(divid);
        }
        else {
            if (s.IsLock) {
                sender.src = sender.src.replace("button-REDLock.png", "button-GREENLock.png");
                sender.setAttribute("IsLock", "true");
            }
            else {
                sender.src = sender.src.replace("button-GREENLock.png", "button-REDLock.png");
                sender.setAttribute("IsLock", "false");
            }
            ClosePopup(divid);
        }

    }
    Canceled = function (s, e) { ClosePopup(divid); }
    GlobalEvent.Subscribe(function () { ClosePopup(divid); });

    OpenShowHidePopup(divid, slid, sender, top, left, title, '', loc, 100, Saved, Canceled, isLock, batchID, isProctored);
}

function OpenShowHidePopup(divid, slid, sender, topOffset, leftOffset, title, content, loc, height, fnSavedcallback, fnCanceledcallback, isLock, batchID, isProctored) {

    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divid);

    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';

    var control = $get(slid);

    control.Content.SilverlightPopup.Title = title;

    //control.Content.SilverlightPopup.Message = content;

    control.Content.SilverlightPopup.Saved = fnSavedcallback;

    control.Content.SilverlightPopup.Canceled = fnCanceledcallback;
    control.Content.SilverlightPopup.IsLock = isLock;
    control.Content.SilverlightPopup.BatchID = batchID;
    control.Content.SilverlightPopup.IsProctored = isProctored;
    control.Content.SilverlightPopup.OpenPopup();
    PopUp.style.visibility = 'visible';

}

//---------------------------Assessment Assignment Popup --------------//
function ShowAssessmentAssignmentPopup(sender, topOffset, leftOffset, userID, classID, courseGroupScheduleID, courseID, courseGroupTypeID, comments, courseGroupID, batchID, courseDetailID, currentRole, btnid, mode) {

    OpenAssessmentAssignmentPopup("divAssessmentAssignmentPopup", "slAssessmentAssignmentPopup", 350, sender, topOffset, leftOffset, userID, classID, courseGroupScheduleID, courseID, courseGroupTypeID, comments, courseGroupID, batchID, courseDetailID, currentRole, btnid, mode);
}

function OpenAssessmentAssignmentPopup(divID, slID, height, sender, topOffset, leftOffset, userID, classID, courseGroupScheduleID, courseID, courseGroupTypeID, comments, courseGroupID, batchID, courseDetailID, currentRole, btnid, mode) {

    var senderPos = GetTopLeft(sender);

    var PopUp = $get(divID);

    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';

    var control = $get(slID);
    var date = sender.getAttribute("Date");
    var timeRequired = sender.getAttribute("TimeRequired");
    var courseName = sender.getAttribute("CourseName");
    control.Content.SilverlightPopup.UserID = userID;
    control.Content.SilverlightPopup.RoleID = currentRole;
    control.Content.SilverlightPopup.ClassID = classID;
    control.Content.SilverlightPopup.CourseID = courseID;
    control.Content.SilverlightPopup.BatchID = batchID;
    control.Content.SilverlightPopup.CourseGroupScheduleID = courseGroupScheduleID;
    control.Content.SilverlightPopup.TimeRequired = timeRequired;
    control.Content.SilverlightPopup.DueDate = date;
    control.Content.SilverlightPopup.CourseDetailID = courseDetailID;
    control.Content.SilverlightPopup.CourseName = courseName;
    control.Content.SilverlightPopup.Comments = comments;
    control.Content.SilverlightPopup.Title = mode;
    control.Content.SilverlightPopup.PopulateCourses();
    control.Content.SilverlightPopup.Scheduled = function (sender, e) {

        //    sender.setAttribute("Date", s.DueDate);
        //    sender.setAttribute("TimeRequired", s.TimeRequired);
        //    sender.setAttribute("CourseName", s.CourseName);
        //    sender.innerHTML = s.DueDate + ' ' + s.TimeRequired + ' ' + s.CourseName;
        btn = $get(btnid);

        ClosePopup(divID); btn.click();
    };

    control.Content.SilverlightPopup.Canceled = function (sender, e) {
        ClosePopup(divID);
    };
    PopUp.style.visibility = 'visible';

}

//---------------------------------------------------------------------//

function ShowTestingSchedulePopup(sender, topOffset, leftOffset, userID, classID, courseGroupScheduleID, courseID, courseGroupTypeID, comments, courseGroupID, batchID, courseDetailID, currentRole, btnid, mode) {
    OpenPopup("divTestingSchedulePopup", "slTestingSchedulePopup", 295, sender, topOffset, leftOffset, userID, classID, courseGroupScheduleID, courseID, courseGroupTypeID, comments, courseGroupID, batchID, courseDetailID, currentRole, btnid, mode);
}

var ShowTestingScheduleControl = null;
function ShowTestingScheduleProductsPopup(sender, topOffset, leftOffset, userID, classID, courseGroupScheduleID, courseID, courseGroupTypeID, comments, courseGroupID, batchID, courseDetailID, currentRole, btnid, mode, isPractice) {

    ShowTestingScheduleControl = sender;
    OpenProductsPopup("divTestingScheduleProductsPopup", "slTestingScheduleProductsPopup", 295, sender, topOffset, leftOffset, userID, classID, courseGroupScheduleID, courseID, courseGroupTypeID, comments, courseGroupID, batchID, courseDetailID, currentRole, btnid, mode, isPractice);
    return false;
}

function ShowDueDatePopup(sender, topOffset, leftOffset) {
    ClosePopup("divRequiredTimePopup");
    OpenPopup("divDueDatePopup", "slDueDatePopup", 250, sender, topOffset, leftOffset);
}

function ShowRequiredTimePopup(sender, topOffset, leftOffset) {
    ClosePopup("divDueDatePopup");
    OpenPopup("divRequiredTimePopup", "slRequiredTimePopup", 200, sender, topOffset, leftOffset);
}

var TimeBetweenAttemptsSender = null;
var TimeBetweenAttemptsSenderAll = null;

function ShowTimeBetweenAttemptsPopup(sender, topOffset, leftOffset) {

    if (sender == null) return;

    var timeInHours = sender.parentNode.getAttribute("hrs");
    if (timeInHours == null) {
        timeInHours = "";
    }

    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);

    var popoverContent = ['<div><form>',
                        '<div class="modal-header">',
                        '<div class="modal-title text-ati-red" style><span class="make-font-bold"><p>Set Time Between Attempts</p></span></div>',
                        '</div>',
                        '<div class="modal-body">',
                            '<div class="margin-top-10"><span class="make-font-bold pull-left">Time:</span></div>',
                            '<div class="pull-left margin-bottom-10"><input id="txtTimeBetweenAttempts" name="txtTimeBetweenAttempts" maxlength="3" onkeypress="return isNumber(event)" width="20px" type="text" value="' + timeInHours + '"/> Hours</div>',
                            '<div class="modal-footer margin-top-20" style="text-align:center">',
                            '<button type="button" class="btn btn-primary pull-left" onclick="TimeBetweenAttemptsPopoverSave(txtTimeBetweenAttempts.value)" >Save</button>',
                           '<button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="$(this).closest(\'div.popover\').prev().popover(\'destroy\')">Cancel</button>',
                            '</div>',
                        '</div>',
                        '<div class="margin-top-10" style="color:#fff">__</div>',
                    '</form></div>'];




    TimeBetweenAttemptsPopoverSave = function (timeInHours) {

        TimeBetweenAttemptsSender = sender;

        if (timeInHours == "")
            timeInHours = "0";
        var minImageIcon = null;
        var minTextlabel = null;


        if (!isNaN(timeInHours)) {
            
            if (isNegative(timeInHours)) {
                //NG-1099 Add this message to UI NOT using alert
                alert('Please enter number between 0-999');
                return false;
            } 

            var childNodeElements = TimeBetweenAttemptsSender.parentNode.children;

            minImageIcon = $.grep(childNodeElements, function (e) { return e.id.toString().substring(e.id.toString().length - 25, e.id.toString().length) == "imgbtnTimeBetweenAttempts"; })[0];
            minTextlabel = $.grep(childNodeElements, function (e) { return e.id.toString().substring(e.id.toString().length - 22, e.id.toString().length) == "lblTimeBetweenAttempts"; })[0];

            TimeBetweenAttemptsSender.parentNode.setAttribute("hrs", parseInt(timeInHours, 10));
            if (timeInHours == "0") {
                minImageIcon.style.display = '';
                minTextlabel.style.display = 'none';
            }
            else {

                minImageIcon.style.display = 'none';
                minTextlabel.style.display = '';
                minTextlabel.innerText = parseInt(timeInHours, 10) + " hrs";
                minTextlabel.innerHTML = parseInt(timeInHours, 10) + " hrs";
            }

            for (i = 0; i < selectedTimeBtwAttempts.length; i++)
                if (selectedTimeBtwAttempts[i].indexOf('|' + TimeBetweenAttemptsSender.parentNode.getAttribute("BatchID")) >= 0)
                    selectedTimeBtwAttempts.splice(i, 1);

            selectedTimeBtwAttempts[selectedTimeBtwAttempts.length] = parseInt(timeInHours, 10) + '|' + TimeBetweenAttemptsSender.parentNode.getAttribute("BatchID");

            $get(hdnTimeBetAttempts).value = selectedTimeBtwAttempts.join(',');


            $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
            checkIsPageDirtyEableSaveChages();

            TimeBetweenAttemptsSender = null;

            popoverElement.popover("destroy");
            $(':image').popover("destroy");
            $('.btn').popover("destroy");
        }
    }


    DisplayPopoverTimeBetweenAttempts(popoverElement, popoverContent);

    return false;
}

function isNegative(number) {
    if (number.match(/^-\d+$/)) {
        
        return true;
    } else {
        return false;
    }
}



function DisplayPopoverTimeBetweenAttempts(popoverElement, popoverContent) {

    $(':image').popover("destroy");
    $('.btn').popover("destroy");
    $('span').popover("destroy");

    popoverElement.popover({
        html: true,
        trigger: 'manual',
        placement: 'right',
        content: popoverContent
    });

    popoverElement.popover("show");

}



function ShowTimeBetweenAttemptsAllPopup(sender, topOffset, leftOffset) {

    if (sender == null) return;

    var timeInHours = sender.parentNode.getAttribute("hrs");
    if (timeInHours == null) {
        timeInHours = "";
    }

    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);

    var popoverContent = ['<div><form>',
                        '<div class="modal-header">',
                        '<div class="modal-title text-ati-red"><span class="make-font-bold"><p>Set Time Between Attempts</p></span></div>',
                        '</div>',
                        '<div class="modal-body">',
                            '<div class="margin-top-10"><span class="make-font-bold pull-left">Time:</span></div>',
                            '<div class="pull-left margin-bottom-10"><input id="txtTimeBetweenAttempts" name="txtTimeBetweenAttempts" maxlength="3" onkeypress="return isNumber(event)" width="20px" type="text" value="' + timeInHours + '"/> Hours</div>',
                            '<div class="modal-footer margin-top-20" style="text-align:center">',
                            '<button type="button" class="btn btn-primary pull-left" onclick="TimeBetweenAttemptsAllPopoverSave(txtTimeBetweenAttempts.value)" >Save</button>',
                           '<a href="#" tabindex="0" class="pull-right margin-top-10" data-dismiss="popover" onclick="$(this).closest(\'div.popover\').prev().popover(\'destroy\')">Cancel</a>',
                            '</div>',
                        '</div>',
                         '<div class="margin-top-10" style="color:#fff">__</div>',
                    '</form></div>'];



    TimeBetweenAttemptsAllPopoverSave = function (timeInHours) {

        //var timeInHours = control.Content.SilverlightPopup.TextBoxTime;

        if (timeInHours == "")
            timeInHours = "0";

        if (isNaN(timeInHours))
            return;

        $get(hdnDefaultTimeValue).value = parseInt(timeInHours, 10);

        ClosePopup("divTimeBetweenAttemptsPopup");

        var radioButttons = $get(rdoSetTimeSelectAll);
        if (radioButttons != null) {
            //set radio to default
            if (IsIE())
                radioButttons.children[0].children[0].children[0].children[0].checked = true;
            else
                radioButttons.children[0].children[0].children[0].children[0].checked = true;
        }

        ShowConfirmSetDefaultTime();

        $(':image').popover("destroy");
        $('.btn').popover("destroy");
    };


    DisplayPopoverTimeBetweenAttempts(popoverElement, popoverContent);

    return false;
}

var attemptDefaultSender = null;
function ShowTimeBetweenAttemptsAllTestsPopup(sender, topOffset, leftOffset) {

    if (sender == null) return;

    TimeBetweenAttemptsSender = sender; // setting variable to sender value as this is being used in another function

    var timeInHours = sender.parentNode.getAttribute("hrs");
    if (timeInHours == null) {
        timeInHours = "";
    }

    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);

    var popoverContent = ['<div><form>',
                        '<div class="modal-header">',
                        '<div class="modal-title text-ati-red"><span class="make-font-bold"><p>Set Time Between Attempts</p></span></div>',
                        '</div>',
                        '<div class="modal-body">',
                            '<div class="margin-top-10"><span class="make-font-bold pull-left">Time:</span></div>',
                            '<div class="pull-left margin-bottom-10"><input id="txtTimeBetweenAttempts" name="txtTimeBetweenAttempts" maxlength="3" onkeypress="return isNumber(event)" width="20px" type="text" value="' + timeInHours + '"/> Hours</div>',
                            '<div class="modal-footer margin-top-20" style="text-align:center">',
                            '<button type="button" class="btn btn-primary pull-left" onclick="TimeBetweenAttemptsAllTestsPopoverSave(txtTimeBetweenAttempts.value)" >Save</button>',
                           '<button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="$(this).closest(\'div.popover\').prev().popover(\'destroy\')">Cancel</button>',
                            '</div>',
                        '</div>',
                         '<div class="margin-top-10" style="color:#fff">__</div>',
                    '</form></div>'];



    TimeBetweenAttemptsAllTestsPopoverSave = function (timeInHours) {

        if (timeInHours == "")
            timeInHours = "0";

        if (isNaN(timeInHours))
            return;

        $get(hdnDefaultTimeValue).value = parseInt(timeInHours, 10);

        ClosePopup("divTimeBetweenAttemptsPopup");

        var radioButttons = $get(rdoSetTimeSelectAll);
        if (radioButttons != null) {
            //set radio to default
            if (IsIE())
                radioButttons.children[0].children[0].children[0].children[0].checked = true;
            else
                radioButttons.children[0].children[0].children[0].children[0].checked = true;
        }
        SetTimeBetweenAttemptsAllTests($get(hdnDefaultTimeValue).value);

        $(':image').popover("destroy");
        $('.btn').popover("destroy");
    };


    DisplayPopoverTimeBetweenAttempts(popoverElement, popoverContent);

    return false;

}


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


function ShowRosterPopup(sender, topOffset, leftOffset, proctoredID) {
    var senderPos = GetTopLeft(sender);
    var popUp = $("div[id$='divProdMenuViewRoster']").first();
    popUp[0].style.top = (senderPos.Top + topOffset) + 'px';
    popUp[0].style.left = (senderPos.Left + leftOffset) + 'px';
    popUp.show();
    $("#blkBackgroundDiv")[0].className = "blkBackgroundClass";
    var productId = $("span[id$=lblProductIdValue]").text();
    $.ajax({
        type: 'GET',
        url: '../Faculty/AssessmentService.asmx/GetRostersByClass?productID="' + productId + '"',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: OnGetRosterByClassSuccess,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('content,status,error', jqXHR, textStatus, errorThrown)
        }
    });
    return false;

}

function OnGetRosterByClassSuccess(responseData) {
    var popUp = $("div[id$='divProdMenuViewRoster']").first();
    popUp.find("#RosterModal .rosterbody").empty();
    if (responseData.d != null) {
        $.each(responseData.d, function (item, data) {

            $("#btnExportToPdf").removeAttr("disabled");
            popUp.find("#RosterModal .rosterbody").append('<div id="user' + data.Id + '" class="row margin-top-10 margin-left-15 margin-right-15 pad-bottom-3" style="border-bottom:1px solid gray;"> ' +
                            '<div class="col-xs-4 text-left smaller" style="word-wrap: break-word;"><span  style="font-size:inherit;">' + data.Name + '</span></div>' +
                            '<div class="col-xs-6 text-left" style="word-wrap: break-word;"><span class="smaller">' + data.Email + '</span></div>' +
                            '<div class="col-xs-2"><button class="btn btn-secondary btn-xs pull-left" style="margin-bottom:3px;" type="button" id="' + data.Id + '"  onclick="DeleteUserFromRoster(this)">Delete</button></div>' +
                        '</div>');

        });
    }
    else {
        popUp.find("#RosterModal .rosterbody").append('<div class="row margin-top-10 margin-left-15 margin-right-15 pad-bottom-3" style="border-bottom:1px solid gray;">' +
                     '<div class="col-xs-12 text-left"><span class="make-font-bold">No Students found</span></div>' +
                 '</div>');
        popUp.find("#btnExportToPdf").attr("disabled", "");
    }
    // $("#lblClassName").val($("select[id$='ddlSelectClass']").val());
    $("#lblClassName").text($("select[id$='ddlSelectClass'] option[value='" + $("select[id$='ddlSelectClass']").val() + "']").text());
}

function HideRosterPopup() {
    var popUp = $("div[id$='divProdMenuViewRoster']").first();
    popUp.hide();
    $("#blkBackgroundDiv")[0].className = "";
}


function OnDeleteUserFromRosterSuccess(userId) {
    var popUp = $("div[id$='divProdMenuViewRoster']").first();
    popUp.find("div[id='user" + userId + "']").remove();
    $("#viewRosterCancel").click();

    if ($('div[id^="user"]').length == 0) {
        popUp.find("#RosterModal .rosterbody").append('<div class="row margin-top-10 margin-left-15 margin-right-15 pad-bottom-3" style="border-bottom:1px solid gray;">' +
                     '<div class="col-xs-12 text-left"><span class="make-font-bold">No Students found</span></div>' +
                 '</div>');
        popUp.find("#btnExportToPdf").attr("disabled", "");
    }
}
function ExportToPdf() {

    PopUpPrintWindow("RosterInformationList", false);
}
function PopUpPrintWindow(reporttype, isPrint) {
    var isCorrect = (reporttype == "AnswerKey") ? true : false;
    var windowParams = "toolbar=no,location=no,status=no,menubar=no,resizable=yes";
    var productId = $("span[id$=lblProductIdValue]").text();
    var reportType = "RosterInformationList";
    var url = "http://" + hostNameforViewRosterPdf + "/Report.aspx?ReportTemplate=" + reportType + "&ProductID=" + productId + "&IsCorrect=" + isCorrect + "&FileName=" + reportType + "&ReportType=PDF&quick=1&ReportName=" + reportType + "&IsPrintAssessment=" + isPrint;
    window.open(url, reporttype, windowParams);

}

function UpdateChildRow(table) {
    var row = null;
    var prodcomments = prodSchedComments.replace(/'/gi, "&#39");
    row = ShowTestingScheduleControl.parentNode.parentNode;

    var cellSpan = null;
    if (IsIE())
        cellSpan = row.cells[0].children[0];
    else
        cellSpan = row.cells[0].children[0];

    cellSpan.setAttribute("Date", prodSchedDueDate);
    cellSpan.setAttribute("Time", prodSchedTimeRequired);
    cellSpan.setAttribute("TimeRequired", prodSchedTimeRequiredString);
    cellSpan.setAttribute("CourseName", prodSchedCourseName);
    cellSpan.onclick = new Function("ShowTestingScheduleProductsPopup(this,0,-195,"
                                    + prodSchedUserID + ","
                                    + prodSchedClassId + ","
                                    + prodSchedCourseGroupScheduleID + ","
                                    + prodSchedCourseID + ","
                                    + prodSchedCourseGroupTypeID + ","
                                    + "'" + prodcomments + "',"
                                    + prodSchedCourseGroupID + ","
                                    + prodSchedBatchID + ","
                                    + prodSchedCourseDetailID + ","
                                    + prodSchedRoleId + ",'"
                                    + prodbtnManageCoursesID + "',"
                                    + "'" + editGlobalizationString
                                        + "'," + prodIsPractice + ");return false;");
    cellSpan.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan.setAttribute("onmouseout", "HideToolTip();");
    cellSpan.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan.innerText = prodSchedCourseName;
    cellSpan.innerHTML = prodSchedCourseName;

    var cellSpan2 = null;
    if (IsIE())
        cellSpan2 = row.cells[1].children[0];
    else
        cellSpan2 = row.cells[1].children[0];


    cellSpan2.setAttribute("Date", prodSchedDueDate);
    cellSpan2.setAttribute("Time", prodSchedTimeRequired);
    cellSpan2.setAttribute("TimeRequired", prodSchedTimeRequired);
    cellSpan2.setAttribute("CourseName", prodSchedCourseName);
    cellSpan2.onclick = new Function("ShowTestingScheduleProductsPopup(this,0,-195,"
                                    + prodSchedUserID + ","
                                    + prodSchedClassId + ","
                                    + prodSchedCourseGroupScheduleID + ","
                                    + prodSchedCourseID + ","
                                    + prodSchedCourseGroupTypeID + ","
                                    + "'" + prodcomments + "',"
                                    + prodSchedCourseGroupID + ","
                                    + prodSchedBatchID + ","
                                    + prodSchedCourseDetailID + ","
                                    + prodSchedRoleId + ",'"
                                    + prodbtnManageCoursesID + "',"
                                    + "'" + editGlobalizationString
                                        + "'," + prodIsPractice + ");return false;");
    cellSpan2.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan2.setAttribute("onmouseout", "HideToolTip();");
    cellSpan2.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan2.innerText = prodSchedDueDate;
    cellSpan2.innerHTML = prodSchedDueDate;


    var cellSpan3 = null;
    if (IsIE())
        cellSpan3 = row.cells[2].children[0];
    else
        cellSpan3 = row.cells[2].children[0];

    cellSpan3.setAttribute("Date", prodSchedDueDate);
    cellSpan3.setAttribute("Time", prodSchedTimeRequired);
    cellSpan3.setAttribute("TimeRequired", prodSchedTimeRequired);
    cellSpan3.setAttribute("CourseName", prodSchedCourseName);
    cellSpan3.onclick = new Function("ShowTestingScheduleProductsPopup(this,0,-195,"
                                    + prodSchedUserID + ","
                                    + prodSchedClassId + ","
                                    + prodSchedCourseGroupScheduleID + ","
                                    + prodSchedCourseID + ","
                                    + prodSchedCourseGroupTypeID + ","
                                    + "'" + prodcomments + "',"
                                    + prodSchedCourseGroupID + ","
                                    + prodSchedBatchID + ","
                                    + prodSchedCourseDetailID + ","
                                    + prodSchedRoleId + ",'"
                                    + prodbtnManageCoursesID + "',"
                                    + "'" + editGlobalizationString
                                        + "'," + prodIsPractice + ");return false;");
    cellSpan3.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan3.setAttribute("onmouseout", "HideToolTip();");
    cellSpan3.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan3.innerText = prodSchedTimeRequiredString;
    cellSpan3.innerHTML = prodSchedTimeRequiredString;

}



function AddChildRow(table) {
    var rowCount = table.rows.length;
    var row = null;
    var prodcomments = prodSchedComments.replace(/'/gi, "&#39");
    row = table.insertRow(rowCount);
    row.className = "products_tablecontent";
    var cell1 = row.insertCell(0);
    cell1.className = "products_tablecontent";
    cell1.align = "left";
    var cellSpan = document.createElement("SPAN");
    cellSpan.setAttribute("Date", prodSchedDueDate);
    cellSpan.setAttribute("Time", prodSchedTimeRequired);
    cellSpan.setAttribute("TimeRequired", prodSchedTimeRequiredString);
    cellSpan.setAttribute("CourseName", prodSchedCourseName);
    cellSpan.onclick = new Function("ShowTestingScheduleProductsPopup(this,0,-195,"
                                    + prodSchedUserID + ","
                                    + prodSchedClassId + ","
                                    + prodSchedCourseGroupScheduleID + ","
                                    + prodSchedCourseID + ","
                                    + prodSchedCourseGroupTypeID + ","
                                    + "'" + prodcomments + "',"
                                    + prodSchedCourseGroupID + ","
                                    + prodSchedBatchID + ","
                                    + prodSchedCourseDetailID + ","
                                    + prodSchedRoleId + ",'"
                                    + prodbtnManageCoursesID + "',"
                                    + "'" + editGlobalizationString
                                        + "'," + prodIsPractice + ");return false;");
    cellSpan.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan.setAttribute("onmouseout", "HideToolTip();");
    cellSpan.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan.innerText = prodSchedCourseName;
    cellSpan.innerHTML = prodSchedCourseName;

    cell1.appendChild(cellSpan);


    var cell2 = row.insertCell(1);
    cell2.align = "left";
    cell2.className = "products_tablecontent";
    var cellSpan2 = document.createElement("SPAN");
    cellSpan2.setAttribute("Date", prodSchedDueDate);
    cellSpan2.setAttribute("Time", prodSchedTimeRequired);
    cellSpan2.setAttribute("TimeRequired", prodSchedTimeRequired);
    cellSpan2.setAttribute("CourseName", prodSchedCourseName);
    cellSpan2.onclick = new Function("ShowTestingScheduleProductsPopup(this,0,-195,"
                                    + prodSchedUserID + ","
                                    + prodSchedClassId + ","
                                    + prodSchedCourseGroupScheduleID + ","
                                    + prodSchedCourseID + ","
                                    + prodSchedCourseGroupTypeID + ","
                                    + "'" + prodcomments + "',"
                                    + prodSchedCourseGroupID + ","
                                    + prodSchedBatchID + ","
                                    + prodSchedCourseDetailID + ","
                                    + prodSchedRoleId + ",'"
                                    + prodbtnManageCoursesID + "',"
                                    + "'" + editGlobalizationString
                                        + "'," + prodIsPractice + ");return false;");
    cellSpan2.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan2.setAttribute("onmouseout", "HideToolTip();");
    cellSpan2.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan2.innerText = prodSchedDueDate;
    cellSpan2.innerHTML = prodSchedDueDate;
    cell2.appendChild(cellSpan2);


    var cell3 = row.insertCell(2);
    cell3.align = "left";
    cell3.className = "products_tablecontent";
    var cellSpan3 = document.createElement("SPAN");
    cellSpan3.setAttribute("Date", prodSchedDueDate);
    cellSpan3.setAttribute("Time", prodSchedTimeRequired);
    cellSpan3.setAttribute("TimeRequired", prodSchedTimeRequired);
    cellSpan3.setAttribute("CourseName", prodSchedCourseName);
    cellSpan3.onclick = new Function("ShowTestingScheduleProductsPopup(this,0,-195,"
                                    + prodSchedUserID + ","
                                    + prodSchedClassId + ","
                                    + prodSchedCourseGroupScheduleID + ","
                                    + prodSchedCourseID + ","
                                    + prodSchedCourseGroupTypeID + ","
                                    + "'" + prodcomments + "',"
                                    + prodSchedCourseGroupID + ","
                                    + prodSchedBatchID + ","
                                    + prodSchedCourseDetailID + ","
                                    + prodSchedRoleId + ",'"
                                    + prodbtnManageCoursesID + "',"
                                    + "'" + editGlobalizationString
                                        + "'," + prodIsPractice + ");return false;");
    cellSpan3.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan3.setAttribute("onmouseout", "HideToolTip();");
    cellSpan3.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan3.innerText = prodSchedTimeRequiredString;
    cellSpan3.innerHTML = prodSchedTimeRequiredString;
    cell3.appendChild(cellSpan3);

}

var prodSchedUserID, prodSchedClassId, prodSchedCourseID, prodSchedDueDate, prodSchedComments, prodSchedBatchID, prodSchedTimeRequired, prodSchedCourseGroupID, prodIsPractice;
var prodSchedCourseGroupTypeID, prodSchedCourseGroupScheduleID, prodSchedCourseDetailID, prodSchedCourseName, prodSchedRoleId, prodbtnManageCoursesID, prodSchedTimeRequiredString;

function OpenProductsPopup(divID, slID, height, sender, topOffset, leftOffset, userID, classID, courseGroupScheduleID, courseID, courseGroupTypeID, comments, courseGroupID, batchID, courseDetailID, currentRole, btnid, mode, isPractice) {
    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divID);
    PopUp.style.top = (senderPos.Top + topOffset - (height)) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';
    var control = $get(slID);
    var date = sender.getAttribute("Date");
    var timeRequired = sender.getAttribute("TimeRequired");
    var time = sender.getAttribute("Time");
    var courseName = sender.getAttribute("CourseName");
    control.Content.SilverlightPopup.UserID = userID;
    control.Content.SilverlightPopup.RoleID = currentRole;
    control.Content.SilverlightPopup.ClassID = classID;
    control.Content.SilverlightPopup.CourseGroupTypeID = courseGroupTypeID;
    control.Content.SilverlightPopup.CourseID = courseID;
    control.Content.SilverlightPopup.BatchID = batchID;
    control.Content.SilverlightPopup.CourseGroupID = courseGroupID;
    control.Content.SilverlightPopup.CourseGroupScheduleID = courseGroupScheduleID;
    control.Content.SilverlightPopup.TimeRequired = time;
    control.Content.SilverlightPopup.DueDate = date;
    control.Content.SilverlightPopup.CourseDetailID = courseDetailID;
    control.Content.SilverlightPopup.CourseName = courseName;
    control.Content.SilverlightPopup.Comments = comments;
    control.Content.SilverlightPopup.Title = mode;
    control.Content.SilverlightPopup.IsPractice = isPractice;

    control.Content.SilverlightPopup.Scheduled = function (s, e) {
        btn = $get(btnid);
        // check do you have these
        //  b.BatchID, a.AssessmentID, a.Name, b.ClassID, cl.Description , cs.CourseID,       
        //ISNULL(cs.CourseName,''None'') AS CourseName, cs.DueDate, cs.RequiredStudyMinutes, cs.CourseGroupID,       
        //cs.CourseGroupScheduleID, cs.CourseGroupTypeID, cs.Comments, cs.CourseDetailID 

        prodSchedUserID = control.Content.SilverlightPopup.UserID;
        prodSchedClassId = control.Content.SilverlightPopup.ClassID;
        prodSchedRoleId = control.Content.SilverlightPopup.RoleID;
        prodSchedComments = control.Content.SilverlightPopup.Comments;
        prodSchedCourseGroupTypeID = control.Content.SilverlightPopup.CourseGroupTypeID;
        prodSchedCourseID = control.Content.SilverlightPopup.CourseID;
        prodSchedBatchID = control.Content.SilverlightPopup.BatchID;
        prodSchedCourseGroupID = control.Content.SilverlightPopup.CourseGroupID;
        prodSchedCourseGroupScheduleID = control.Content.SilverlightPopup.CourseGroupScheduleID;
        prodSchedTimeRequired = control.Content.SilverlightPopup.TimeRequired;
        prodSchedTimeRequiredString = control.Content.SilverlightPopup.TimeRequiredString;
        prodSchedDueDate = control.Content.SilverlightPopup.DueDate;
        prodSchedCourseDetailID = control.Content.SilverlightPopup.CourseDetailID;
        prodSchedCourseName = control.Content.SilverlightPopup.CourseName;
        prodbtnManageCoursesID = btnid;
        prodIsPractice = isPractice;

        if (control.Content.SilverlightPopup.SLMode == "Add") {
            if (ShowTestingScheduleControl != undefined && ShowTestingScheduleControl != null) {
                if (IsIE()) {
                    ShowTestingScheduleControl.parentNode.children[1].style.display = ''
                    if (ShowTestingScheduleControl.parentNode.parentNode.nextSibling.childNodes.length != 0) {
                        var table = ShowTestingScheduleControl.parentNode.parentNode.nextSibling.children[0].children[0].children[0];
                    }
                    else {
                        var table = ShowTestingScheduleControl.parentNode.parentNode.nextSibling.nextSibling.children[0].children[0].children[0];
                    }
                    AddChildRow(table);
                }
                else {
                    ShowTestingScheduleControl.parentNode.children[1].style.display = ''
                    var table = ShowTestingScheduleControl.parentNode.parentNode.nextSibling.nextSibling.children[0].children[0].children[0];

                    AddChildRow(table);
                }

            }
        }
        else if (control.Content.SilverlightPopup.SLMode == "Edit") {

            if (ShowTestingScheduleControl != undefined && ShowTestingScheduleControl != null) {
                var table = ShowTestingScheduleControl.parentNode.parentNode.parentNode.parentNode;
                UpdateChildRow(table);
            }
        }
        if (control.Content.SilverlightPopup.SLMode == "Clear") {
            if (ShowTestingScheduleControl != undefined && ShowTestingScheduleControl != null) {
                var table = ShowTestingScheduleControl.parentNode.parentNode.parentNode.parentNode;
                var row = ShowTestingScheduleControl.parentNode.parentNode;
                table.deleteRow(row.rowIndex);
                if (table.rows.length <= 1) {
                    var childGridHostingTR = table.parentNode.parentNode.parentNode;
                    if (IsIE()) {
                        var maintableRowsCount = 0;
                        if (childGridHostingTR.previousSibling != undefined && childGridHostingTR.previousSibling.children != undefined) {
                            maintableRowsCount = childGridHostingTR.previousSibling.children.length;
                        }
                        else {
                            maintableRowsCount = 0;
                        }
                        if (maintableRowsCount > 0) {
                            var actualHideUnhideScheduleTR = table.parentNode.parentNode.parentNode.previousSibling;
                            var subElementCount = actualHideUnhideScheduleTR.children[maintableRowsCount - 2].children.length;
                            var imageUnhideHide = actualHideUnhideScheduleTR.children[maintableRowsCount - 2].children[subElementCount - 1];
                            imageUnhideHide.click();
                            imageUnhideHide.style.display = 'none';
                        }
                    }
                    else {
                        var maintableRowsCount = 0;
                        if (childGridHostingTR.previousSibling != undefined && childGridHostingTR.previousSibling.children != undefined) {
                            maintableRowsCount = childGridHostingTR.previousSibling.children.length;
                        }
                        else {
                            maintableRowsCount = 0;
                        }
                        if (maintableRowsCount > 0) {
                            var actualHideUnhideScheduleTR = table.parentNode.parentNode.parentNode.previousSibling;
                            var imageUnhideHide = actualHideUnhideScheduleTR.children[maintableRowsCount - 2].children[1];
                            imageUnhideHide.onclick();
                            imageUnhideHide.style.display = 'none';
                        }
                    }


                }
            }
        }

        //btn.click(); // this is commented to avoid post back
        ClosePopup(divID);

    };

    control.Content.SilverlightPopup.Canceled = function (s, e) {
        ClosePopup(divID);
    };

    control.Content.SilverlightPopup.Cleared = function (s, e) {


        ClosePopup(divID);
    };

    control.Content.SilverlightPopup.TestingGroupSelected = function (s, e) {
        var PopUp = $get(divID);
        var divPopUp = $get(slID);
        PopUp.style.height = '400px';
        divPopUp.style.height = '400px';
        $get(divID).style.top = (parseInt($get(divID).style.top) - 105) + 'px';
    };

    control.Content.SilverlightPopup.AllStudentsSelected = function (s, e) {
        var PopUp = $get(divID);
        var divPopUp = $get(slID);
        PopUp.style.height = '295px';
        divPopUp.style.height = '295px';
        PopUp.style.top = (senderPos.Top + topOffset - (height)) + 'px';
    };

    control.Content.SilverlightPopup.Reset();
    control.Content.SilverlightPopup.PopulateCourses();

    PopUp.style.visibility = 'visible';

}

function schedulePracticeAssessment(btn) {

    var batchID = $(btn).parent().find('input[id$="hdnPracticeAssessmentBatchId"]').val();
    var assessmentName = $(btn).parent().find('input[id$="hdnPracticeAssessmentAssessmentName"]').val();
    var classID = $('select[id$="ddlSelectClass"]').val();
    var courseGroupTypeID = 0;
    var courseID = 0;
    var courseGroupID = 0;
    var courseGroupScheduleID = 0;
    var courseDetailID = 0;
    var comments = "";
    //var rowIndex = $(btn)[0].getAttribute("rowid");

    //$("#hdnSchedulePopupUserID").val(userID);
    //$("#hdnSchedulePopupRoleID").val(roleID);
    $("#hdnSchedulePopupClassID").val(classID);
    $("#hdnSchedulePopupCourseGroupTypeID").val(courseGroupTypeID);
    $("#hdnSchedulePopupCourseID").val(courseID);
    $("#hdnSchedulePopupBatchID").val(batchID);
    $("#hdnSchedulePopupCourseGroupID").val(courseGroupID);
    $("#hdnSchedulePopupCourseGroupScheduleID").val(courseGroupScheduleID);
    $("#hdnSchedulePopupCourseDetailID").val(courseDetailID);
    $("#hdnSchedulePopupCourseName").val(assessmentName);
    $("#hdnSchedulePopupComments").val(comments);

    OpenTestingProductsSchedulePopup(btn, 'Add', 'Practice');

    return false;
}

function OpenPopup(divID, slID, height, sender, topOffset, leftOffset, userID, classID, courseGroupScheduleID, courseID, courseGroupTypeID, comments, courseGroupID, batchID, courseDetailID, currentRole, btnid, mode) {
    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divID);
    PopUp.style.top = (senderPos.Top + topOffset - (height)) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';
    var control = $get(slID);
    var date = sender.getAttribute("Date");
    var timeRequired = sender.getAttribute("TimeRequired");
    var courseName = sender.getAttribute("CourseName");
    control.Content.SilverlightPopup.UserID = userID;
    control.Content.SilverlightPopup.RoleID = currentRole;
    control.Content.SilverlightPopup.ClassID = classID;
    control.Content.SilverlightPopup.CourseGroupTypeID = courseGroupTypeID;
    control.Content.SilverlightPopup.CourseID = courseID;
    control.Content.SilverlightPopup.BatchID = batchID;
    control.Content.SilverlightPopup.CourseGroupID = courseGroupID;
    control.Content.SilverlightPopup.CourseGroupScheduleID = courseGroupScheduleID;
    control.Content.SilverlightPopup.TimeRequired = timeRequired;
    control.Content.SilverlightPopup.DueDate = date;
    control.Content.SilverlightPopup.CourseDetailID = courseDetailID;
    control.Content.SilverlightPopup.CourseName = courseName;
    control.Content.SilverlightPopup.Comments = comments;
    control.Content.SilverlightPopup.Title = mode;

    control.Content.SilverlightPopup.Scheduled = function (s, e) {
        btn = $get(btnid);
        ClosePopup(divID); btn.click();
    };

    control.Content.SilverlightPopup.Canceled = function (s, e) {
        ClosePopup(divID);
    };

    control.Content.SilverlightPopup.TestingGroupSelected = function (s, e) {
        var PopUp = $get(divID);
        var divPopUp = $get(slID);
        PopUp.style.height = '400px';
        divPopUp.style.height = '400px';
        $get(divID).style.top = (parseInt($get(divID).style.top) - 105) + 'px';
    };

    control.Content.SilverlightPopup.AllStudentsSelected = function (s, e) {
        var PopUp = $get(divID);
        var divPopUp = $get(slID);
        PopUp.style.height = '295px';
        divPopUp.style.height = '295px';
        PopUp.style.top = (senderPos.Top + topOffset - (height)) + 'px';
    };

    control.Content.SilverlightPopup.Reset();
    control.Content.SilverlightPopup.PopulateCourses();

    PopUp.style.visibility = 'visible';

}

//------------------ Set Benchmark Popups ---------------------------//
//ATING-6614
function ShowSetBenchmarkMLMPopup(sender, topOffset, leftOffset, benchmarkType, tutorialId, benchmarkID, assessmentID, tutorialName, institutionID, userid, benchmarkTypeValue, defaultTutorialBenchmarkValue, defaultBenchmarkID, btnid, roleID) {
    OpenBenchmarkMLMPopup("divSetBenchmarkMLMPopup", "slSetBenchmarkMLMPopup", 200, sender, topOffset, leftOffset, benchmarkType, tutorialId, benchmarkID, assessmentID, tutorialName, institutionID, userid, benchmarkTypeValue, defaultTutorialBenchmarkValue, defaultBenchmarkID, btnid, roleID);
}
//ATING-6614 Added userid
function ShowSetBenchmarkPopup(sender, topOffset, leftOffset, assessmentID, assessmentName, isTEAS, benchmarkID, defaultBenchMarkID, reportGroupID, teasSectionNameID, defaultBenchmark, defaultBenchmarkType, btnid, institutionid, userid, roleID) {
    //    Saved = function(sender, e) { alert("Saved"); ClosePopup(divID); }
    //    Canceled = function(sender, e) { ClosePopup(divID); }

    OpenBenchmarkPopup("divSetBenchmarkPopup", "slSetBenchmarkPopup", 250, sender, topOffset, leftOffset, assessmentID, assessmentName, isTEAS, benchmarkID, defaultBenchMarkID, reportGroupID, teasSectionNameID, defaultBenchmark, defaultBenchmarkType, btnid, institutionid, userid, roleID);
}
//ATING-6614 Added userid
function ShowSetBenchmarkPracticePopup(sender, topOffset, leftOffset, assessmentID, assessmentName, benchmarkID, benchmarkType, defaultBenchMarkID, reportGroupID, defaultBenchmark, defaultBenchmarkType, btnid, institutionid, userid, roleID) {
    //    Saved = function(sender, e) { alert("Saved"); ClosePopup(divID); }
    //    Canceled = function(sender, e) { ClosePopup(divID); }
    OpenBenchmarkPracticePopup("divSetBenchmarkPracticePopup", "slSetBenchmarkPracticePopup", 250, sender, topOffset, leftOffset, assessmentID, assessmentName, benchmarkID, benchmarkType, defaultBenchMarkID, reportGroupID, defaultBenchmark, defaultBenchmarkType, btnid, institutionid, userid, roleID);
}
//ATING-6614
function OpenBenchmarkMLMPopup(divID, slID, height, sender, topOffset, leftOffset, benchmarkType, tutorialId, benchmarkID, assessmentID, tutorialName, institutionID, userid, benchmarkTypeValue, defaultTutorialBenchmarkValue, defaultBenchmarkID, btnid, roleID) {

    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);

    var benchMarkValue = "";
    benchMarkValue = sender.getAttribute("Edited");

    var IsReset = false; // Setting it to false for now. Ita value depends on the clicking of reset button by user.


    var popoverContent = ['<div><form>',
    '<div class="modal-header">',
    '<div class="modal-title text-ati-red"><span class="make-font-bold"><p>Benchmark:</p></span></div>',
    '</div>',
    '<div class="modal-body">',
        '<div class="margin-top-10"><span class="make-font-bold pull-left">Benchmark:</span></div><br><div class="margin-top-6"><input type="text"  tabindex="0" name="txtBenchmark" id="txtBenchmark" value="' + benchMarkValue + '" size="5"><button type="button" class="btn btn-xs btn-secondary id="btnReset" onclick="Reset()">Reset to Default</button></div>',
        '<div class="margin-top-6"><span class="make-font-bold pull-left">Benchmark Type: </span></div>',
        '<div class="margin-top-6"><span class="make-font-bold"> Individual %</span></div>',
        '<div id="tutorialPopupConfirmation"><div class="margin-top-6"><span class="make-font-bold">Save for all assessments </span>&nbsp;<input type="checkbox" name="optAllAssessments" id="optAllTutorials" value="false" onclick="optAllTutorialsClicked()"></div><div class="modal-footer margin-top-20" style="text-align:center"><div id="primaryButtons"><button type="button" class="btn btn-primary pull-left"  onclick="SaveBenchmarkTutorial()">Save</button><button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="$(\'*\').popover(\'destroy\')">Close</button></div></div>',
        '</div>',
        //'<div class="margin-top-10" style="color:#fff">__</div>',
    '</div>',
    '</form></div>'];

    var contentPrimaryButtons = '<div class="margin-top-6"><span class="make-font-bold">Save for all assessments </span></div>';
    contentPrimaryButtons += '<div class="margin-top-6"><input type="checkbox" name="optAllAssessments" id="optAllTutorials" value="false" onclick="optAllTutorialsClicked()"></div>';
    contentPrimaryButtons += '<div class="modal-footer margin-top-20" style="text-align:center">';
    contentPrimaryButtons += '<div id="primaryButtons"><button type="button" class="btn btn-primary pull-left"  onclick="SaveBenchmarkTutorial()">Save</button><button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="$(\'*\').popover(\'destroy\')">Close</button></div>';


    DisplayPopoverBenchMarks(popoverElement, popoverContent);


    if (roleID == 4) {
        $('[id$=optAllTutorials]')[0].disabled = true;
    }

    Reset = function () {
        benchMarkValue = defaultTutorialBenchmarkValue;
        $('#txtBenchmark')[0].value = defaultTutorialBenchmarkValue;
    }

    var optAllTutorials = false;
    optAllTutorialsClicked = function () {
        if ($('[id$=optAllTutorials]')[0].checked == true) {

            optAllTutorials = true;
            benchmarkValue = $('#txtBenchmark')[0].value;

            $('[id$=optAllTutorials]')[0].checked = false; // Resetting the checkbox to false. So that if user returns to the popver, it is not checked already.

  
            var popoverConfirmationContent = '<div class="margin-top-6"><span class="make-font-bold">These changes will affect all modules.</span></div>';
            popoverConfirmationContent += '<div class="margin-top-6"><span class="make-font-bold pull-left">Are you sure ?</span></div>';
            popoverConfirmationContent += '<div class="modal-footer margin-top-20" style="text-align:center">';
            popoverConfirmationContent += '<div class="margin-top-10"><button type="button" class="btn btn-primary pull-left"  onclick="ConfirmationYes()">Yes</button><button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="ConfirmationNo()">No</button></div>';


            //DisplayPopoverBenchMarks(popoverElement, popoverConfirmationContent);
            $('#tutorialPopupConfirmation')[0].innerHTML = popoverConfirmationContent;
        }

    }

    ConfirmationYes = function () {
        SaveBenchmarkTutorial();
        $('*').popover("destroy");
    }

    ConfirmationNo = function () {
        //$('*').popover("destroy");
        //DisplayPopoverBenchMarks(popoverElement, popoverContent);
        $('#tutorialPopupConfirmation')[0].innerHTML = contentPrimaryButtons;
    }

    SaveBenchmarkTutorial = function () {

        if ($('#txtBenchmark').length == 1)
            benchmarkValue = $('#txtBenchmark')[0].value;

        if (benchmarkValue == "")
            benchmarkValue = 0;

        if (!(/^\d+(\.\d+)?$/.test(benchmarkValue))) {
            ValidateMsg("You have entered an invalid value.Enter a value between 0 and 100 using whole numbers or values with a single decimal place.");
            return;
        }

        if (parseInt(benchmarkValue) < 0 || parseInt(benchmarkValue) > 100) {
            ValidateMsg("You have entered an invalid value.Enter a value between 0 and 100 using whole numbers or values with a single decimal place.");
            return;
        }

        var IsReset = false; // Setting it to false for now. Ita value depends on the clicking of reset button by user.

        $.ajax({
            type: 'GET',
            url: 'FiltersService.asmx/SetTutorialLevelBenchmark?TxtBenchmark="' + benchmarkValue + '"&UserID="' + userid + '"&InstitutionID="' + institutionID + '"&BenchmarkId="' + benchmarkID + '"&IsReset="' + IsReset + '"&AssessmentId="' + assessmentID + '"&DefaultBenchMarkId="' + defaultBenchmarkID + '"&OptAllAssessments="' + optAllTutorials + '"&TutorialID="' + tutorialId + '"',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function SaveBenchmarkProctorSuccess(result) {
                // Servive returns void in case of success.
                $('*').popover("destroy");
                var btn = $get(btnid);
                btn.click();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                ValidateMsg("Error encountered while saving Tutorial benchmark.")
            }
        });

    }

}

function GetProficiencyDetailsByLevel(assessmentID, assessmentName) {
    
    var proficiencyLevel = $('#ddlProficiencyLevel').val();
    //console.log(proficiencyLevel);
    LoadProficiencyDetails(assessmentID, assessmentName, proficiencyLevel);
}
function ShowProficiencyValue() {
    $('#ddlBenchmarkType').removeAttr('disabled');
    if ($('#chkProficiencyLevel').is(":checked")) {
        var profValue = $('#hdProficiencyValue').val();
        $('#txtBenchmark').val(profValue);
        $('#ddlProficiencyLevel').removeAttr('disabled');
        $('#lblProficiencyLevel').text(profValue);
        $('#ddlBenchmarkType').val(2);
        $('#ddlBenchmarkType').attr('disabled','true');
    }
    else {
        $('#ddlProficiencyLevel').attr('disabled','true');
    }
}
function LoadProficiencyDetails(assessmentPoolID, assessmentName, proficiencyLevel) {
    $('#hdProficiencyValue').val('');
    $('#lblProficiencyLevel').text('');
    userid = 0;
    $.ajax({
        type: 'GET',
        url: 'FiltersService.asmx/GetAssessmentProficiencyLevelByPoolID?AssessmentPoolID="' + assessmentPoolID + '"&ProficiencyLevel="' + proficiencyLevel + '"',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {
            //console.log("LoadProficiencyDetails:", result);
            $('#divProficiencyLevel').css('display', 'none');
            if (result && result.d !=undefined && result.d !=null) {
                if (result.d) {
                    var profLev = parseFloat(result.d);
                    if (profLev > 0) {
                        $('#divProficiencyLevel').css('display', 'block');
                        $('#hdProficiencyValue').val(profLev);
                        ShowProficiencyValue();
                    }
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            ValidateMsg("Error encountered while retrieving proficiency level.");
        }
    });
}
function ResetBenchmarkValues(assessmentID, assessmentName) {
    Reset();
    $('#hdProficiencyValue').val('');
    $('#lblProficiencyLevel').text('');
    //$('#divProficiencyLevel').css('display', 'none');
    $('#ddlProficiencyLevel').val(1);
    $('#chkProficiencyLevel').attr('checked', false);
    LoadProficiencyDetails(assessmentID, assessmentName, 1);
}
//ATING-6614 Added userid
function OpenBenchmarkPopup(divID, slID, height, sender, topOffset, leftOffset, assessmentID, assessmentName, isTEAS, benchmarkID, defaultBenchMarkID, reportGroupID, teasSectionNameID, defaultBenchmark, defaultBenchmarkType, btnid, institutionid, userid, roleID) {

    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);

    var benchMarkValue = "";
    benchMarkValue = sender.getAttribute("Edited");
    var benchmarkedited = sender.getAttribute("BenchMarkType");
    var ddlProfLevelOnchange = 'GetProficiencyDetailsByLevel(' + assessmentID + ', \'' + assessmentName + '\')';
    var resetFunction = 'ResetBenchmarkValues(' + assessmentID + ', \'' + assessmentName + '\')';
    //console.log(ddlProfLevelOnchange);
    var IsReset = false; // Setting it to false for now. Ita value depends on the clicking of reset button by user.
    var profDisplay = 'none';
    var popoverContent = ['<div><form>',
    '<div class="modal-header">',
    '<div class="modal-title text-ati-red"><span class="make-font-bold"><p>Benchmark:</p></span></div>',
    '</div>',
    '<div class="modal-body">',
        '<div class="margin-top-10"><span class="make-font-bold pull-left">Benchmark: </span></div><div class="margin-top-6" style="display:inline-block"><input type="text" size="5" tabindex="0" name="txtBenchmark" id="txtBenchmark" value="' + benchMarkValue + '"> <button type="button" id="btnReset" class="btn btn-xs btn-secondary" tabindex="0" onclick="' + resetFunction + '">Reset to Default</button></div>',
        '<div class="margin-top-6"><span class="make-font-bold">Benchmark Type: </span></div>',
        '<div class="margin-top-6"><select id="ddlBenchmarkType"><option value="0">Program Percentile</option><option value="1">National Percentile</option><option value="2">Individual %</option></select></div>',
        '<div class="margin-top-6" id="divProficiencyLevel" style="display:' + profDisplay + '"><input type="hidden" id="hdProficiencyValue"/><input type="checkbox" id="chkProficiencyLevel" onclick="ShowProficiencyValue()">Use ATI Proficiency Level: <select id="ddlProficiencyLevel" onchange="' + ddlProfLevelOnchange + '"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select><label id="lblProficiencyLevel"></label></div>',
        '<div class="modal-footer margin-top-20" style="text-align:center">',
        '<button type="button" class="btn btn-primary pull-left"  onclick="SaveBenchmarkProctor(' + userid + ',' + institutionid + ',' + benchmarkID + ',\'' + IsReset + '\',\'' + isTEAS + '\',' + assessmentID + ',' + teasSectionNameID + ',' + defaultBenchMarkID + ')">Save</button>',
        '<button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="$(\'*\').popover(\'destroy\')">Close</button>',
        '</div>',
        '<div class="margin-top-10" style="color:#fff">__</div>',
    '</div>',
    '</form></div>'];

    LoadProficiencyDetails(assessmentID, assessmentName,1);

    DisplayPopoverBenchMarks(popoverElement, popoverContent);

    if (benchmarkedited.toString() == "Program Percentile") {
        $('#ddlBenchmarkType')[0].value = 0;
    } else if (benchmarkedited.toString() == "National Percentile") {
        $('#ddlBenchmarkType')[0].value = 1;
    } else if (benchmarkedited.toString() == "Individual %") {
        $('#ddlBenchmarkType')[0].value = 2;
    } else {
        $('#ddlBenchmarkType')[0].value = 2;
    }

    SaveBenchmarkProctor = function () {

        var benchmarkValue = $('#txtBenchmark')[0].value;
        var dropdownIndexValue = $('#ddlBenchmarkType')[0].value;
        var IsReset = false; // Setting it to false for now. Ita value depends on the clicking of reset button by user.

        if (benchmarkValue == "")
            benchmarkValue = 0;

        if (!(/^\d+(\.\d+)?$/.test(benchmarkValue))) {
            ValidateMsg("You have entered an invalid value.Enter a value between 0 and 100 using whole numbers or values with a single decimal place.");
            return;
        }

        if (parseInt(benchmarkValue) < 0 || parseInt(benchmarkValue) > 100) {
            ValidateMsg("You have entered an invalid value.Enter a value between 0 and 100 using whole numbers or values with a single decimal place.");
            return;
        }

        $.ajax({
            type: 'GET',
            url: 'AssessmentService.asmx/SetAssessmentLevelBenchmark?TxtBenchmark="' + benchmarkValue + '"&UserID="' + userid + '"&InstitutionID="' + institutionid + '"&DropdownIndex="' + dropdownIndexValue + '"&BenchmarkId="' + benchmarkID + '"&IsReset="' + IsReset + '"&IsTEAS="' + isTEAS + '"&AssessmentId="' + assessmentID + '"&TEASSectionNameId="' + teasSectionNameID + '"&DefaultBenchMarkId="' + defaultBenchMarkID + '"',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function SaveBenchmarkProctorSuccess(result) {
                // Servive returns void in case of success.
                $('*').popover("destroy");
                //$('.btn').popover("destroy");
                var btn = $get(btnid);
                btn.click();

            },
            error: function (jqXHR, textStatus, errorThrown) {
                //console.log('jqXHR, textStatus, errorThrown', jqXHR, textStatus, errorThrown);
                //alert(errorThrown.toString());
                ValidateMsg("Error encountered while saving benchmark.")
            }
        });

    }

    //New popover benchmark end
    Reset = function () {
        try {
            if (defaultBenchmark != "" || typeof defaultBenchmark != "undefined") {
                $('#txtBenchmark')[0].value = defaultBenchmark;
            }
            if (defaultBenchmark != "" || typeof defaultBenchmark != "undefined") {
                $('#ddlBenchmarkType')[0].value = parseInt(defaultBenchmarkType) - 1;
            }
        }
        catch (err) {

        }
    }

}


//ATING-6614 Added userid
function OpenBenchmarkPracticePopup(divID, slID, height, sender, topOffset, leftOffset, assessmentID, assessmentName, benchmarkID, benchmarkType, defaultBenchMarkID, reportGroupID, defaultBenchmark, defaultBenchmarkType, btnid, institutionid, userid, roleID) {

    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);

    var benchMarkValue = "";
    benchMarkValue = sender.getAttribute("Edited");
    //var benchmarkedited = sender.getAttribute("BenchMarkType");

    var IsReset = false; // Setting it to false for now. Ita value depends on the clicking of reset button by user.


    var popoverContent = ['<div><form>',
    '<div class="modal-header">',
    '<div class="modal-title text-ati-red"><span class="make-font-bold"><p>Benchmark:</p></span></div>',
    '</div>',
    '<div class="modal-body">',
        '<div class="margin-top-10"><span class="make-font-bold pull-left">Benchmark: </span></div><div class="margin-top-6" style="display:inline-block"><input type="text" name="txtBenchmark" id="txtBenchmark" value="' + benchMarkValue + '" size="5" tabindex="0"> <button type="button" class="btn btn-xs btn-secondary" id="btnReset" onclick="Reset()">Reset to Default</button></div>',
        '<div class="margin-top-6"><span class="make-font-bold pull-left">Benchmark Type: </span></div>',
        '<div class="margin-top-6"><span class="make-font-bold"> Individual %</span></div>',
        
        '<div id="practicePopupContainer"><div class="margin-top-6"><span class="make-font-bold">Save for all assessments </span>&nbsp;<input type="checkbox" name="optAllPracticeAssessments" id="optAllPracticeAssessments" value="false" onclick="optAllPracticeAssessmentsClicked()"></div><div class="modal-footer margin-top-20" style="text-align:center"><div id="primaryButtons"><button type="button" class="btn btn-primary pull-left"  onclick="SaveBenchmarkPractice()">Save</button><button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="$(\'*\').popover(\'destroy\')">Close</button></div></div>',

        '</div>',
        //'<div class="margin-top-10" style="color:#fff">__</div>',
    '</div>',
    '</form></div>'];


   
    var contentPrimaryButtons = '<div class="margin-top-6"><span class="make-font-bold">Save for all assessments </span></div>';
    contentPrimaryButtons += '<div class="margin-top-6"><input type="checkbox" name="optAllPracticeAssessments" id="optAllPracticeAssessments" value="false" onclick="optAllPracticeAssessmentsClicked()"></div>';
    contentPrimaryButtons += '<div class="modal-footer margin-top-20" style="text-align:center">';
    contentPrimaryButtons += '<div id="primaryButtons"><button type="button" class="btn btn-primary pull-left"  onclick="SaveBenchmarkPractice()">Save</button><button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="$(\'*\').popover(\'destroy\')">Close</button></div>';
    

    DisplayPopoverBenchMarks(popoverElement, popoverContent);

    //$('#practicePopupContainer')[0].innerHTML = popoverContent;

    //$('#confirmationButtons')[0].visibility = false;

    if (roleID == 4) {
        $('[id$=optAllPracticeAssessments]')[0].disabled = true;
    }

    Reset = function () {
        benchmarkValue = defaultBenchmark;
        $('#txtBenchmark')[0].value = defaultBenchmark;
    }

    var optAllPracticeAssessments = false;
    optAllPracticeAssessmentsClicked = function () {
        if ($('[id$=optAllPracticeAssessments]')[0].checked == true) {
            optAllPracticeAssessments = true;
            benchmarkValue = $('#txtBenchmark')[0].value;
            $('[id$=optAllPracticeAssessments]')[0].checked = false;
       
            var popoverConfirmationContent = '<div class="margin-top-6"><span class="make-font-bold">These changes will affect all assessments.</span></div>';
            popoverConfirmationContent += '<div class="margin-top-6"><span class="make-font-bold pull-left">Are you sure ?</span></div>';
            popoverConfirmationContent += '<div class="modal-footer margin-top-20" style="text-align:center">';
            popoverConfirmationContent += '<div class="margin-top-10"><button type="button" class="btn btn-primary pull-left"  onclick="ConfirmationYes()">Yes</button><button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="ConfirmationNo()">No</button></div>';

            //DisplayPopoverBenchMarks(popoverElement, popoverConfirmationContent);
            $('#practicePopupContainer')[0].innerHTML = popoverConfirmationContent;
        }
    }


    ConfirmationYes = function () {
        SaveBenchmarkPractice();
        $('*').popover("destroy");
    }

    ConfirmationNo = function () {
        //$('*').popover("destroy");
        //DisplayPopoverBenchMarks(popoverElement, popoverContent);
        $('#practicePopupContainer')[0].innerHTML = contentPrimaryButtons;
    }


    SaveBenchmarkPractice = function () {
        if ($('#txtBenchmark').length == 1)
            benchmarkValue = $('#txtBenchmark')[0].value;

        if (benchmarkValue == "")
            benchmarkValue = 0;

        if (!(/^\d+(\.\d+)?$/.test(benchmarkValue)) && benchmarkValue != 0) {
            ValidateMsg("You have entered an invalid value.Enter a value between 0 and 100 using whole numbers or values with a single decimal place.");
            return;
        }

        if (parseInt(benchmarkValue) < 0 || parseInt(benchmarkValue) > 100) {
            ValidateMsg("You have entered an invalid value.Enter a value between 0 and 100 using whole numbers or values with a single decimal place.");
            return;
        }

        var IsReset = false; // Setting it to false for now. Ita value depends on the clicking of reset button by user.

        $.ajax({
            type: 'GET',
            url: 'AssessmentService.asmx/SavePracticeAssessmentLevelBenchmark?TxtBenchmark="' + benchmarkValue + '"&UserID="' + userid + '"&InstitutionID="' + institutionid + '"&BenchmarkId="' + benchmarkID + '"&IsReset="' + IsReset + '"&AssessmentId="' + assessmentID + '"&DefaultBenchMarkId="' + defaultBenchMarkID + '"&OptAllAssessments="' + optAllPracticeAssessments + '"',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function SaveBenchmarkProctorSuccess(result) {
                // Servive returns void in case of success.
                $('*').popover("destroy");
                //$('.btn').popover("destroy");
                var btn = $get(btnid);
                btn.click();

            },
            error: function (jqXHR, textStatus, errorThrown) {
                //console.log('jqXHR, textStatus, errorThrown', jqXHR, textStatus, errorThrown);
                //alert(errorThrown.toString());
                ValidateMsg("Error encountered while saving practice assessment benchmark.")
            }
        });

    }

}


function DisplayPopoverBenchMarks(popoverElement, popoverContent) {

    popoverElement.popover("destroy");
    popoverElement.popover({
        html: true,
        trigger: 'manual',
        placement: 'right',
        content: popoverContent,
        container: 'body'
    });

    $('*').not(popoverElement).popover("destroy");

    //$(':image').not(popoverElement).popover("destroy");
    //$('.btn').not(popoverElement).popover("destroy");
    //$('.btn').not(popoverElement).popover("destroy");
    //$('label').not(popoverElement).popover("destroy");
    popoverElement.popover("show");
}
//----------------------------Assignment Due Popup---------------------------------------//

function ShowAssignmentDuePopup(sender, top, left, moduleId, tutorialId, userId) {
    var divid = 'divAssignmentDuePopUp';
    var slid = 'slAssignmentDuePopUp';
    OpenAssignmentDuePopup(divid, slid, 250, sender, top, left, moduleId, tutorialId, userId);
}

function OpenAssignmentDuePopup(divID, slID, height, sender, topOffset, leftOffset, moduleId, tutorialId, userId) {

    var senderPos = GetTopLeft(sender);

    var PopUp = $get(divID);

    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';


    var control = $get(slID);
    control.Content.SilverlightPopup.Closed = function (sender, e) {
        ClosePopup(divID);
    };

    control.Content.SilverlightPopup.Begin = function (s, e) { BeginAssignment(s, e); };
    control.Content.SilverlightPopup.ModuleID = moduleId;
    control.Content.SilverlightPopup.TutorialID = tutorialId;
    control.Content.SilverlightPopup.UserID = userId;
    control.Content.SilverlightPopup.ShowAssignments();

    PopUp.style.visibility = 'visible';

}
//---------------------------Tutorial & Test Assignment Popup---------------------------------//
var Highlightflag = null;
function ShowLessonAssignment(sender, top, left, loc, classid, userid, mcid, type, mid, cid, cgsid, date, time, btnid, comments, ip, roleid) {
    var divid = 'divLessonAssignmentPopup';
    var slid = 'slLessonAssignmentPopup';
    var control = $get(slid);
    control.Content.SilverlightPopup.Reset();
    highlightRow(sender);
    Scheduled = function (s, e) {

        var bSuccess = control.Content.SilverlightPopup.bSuccess;
        if (!bSuccess) { } else {
            btn = $get(btnid);
            UnhighlightRow(sender);
            control.Content.SilverlightPopup.Reset(); ClosePopup(divid); btn.click();
        }
    }
    Canceled = function (s, e) { UnhighlightRow(sender); control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    control.Content.SilverlightPopup.UserID = userid;
    control.Content.SilverlightPopup.RoleID = roleid;
    control.Content.SilverlightPopup.ClassID = classid;
    control.Content.SilverlightPopup.ModuleID = mid;
    control.Content.SilverlightPopup.ModuleContentID = mcid;
    control.Content.SilverlightPopup.CourseID = cid;
    control.Content.SilverlightPopup.CourseGroupScheduleID = cgsid;
    control.Content.SilverlightPopup.InstitutionPurchaseID = ip;
    control.Content.SilverlightPopup.TimeRequired = time;
    control.Content.SilverlightPopup.DueDate = date;
    control.Content.SilverlightPopup.Comments = comments;
    control.Content.SilverlightPopup.ModuleContentTypeID = type;
    control.Content.SilverlightPopup.PopulateCourses();
    OpenTutorialTestAssignment(divid, slid, sender, top, left, '', loc, 400, Scheduled, Canceled);
}

function highlightRow(sender) {
    if (Highlightflag != null) {
        UnhighlightRow(Highlightflag);
    }
    var parent;
    var bflag = false;
    parent = sender;
    while (!bflag) {
        parent = parent.parentNode;
        if (parent.nodeName.toLowerCase() == 'tr' || parent == null) {
            bflag = true;
            break;
        }
    }

    if (parent.nodeName.toLowerCase() == 'tr') {
        var row = parent;

        for (var i = 0; i < row.cells.length; i++) {
            var cell = row.cells[i];
            var cls = cell.className;
            cell.setAttribute("origClass", cls);
            //cell.setAttribute.className = cls;


            if (cls.indexOf("highlight") > -1) {
                cell.className = "hightablecontent3";
                //cell.setAttribute("className", "hightablecontent3");
                //cell.setAttribute.className = "hightablecontent3";
                //row.cells[i].className =  "hightablecontent3";
            }


        }

    }

    Highlightflag = sender;
}

function UnhighlightRow(sender) {

    var parent;
    var bflag = false;
    parent = sender;
    while (!bflag) {

        if (parent != null) {
            parent = parent.parentNode;
            if (parent.nodeName.toLowerCase() == 'tr' || parent == null) {
                bflag = true;
                break;
            }
        }
    }

    if (parent.nodeName.toLowerCase() == 'tr') {

        for (var i = 0; i < sender.parentNode.parentNode.cells.length; i++) {
            //var cls = parent.cells[i].className;
            parent.cells[i].className = parent.cells[i].getAttribute("origClass");
        }

    }
    Highlightflag = null;
}

function ShowTestAssignment(sender, top, left, loc) {
    var divid = 'divTestAssignmentPopup';
    var slid = 'slTestAssignmentPopup';
    var control = $get(slid);
    Scheduled = function (sender, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    Canceled = function (sender, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    OpenTutorialTestAssignment(divid, slid, sender, top, left, '', loc, 300, Scheduled, Canceled);
}

function OpenTutorialTestAssignment(divid, slid, sender, topOffset, leftOffset, content, loc, height, fnSavedcallback, fnCanceledcallback) {

    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divid);

    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';

    var control = $get(slid);

    control.Content.SilverlightPopup.Scheduled = fnSavedcallback;

    control.Content.SilverlightPopup.Canceled = fnCanceledcallback;

    PopUp.style.visibility = 'visible';

}
//-----------------------------------------------------------//
function ClosePopup(divID) {
    var PopUp = $get(divID);
    PopUp.style.left = '-2000px';
}

//----------------------Show Notes Popup ------------------------------//
function ShowNotesPopup(sender, top, left, text, loc) {
    var divid = 'divNotesPopUp';
    var slid = 'slNotesPopUp';
    Canceled = function (sender, e) { ClosePopup(divid); }
    OpenNotesPopup(divid, slid, sender, top, left, text, loc, 100, Canceled);
}

function OpenNotesPopup(divid, slid, sender, topOffset, leftOffset, text, loc, height, fnCanceledcallback) {

    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divid);
    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';
    var control = $get(slid);
    control.Content.SilverlightPopup.Text = text;
    control.Content.SilverlightPopup.Canceled = fnCanceledcallback;
    PopUp.style.visibility = 'visible';

}
//-------------------------------------------------------------------//

//-------------------------------eBook PopUP-----------------------------//
// Below silverlight popup functionality is no longer used. Removing it.
//function ShoweBookPopup(sender, top, left, location) {
//    var divid = 'diveBookPopup';
//    var slid = 'sleBookPopup';
//    var height = 320;
//    Canceled = function (s, e) {
//        ClosePopup(divid);
//        //alert(s);
//        if (s == true)
//        { $get(btnHideSave).click(); }

//    }
//    OpeneBookPopup(divid, slid, sender, top, left, height, Canceled, location);
//}

function OpeneBookPopup(divid, slid, sender, topOffset, leftOffset, height, fnCanceledcallback, location) {

    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divid);
    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';
    var control = $get(slid);
    control.Content.SilverlightPopup.Location = location;
    control.Content.SilverlightPopup.CancelClick = fnCanceledcallback;

    PopUp.style.visibility = 'visible';

}
//-------------------------------eBook PopUP-----------------------------//
//--------------------------------Display Password Popup------------------//
//Atchuta: This popups for the users who are in role  Director, Personnel, Instructor.
function ShowDisplayPasswordPopover(sender, top, left, name, userName, studentID, facultyid, roleID, institutionID, ip) {

    var password = "";
    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);


    $.ajax({
        type: 'GET',
        url: 'FiltersService.asmx/GetUserPassword?facultyid="' + facultyid + '"&roleID="' + roleID + '"&institutionID="' + institutionID + '"&sIP="' + ip + '"&studentID="' + studentID + '"',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function UserPasswordSuccess(result) {
            password = result.d.toString();

            var popoverContent = ['<div><form>',
                        '<div class="modal-header">',
                        '<div class="modal-title text-ati-red"><span class="make-font-bold"><p>Display Password for: ' + userName + '</p></span></div>',
                        '</div>',
                        '<div class="margin-top-6"><br />',
                            '<div class="margin-top-10"><span class="make-font-bold">Name: </span><span>' + name + '</div>',
                            '<div class="margin-top-6"><span class="make-font-bold">UserName: </span><span>' + userName + '</div>',
                            '<div class="margin-top-6"><span class="make-font-bold">Password: </span><span>' + password + '</div>',
                            '<div class="margin-top-10">Retrieval of this information is recorded.</div>',
                            '<div class="modal-footer margin-top-10" style="bottom-margin:10px;">',
                            '<button type="button" class="btn btn-sm btn-default" style="margin-left:35%;" data-dismiss="popover" onclick="$(\'.btn\').popover(\'destroy\');$(\':image\').popover(\'destroy\')">Close</button>',
                            '</div>',
                        '</div>',
                    '</form></div>'];
            
            DisplayPopoverDisplayPassword(popoverElement, popoverContent);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.log('jqXHR, textStatus, errorThrown', jqXHR, textStatus, errorThrown);
            ValidateMsg("Error encountered while retrieving password.");
            //return;
        }

    });

}


function DisplayPopoverDisplayPassword(popoverElement, popoverContent) {

    popoverElement.popover("destroy");
    popoverElement.popover({
        html: true,
        trigger: 'manual',
        placement: 'right',
        content: popoverContent,
        container: 'body'
    });

    $(':image').not(popoverElement).popover("destroy");
    $('.btn').not(popoverElement).popover("destroy");
    popoverElement.popover("show");
}


function ShowAllowAcessPopover(sender, top, left, name, studentID, facultyID, roleID, role, institutionID, ip, institutionName) {

    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);

    var popoverContent = ['<div style="padding:3px;"><form>',
                        '<div class="text-ati-red make-font-bold"><h1 class="remove-indent">Allow Access</h1></div>',
                        '<div style="margin-top:12px;">The user will have <span class="make-font-bold">20 minutes </span>after the "SAVE" button is pressed to login',
                            ' with this password.',
                            '<div class="margin-top-10"><span class="make-font-bold">One-Time Password: </span><span><input id="passwordtxt" name="passwordtxt" type="text" /></div>',
                            '<div><span id="allowAcessPopoverError" style="color:red"></span></div>',
                            '<div class="margin-top-10">The information shown below will be recorded and be retrievable by any Director at your institution</div>',
                            '<div class="margin-top-6"><span class="make-font-bold">Name: </span><span>' + name + '</div>',
                            '<div class="margin-top-6"><span class="make-font-bold">Role: </span><span>' + role + '</div>',
                            '<div class="margin-top-6"><span class="make-font-bold">Institution: </span><span>' + institutionName + '</div>',
                            '<div class="margin-top-6"><span class="make-font-bold">IP Address: </span><span>' + ip + '</div>',
                            '<div class="margin-top-6" style="padding-bottom:10px;><span class="make-font-bold">facultyID: </span><span>' + facultyID + '</div>',
                            '<div style="padding-bottom:10px;">',
                            '<span><button type="button" class="btn btn-primary pull-left"  onclick="SaveAllowAccessPopoverPassword(' + facultyID + ',' + roleID + ',' + institutionID + ',\'' + ip + '\',' + studentID + ')">Save</button><button type="button" class="btn btn-default pull-right" data-dismiss="popover" onclick="CancelAllowAccess()">Cancel</button></span>',
                            '<div class="margin-top-10" style="color:#fff">hiding this text for the layout - a hack</div>',
                           '</div>',
                        '</div>',
                    '</form></div>'];

    DisplayPopoverDisplayPassword(popoverElement, popoverContent);

    CancelAllowAccess = function () {
        popoverElement.popover("destroy");
    }
}


function SaveAllowAccessPopoverPassword(facultyID, roleID, institutionID, ip, studentID) {

    var password = $('#passwordtxt')[0].value;

    if (password == "" || password == null) {
        ValidateMsg("Please enter valid password");
        return;
    }

    $.ajax({
        type: 'GET',
        url: 'FiltersService.asmx/AllowAccessPassword?facultyid="' + facultyID + '"&roleID="' + roleID + '"&institutionID="' + institutionID + '"&sIP="' + ip + '"&studentID="' + studentID + '"&password="' + password + '"',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function UserPasswordSuccess(result) {
            // Servive returns void in case of success.
            $(':image').popover("destroy");
            $('.btn').popover("destroy");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#allowAcessPopoverError')[0].innerHTML = "Password reset failed.";

        }

    });
}



function ShowDisplayPasswordPopup(sender, top, left, name, userName, studentid, facultyid, roleID, institutionID, ip) {
    var divid = 'divDisplayPasswordPopup';
    var slid = 'slDisplayPasswordPopup';
    var height = 320;
    OpenDisplayPasswordPopup(divid, slid, sender, top, left, height, name, userName, studentid, facultyid, roleID, institutionID, ip);
}

function OpenDisplayPasswordPopup(divid, slid, sender, topOffset, leftOffset, height, name, userName, studentid, facultyid, roleID, institutionID, ip) {

    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divid);
    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';
    var control = $get(slid);
    control.Content.SilverlightPopup.Named = name;
    control.Content.SilverlightPopup.UserName = userName;
    control.Content.SilverlightPopup.StudentID = studentid;
    control.Content.SilverlightPopup.FacultyID = facultyid;
    control.Content.SilverlightPopup.RoleID = roleID;
    control.Content.SilverlightPopup.InstitutionID = institutionID;
    control.Content.SilverlightPopup.IP = ip;
    control.Content.SilverlightPopup.DisplayPassword();
    control.Content.SilverlightPopup.CancelClick = function (s, e) {
        ClosePopup(divid);
    };
    PopUp.style.visibility = 'visible';

}
//--------------------------------Display Password Popup------------------//

//--------------------------------Allow Acess Popup------------------//
//Shreyansh: This popups for the users who are in role  Director, Personnel, Instructor.
function ShowAllowAcessPopup(sender, top, left, name, studentid, facultyid, roleID, institutionID, ip, institutionName) {
    var divid = 'divAllowAccessPasswordPopup';
    var slid = 'slAllowAccessPasswordPopup';
    var height = 320;
    OpenAllowAcessPasswordPopup(divid, slid, sender, top, left, height, name, studentid, facultyid, roleID, institutionID, ip, institutionName);
}

function OpenAllowAcessPasswordPopup(divid, slid, sender, topOffset, leftOffset, height, name, studentid, facultyid, roleID, institutionID, ip, institutionName) {

    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divid);
    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';
    var control = $get(slid);
    control.Content.SilverlightPopup.UserName = name;
    control.Content.SilverlightPopup.StudentID = studentid;
    control.Content.SilverlightPopup.FacultyID = facultyid;
    control.Content.SilverlightPopup.RoleID = roleID;
    control.Content.SilverlightPopup.InstitutionID = institutionID;
    control.Content.SilverlightPopup.IP = ip;
    control.Content.SilverlightPopup.InstitutionName = institutionName;
    control.Content.SilverlightPopup.ShowPopUpData();
    control.Content.SilverlightPopup.Canceled = function (sender, e) {
        ClosePopup(divid);
    };
    control.Content.SilverlightPopup.Saved = function (sender, e) {
        ClosePopup(divid);
    };
    PopUp.style.visibility = 'visible';

}
//--------------------------------Allow Acess Popup------------------//
//-------------------------Practice PreviewWindow-------------------//
function ShowPraticeAssessmentPreview(batchID, ispreview) {
    var params = 'top=0,left=0,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,modal=yes';
    params += ',width=' + screen.width;
    params += ',height=' + screen.height;
    params += ',fullscreen=yes';
    var queryStr = 'batchid=' + batchID;
    queryStr = queryStr + '&IsPreview=' + ispreview;
    var url = '../ProductOffering/PracticeAssessmentPreviewHosting.aspx?';
    if (!(window.location.href.toLowerCase().indexOf('student') >= 0) &&
        !(window.location.href.toLowerCase().indexOf('faculty') >= 0) +
        !(window.location.href.toLowerCase().indexOf('general') >= 0)) {
        url = '../ProductOffering/PracticeAssessmentPreviewHosting.aspx?';
    }
    var newwin = window.open(url + queryStr, 'Assessment', params);
    if (!newwin) {
        ValidateMsg("Please select OK to begin your Practice Assessment.");
        $get("ctl00_btnOK").onclick = function () { ShowPraticeAssessmentPreview(batchID, ispreview); HideError(); return false; };
        return;
    }
    else {
        $get("ctl00_btnOK").onclick = function () { HideError(); return false };
    }
    if (window.focus) {
        newwin.focus();
    }
}



function ShowPraticeAssessmentPreviewFunction(batchID, ispreview, currentTutorialID) {
    var params = 'top=0,left=0,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,modal=yes';
    params += ',width=' + screen.width;
    params += ',height=' + screen.height;
    params += ',fullscreen=yes';
    var queryStr = 'batchid=' + batchID;
    queryStr = queryStr + '&IsPreview=' + ispreview;
    var url = './ProductOffering/PracticeAssessmentPreviewHosting.aspx?';
    if (!(window.location.href.toLowerCase().indexOf('student') >= 0) &&
        !(window.location.href.toLowerCase().indexOf('faculty') >= 0) +
        !(window.location.href.toLowerCase().indexOf('general') >= 0)) {
        url = './ProductOffering/PracticeAssessmentPreviewHosting.aspx?';
    }
    var newwin = window.open(url + queryStr, 'Assessment', params);
    if (!newwin) {
        ValidateMsg("Please select OK to begin your Practice Assessment.");
        $get("ctl00_btnOK").onclick = function () { ShowPraticeAssessmentPreview(batchID, ispreview); HideError(); return false; };
        return;
    }
    else {
        $get("ctl00_btnOK").onclick = function () { HideError(); return false };
    }
    if (window.focus) {
        newwin.focus();
    }
}

//-------------------------Practice PreviewWindow-------------------//

//------------------------Tutorial Preview Window Open Start---------------//

function ShowTutorialPreview(url) {
    var params = 'top=0,left=0,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,modal=yes';
    params += ',width=' + screen.width;
    params += ',height=' + screen.height;
    params += ',fullscreen=yes';

    if (!(window.location.href.toLowerCase().indexOf('student') >= 0) &&
        !(window.location.href.toLowerCase().indexOf('faculty') >= 0) +
        !(window.location.href.toLowerCase().indexOf('general') >= 0)) {
    }
    var newwin = window.open(url, 'Tutorial', params);
    if (!newwin) {
        ValidateMsg("Please select OK to begin your Tutorial.");
        $get("ctl00_btnOK").onclick = function () { ShowTutorialPreview(url); HideError(); return false; };
        return;
    }
    else {
        $get("ctl00_btnOK").onclick = function () { HideError(); return false };
    }
    if (window.focus) {
        newwin.focus();
    }
}

//------------------------Tutorial Preview Window Open End---------------//


//Global method for Validation //
function ValidateMsg(Validatetext) {
    var modalPopupBehavior = $find("mpValidationBehavior");
    
    var lblError = $get("ctl00_lblErrormessage");
    lblError.innerHTML = Validatetext;
    try {

        modalPopupBehavior.show();//using modalpopup extender. Sometimes it fails to load in DOM.

    } catch (e) {
        try {

            ValidateMessageShow(Validatetext);//using jQuery to show div.

        } catch (e) {

            alert(Validatetext);//If nothing works, shows in alert box

        }
    }
    return false;

}

function ValidateMessageShow(message) {
    if ($('#divValidationMessage')) {
        $('#lblErrormessageCustom').html(message);
        $('#divValidationMessage').show();
    }
}
function HideValidationMessageBox() {
    if ($('#divValidationMessage')) {
        $('#divValidationMessage').hide();
    }
}

var ValidationBehaviorCallBack = null;

function HideError() {
    var modalPopupBehavior = $find("mpValidationBehavior");
    var lblError = $get("ctl00_lblErrormessage");
    lblError.innerText = "";
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;

}
//Global method for Validation //


//Global method for Confirmation//
function ConfirmMsg(Validatetext) {
    var modalPopupBehavior = $find("mpConfirmationBehavior");
    var lblError = $get("ctl00_lblConfirmationMessage");
    lblError.innerHTML = Validatetext;
    modalPopupBehavior.show();
    return false;
}
//Global method for Confirmation//
function ConfirmBenchmarkDefault(defaultButton, gridID) {
    var modalPopupBehavior = $find("mpBenchmarkDefaultConfirmationBehavior");
    //    var lblError = $get("ctl00_lblConfirmationMessage");
    //    lblError.innerHTML = Validatetext;

    var gridId = $get("ctl00_hdnGridId");
    if (gridId != null)
        gridId.value = gridID;

    modalPopupBehavior.show();
    return false;
}

function ConfirmLockUnlock(resultsORassessments, lockOrUnlock, gridID) {
    var modalPopupBehavior = $find("mpLockUnlockConfirmationBehavior");

    var rdoselectall = $get("ctl00_rdoSelectAll")
    if (IsIE()) {
        if (rdoselectall != null)
            rdoselectall.children[0].children[0].children[0].children[0].checked = true;
    }
    else {
        if (rdoselectall != null)
            rdoselectall.children[0].children[0].children[0].children[0].checked = true;

    }

    var resultsAssessments = $get("ctl00_hdnLockUnlockResultsORassessments");
    if (resultsAssessments != null)
        resultsAssessments.value = resultsORassessments;

    var lockUnlock = $get("ctl00_hdnLockUnlockAttentionConf");
    if (lockUnlock != null)
        lockUnlock.value = lockOrUnlock;

    var gridId = $get("ctl00_hdnGridId");
    if (gridId != null)
        gridId.value = gridID;

    modalPopupBehavior.show();
    return false;
}


function ConfirmLockUnlockTutorials(lockOrUnlock, gridID) {
    var modalPopupBehavior = $find("mpLockUnlockConfirmationTutBehavior");

    var rdoselectall = $get(rdoSelectAllTut)

    if (IsIE()) {
        if (rdoselectall != null)
            rdoselectall.children[0].children[0].children[0].children[0].checked = true;
    }
    else {
        if (rdoselectall != null)
            rdoselectall.children[0].children[0].children[0].children[0].checked = true;

    }



    var lockUnlock = $get("ctl00_hdnLockUnlockAttentionConf");
    if (lockUnlock != null)
        lockUnlock.value = lockOrUnlock;

    var gridId = $get("ctl00_hdnGridId");
    if (gridId != null)
        gridId.value = gridID;

    modalPopupBehavior.show();
    return false;

}

function ConfirmSaveChanges(sender) {

    //if (event && event.srcElement)
    eventSaveChangesSourceElement = sender;

    if (eventSaveChangesSourceElement.onchange != null)
        eventSaveChangesSourceElementddlNewValue = getSelectedValue(eventSaveChangesSourceElement);

    var modalPopupBehavior = $find("mpAttentionProductsSaveChanges");

    modalPopupBehavior.show();
    return false;
}



function ConfirmScheduleAssignment() {
    var modalPopupBehavior = $find("mpScheduleAssignmentBehavior");
    modalPopupBehavior.show();
    return false;
}

function HideConfirmScheduleAssignment() {
    var modalPopupBehavior = $find("mpScheduleAssignmentBehavior");
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;
}


function ConfirmLockUnlockAttention(lockOrUnlock, gridID) {
    var modalPopupBehavior = $find("mpAttentionConfirmationBehavior");
    modalPopupBehavior.show();
    return false;
}

function ConfirmLockUnlockAttentionTut(lockOrUnlock, gridID) {
    var modalPopupBehavior = $find("mpAttentionConfirmationTutBehavior");
    modalPopupBehavior.show();
    return false;
}


ValidationBehaviorCallBack = null;

// Check this flag variable for Confirm Msg Box - True or False
//  When true or false is clicked the flag will be set in HideConfirmMsg
//  Always set ConfirmMsgStatus to null value before opening Confirm Msg Box to ensure proper working.
function HideConfirmMsg() {
    var modalPopupBehavior = $find("mpConfirmationBehavior");
    var lblError = $get("ctl00_lblConfirmationMessage");
    lblError.innerText = "";
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;
}

function HideProductsSaveChangesYES() {

    var modalPopupBehavior = $find("mpAttentionProductsSaveChanges");
    modalPopupBehavior.hide();

    if (productsTabHasUnsavedContent != null && productsTabHasUnsavedContent != '')
        $get(productsTabHasUnsavedContent).value = '';

    if (eventSaveChangesSourceElement != null) {

        if (IsIE()) {

            if (eventSaveChangesSourceElement.onchange != null) {
                setValueSelected(eventSaveChangesSourceElement, eventSaveChangesSourceElementddlNewValue);
                eventSaveChangesSourceElement.onchange();
            }
            else
                eventSaveChangesSourceElement.click();
        }
        else {

            if (eventSaveChangesSourceElement.onchange != null) {
                setValueSelected(eventSaveChangesSourceElement, eventSaveChangesSourceElementddlNewValue);
                eventSaveChangesSourceElement.onchange();
            }
            else
                eventSaveChangesSourceElement.onclick();
        }
    }
    ClearGlobalSiteMasterVariables();

    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;
}

function HideProductsSaveChangesNO() {
    var modalPopupBehavior = $find("mpAttentionProductsSaveChanges");
    modalPopupBehavior.hide();

    if (eventSaveChangesSourceElement != null) {
        if (eventSaveChangesSourceElement.onchange != null) {
            setValueSelected(eventSaveChangesSourceElement, eventSaveChangesSourceElementddlOldValue);
        }
    }
    ClearGlobalSiteMasterVariables();
    return false;
}

function ClearGlobalSiteMasterVariables() {
    //clean values;
    eventSaveChangesSourceElementddlNewValue = '';
    eventSaveChangesSourceElementddlOldValue = '';
    eventSaveChangesSourceElement = null;
}
function HideConfirmLockUnlock() {
    var modalPopupBehavior = $find("mpLockUnlockConfirmationBehavior");
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    var lockUnlock = $get("ctl00_LockUnlockAttentionConf");
    if (lockUnlock != null)
        lockUnlock.value = '';
    return false;
}

function HideConfirmLockUnlockTut() {
    var modalPopupBehavior = $find("mpLockUnlockConfirmationTutBehavior");
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    var lockUnlock = $get("ctl00_LockUnlockAttentionConf");
    if (lockUnlock != null)
        lockUnlock.value = '';
    return false;
}

function HideConfirmLockUnlockAttention() {
    var modalPopupBehavior = $find("mpAttentionConfirmationBehavior");
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;
}

function HideConfirmLockUnlockAttentionTut() {
    var modalPopupBehavior = $find("mpAttentionConfirmationTutBehavior");
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;
}

function ShowConfirmSetTimeDefaultAttention() {
    var modalPopupBehavior = $find("mpSetDefaultTimeAttentionConfirmationBehavior");
    modalPopupBehavior.show();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;
}

function HideConfirmSetTimeDefaultAttention() {
    var modalPopupBehavior = $find("mpSetDefaultTimeAttentionConfirmationBehavior");
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;
}



function ShowConfirmSetDefaultTime() {
    var modalPopupBehavior = $find("mpSetDefaultTimeConfirmationBehavior");
    modalPopupBehavior.show();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;
}
function HideConfirmSetDefaultTime() {
    var modalPopupBehavior = $find("mpSetDefaultTimeConfirmationBehavior");
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    return false;
}
function HideConfirmBenchmarkDefault() {
    var modalPopupBehavior = $find("mpBenchmarkDefaultConfirmationBehavior");
    modalPopupBehavior.hide();
    if (ValidationBehaviorCallBack != null) {
        ValidationBehaviorCallBack();
        ValidationBehaviorCallBack = null;
    }
    defaultBenchMarkValue = $get("ctl00_txtBenchmarkDefaultPercentage").value;
    var dblBenchMarkTypeControl = $get("ctl00_ddlBenchMarkType");
    if (dblBenchMarkTypeControl[0].selected == true)
        benchmarkDefaultCompleteText = dblBenchMarkTypeControl[0].text
    else if (dblBenchMarkTypeControl[1].selected == true)
        benchmarkDefaultCompleteText = dblBenchMarkTypeControl[1].text
    else if (dblBenchMarkTypeControl[2].selected == true)
        benchmarkDefaultCompleteText = dblBenchMarkTypeControl[2].text
    var gridId = $get("ctl00_hdnGridId");
    if (defaultBenchMarkValue != null && (defaultBenchMarkValue == '' || isNaN(defaultBenchMarkValue))) {
        defaultBenchMarkValue = 0;
    }
    PopulateDefaultBenchmark(null, gridId.value);
    return false;
}

//Global method for Confirmation //

/*** Products tab methods */


function SetTimeBetweenAttemptsAll() {
    var setTimeAllAttemptsAllPages = $get(hdnProcterSetTimeAllAttemptsAllPages);
    var defaultTimeValue = $get(hdnDefaultTimeValue);
    var grid = $get(hdnSetTimeGridId);
    var rdoSetTimeSelectl = $get(rdoSetTimeSelectAll);
    if (IsIE()) {
        if (setTimeAllAttemptsAllPages != null && defaultTimeValue != null && grid != null) {
            if (grid.children && grid.children[0].children.length > 0) {
                var chkbxVal = rdoSetTimeSelectl.children[0].children[1].children[0].children[0].checked;
                setTimeAllAttemptsAllPages.value = (chkbxVal == true) ? defaultTimeValue.value : '';
                //Only one row in grid
                if (grid.children[0].children.length == 2)
                    bubbleSetTimeAssessmentsEvent(defaultTimeValue.value, grid, 0);
                    //multiple rows in grid
                else
                    for (var i = 0; i < grid.children[0].children.length; i += 2)
                        bubbleSetTimeAssessmentsEvent(defaultTimeValue.value, grid, i);

                if (chkbxVal == true) {
                    $get(hdnTimeBetAttempts).value = '';
                    selectedTimeBtwAttempts.length = new Array();
                }
            }
        }
    }
    else {
        if (setTimeAllAttemptsAllPages != null && defaultTimeValue != null && grid != null) {
            if (grid.children && grid.children[0].children.length > 0) {
                var chkbxVal = rdoSetTimeSelectl.children[0].children[1].children[0].children[0].checked;
                setTimeAllAttemptsAllPages.value = (chkbxVal == true) ? defaultTimeValue.value : '';
                //Only one row in grid
                if (grid.children[0].children.length == 2)
                    bubbleSetTimeAssessmentsEvent(defaultTimeValue.value, grid, 0);
                    //multiple rows in grid
                else
                    for (var i = 0; i < grid.children[0].children.length; i += 2)
                        bubbleSetTimeAssessmentsEvent(defaultTimeValue.value, grid, i);

                if (chkbxVal == true) {
                    $get(hdnTimeBetAttempts).value = '';
                    selectedTimeBtwAttempts.length = new Array();
                }
            }
        }
    }
    $get(hdnTimeBetAttempts).value = selectedTimeBtwAttempts.join(',');
    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    checkIsPageDirtyEableSaveChages();

    //alert( 'values:  ' + $get(hdnTimeBetAttempts).value + 'All:  ' + setTimeAllAttemptsAllPages.value + 'all val: ' + defaultTimeValue.value);

    return false;
}


function bubbleSetTimeAssessmentsEvent(setTimeValue, grid, i) {

    var tbCell = null;
    if (IsIE()) {
        if (productIDExistsForTheClass != "")
            tbCell = grid.children[0].children[i].children[7];
        else
            tbCell = grid.children[0].children[i].children[6];

        if (tbCell != null) {

            for (var j = 0; j < selectedTimeBtwAttempts.length; j++)
                if (selectedTimeBtwAttempts[j].indexOf('|' + tbCell.getAttribute('BatchID')) >= 0)
                    selectedTimeBtwAttempts.splice(j, 1);

            //if unlock clicked
            if (setTimeValue == "0" || setTimeValue == "") {
                tbCell.children[0].style.display = '';
                tbCell.children[1].style.display = 'none';
                tbCell.setAttribute("hrs", "0");
                selectedTimeBtwAttempts[selectedTimeBtwAttempts.length] = '0|' + tbCell.getAttribute('BatchID');
            }
            else // if lock clicked
            {
                tbCell.children[1].style.display = '';
                tbCell.children[1].innerText = setTimeValue + " hrs";
                tbCell.children[0].style.display = 'none';
                tbCell.setAttribute("hrs", setTimeValue);
                selectedTimeBtwAttempts[selectedTimeBtwAttempts.length] = setTimeValue + '|' + tbCell.getAttribute('BatchID');
            }
        }
    }
    else {
        if (productIDExistsForTheClass != "")
            tbCell = grid.children[0].children[i].children[7];
        else
            tbCell = grid.children[0].children[i].children[6];

        if (tbCell != null) {

            for (var j = 0; j < selectedTimeBtwAttempts.length; j++)
                if (selectedTimeBtwAttempts[j].indexOf('|' + tbCell.getAttribute('BatchID')) >= 0)
                    selectedTimeBtwAttempts.splice(j, 1);

            //if unlock clicked
            if (setTimeValue == "0" || setTimeValue == "") {
                tbCell.children[0].style.display = '';
                tbCell.children[1].style.display = 'none';
                tbCell.setAttribute("hrs", "0");
                selectedTimeBtwAttempts[selectedTimeBtwAttempts.length] = '0|' + tbCell.getAttribute('BatchID');
            }
            else // if lock clicked
            {
                tbCell.children[1].style.display = '';
                tbCell.children[1].innerText = setTimeValue + " hrs";
                tbCell.children[1].innerHTML = setTimeValue + " hrs";
                tbCell.children[0].style.display = 'none';
                tbCell.setAttribute("hrs", setTimeValue);
                selectedTimeBtwAttempts[selectedTimeBtwAttempts.length] = setTimeValue + '|' + tbCell.getAttribute('BatchID');
            }
        }
    }
}




/***** Tutorials ****/

function LockOrUnLockAllTut() {
    var lockUnlock = $get(hdnLockUnlockAttentionConf);
    var lockUnlockAllAssessmentsAllPages = $get(hdnTutorialLockUnLockAllAssessmentsAllPages);
    var grid = $get(gvProductsTutorialAssessment);
    var rdoselectall = $get(rdoSelectAllTut);
    if (IsIE()) {

        if (lockUnlock != null && grid != null) {
            if (grid.children && grid.children[0].children.length > 0) {

                //Only one row in grid
                if (grid.children[0].children.length == 2) {
                    var chkbxVal = rdoselectall.children[0].children[1].children[0].children[0].checked;
                    lockUnlockAllAssessmentsAllPages.value = (chkbxVal == true) ? lockUnlock.value : '';
                    bubbleLockUnlockTutsEvent(lockUnlock.value, grid, 0);
                    if (chkbxVal == true) {
                        $get(hndTutorialLockUnlockAssessmentIDs1).value = '';
                        selectedEnableDisableAssessments.length = new Array();
                    }

                }
                    //multiple rows in grid
                else {
                    var chkbxVal = rdoselectall.children[0].children[1].children[0].children[0].checked;
                    lockUnlockAllAssessmentsAllPages.value = (chkbxVal == true) ? lockUnlock.value : '';
                    for (var i = 0; i < grid.children[0].children.length; i += 2)
                        if (grid.children[0].children[i].tagName.indexOf('/') == -1)
                            bubbleLockUnlockTutsEvent(lockUnlock.value, grid, i);
                    if (chkbxVal == true) {
                        $get(hndTutorialLockUnlockAssessmentIDs1).value = '';
                        selectedEnableDisableAssessments = new Array();
                    }
                }
            }
        }

        $get(hndTutorialLockUnlockAssessmentIDs1).value = selectedEnableDisableAssessments.join(',');
        rdoselectall.children[0].children[0].children[0].children[0].checked = true;
        $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
        checkIsPageDirtyEableSaveChages();
        lockUnlock.value = '';
    }
    else {

        if (lockUnlock != null && grid != null) {
            if (grid.children && grid.children[0].children.length > 0) {

                //Only one row in grid
                if (grid.children[0].children.length == 2) {
                    var chkbxVal = rdoselectall.children[0].children[1].children[0].children[0].checked;
                    lockUnlockAllAssessmentsAllPages.value = (chkbxVal == true) ? lockUnlock.value : '';
                    bubbleLockUnlockTutsEvent(lockUnlock.value, grid, 0);
                    if (chkbxVal == true) {
                        $get(hndTutorialLockUnlockAssessmentIDs1).value = '';
                        selectedEnableDisableAssessments.length = new Array();
                    }

                }
                    //multiple rows in grid
                else {
                    var chkbxVal = rdoselectall.children[0].children[1].children[0].children[0].checked;
                    lockUnlockAllAssessmentsAllPages.value = (chkbxVal == true) ? lockUnlock.value : '';
                    for (var i = 0; i < grid.children[0].children.length; i += 2)
                        bubbleLockUnlockTutsEvent(lockUnlock.value, grid, i);
                    if (chkbxVal == true) {
                        $get(hndTutorialLockUnlockAssessmentIDs1).value = '';
                        selectedEnableDisableAssessments = new Array();
                    }
                }
            }
        }

        $get(hndTutorialLockUnlockAssessmentIDs1).value = selectedEnableDisableAssessments.join(',');
        rdoselectall.children[0].children[0].children[0].children[0].checked = true;
        $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
        checkIsPageDirtyEableSaveChages();
        lockUnlock.value = '';
    }
    return false;
}


function bubbleLockUnlockTutsEvent(lockUnlock, grid, i) {

    if (IsIE())
        var imgBtn = grid.children[0].children[i].children[4].children[0];
    else
        var imgBtn = grid.children[0].children[i].children[4].children[0];
    // Process further when imgBtn is not null
    if (imgBtn != null) {

        for (i = 0; i < selectedEnableDisableAssessments.length; i++)
            if ((selectedEnableDisableAssessments[i] == '1|' + imgBtn.value)
                     || (selectedEnableDisableAssessments[i] == '0|' + imgBtn.value))
                selectedEnableDisableAssessments.splice(i, 1);

        //if unlock clicked
        if (lockUnlock == 'unlock') {
            imgBtn.src = imgBtn.src.replace("/lock-icon.png", "/unlock-icon.png");
            imgBtn.setAttribute("IsLock", "false");
            selectedEnableDisableAssessments[selectedEnableDisableAssessments.length] = '1|' + imgBtn.value;
        }
        else // if lock clicked
        {
            imgBtn.src = imgBtn.src.replace("/unlock-icon.png", "/lock-icon.png");
            imgBtn.setAttribute("IsLock", "true");
            selectedEnableDisableAssessments[selectedEnableDisableAssessments.length] = '0|' + imgBtn.value;
        }
    }
}


function getHiddenTutorialValue() {
    $get(hndIsEnablePipeInstitutionPurchaseIDs).value = $get(hndTutorialLockUnlockAssessmentIDs1).value;
    selectedEnableDisableAssessments = new Array();
    $get(hndTutorialLockUnlockAssessmentIDs1).value = '';
    $get(productsTabHasUnsavedContent).value = '';
    return true;
}



function SetEnableDisableTutorials(sender, batchID, saveChangesButton) {

    var IsLock = sender.getAttribute("IsLock");

    for (i = 0; i < selectedEnableDisableAssessments.length; i++)
        if ((selectedEnableDisableAssessments[i] == '1|' + batchID)
                     || (selectedEnableDisableAssessments[i] == '0|' + batchID))
            selectedEnableDisableAssessments.splice(i, 1);


    if (IsLock == 'True' || IsLock == 'true') {
        sender.src = sender.src.replace("/lock-icon.png", "/unlock-icon.png");
        sender.setAttribute("IsLock", "false");
        selectedEnableDisableAssessments[selectedEnableDisableAssessments.length] = '1|' + batchID;
    }
    else {
        sender.src = sender.src.replace("/unlock-icon.png", "/lock-icon.png");
        sender.setAttribute("IsLock", "true");
        selectedEnableDisableAssessments[selectedEnableDisableAssessments.length] = '0|' + batchID;
    }
    $get(hndTutorialLockUnlockAssessmentIDs1).value = selectedEnableDisableAssessments.join(',');
    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    checkIsPageDirtyEableSaveChages();
    var childGrid = sender.parentNode.parentNode.nextElementSibling;
    var allModulesLockUnlockImages = $(childGrid).find("[id$='gvModules']").find("[id$='imgbtnEnableDisableModule']")
    if (allModulesLockUnlockImages.length != 0) {
        $.each(allModulesLockUnlockImages, function (data, item) {
            item.click();
        });
    }
    return false;
}

/*
Commented the function as per JIRA ATING-3533
function SetEnableDisableModules(sender, tutidModuleid, saveChangesButton) {
    var IsLock = sender.getAttribute("IsLock");

    for (i = 0; i < selectedEnableDisableModules.length; i++)
        if ((selectedEnableDisableModules[i] == '1|' + tutidModuleid + '|')
                     || (selectedEnableDisableModules[i] == '0|' + tutidModuleid + '|'))
        selectedEnableDisableModules.splice(i, 1);

    if ((IsLock == 'True' || IsLock == 'true') && sender.id.indexOf("imgbtnEnableDisableOptimalResponses") == -1) {
        sender.src = sender.src.replace("/lock-icon.png", "/unlock-icon.png");
        sender.setAttribute("IsLock", "false");
        selectedEnableDisableModules[selectedEnableDisableModules.length] = '1|' + tutidModuleid + '|';
    }
    else if ((IsLock == 'True' || IsLock == 'true') && sender.id.indexOf("imgbtnEnableDisableOptimalResponses") != -1) {
        sender.src = sender.src.replace("/lock-icon.png", "/unlock-icon.png");
        sender.setAttribute("IsLock", "false");
        selectedEnableDisableModules[selectedEnableDisableModules.length] = '|' + tutidModuleid + '|1';
    }
    else if ((IsLock == 'False' || IsLock == 'false') && sender.id.indexOf("imgbtnEnableDisableOptimalResponses") != -1) {
        sender.src = sender.src.replace("/unlock-icon.png", "/lock-icon.png");
        sender.setAttribute("IsLock", "true");
        selectedEnableDisableModules[selectedEnableDisableModules.length] = '|' + tutidModuleid + '|0';
    }
    else if ((IsLock == 'False' || IsLock == 'false') && sender.id.indexOf("imgbtnEnableDisableOptimalResponses") == -1) {
        sender.src = sender.src.replace("/unlock-icon.png", "/lock-icon.png");
        sender.setAttribute("IsLock", "true");
        selectedEnableDisableModules[selectedEnableDisableModules.length] = '0|' + tutidModuleid + '|';
    }

    $get(hndTutorialLockUnlockModules).value = selectedEnableDisableModules.join(',');
    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    checkIsPageDirtyEableSaveChages();
    return false;
}


//Modfied the SetEnableDisableModules function as per JIRA ATING-3533
*/
function SetEnableDisableModules(sender, tutidModuleid, saveChangesButton) {

    var IsLock = sender.getAttribute("IsLock");
    var colvalues = sender.getAttribute("colvalues");
    var index = sender.getAttribute("value");
    var Flag = sender.getAttribute("Flag");
    var strvalue;
    var status = 1;
    var results;
    //Create object and add values to array list
    if (colvalues.length > 1) {

        results = colvalues.split("-");
        var obj = selectedEnableDisableModule[index]
        if (selectedEnableDisableModule[index] == undefined) {
            ModuleValues = new Object();
            ModuleValues.Enable = results[0];
            ModuleValues.OptimalResponses = results[1];
            ModuleValues.RationaleResponses = results[2];
            ModuleValues.DecisionLog = results[3];
            strvalue = '|' + tutidModuleid + '|' + results[0] + '|' + results[1] + '|' + results[2] + '|' + results[3];
        }
        else {
            ModuleValues = obj
            results[0] = ModuleValues.Enable;
            results[1] = ModuleValues.OptimalResponses;
            results[2] = ModuleValues.RationaleResponses;
            results[3] = ModuleValues.DecisionLog;
            strvalue = '|' + tutidModuleid + '|' + results[0] + '|' + results[1] + '|' + results[2] + '|' + results[3];
        }

        switch (Flag) {
            case "0":
                results[0] = IsLock
                ModuleValues.Enable = results[0];
                //                ModuleValues.OptimalResponses = "";
                //                results[1] = "";
                break;
            case "1":
                results[1] = IsLock
                ModuleValues.OptimalResponses = results[1];
                //                ModuleValues.Enable = "";
                //                results[0] = "";
                break;
            case "2":
                results[2] = IsLock
                ModuleValues.RationaleResponses = results[2];
                break;
            case "3":
                results[3] = IsLock
                ModuleValues.DecisionLog = results[3];
                break;
            default:

        }

        selectedEnableDisableModule[index] = ModuleValues;
    }

    if (IsLock == 'True' || IsLock == 'true') {

        sender.src = sender.src.replace("/lock-icon.png", "/unlock-icon.png");
        sender.setAttribute("IsLock", "false");
    }
    else {
        sender.src = sender.src.replace("/unlock-icon.png", "/lock-icon.png");
        sender.setAttribute("IsLock", "true")
    }

    //Check the array for the existing value, if any modification is done for already added value then replace the olde value with new one
    for (i = 0; i < selectedEnableDisableModules.length; i++) {
        if (selectedEnableDisableModules[i] == strvalue) {
            selectedEnableDisableModules[i] = '|' + tutidModuleid + '|' + results[0] + '|' + results[1] + '|' + results[2] + '|' + results[3];
            status = 0;
        }
    }
    //if value is new then add to array 
    if (status == 1) {
        selectedEnableDisableModules[selectedEnableDisableModules.length] = '|' + tutidModuleid + '|' + results[0] + '|' + results[1] + '|' + results[2] + '|' + results[3];
        $get(hndTutorialLockUnlockModules).value = selectedEnableDisableModules.join(',');
    }
        //if value is modified then over write the values with array value
    else {
        $get(hndTutorialLockUnlockModules).value = selectedEnableDisableModules;
    }

    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    checkIsPageDirtyEableSaveChages();
    return false;

}

// Added function as per JIRA ATING-3533
function ModuleValues(Enable, OptimalResponses, RationaleResponses) {
    this.Enable = Enable;
    this.OptimalResponses = OptimalResponses;
    this.RationaleResponses = RationaleResponses;
    this.DecisionLog = DecisionLog;
}

//ended the code



function SetEnableDisableTests(sender, tutidModuleid, saveChangesButton) {

    var IsLock = sender.getAttribute("IsLock");

    for (i = 0; i < selectEnableDisableTests.length; i++)
        if ((selectEnableDisableTests[i] == '1|' + tutidModuleid)
                     || (selectEnableDisableTests[i] == '0|' + tutidModuleid))
            selectEnableDisableTests.splice(i, 1);


    if (IsLock == 'True' || IsLock == 'true') {
        sender.src = sender.src.replace("/lock-icon.png", "/unlock-icon.png");
        sender.setAttribute("IsLock", "false");
        selectEnableDisableTests[selectEnableDisableTests.length] = '1|' + tutidModuleid;
    }
    else {
        sender.src = sender.src.replace("/unlock-icon.png", "/lock-icon.png");
        sender.setAttribute("IsLock", "true");
        selectEnableDisableTests[selectEnableDisableTests.length] = '0|' + tutidModuleid;
    }
    $get(hndTutorialLockUnlockTests).value = selectEnableDisableTests.join(',');
    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    //alert($get(hndTutorialLockUnlockTests).value);
    checkIsPageDirtyEableSaveChages();
    return false;
}



function SetModuleProducts(value, link) {

    if (!ContinueCheckUnsavedContent(link))
        return false;

    var hiddenTutorial = $get(hdnTutorial);
    var buttonPreviewModule = $get(btnPreviewModule);

    if (hiddenTutorial != null && buttonPreviewModule != null) {
        hdnTutorial.value = value;
        buttonPreviewModule.click();
    }
    return true;
}


function SetTimeBetweenAttemptsAllTests(defaultTimeValue) {
    var grid = null;
    if (IsIE()) {
        if (TimeBetweenAttemptsSender != null)
            grid = TimeBetweenAttemptsSender.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0];

        if (defaultTimeValue != null && grid != null) {
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++)
                    bubbleSetTimeAttemptsAllEvent(defaultTimeValue, grid, i);
            }
        }
    }
    else {
        if (TimeBetweenAttemptsSender != null)
            grid = TimeBetweenAttemptsSender.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0];

        if (defaultTimeValue != null && grid != null) {
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++)
                    bubbleSetTimeAttemptsAllEvent(defaultTimeValue, grid, i);
            }
        }
    }
    $get(hdnTimeBetAttempts).value = selectedTimeBtwAttempts.join(',');
    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    checkIsPageDirtyEableSaveChages();
    return false;
}

function bubbleSetTimeAttemptsAllEvent(setTimeValue, grid, i) {

    var tbCell = null;
    if (IsIE()) {
        tbCell = grid.children[0].children[i].children[5];

        if (tbCell != null) {

            for (var j = 0; j < selectedTimeBtwAttempts.length; j++)
                if (selectedTimeBtwAttempts[j].indexOf('|' + tbCell.getAttribute('BatchID')) >= 0)
                    selectedTimeBtwAttempts.splice(j, 1);

            //if unlock clicked
            if (setTimeValue == "0" || setTimeValue == "") {
                tbCell.children[0].style.display = '';
                tbCell.children[1].style.display = 'none';
                tbCell.setAttribute("hrs", "0");
                selectedTimeBtwAttempts[selectedTimeBtwAttempts.length] = '0|' + tbCell.getAttribute('BatchID');
            }
            else // if lock clicked
            {
                tbCell.children[1].style.display = '';
                tbCell.children[1].innerText = setTimeValue + " hrs";
                tbCell.children[0].style.display = 'none';
                tbCell.setAttribute("hrs", setTimeValue);
                selectedTimeBtwAttempts[selectedTimeBtwAttempts.length] = setTimeValue + '|' + tbCell.getAttribute('BatchID');
            }
        }
    }
    else {
        tbCell = grid.children[0].children[i].children[5];
        if (tbCell != null) {

            for (var j = 0; j < selectedTimeBtwAttempts.length; j++)
                if (selectedTimeBtwAttempts[j].indexOf('|' + tbCell.getAttribute('BatchID')) >= 0)
                    selectedTimeBtwAttempts.splice(j, 1);

            //if unlock clicked
            if (setTimeValue == "0" || setTimeValue == "") {
                tbCell.children[0].style.display = '';
                tbCell.children[1].style.display = 'none';
                tbCell.setAttribute("hrs", "0");
                selectedTimeBtwAttempts[selectedTimeBtwAttempts.length] = '0|' + tbCell.getAttribute('BatchID');
            }
            else // if lock clicked
            {
                tbCell.children[1].style.display = '';
                tbCell.children[1].innerText = setTimeValue + " hrs";
                tbCell.children[1].innerHTML = setTimeValue + " hrs";
                tbCell.children[0].style.display = 'none';
                tbCell.setAttribute("hrs", setTimeValue);
                selectedTimeBtwAttempts[selectedTimeBtwAttempts.length] = setTimeValue + '|' + tbCell.getAttribute('BatchID');
            }
        }
    }
}


var cutScoreSender = null;
function ShowCutScoreAllTestsPopup(sender, topOffset, leftOffset) {

    if (sender == null) return;

    cutScoreSender = sender;
    TimeBetweenAttemptsSender = sender;

    var timeInHours = TimeBetweenAttemptsSender.parentNode.getAttribute("percent");
    if (timeInHours == null) {
        timeInHours = "";
    }

    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);

    var popoverContent = ['<div><form>',
                        '<div class="modal-header">',
                        '<div class="modal-title text-ati-red"><span class="make-font-bold"><p>Set Pass / Fail Cut Score:</p></span></div>',
                        '</div>',
                        '<div class="modal-body">',
                            '<div class="margin-top-10"></div>',
                            '<div class="pull-left margin-bottom-10"><input id="txtTimeBetweenAttempts" name="txtTimeBetweenAttempts" maxlength="3" onkeypress="return isNumber(event)" size="5" width="20px" type="text" value="' + timeInHours + '"/> %</div>',
                            '<div class="modal-footer margin-top-20" style="text-align:center">',
                            '<button type="button" class="btn btn-primary pull-left"  tabindex="0" onclick="SetPassFailCutScoreAllPopoverSave(txtTimeBetweenAttempts.value)" >Save</button>',
                           '<a href="#" class="pull-right"  tabindex="0" data-dismiss="popover" onclick="$(this).closest(\'div.popover\').prev().popover(\'destroy\')">Cancel</a>',
                            '</div>',
                        '</div>',
                         '<div class="margin-top-10" style="color:#fff">__</div>',
                    '</form></div>'];

    DisplayPopoverTimeBetweenAttempts(popoverElement, popoverContent);

    SetPassFailCutScoreAllPopoverSave = function (timeInHours) {

        if (timeInHours == "")
            timeInHours = "0";

        if (isNaN(timeInHours))
            return;

        if (timeInHours > 100 || timeInHours < 1) {
            ValidateMsg("Cut Score value should be 1 to 100.");
            return;
        }

        $get(hdnCutScores).value = parseInt(timeInHours, 10);

        ClosePopup("divCutScorePopup");

        var radioButttons = $get(rdoSetTimeSelectAll);
        var radioButttons = $get(rdoSetTimeSelectAll);
        if (radioButttons != null) {


            //set radio to default
            if (IsIE())
                radioButttons.children[0].children[0].children[0].children[0].checked = true;
            else
                radioButttons.children[0].children[0].children[0].children[0].checked = true;
        }
        SetCutScoreAllTests($get(hdnCutScores).value);

        $(':image').popover("destroy");
        $('.btn').popover("destroy");
        $('*').popover("destroy");

    };
    return false;
  
}






function SetCutScoreAllTests(defaultTimeValue) {
    var grid = null;
    if (IsIE()) {
        if (cutScoreSender != null)
            grid = cutScoreSender.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0];

        if (defaultTimeValue != null && grid != null) {
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++)
                    bubbleCutScoreAllEvent(defaultTimeValue, grid, i);
            }
        }
    }
    else {
        if (cutScoreSender != null)
            grid = cutScoreSender.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0];

        if (defaultTimeValue != null && grid != null) {
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++)
                    bubbleCutScoreAllEvent(defaultTimeValue, grid, i);
            }
        }
    }
    $get(hdnCutScores).value = selectedCutScore.join(',');
    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    checkIsPageDirtyEableSaveChages();
    return false;
}

function bubbleCutScoreAllEvent(setTimeValue, grid, i) {

    var tbCell = null;
    if (IsIE()) {
        tbCell = grid.children[0].children[i].children[6];


        if (tbCell != null) {

            for (var j = 0; j < selectedCutScore.length; j++)
                if (selectedCutScore[j].indexOf('|' + tbCell.getAttribute('BatchID')) >= 0)
                    selectedCutScore.splice(j, 1);

            //if unlock clicked
            if (setTimeValue == "0" || setTimeValue == "") {
                tbCell.children[0].style.display = '';
                tbCell.children[1].style.display = 'none';
                tbCell.setAttribute("percent", "0");
                selectedCutScore[selectedCutScore.length] = '0|' + tbCell.getAttribute('BatchID');
            }
            else // if lock clicked
            {
                tbCell.children[1].style.display = '';
                tbCell.children[1].innerText = setTimeValue + " %";
                tbCell.children[0].style.display = 'none';
                tbCell.setAttribute("percent", setTimeValue);
                selectedCutScore[selectedCutScore.length] = setTimeValue + '|' + tbCell.getAttribute('BatchID');
            }
        }
    }
    else {
        tbCell = grid.children[0].children[i].children[6];

        if (tbCell != null) {

            for (var j = 0; j < selectedCutScore.length; j++)
                if (selectedCutScore[j].indexOf('|' + tbCell.getAttribute('BatchID')) >= 0)
                    selectedCutScore.splice(j, 1);

            //if unlock clicked
            if (setTimeValue == "0" || setTimeValue == "") {
                tbCell.children[0].style.display = '';
                tbCell.children[1].style.display = 'none';
                tbCell.setAttribute("percent", "0");
                selectedCutScore[selectedCutScore.length] = '0|' + tbCell.getAttribute('BatchID');
            }
            else // if lock clicked
            {
                tbCell.children[1].style.display = '';
                tbCell.children[1].innerText = setTimeValue + " %";
                tbCell.children[1].innerHTML = setTimeValue + " %";
                tbCell.children[0].style.display = 'none';
                tbCell.setAttribute("percent", setTimeValue);
                selectedCutScore[selectedCutScore.length] = setTimeValue + '|' + tbCell.getAttribute('BatchID');
            }
        }


    }
}

function ShowPassFailCutScorePopup(sender, topOffset, leftOffset) {


    if (sender == null) return;

    cutScoreSender = sender;
    TimeBetweenAttemptsSender = sender;

    var timeInHours = TimeBetweenAttemptsSender.parentNode.getAttribute("percent");
    if (timeInHours == null) {
        timeInHours = "";
    }

    var popoverElementSelector = '#' + sender.id;
    var popoverElement = $(popoverElementSelector);

    var popoverContent = ['<div><form>',
                        '<div class="modal-header">',
                        '<div class="modal-title text-ati-red"><span class="make-font-bold"><p>Set Pass / Fail Cut Score:</p></span></div>',
                        '</div>',
                        '<div class="modal-body">',
                            '<div class="margin-top-10"></div>',
                            '<div class="pull-left margin-bottom-10"><input id="txtTimeBetweenAttempts" name="txtTimeBetweenAttempts" maxlength="3" onkeypress="return isNumber(event)" size="5" width="20px" type="text" value="' + timeInHours + '"/> %</div>',
                            '<div class="modal-footer margin-top-20" style="text-align:center">',
                            '<button type="button" tabindex="0" class="btn btn-primary pull-left" onclick="SetPassFailCutScorePopoverSave(txtTimeBetweenAttempts.value)" >Save</button>',
                           '<a href="#" class="pull-right"  tabindex="0" data-dismiss="popover" onclick="$(this).closest(\'div.popover\').prev().popover(\'destroy\')">Cancel</a>',
                            '</div>',
                        '</div>',
                         '<div class="margin-top-10" style="color:#fff">__</div>',
                    '</form></div>'];

    DisplayPopoverTimeBetweenAttempts(popoverElement, popoverContent);

    SetPassFailCutScorePopoverSave = function (timeInHours) {

        if (timeInHours == "")
            timeInHours = "0";

        if (timeInHours > 100 || timeInHours < 1) {
            ValidateMsg("Cut Score value should be 1 to 100.");
            return;
        }

        if (!isNaN(timeInHours)) {
            var minImageIcon = null;
            var minTextlabel = null;

            var childNodeElements = TimeBetweenAttemptsSender.parentNode.children;

            if (IsIE()) {
                minImageIcon = $.grep(childNodeElements, function (e) { return e.id.toString().substring(e.id.toString().length - 14, e.id.toString().length) == "imgbtnPassFail"; })[0];
                minTextlabel = $.grep(childNodeElements, function (e) { return e.id.toString().substring(e.id.toString().length - 11, e.id.toString().length) == "lblPassFail"; })[0];
            }
            else {
                minImageIcon = $.grep(childNodeElements, function (e) { return e.id.toString().substring(e.id.toString().length - 14, e.id.toString().length) == "imgbtnPassFail"; })[0];
                minTextlabel = $.grep(childNodeElements, function (e) { return e.id.toString().substring(e.id.toString().length - 11, e.id.toString().length) == "lblPassFail"; })[0];
            }

            TimeBetweenAttemptsSender.parentNode.setAttribute("percent", parseInt(timeInHours, 10));
            if (timeInHours == "0") {
                minImageIcon.style.display = '';
                minTextlabel.style.display = 'none';
            }
            else {

                minImageIcon.style.display = 'none';
                minTextlabel.style.display = '';
                minTextlabel.innerText = parseInt(timeInHours, 10) + " %";
                minTextlabel.innerHTML = parseInt(timeInHours, 10) + " %";
            }

            for (i = 0; i < selectedCutScore.length; i++)
                if (selectedCutScore[i].indexOf('|' + TimeBetweenAttemptsSender.parentNode.getAttribute("BatchID")) >= 0)
                    selectedCutScore.splice(i, 1);

            selectedCutScore[selectedCutScore.length] = parseInt(timeInHours, 10) + '|' + TimeBetweenAttemptsSender.parentNode.getAttribute("BatchID");

            $get(hdnCutScores).value = selectedCutScore.join(',');


            $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
            checkIsPageDirtyEableSaveChages();
            TimeBetweenAttemptsSender = null;
            //ClosePopup("divCutScorePopup");

            $(':image').popover("destroy");
            $('.btn').popover("destroy");
            $('*').popover("destroy");

        }

    };
    return false;

   
}



function SetEnableDisableRational1(sender, tutidModuleid, saveChangesButton) {
    var IsLock = sender.getAttribute("IsLock");

    for (i = 0; i < selectEnableDisableRational.length; i++)
        if ((selectEnableDisableRational[i] == '1|' + tutidModuleid)
                     || (selectEnableDisableRational[i] == '0|' + tutidModuleid))
            selectEnableDisableRational.splice(i, 1);


    if (IsLock == 'True' || IsLock == 'true') {
        sender.src = sender.src.replace("/lock-icon.png", "/unlock-icon.png");
        sender.setAttribute("IsLock", "false");
        selectEnableDisableRational[selectEnableDisableRational.length] = '1|' + tutidModuleid;
    }
    else {
        sender.src = sender.src.replace("/unlock-icon.png", "/lock-icon.png");
        sender.setAttribute("IsLock", "true");
        selectEnableDisableRational[selectEnableDisableRational.length] = '0|' + tutidModuleid;
    }
    $get(hndTutorialLockUnlockRational).value = selectEnableDisableRational.join(',');
    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    //alert($get(hndTutorialLockUnlockRational).value);
    checkIsPageDirtyEableSaveChages();
    return false;
}


function SetEnableDisableThinkingMode(sender, tutidModuleid, saveChangesButton) {

    var IsLock = sender.getAttribute("IsLock");

    for (i = 0; i < selectEnableDisableThinkingMode.length; i++)
        if ((selectEnableDisableThinkingMode[i] == '1|' + tutidModuleid)
                     || (selectEnableDisableThinkingMode[i] == '0|' + tutidModuleid))
            selectEnableDisableThinkingMode.splice(i, 1);


    if (IsLock == 'True' || IsLock == 'true') {
        sender.src = sender.src.replace("/lock-icon.png", "/unlock-icon.png");
        sender.setAttribute("IsLock", "false");
        selectEnableDisableThinkingMode[selectEnableDisableThinkingMode.length] = '1|' + tutidModuleid;
    }
    else {
        sender.src = sender.src.replace("/unlock-icon.png", "/lock-icon.png");
        sender.setAttribute("IsLock", "true");
        selectEnableDisableThinkingMode[selectEnableDisableThinkingMode.length] = '0|' + tutidModuleid;
    }
    $get(hndTutorialLockUnlockThinkingMode).value = selectEnableDisableThinkingMode.join(',');
    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    //alert($get(hndTutorialLockUnlockThinkingMode).value);
    checkIsPageDirtyEableSaveChages();
    return false;
}


function SetEnableDisableScoring(sender, tutidModuleid, saveChangesButton) {

    var IsLock = sender.getAttribute("IsLock");

    for (i = 0; i < selectEnableDisableScoring.length; i++)
        if ((selectEnableDisableScoring[i] == '1|' + tutidModuleid)
                     || (selectEnableDisableScoring[i] == '0|' + tutidModuleid))
            selectEnableDisableScoring.splice(i, 1);


    if (IsLock == 'True' || IsLock == 'true') {
        sender.src = sender.src.replace("/lock-icon.png", "/unlock-icon.png");
        sender.setAttribute("IsLock", "false");
        selectEnableDisableScoring[selectEnableDisableScoring.length] = '1|' + tutidModuleid;
    }
    else {
        sender.src = sender.src.replace("/unlock-icon.png", "/lock-icon.png");
        sender.setAttribute("IsLock", "true");
        selectEnableDisableScoring[selectEnableDisableScoring.length] = '0|' + tutidModuleid;
    }
    $get(hndTutorialLockUnlockScoring).value = selectEnableDisableScoring.join(',');
    $get(productsTabHasUnsavedContent).value = '1'; // flag in productsTabHasUnsavedContent indicates the unchanged data exists
    //alert($get(hndTutorialLockUnlockScoring).value);
    checkIsPageDirtyEableSaveChages();
    return false;
}


function ClearArrayValues() {

    selectedEnableDisableAssessments = new Array();
    selectedEnableDisableModules = new Array();
    selectedEnableDisableModule = new Array(); // added as per JIRA ATING-3533
    selectEnableDisableTests = new Array();
    selectedEnableDisableResults = new Array();
    selectedTimeBtwAttempts = new Array();
    selectedCutScore = new Array();
    selectEnableDisableRational = new Array();
    selectEnableDisableThinkingMode = new Array();
    selectEnableDisableScoring = new Array();
    $get(productsTabHasUnsavedContent).value = '';
    return true;
}

function LockUnlockEntireColumn(sender, columnIndex, LockOrUnlock) {
    if (sender != null) {
        var LockOrUnlock = (LockOrUnlock == 1) ? '/lock' : '/unlock';
        if (IsIE()) {
            var grid = sender.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0];
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++) {
                    var tbCell = grid.children[0].children[i].children[columnIndex];
                    if (tbCell != null && tbCell.children[0].src.indexOf(LockOrUnlock) == -1) {
                        tbCell.children[0].click();
                    }
                }

            }
        }
        else {
            var grid = sender.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0];
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++) {
                    var tbCell = grid.children[0].children[i].children[columnIndex];
                    if (tbCell != null && tbCell.children[0].src.indexOf(LockOrUnlock) == -1) {
                        tbCell.children[0].click();
                    }
                }

            }
        }
    }
    return false;
}

function LockUnlockModulesEntireColumn(sender, columnIndex, LockOrUnlock) {
    if (sender != null) {
        var LockOrUnlock = (LockOrUnlock == 1) ? '/lock' : '/unlock';
        if (IsIE()) {
            var grid = sender.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0];
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++) {
                    var tbCell = grid.children[0].children[i].children[columnIndex];
                    if (tbCell != null && tbCell.children[0].src.indexOf(LockOrUnlock) == -1) {
                        tbCell.children[0].click();
                    }
                }

            }
        }
        else {
            var grid = sender.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0];
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++) {
                    var tbCell = grid.children[0].children[i].children[columnIndex];
                    if (tbCell != null && tbCell.children[0].src.indexOf(LockOrUnlock) == -1) {
                        tbCell.children[0].click();
                    }
                }

            }
        }
    }
    return false;
}

function LockUnlockModulesEntireColumnForTutorials(sender, columnIndex, LockOrUnlock) {

    if (sender != null) {
        var LockOrUnlock = (LockOrUnlock == 1) ? '/lock' : '/unlock';
        if (IsIE()) {
            var grid = sender.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[0];
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++) {
                    var tbCell = grid.children[0].children[i].children[columnIndex];
                    //Added Undefined check as per JIRA ATING-3533
                    if (tbCell != null && tbCell.children[0] != undefined && tbCell.children[0].src.indexOf(LockOrUnlock) == -1) {
                        tbCell.children[0].click();
                    }
                }

            }
        }
        else {

            var grid = sender.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[0];
            if (grid.children && grid.children[0].children.length > 0) {
                for (var i = 0; i < grid.children[0].children.length; i++) {
                    var tbCell = grid.children[0].children[i].children[columnIndex];
                    //Added Undefined check as per JIRA ATING-3533
                    if (tbCell != null && tbCell.children[0] != undefined && tbCell.children[0].src.indexOf(LockOrUnlock) == -1) {
                        tbCell.children[0].click();
                    }
                }

            }
        }
    }
    return false;
}

/***** Tutorials ****/

function AddTutChildRow(table) {
    var rowCount = table.rows.length;
    var row = null;
    var prodcomments = '';
    if (prodTutSchedComments != null && prodTutSchedComments != '')
        prodcomments = prodTutSchedComments.replace(/'/gi, "&#39");
    row = table.insertRow(rowCount);
    row.className = "products_tablecontent";
    var cell1 = row.insertCell(0);
    cell1.className = "products_tablecontent";
    cell1.align = "left";
    var cellSpan = document.createElement("SPAN");
    cellSpan.onclick = new Function("ShowLessonAssignmentForProducts(this,0,-195,'RB','"
                                    + prodTutSchedClassId + "',"
                                    + prodTutSchedUserID + ","
                                    + prodTutModuleContentID + ","
                                    + prodTutModuleContentTypeID + ","
                                    + prodTutModuleID + ","
                                    + prodTutCourseID + ","
                                    + prodTutCourseGroupScheduleID + ",'"
                                    + prodTutDueDate + "',"
                                    + prodTutTimeRequired + ","
                                    + "null,'" + prodcomments + "',"
                                    + prodTutInstitutionPurchaseID + ","
                                        + prodTutSchedRoleId + ");return false;");
    cellSpan.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan.setAttribute("onmouseout", "HideToolTip();");
    cellSpan.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan.innerText = prodTutSchedCourseName;
    cellSpan.innerHTML = prodTutSchedCourseName;
    cell1.appendChild(cellSpan);

    var cell2 = row.insertCell(1);
    cell2.align = "left";
    cell2.className = "products_tablecontent";
    var cellSpan2 = document.createElement("SPAN");
    cellSpan2.onclick = new Function("ShowLessonAssignmentForProducts(this,0,-195,'RB','"
                                    + prodTutSchedClassId + "',"
                                    + prodTutSchedUserID + ","
                                    + prodTutModuleContentID + ","
                                    + prodTutModuleContentTypeID + ","
                                    + prodTutModuleID + ","
                                    + prodTutCourseID + ","
                                    + prodTutCourseGroupScheduleID + ",'"
                                    + prodTutDueDate + "',"
                                    + prodTutTimeRequired + ","
                                    + "null,'" + prodcomments + "',"
                                    + prodTutInstitutionPurchaseID + ","
                                        + prodTutSchedRoleId + ");return false;");
    cellSpan2.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan2.setAttribute("onmouseout", "HideToolTip();");
    cellSpan2.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));

    if (prodTutSchedLessonORTest.indexOf('Lesson ') > -1) {
        cellSpan2.innerText = 'Lesson';
        cellSpan2.innerHTML = 'Lesson';
    }

    else {
        cellSpan2.innerText = 'Test';
        cellSpan2.innerHTML = 'Test';
    }

    cell2.appendChild(cellSpan2);


    var cell3 = row.insertCell(2);
    cell3.align = "left";
    cell3.className = "products_tablecontent";
    var cellSpan3 = document.createElement("SPAN");
    cellSpan3.onclick = new Function("ShowLessonAssignmentForProducts(this,0,-195,'RB','"
                                    + prodTutSchedClassId + "',"
                                    + prodTutSchedUserID + ","
                                    + prodTutModuleContentID + ","
                                    + prodTutModuleContentTypeID + ","
                                    + prodTutModuleID + ","
                                    + prodTutCourseID + ","
                                    + prodTutCourseGroupScheduleID + ",'"
                                    + prodTutDueDate + "',"
                                    + prodTutTimeRequired + ","
                                    + "null,'" + prodcomments + "',"
                                    + prodTutInstitutionPurchaseID + ","
                                        + prodTutSchedRoleId + ");return false;");
    cellSpan3.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan3.setAttribute("onmouseout", "HideToolTip();");
    cellSpan3.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan3.innerText = prodTutDueDateDisplay;
    cellSpan3.innerHTML = prodTutDueDateDisplay;
    cell3.appendChild(cellSpan3);


    var cell4 = row.insertCell(3);
    cell4.align = "left";
    cell4.className = "products_tablecontent";
    var cellSpan4 = document.createElement("SPAN");
    cellSpan4.onclick = new Function("ShowLessonAssignmentForProducts(this,0,-195,'RB','"
                                    + prodTutSchedClassId + "',"
                                    + prodTutSchedUserID + ","
                                    + prodTutModuleContentID + ","
                                    + prodTutModuleContentTypeID + ","
                                    + prodTutModuleID + ","
                                    + prodTutCourseID + ","
                                    + prodTutCourseGroupScheduleID + ",'"
                                    + prodTutDueDate + "',"
                                    + prodTutTimeRequired + ","
                                    + "null,'" + prodcomments + "',"
                                    + prodTutInstitutionPurchaseID + ","
                                        + prodTutSchedRoleId + ");return false;");
    cellSpan4.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan4.setAttribute("onmouseout", "HideToolTip();");
    cellSpan4.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));

    if (prodTutTimeRequiredString != '' && prodTutTimeRequiredString != 'None') {
        cellSpan4.innerText = prodTutTimeRequiredString;
        cellSpan4.innerHTML = prodTutTimeRequiredString;
    }

    cell4.appendChild(cellSpan4);
}



function UpdateTutChildRow(table) {
    var row = null;
    var prodcomments = '';
    if (prodTutSchedComments != null && prodTutSchedComments != '')
        prodcomments = prodTutSchedComments.replace(/'/gi, "&#39");
    row = ShowTutTestingScheduleControl.parentNode.parentNode;

    if (IsIE())
        var cellSpan = row.cells[0].children[0];
    else
        var cellSpan = row.cells[0].children[0];


    cellSpan.onclick = new Function("ShowLessonAssignmentForProducts(this,0,-195,'RB','"
                                        + prodTutSchedClassId + "',"
                                        + prodTutSchedUserID + ","
                                        + prodTutModuleContentID + ","
                                        + prodTutModuleContentTypeID + ","
                                        + prodTutModuleID + ","
                                        + prodTutCourseID + ","
                                        + prodTutCourseGroupScheduleID + ",'"
                                        + prodTutDueDate + "',"
                                        + prodTutTimeRequired + ","
                                        + "null,'" + prodcomments + "',"
                                        + prodTutInstitutionPurchaseID + ","
                                            + prodTutSchedRoleId + ");return false;");
    cellSpan.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan.setAttribute("onmouseout", "HideToolTip();");
    cellSpan.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan.innerText = prodTutSchedCourseName;
    cellSpan.innerHTML = prodTutSchedCourseName;

    var cellSpan2 = null;
    if (IsIE())
        cellSpan2 = row.cells[1].children[0];
    else
        cellSpan2 = row.cells[1].children[0];
    cellSpan2.onclick = new Function("ShowLessonAssignmentForProducts(this,0,-195,'RB','"
                                    + prodTutSchedClassId + "',"
                                    + prodTutSchedUserID + ","
                                    + prodTutModuleContentID + ","
                                    + prodTutModuleContentTypeID + ","
                                    + prodTutModuleID + ","
                                    + prodTutCourseID + ","
                                    + prodTutCourseGroupScheduleID + ",'"
                                    + prodTutDueDate + "',"
                                    + prodTutTimeRequired + ","
                                    + "null,'" + prodcomments + "',"
                                    + prodTutInstitutionPurchaseID + ","
                                        + prodTutSchedRoleId + ");return false;");
    cellSpan2.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan2.setAttribute("onmouseout", "HideToolTip();");
    cellSpan2.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    if (prodTutSchedLessonORTest.indexOf('Lesson ') > -1) {
        cellSpan2.innerText = 'Lesson';
        cellSpan2.innerHTML = 'Lesson';
    }
    else {
        cellSpan2.innerText = 'Test';
        cellSpan2.innerHTML = 'Test';
    }

    var cellSpan3 = null;
    if (IsIE())
        cellSpan3 = row.cells[2].children[0];
    else
        cellSpan3 = row.cells[2].children[0];
    cellSpan3.onclick = new Function("ShowLessonAssignmentForProducts(this,0,-195,'RB','"
                                    + prodTutSchedClassId + "',"
                                    + prodTutSchedUserID + ","
                                    + prodTutModuleContentID + ","
                                    + prodTutModuleContentTypeID + ","
                                    + prodTutModuleID + ","
                                    + prodTutCourseID + ","
                                    + prodTutCourseGroupScheduleID + ",'"
                                    + prodTutDueDate + "',"
                                    + prodTutTimeRequired + ","
                                    + "null,'" + prodcomments + "',"
                                    + prodTutInstitutionPurchaseID + ","
                                        + prodTutSchedRoleId + ");return false;");
    cellSpan3.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan3.setAttribute("onmouseout", "HideToolTip();");
    cellSpan3.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));
    cellSpan3.innerText = prodTutDueDateDisplay;
    cellSpan3.innerHTML = prodTutDueDateDisplay;

    var cellSpan4 = null;
    if (IsIE())
        cellSpan4 = row.cells[3].children[0];
    else
        cellSpan4 = row.cells[3].children[0];
    cellSpan4.onclick = new Function("ShowLessonAssignmentForProducts(this,0,-195,'RB','"
                                    + prodTutSchedClassId + "',"
                                    + prodTutSchedUserID + ","
                                    + prodTutModuleContentID + ","
                                    + prodTutModuleContentTypeID + ","
                                    + prodTutModuleID + ","
                                    + prodTutCourseID + ","
                                    + prodTutCourseGroupScheduleID + ",'"
                                    + prodTutDueDate + "',"
                                    + prodTutTimeRequired + ","
                                    + "null,'" + prodcomments + "',"
                                    + prodTutInstitutionPurchaseID + ","
                                        + prodTutSchedRoleId + ");return false;");
    cellSpan4.setAttribute("onmouseover", "ShowToolTip(this.id,0,-125,'" + editGlobalizationString + "','" + editScheduleCourseStringToolTipText + "','RB');");
    cellSpan4.setAttribute("onmouseout", "HideToolTip();");
    cellSpan4.setAttribute("id", "dynamicChildGridCourseName" + Math.floor(Math.random() * 1001));

    if (prodTutTimeRequiredString != '' && prodTutTimeRequiredString != 'None') {
        cellSpan4.innerText = prodTutTimeRequiredString;
        cellSpan4.innerHTML = prodTutTimeRequiredString;
    }

}
var prodTutSchedUserID, prodTutSchedClassId, prodTutSchedRoleId, prodTutModuleID, prodTutModuleContentID;
var prodTutCourseID, prodTutCourseGroupScheduleID, prodTutInstitutionPurchaseID, prodTutTimeRequired, prodTutDueDate, prodTutSchedComments, prodTutModuleContentTypeID;
var ShowTutTestingScheduleControl = null;

var prodTutSchedCourseName, prodTutSchedLessonORTest, prodTutTimeRequiredString, prodTutDueDateDisplay;

function ShowLessonAssignmentForProducts(sender, top, left, loc, classid, userid, mcid, type, mid, cid, cgsid, date, time, btnid, comments, ip, roleid) {

    ShowTutTestingScheduleControl = sender;
    var divid = 'divLessonAssignmentPopupForProducts';
    var slid = 'slLessonAssignmentPopupForProducts';
    var control = $get(slid);
    control.Content.SilverlightPopup.Reset();
    prodTutSchedUserID = userid;
    prodTutSchedClassId = classid;
    prodTutSchedRoleId = roleid;
    prodTutModuleID = mid;
    prodTutModuleContentID = mcid;
    prodTutCourseID = cid;
    prodTutCourseGroupScheduleID = cgsid;
    prodTutInstitutionPurchaseID = ip;
    if (time != 0)
        prodTutTimeRequired = time;
    prodTutDueDate = date;
    prodTutSchedComments = comments;
    prodTutModuleContentTypeID = type;
    Scheduled = function (s, e) {
        var bSuccess = control.Content.SilverlightPopup.bSuccess;
        if (!bSuccess) { } else {

            prodTutSchedUserID = control.Content.SilverlightPopup.UserID;
            prodTutSchedClassId = control.Content.SilverlightPopup.ClassID;
            prodTutSchedRoleId = control.Content.SilverlightPopup.RoleID;
            prodTutModuleID = control.Content.SilverlightPopup.ModuleID;
            prodTutModuleContentID = control.Content.SilverlightPopup.ModuleContentID;
            prodTutCourseID = control.Content.SilverlightPopup.CourseID;
            prodTutCourseGroupScheduleID = control.Content.SilverlightPopup.CourseGroupScheduleID;
            prodTutInstitutionPurchaseID = control.Content.SilverlightPopup.InstitutionPurchaseID
            prodTutTimeRequired = control.Content.SilverlightPopup.TimeRequired;
            prodTutDueDate = control.Content.SilverlightPopup.DueDate;
            prodTutDueDateDisplay = control.Content.SilverlightPopup.DueDateDisplay;
            prodTutSchedComments = control.Content.SilverlightPopup.Comments;
            prodTutModuleContentTypeID = control.Content.SilverlightPopup.ModuleContentTypeID;
            prodTutSchedCourseName = control.Content.SilverlightPopup.CourseName;
            prodTutSchedLessonORTest = control.Content.SilverlightPopup.LessonORTest;
            prodTutTimeRequiredString = control.Content.SilverlightPopup.TimeRequiredString;

            if (control.Content.SilverlightPopup.SLMode == "Add") {
                if (ShowTutTestingScheduleControl != undefined && ShowTutTestingScheduleControl != null) {
                    if (IsIE()) {
                        ShowTutTestingScheduleControl.parentNode.children[1].style.display = ''
                        var table = ShowTutTestingScheduleControl.parentNode.parentNode.nextSibling.children[0].children[0].children[0];
                        AddTutChildRow(table);
                    }
                    else {
                        ShowTutTestingScheduleControl.parentNode.children[1].style.display = ''
                        if (ShowTutTestingScheduleControl.parentNode.parentNode.nextSibling.nextSibling.childNodes.length != 0) //deblina 3354
                        {
                            var table = ShowTutTestingScheduleControl.parentNode.parentNode.nextSibling.nextSibling.children[0].children[0].children[0];
                        }
                        else {
                            var table = ShowTutTestingScheduleControl.parentNode.parentNode.nextSibling.children[0].children[0].children[0]
                        }
                        AddTutChildRow(table);
                    }

                }
            }
            else if (control.Content.SilverlightPopup.SLMode == "Edit") {

                if (ShowTutTestingScheduleControl != undefined && ShowTutTestingScheduleControl != null) {
                    var table = ShowTutTestingScheduleControl.parentNode.parentNode.parentNode.parentNode;
                    UpdateTutChildRow(table);
                }
            }

            if (control.Content.SilverlightPopup.SLMode == "Clear") {

                if (ShowTutTestingScheduleControl != undefined && ShowTutTestingScheduleControl != null) {
                    var table = ShowTutTestingScheduleControl.parentNode.parentNode.parentNode.parentNode;
                    var row = ShowTutTestingScheduleControl.parentNode.parentNode;
                    table.deleteRow(row.rowIndex);
                    if (table.rows.length <= 1) {
                        var childGridHostingTR = table.parentNode.parentNode.parentNode;
                        if (IsIE()) {
                            var maintableRowsCount = 0;
                            if (childGridHostingTR.previousSibling != undefined && childGridHostingTR.previousSibling.children != undefined) {
                                maintableRowsCount = childGridHostingTR.previousSibling.children.length;
                            }
                            else {
                                maintableRowsCount = 0
                            }
                            if (maintableRowsCount > 0) {
                                var actualHideUnhideScheduleTR = table.parentNode.parentNode.parentNode.previousSibling;
                                var subElementCount = actualHideUnhideScheduleTR.children[maintableRowsCount - 2].children.length;
                                var imageUnhideHide = actualHideUnhideScheduleTR.children[maintableRowsCount - 2].children[subElementCount - 1];
                                imageUnhideHide.click();
                                imageUnhideHide.style.display = 'none';
                            }
                        }
                        else {
                            var maintableRowsCount = 0;
                            if (childGridHostingTR.previousSibling != undefined && childGridHostingTR.previousSibling.children != undefined) {
                                maintableRowsCount = childGridHostingTR.previousSibling.children.length;
                            }
                            else {
                                maintableRowsCount = 0
                            }
                            if (maintableRowsCount > 0) {
                                var actualHideUnhideScheduleTR = table.parentNode.parentNode.parentNode.previousSibling;
                                var imageUnhideHide = actualHideUnhideScheduleTR.children[maintableRowsCount - 2].children[1];
                                imageUnhideHide.onclick();
                                imageUnhideHide.style.display = 'none';
                            }
                        }

                    }
                }
            }

            control.Content.SilverlightPopup.Reset(); ClosePopup(divid);
            //btn.click();
        }
    }
    Canceled = function (s, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    control.Content.SilverlightPopup.UserID = userid;
    control.Content.SilverlightPopup.RoleID = roleid;
    control.Content.SilverlightPopup.ClassID = classid;
    control.Content.SilverlightPopup.ModuleID = mid;
    control.Content.SilverlightPopup.ModuleContentID = mcid;
    control.Content.SilverlightPopup.CourseID = cid;
    control.Content.SilverlightPopup.CourseGroupScheduleID = cgsid;
    control.Content.SilverlightPopup.InstitutionPurchaseID = ip;
    control.Content.SilverlightPopup.TimeRequired = time;
    control.Content.SilverlightPopup.DueDate = date;
    control.Content.SilverlightPopup.Comments = comments.replace(/&#39/gi, "'");
    control.Content.SilverlightPopup.ModuleContentTypeID = type;
    //alert(' user id = ' + userid + ' roleid id = ' + roleid + ' classid id = ' + classid + ' mid id = ' + mid +
    //' mcid id = ' + mcid + ' roleid id = ' + roleid +' cgsid id = ' + cgsid + ' cid id = ' + cid +' user id = ' + userid + ' ip id = ' + ip +
    //' time id = ' + time + ' date id = ' + date + ' comments id = ' + comments + ' type id = ' + type 
    //);
    control.Content.SilverlightPopup.PopulateCourses();
    OpenTutorialTestAssignmentForProducts(divid, slid, sender, top, left, '', loc, 400, Scheduled, Canceled);
}


function ShowTestAssignment(sender, top, left, loc) {
    var divid = 'divTestAssignmentPopupForProducts';
    var slid = 'slTestAssignmentPopupForProducts';
    var control = $get(slid);
    Scheduled = function (sender, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    Canceled = function (sender, e) { control.Content.SilverlightPopup.Reset(); ClosePopup(divid); }
    OpenTutorialTestAssignmentForProducts(divid, slid, sender, top, left, '', loc, 300, Scheduled, Canceled);
}

function OpenTutorialTestAssignmentForProducts(divid, slid, sender, topOffset, leftOffset, content, loc, height, fnSavedcallback, fnCanceledcallback) {

    var senderPos = GetTopLeft(sender);
    var PopUp = $get(divid);

    PopUp.style.top = (senderPos.Top + topOffset - height) + 'px';
    PopUp.style.left = (senderPos.Left + leftOffset) + 'px';

    var control = $get(slid);

    control.Content.SilverlightPopup.Scheduled = fnSavedcallback;

    control.Content.SilverlightPopup.Canceled = fnCanceledcallback;

    PopUp.style.visibility = 'visible';

}



function GetXMLStringProcterPractice(sender, ErrorMsg) {
    if (selectedassessments.length == 0) {
        ValidateMsg(ErrorMsg);
        return false;
    }
    var retQuery = '';
    if (!ContinueCheckUnsavedContent(sender))
        return false;

    for (i = 0; i < selectedassessments.length; i++) {
        if (i == selectedassessments.length - 1)
            retQuery += '0|' + selectedassessments[i] + '-1'
        else {
            retQuery += '0|' + selectedassessments[i] + '-1|'
        }
    }
    for (var i = 0; i < selectedcheckboxes.length; i++) {
        if ($get(selectedcheckboxes[i]) != null)
            $get(selectedcheckboxes[i]).checked = false;
    }

    selectedassessments.splice(0, selectedassessments.length);
    selectedcheckboxes.splice(0, selectedcheckboxes.length);
    $get(hdnStringXML).value = retQuery;
    return retQuery;
}



function GetXMLStringTutorials(sender, ErrorMsg) {
    var retQuery = '';

    if (selectedassessments.length == 0) {
        //var msg = "Please make a selection";
        //Method in SlPopup.js file for Global validation
        ValidateMsg(ErrorMsg);
        return false;
    }

    if (!ContinueCheckUnsavedContent(sender))
        return false;

    for (var i = 0; i < selectedassessments.length; i++) {

        if (i == selectedassessments.length - 1) {
            retQuery += '|' + selectedassessments[i] + '-9'
        }

        else {
            retQuery += '7|' + selectedassessments[i] + '-9|'

        }
    }
    for (var i = 0; i < selectedcheckboxes.length; i++) {
        if ($get(selectedcheckboxes[i]) != null) {
            $get(selectedcheckboxes[i]).checked = false;
        }

    }

    $get(hdnStringXML).value = retQuery;
    selectedassessments.splice(0, selectedassessments.length);

    return retQuery;
}




/* grid  */

function TglRow(ctl, row, hideHostingTR, hideFirstCol, hideSecondCol, noColSpan, hasTwoChildGrids, otherHideUnhideImageId, myIndex) {
    var path = ctl.src;
    var pt;
    var gv = window.document.getElementById(row);
    var gv1 = window.document.getElementById('tbl1');
    if (path.indexOf('expand-icon.png') > 0) {
        pt = path.replace('expand-icon.png', 'collapse-icon.png');
        ctl.src = pt;
        var tr = ctl.parentNode.parentNode;

        var rowToBeHideUnhide = null;
        rowToBeHideUnhide = tr.nextSibling;
        if (rowToBeHideUnhide != null && rowToBeHideUnhide.tagName != 'TR')
            rowToBeHideUnhide = rowToBeHideUnhide.nextSibling;


        var childOfRowToBeHideUnhide = null;
        childOfRowToBeHideUnhide = rowToBeHideUnhide.children[0];
        if (childOfRowToBeHideUnhide != null && childOfRowToBeHideUnhide.tagName != 'TD')
            childOfRowToBeHideUnhide = rowToBeHideUnhide.children[1];

        var colspanForchild = 0;
        for (var c = 0; c < tr.children.length; c++) {
            if (tr.children[c].tagName == 'TD')
                colspanForchild++;
        }
        childOfRowToBeHideUnhide.setAttribute("colSpan", colspanForchild);
        //childOfRowToBeHideUnhide.setAttribute("colspan", colspanForchild);

        var tr = gv.parentNode.parentNode.parentNode;

        if (tr.parentNode && tr.parentNode.parentNode && tr.parentNode.parentNode.parentNode
                                         && tr.parentNode.parentNode.parentNode.parentNode
                                        && tr.parentNode.parentNode.parentNode.parentNode.tagName == 'DIV')
            tr.parentNode.parentNode.parentNode.parentNode.style.height = '260px'



        if (hasTwoChildGrids != undefined && hasTwoChildGrids == true) {
            var childOfRowToBeHideUnhide1 = null;
            var childOfRowToBeHideUnhide2 = null;
            childOfRowToBeHideUnhide1 = rowToBeHideUnhide.children[0];
            if (childOfRowToBeHideUnhide1 != null && childOfRowToBeHideUnhide1.tagName != 'TD') {
                childOfRowToBeHideUnhide1 = rowToBeHideUnhide.children[1];
                childOfRowToBeHideUnhide2 = rowToBeHideUnhide.children[3];
                if (childOfRowToBeHideUnhide2 != null && childOfRowToBeHideUnhide2.tagName != 'TD')
                    childOfRowToBeHideUnhide2 = rowToBeHideUnhide.children[4];
            }
            else {
                childOfRowToBeHideUnhide2 = rowToBeHideUnhide.children[1];
                if (childOfRowToBeHideUnhide2 != null && childOfRowToBeHideUnhide2.tagName != 'TD')
                    childOfRowToBeHideUnhide2 = rowToBeHideUnhide.children[2];
            }
            if (myIndex == 0) {
                childOfRowToBeHideUnhide1.style.display = '';
                childOfRowToBeHideUnhide1.setAttribute("colSpan", colspanForchild);
                childOfRowToBeHideUnhide2.style.display = 'none';

            }
            else {
                childOfRowToBeHideUnhide2.style.display = '';
                childOfRowToBeHideUnhide1.style.display = 'none';
            }

            var imgCtrl = window.document.getElementById(otherHideUnhideImageId);
            if (imgCtrl && imgCtrl.src.indexOf('collapse-icon.png') > 0)
                imgCtrl.src = imgCtrl.src.replace('collapse-icon.png', 'expand-icon.png');

        }

        rowToBeHideUnhide.style.display = '';
    }
    else if (path.indexOf('collapse-icon.png') > 0) {
        pt = path.replace('collapse-icon.png', 'expand-icon.png');
        ctl.src = pt;

        var rowToBeHideUnhide = null;
        rowToBeHideUnhide = ctl.parentNode.parentNode.nextSibling;
        if (rowToBeHideUnhide != null && rowToBeHideUnhide.tagName != 'TR')
            rowToBeHideUnhide = rowToBeHideUnhide.nextSibling;
        rowToBeHideUnhide.style.display = 'none';





    }
}




//    function TglRow(ctl, row, hideHostingTR, hideFirstCol, hideSecondCol, noColSpan, hasTwoChildGrids, otherHideUnhideImageId, myIndex) {
//        var path = ctl.src;
//        var pt;
//        var gv = window.document.getElementById(row);
//        var gv1 = window.document.getElementById('tbl1');
//        if (path.indexOf('expand-icon.png') > 0) {
//            pt = path.replace('expand-icon.png', 'collapse-icon.png');
//            ctl.src = pt;

//            if ((hideHostingTR == 'true' || hideHostingTR == 'True') && gv.parentNode && gv.parentNode.parentNode
//                             && gv.parentNode.parentNode.parentNode && gv.parentNode.parentNode.parentNode.tagName == 'TR') {
//                var tr = gv.parentNode.parentNode.parentNode;
//                tr.style.display = '';


//                if (hasTwoChildGrids != undefined && hasTwoChildGrids == true) {
//                    if (myIndex == 0) {
//                        tr.children[0].style.display = '';
//                        tr.children[0].colSpan = tr.previousSibling.cells.length;
//                        tr.children[1].style.display = 'none';
//                    }
//                    else {
//                        tr.children[0].style.display = 'none';
//                        tr.children[1].style.display = '';
//                    }
//                    var imgCtrl = window.document.getElementById(otherHideUnhideImageId);
//                    if (imgCtrl && imgCtrl.src.indexOf('collapse-icon.png') > 0)
//                        imgCtrl.src = imgCtrl.src.replace('collapse-icon.png', 'expand-icon.png');


//                }
//                if (tr.children[0] != null && tr.previousSibling != null && tr.previousSibling.cells != null && noColSpan != true) {
//                    tr.children[0].colSpan = (hideFirstCol != null && hideFirstCol != '') ? tr.previousSibling.cells.length + 1 : tr.previousSibling.cells.length;
//                    if (hideSecondCol != null && hideSecondCol != '')
//                        tr.children[0].colSpan = tr.children[0].colSpan + 1;
//                }
//                if (tr.parentNode && tr.parentNode.parentNode && tr.parentNode.parentNode.parentNode
//                                         && tr.parentNode.parentNode.parentNode.parentNode
//                                        && tr.parentNode.parentNode.parentNode.parentNode.tagName == 'DIV')
//                    tr.parentNode.parentNode.parentNode.parentNode.style.height = '260px'
//            }

//            gv.style.display = '';
//        }
//        else if (path.indexOf('collapse-icon.png') > 0) {
//            pt = path.replace('collapse-icon.png', 'expand-icon.png');
//            ctl.src = pt;

//            if ((hideHostingTR == 'true' || hideHostingTR == 'True') && gv.parentNode && gv.parentNode.parentNode
//                             && gv.parentNode.parentNode.parentNode && gv.parentNode.parentNode.parentNode.tagName == 'TR') {
//                var tr = gv.parentNode.parentNode.parentNode;
//                tr.style.display = 'none';




//                if (hasTwoChildGrids != undefined && hasTwoChildGrids == true) {
//                    if (myIndex == 0)
//                        tr.children[0].style.display = '';
//                    else
//                        tr.children[1].style.display = '';
//                }



//                if (tr.children[0] != null && tr.previousSibling != null && tr.previousSibling.cells != null && noColSpan != true)
//                    tr.children[0].colSpan = (hideFirstCol != null && hideFirstCol != '') ? tr.previousSibling.cells.length + 1 : tr.previousSibling.cells.length;
//                {
//                    if (hideSecondCol != null && hideSecondCol != '')
//                        tr.children[0].colSpan = tr.children[0].colSpan + 1;
//                }

//            }
//            gv.style.display = 'none';
//        }
//    }

function SetSelectedClassToHiddenField(ddlClassesID, hdnSelectedClassID) {
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var classID = $(ddlClasses).val();
    $(hdnSelectedClass).val(classID);
    return true;
}
function GetSelectedClassFromHiddenField() {
    var selectedClassID = $('[id$="hdnSelectedClassID"]').val();
    if (selectedClassID && selectedClassID > 0) {
        $('#' + ddlClassDDLID).val(selectedClassID);
    }
}


//Filter cascading dropdownlist functions
function loadClassesByInstitutionID(ddlInstitutionsID, ddlClassesID, hdnSelectedClassID) {
    var ddlInstitutions = $('[id$="' + ddlInstitutionsID + '"]');
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var selectedInstitutionID = $(ddlInstitutions).find("option:selected").val();
    if (selectedInstitutionID > 0) {
        ddlClasses.empty();
        $.ajax({
            type: 'GET',
            url: '../Faculty/FiltersService.asmx/GetClasses?institutionID=' + selectedInstitutionID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlClasses.empty();
                //ddlClasses.append('<option value="-1">All Classes</option>');               
                $.each(responseData.d, function (data, item) {
                    ddlClasses.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                });
                if (hdnSelectedClass.val()) {
                    ddlClasses.val(hdnSelectedClass.val());
                    LoadCoursesByClassID('ddlClasses', 'ddlCourse', 'hdnSelectedClassID');
                }
                ddlClasses.selectedIndex = "-1";
                ddlClasses.removeAttr('disabled');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading classes:' + jqXHR + textStatus + errorThrown);
            }
        });
    }
    else {
        ddlClasses.empty();
        ddlClasses.append('<option value="-1">All Cohorts</option>');
        //ddlClasses.append('<option value="-2">No Cohort Assigned</option>');
        //ddlClasses.removeAttr('disabled');
        ddlClasses.attr('disabled', 'true');
    }
}


function LoadCoursesByClassID(ddlClassesID, ddlCoursesID, hdnSelectedCourseID) {
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var ddlCourses = $('[id$="' + ddlCoursesID + '"]');
    var hdnSelectedCourse = $('[id$="' + hdnSelectedCourseID + '"]');
    var selectedClassID = $(ddlClasses).val();
    $("[id$='hdnSelectedClassID']").val(selectedClassID);
    if (selectedClassID > 0) {
        ddlCourses.empty();
        $.ajax({
            type: 'GET',
            url: '../Faculty/FiltersService.asmx/GetCourses?classID=' + selectedClassID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlCourses.empty();
                ddlCourses.append('<option value="-1">All Courses</option>');               
                

                if (responseData.d != null) {

                    $.each(responseData.d, function (data, item) {
                        ddlCourses.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                    });
                    if ($("[id$='hdnSelectedCourseID']").val()) {
                        ddlCourses.val($("[id$='hdnSelectedCourseID']").val());
                    }
                    ddlCourses.removeAttr('disabled');
                    return false;
                }
                else {
                    ddlCourses.empty();
                    ddlCourses.append('<option value="-1">All Courses</option>');
                    ddlCourses.attr('disabled', 'true');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading classes:' + jqXHR + textStatus + errorThrown);
            }

        });
    }
    else {
        ddlCourses.empty();
        ddlCourses.append('<option value="-1">All Courses</option>');
        ddlCourses.attr('disabled', 'true');
    }
}

function storeCourseID(item) {
    $("[id$='hdnSelectedCourseID']").val($('[id$="ddlCourse"]').val());
}

function SetSelectedClassCourseToHiddenField(ddlClassesID, hdnSelectedClassID, ddlCoursesID, hdnSelectedCourseID) {
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var classID = $(ddlClasses).val();
    $(hdnSelectedClass).val(classID);

    var ddlCourses = $('[id$="' + ddlCoursesID + '"]');
    var hdnSelectedCourse = $('[id$="' + hdnSelectedCourseID + '"]');
    var SelectedCourseID = $(ddlCourses).val();
    $(hdnSelectedCourse).val(SelectedCourseID);

    return true;
}

function RegularExpressionValidator(strings, rgxfieldid) {

    var string = strings;
    string = string.replace(/\s\s+/g, ' ');
    string = string.replace(/[^\w\s\-'.,]/g, '');
    string = string.replace(/[_]/g, '')
    if (string.length > 0) {

        return false;
    }
    else {

        // $('[id$="rgtemplateName"]').css('display', 'inline-block');
        $('[id$=' + rgxfieldid + ']').css('display', 'inline-block');
        return true;
    }
}

function ValidateTextboxes() {

    var templatevalue = $('input[id$="txtTemplateNameContains"]').val();
    var creatorvalue = $('input[id$="txtCreatorNameContains"]').val();

    if ((templatevalue == "") && (creatorvalue == "")) {

        return false;
    }
    else if ((templatevalue != "") && (creatorvalue == "")) {

        return RegularExpressionValidator(templatevalue, "rgtemplateName");

    }
    else if ((templatevalue == "") && (creatorvalue != "")) {

        return RegularExpressionValidator(creatorvalue, "rgcreatorName");
    }
    else {

        var templatevalidation = RegularExpressionValidator(templatevalue, "rgtemplateName");
        var creatorvalidation = RegularExpressionValidator(creatorvalue, "rgcreatorName");
        return templatevalidation || creatorvalidation
        //return (regularexpressionvalidator(templatevalue, "rgtemplateName")) || regularexpressionvalidator(creatorvalue, "rgcreatorName");
    }

}

/*Create course functions starts---------------------------------------------------------*/
function AddAdministratorToListBox(ddlAdministratorSource, lstAdministrators, hdnAdministrators) {
    var ddl = $('[id$="' + ddlAdministratorSource + '"]');
    var selectedAdministratorID = $('[id$="' + ddlAdministratorSource + '"] option:selected').val();
    var selectedAdministratorName = $('[id$="' + ddlAdministratorSource + '"] option:selected').text();
    var listBox = $('[id$="' + lstAdministrators + '"]');//ctl00_contentPlaceHolderBody_ucCustomCourseGroups_CustomCourseGroups1_lstAdministrators
    var existingListItemWithSameID = $(listBox).find('option[value=\"' + selectedAdministratorID + '\"]');
    var currentCount = $(listBox).find('option').length;
    if (!existingListItemWithSameID || existingListItemWithSameID.length < 1) {
        $(listBox).append('<option value="' + selectedAdministratorID + '">' + 'Administrator ' + (currentCount + 1) + ':' + selectedAdministratorName + '</option>');
        var currentIDs = $('[id$="' + hdnAdministrators + '"]').val();
        $('[id$="' + hdnAdministrators + '"]').val(currentIDs + ',' + selectedAdministratorID);
    }
}
function GetAdministratorRowElement(sl, id, name) {
    return ' <div class="row margin-top-6" style="border-bottom:1px dashed #e3e3e3;">' +
                                                  '<div class="col-xs-8 margin-top-6 administratorNameForEdit">Administrator ' + sl + ':' + name + '</div>' +
                                                  '<div class="col-xs-4">' +
                                                      '<input type="hidden" id="hdnAdministratorIDForExisting" class="hiddenAdministratorIDForEdit" value="' + id + '" />' +
                                                      '<button type="button" class="btn btn-sm btn-default" style="margin-bottom: 6px;" data-userid="' + id + '" data-username="' + name + '" id="btnDeleteAdministrator' + id + '" onclick="DeleteAdministratorFromList(this)">Delete</button>' +
                                                  '</div>' +
                                              '</div>';
}

function AddAdministratorToListForEdit(ddlAdministratorSource, lstAdministrators, hdnAdministrators) {
    var ddl = $('[id$="' + ddlAdministratorSource + '"]');
    var selectedAdministratorID = $('[id$="' + ddlAdministratorSource + '"] option:selected').val();
    var selectedAdministratorName = $('[id$="' + ddlAdministratorSource + '"] option:selected').text();
    var listBox = $('[id$="' + lstAdministrators + '"]');//ctl00_contentPlaceHolderBody_ucCustomCourseGroups_CustomCourseGroups1_lstAdministrators
    var existingListItemWithSameID = $('.hiddenAdministratorIDForEdit[value=\"' + selectedAdministratorID + '\"]');
    var currentCount = $('.administratorNameForEdit').length + 1;
    if (!existingListItemWithSameID || existingListItemWithSameID.length < 1) {
        $(listBox).append(GetAdministratorRowElement(currentCount, selectedAdministratorID, selectedAdministratorName));
        var currentIDs = $('[id$="' + hdnAdministrators + '"]').val();
        $('[id$="' + hdnAdministrators + '"]').val(currentIDs + ',' + selectedAdministratorID);
    }
}
function CopyCourseDetailsToPopup() {
    SetSelectedClassValuesCreateCourse();
    $('[id$="lblCourseAlreadyExist"]').hide();
    var courseName = $('[id$="txtCourseName"]').val();
    var className = $('[id$="ddlClassCreateCourse"] option:selected').text();

    var regexValid = /^[0-9a-zA-Z ]*$/.test(courseName);
    if (courseName.trim() == '') {
        ValidateMsg("Please enter course name.");
        return false;
    }
    if (!regexValid) {
        ValidateMsg("Special characters are not allowed.");
        return false;
    }
    if (courseName.trim() != '' && regexValid) {
        $('#spnCourseName').html(courseName);
        $('#spnClassName').html(className);
        $find('mpeCreateCourseConfirm').show();
    }
    else {
        $('[id$="rqfvCourseName"]').css('visibility', 'visible');

    }
    return false;
}
function ShowEditCourseModalPopup(editButton) {

    var courseID = $(editButton).parent().find('#hdnCourseIDForEdit').val();
    var className = $(editButton).parent().find('#hdnClassNameIDForEdit').val();
    var classID = $(editButton).parent().find('#hdnClassIDForEdit').val();
    var courseName = $(editButton).parent().find('#hdnCourseNameForEdit').val();
    var activationCode = $(editButton).parent().find('#hdnActivationCodeForEdit').val();
    $('[id$="txtCourseNameEdit"]').val(courseName);
    $('[id$="hdnSelectedCourseID"]').val(courseID);
    $('[id$="hdnSelectedActivationCode"]').val(activationCode);
    $('[id$="hdnSelectedClassID"]').val(classID);
    $('[id$="hdnSelectedClassName"]').val(courseName);
    $find("mpeEditCourse").show();
    LoadCoursesList(courseID);
    return false;
}
function LoadCoursesList(courseID) {
    $('[id$="hdnAdministratorsEditCourse"]').val('');
    $('#lstAdministratorsEditCourse').empty();
    var counter = 0;
    $.ajax({
        type: 'GET',
        url: '../Faculty/AssessmentService.asmx/GetCourseAdministrators?courseID=' + courseID,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (responseData) {
            $.each(responseData.d, function (data, item) {
                counter = counter + 1;
                $('#lstAdministratorsEditCourse').append(GetAdministratorRowElement(counter, item.Key, item.Value));
                var currentIDs = $('[id$="hdnAdministratorsEditCourse"]').val();
                $('[id$="hdnAdministratorsEditCourse"]').val(currentIDs + ',' + item.Key);
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on loading classes:' + jqXHR + textStatus + errorThrown);
            //console.log('jqXHR, textStatus, errorThrown', jqXHR, textStatus, errorThrown);
        }

    });
}
function HideEditCourseModalPopup() {
    $find("mpeEditCourse").hide();
    return false;
}
function ShowConfirmActivateDeactivateModalPopup(rdButton) {

    var courseName = $(rdButton).parent().parent().parent().find('#hdnCourseNameForEdit').val();
    var courseID = $(rdButton).parent().parent().parent().find('#hdnCourseIDForEdit').val();
    var classID = $(rdButton).parent().parent().parent().find('#hdnClassIDForEdit').val();
    if (rdButton.id.indexOf('Inactive') != -1 && $(rdButton).parent().find("#hdnCurrentCourseStatus").val() == "True") {
        $('#lblActivateDeactivateMessage').html('Are you sure that you want to deactivate course ' + courseName + ' ?');
    }
    else if(rdButton.id.indexOf('Active')!=-1 && $(rdButton).parent().find("#hdnCurrentCourseStatus").val()=="False") {
        $('#lblActivateDeactivateMessage').html('Are you sure that you want to activate course ' + courseName + ' ?');
    }
    else {
        return false;
    }
    
    $('[id$="hdnCourseIDActivateDeactivate"]').val(courseID);
    $('[id$="hdnClassIDActivateDeactivate"]').val(classID);
    $('#hdnRadioButtonID').val($(rdButton).attr('id'));

    $find("mpeConfirmActivateDeactivate").show();

}
function CancelActivationDeactivation() {
    var courseGrid = $('.ReplaceSLGrid');
    var courseID = $('[id$="hdnCourseIDActivateDeactivate"]').val();
    var activeRD = 'rdActive' + courseID;
    var inactiveRD = 'rdInactive' + courseID;

    if (courseGrid.find('#' + activeRD).parent().find("#hdnCurrentCourseStatus").val() == 'True') {
        courseGrid.find('#' + activeRD).prop('checked', 'true');
    }
    else {
        courseGrid.find('#' + inactiveRD).prop('checked', 'true');
    }
}
function ConfirmActivateDeactivate() {
    var courseGrid = $('.ReplaceSLGrid');
    var courseID = $('[id$="hdnCourseIDActivateDeactivate"]').val();
    var activeRD = 'rdActive' + courseID;
    var classID = $('[id$="selClassCustomCourseGroup"]').val();
    var currentStatus = courseGrid.find('#' + activeRD).parent().find("#hdnCurrentCourseStatus").val().toLowerCase();
    $.ajax({
        type: 'POST',
        url: '../Faculty/AssessmentService.asmx/ActivateDeactivateCourse',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{"courseID":' + courseID + ',"classID":' + classID + ',"status":' + currentStatus + '}',
        success: function (responseData) {
            if (responseData.d)
            {

                var hdnStatus = courseGrid.find('#' + activeRD).parent().find("#hdnCurrentCourseStatus");
                if(hdnStatus.val()=="True"||hdnStatus.val()=="true")
                {
                    hdnStatus.val("False");
                }
                else
                {
                    hdnStatus.val("True");
                }
                   
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            CancelActivationDeactivation();
        }


    });
    $find("mpeConfirmActivateDeactivate").hide();
}
function SelectAllGenerateMemo(checkbox) {

    if ($(checkbox).is(':checked')) {
        $('.coursememo').prop('checked', 'checked');
    }
    else {
        $('.coursememo').removeAttr('checked');
    }

}
function CreatedCourseGenerateMemoForMultipleCourses() {
    var checkboxes = $('.coursememo:checked');
    var courseIDs = '';
    var firstLoop = 1;
    $.each(checkboxes, function (index, value) {
        if (firstLoop != 1) {
            courseIDs = courseIDs + ',';
        }
        var courseid = $(value).attr('data-courseid');
        //console.log(value,courseid)
        courseIDs = courseIDs + courseid;
        firstLoop = 0;
    });
    if (courseIDs == "") {
        return false;
    }
    var classID = $('[id$="selClassCustomCourseGroup"]').val();
    $('[id$="hdnCourseIDs"]').val(courseIDs);
    $('[id$="hdnClassID"]').val(classID);
    $('[id$="btnHidden"]').click();
}
function CreatedCoursePrintMemo() {
    var courseIDs = $('[id$="hdnCreatedCourseID"]').val();
    var classID = $('[id$="hdnCreatedClassID"]').val();
    $('[id$="hdnCourseIDs"]').val(courseIDs);
    $('[id$="hdnClassID"]').val(classID);
    $('[id$="btnHidden"]').click();
    $find('mpeCourseCreatedPopup').hide();
}
function ConfirmCourseCreate() {
    $('[id$="btnConfirmPopupForCreate"]').click();
}

function DeleteAdministratorFromList(btnDelete) {
    var adminName = $(btnDelete).attr('data-username');
    $('#spnAdministratorNameToDelete').html(adminName);
    $("#hdnSelectedAdminToDelete").val(btnDelete.id);
    $find('mpeRemoveAdminConfirm').show();
    return false;
}

function ConfirmAdminDelete() {
    var btnDeleteID = $('#hdnSelectedAdminToDelete').val();
    var adminID = $('#' + btnDeleteID).attr('data-userid');
    var adminName = $('#' + btnDeleteID).attr('data-username');
    $('#' + btnDeleteID).parent().parent().remove();
    var existingIDs = $('[id$="hdnAdministratorsEditCourse"]').val();
    //alert(existingIDs);
    var newIDs = existingIDs.replace(adminID, '');
    //alert(newIDs.replace(',,', ','));
    $('[id$="hdnAdministratorsEditCourse"]').val(newIDs.replace(',,', ','));
    $find('mpeRemoveAdminConfirm').hide();
}

function LoadClassesForInstitutionManageCourse(ddlInstitutionID, ddlClassesID, hdnSelectedClassID, isInstitutionChangeEvent, isCreateCourse) {
    var ddlInstitutions = $('[id$="' + ddlInstitutionID + '"]');
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var selectedInstitutionID = $(ddlInstitutions).val();

    if (selectedInstitutionID > 0) {
        $.ajax({
            type: 'GET',
            url: '../Faculty/AssessmentService.asmx/GetClassessByInstitution?institutionID=' + selectedInstitutionID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlClasses.empty();
                $.each(responseData.d, function (data, item) {
                    ddlClasses.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                });
                if (!isInstitutionChangeEvent) {
                    if (hdnSelectedClass.val()) {
                        ddlClasses.val(hdnSelectedClass.val());
                    }
                }
                if (isInstitutionChangeEvent && !isCreateCourse) {
                    SetSelectedClassAndLoadCourses('selClassCustomCourseGroup', 'hdnSelectedClassManageCourse');
                }
                //ddlClasses.removeAttr('disabled');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading classes:' + jqXHR + textStatus + errorThrown);
                //console.log('jqXHR, textStatus, errorThrown', jqXHR, textStatus, errorThrown);
            }

        });
    }
    else {
        //ddlClasses.empty();
        //ddlClasses.append('<option value="-1">All Classes</option>');
        //ddlClasses.attr('disabled', 'true');
    }
}
function SetSelectedClassValuesCreateCourse() {
    $('[id$="hdnSelectedClassCreateCourse"]').val($('[id$="ddlClassCreateCourse"]').find("option:selected").val());
    $('[id$="hdnSelectedClassNameCreateCourse"]').val($('[id$="ddlClassCreateCourse"]').find("option:selected").text());
}
function SetSelectedClassAndLoadCourses(ddlClassesID, hdnSelectedClassID) {
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var selectedClassID = $(ddlClasses).find("option:selected").val();
    $(hdnSelectedClass).val(selectedClassID);
    $('[id$="btnLoadCourses"]').click();

}
///Create course functions ends ------------------------------------------------------------------------------


//*****ManageCourseViewRosterStart*****//


function ConfirmViewRosterCourseDelete() {

    var btnDeleteID = $("#hdnDeletingButtonId").val();
    var courseID = $('#' + btnDeleteID).attr('data-courseid');
    var userID = $('#' + btnDeleteID).attr('data-userid');
    var productId = $("span[id$=lblProductIdValue]").text();
    $.ajax({
        type: 'POST',
        data: '{"userID":' + userID + ',"courseID":"' + courseID + '"}',
        url: '../Faculty/AssessmentService.asmx/DeleteStudentFromRosterCourse',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            OnDeleteUserFromRosterCourseSuccess(userID)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('jqXHR,textStatus,errorThrown', jqXHR, textStatus, errorThrown);
        }
    });
    return false;
};

function RejectViewRosterDelete() {
    $("#divViewRosterDelete").css("display", "none");
    $("#blkRosterModal")[0].className = "";
}

function ShowViewRosterCourse(btnViewRoster) {
    var courseID = $(btnViewRoster).attr('data-courseid');
    var courseName = $(btnViewRoster).attr('data-coursename');

    $(".rosterbody").empty();
    $('#lblRosterCourseName').html('Course Roster:' + courseName);
    $find('mpeViewRosterPopup').show();

    $.ajax({
        type: 'GET',
        url: '../Faculty/AssessmentService.asmx/GetRostersByCourse?courseID=' + courseID,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function () {
            $.ajax({
                type: 'GET',
                url: '../Faculty/AssessmentService.asmx/GetRostersByCourse?courseID=' + courseID,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function (responseData) {
                    $(".rosterbody").empty();
                    $.each(responseData.d, function (item, data) {

                        if (responseData.d.length >= 1) {
                            $(".rosterbody").append('<div id="user' + data.Id + '" class="row margin-top-10 margin-left-15 margin-right-15 pad-bottom-3" style="border-bottom:1px solid gray;"> ' +
                                            '<div class="col-xs-4 text-left smaller" style="word-wrap: break-word;"><span  style="font-size:inherit;">' + data.Name + '</span></div>' +
                                            '<div class="col-xs-4 text-left" style="word-wrap: break-word;"><span class="smaller">' + data.Email + '</span></div>' +
                                            '<div class="col-xs-4"><button class="btn btn-default btn-xs" style="margin-bottom:3px;" type="button" data-courseid="' + courseID + '" data-userid="' + data.Id + '" id="' + data.Id + '"  onclick="DeleteUserFromRosterCourse(this)">Delete</button></div>' +
                                        '</div>');
                        }
                        else {
                            $(".rosterbody").append('<div class="row margin-top-10 margin-left-15 margin-right-15 pad-bottom-3" style="border-bottom:1px solid gray;">' +
                                        '<div class="col-xs-12 text-left"><span class="make-font-bold">No Students found</span></div>' +
                                    '</div>');
                        }
                    });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('content,status,error', jqXHR, textStatus, errorThrown)
                }
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('content,status,error', jqXHR, textStatus, errorThrown)
        }
    });

}

function HideViewRosterCoursePopup() {
    $find('mpeViewRosterPopup').hide();
}
function OnDeleteUserFromRosterCourseSuccess(userId) {
    $('#user' + userId).remove();
    $("#viewRosterCancel").click();
}
function DeleteUserFromRosterCourse(btn) {
    $("#hdnDeletingButtonId").val(btn.id);
    $("#divViewRosterDelete").css("display", "block");
    $("#blkRosterModal")[0].className = "blkViewRosterBackground";
    return false;
};
//*****ManageCourseViewRosterEnd*****//

//*****Replace Create Group Filter Box Start*****//

function LoadClassAssessmentByInstitutionID(ddlInstitutionsID, ddlClassesID, hdnSelectedClassID, ddlAssessmentStyleID, hdnAssessmentStyleID) {

    var ddlInstitutions = $('[id$="' + ddlInstitutionsID + '"]');
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var selectedInstitutionID = $(ddlInstitutions).val();

    var ddlAssesmentstyles = $('[id$="' + ddlAssessmentStyleID + '"]');
    var hdnAssessmentStyle = $('[id$="' + hdnAssessmentStyleID + '"]');

    if (selectedInstitutionID > 0) {
        $.ajax({
            type: 'GET',
            url: '../Faculty/FiltersService.asmx/GetClasses?institutionID=' + selectedInstitutionID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlClasses.empty();                
                $.each(responseData.d, function (data, item) {
                    ddlClasses.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                });
                if (responseData.d != null) {
                    if (hdnSelectedClass.val()) {
                        ddlClasses.val(hdnSelectedClass.val());
                        hdnSelectedClass.val("");
                       // ddlClasses.val("-1").attr("selected", "selected");
                        if (ddlClasses.val() == null) {
                            ddlClasses.val("-1").attr("selected", "selected");
                        }
                    }
                    ddlClasses.removeAttr('disabled');
                }
                else {

                    ddlClasses.empty();
                    ddlClasses.append('<option value="-1">All Cohorts</option>');
                    ddlClasses.attr('disabled', 'true');
                
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading classes:' + jqXHR + textStatus + errorThrown);
                //console.log('jqXHR, textStatus, errorThrown', jqXHR, textStatus, errorThrown);
            }

        });
    }
    else {
        ddlClasses.empty();
        ddlClasses.append('<option value="-1">All Cohorts</option>');
        ddlClasses.attr('disabled', 'true');
    }

    if (selectedInstitutionID > 0) {
        var isMultivalue = "true";
        ddlAssesmentstyles.empty();
        $.ajax({
            type: 'GET',
            url: '../Faculty/FiltersService.asmx/GetAssessmentStyles?institutionID=' + selectedInstitutionID + '&isMulti=' + isMultivalue,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlAssesmentstyles.empty();

                $.each(responseData.d, function (data, item) {
                    ddlAssesmentstyles.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                });

                if (hdnAssessmentStyle.val()) {
                    ddlAssesmentstyles.val(hdnAssessmentStyle.val());
                }
                ddlAssesmentstyles.removeAttr('disabled');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading loadAssesmentstyles:' + jqXHR + textStatus + errorThrown);
                //console.log('jqXHR, textStatus, errorThrown', jqXHR, textStatus, errorThrown);
            }

        });
    }
    else {
        ddlAssesmentstyles.empty();
        ddlAssesmentstyles.append('<option value="-1">All Assessment Styles</option>');
        //ddlAssesmentstyles.attr('disabled', 'true');
    }

}

function LoadAssessmentsByAssesmentStyle(ddlInstitutionsID, ddlClassesID, hdnSelectedClassID, ddlAssessmentStyleID, hdnAssessmentStyleID, ddlAssesmentlistID, hdnAssesmentlistID) {

    var ddlInstitutions = $('[id$="' + ddlInstitutionsID + '"]');
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var selectedInstitutionID = $(ddlInstitutions).val();

    var ddlAssesmentstyles = $('[id$="' + ddlAssessmentStyleID + '"]');
    var hdnAssessmentStyle = $('[id$="' + hdnAssessmentStyleID + '"]');
    var assessmentStyleid = $(ddlAssesmentstyles).val();   
    var ddlAssesmentlist = $('[id$="' + ddlAssesmentlistID + '"]');
    var hdnAssesmentlist = $('[id$="' + hdnAssesmentlistID + '"]');
    // var consortiumID = ATI.NextGen.UI.Web.NextGenSession.ConsortiumIDForCurrentRole.ToString();
    // console.log('loadClassesByInstitutionID params:', ddlInstitutions, ddlClasses, hdnSelectedClass, selectedInstitutionID);

    if (assessmentStyleid != '' && assessmentStyleid != '-1') {
        ddlAssesmentlist.empty();
        $.ajax({
            type: 'GET',
            url: '../Faculty/FiltersService.asmx/GetAssessments?assessmentStyleID=' + assessmentStyleid + '&institutionID=' + selectedInstitutionID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlAssesmentlist.empty();
                ddlAssesmentlist.append('<option value="-1">All Assesments</option>');
                $.each(responseData.d, function (data, item) {
                    ddlAssesmentlist.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                });
                if (responseData.d != null) {
                    if (hdnAssesmentlist.val()) {
                        ddlAssesmentlist.val(hdnAssesmentlist.val());
                        if (ddlAssesmentlist.val() == null) {
                            ddlAssesmentlist.val("-1").attr("selected", "selected");
                        }
                    }
                    ddlAssesmentlist.removeAttr('disabled');
                }
                else {
                    ddlAssesmentlist.empty();
                    ddlAssesmentlist.append('<option value="-1">All Assesments</option>');
                    ddlAssesmentlist.attr('disabled', 'true');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading Assesmentlist:' + jqXHR + textStatus + errorThrown);
            }
        });
    } else {
        ddlAssesmentlist.empty();
        ddlAssesmentlist.append('<option value="-1">All Assesments</option>');
        ddlAssesmentlist.attr('disabled', 'true');
    }
}

function SetSelectedValueToHiddenField(ddlClassesID, hdnSelectedClassID, ddlAssessmentStyleID, hdnAssessmentStyleID, ddlAssesmentlistID, hdnAssesmentlistID) {

    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var classID = $(ddlClasses).val();
    $(hdnSelectedClass).val(classID);

    var ddlAssessmentStyles = $('[id$="' + ddlAssessmentStyleID + '"]');
    var hdnAssessmentStyle = $('[id$="' + hdnAssessmentStyleID + '"]');
    var AssessmentStyleID = $(ddlAssessmentStyles).val();
    $(hdnAssessmentStyle).val(AssessmentStyleID);


    var ddlAssesmentlist = $('[id$="' + ddlAssesmentlistID + '"]');
    var hdnAssesmentlist = $('[id$="' + hdnAssesmentlistID + '"]');
    var AssesmentlistID = $(ddlAssesmentlist).val();
    $(hdnAssesmentlist).val(AssesmentlistID);

    return true;
}

//*****Replace Create Group Filter Box End*****//

//*****TEAS report search Box Start*****//
function loadClassesByInstitution(ddlInstitutionsID, ddlClassesID, hdnSelectedClassID) {
    var ddlInstitutions = $('[id$="' + ddlInstitutionsID + '"]');
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var selectedInstitutionID = $(ddlInstitutions).find("option:selected").val();
    if (selectedInstitutionID > 0) {
        ddlClasses.empty();
        $.ajax({
            type: 'GET',
            url: '../Faculty/FiltersService.asmx/GetClasses?institutionID=' + selectedInstitutionID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlClasses.empty();
                $.each(responseData.d, function (data, item) {
                    ddlClasses.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                });
                if (hdnSelectedClass.val()) {
                    ddlClasses.val(hdnSelectedClass.val());
                }
                ddlClasses.removeAttr('disabled');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading classes:' + jqXHR + textStatus + errorThrown);
            }
        });
    }
    else {
        ddlClasses.empty();
        ddlClasses.append('<option value="-1">All Cohortd</option>');
        ddlClasses.attr('disabled', 'true');
    }
}

function ValidateFields(rgxStudentname, rqAssessmentFromDate, regAssessmentFromDate, cmbAssessmentFromDate2, RegularExpressionValidator1, cmp1, rdbAssessmentToDate) {

    if ($('[id$=' + rgxStudentname + ']').css('display') == 'inline');
    {
        var rgrgxStudentname = $('[id$=' + rgxStudentname + ']').css('display') == 'inline';

    }
    if ($('[id$=' + rqAssessmentFromDate + ']').css('display') == 'inline');
    {
        var rgrqAssessmentFromDate = $('[id$=' + rqAssessmentFromDate + ']').css('display') == 'inline';

    }
    if ($('[id$=' + regAssessmentFromDate + ']').css('display') == 'inline');
    {
        var rgregAssessmentFromDate = $('[id$=' + regAssessmentFromDate + ']').css('display') == 'inline';

    }
    if ($('[id$=' + cmbAssessmentFromDate2 + ']').css('display') == 'inline');
    {
        var rgcmbAssessmentFromDate2 = $('[id$=' + cmbAssessmentFromDate2 + ']').css('display') == 'inline';

    }
    if ($('[id$=' + RegularExpressionValidator1 + ']').css('display') == 'inline');
    {
        var rgRegularExpressionValidator1 = $('[id$=' + RegularExpressionValidator1 + ']').css('display') == 'inline';

    }
    if ($('[id$=' + cmp1 + ']').css('display') == 'inline');
    {
        var rgcmp1 = $('[id$=' + cmp1 + ']').css('display') == 'inline';

    }

    if ($('[id$=' + rdbAssessmentToDate + ']').css('display') == 'inline');
    {
        var rgrdbAssessmentToDate = $('[id$=' + rdbAssessmentToDate + ']').css('display') == 'inline';

    }
    var dateCompControl = $('[id$="cmbAssessmentFromDate2"]');
    $('#dtValidateLessThan').css('display', 'none');
    var dateValidationControl = $('[id$="regAssessmentFromDate"]');
    if (dateCompControl != null && dateCompControl!=undefined) {
        if (dateCompControl.css('visibility') == 'visible' && dateValidationControl.css('display') != 'inline') {
            $('#dtValidateLessThan').css('display', 'inline');
            return false;
        }
    }

    var dateCompControlTo = $('[id$="cmp1"]');
    $('#dtValidateFutureDate').css('display', 'none');
    var dateValidationControlTo = $('[id$="RegularExpressionValidator1"]');
    if (dateCompControlTo != null && dateCompControlTo != undefined) {
        if (dateCompControlTo.css('visibility') == 'visible' && dateValidationControlTo.css('display') != 'inline') {
            $('#dtValidateFutureDate').css('display', 'inline');
            return false;
        }
    }

    var returnvalue = rgrgxStudentname || rgrqAssessmentFromDate || rgregAssessmentFromDate || rgcmbAssessmentFromDate2 || rgRegularExpressionValidator1 || rgcmp1 || rgrdbAssessmentToDate;

    return !returnvalue;


}
function ClearTeasFilterValidationFields() {
    $('#dtValidateLessThan').css('display', 'none');
    
}
function ClearTeasFilterValidationFieldsDateTo() {
    
    $('#dtValidateFutureDate').css('display', 'none');
}


//*****TEAS report search Box End*****//
//*****UserSettings search Box field validation Start*****//
function ValidateUserSettingsFields(rgxStudentname, regLastLoginDate, cmbLastLoginDate, rangeLastLoginDate) {

    if ($('[id$=' + rgxStudentname + ']').css('display') == 'inline');
    {
        var rgrgxStudentname = $('[id$=' + rgxStudentname + ']').css('display') == 'inline';

    }
    if ($('[id$=' + regLastLoginDate + ']').css('display') == 'inline');
    {
        var rgregLastLoginDate = $('[id$=' + regLastLoginDate + ']').css('display') == 'inline';

    }
    if ($('[id$=' + cmbLastLoginDate + ']').css('display') == 'inline');
    {
        var rgcmbLastLoginDate = $('[id$=' + cmbLastLoginDate + ']').css('display') == 'inline';

    }
    if ($('[id$=' + rangeLastLoginDate + ']').css('display') == 'inline');
    {
        var rgrangeLastLoginDate = $('[id$=' + rangeLastLoginDate + ']').css('display') == 'inline';

    }

    var returnvalue = rgrgxStudentname || rgregLastLoginDate || rgcmbLastLoginDate || rgrangeLastLoginDate;

    return !returnvalue;


}



//*****UserSettings report search Box  field validation Start*****//

function ScheduleLessonAssignment(btn) {

    var moduleId = $(btn).parent().find('input[id$="hdnPracticeAssessmentBatchId"]').val();
    var moduleContentTypeId = $(btn).parent().find('input[id$="hdnPracticeAssessmentModuleContentTypeId"]').val();
    var institutionPurchaseId = $(btn).parent().find('input[id$="hdnTutorialInstitutionPurchaseId"]').val();
    var moduleName = $(btn).parent().find('input[id$="hdnPracticeAssessmentModuleName"]').val();
    var classID = $('select[id$="ddlSelectClass"]').val();
    var courseGroupTypeID = 0;
    var courseID = 0;
    var courseGroupID = 0;
    var courseGroupScheduleID = 0;
    var courseDetailID = 0;
    var comments = "";
    //var rowIndex = $(btn)[0].getAttribute("rowid");

    //$("#hdnSchedulePopupUserID").val(userID);
    $("#hdnSchedulePopupCourseName").val($("#ddlCourse").text());
    $("#hdnSchedulePopupClassID").val(classID);
    $("#hdnSchedulePopupCourseGroupTypeID").val(courseGroupTypeID);
    $("#hdnSchedulePopupCourseID").val(courseID);
    $("#hdnModuleScheduleModuleID").val(moduleId);
    $("#hdnSchedulePopupCourseGroupID").val(courseGroupID);
    $("#hdnSchedulePopupCourseGroupScheduleID").val(courseGroupScheduleID);
    $("#hdnSchedulePopupCourseDetailID").val(courseDetailID);
    $("#hdnModuleScheduleModuleContentTypeID").val(moduleContentTypeId);
    $("#hdnSchedulePopupComments").val(comments);
    $("#hdnModuleScheduleInstitutionPurchaseID").val(institutionPurchaseId);
    $("#hdnModuleSchedulemoduleName").val(moduleName);
    OpenTestingProductsSchedulePopup(btn, 'Add', 'Tutorial');

    return false;
}


//*****create custom group search Box  field validation Start*****//
function ValidateCreateCustomeGroupFields(cmbFromDate, CompareValidator1, cmbvToDate, RegularExpressionValidator2, RegularExpressionValidator1) {

    if ($('[id$=' + cmbFromDate + ']').css('display') == 'inline');
    {
        var rgcmbFromDate = $('[id$=' + cmbFromDate + ']').css('display') == 'inline';

    }
    if ($('[id$=' + CompareValidator1 + ']').css('display') == 'inline');
    {
        var rgCompareValidator1 = $('[id$=' + CompareValidator1 + ']').css('display') == 'inline';

    }
    if ($('[id$=' + cmbvToDate + ']').css('display') == 'inline');
    {
        var rgcmbvToDate = $('[id$=' + cmbvToDate + ']').css('display') == 'inline';

    }
    if ($('[id$=' + RegularExpressionValidator2 + ']').css('display') == 'inline');
    {
        var rgRegularExpressionValidator2 = $('[id$=' + RegularExpressionValidator2 + ']').css('display') == 'inline';

    }
    if ($('[id$=' + RegularExpressionValidator1 + ']').css('display') == 'inline');
    {
        var rgRegularExpressionValidator1 = $('[id$=' + RegularExpressionValidator1 + ']').css('display') == 'inline';

    }
    var returnvalue = rgcmbFromDate || rgCompareValidator1 || rgcmbvToDate || rgRegularExpressionValidator2 || rgRegularExpressionValidator1;

    return !returnvalue;


}
//*****create custom group search Box  field validation End*****//
//*****Google compatability start*****//
function TEASGooglecompatability() {
    Sys.Browser.WebKit = {};
    if (navigator.userAgent.indexOf('WebKit/') > -1) {
        Sys.Browser.agent = Sys.Browser.WebKit;
        Sys.Browser.version = parseFloat(navigator.userAgent.match(/WebKit\/(\d+(\.\d+)?)/)[1]);
        Sys.Browser.name = 'WebKit';
    }
}

//*****Google compatability end*****//

// Replacing images with html Tabs 
function ApplySelectedTabStyleViewResults(tabName) {

    $('[id$=QuickReportSubNav]').removeClass("selected");
    $('[id$=ReportWizardSubNav]').removeClass("selected");
    $('[id$=CustomReportSubNav]').removeClass("selected");
    $('[id$=DataExtractSubNav]').removeClass("selected");
    $('[id$=FocusedReviewSubNav]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");
}

function ApplySelectedTabStyleUsers(tabName) {

    $('[id$=UserSettingsSubNav]').removeClass("selected");
    $('[id$=CustomReportGroupsSubNav]').removeClass("selected");
    $('[id$=CourseGroupsSubNav]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");
}

function ApplySelectedTabStyleProducts(tabName) {

    $('[id$=ProctorSubNav]').removeClass("selected");
    $('[id$=PracticeSubNav]').removeClass("selected");
    $('[id$=TutorialsSubNav]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");
}

function ApplySelectedTabStyleResultsSubNav(tabName) {

    $('[id$=StudentsSubNav]').removeClass("selected");
    $('[id$=GroupSubNav]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");
}

function ApplySelectedTabStyleMPD(tabName) {

    $('[id$=ProDevSubNav]').removeClass("selected");
    $('[id$=MyResultsSubNav]').removeClass("selected");
    $('[id$=MyCESubNav]').removeClass("selected");
    $('[id$=MyPurchasesSubNav]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");
}

function ApplySelectedTabStyleELearn(tabName) {

    $('[id$=PracAssSubNav]').removeClass("selected");
    $('[id$=ProcAssSubNav]').removeClass("selected");
    $('[id$=TutSubNav]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");
}

function ApplySelectedTabStyleBenchMarks(tabName) {

    $('[id$=ProctorBenchMarkSubNav]').removeClass("selected");
    $('[id$=PracticeBenchMarkSubNav]').removeClass("selected");
    $('[id$=TutorialsBenchMarkSubNav]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");

}

function SetHdnClickTab() {
    $('[id$=hdnClickTab]')[0].value = "true";
}

function ApplySelectedTabStyleMSGCourseWithoutClass(tabName) {

    $('[id$=StudentSettingsSubNav]').removeClass("selected");
    $('[id$=CustomReportGroupsSubNav]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");

}

function ApplySelectedTabStyleClose(tabName) {

    $('[id$=ProctSubNav]').removeClass("selected");
    $('[id$=PractSubNav]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");
}
function ApplySelectedReportTabStyleClose(tabName) {

    $('[id$=imgMapProctortab]').removeClass("selected");
    $('[id$=imgMapPracticetab]').removeClass("selected");

    $('[id$=' + tabName + ']').addClass("selected");
}


function ShowOrderDetails(orderID,orderdate,studentid,email) {
    $.ajax({
        type: "GET",
        url: "../Faculty/AssessmentService.asmx/GetOrderDetails?orderID=" + orderID,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (resposedata) { GetOrderDetailsSuccess(resposedata, orderID, orderdate, studentid,email) },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('jqXHR,textStatus,errorThrown', jqXHR, textStatus, errorThrown);
        }

    });
    //  $("#orderDetailsDialog").css("display","block");
    $find("mpeOrderDetailPopup").show();

}

function GetDateFromJson(JSONdate) {

    var data = JSONdate.replace('/Date(', '').replace(')/', ''); /*It picksup the number from  the given string "/Date(0114578966578774556)/" */
    var dates = new Date(parseInt(data));  //Parse and change to Date
    var month = dates.getMonth() + 1;

    var dateDay = dates.getDate();
    var doubleDigitDay = dateDay;

    if (dateDay < 10)
        doubleDigitDay = dateDay;

    var doubleDigitMonth = month;

    if (month < 10)
        doubleDigitMonth = month;

    return doubleDigitMonth + "/" + doubleDigitDay + "/" + dates.getFullYear();
}

function GetOrderDetailsSuccess(responseData, orderID, orderdate, studentid,email) {
    $("#purchaseOrderID").text(orderID);
    $("#purchaseOrderDate").text(orderdate);
    //$("#purchaseOrderAccountNumber").text(responseData.d[0].OrderNumber);
    $("#purchaseOrderStudentID").text(studentid);
    //$("#purchaseOrderPromotionCode").text(responseData.d[0].OrderNumber);
    //$("#purchaseOrderPromotionMethod").text(responseData.d[0].OrderNumber);
    //$("#purchaseOrderTransactionID").text(responseData.d[0].OrderNumber);
    //$("#purchaseOrderInvoiceNumber").text(responseData.d[0].OrderNumber);
    //$("#purchaseOrderNumber").text(responseData.d[0].OrderNumber);
    //$("#purchaseOrderDeliveryMethod").text(responseData.d[0].OrderNumber);
    $("#purchaseOrderEmail").text(email);
    $("#purchaseOrderBillingName").text(responseData.d[0].BillingName);
    $("#purchaseOrderBillingAddress").text(responseData.d[0].BillingAddress);
    $("#purchaseOrderBillingCity").text(responseData.d[0].BillingCity);
    $("#purchaseOrderBillingState").text(responseData.d[0].BillingState);
    $("#purchaseOrderBillingZip").text(responseData.d[0].BillingZip);
    $("#purchaseOrderBillingPhoneNumber").text(responseData.d[0].BillingPhone);
    $("#purchaseOrderShippingName").text(responseData.d[0].ShippingName);
    $("#purchaseOrderShippingAddress").text(responseData.d[0].ShippingAddress);
    $("#purchaseOrderShippingCity").text(responseData.d[0].ShippingCity);
    $("#purchaseOrderShippingState").text(responseData.d[0].ShippingSate);
    $("#purchaseOrderShippingPhoneNumber").text(responseData.d[0].ShippingPhone);
    $("#purchaseOrderShippingZip").text(responseData.d[0].ShippingZip);
    $("#purchaseOrderQuantity").text(responseData.d[0].ShippingQuantity);
    $("#purchaseOrderDescription").text(responseData.d[0].ShippingDescription);
    //$("#purchaseOrderInstitution").text(responseData.d[0].OrderNumber);
    $("#purchaseOrderPrice").text('$' + GetOrderPrice(responseData.d[0].Price));
    $("#purchaseOrderDiscount").text('$' + GetOrderPrice(responseData.d[0].Discount));
    $("#purchaseOrderTax").text('$' + GetOrderPrice(responseData.d[0].ShippingTax));
    $("#purchaseOrderShippingCost").text('$' + GetOrderPrice(responseData.d[0].Shipping));
    $("#purchaseOrderTotalCost").text('$' + GetOrderPrice(responseData.d[0].ShippingTotal));
}

function GetOrderPrice(Element) {
    if (Element != null) {
        if (isNaN(Element))
            return null;
        return (Math.round(Element * 100) / 100).toFixed(2);
    }
    return "0.00";
};


// Filter selection data extract filter javascript.
function SaveSelection(ddl, hdnField) {
    $('[id$=' + hdnField + ']')[0].value = $('[id$=' + ddl + ']')[0].value;   
}

//Practice assessment
//function ShowPraticeAssessment(url) {
//    //$('[id$="hlPracticeAssessment"]').click();
//    window.open(url);
//}
function ShowPraticeAssessment(batchID, ispreview) {
    var params = 'top=0,left=0,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,modal=yes';
    params += ',width=' + screen.width;
    params += ',height=' + screen.height;
    params += ',fullscreen=yes';

    var queryStr = 'batchid=' + batchID;
    queryStr = queryStr + '&IsPreview=' + ispreview;
    var url = '../ProductOffering/ProductOfferingHostingPage.aspx?';
    if (!(window.location.href.toLowerCase().indexOf('student') >= 0) &&
        !(window.location.href.toLowerCase().indexOf('faculty') >= 0) &&
        !(window.location.href.toLowerCase().indexOf('general') >= 0)) {
        url = './ProductOffering/ProductOfferingHostingPage.aspx?';
    }

    var newwin = window.open(url + queryStr, 'Assessment', params);
    if (!newwin) {
        ValidateMsg("Please select OK to begin your Practice Assessment.");
        $get("ctl00_btnOK").onclick = function () { ShowPraticeAssessment(batchID, ispreview); HideError(); return false; };
        return;
    }
    else {
        $get("ctl00_btnOK").onclick = function () { HideError(); return false };
    }
    if (window.focus) {
        newwin.focus();
    }
    $('[id$="btnDummyPostback"]').click();
}


// Filter selection bar data extract. 
function loadClassesByInstitutionID_DataExtract(ddlInstitutionsID, ddlClassesID, hdnSelectedClassID) {
    var ddlInstitutions = $('[id$="' + ddlInstitutionsID + '"]');
    var ddlClasses = $('[id$="' + ddlClassesID + '"]');
    var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var selectedInstitutionID = $(ddlInstitutions).find("option:selected").val();
    if (selectedInstitutionID > 0) {
        ddlClasses.empty();
        $.ajax({
            type: 'GET',
            url: '../Faculty/FiltersService.asmx/GetClasses?institutionID=' + selectedInstitutionID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlClasses.empty();
                //ddlClasses.append('<option value="-1">All Classes</option>');               
                $.each(responseData.d, function (data, item) {
                    ddlClasses.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                });
                if (hdnSelectedClass.val()) {
                    ddlClasses.val(hdnSelectedClass.val());
                    //LoadCoursesByClassID('ddlClasses', 'ddlCourse', 'hdnSelectedClassID');
                    if (ddlClasses.val() == null) {                       
                        ddlClasses.val("-1").attr("selected", "selected");                        
                    }
                }
                ddlClasses.selectedIndex = "-1";
                ddlClasses.removeAttr('disabled');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading classes:' + jqXHR + textStatus + errorThrown);
            }
        });
    }
    else {
        ddlClasses.empty();
        ddlClasses.append('<option value="-1">All Cohorts</option>');
        ddlClasses.append('<option value="-2">No Cohort Assigned</option>');
        //$('[id$="' + ddlClassesID + '"]').disabled = true;
        ddlClasses.attr('disabled', 'true');
        $('[id$="' + hdnSelectedClassID + '"]')[0].value = "";
        //$('[id$="' + hdnSelectedClassID + '"]').val() = "";

    }
}


function loadAssessmentsByInstitutionID_FocusedReview(ddlInstitutionsID, ddlAssessmentsID, hdnSelectedAssessmentID) {
    var ddlInstitutions = $('[id$="' + ddlInstitutionsID + '"]');
    var ddlAssessments = $('[id$="' + ddlAssessmentsID + '"]');
    var hdnSelectedAssessment = $('[id$="' + hdnSelectedAssessmentID + '"]');
    var selectedInstitutionID = $(ddlInstitutions).find("option:selected").val();
    if (selectedInstitutionID > 0) {
        ddlAssessments.empty();
        $.ajax({
            type: 'GET',
            url: '../Faculty/FiltersService.asmx/GetAssessmentsByInstitution?institutionID=' + selectedInstitutionID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlAssessments.empty();
                //ddlClasses.append('<option value="-1">All Classes</option>');               
                $.each(responseData.d, function (data, item) {
                    ddlAssessments.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                });
                if (hdnSelectedAssessment.val()) {
                    ddlAssessments.val(hdnSelectedAssessment.val());
                    //LoadCoursesByClassID('ddlClasses', 'ddlCourse', 'hdnSelectedClassID');
                    if (ddlAssessments.val() == null) {
                        ddlAssessments.val("-1").attr("selected", "selected");
                    }
                }
                ddlAssessments.selectedIndex = "-1";
                ddlAssessments.removeAttr('disabled');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading classes:' + jqXHR + textStatus + errorThrown);
            }
        });
    }
    else {
        ddlAssessments.empty();
        ddlAssessments.append('<option value="-1">All Assessments</option>');
        ddlAssessments.append('<option value="-2">No Assessments Assigned</option>');
       // $('[id$="' + ddlAssessmentsID + '"]').disabled = true;
        ddlAssessments.attr('disabled', 'true');
        $('[id$="' + hdnSelectedAssessmentID + '"]')[0].value = "";
        //$('[id$="' + hdnSelectedAssessmentID + '"]').val() = "";
    }

}


function ValidateProductIDControls() {

    var pwdControl = $('[id$="txtPassword"]');

    if (pwdControl != undefined && !($(pwdControl).css('visibility') == 'hidden' || $(pwdControl).css('display') == 'none')) {
        if ($(pwdControl).val() != undefined && $(pwdControl).val().trim() == '') {
            $('#lbPwdErrMessage').remove();
            $(pwdControl).parent().append('<label id="lbPwdErrMessage" style="color:red;">Enter password</label>');
            return false;
        }
    }
    return true;
}

////////////Profile tab Starts here///////////////

function edit(section) {

    switch(section){
  
        case 'addresss': $("#editaddressinfo").slideDown();//css('display', 'inline-block');
            break;

        case 'emailsection': $("#editemailsection").slideDown();
            break;
    
        case 'password':
            $('[id$="txtOldPassword"]').attr("enabled", "true");
            $('[id$="txtNewPassword"]').removeAttr("disabled", "disabled");
            $('[id$="txtConfirmNewPassword"]').removeAttr("disabled", "disabled");            
            $("#editpassword").slideDown();
            $('#editpassword').find('input:password').val('');
           break;
  
   
        case 'securityquestions': $("#editsecurityquestions").slideDown();
           break;
    
   
        case 'institutioninfo': $("#editinstitutioninfo").slideDown();
           break;
   
        case 'demographicinfo': $("#editdemographicinfo").slideDown();
           break;
 
}
}

function GetGendercode(Gender) {

    var value = "";
    if (Gender == "Unspecified") {
        value="N"
    }
    else if (Gender == "Male") {        
        value = "M"
    }
    else if (Gender == "Female") {
        value = "F"
    }

    return value;
}
function GetPrimarylanguage(primarylangval){

    var value = "";

    if (primarylangval == "French - France" || primarylangval == "French") {
        value = "2"
    }
    else if (primarylangval == "English - US" || primarylangval == "English") {
        value = "0"
    }
    else if (primarylangval == "Spanish - Mexico" || primarylangval=="Spanish") {
        value = "1"
    }
    else if (primarylangval == "Other") {
        value = "3"
    }
    return value;
}

function LoadStates(selectedCountryID)
 {
        var ddlCountry = $('[id$=" ddlCountry"]');
        var ddlState = $('[id$="ddlState"]');
        // var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
       // var selectedCountryID = $(ddlCountry).find("option:selected").val();
        if (selectedCountryID > 0) {
            ddlState.empty();
            $.ajax({
                type: 'GET',
                url: '../Faculty/ProfileService.asmx/GetStates?Countryid=' + selectedCountryID,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function (responseData) {
                    ddlState.empty();
                    $.each(responseData.d, function (data, item) {
                        ddlState.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                    });
                    //if (hdnSelectedClass.val()) {
                    //    ddlClasses.val(hdnSelectedClass.val());
                    //}
                    //ddlClasses.removeAttr('disabled');
                    var stateIDval = $('[id$="hdstateID"]').val();
                    $('[id$="ddlState"]').val(stateIDval).attr("selected", "selected");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('Error on loading States:' + jqXHR + textStatus + errorThrown);
                }
            });
        }
        else {
            ddlState.empty();
            ddlState.append('<option value="-1">Selectstate</option>');
            ddlState.attr('disabled', 'true');
        }
    }
function hideedit(section) {

    switch (section) {

        case 'addresss': $("#editaddressinfo").slideUp();//.css('display', 'none');  

            var Street= $('[id$="spnstreeet"]').html();
            var Street2=$('[id$="spnstreeet2"]').html();
            var Street3=$('[id$="spnstreeet3"]').html();
            var City=$('[id$="spncity"]').html();
            var AtiState=$('[id$="spnstate"]').html();
            var Country=$('[id$="spncountry"]').html();
            var Zip=$('[id$="spnzip"]').html();
            var Phone=$('[id$="spnphone"]').html();

            //setting editable fields values after update
            $('[id$="txtAddress1"]').val(Street);
            $('[id$="txtAddress2"]').val(Street2);
            $('[id$="txtAddress3"]').val(Street3);
            $('[id$="txtCity"]').val(City);           
            var countryIDval = $('[id$="hdcountryID"]').val();
            $('[id$="ddlCountry"]').val(countryIDval).attr("selected", "selected");
            LoadStates(countryIDval);
           
            $('[id$="txtZip"]').val(Zip);
            $('[id$="txtPhone"]').val(Phone);

            break;

        case 'emailsection': $("#editemailsection").slideUp();
                             var emaildata = $('[id$="lblemail"]').html();                             
                             $('[id$="txtEmail"]').val(emaildata);
                             $('[id$="txtConfirmEmail"]').val("");
                             
            break;

        case 'password':$("#editpassword").slideUp();
            break;


        case 'securityquestions':$("#editsecurityquestions").slideUp();
            break;


        case 'institutioninfo': $("#editinstitutioninfo").slideUp();

            var studentidval = $('[id$="spnstudentID"]').html();
            $('[id$="txtStudentEmpID"]').val(studentidval);

            var credentialval = $('[id$="spncredentials"]').html();
            $('[id$="txtCredentials"]').val(credentialval);

            var institutionval = $('[id$="instID"]').val();            
            $('[id$="ddlInstitution"]').val(institutionval).attr("selected", "selected")

            var graduationdateval = $('[id$="spngraduationdate"]').html();
            var date = new Date(graduationdateval);           
            $('[id$="txtExpectedGradDate"]').val((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());

            break;

        case 'demographicinfo': $("#editdemographicinfo").slideUp();

            var Gender = $('[id$="spngender"]').html();
            var Gendervalue = GetGendercode(Gender);
            $('[id$="ddlGender"]').val(Gendervalue).attr("selected", "selected");

            var BirthDateval = $('[id$="spnbirthdate"]').html();
            var birthdate = new Date(BirthDateval);
            $('[id$="txtBirthDate"]').val((birthdate.getMonth() + 1) + '/' + birthdate.getDate() + '/' + birthdate.getFullYear());

            //var chklstRaceval = $('[id$="spnrace"]').html();
            //$('[id$="chklstRace"]').val(chklstRaceval).attr("checked", "checked");

            
            var primarylangval = $('[id$="spnprimarylang"]').html();
            var languageval = GetPrimarylanguage(primarylangval);
            $('[id$="ddlPrimaryLanguage"]').val(languageval).attr("checked", "checked");


            break;

    }
}

function RequiredFieldValidatorCommon(controlToValidate, controlValue, errorMessageControl) {
    switch (controlToValidate[0].type) {
        case "text":
        case "password":
            {
                if (controlValue == "") {
                    $(errorMessageControl).css('display', 'inline');
                    return false;

                }
                else
                    $(errorMessageControl).css('display', 'none');
                return true;
                break;
            }
        case "select-one":
            {
                if (controlValue == -1 || controlValue == "") {
                    $(errorMessageControl).css('display', 'inline');
                    return false;

                }
                else
                    $(errorMessageControl).css('display', 'none');
                return true;
                break;
            }
    }
}

function ValidateZipCode(zip, errorMessageControl) {
    var reZip = /^[0-9a-zA-Z\s]+$/;
    var repeatedChars = true;
    var isValidforNumbers = reZip.test(zip);

    if (!isValidforNumbers) {
        $(errorMessageControl).css('display', 'inline');
        return isValidforNumbers;
    }
    else {
        $(errorMessageControl).css('display', 'none');
    }
        if (zip != null)
            repeatedChars = zip.indexOf('--') > -1;
    return !repeatedChars;
}

function ValidatePhoneNumber(phone, errorMessageControl) {
    var regPhone = /^\+?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
    var isValidPhone = regPhone.test(phone);
    if(isValidPhone)
    {
        $(errorMessageControl).css('display', 'none');        
    }
    else {
        $(errorMessageControl).css('display', 'inline');
    }
    return isValidPhone;
}

function ValidateEmailSection(emailAddress, errorMessageControl) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var returnValue = re.test(emailAddress);
    if (returnValue == false) {
        $(errorMessageControl).css('display', 'inline');
        return false;
    }
    else {
        $(errorMessageControl).css('display', 'none');
    }
    //Check if there is a '.' after @
    return (emailAddress.lastIndexOf('.') > emailAddress.lastIndexOf('@')) && returnValue;
}

function ValidatepasswordSection(oldPasswordControl, oldPasswordValue, newPasswordControl, newPasswordValue, confirmPasswordControl, confirmPasswordValue) {
    var isRfvOldPasswordValid;
    var isRfvNewPasswordValid;
    var isValNewPasswordValid;
    var isRfvConfrmNewPasswordValid;
    
        isRfvOldPasswordValid = RequiredFieldValidatorCommon(oldPasswordControl, oldPasswordValue, $('[id$="LblRfvTxtOldPassword"]'));
        
    
         isRfvNewPasswordValid = RequiredFieldValidatorCommon(newPasswordControl, newPasswordValue, $('[id$="LblRfvTxtNewPassword"]'));
    
         if (newPasswordValue!=""){
        var errorMsg = ValidatePassword(newPasswordValue)
        if (errorMsg == "") {
            $('[id$="LblValTxtNewPassword"]').text("");
            $('[id$="LblValTxtNewPassword"]').css('display', 'none');
            isValNewPasswordValid = true;
        }
        else {
            $('[id$="LblValTxtNewPassword"]').text("");
            $('[id$="LblValTxtNewPassword"]').text(errorMsg);
            $('[id$="LblValTxtNewPassword"]').css('display', 'inline');
            isValNewPasswordValid = false;
        }
         }
        if (isValNewPasswordValid==true){
            if (oldPasswordValue == newPasswordValue) {
                $('[id$="LblValTxtNewPassword"]').text("");
                $('[id$="LblValTxtNewPassword"]').text("Old and new passwords cannot be same");
                $('[id$="LblValTxtNewPassword"]').css('display', 'inline');
                isValNewPasswordValid = false;
            }
            else {
                $('[id$="LblValTxtNewPassword"]').text("");
                $('[id$="LblValTxtNewPassword"]').css('display', 'none');
                isValNewPasswordValid = true;
            }
        }
    
    
         isRfvConfrmNewPasswordValid = RequiredFieldValidatorCommon(confirmPasswordControl, confirmPasswordValue, $('[id$="LblRfvTxtConfirmNewPassword"]'));
    
    if(confirmPasswordValue!=""){
        if (newPasswordValue != confirmPasswordValue) {
            $('[id$="LblCmpTxtConfirmNewPassword"]').css('display', 'inline');
            isRfvConfrmNewPasswordValid = false;
        }
        else {
            $('[id$="LblCmpTxtConfirmNewPassword"]').css('display', 'none');
            isRfvConfrmNewPasswordValid = true;
        }
    }
   
        return (isRfvOldPasswordValid && isRfvNewPasswordValid && isValNewPasswordValid && isRfvConfrmNewPasswordValid)
}

function ValidatePassword(password) {

    if (password.length < 6){
        return "Password does not contain at least six characters.";
    }
    if (!/\d/.test(password)){ //Match for a number
        return "Password does not contain at least one number.";
    }
    if (!/[A-Z]/.test(password)){ //Match for a upper case letter
        return "Password does not contain at least one uppercase alphabetic character.";
    }
    if (/(.)\1{2}/.test(password)){ // not more than 2 repeated characters
        return "Password contains more than two repeated characters.";
    }
    else{
        return "";
    }
}

function ValidatesecurityquestionsSection() {

    if ($('[id$="LblRfvDdlSecQues1"]').css('display') == 'inline');
    {
        var LblRfvDdlSecQues1 = $('[id$="LblRfvDdlSecQues1"]').css('display') == 'inline';

    }
    if ($('[id$="LblRfvTxtSecAns1"]').css('display') == 'inline');
    {
        var LblRfvTxtSecAns1 = $('[id$="LblRfvTxtSecAns1"]').css('display') == 'inline';

    }
    if ($('[id$="LblRfvDdlSecQues2"]').css('display') == 'inline');
    {
        var LblRfvDdlSecQues2 = $('[id$="LblRfvDdlSecQues2"]').css('display') == 'inline';

    }
    if ($('[id$="LblRfvTxtSecAns2"]').css('display') == 'inline');
    {
        var LblRfvTxtSecAns2 = $('[id$="LblRfvTxtSecAns2"]').css('display') == 'inline';

    }
    if ($('[id$="LblRfvDdlSecQues3"]').css('display') == 'inline');
    {
        var LblRfvDdlSecQues3 = $('[id$="LblRfvDdlSecQues3"]').css('display') == 'inline';

    }
    if ($('[id$="LblRfvTxtSecAns3"]').css('display') == 'inline');
    {
        var LblRfvTxtSecAns3 = $('[id$="LblRfvTxtSecAns3"]').css('display') == 'inline';

    }
    var returnresult = LblRfvDdlSecQues1 || LblRfvTxtSecAns1 || LblRfvDdlSecQues2 || LblRfvTxtSecAns2 || LblRfvDdlSecQues3 || LblRfvTxtSecAns3;

    return !returnresult;

}

function ValidateinstitutioninfoSection() {
    var institution = $('[id$="ddlInstitution"]').val();
    var graduationDate = $('[id$="txtExpectedGradDate"]').val();
    var isInstitutionValid = RequiredFieldValidatorCommon($('[id$="ddlInstitution"]'), institution, $('[id$="LblRfvDdlInstitution"]'));
    if ($('[id$="chkNonDegree"]').is(":checked") == false) {
        var isGradDateValid = RequiredFieldValidatorCommon($('[id$="txtExpectedGradDate"]'), graduationDate, $('[id$="LblRfvTxtExpectedGradDate"]'));
        if (isGradDateValid == true) {
            isGradDateValid = ValidateDateFormat(graduationDate);
            if (isGradDateValid) {
                $('[id$="LblRevTxtExpectedGradDate"]').css('display', 'none');
            }
            else {
                $('[id$="LblRevTxtExpectedGradDate"]').css('display', 'inline');
            }
        }
    }
    else if ($('[id$="chkNonDegree"]').is(":checked") == true) {
            var isGradDateValid = true;
        }

    return (isInstitutionValid && isGradDateValid);

}

function ValidateDateFormat(date) {
    if (!date) return false;
    var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
    if (matches == null) return false;
    var d = matches[2];
    var m = matches[1] - 1;
    var y = matches[3];
    var composedDate = new Date(y, m, d);
    if (composedDate < new Date(1753, 0, 1)) { //Minimum date validation
        return false;
    }
    return composedDate.getDate() == d &&
                    composedDate.getMonth() == m &&
                    composedDate.getFullYear() == y;
}

function UpdateAddressSection() {

    txtAddress1 = $('[id$="txtAddress1"]').val();
    txtAddress2 = $('[id$="txtAddress2"]').val();
    txtAddress3 = $('[id$="txtAddress3"]').val();
    txtCity = $('[id$="txtCity"]').val();
    ddlState = $('[id$="ddlState"]').val();
    ddlCountry = $('[id$="ddlCountry"]').val();
    txtZip = $('[id$="txtZip"]').val();
    txtPhone = $('[id$="txtPhone"]').val();
    var addr1RfvValid = RequiredFieldValidatorCommon($('[id$="txtAddress1"]'), txtAddress1, $('[id$="LblRevTxtAddress1"]'));
    var cityRfvValid = RequiredFieldValidatorCommon($('[id$="txtCity"]'), txtCity, $('[id$="LblRevTxtCity"]'));
    var stateRfvValid = RequiredFieldValidatorCommon($('[id$="ddlState"]'), ddlState, $('[id$="LblRfvDdlState"]'));
    var countryRfvValid = RequiredFieldValidatorCommon($('[id$="ddlCountry"]'), ddlState, $('[id$="LblRfvDdlCountry"]'));
    var zipRfvValid = RequiredFieldValidatorCommon($('[id$="txtZip"]'), txtZip, $('[id$="LblRevTxtZip"]'));
    var zipFormatValid = ValidateZipCode(txtZip, $('[id$="LblFvTxtZip"]'));
    var phoneFormatValid = ValidatePhoneNumber(txtPhone, $('[id$="LblFvTxtPhone"]'));
    if (!(addr1RfvValid && cityRfvValid && stateRfvValid && stateRfvValid && countryRfvValid && zipRfvValid && zipFormatValid && phoneFormatValid)) {
        return false;
    }
  
    $.ajax({
        type: 'POST',
        url: '../Faculty/ProfileService.asmx/UpdateAddressInfo',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{"address1": "' + txtAddress1 + '","address2":"' + txtAddress2 + '","address3":"' + txtAddress3 + '","countryID":"' + ddlCountry + '","stateID":"' + ddlState + '","city":"' + txtCity + '","zipCode":"' + txtZip + '","phone":"' + txtPhone.toString() + '"}',

        success: function (responseData) {
            GetUserinfo('sectionUserinfo');
            $("#editaddressinfo").css('display', 'none');
           
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on Updating Address:' + jqXHR + textStatus + errorThrown);
        }
    });
    return false;

}

function IsEmailAvailable() {

    var Emailid = $('[id$="txtEmail"]').val();
    var isEmailAvailable;
    $.ajax({
        type: "POST",
        url: "../Faculty/ProfileService.asmx/IsEmailAddressAvailable",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: '{"emailAddress":"' + Emailid + '" }',

        success: function (responseData) {
            if (responseData.d == false) {
                $('[id$="LblIsAvailableTxtEmail"]').css("display", "inline");
                isEmailAvailable = false;
                return false;
            } else {
                $('[id$="LblIsAvailableTxtEmail"]').css("display", "none");
                isEmailAvailable = true;
                return true;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on Updating Email:' + jqXHR + textStatus + errorThrown);
        }
    });
}


function UpdateEmailSection() {

    var Emailid = $('[id$="txtEmail"]').val();
    var ConfirmEmailid = $('[id$="txtConfirmEmail"]').val();
    var isRfvEmailValid = RequiredFieldValidatorCommon($('[id$="txtEmail"]'), Emailid, $('[id$="LblRfvTxtEmail"]'));
    var isRfvConfirmEmailValid = RequiredFieldValidatorCommon($('[id$="txtConfirmEmail"]'), ConfirmEmailid, $('[id$="LblRfvTxtConfirmEmail"]'));
    var isFvEmailValid = ValidateEmailSection(Emailid, $('[id$="LblRevTxtEmail"]'));
    var isCompareEmailValid;
    if (Emailid == ConfirmEmailid) {
        $('[id$="LblCmpTxtConfirmEmail"]').css('display', 'none');
        isCompareEmailValid = true;
    }
    else {
        $('[id$="LblCmpTxtConfirmEmail"]').css('display', 'inline');
        isCompareEmailValid = false;
    }
    if (!(isRfvEmailValid && isRfvConfirmEmailValid && isFvEmailValid && isCompareEmailValid)) {
        return false;
    }
    $.ajax({
        type: 'POST',
        url: '../Faculty/ProfileService.asmx/UpdateEmailAddress',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{"emailAddress":"' + Emailid + '" }',


        success: function (responseData) {
            GetUserinfo('sectionEmail');

            $("#editemailsection").css('display', 'none');

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on Updating Email:' + jqXHR + textStatus + errorThrown);
        }
    });

    return false;
}

function GetRaceID(racename) {

    var Raceid=null;

    $.ajax({
        type: 'GET',
        url: '../Faculty/ProfileService.asmx/GetRaces?',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function(responsedata) {
            //$.each(responsedata.d, function (data, item)
            //{
            //    if (item.Value == racename) {
            //        Raceid = item.key;
            //        console.log(Raceid);
            //    }
            //}         
            
            //)
            console.log(responsedata);
            return responsedata;

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on getting RACES:' + jqXHR + textStatus + errorThrown);
        }
    });

    
    return Raceid;
}

function ShowDemographicInfo(raceName, gender, birthDate, languageID) {
    $('[id$="spnbirthdate"]').text(birthDate);
    $('[id$="spnrace"]').html(raceName);
    if (gender == "N") {
        $('[id$="spngender"]').html("Unspecified");
    }
    else if (gender == "M") {
        $('[id$="spngender"]').html("Male");
    }
    else if (gender == "F") {
        $('[id$="spngender"]').html("Female");
    }

    if (languageID == "0") {
        $('[id$="spnprimarylang"]').html("English");
    }
    else if (languageID == "1") {
        $('[id$="spnprimarylang"]').html("Spanish");
    }
    else if (languageID == "2") {
        $('[id$="spnprimarylang"]').html("French");
    }
    else if (languageID == "3") {
        $('[id$="spnprimarylang"]').html("Other");
    }  
    // $('[id$="spnbirthdate"]').html(BirthDate);        

}

function Validatedateexceeding() {
    var txtBirthDate = $('[id$="txtBirthDate"]').val();
    var isvalid = true;

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();

    if (curr_month < 10)
        curr_month = "0" + curr_month;
    if (curr_date < 10)
        curr_date = "0" + curr_date;
    var curr_date_format = curr_month + "/" + curr_date + "/" + curr_year;

    var d1 = new Date(txtBirthDate);
    var d2 = new Date(curr_date_format);
    if (d1 >= d2) {

        isvalid = false;
    }

    if (isvalid) {
        $('[id$="LblRevtxtBirthDate"]').css('display','none');
    }
    else {
        $('[id$="LblRfvtxtBirthDate"]').css('display', 'none');
        $('[id$="LblRevtxtBirthDate"]').css('display', 'block');
    }
    return isvalid;

}

 function ValidatechklstraceSection() {    
       var chklstRaceval = $("[id*=chklstRace] input:checked").next().html();
       if (chklstRaceval == undefined || chklstRaceval == null) {
                      $('[id$="Raceerrormsg"]').css('display', 'block');
                      return false;
            }
       else {
           $('[id$="Raceerrormsg"]').css('display', 'none');
              return true;
       }
   }


function ValidatedemoinfoSection() {

    var birthDate = $('[id$="txtBirthDate"]').val();

    var isbirthDateValid = RequiredFieldValidatorCommon($('[id$="txtBirthDate"]'), birthDate, $('[id$="LblRfvtxtBirthDate"]'));
    if (isbirthDateValid == true) {
        isbirthDateValid = ValidateDateFormat(birthDate);
        if (isbirthDateValid) {
            $('[id$="LblRfvtxtBirthDate"]').css('display', 'none');
        }
        else {
            $('[id$="LblRevtxtBirthDate"]').css('display', 'none');
            $('[id$="LblRfvtxtBirthDate"]').css('display', 'inline');
        }
    }


    return (isbirthDateValid);

}

function UpdateDemographicInfoSection() {
    
    var chklstRaceName = $("[id*=chklstRace] input:checked").next().html();
    var ddlGender = $('[id$="ddlGender"]').val();
    var txtBirthDate = $('[id$="txtBirthDate"]').val(); 
    var txtprimarylang = $('[id$="ddlPrimaryLanguage"]').val();
    var chklstRaceNameValid = ValidatechklstraceSection();
    var demoInfoValid = ValidatedemoinfoSection();
    var isexceedingtoday = Validatedateexceeding();
    if (!demoInfoValid || !isexceedingtoday || !chklstRaceNameValid) {
        return false;
    }

    $.ajax({
        type: 'POST',
        url: '../Faculty/ProfileService.asmx/UpdateDemographicInfo',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{"gender": "' + ddlGender + '","race":"' + chklstRaceName.toString() + '","birthDate":"' + txtBirthDate + '","primaryLanguageID":"' + txtprimarylang+ '"}',

        success: function (responseData) {
            ShowDemographicInfo(chklstRaceName, ddlGender, txtBirthDate, txtprimarylang);
            GetUserinfo('sectionDemographicinfo');
            $("#editdemographicinfo").css('display', 'none');

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on Updating Demographicinfo:' + jqXHR + textStatus + errorThrown);
        }
    });

    return false;

}

function UpdatePreferenceProductUpdateMail() {
    var preference = $('[id$="chkEmail"]').is(':checked');
    $.ajax({
        type: 'POST',
        url: '../Faculty/ProfileService.asmx/UpdatePreferenceProductUpdateMail',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{"preference": ' + preference + '}',

        success: function (responseData) {
            //Nothing to do.

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on Updating Email Preference:' + jqXHR + textStatus + errorThrown);
        }
    });
}

function UpdateInstitutionInfoSection() {

    var ddlInstitution = $('[id$="ddlInstitution"]').val();
    var txtStudentEmpID = $('[id$="txtStudentEmpID"]').val();
    var txtCredentials = $('[id$="txtCredentials"]').val();
    var txtExpectedGradDate = $('[id$="txtExpectedGradDate"]').val();
    var chkNonDegree = $('[id$="chkNonDegree"]').prop("checked");
    var instiInfoValid = ValidateinstitutioninfoSection();
    if (!instiInfoValid) {
        return false;
    }
    $.ajax({
        type: 'POST',
        url: '../Faculty/ProfileService.asmx/UpdateInstitutionInfo',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{"institutionID": "' + ddlInstitution + '","studentID":"' + txtStudentEmpID + '","credentials":"' + txtCredentials + '","isNonDegreeSeeking":"' + chkNonDegree + '","graduationDate":"' + txtExpectedGradDate + '"}',

        success: function (responseData) {
            GetUserinfo('sectionInstitutionInfo');
            $("#editinstitutioninfo").css('display', 'none');

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on Updating UpdateInstitutionInfoSection:' + jqXHR + textStatus + errorThrown);
        }
    });

    return false;
}

function UpdateSecurityquestionsSection() {

    var ddlSecQues1 = $('[id$="ddlSecQues1"]').val();
    var ddlSecQues2 = $('[id$="ddlSecQues2"]').val();
    var ddlSecQues3 = $('[id$="ddlSecQues3"]').val();
    var txtSecAns1 = $('[id$="txtSecAns1"]').val();
    var txtSecAns2 = $('[id$="txtSecAns2"]').val();
    var txtSecAns3 = $('[id$="txtSecAns3"]').val();
    var isSQ1Valid = RequiredFieldValidatorCommon($('[id$="ddlSecQues1"]'), ddlSecQues1, $('[id$="LblRfvDdlSecQues1"]'));
    var isSQ2Valid = RequiredFieldValidatorCommon($('[id$="ddlSecQues2"]'), ddlSecQues2, $('[id$="LblRfvDdlSecQues2"]'));
    var isSQ3Valid = RequiredFieldValidatorCommon($('[id$="ddlSecQues3"]'), ddlSecQues3, $('[id$="LblRfvDdlSecQues3"]'));
    var isSA1Valid = RequiredFieldValidatorCommon($('[id$="txtSecAns1"]'), txtSecAns1, $('[id$="LblRfvTxtSecAns1"]'));
    var isSA2Valid = RequiredFieldValidatorCommon($('[id$="txtSecAns2"]'), txtSecAns2, $('[id$="LblRfvTxtSecAns2"]'));
    var isSA3Valid = RequiredFieldValidatorCommon($('[id$="txtSecAns3"]'), txtSecAns3, $('[id$="LblRfvTxtSecAns3"]'));
    var isUniqueSQValid;
    if ((ddlSecQues1 == ddlSecQues2) || (ddlSecQues2 == ddlSecQues3) || (ddlSecQues1 == ddlSecQues3)) {
        $('[id$="LblValSQError"]').css('display', 'inline');
        isUniqueSQValid = false;
    }
    else {
        $('[id$="LblValSQError"]').css('display', 'none');
        isUniqueSQValid = true;
    }
    if (!(isSQ1Valid && isSQ2Valid && isSQ3Valid && isSA1Valid && isSA2Valid && isSA3Valid && isUniqueSQValid)) {
        return false;
    }
    $.ajax({
        type: 'POST',
        url: '../Faculty/ProfileService.asmx/UpdateSecurityQuestions',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: '{"question1ID": "' + ddlSecQues1 + '","question2ID":"' + ddlSecQues2 + '","question3ID":"' + ddlSecQues3 + '","answer1":"' + txtSecAns1 + '","answer2":"' + txtSecAns2 + '","answer3":"' + txtSecAns3 + '"}',

        success: function (responseData) {
            GetUserinfo('sectionSecurityquestions');
            $("#editsecurityquestions").css('display', 'none');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on pdatesectionSecurityquestions:' + jqXHR + textStatus + errorThrown);
        }
    });
  return false;
}

function Updatesectionpassword() {

    var txtOldPassword = $('[id$="txtOldPassword"]').val();
    var txtNewPassword = $('[id$="txtNewPassword"]').val();
    var txtConfirmNewPassword = $('[id$="txtConfirmNewPassword"]').val();
    var isPasswordsValid = ValidatepasswordSection($('[id$="txtOldPassword"]'), txtOldPassword, $('[id$="txtNewPassword"]'), txtNewPassword, $('[id$="txtConfirmNewPassword"]'), txtConfirmNewPassword);
    if (isPasswordsValid == false) {
        return false;
    }
    $.ajax({
        type: 'POST',
        data: '{"oldPassword": "' + txtOldPassword + '","newPassword":"' + txtNewPassword + '"}',
        url: '../Faculty/ProfileService.asmx/UpdatePassword',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.d.ChangePasswordResult.PasswordChangedSuccessfully == true) {
                GetUserinfo('sectionpassword');
                $("#editpassword").css('display', 'none');
                $("#LblsecurityerrorMessage").css('display', 'none');
                $('#editpassword').find('input:password').val('');
            }
            else if (data.d.ChangePasswordResult.OldPasswordIsValid == false) {
                $("#LblsecurityerrorMessage").show();
                $("#LblsecurityerrorMessage").html(data.d.ChangePasswordResult.OldPasswordExceptionText);
            }
            else {
                $("#LblsecurityerrorMessage").show();
                $("#LblsecurityerrorMessage").html(data.d.ChangePasswordResult.NewPasswordExceptionText);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on updatesectionSecurityquestions:' + jqXHR + textStatus + errorThrown);
        }
    });
    return false;
}

function GetDateFromJson(JSONdate) {

    var data = JSONdate.replace('/Date(', '').replace(')/', ''); /*It picksup the number from  the given string "/Date(0114578966578774556)/" */
    var dates = new Date(parseInt(data));  //Parse and change to Date
    var month = dates.getMonth() + 1;

    var dateDay = dates.getDate();
    var doubleDigitDay = dateDay;

    if (dateDay < 10)
        doubleDigitDay = dateDay;

    var doubleDigitMonth = month;

    if (month < 10)
        doubleDigitMonth = month;

    return doubleDigitMonth + "/" + doubleDigitDay + "/" + dates.getFullYear();    
}

function GetUserinfo(sectionname) {
    $.ajax({
        type: 'GET',
        url: '../Faculty/ProfileService.asmx/GetUserInfo?',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (responseData) {
            switch (sectionname) {
                case 'sectionUserinfo':
                    //setting span values after update
                    $('[id$="spnstreeet"]').html(responseData.d.Street);
                    $('[id$="spnstreeet2"]').html(responseData.d.Street2);
                    $('[id$="spnstreeet3"]').html(responseData.d.Street3);
                    $('[id$="spncity"]').html(responseData.d.City);
                    $('[id$="spnstate"]').html(responseData.d.AtiState);
                    $('[id$="spncountry"]').html(responseData.d.Country);
                    $('[id$="spnzip"]').html(responseData.d.Zip);
                    $('[id$="spnphone"]').html(responseData.d.Phone);

                    //setting editable fields values after update
                    $('[id$="txtAddress1"]').val(responseData.d.Street);
                    $('[id$="txtAddress2"]').val(responseData.d.Street2);
                    $('[id$="txtAddress3"]').val(responseData.d.Street3);
                    $('[id$="txtCity"]').val(responseData.d.City);
                    $('[id$="ddlState"]').val(responseData.d.AtiState).attr("selected", "selected");
                    $('[id$="ddlCountry"]').val(responseData.d.CountryID).attr("selected", "selected");
                    $('[id$="txtZip"]').val(responseData.d.Zip);
                    $('[id$="txtPhone"]').val(responseData.d.Phone);
                    break;

                case 'sectionEmail':
                    $('[id$="lblemail"]').html(responseData.d.EMail);
                    $('[id$="txtEmail"]').val(responseData.d.EMail);
                    break;

                case 'sectionpassword':
                    $('[id$="txtOldPassword"]').val(responseData.d.AtiPassword);
                   

                    break;

                case 'sectionSecurityquestions':
                    //$('[id$="txtSecAns1"]').val();
                    //$('[id$="txtSecAns2"]').val("");
                    //$('[id$="txtSecAns3"]').val("");
                    break;

                case 'sectionInstitutionInfo':
                    $('[id$="spnstudentID"]').html(responseData.d.StudentID);
                    $('[id$="spncredentials"]').html(responseData.d.Credentials);                  

                    if (responseData.d.ExpectedGraduationDate != null) {
                        var expectedgraduationdate = GetDateFromJson(responseData.d.ExpectedGraduationDate);
                         $('[id$="spngraduationdate"]').html(expectedgraduationdate);
                     } else {
                       $('[id$="spngraduationdate"]').html(responseData.d.ExpectedGraduationDate);
                      }
                    $('[id$="spninstitution"]').html(responseData.d.Institution);


                    //setting editable fields values after update
                    $('[id$="ddlInstitution"]').val(responseData.d.InstitutionID).attr("selected", "selected");                    
                    $('[id$="instID"]').val(responseData.d.InstitutionID);                  
                    $('[id$="txtStudentEmpID"]').val(responseData.d.StudentID);
                    $('[id$="txtCredentials"]').val(responseData.d.Credentials);                   
                    ExpectedGraduationDateconverted = GetDateFromJson(responseData.d.ExpectedGraduationDate);                   
                    $('[id$="txtExpectedGradDate"]').val(ExpectedGraduationDateconverted);
                    
                    break;

                case 'sectionDemographicinfo':                  
                    //setting editable fields values after update

                    BirthDate = GetDateFromJson(responseData.d.BirthDate);
                    var gender = GetGendercode(responseData.d.Gender);
                    $('[id$="ddlGender"]').val(gender).attr("selected", "selected");

                    $('[id$="txtBirthDate"]').val(BirthDate);
                    $('[id$="chklstRace"]').val(responseData.d.RaceID).attr("checked", "checked");;
                    $('[id$="ddlPrimaryLanguage"]').val(responseData.d.LanguageID).attr("selected", "selected");                 

                    //$('[id$="spngender"]').html(g);
                    $('[id$="spnbirthdate"]').html(BirthDate);
                    //$('[id$="spnrace"]').html(responseData.d.RaceID);
                    //$('[id$="spnprimarylang"]').html(responseData.d.LanguageID);
                    break;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error on getting ' + sectionname + 'data:' + jqXHR + textStatus + errorThrown);
        }
    });

}



function loadStatesByCountryID(ddlCountry, ddlState) {
    var ddlCountry = $('[id$="' + ddlCountry + '"]');
    var ddlState = $('[id$="' + ddlState + '"]');
   // var hdnSelectedClass = $('[id$="' + hdnSelectedClassID + '"]');
    var selectedCountryID = $(ddlCountry).find("option:selected").val();
    if (selectedCountryID > 0) {
        ddlState.empty();
        $.ajax({
            type: 'GET',
            url: '../Faculty/ProfileService.asmx/GetStates?Countryid=' + selectedCountryID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                ddlState.empty();
                $.each(responseData.d, function (data, item) {
                    ddlState.append('<option value=' + item.Key + '>' + item.Value + '</option>');
                });
                //if (hdnSelectedClass.val()) {
                //    ddlClasses.val(hdnSelectedClass.val());
                //}
                //ddlClasses.removeAttr('disabled');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error on loading States:' + jqXHR + textStatus + errorThrown);
            }
        });
    }
    else {
        ddlState.empty();
        ddlState.append('<option value="-1">Selectstate</option>');
        ddlState.attr('disabled', 'true');
    }
}


function ShowHelpMessage() {
    ValidateMsg('Use the ID field to enter an ID to gain access to an assessment, tutorial or course.');
    return false;
}

window.ReloadPracticeAssessments = function () {
    try {
        if ($('[id$="btnLoadData"]') != null && $('[id$="btnLoadData"]') != undefined) {
            $('[id$="btnLoadData"]').click();
    }
    else {
            window.location.reload();
        }
    } catch (e) {
        window.location.reload();
    }
}
function ShowPopupAddCourseSuccessfully(courseName) {
    $('#spnSuccessCourseName').html(courseName);
    $find("mpeCourseSuccessBehaviour").show();
}
function ShowValidateProctorAssessmentErrorMessage(errorCode, errorMessage) {
    if (errorCode == -9 || errorCode == -1 || errorCode == -2 || errorCode == -3 || errorCode == -4 || errorCode == 1 || errorCode == 2 || errorCode == -100) {
        $('[id$="lblErrorMsgId"]').html(errorMessage);
    }
    else { //-8, 4, 5:
        $('[id$="lblErrorMsgPass"]').html(errorMessage);
    }
}

function ShowValidateProctorBackToMonitorErrorMessage(errorCode, errorMessage) {
    if (errorCode == -9 || errorCode == -1 || errorCode == -2 || errorCode == -3 || errorCode == -4 || errorCode == 1 || errorCode == 2 || errorCode == -100) {
        $('[id$="lblErrorMsg"]').html(errorMessage);
    }
    else { //-8, 4, 5:
        $('[id$="lblPwdMsg"]').html(errorMessage);
    }
}

function ValidateProctorAssessment() {
    $('[id$="lblErrorMsgId"]').html('');
    $('[id$="lblErrorMsgPass"]').html('');
    var batchID = $('[id$="txtId"]').val();
    var password = $('[id$="txtPassword"]').val();
    if (password == null || password == undefined) {
        password = '';
    }
    if (batchID.trim() == '') {
        $('[id$="lblErrorMsgId"]').html('Please enter value for the ID Field.');
        return false;
    }
    if (!$.isNumeric(batchID) && batchID != Math.floor(batchID)) {
        $('[id$="lblErrorMsgId"]').html('Enter a numeric value for the ID Field.');
        return false;
    }
    if (batchID > 999999999) {
        $('[id$="lblErrorMsgId"]').html('The information entered is not correct, Please Change and resubmit.');
        return false;
    }
    if (batchID.trim() != '') {
        $.ajax({
            type: 'POST',
            data: '{"batchID":' + batchID + ',"password":"' + password + '"}',
            url: '../Faculty/ProctoredAssessmentService.asmx/ValidateAssessment',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                //console.log(response.d);
                var result = response.d.split(":");
                var errorCode = result[0];
                var errorMessage = result[1];
                if (errorCode == 0 || errorCode == 3) {//valid batch id & password
                    //console.log('errorCode == 0 || errorCode == 3');
                    $('.txtIDParent').val(batchID);
                    $('.txtPasswordParent').val(password);
                    if ($('.proctorassessmentsubmit') != null && $('.proctorassessmentsubmit') != undefined) {
                        //console.log('proctorassessmentsubmit');
                        $('.proctorassessmentsubmit').click();
                    }
                }
                else {
                    ShowValidateProctorAssessmentErrorMessage(errorCode, errorMessage);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('jqXHR,textStatus,errorThrown', jqXHR, textStatus, errorThrown);
            }
        });
	}
    return false;
}

function ValidateProctorBackToMonitor() {
    $('[id$="lblErrorMsg"]').html('');
    $('[id$="lblPwdMsg"]').html('');
    var batchID = $('[id$="txtId"]').val();
    var password = $('[id$="txtPassword"]').val();
    if (password == null || password == undefined) {
        password = '';
    }
    if (batchID.trim() == '') {
        $('[id$="lblErrorMsg"]').html('Please enter value for the ID Field.');
        return false;
    }
    if (!$.isNumeric(batchID) && batchID != Math.floor(batchID)) {
        $('[id$="lblErrorMsg"]').html('Enter a numeric value for the ID Field.');
        return false;
    }
    if (batchID > 999999999) {
        $('[id$="lblErrorMsg"]').html('The information entered is not correct, Please Change and resubmit.');
        return false;
    }
    if (batchID.trim() != '') {
        $.ajax({
            type: 'POST',
            data: '{"batchID":' + batchID + ',"password":"' + password + '"}',
            url: '../Faculty/ProctoredAssessmentService.asmx/ValidateAssessment',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                //console.log(response.d);
                var result = response.d.split(":");
                var errorCode = result[0];
                var errorMessage = result[1];
                if (errorCode == 0 || errorCode == 3) {//valid batch id & password
                    //console.log('errorCode == 0 || errorCode == 3');
                    $('.txtIDParent').val(batchID);
                    $('.txtPasswordParent').val(password);
                    if ($('.proctorassessmentsubmit') != null && $('.proctorassessmentsubmit') != undefined) {
                        //console.log('btnSubmit_Click');
                        $('.proctorassessmentsubmit').click();
                    }
                }
                else {
                    ShowValidateProctorBackToMonitorErrorMessage(errorCode, errorMessage);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('jqXHR,textStatus,errorThrown', jqXHR, textStatus, errorThrown);
            }
        });
    }
    return false;
}


function ShowTechnicalRequirement() {
    $find('mpeTechnicalRequirementBehaviour').show();
}
function ShowTechnicalRequirement() {
    $find('mpeTechnicalRequirementBehaviour').show();

}
function displayIfPreviewAlreadyThr(previewData)
{
    $("[id$='hdnPreviewData']").val(previewData);
    if (!ContinueCheckUnsavedContent(this))
    { return false; }
    else if($("[id$='hdnTutorialPreviewAlreadyOpen']").val()=="true"){
        ConfirmPreviewMsg("You have already a tutorial open for preview. If this tutorial is opened, the earlier one will close.");
        return false;
    }
    else {
        assessWindow = window.open("", 'Assessment');
        assessWindow.close();
        $("[id$='previewOk']")[0].click();
    }
    
}
function ConfirmPreviewMsg(Validatetext) {
    var modalPopupBehavior = $find("mpConfirmationPreviewBehavior");
    var lblError = $("[id$='lblTutPreviewConfirmationMessage']");
    lblError[0].innerHTML = Validatetext;
    modalPopupBehavior.show();
    return false;
}

function continuePreviewProcess() {
    assessWindow = window.open("", 'Assessment');
    assessWindow.close();
    $("[id$='previewOk']")[0].click();
    return false;
}

function ClosePreviewModal(e)
{
    e = e || window.event;
    if(window.opener != null)
    {
            window.opener.$("[id$='hdnPreviewData']").val("");
            window.opener.$("[id$='hdnTutorialPreviewAlreadyOpen']").val("false");
    }
    else 
    {
        window.location = document.referrer;
        e = e || window.event;
        e.preventDefault();
    }
}
function CloseWindow()
{
    window.close();
}
// To check if any validation controls are visible.
function IsReportWzSelectStudAssessmentValid() {
    if ($('[id$="regvdtFrom"]')) {
        if ($('[id$="regvdtFrom"]').css('display') != 'none') {
            return false;
        }
    }
    if ($('[id$="cmbvAssessmentFromTo"]')) {
        if ($('[id$="cmbvAssessmentFromTo"]').css('display') != 'none') {
            return false;
        }
    }
    if ($('[id$="RegularExpressionValidator1"]')) {
        if ($('[id$="RegularExpressionValidator1"]').css('display') != 'none') {
            return false;
        }
    }
    if ($('[id$="rqvAssessmentFromDate"]')) {
        if ($('[id$="rqvAssessmentFromDate"]').css('display') != 'none') {
            return false;
        }
    }
    if ($('[id$="rqvcmbAssessmentToDate"]')) {
        if ($('[id$="rqvcmbAssessmentToDate"]').css('display') != 'none') {
            return false;
        }
    }
    return true;
}
//To set active tab for Proctored/Practice grid.
function SetActiveTabForProctoredPracticeGrids(activeTabID, inactiveTabID) {
    //console.log('SetActiveTabForProctoredPracticeGrids');
    $('[id$="' + inactiveTabID + '"]').removeClass('selected');
    $('[id$="' + activeTabID + '"]').addClass('selected');
}

//Closes Benchmark popup.
function CloseBechmarkPopup() {
    $('*').popover('destroy');
    return true;
}

/////////*Forgot Password Section Starts***********//////////////////

function ForgotUserNamefunction() {
    $('#ForgotUsernameDialog').show();
    $('#ForgotPasswordDialog').hide();
    //return false;
}
function ForgotPasswordfunction() {
    $('#ForgotPasswordDialog').show();
    $('#ForgotUsernameDialog').hide();
   // return false;
}
function ForgotPasswordNext(actionstep) {
    if (studentPortalServiceUrl == null || studentPortalServiceUrl == undefined) {
        alert('studentPortalServiceUrl is not available');
    }
    switch (actionstep) {
        case "forgotPasswordAction1":
            var username = $("#forgotPasswordUsernameUser").val();
            if (username === "") {
                $("#securityerrorMessage").show();
                $("#securityerrorMessage").html('Username must be provided.');
                return;
            }
            if ($("#securityChoice").is(':checked')) {
                $.ajax({
                    type: 'GET',
                    data: 'Username=' + username,
                    url: studentPortalServiceUrl + '/SecurityQuestions',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                        $("#sign_in_step1_password").hide();
                        $("#sign_in_step2_password").show();
                        $("#SecQuestion1").html(response.SecurityQuestionsResult[0].QuestionText);
                        $("#SecQuestion2").html(response.SecurityQuestionsResult[1].QuestionText);
                        $("#SecQuestion3").html(response.SecurityQuestionsResult[2].QuestionText);
                        $("#SecQuestionID1").val(response.SecurityQuestionsResult[0].SecurityQuestionID);
                        $("#SecQuestionID2").val(response.SecurityQuestionsResult[1].SecurityQuestionID);
                        $("#SecQuestionID3").val(response.SecurityQuestionsResult[2].SecurityQuestionID);
                    },
                    error: function (errorThrown) {
                        $("#securityerrorMessage").html(errorThrown.statusText);
                        $("#securityerrorMessage").show();
                        return;
                    }
                });
            }
            else {
                $.ajax({
                    type: 'POST',
                    data: '{"Username" : "' + username + '","EmailType":"' + 1 + '"}',
                    url: studentPortalServiceUrl + '/SendMail',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                        $("#sign_in_step1_password").hide();
                        $("#sign_in_step5_password").show();
                        var span = document.getElementById('lblMessagePassword');
                        span.innerHTML = 'An email has been sent to <strong>' + response + '</strong> with instructions to reset your password.';
                    },
                    error: function (errorThrown) {
                            $("#securityerrorMessage").html(errorThrown.statusText);
                            $("#securityerrorMessage").show();
                            return;
                    }
                });
            }


            break;
        case "forgotPasswordAction2":

            var username = $("#forgotPasswordUsernameUser").val();
            var question1 = $("#SecQuestion1").val();
            var question2 = $("#SecQuestion2").val();
            var question3 = $("#SecQuestion3").val();
            var SecurityQuestionid1 = $("#SecQuestionID1").val();
            var SecurityQuestionid2 = $("#SecQuestionID2").val();
            var SecurityQuestionid3 = $("#SecQuestionID3").val();

            var SecQuestion1Answer = $("#SecQuestion1Answer").val();
            var SecQuestion2Answer = $("#SecQuestion2Answer").val();
            var SecQuestion3Answer = $("#SecQuestion3Answer").val();

            if (SecQuestion1Answer == "") {
                $("#validatequestansmatcherror").show();
                $("#securityanswererrorMessage").html('Please provide a valid Security Question answer');

                return;
            }
            if (SecQuestion2Answer == "") {
                $("#validatequestansmatcherror").show();
                $("#securityanswererrorMessage").html('Please provide a valid Security Question answer.');

                return;
            }
            if (SecQuestion3Answer == "") {
                $("#validatequestansmatcherror").show();
                $("#securityanswererrorMessage").html('Please provide a valid Security Question answer.');

                return;
            }

            var jsondata = {
                "Username": username,
                "SecurityQuestionAnswers": [{
                    "SecurityQuestionID": SecurityQuestionid1,
                    "Question": question1,
                    "Answer": SecQuestion1Answer
                },
                {
                    "SecurityQuestionID": SecurityQuestionid2,
                    "Question": question2,
                    "Answer": SecQuestion2Answer
                },
                {
                    "SecurityQuestionID": SecurityQuestionid3,
                    "Question": question3,
                    "Answer": SecQuestion3Answer
                }]
            };
            //,{ "SecurityQuestionID": SecurityQuestionid2, "Question": question2, "Answer": SecQuestion2Answer }, { "SecurityQuestionID": SecurityQuestionid3, "Question": question3, "Answer": SecQuestion3Answer }

            $("#securityanswererrorMessage").html('');
            $("#validatequestansmatcherror").hide();
            $.ajax({
                type: 'POST',
                data: JSON.stringify(jsondata),
                url: studentPortalServiceUrl + '/ValidateSecurityQuestionAnswers',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function (response) {

                    if (response.ValidateSecurityQuestionAnswersResult == true) {

                        $("#sign_in_step2_password").hide();
                        $("#sign_in_step3_password").show();
                    }
                    else {
                        $("#validatequestansmatcherror").show();
                        $("#securityanswererrorMessage").html('Those answers do not match our records.');
                        //LogExceptionMessage(response);

                    }
                },
                error: function (errorThrown) {
                    console.log(errorThrown);

                }
            });


            break;

        case "forgotPasswordAction3":

            var username = $("#forgotPasswordUsernameUser").val();
            var newpassword = $("#forgotPasswordNewPassword").val();
            var confirmnewpassword = $("#forgotPasswordNewPasswordConfirmation").val();
            var question1 = $("#SecQuestion1").val();
            var question2 = $("#SecQuestion2").val();
            var question3 = $("#SecQuestion3").val();
            var SecurityQuestionid1 = $("#SecQuestionID1").val();
            var SecurityQuestionid2 = $("#SecQuestionID2").val();
            var SecurityQuestionid3 = $("#SecQuestionID3").val();

            var SecQuestion1Answer = $("#SecQuestion1Answer").val();
            var SecQuestion2Answer = $("#SecQuestion2Answer").val();
            var SecQuestion3Answer = $("#SecQuestion3Answer").val();
            $("#IsPasswordErrorVisible").hide();

            if (newpassword === '' || confirmnewpassword === '') {
                $("#ForgotPasswordNewPasswordErrordiv").show();
                if (newpassword == "" && confirmnewpassword == "") {
                    $("#ForgotPasswordNewPasswordError").html("Please Enter a Valid value for Passswords Field");
                    return;
                } else if (confirmnewpassword == "") {
                    $("#ForgotPasswordNewPasswordError").html("Please Enter a Valid NewConfirmPasssword")
                    return;
                } else if (newpassword == "") {
                    $("#ForgotPasswordNewPasswordError").html("Please Enter a Valid NewPasssword")
                    return;
                }
            }
            if (newpassword != confirmnewpassword) {
                $("#ForgotPasswordNewPasswordErrordiv").hide();
                $("#ForgotPasswordNewPasswordConfirmationErrordiv").show();
                $("#ForgotPasswordNewPasswordConfirmationError").html("Passwords are not Matching")
                return;
            }

            var jsondata = {
                "Username": encodeURIComponent(username),
                "NewPassword": encodeURIComponent(newpassword),
                "SecurityQuestionAnswers": [{
                    "SecurityQuestionID": SecurityQuestionid1,
                    "Question": question1,
                    "Answer": SecQuestion1Answer
                },
                {
                    "SecurityQuestionID": SecurityQuestionid2,
                    "Question": question2,
                    "Answer": SecQuestion2Answer
                },
                {
                    "SecurityQuestionID": SecurityQuestionid3,
                    "Question": question3,
                    "Answer": SecQuestion3Answer
                }]
            };

            $.ajax({
                type: 'POST',
                data: JSON.stringify(jsondata),
                url: studentPortalServiceUrl + '/SetNewPassword',
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    if (response.SetNewPasswordResult.PasswordChangedSuccessfully) {
                        $.ajax({
                            type: 'POST',
                            data: JSON.stringify(jsondata),
                            url: studentPortalServiceUrl + '/ResetAccount',
                            contentType: 'application/json; charset=utf-8',
                            success: function (response) {
                                if (response.ResetAccountResult == true) {
                                    $("#sign_in_step3_password").hide();
                                    $("#sign_in_step4_password").show();
                                }
                                else {
                                    $("#IsPasswordErrorVisible").show();
                                    $("#forgotUsernamePasswordErrorMessage").html('The system was unable to change your password.');
                                    return;
                                }
                            },
                            error: function (errorThrown) {
                                $("#ForgotPasswordNewPasswordErrordiv").hide();
                                $("#ForgotPasswordNewPasswordConfirmationErrordiv").hide();
                                $("#IsPasswordErrorVisible").show();
                                $("#forgotUsernamePasswordErrorMessage").html(errorThrown.statusText);
                                return;

                            }
                        });

                    }
                    else {

                        if (response.SetNewPasswordResult.NewPasswordExceptionText != '') {
                            $("#IsPasswordErrorVisible").show();
                            $("#forgotUsernamePasswordErrorMessage").html(response.SetNewPasswordResult.NewPasswordExceptionText);
                            return;
                        }
                        else if (response.SetNewPasswordResult.OldPasswordExceptionText != '') {
                            $("#IsPasswordErrorVisible").show();
                            $("#forgotUsernamePasswordErrorMessage").html(response.SetNewPasswordResult.OldPasswordExceptionText);
                            return;
                        }
                        else {
                            $("#IsPasswordErrorVisible").show();
                            $("#forgotUsernamePasswordErrorMessage").html('The system was unable to change your password.');
                            return;
                        }
                    }

                },
                error: function (errorThrown) {
                    $("#ForgotPasswordNewPasswordErrordiv").hide();
                    $("#ForgotPasswordNewPasswordConfirmationErrordiv").hide();
                    $("#IsPasswordErrorVisible").show();
                    $("#forgotUsernamePasswordErrorMessage").html(errorThrown.statusText);
                    return;

                }
            });


            break;
            //return false;
    }
}
    function ReactivateInactiveUser(actionstep) {
        if (studentPortalServiceUrl == null || studentPortalServiceUrl == undefined) {
            alert('studentPortalServiceUrl is not available');
        }
        switch (actionstep) {
            case "forgotPasswordAction1":
                var username = $("#forgotPasswordUsernameUser").val();
                if (username === "") {
                    $("#securityerrorMessage").show();
                    $("#securityerrorMessage").html('Username must be provided.');
                    return;
                }
                if ($("#securityChoice").is(':checked')) {
                    $.ajax({
                        type: 'GET',
                        data: 'Username=' + username,
                        url: studentPortalServiceUrl + '/SecurityQuestions',
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        success: function (response) {
                            $("#sign_in_step1_password").hide();
                            $("#sign_in_step2_password").show();
                            $("#SecQuestion1").html(response.SecurityQuestionsResult[0].QuestionText);
                            $("#SecQuestion2").html(response.SecurityQuestionsResult[1].QuestionText);
                            $("#SecQuestion3").html(response.SecurityQuestionsResult[2].QuestionText);
                            $("#SecQuestionID1").val(response.SecurityQuestionsResult[0].SecurityQuestionID);
                            $("#SecQuestionID2").val(response.SecurityQuestionsResult[1].SecurityQuestionID);
                            $("#SecQuestionID3").val(response.SecurityQuestionsResult[2].SecurityQuestionID);
                        },
                        error: function (errorThrown) {
                            $("#securityerrorMessage").html(errorThrown.statusText);
                            $("#securityerrorMessage").show();
                            return;
                        }
                    });
                }
                else {
                    $.ajax({
                        type: 'POST',
                        data: '{"Username" : "' + username + '","EmailType":"' + 2 + '"}',
                        url: studentPortalServiceUrl + '/SendMail',
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        success: function (response) {
                            $("#sign_in_step1_password").hide();
                            $("#sign_in_step5_password").show();
                            var span = document.getElementById('lblMessagePassword');
                            span.innerHTML = 'An email has been sent to <strong>' + response + '</strong> with instructions to reactivate your account.';
                        },
                        error: function (errorThrown) {
                            $("#securityerrorMessage").html(errorThrown.statusText);
                            $("#securityerrorMessage").show();
                            return;
                        }
                    });
                }


                break;
            case "forgotPasswordAction2":

                var username = $("#forgotPasswordUsernameUser").val();
                var question1 = $("#SecQuestion1").val();
                var question2 = $("#SecQuestion2").val();
                var question3 = $("#SecQuestion3").val();
                var SecurityQuestionid1 = $("#SecQuestionID1").val();
                var SecurityQuestionid2 = $("#SecQuestionID2").val();
                var SecurityQuestionid3 = $("#SecQuestionID3").val();

                var SecQuestion1Answer = $("#SecQuestion1Answer").val();
                var SecQuestion2Answer = $("#SecQuestion2Answer").val();
                var SecQuestion3Answer = $("#SecQuestion3Answer").val();

                if (SecQuestion1Answer == "") {
                    $("#validatequestansmatcherror").show();
                    $("#securityanswererrorMessage").html('Please provide a valid Security Question answer');

                    return;
                }
                if (SecQuestion2Answer == "") {
                    $("#validatequestansmatcherror").show();
                    $("#securityanswererrorMessage").html('Please provide a valid Security Question answer.');

                    return;
                }
                if (SecQuestion3Answer == "") {
                    $("#validatequestansmatcherror").show();
                    $("#securityanswererrorMessage").html('Please provide a valid Security Question answer.');

                    return;
                }

                var jsondata = {
                    "Username": username,
                    "SecurityQuestionAnswers": [{
                        "SecurityQuestionID": SecurityQuestionid1,
                        "Question": question1,
                        "Answer": SecQuestion1Answer
                    },
                    {
                        "SecurityQuestionID": SecurityQuestionid2,
                        "Question": question2,
                        "Answer": SecQuestion2Answer
                    },
                    {
                        "SecurityQuestionID": SecurityQuestionid3,
                        "Question": question3,
                        "Answer": SecQuestion3Answer
                    }]
                };
                //,{ "SecurityQuestionID": SecurityQuestionid2, "Question": question2, "Answer": SecQuestion2Answer }, { "SecurityQuestionID": SecurityQuestionid3, "Question": question3, "Answer": SecQuestion3Answer }

                $("#securityanswererrorMessage").html('');
                $("#validatequestansmatcherror").hide();
                $.ajax({
                    type: 'POST',
                    data: JSON.stringify(jsondata),
                    url: studentPortalServiceUrl + '/ValidateSecurityQuestionAnswers',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {

                        if (response.ValidateSecurityQuestionAnswersResult == true) {

                            $("#sign_in_step2_password").hide();
                            $("#sign_in_step3_password").show();
                        }
                        else {
                            $("#validatequestansmatcherror").show();
                            $("#securityanswererrorMessage").html('Those answers do not match our records.');
                            //LogExceptionMessage(response);

                        }
                    },
                    error: function (errorThrown) {
                        console.log(errorThrown);

                    }
                });


                break;

            case "forgotPasswordAction3":

                var username = $("#forgotPasswordUsernameUser").val();
                var newpassword = $("#forgotPasswordNewPassword").val();
                var confirmnewpassword = $("#forgotPasswordNewPasswordConfirmation").val();
                var question1 = $("#SecQuestion1").val();
                var question2 = $("#SecQuestion2").val();
                var question3 = $("#SecQuestion3").val();
                var SecurityQuestionid1 = $("#SecQuestionID1").val();
                var SecurityQuestionid2 = $("#SecQuestionID2").val();
                var SecurityQuestionid3 = $("#SecQuestionID3").val();

                var SecQuestion1Answer = $("#SecQuestion1Answer").val();
                var SecQuestion2Answer = $("#SecQuestion2Answer").val();
                var SecQuestion3Answer = $("#SecQuestion3Answer").val();
                $("#IsPasswordErrorVisible").hide();

                if (newpassword === '' || confirmnewpassword === '') {
                    $("#ForgotPasswordNewPasswordErrordiv").show();
                    if (newpassword == "" && confirmnewpassword == "") {
                        $("#ForgotPasswordNewPasswordError").html("Please Enter a Valid value for Passswords Field");
                        return;
                    } else if (confirmnewpassword == "") {
                        $("#ForgotPasswordNewPasswordError").html("Please Enter a Valid NewConfirmPasssword")
                        return;
                    } else if (newpassword == "") {
                        $("#ForgotPasswordNewPasswordError").html("Please Enter a Valid NewPasssword")
                        return;
                    }
                }
                if (newpassword != confirmnewpassword) {
                    $("#ForgotPasswordNewPasswordErrordiv").hide();
                    $("#ForgotPasswordNewPasswordConfirmationErrordiv").show();
                    $("#ForgotPasswordNewPasswordConfirmationError").html("Passwords are not Matching")
                    return;
                }

                var jsondata = {
                    "Username": encodeURIComponent(username),
                    "NewPassword": encodeURIComponent(newpassword),
                    "SecurityQuestionAnswers": [{
                        "SecurityQuestionID": SecurityQuestionid1,
                        "Question": question1,
                        "Answer": SecQuestion1Answer
                    },
                    {
                        "SecurityQuestionID": SecurityQuestionid2,
                        "Question": question2,
                        "Answer": SecQuestion2Answer
                    },
                    {
                        "SecurityQuestionID": SecurityQuestionid3,
                        "Question": question3,
                        "Answer": SecQuestion3Answer
                    }]
                };

                $.ajax({
                    type: 'POST',
                    data: JSON.stringify(jsondata),
                    url: studentPortalServiceUrl + '/SetNewPassword',
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                        if (response.SetNewPasswordResult.PasswordChangedSuccessfully) {
                            $.ajax({
                                type: 'POST',
                                data: JSON.stringify(jsondata),
                                url: studentPortalServiceUrl + '/ResetAccount',
                                contentType: 'application/json; charset=utf-8',
                                success: function (response) {
                                    if (response.ResetAccountResult == true) {
                                        $("#sign_in_step3_password").hide();
                                        $("#sign_in_step4_password").show();
                                    }
                                    else {
                                        $("#IsPasswordErrorVisible").show();
                                        $("#forgotUsernamePasswordErrorMessage").html('The system was unable to change your password.');
                                        return;
                                    }
                                },
                                error: function (errorThrown) {
                                    $("#ForgotPasswordNewPasswordErrordiv").hide();
                                    $("#ForgotPasswordNewPasswordConfirmationErrordiv").hide();
                                    $("#IsPasswordErrorVisible").show();
                                    $("#forgotUsernamePasswordErrorMessage").html(errorThrown.statusText);
                                    return;

                                }
                            });
                        }
                        else {

                            if (response.SetNewPasswordResult.NewPasswordExceptionText != '') {
                                $("#IsPasswordErrorVisible").show();
                                $("#forgotUsernamePasswordErrorMessage").html(response.SetNewPasswordResult.NewPasswordExceptionText);
                                return;
                            }
                            else if (response.SetNewPasswordResult.OldPasswordExceptionText != '') {
                                $("#IsPasswordErrorVisible").show();
                                $("#forgotUsernamePasswordErrorMessage").html(response.SetNewPasswordResult.OldPasswordExceptionText);
                                return;
                            }
                            else {
                                $("#IsPasswordErrorVisible").show();
                                $("#forgotUsernamePasswordErrorMessage").html('The system was unable to change your password.');
                                return;
                            }
                        }

                    },
                    error: function (errorThrown) {
                        $("#ForgotPasswordNewPasswordErrordiv").hide();
                        $("#ForgotPasswordNewPasswordConfirmationErrordiv").hide();
                        $("#IsPasswordErrorVisible").show();
                        $("#forgotUsernamePasswordErrorMessage").html(errorThrown.statusText);
                        return;

                    }
                });


                break;
                //return false;
        }


    function ActivateUser(userName, newPassword, successCallBack) {
        $.ajax({
            type: 'POST',
            data: '{"UserName" : "' + userName + '","NewPassword":"' + newPassword + '"}',
            url: 'Login_Step1.aspx/ActivateUserIfInactive',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                if (successCallBack) {
                    successCallBack();
                }
            },
            error: function (errorThrown) {
                try {
                    console.log(errorThrown);
                } catch (e) {
                    alert(errorThrown);
                }

            }
        });
    }



}
function HideForgotPasswordDialog() {
    $("#ForgotUsernameDialog").hide();
    $("#ForgotPasswordDialog").hide();
    window.location.href = '../General/Login_ForcedLogin.aspx';
}

function ForgotUsernameNext(actionstep) {
    if (studentPortalServiceUrl == null || studentPortalServiceUrl == undefined) {
        alert('studentPortalServiceUrl is not available');
    }

    switch (actionstep) {
        case "UsernameAction1":
            var forgotemailaddress = $("#forgotUsernameEmailaddress").val();
            if (forgotemailaddress === "") {                
                $("#emailerrorMessage").show();
                $("#emailerrorMessage").html('Valid Email Address must be provided.');
                return;
            }
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filter.test(forgotemailaddress)) {
                $("#emailerrorMessage").show();
                $("#emailerrorMessage").html('Email provided is not valid..');
                return false;
            }
            var jsondata = {
                "Email": forgotemailaddress
            };


                        $.ajax({
                            type: 'POST',
                            data: JSON.stringify(jsondata),
                            url: studentPortalServiceUrl + '/RetrieveUsername',
                            dataType: 'json',
                            contentType: 'application/json; charset=utf-8',
                            success: function (response) {

                                if (response.status == 404) {
                                    $("#emailerrorMessage").show();
                                    $("#emailerrorMessage").html('Email must be provided.');
                                    return;
                                }
                                else if (response.status == 400) {
                                    $("#emailerrorMessage").show();
                                    $("#emailerrorMessage").html("Email provided is not valid.");
                                    return;
                                }
                                else if (response.status == 500) {
                                    $("#emailerrorMessage").show();
                                    $("#emailerrorMessage").html("Internal Server Error.");
                                    return;
                                }
                                $("#sign_in_step_username").hide();
                                $("#sign_in_step1_username").show();
                                //HideForgotPasswordDialog();

                            },
                            error: function (errorThrown) {

                                if (errorThrown.status == 404) {
                                    $("#emailerrorMessage").show();
                                    $("#emailerrorMessage").html('Email must be provided.');
                                    return;
                                }
                                else if (errorThrown.status == 400) {
                                    $("#emailerrorMessage").show();
                                    $("#emailerrorMessage").html("Email provided is not valid.");
                                    return;
                                }
                                else if (errorThrown.status == 500) {
                                    $("#emailerrorMessage").show();
                                    $("#emailerrorMessage").html("Internal Server Error.");
                                    return;
                                }

                            }
                        });
              

            break;

    }

}



/////////*Forgot Password Section Ends***********//////////////////

