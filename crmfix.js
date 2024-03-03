var $ = window.jQuery;

var extversioncrmfix = "V1.23";
var extupdatestextcrmfix = '<div id="updatesLogDc" class="updatesDcCss"> <span style="color: #e115aa; font-size: 2.7rem; text-align: center; font-weight: 600; display: block;">Updates</span><br><span class="versionNumUpdates">Version 1.15</span> <ul> <li>--- Fixed ticket preview clipping through the screen edges</li> <li>--- More small bug fixes</li> </ul><span class="versionNumUpdates">Version 1.13</span> <ul> <li>--- New featureset powered by Anton Antonenko code</li> <li>--- Disabled chat custom styling</li> </ul><span class="versionNumUpdates">Version 1.12</span> <ul> <li>--- Fixed "Hang Up" button in Zendesk talk becoming invisible for some users</li> </ul><span class="versionNumUpdates">Version 1.11</span> <ul> <li>--- Dark mode for Zendesk</li> <li>--- Custom designs for Zendesk</li> <li>--- Fixed Products tab style for dark version</li> <li>--- Added All Views for Zendesk (available in Zendesk Views at the bottom) </li> </ul><span class="versionNumUpdates">Version 1.10</span> <ul> <li>--- Fixed dark designs, still a bit broken but no more unreadable elements</li> <li>--- If there are no working hours set, it will be much clearer now instead of guessing if it is actual 9:30 AM - 5:00 PM or it\'s empty</li> <li>--- Updates block has been implemented, wowsers!</li> <li>--- Fixed issue when double-clicking Benefit Wallet faster than 50 milliseconds in between clicks would cause inability to click anything on the DC. Unlocker 🔓 has been upgraded just in case as well </li> <li>--- Removed heavy logging spam from Aetna script, but you probably never saw it anyways :) </li> </ul></div>';

var clicksbeforelogout = 3;
var settingsArray = []; //Create settings array
var numTOFIll = 5; //Pre-fill default values
var onceOnlyPls = 1;

var settingsModal;
var settingsBtn;
var unlockBtn;
var settingsBtncloser;
var spanSettingsCloser;

var benefitsWalletStatus;
var financedeliveryDownStatus;
var openchatButtonStatus;
var triclicksLogoutStatus;
var addSearchgroupStatus;
//var addUAflagStatus;
//var muteUnmuteVisibleStatus;
//var tktIDafterCallStatus;
var blockerElement;

var colorTransparent = "rgba(0, 0, 0, 0)";
var colorBlackFull = "#000";
var colorWhiteFull = "#fff";
var accent075Color = "rgba(0, 0, 0, 0.075)";
var colorBg = "";
var colorFront = "";
var accentBgColor = "";
var accentHoverColor = "";
var accentFrontColor = "";
var accent06Color = "";
var greyPageBg = "#1a1d21";


var timezoneslisthtml = '<select><option selected="selected">Timezone Helper (Powered Wikipedia)</option><option>!!! Means there are some exceptions, please double check!</option><option>Alabama(AL)	- Central Standard Time (CST)</option><option>Alaska(AK) - Alaska Standard Time (AKST)</option><option>Arizona(AZ)	- Mountain Standard Time (MST)</option><option>American Samoa - Samoa Time (SST)</option><option>Arkansas(AR) - Central Standard Time (CST)</option><option>California(CA) - Pacific Standard Time (PST)</option><option>Colorado(CO) - Mountain Standard Time (MST)</option><option>Connecticut(CT) - Eastern Standard Time (EST)</option><option>Delaware(DE) - Eastern Standard Time (EST)</option><option>District of Columbia(DC) - Eastern Standard Time (EST)</option><option>!!! Florida(FL) - Eastern Standard Time (EST)</option><option>Georgia(GA) - Eastern Standard Time (EST)</option><option>Guam (GU) - Chamorro Standard Time (ChST)</option><option>Hawaii(HI) - Hawaii-Aleutian Standard Time (HST)</option><option>!!! Idaho(ID) - Mountain Standard Time (MST)</option><option>Illinois(IL) - Central Standard Time (CST)</option><option>!!! Indiana(IN) - Eastern Standard Time (EST)</option><option>Iowa(IA) - Central Standard Time (CST)</option><option>!!! Kansas(KS) - Central Standard Time (CST)</option><option>Kentucky(KY) - Western: Central Standard Time (CST)</option><option>Kentucky(KY) - Eastern: Eastern Standard Time (EST)</option><option>Louisiana(LA) - Central Standard Time (CST)</option><option>Maine(ME) - Eastern Standard Time (EST)</option><option>Maryland(MD) - Eastern Standard Time (EST)</option><option>Massachusetts(MA) - Eastern Standard Time (EST)</option><option>!!! Michigan(MI) - Eastern Standard Time (EST)</option><option>Minnesota(MN) - Central Standard Time (CST)</option><option>Mississippi(MS) - Central Standard Time (CST)</option><option>Missouri(MO) - Central Standard Time (CST)</option><option>Montana(MT) - Mountain Standard Time (MST)</option><option>!!! Nebraska(NE) - Central Standard Time (CST)</option><option>!!! Nevada(NV) - Pacific Standard Time (PST)</option><option>New Hampshire(NH) - Eastern Standard Time (EST)</option><option>New Jersey(NJ) - Eastern Standard Time (EST)</option><option>New Mexico(NM) - Mountain Standard Time (MST)</option><option>New York(NY) - Eastern Standard Time (EST)</option><option>North Carolina(NC) - Eastern Standard Time (EST)</option><option>!!! North Dakota(ND) - Central Standard Time (CST)</option><option>Northern Mariana Islands(MP) - Chamorro Standard Time (ChST)</option><option>Ohio(OH) - Eastern Standard Time (EST)</option><option>Oklahoma(OK) - Central Standard Time (CST)</option><option>!!! Oregon(OR) - Pacific Standard Time (PST)</option><option>Pennsylvania(PA) - Eastern Standard Time (EST)</option><option>Puerto Rico (PR) - Atlantic Standard Time (AST)</option><option>Rhode Island(RI) - Eastern Standard Time (EST)</option><option>South Carolina(SC) - Eastern Standard Time (EST)</option><option>South Dakota(SD) - Eastern South Dakota: Central Standard Time (CST)</option><option>South Dakota(SD) - Western South Dakota: Mountain Standard Time (MST)</option><option>Tennessee(TN) - West Tennessee: Central Standard Time (CST)</option><option>Tennessee(TN) - Middle Tennessee, plus Marion County: Central Standard Time (CST)</option><option>Tennessee(TN) - East Tennessee, except Marion County: Eastern Standard Time (EST)</option><option>!!! Texas(TX) - Central Standard Time (CST)</option><option>United States Virgin Islands (USVI) - Atlantic Standard Time (AST)</option><option>Utah(UT) - Mountain Standard Time (MST)</option><option>Vermont(VT)	Eastern Standard Time (EST)</option><option>Virginia(VA) - Eastern Standard Time (EST)</option><option>Washington(WA) - Pacific Standard Time (PST)</option><option>West Virginia(WV) - Eastern Standard Time (EST)</option><option>Wisconsin(WI) - Central Standard Time (CST)</option><option>Wyoming(WY) - Mountain Standard Time (MST)</option></select><p>NOTE: Selecting state to show you timezone does nothing to actual ticket, you still need to select propper timezone in the ticket timezone selector above the appointment duration!</p>';

var settingsbuttoncode = '<button class="btn btn-brand-primary btn-logout" id="settingsBtn">Settings</button>';

$(document).ready(function(){
	$("body").append('<a href="#" id="unlockScreenBlockers" class="unlockScreenBlockersStyle">🔓</a>');	
	
	if (document.getElementById("unlockScreenBlockers") != null) { document.getElementById("unlockScreenBlockers").onclick = function deleteAllBlockers(){
		console.log("Screen unlock triggered");
		
		if(document.getElementsByClassName("modal")[0] != undefined){ blockerElement = document.getElementsByClassName("modal")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementsByClassName("react-confirm-alert-body")[0] != undefined){ blockerElement = document.getElementsByClassName("react-confirm-alert-body")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementsByClassName("loader-wrapper_AaVrp")[0] != undefined){ blockerElement = document.getElementsByClassName("loader-wrapper_AaVrp")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementsByClassName("react-confirm-alert-overlay")[0] != undefined){ blockerElement = document.getElementsByClassName("react-confirm-alert-overlay")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementsByClassName("popup-modal_1z-N8")[0] != undefined){ blockerElement = document.getElementsByClassName("popup-modal_1z-N8")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementsByClassName("popup-modal_fullscreen_2Nimt")[0] != undefined){ blockerElement = document.getElementsByClassName("popup-modal_fullscreen_2Nimt")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementsByClassName("hj-decision-loader")[0] != undefined){ blockerElement = document.getElementsByClassName("hj-decision-loader")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementsByClassName("loader-cover-area")[0] != undefined){ blockerElement = document.getElementsByClassName("loader-cover-area")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementsByClassName("modal-backdrop")[0] != undefined){ blockerElement = document.getElementsByClassName("modal-backdrop")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementById("walletMovedbgRemoved1") != undefined){ blockerElement = document.getElementById("walletMovedbgRemoved1"); blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementById("walletMovedbgRemoved2") != undefined){ blockerElement = document.getElementById("walletMovedbgRemoved2"); blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementById("walletMovedbgRemoved2") != undefined){ blockerElement = document.getElementById("walletMovedbgRemoved2"); blockerElement.parentNode.removeChild(blockerElement); }
		if(document.getElementsByClassName("popup_3xxDP")[0] != undefined){ blockerElement = document.getElementsByClassName("popup_3xxDP")[0]; blockerElement.parentNode.removeChild(blockerElement); }
		$('body').css("overflow", "scroll");
	}} else { console.log("unlockScreenBlockers DOES NOT EXIST"); };
});

(window.onload = function() {
	
	
	//completelyWhiteStyle();
	//completelyBlackStyle();
	
	createSettingsMainQ();
	//document.getElementById("unlockScreenBlockers").addEventListener("click", removeBlockersFunction);
	//$("modal").remove(); $("react-confirm-alert-body").remove(); $("react-confirm-alert-overlay").remove(); $("modal").remove(); $("modal").remove(); $("loader-wrapper_AaVrp").remove(); $("popup-modal_1z-N8").remove(); $("popup-modal_fullscreen_2Nimt").remove(); $("hj-decision-loader").remove(); $("loader-cover-area").remove(); 
	//document.getElementById("unlockScreenBlockers").onclick = function() {$(".modal").remove(); $(".react-confirm-alert-body").remove(); $(".react-confirm-alert-overlay").remove(); $(".loader-wrapper_AaVrp").remove(); $(".popup-modal_1z-N8").remove(); $(".popup-modal_fullscreen_2Nimt").remove(); $(".hj-decision-loader").remove(); $(".loader-cover-area").remove(); console.log("QWEASD");}
	//Generate style
	//$("body").css("background-color","blue");
	//$("body").append('<a href="#" id="unlockScreenBlockers" class="unlockScreenBlockersStyle">🔓</a>');
})();

//var crmTimer1 = 1;
//function crmFix1() {
//	setTimeout( function() {
//			if (crmTimer1 <= 0) {
//                //$('h3:contains("Appointment Date")').parent().parent().append(timezoneslisthtml);
//                return;
//            }
//
//            if (crmTimer1 >= 1) {
//				//Waiting some seconds before adding timezone list to make sure page is ready
//				crmFix1();
//                crmTimer1--;
//            }
//	}, 10000)
//}


function createSettingsMainQ() {
	//Settings button
	setTimeout( function() {
		
		if ( $('#settingsBtn').text() == 'Settings') {
			loadSettingsMainQ();
			saveSettingsMainQ();
			logoutMagic();
			level1Fixes();
			benefitsWalletMagic();
			console.log("Settings injected");
			return;
		}
		else { console.log("Waiting for injection");
	
	$('button:contains("My profile")').parent().parent().append('<button class="btn btn-brand-primary btn-logout" id="settingsBtn" style="margin-left: 10px;">Settings</button>');
	
	$('.logo').parent().append('<span id="tktidtext" class="tktidtextclass" hidden>TicketID=??????</span>');
	
	for (var i = 0; i < numTOFIll; i++) {
	  settingsArray.push(false);
	}
	//console.log(settingsArray);
	
	// convert to json string
	var saveJSON = JSON.stringify(settingsArray);
	
	// get the file field
	var $field = $("#saveFileField");
	// create a new FileReader object
	var reader = new FileReader();
	// when the file has finished reading,
	// store it's contents to a variable (async)
	reader.onload = function(ev) {

	  var contents = JSON.parse(decodeURIComponent(ev.target.result));
	  // execute follow-up work here...
	  console.log(contents);
	  settingsArray = contents;
	  console.log(settingsArray);
	  $("#settingsSaveImportInfo").show();
	};

	// when it changes (ie: user selects a file)
	$field.on("change", function() {

	  // get the file item from the input field
	  var file = this.files[0];
	  // read the file as text
	  reader.readAsText(file);
	  // and then then load event will trigger ...

	});
	
	$("body").append(
	'<div id="settingsModal" class="settingsModalcss"> <div class="modal-content-css"> <span id="settingsVerDC" class="settingdcver">'+ extversioncrmfix +'</span> <span id="settingsBtncloser" class="closesettings">Save & Close</span> <!-- Main Design --> <div class="tg-wrap"> <table class="tg"> <thead> <tr> <th class="tg-c3ow" colspan="5">Main Style</th> </tr> </thead> <tbody> <tr> <td></td> <td class="tg-c3ow" colspan="1"><label class="settingsradiallabel"><input type="radio" name="sradselectmain" id="sraddefmain"><span class="setingsradialdesign sraddefmain"></span><span class="setingstextdesign sraddefmaint">Default</span></label></td> <td class="tg-c3ow" colspan="1"><label class="settingsradiallabel"><input type="radio" name="sradselectmain" id="sraddefwhite"><span class="setingsradialdesign sraddefwhite"></span><span class="setingstextdesign sraddefwhite">Bright</span></label></td> <td class="tg-c3ow" colspan="1"><label class="settingsradiallabel"><input type="radio" name="sradselectmain" id="sraddarkmain"><span class="setingsradialdesign sraddarkmain"></span><span class="setingstextdesign sraddarkmaint">Dark</span></label></td> <td class="tg-c3ow" colspan="1"><label class="settingsradiallabel"><input type="radio" name="sradselectmain" id="sradblackmain"><span class="setingsradialdesign sradblackmain"></span><span class="setingstextdesign sradblackmaint">Void</span></label></td> </tr> </tbody> </table> </div> <!-- Accent Design --> <div class="tg-wrap"> <table class="tg"> <thead> <tr> <th class="tg-c3ow" colspan="8">Accent Color</th> </tr> </thead> <tbody> <tr> <td></td> <td class="tg-c3ow" colspan="2"><label class="settingsradiallabel"><input type="radio" name="sradselect" id="sradgrey"><span class="setingsradialdesign sradgrey"></span><span class="setingstextdesign sradgreyt">Grey</span></label></td> <td class="tg-c3ow" colspan="2"><label class="settingsradiallabel"><input type="radio" name="sradselect" id="sradblue"><span class="setingsradialdesign sradblue"></span><span class="setingstextdesign sradbluet">Blue</span></label></td> <td class="tg-c3ow" colspan="2"><label class="settingsradiallabel"><input type="radio" name="sradselect" id="sradgreen"><span class="setingsradialdesign sradgreen"></span><span class="setingstextdesign sradgreent">Green</span></label></td> <td class="tg-c3ow" colspan="2"><label class="settingsradiallabel"><input type="radio" name="sradselect" id="sradyellow"><span class="setingsradialdesign sradyellow"></span><span class="setingstextdesign sradyellowt">Yellow</span></label></td> </tr> <tr> <td></td> <td class="tg-c3ow" colspan="2"><label class="settingsradiallabel"><input type="radio" name="sradselect" id="sradred"><span class="setingsradialdesign sradred"></span><span class="setingstextdesign sradredt">Red</span></label></td> <td class="tg-c3ow" colspan="2"><label class="settingsradiallabel"><input type="radio" name="sradselect" id="sradorange"><span class="setingsradialdesign sradorange"></span><span class="setingstextdesign sradoranget">Brown</span></label></td> <td class="tg-c3ow" colspan="2"><label class="settingsradiallabel"><input type="radio" name="sradselect" id="sradpurple"><span class="setingsradialdesign sradpurple"></span><span class="setingstextdesign sradpurplet">Purple</span></label></td> <td class="tg-c3ow" colspan="2"><label class="settingsradiallabel"><input type="radio" name="sradselect" id="sradpink"><span class="setingsradialdesign sradpink"></span><span class="setingstextdesign sradpinkt">Pink</span></label></td> </tr> </tbody> </table> </div> <!-- CRM Fixes --> <div class="tg-wrap"> <table class="tg"> <thead> <tr> <th class="tg-c3ow" colspan="8">General CRM</th> </tr> </thead> <tbody> <tr> <td class="hasTooltip">💬<span>Takes Financial and Delivery buttons and moves them down to reserve space</span></td> <td class="tg-c3ow" colspan="2">Move Financial/Delivery down</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="crmFix1"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>Will load Benefits Wallet inside of Insurance tab and no longer blocks the whole screen. To close/reload simply change tab to any other than Insurance</span></td> <td class="tg-c3ow" colspan="1">Inline Benefits Wallet</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="crmFix2"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <tr> <td class="hasTooltip">💬<span>When enabled, "Open Chat" button will appear near "Copy Secure Link" which will instead of copying the link that you need to paste to open chat will actually automatically open it in a new tab</span></td> <td class="tg-c3ow" colspan="2">Add "Open Chat" button</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="crmFix3"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>While enabled, you will need to press Logout button 3 times to log yourself out (prevents accidental logout)</span></td> <td class="tg-c3ow" colspan="1">Require 3 clicks to logout</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="crmFix4"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <tr> <td class="hasTooltip">💬<span>When enabled, near the group name there will be quick link that will open search in KB for a group name, only useful when for some reason the group in CRM profile is not a link and just a text</span></td> <td class="tg-c3ow" colspan="2">Add group search button</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="crmFix5"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>While enabled, current TKT ID will be shown at the top of the page all the time, including while in after-call menu</span></td> <td class="tg-c3ow" colspan="1">Show TKT ID</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="crmFix6"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <tr> <td class="hasTooltip">💬<span>While enabled, will expand call recording preview to full width of the screen</span></td> <td class="tg-c3ow" colspan="2">Expanded Recording Preview</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="crmFix7"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip" hidden>💬<span>Reserved 3</span></td> <td class="tg-c3ow" colspan="1" hidden>Reserved 3</td> <td class="tg-c3ow" colspan="1" hidden> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="crmFix8"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> </tbody> </table> </div> <!-- Old DC Fixes --> <div class="tg-wrap"> <table class="tg"> <thead> <tr> <th class="tg-c3ow" colspan="8">Old DC (Non-FC)</th> </tr> </thead> <tbody> <tr> <td class="hasTooltip">💬<span>While enabled, "Preview Card" will appear on top of the screen giving you ability to preview your ticket regardless of how far you scrolled down on page, therefore you no longer need to scroll up each time just to watch a preview</span></td> <td class="tg-c3ow" colspan="2">Move "Preview Card" to top bar</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="oldDcFix1"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>When enabled, will show warnings about things that most likely will lead to losing score on QA. Does not fix errors for you, serves only informational purpose. For example: warns when card title is default, warns when group UT unchecked, when treat member needs unchecked, etc. The number inside of ( ) represents option where the issue was found</span></td> <td class="tg-c3ow" colspan="1">Auto-QA</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="oldDcFix2"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <tr> <td class="hasTooltip">💬<span>When enabled, after adding picture of the provider or facility, you will see the exact copy of how member will see it without need to open "Preview Card"</span></td> <td class="tg-c3ow" colspan="2">Live Pic Preview</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="oldDcFix3"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>While enabled, greeting in regular DC will be expanded to 2048 symbols maximum (as in Find Care DC)</span></td> <td class="tg-c3ow" colspan="1">Double Greeting Size</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="oldDcFix4"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <tr hidden> <td class="hasTooltip">💬<span>Reserved - 5</span></td> <td class="tg-c3ow" colspan="2">Reserved - 5</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="oldDcFix5"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>Reserved - 6</span></td> <td class="tg-c3ow" colspan="1">Reserved - 6</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="oldDcFix6"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <tr hidden> <td class="hasTooltip">💬<span>Reserved - 7</span></td> <td class="tg-c3ow" colspan="2">Reserved - 7</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="oldDcFix7"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>Reserved - 8</span></td> <td class="tg-c3ow" colspan="1">Reserved - 8</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="oldDcFix8"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <!-- Old DC Fixes <tr> <td class="tg-c3ow">Highlights Editor</td> <td class="tg-c3ow" colspan="2">Provider Notes Editor</td> <td class="tg-c3ow" colspan="2">Facility Notes Editor</td> <td class="tg-c3ow" colspan="2">Insurance Templates Editor</td> </tr> <tr> <td class="tg-c3ow" colspan="8">Greetings Editor</td> </tr>--> </tbody> </table> </div> <!-- Find Care fixes --> <div class="tg-wrap" hidden> <table class="tg"> <thead> <tr> <th class="tg-c3ow" colspan="8">Find Care DC</th> </tr> </thead> <tbody> <tr> <td class="hasTooltip">💬<span>While enabled you will see all provider offices on FC DC option expanded while still being as much as possible compactly packed together. Keep in mind that you might expect a huge lists of offices for something like LabCorp.</span></td> <td class="tg-c3ow" colspan="2">Show all addresses</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="fcFix1"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>Reserved - 9</span></td> <td class="tg-c3ow" colspan="2">Reserved - 9</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="fcFix2"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> </tbody> </table> </div> <!-- Message DC fixes --> <div class="tg-wrap"> <table class="tg"> <thead> <tr> <th class="tg-c3ow" colspan="8">Message DC</th> </tr> </thead> <tbody> <tr> <td class="hasTooltip">💬<span>If you scroll down to the point where a bar with buttons to change text format will be out of the screen, it will stick the bar to top of the screen and it will be visible regardless of how long the message is and how far you scroll</span></td> <td class="tg-c3ow" colspan="2">Keep Message Buttons On Screen</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="messageFix1"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip" hidden>💬⚠️<span>While enabled, it will show a box near your message input that will represent live preview card (more or less).<p style="color: red;">This feature is unfinished, it may or may not be ever finished, use only if you find it helpful in any way in current shape and form</p></span></td> <td class="tg-c3ow" colspan="2" hidden>Message Live Preview</td> <td class="tg-c3ow" colspan="1" hidden> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="messageFix2"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <tr hidden> <td class="hasTooltip">💬<span>Reserved - 11</span></td> <td class="tg-c3ow" colspan="2">Reserved - 11</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="messageFix3"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>Reserved - 12</span></td> <td class="tg-c3ow" colspan="2">Reserved - 12</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="messageFix4"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> </tbody> </table> </div> <!-- UHC fixes --> <div class="tg-wrap"> <table class="tg"> <thead> <tr> <th class="tg-c3ow" colspan="8">UHC Insurance</th> </tr> </thead> <tbody> <tr> <td class="hasTooltip">💬<span>Removes anoying COVID banners from every page on top of the screen saving tons of space</span></td> <td class="tg-c3ow" colspan="2">Remove COVID banners</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="uhcFix1"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip" hidden>💬<span>Top part of the UHC website will no longer stay on screen when you scroll down so you can enjoy having a free 20% of the screen when scrolling</span></td> <td class="tg-c3ow" colspan="2" hidden>"Unstick" top part</td> <td class="tg-c3ow" colspan="1" hidden> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="uhcFix2"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> </tbody> </table> </div> <!-- Atlasian --> <div class="tg-wrap"> <table class="tg"> <thead> <tr> <th class="tg-c3ow" colspan="7">KB (Confluence/Atlassian)</th> </tr> </thead> <tbody> <tr> <td class="hasTooltip">💬<span>While enabled, comments section in KB will be much bigger than the default 240x320 micro block</span></td> <td class="tg-c3ow" colspan="5">Increase comment panel size</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="kbkbFix1"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> </tbody> </table> </div> <!-- Aetna fixes --> <div class="tg-wrap"> <table class="tg"> <thead> <tr> <th class="tg-c3ow" colspan="7">Aetna Insurance</th> </tr> </thead> <tbody> <tr> <td class="hasTooltip">💬<span>Removes: "This is under Provider/Facility Information column" when selecting and copying/searching provider name<br><br>Removes: "Open provider map" when selecting and copying/searching location</span></td> <td class="tg-c3ow" colspan="5">Fix unnecessary text on provider name/address copy</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="aetnaFix1"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> </tbody> </table> </div> <!-- Import/Export to file --> <button id="exportimportSettingsTable" hidden> Export/Import To File </button> <div class="tg-wrap" id="expoimpoSettingsTable" hidden> <table class="tg"> <thead> <tr> <th class="tg-dvpl">Export to file:</th> <th style="text-align:left;vertical-align:center"><button id="saveToFileButton">Save to local file</button></th> </tr> </thead> <tbody> <tr> <td class="tg-lqy6">Import from file:</td> <td style="text-align:left;vertical-align:center"> <!-- the html element tat is listening for save import --> <input id="saveFileField" type="file" /> </td> </tr> <tr id="settingsSaveImportInfo" hidden> <td style="text-align:center;vertical-align:center" colspan="2"><span style="font-weight: bold;">Settings import completed!</span></td> </tr> </tbody> </table> </div> </div></div>'
	);
	$("#settingsModal").append( extupdatestextcrmfix );
	// Get the modal
	settingsModal = document.getElementById("settingsModal");
	// Get the button that opens the modal
	settingsBtn = document.getElementById("settingsBtn");
	settingsBtncloser = document.getElementById("settingsBtncloser");
	// Get the <span> element that closes the modal
	spanSettingsCloser = document.getElementsByClassName("closesettings")[0];
	// When the user clicks the button, open the modal 
	if (settingsBtn != null) { settingsBtn.onclick = function() { settingsModal.style.display = "flex"; } }
	// When the user clicks on <span> (x), close the modal and save settings
	
	//Export table open/close
	if (document.getElementById("exportimportSettingsTable") != null) { document.getElementById("exportimportSettingsTable").onclick = function saveToFileTable(){
		if (document.getElementById("expoimpoSettingsTable").hidden == true) {
		document.getElementById("expoimpoSettingsTable").hidden = false;
		} else { document.getElementById("expoimpoSettingsTable").hidden = true; }
		} 
	}
	//Export to file
	if (document.getElementById("saveToFileButton") != null) { document.getElementById("saveToFileButton").onclick = function saveToFile() {
	  // create a link DOM fragment
	  var $link = $("<a />");
	  // encode any special characters in the JSON
	  var text = encodeURIComponent(saveJSON);

	  // <a download="filename.txt" href='data:application/octet-stream,...'></a>
	  $link
		.attr("download", "HCCJoySettings.txt")
		.attr("href", "data:application/octet-stream," + text)
		.appendTo("body")
		.get(0)
		.click()
		}
	}
		createSettingsMainQ(); }
	}, 500)
		
}

function loadSettingsMainQ() {
	// CRM Fixes
	chrome.storage.local.get(['crmFix1Localsave'], function(result) {
		if (result.crmFix1Localsave == "0") { $("input[name=crmFix1]").prop('checked', false); financedeliveryDownStatus = "0"; } else { $("input[name=crmFix1]").prop('checked', true); financedeliveryDownStatus = "1"; };
	}); // Move Financial/Delivery down ✔️
	chrome.storage.local.get(['crmFix2Localsave'], function(result) {
		if (result.crmFix2Localsave == "0") { $("input[name=crmFix2]").prop('checked', false); benefitsWalletStatus = "0"; } else { $("input[name=crmFix2]").prop('checked', true); benefitsWalletStatus = "1"; benefitsWalletMagic(); };
	}); // Inline Benefits Wallet ✔️
	chrome.storage.local.get(['crmFix3Localsave'], function(result) {
		if (result.crmFix3Localsave == "0") { $("input[name=crmFix3]").prop('checked', false); openchatButtonStatus = "0"; } else { $("input[name=crmFix3]").prop('checked', true); openchatButtonStatus = "1"; };
	}); // Add "Open Chat" button ✔️
	chrome.storage.local.get(['crmFix4Localsave'], function(result) {
		if (result.crmFix4Localsave == "0") { $("input[name=crmFix4]").prop('checked', false); triclicksLogoutStatus = "0"; } else { $("input[name=crmFix4]").prop('checked', true); triclicksLogoutStatus = "1"; logoutMagic(); };
	}); // Require 3 clicks to logout ✔️
	chrome.storage.local.get(['crmFix5Localsave'], function(result) {
		if (result.crmFix5Localsave == "0") { $("input[name=crmFix5]").prop('checked', false); addSearchgroupStatus = "0"; } else { $("input[name=crmFix5]").prop('checked', true); addSearchgroupStatus = "1"; };
	}); // Add group search button ✔️
	chrome.storage.local.get(['crmFix6Localsave'], function(result) {
		if (result.crmFix6Localsave == "0") { $("input[name=crmFix6]").prop('checked', false); } else { $("input[name=crmFix6]").prop('checked', true); };
	}); // Reserved 1 - Show TKT ID on top of the page ✔️
	chrome.storage.local.get(['crmFix7Localsave'], function(result) {
		if (result.crmFix7Localsave == "0") { $("input[name=crmFix7]").prop('checked', false); } else { $("input[name=crmFix7]").prop('checked', true); };
	}); // Reserved 2 - Expand calls preview
	//Mute/Unmute button always visibe (TODO)
	// While enabled, even if you have Amazon caller minimized you will still see "Mute/Unmute" button at all time to quickly use it and dont loose time for opening calling window
	chrome.storage.local.get(['crmFix8Localsave'], function(result) {
		if (result.crmFix8Localsave == "0") { $("input[name=crmFix8]").prop('checked', false); } else { $("input[name=crmFix8]").prop('checked', true); };
	}); // Reserved 3 - 
	
	// Old DC (not find Care)
	chrome.storage.local.get(['oldDcFix1Localsave'], function(result) {
		if (result.oldDcFix1Localsave == "0") { $("input[name=oldDcFix1]").prop('checked', false); } else { $("input[name=oldDcFix1]").prop('checked', true); };
	}); // Move "Preview Card" to top bar ✔️
	chrome.storage.local.get(['oldDcFix2Localsave'], function(result) {
		if (result.oldDcFix2Localsave == "0") { $("input[name=oldDcFix2]").prop('checked', false); } else { $("input[name=oldDcFix2]").prop('checked', true); };
	}); // Auto-QA ✔️
	chrome.storage.local.get(['oldDcFix3Localsave'], function(result) {
		if (result.oldDcFix3Localsave == "0") { $("input[name=oldDcFix3]").prop('checked', false); } else { $("input[name=oldDcFix3]").prop('checked', true); };
	}); // Live pic preview ✔️
	chrome.storage.local.get(['oldDcFix4Localsave'], function(result) {
		if (result.oldDcFix4Localsave == "0") { $("input[name=oldDcFix4]").prop('checked', false); } else { $("input[name=oldDcFix4]").prop('checked', true); };
	}); // Reserved - 4 - Extended greeting ✔️
	/*chrome.storage.local.get(['oldDcFix5Localsave'], function(result) {
		if (result.oldDcFix5Localsave == "0") { $("input[name=oldDcFix5]").prop('checked', false); } else { $("input[name=oldDcFix5]").prop('checked', true); };
	}); // Reserved - 5
	chrome.storage.local.get(['oldDcFix6Localsave'], function(result) {
		if (result.oldDcFix6Localsave == "0") { $("input[name=oldDcFix6]").prop('checked', false); } else { $("input[name=oldDcFix6]").prop('checked', true); };
	}); // Reserved - 6
	chrome.storage.local.get(['oldDcFix7Localsave'], function(result) {
		if (result.oldDcFix7Localsave == "0") { $("input[name=oldDcFix7]").prop('checked', false); } else { $("input[name=oldDcFix7]").prop('checked', true); };
	}); // Reserved - 7
	chrome.storage.local.get(['oldDcFix8Localsave'], function(result) {
		if (result.oldDcFix8Localsave == "0") { $("input[name=oldDcFix8]").prop('checked', false); } else { $("input[name=oldDcFix8]").prop('checked', true); };
	}); */ // Reserved - 8
	
	// Find Care DC Fixes
	chrome.storage.local.get(['fcFix1Localsave'], function(result) {
		if (result.fcFix1Localsave == "0") { $("input[name=fcFix1]").prop('checked', false); } else { $("input[name=fcFix1]").prop('checked', true); };
	}); // Show all addresses
	chrome.storage.local.get(['fcFix2Localsave'], function(result) {
		if (result.fcFix2Localsave == "0") { $("input[name=fcFix2]").prop('checked', false); } else { $("input[name=fcFix2]").prop('checked', true); };
	}); // Reserved - 9
	
	// Message DC Fixes
	chrome.storage.local.get(['messageFix1Localsave'], function(result) {
		if (result.messageFix1Localsave == "0") { $("input[name=messageFix1]").prop('checked', false); } else { $("input[name=messageFix1]").prop('checked', true); };
	}); // Message edit bar will stay on screen ✔️
	chrome.storage.local.get(['messageFix2Localsave'], function(result) {
		if (result.messageFix2Localsave == "0") { $("input[name=messageFix2]").prop('checked', false); } else { $("input[name=messageFix2]").prop('checked', true); };
	}); // reserved - 10 Message Live Preview ✔️
	chrome.storage.local.get(['messageFix3Localsave'], function(result) {
		if (result.messageFix3Localsave == "0") { $("input[name=messageFix3]").prop('checked', false); } else { $("input[name=messageFix3]").prop('checked', true); };
	}); // reserved - 11
	chrome.storage.local.get(['messageFix4Localsave'], function(result) {
		if (result.messageFix4Localsave == "0") { $("input[name=messageFix4]").prop('checked', false); } else { $("input[name=messageFix4]").prop('checked', true); };
	}); // reserved - 12
	
	// UHC Insurance Fixes
	chrome.storage.local.get(['uhcFix1Localsave'], function(result) {
		if (result.uhcFix1Localsave == "0") { $("input[name=uhcFix1]").prop('checked', false); } else { $("input[name=uhcFix1]").prop('checked', true); };
	}); // Remove COVID banners
	chrome.storage.local.get(['uhcFix2Localsave'], function(result) {
		if (result.uhcFix2Localsave == "0") { $("input[name=uhcFix2]").prop('checked', false); } else { $("input[name=uhcFix2]").prop('checked', true); };
	}); // "Unstick" top part
	
	// KB Fixes
	chrome.storage.local.get(['kbkbFix1Localsave'], function(result) {
		if (result.kbkbFix1Localsave == "0") { $("input[name=kbkbFix1]").prop('checked', false); } else { $("input[name=kbkbFix1]").prop('checked', true); };
	}); // increases a size of comments in KB
	
	// Aetna Insurance Fixes
	chrome.storage.local.get(['aetnaFix1Localsave'], function(result) {
		if (result.aetnaFix1Localsave == "0") { $("input[name=aetnaFix1]").prop('checked', false); } else { $("input[name=aetnaFix1]").prop('checked', true); };
	}); // Fix unnecessary text on provider name/address copy
	
	// Main Design Load
	chrome.storage.local.get(['sradMainLocalsave'], function(result) {
		if (result.sradMainLocalsave != "0" && result.sradMainLocalsave != "1" && result.sradMainLocalsave != "2" && result.sradMainLocalsave != "3") { $("#sraddefmain").prop('checked', true);  }; // No save 
		
		if (result.sradMainLocalsave == "0") { $("#sraddefmain").prop('checked', true); } else { $("#sraddefmain").prop('checked', false); }; // sraddefmain
		if (result.sradMainLocalsave == "1") { $("#sraddefwhite").prop('checked', true);} else { $("#sraddefwhite").prop('checked', false); }; // sraddefwhite
		if (result.sradMainLocalsave == "2") { $("#sraddarkmain").prop('checked', true);} else { $("#sraddarkmain").prop('checked', false); }; // sraddarkmain
		if (result.sradMainLocalsave == "3") { $("#sradblackmain").prop('checked', true); } else { $("#sradblackmain").prop('checked', false); }; // sradblackmain
	});
	
	//Accent Load
	chrome.storage.local.get(['sradAccentLocalsave'], function(result) {
		if (result.sradAccentLocalsave != "1" && result.sradAccentLocalsave != "2" && result.sradAccentLocalsave != "3" && result.sradAccentLocalsave != "4" && result.sradAccentLocalsave != "5" && result.sradAccentLocalsave != "6" && result.sradAccentLocalsave != "7" && result.sradAccentLocalsave != "8") { $("#sradpurple").prop('checked', true); }; // No save
		
		if (result.sradAccentLocalsave == "1") { $("#sradgrey").prop('checked', true);} else { $("#sradgrey").prop('checked', false); }; // sradgrey
		if (result.sradAccentLocalsave == "2") { $("#sradblue").prop('checked', true);} else { $("#sradblue").prop('checked', false); }; // sradblue
		if (result.sradAccentLocalsave == "3") { $("#sradgreen").prop('checked', true);} else { $("#sradgreen").prop('checked', false); }; // sradgreen
		if (result.sradAccentLocalsave == "4") { $("#sradyellow").prop('checked', true);} else { $("#sradyellow").prop('checked', false); }; // sradyellow
		if (result.sradAccentLocalsave == "5") { $("#sradred").prop('checked', true);} else { $("#sradred").prop('checked', false); }; // sradred
		if (result.sradAccentLocalsave == "6") { $("#sradorange").prop('checked', true);} else { $("#sradorange").prop('checked', false); }; // sradorange
		if (result.sradAccentLocalsave == "7") { $("#sradpurple").prop('checked', true);} else { $("#sradpurple").prop('checked', false); }; // sradpurple
		if (result.sradAccentLocalsave == "8") { $("#sradpink").prop('checked', true);} else { $("#sradpink").prop('checked', false); }; // sradpink
	});
	
}


function saveSettingsMainQ() {
	if (settingsBtncloser != null) { settingsBtncloser.onclick = function() { settingsModal.style.display = "none"; 
		// CRM Fixes
		if ($("input[name=crmFix1]").prop("checked") == true) { chrome.storage.local.set({"crmFix1Localsave": "1"}); } else { chrome.storage.local.set({"crmFix1Localsave": "0"}); };
		if ($("input[name=crmFix2]").prop("checked") == true) { chrome.storage.local.set({"crmFix2Localsave": "1"}); } else { chrome.storage.local.set({"crmFix2Localsave": "0"}); };
		if ($("input[name=crmFix3]").prop("checked") == true) { chrome.storage.local.set({"crmFix3Localsave": "1"}); } else { chrome.storage.local.set({"crmFix3Localsave": "0"}); };
		if ($("input[name=crmFix4]").prop("checked") == true) { chrome.storage.local.set({"crmFix4Localsave": "1"}); } else { chrome.storage.local.set({"crmFix4Localsave": "0"}); };
		if ($("input[name=crmFix5]").prop("checked") == true) { chrome.storage.local.set({"crmFix5Localsave": "1"}); } else { chrome.storage.local.set({"crmFix5Localsave": "0"}); };
		if ($("input[name=crmFix6]").prop("checked") == true) { chrome.storage.local.set({"crmFix6Localsave": "1"}); } else { chrome.storage.local.set({"crmFix6Localsave": "0"}); };
		if ($("input[name=crmFix7]").prop("checked") == true) { chrome.storage.local.set({"crmFix7Localsave": "1"}); } else { chrome.storage.local.set({"crmFix7Localsave": "0"}); };
		if ($("input[name=crmFix8]").prop("checked") == true) { chrome.storage.local.set({"crmFix8Localsave": "1"}); } else { chrome.storage.local.set({"crmFix8Localsave": "0"}); };
		// Old DC (not find Care)
		if ($("input[name=oldDcFix1]").prop("checked") == true) { chrome.storage.local.set({"oldDcFix1Localsave": "1"}); } else { chrome.storage.local.set({"oldDcFix1Localsave": "0"}); };
		if ($("input[name=oldDcFix2]").prop("checked") == true) { chrome.storage.local.set({"oldDcFix2Localsave": "1"}); } else { chrome.storage.local.set({"oldDcFix2Localsave": "0"}); };
		if ($("input[name=oldDcFix3]").prop("checked") == true) { chrome.storage.local.set({"oldDcFix3Localsave": "1"}); } else { chrome.storage.local.set({"oldDcFix3Localsave": "0"}); };
		if ($("input[name=oldDcFix4]").prop("checked") == true) { chrome.storage.local.set({"oldDcFix4Localsave": "1"}); } else { chrome.storage.local.set({"oldDcFix4Localsave": "0"}); };
		if ($("input[name=oldDcFix5]").prop("checked") == true) { chrome.storage.local.set({"oldDcFix5Localsave": "1"}); } else { chrome.storage.local.set({"oldDcFix5Localsave": "0"}); };
		if ($("input[name=oldDcFix6]").prop("checked") == true) { chrome.storage.local.set({"oldDcFix6Localsave": "1"}); } else { chrome.storage.local.set({"oldDcFix6Localsave": "0"}); };
		if ($("input[name=oldDcFix7]").prop("checked") == true) { chrome.storage.local.set({"oldDcFix7Localsave": "1"}); } else { chrome.storage.local.set({"oldDcFix7Localsave": "0"}); };
		if ($("input[name=oldDcFix8]").prop("checked") == true) { chrome.storage.local.set({"oldDcFix8Localsave": "1"}); } else { chrome.storage.local.set({"oldDcFix8Localsave": "0"}); };
		// Find Care DC Fixes
		if ($("input[name=fcFix1]").prop("checked") == true) { chrome.storage.local.set({"fcFix1Localsave": "1"}); } else { chrome.storage.local.set({"fcFix1Localsave": "0"}); };
		// Message DC Fixes
		if ($("input[name=messageFix1]").prop("checked") == true) { chrome.storage.local.set({"messageFix1Localsave": "1"}); } else { chrome.storage.local.set({"messageFix1Localsave": "0"}); };
		if ($("input[name=messageFix2]").prop("checked") == true) { chrome.storage.local.set({"messageFix2Localsave": "1"}); } else { chrome.storage.local.set({"messageFix2Localsave": "0"}); };
		// UHC Insurance Fixes
		if ($("input[name=uhcFix1]").prop("checked") == true) { chrome.storage.local.set({"uhcFix1Localsave": "1"}); } else { chrome.storage.local.set({"uhcFix1Localsave": "0"}); };
		if ($("input[name=uhcFix2]").prop("checked") == true) { chrome.storage.local.set({"uhcFix2Localsave": "1"}); } else { chrome.storage.local.set({"uhcFix2Localsave": "0"}); };
		// Aetna Insurance Fixes
		if ($("input[name=aetnaFix1]").prop("checked") == true) { chrome.storage.local.set({"aetnaFix1Localsave": "1"}); } else { chrome.storage.local.set({"aetnaFix1Localsave": "0"}); };
		// KB Fixes
		if ($("input[name=kbkbFix1]").prop("checked") == true) { chrome.storage.local.set({"kbkbFix1Localsave": "1"}); } else { chrome.storage.local.set({"kbkbFix1Localsave": "0"}); };
		
		//chrome.storage.local.get(['crmFix9Localsave'], function(result) {
		//	alert('Value currently is ' + result.crmFix9Localsave);
		//}); 
		
		//Main Design Sve (1 - def, 2 - dark, 3 - bkack)
		if ($('#sraddefmain').is(':checked')) { chrome.storage.local.set({"sradMainLocalsave": "0"}); }
		else if ($('#sraddefwhite').is(':checked')) { chrome.storage.local.set({"sradMainLocalsave": "1"}); }
		else if ($('#sraddarkmain').is(':checked')) { chrome.storage.local.set({"sradMainLocalsave": "2"}); }
		else if ($('#sradblackmain').is(':checked')) { chrome.storage.local.set({"sradMainLocalsave": "3"}); }
		
		//Accent Design Sve (1 - grey, 2 - blue, 3 - green...)
		if ($('#sradgrey').is(':checked')) { chrome.storage.local.set({"sradAccentLocalsave": "1"}); }
		else if ($('#sradblue').is(':checked')) { chrome.storage.local.set({"sradAccentLocalsave": "2"}); }
		else if ($('#sradgreen').is(':checked')) { chrome.storage.local.set({"sradAccentLocalsave": "3"}); }
		else if ($('#sradyellow').is(':checked')) { chrome.storage.local.set({"sradAccentLocalsave": "4"}); }
		else if ($('#sradred').is(':checked')) { chrome.storage.local.set({"sradAccentLocalsave": "5"}); }
		else if ($('#sradorange').is(':checked')) { chrome.storage.local.set({"sradAccentLocalsave": "6"}); }
		else if ($('#sradpurple').is(':checked')) { chrome.storage.local.set({"sradAccentLocalsave": "7"}); }
		else if ($('#sradpink').is(':checked')) { chrome.storage.local.set({"sradAccentLocalsave": "8"}); }
	} }
}

function level1Fixes() {
	setTimeout( function() {
		if (onceOnlyPls == 1 && $('.profile-info-header-name').text() != "" && $('.profile-info-header-name').text() != null && $('.profile-info-header-name').text() != "null" && $('.profile-info-header-name').text() != "undefined") {
			if (openchatButtonStatus == "1") {
				//Create CRM chat button
				var mmChatLink = ($('button[clipboard]').attr("data-clipboard-text"));
				$('button[clipboard]').parent().parent().append('<a id="openChatButtonBOP" class="profile-info-header-btn btn btn-brand-alert" style="background: green;" target="_blank" href="' + mmChatLink + '">Open Chat</a>');
			}
			if (financedeliveryDownStatus == "1") {
				$('workspace-user-send-panel-directive').append('<ul class="nav nav-tabs nav-tabs-flex" id="bottomNavTabs">');
				$('#bottomNavTabs').append($('a[ng-click="selectTab(\'financial\')"]').parent());
				$('#bottomNavTabs').append($('a[ng-click="selectTab(\'delivery\')"]').parent());
			}
			if (addSearchgroupStatus == "1") {
				document.getElementsByClassName("profile-info-header-plan")[0].setAttribute("id","groupNameAreaBOP");
				var mmGroupLink = ($("#groupNameAreaBOP").children().next().html());
				$('#groupNameAreaBOP').append('| <a id="openChatButtonBOP" target="_blank" href="https://healthjoy.atlassian.net/wiki/search?text=' + mmGroupLink + '">Search group in KB</a> |');
			}
			
			$('workspace-web-view-preview-directive[type="wallet"]').parent().parent().append('<div style="width: 100%; height: 100%" id="insertBenefitsWallet"></div>');
			onceOnlyPls--;
			return;
		}
		else {
			level1Fixes();
		}
	}, 650)
}

function benefitsWalletMagic() {
		setTimeout( function() {
			if ($('workspace-web-view-preview-directive[type="wallet"]').html() != undefined && document.getElementById("insertBenefitsWalletDiv") == null) {
				$('workspace-web-view-preview-directive[type="wallet"]').parent().parent().append('<div style="width: auto; height: auto;" id="insertBenefitsWalletDiv"></div>');
			}
			if ($('workspace-web-view-preview-directive[type="wallet"]').html() != undefined && $('div[class="modal-layout-click-handler ng-scope"]').html() != undefined && document.getElementById("insertedBenefitsWallet") == null) {
				$('div[class="modal-layout-click-handler ng-scope"]').parent().parent().parent().attr("id","walletMovedbgRemoved1");
				$('div[class="modal-layout-click-handler ng-scope"]').attr("id","walletMovedbgRemoved2");
				$('#insertBenefitsWalletDiv').append($('div[class="modal-layout-click-handler ng-scope"]').parent().parent());
				$('#walletMovedbgRemoved1').remove();
				$('#walletMovedbgRemoved2').remove();
				$('#insertBenefitsWalletDiv').children().attr("id","insertedBenefitsWallet");
				$('button[class="btn btn-xs btn-brand-white ng-scope"]').text('Benefits Wallet').remove();
				$('#walletMovedbgRemoved1').remove();
				$('#walletMovedbgRemoved2').remove();
			}
		benefitsWalletMagic();
		}, 750)
}

function logoutMagic() {
		//removes one-click logout and makes you have to click it 3 times to prevent accidental logout and loosing all tkt progress
		$('button:contains("Logout")').parent().removeAttr('ng-click');
		$('button:contains("Logout")').parent().removeAttr('href');
		$('button:contains("Logout")').text('Logout in ' + clicksbeforelogout);
		$('button:contains("Logout")').click(function() { 
			if (clicksbeforelogout<=1) { 
			window.location.href = 'https://crm.healthjoy.com/logout';
			} 
			else if (clicksbeforelogout==2) {
				clicksbeforelogout--;
			$('button:contains("Logout")').text('Logout!');	}
			else { 
			clicksbeforelogout--;
			$('button:contains("Logout")').text('Logout in ' + clicksbeforelogout);
			}
		});
}

//var colorTransparent = "rgba(0, 0, 0, 0)";
//var colorBlackFull = "#000";
//var colorWhiteFull = "#fff";
//var colorBg = "rgb(15, 15, 15)";
//var colorFront = "#dbdbdb";
//var accentBgColor = "#2b1232";
//var accentHoverColor = "#5c1d6e";
//var accentFrontColor = "#8213a1";
/* Bright
var colorBg = "rgb(240, 240, 240)";
var colorFront = "#000";
var accentBgColor = "#8213a1";
var accentHoverColor = "#8213a1";
var accentFrontColor = "#8213a1";
var accent06Color = "rgba(130, 19, 161, 0.6)";
*/

function addCSS(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) {   // IE
        s.styleSheet.cssText = css;
    } else {                // the world
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
}
/*
function addScript(scripta){
    var head = document.getElementsByTagName('head')[0];
    var sc = document.createElement('script');
    sc.appendChild(document.createTextNode(scripta));
    head.appendChild(sc);
}*/