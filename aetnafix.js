var $ = window.jQuery;

//var aetnaFix1Status;

$(document).ready(function(){
	//loadSettingsAetna();
    aetnaFix();
});

//$('textarea[category="Greetings"]').attr("maxlength", "2048"); $('textarea[category="Greetings and Notes"]').attr("maxlength", "2048");
/*
function loadSettingsAetna() {
	chrome.storage.local.get(['aetnaFix1Localsave'], function(result) {
		console.log(result.aetnaFix1Localsave);
		if (result.aetnaFix1Localsave != "0") 
	}); // Remove garbanzo from ddr and name
	console.log(aetnaFix1Status);
}
*/
function aetnaFix() {
	//if (aetnaFixForAddrnameStatus == "1" || aetnaFixForAddrnameStatus == undefined || aetnaFixForAddrnameStatus == null) {
chrome.storage.local.get(['aetnaFix1Localsave'], function(result) {
		if (result.aetnaFix1Localsave != "0") {
	setTimeout( function() {
			$('span:contains("This is under Provider/Facility Information column")').text('');
			$('span:contains("Open provider map")').text('');
			aetnaFix();
	}, 2000)
	
}});
}











/*
var aetnaTimer = 3600;
function aetnaFix() {
	chrome.storage.local.get(['aetnaFix1Localsave'], function(result) {
		if (result.aetnaFix1Localsave == "1") {
			
	setTimeout( function() {
			if (aetnaTimer <= 1) {
                aetnaTimer = 3600;
                return;
            }

            if (aetnaTimer >= 2) {
				$('span:contains("This is under Provider/Facility Information column")').text('');
				$('span:contains("Open provider map")').text('');
				aetnaFix();
                aetnaTimer--;
            }
	}, 2000)
	
		}
}
*/