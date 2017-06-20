function LoadFrame() {
    var frame1 = document.getElementById('frame1');

    frame1.src = '../Webform1.aspx';
}

function imgSave_ClientClick(control, msg) 
{
    var txtValue = document.getElementById(control);
    var reg = new RegExp("^[0-9]+[\\.]?[0-9]?$"); 
    if (txtValue.value != "") 
    {
        if (reg.test(txtValue.value)) 
        {
            return true;
        }
        else 
        {
            ValidateMsg(msg);
            txtValue.value = "";
            return false;
        }
    }
    else
    {
        return false;
    }
}

function btnLogin_ClientClick(control) {
    var txtValue = document.getElementById(control);
    var reg = new RegExp("</?(\\w?|\\w+)(\\s?|\\s+)[^>]*>?");
    if (txtValue.value != "") {
        if (reg.test(txtValue.value))
        {
            //ValidateMsg(msg);
            txtValue.value = "";
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}

var myWindow;

function openNewWindowInCenter(url) {
    var width = 600;
    var height = 600;
    var left = parseInt((screen.availWidth / 2) - (width / 2));
    var top = parseInt((screen.availHeight / 2) - (height / 2));
    //var windowFeatures = "width=" + width + ",height=" + height + ",status=no,scrollbars=no,toolbar=no,menubar=no,resizable=no,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    var windowFeatures = "width=" + width + ",height=" + height + ",status=yes,scrollbars=no,toolbar=no,menubar=no,resizable=no,location=no,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    myWindow = window.open(url, "subWind", windowFeatures);

}

function ShowWindowInFullScreen(URL) {
    var params = 'top=0,left=0,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,modal=yes';
    params += ',width=' + screen.width;
    params += ',height=' + screen.height;
    params += ',fullscreen=yes';
    var newwin = window.open(URL, "ATIAcademy", params);
    if (!newwin) {
        ValidateMsg("Please select OK to go to ATI Academy");
        $get("ctl00_btnOK").onclick = function() { ShowWindowInFullScreen(URL); HideError(); return false; };
        return;
    }
    else {
        $get("ctl00_btnOK").onclick = function() { HideError(); return false };
    }
    if (window.focus) {
        newwin.focus();
    }
}