var $ = window.jQuery;

$(document).ready(function(){
    bigRecordinger();
});

function bigRecordinger() {	

setTimeout( function() {
	audcont = document.getElementsByName('media')[0];

	if (audcont != null && audcont != undefined && audcont.getAttribute("width") === null) {		
	
		chrome.storage.local.get(['crmFix7Localsave'], function(result) {
		if (result.crmFix7Localsave == "0") 
		{ 
		//console.log("Expanding disabled in settings");
		} 
		else { audcont.setAttribute("style", "width: 100%; bottom: 90%;"); }; });
	
	}
	
}, 50);	
	
}