function signInGoMouseOver(event, sender) {
    sender.className = "signOnForm-go-hover";
}
function signInGoMouseOut(event, sender) {
    sender.className = "signOnForm-go";
}
function searchBarGoMouseOver(event, sender) {
    sender.className = "sf_searchSubmit-hover";
}
function searchBarGoMouseOut(event, sender) {
    sender.className = "sf_searchSubmit";
}
function navItemMouseOver(event, sender) {    
    var index = 0;
    for (var i = 0; i < sender.childNodes.length; i++) 
    {
        var childNode = sender.childNodes[i];    
        var tagName = childNode.tagName != null ? childNode.tagName.toLowerCase() : "";       
        if (tagName != "img") continue;        
        if (index++ == 0)
            sender.childNodes[i].className = "nav-item-left-hover";            
        else
            sender.childNodes[i].className = "nav-item-right-hover";                
    }
}
function navItemMouseOut(event, sender) {
    var index = 0;
    for (var i = 0; i < sender.childNodes.length; i++) 
    {
        var childNode = sender.childNodes[i];    
        var tagName = childNode.tagName != null ? childNode.tagName.toLowerCase() : "";       
        if (tagName != "img") continue;        
        if (index++ == 0)
            sender.childNodes[i].className = "nav-item-left";            
        else
            sender.childNodes[i].className = "nav-item-right";                
    }
}
function signOnNavStaticClick(event, sender) {        
    var expand = document.getElementById("signOnNav-expand");
    var collapse = document.getElementById("signOnNav-collapse");
    var signOnForm = document.getElementById("signOnForm");    
    if (expand == null) return;
    if (collapse == null) return;
    if (signOnForm == null) return;    
    var expandIt = expand.style.display == "none";        
    if (expandIt) {
        expand.style.display = "";
        collapse.style.display = "none";        
        signOnForm.style.position = "static";        
        signOnForm.style.display = "";
    }
    else {
        expand.style.display = "none";
        collapse.style.display = "";
        signOnForm.style.display = "none";
    }            
}
function signOnNavDynamicClick(event, sender) {
    var expand = document.getElementById("signOnNav-expand");
    var collapse = document.getElementById("signOnNav-collapse");
    var signOnForm = document.getElementById("signOnForm");    
    var signOnNav = document.getElementById("signOnNav");
    if (expand == null) return;
    if (collapse == null) return;
    if (signOnForm == null) return;    
    if (signOnNav == null) return;    
    var expandIt = expand.style.display == "none";    
    if (expandIt) {
        expand.style.display = "";
        collapse.style.display = "none";
        signOnForm.style.position = "absolute";   
        var pos = getElementAbsolutePos(signOnNav);        
        if (pos.x == 0) return;
        if (pos.y == 0) return;
        signOnForm.style.left = (pos.x) + "px";
        signOnForm.style.top = (pos.y + 39) + "px";
        signOnForm.style.display = "";
    }
    else {
        expand.style.display = "none";
        collapse.style.display = "";
        signOnForm.style.display = "none";
    }
}
function passwordKeyPress(event, action) {
    if(event.keyCode == 13) {    
        submitSignOnForm(action);            
        return false;
    }
    return true;
}
function userIdKeyPress(event, action) {
    if(event.keyCode == 13) {    
        submitSignOnForm(action);            
        return false;
    }
    return true;
}
function submitSignOnForm(action) {
    var previousAction = null;
    if (document.forms.length == 0) return;    
    var form = document.forms[0];
    if (form == null) return;    
    var isValid = true;    
    try {                          
        var userNameErrorMessage = document.getElementById("userNameErrorMessage");
        var passwordErrorMessage = document.getElementById("passwordErrorMessage");        
        if (userNameErrorMessage == null) return;
        if (passwordErrorMessage == null) return;                
        userNameErrorMessage.style.display = "none";
        passwordErrorMessage.style.display = "none";        
        var userId = document.getElementById("signOnForm-userId");
        if (userId == null || 
            userId.value == null ||
            userId.value == "Username" ||
            userId.value.replace(/^\s+|\s+$/g,"") == "") {           
            userNameErrorMessage.style.display = "";
            userNameErrorMessage.innerHTML = "Invalid user id";    
            isValid = false;
        }                     
        var password = document.getElementById("signOnForm-password");        
        if (password == null || 
            password.value == null ||
            password.value == "***************" ||
            password.value.replace(/^\s+|\s+$/g,"") == "") {                                
            passwordErrorMessage.style.display = "";
            passwordErrorMessage.innerHTML = "Invalid password"
            isValid = false;
        }        
        if (isValid) {
            form.action = action;
            form.submit();
        }                
    }
    catch (e) {
        // disregard        
    }
    finally {
        if (previousAction != null)            
            form.action = previousAction;
    }
    return isValid;
}
function onResize(event) {
    var signOnForm = document.getElementById("signOnForm");  
    if (signOnForm == null) return;
    if (signOnForm.style.display == "" && 
        signOnForm.style.position == "absolute") {        
        var signOnNav = document.getElementById("signOnNav");           
        if (signOnNav == null) return;         
        var pos = getElementAbsolutePos(signOnNav);        
        if (pos.x == 0) return;
        if (pos.y == 0) return;
        signOnForm.style.left = (pos.x) + "px";
        signOnForm.style.top = (pos.y + 39) + "px";
    }
}
function getElementAbsolutePos(element) {
    var isIE =  navigator.appVersion.match(/MSIE/);
    var userAgent = navigator.userAgent;
    var isFireFox = userAgent.match(/firefox/i);
    var isFireFoxOld = isFireFox && 
       (userAgent.match(/firefox\/2./i) || userAgent.match(/firefox\/1./i));
    var isFireFoxNew = isFireFox && !isFireFoxOld;
    var res = new Object();
    res.x = 0; 
    res.y = 0;
    if (element == null) return res;    
    res.x = element.offsetLeft;
    res.y = element.offsetTop;        
    var offsetParent = element.offsetParent;
    var parentNode = element.parentNode;
    var borderWidth = null;
    while (offsetParent != null) {
        res.x += offsetParent.offsetLeft;
        res.y += offsetParent.offsetTop;            
        var parentTagName = offsetParent.tagName.toLowerCase();    
        if ((isIE && parentTagName != "table") || 
            (isFireFoxNew && parentTagName == "td")) {            
            borderWidth = getBorderWidth(offsetParent);
            res.x += borderWidth.left;
            res.y += borderWidth.top;
        }            
        if (offsetParent != document.body && 
            offsetParent != document.documentElement) {
            res.x -= offsetParent.scrollLeft;
            res.y -= offsetParent.scrollTop;
        }
        if (!isIE) {
            while (offsetParent != parentNode && parentNode !== null) {
                res.x -= parentNode.scrollLeft;
                res.y -= parentNode.scrollTop;
                
                if (isFireFoxOld) {
                    borderWidth = getBorderWidth(parentNode);
                    res.x += borderWidth.left;
                    res.y += borderWidth.top;
                }
                parentNode = parentNode.parentNode;
            }    
        }
        parentNode = offsetParent.parentNode;
        offsetParent = offsetParent.offsetParent;
    }    
    return res;
}
function parseBorderWidth (width) {
    var res = 0;
    if (typeof(width) == "string" && width != null && width != "" ) {
        var p = width.indexOf("px");
        if (p >= 0)
            res = parseInt(width.substring(0, p));        
        else 
            res = 1;         
    }
    return res;
}
function getBorderWidth (element) {
    var res = new Object();
    res.left = 0; 
    res.top = 0; 
    res.right = 0; 
    res.bottom = 0;
    if (window.getComputedStyle) {
        var elStyle = window.getComputedStyle(element, null);
        res.left = parseInt(elStyle.borderLeftWidth.slice(0, -2));  
        res.top = parseInt(elStyle.borderTopWidth.slice(0, -2));  
        res.right = parseInt(elStyle.borderRightWidth.slice(0, -2));  
        res.bottom = parseInt(elStyle.borderBottomWidth.slice(0, -2));  
    }
    else {
        res.left = parseBorderWidth(element.style.borderLeftWidth);
        res.top = parseBorderWidth(element.style.borderTopWidth);
        res.right = parseBorderWidth(element.style.borderRightWidth);
        res.bottom = parseBorderWidth(element.style.borderBottomWidth);
    }   
    return res;
}
function searchBoxFocus(event, sender) {
    if (sender == null) return;    
    var value = sender.value;    
    value = value.replace(/^\s+|\s+$/g,""); // trim whitespace
    if (value == "Search")
        sender.value = "";
}
function searchBoxBlur(event, sender) {
    if (sender == null) return;    
    var value = sender.value;    
    value = value.replace(/^\s+|\s+$/g,""); // trim whitespace
    if (value == "")
        sender.value = "Search";
}
function userIdFocus(event, sender) {       
    if (sender == null) return;    
    var value = sender.value;    
    value = value.replace(/^\s+|\s+$/g,""); // trim whitespace
    if (value == "Username")
        sender.value = "";
}
function userIdBlur(event, sender) {
    if (sender == null) return;    
    var value = sender.value;    
    value = value.replace(/^\s+|\s+$/g,""); // trim whitespace
    if (value == "")
        sender.value = "Username";
}
function passwordTextFocus(event, sender) {
    if (sender == null) return;
    var password = document.getElementById("signOnForm-password");
    sender.style.display = "none";
    password.style.display = "";
    password.focus();
}
function passwordBlur(event, sender) {    
    if (sender == null) return;    
    var value = sender.value;
    value = value.replace(/^\s+|\s+$/g, ""); // trim whitespace
    if (value == "") {
        var passwordText = document.getElementById("signOnForm-passwordText");
        sender.style.display = "none";
        passwordText.style.display = "";
    }
}