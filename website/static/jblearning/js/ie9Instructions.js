function launchIE9InstructionsDialog(){
    $('div#dv_IE9Instructions').dialog('open');
	return false;
}

$(function () {
    $('div#dv_IE9Instructions').dialog({
        bgiframe: true,
        autoOpen: false,
        modal: true,
        position: 'center',
        width: 640,
        height: 480,
        draggable: false,
        resizable: false,
        title: 'Internet Explorer 9 Compatability View',
        buttons: {
            OK: function () {
                $(this).dialog('close');
            }
        }
    });
});