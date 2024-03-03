var $ = window.jQuery;

var extversionzd = "V1.23"

var emptybuttoncode = '<button class="emptybuttonzdpositioner"></button>';
var settingsbuttoncode = '<button id="settingsBtnZdZd" class="settingsBtnZd settingsBtnZdPosition">🩺</button>';
var customzdstylezdcode = '<button id="sunornightZdStyle" class="settingsBtnZd zdlight_toggle_position"> <div class="lightswitch_container"> <label class="zdlight_toggle" for="zdlight_switch"> <input id="zdlight_switch" class="zdlight_toggle_input" type="checkbox"> <div class="zdlight_icon zdlight_icon_moon"> <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path> </svg> </div> <div class="zdlight_icon zdlight_icon_sun"> <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path> </svg> </div> </label></div></button>';
var zdsettingspackage = '<div id="settingsModalZd" class="zdsettings_panel"><button class="zdsettings_center_ver">'+ extversionzd +'</button><button id="close_zdsettings" class="zdsettings_right_close">close</button><button id="zd_custom_design_butt" class="zdsettings_customstyle_btn transparent-h1">Custom ZD Style 🎨</button> <p>More stuff will be available here in the future.</p></div><div id="zdcolor_picket_panel_id" class="zdcolor_picket_panel"><button id="zd_custom_design_save" style="width: 175px; left: 90px; position: absolute;" class="zdsettings_customstyle_btn transparent-h1">💾 SAVE 💾</button> <table style="margin-top: 50px; width: 80%;"> <thead> <tr> <td> <label for="zd_custom_hccjoy_dark_bg">Background: </label><input type="color" id="zd_custom_hccjoy_dark_bg" value="#000000"><br> <label for="zd_custom_hccjoy_dark_bg_front">Background (light): </label><input type="color" id="zd_custom_hccjoy_dark_bg_front" value="#000000"><br> <label for="zd_custom_hccjoy_dark_bg_very_front">Background (lightest): </label><input type="color" id="zd_custom_hccjoy_dark_bg_very_front" value="#000000"> </td> <td> <label for="zd_custom_hccjoy_dark_font">Font: </label><input type="color" id="zd_custom_hccjoy_dark_font" value="#000000"><br> <label for="zd_custom_hccjoy_dark_font_little_darker">Font (darker): </label><input type="color" id="zd_custom_hccjoy_dark_font_little_darker" value="#000000"><br> <label for="zd_custom_hccjoy_dark_font_darker">Font (darkest): </label><input type="color" id="zd_custom_hccjoy_dark_font_darker" value="#000000"> </td> </tr> </thead> <tbody> <tr> <td> <label for="zd_custom_hccjoy_dark_leftbanner">Left Banner: </label><input type="color" id="zd_custom_hccjoy_dark_leftbanner" value="#000000"><br> <label for="zd_custom_hccjoy_dark_internalnote_bg">Internal Note: </label><input type="color" id="zd_custom_hccjoy_dark_internalnote_bg" value="#000000"><br> <label for="zd_custom_hccjoy_dark_publicreply_bg">Public Reply: </label><input type="color" id="zd_custom_hccjoy_dark_publicreply_bg" value="#000000"> </td> <td> <label for="zd_custom_hccjoy_dark_icons">Icons: </label><input type="color" id="zd_custom_hccjoy_dark_icons" value="#000000"><br> <label for="zd_custom_hccjoy_dark_selectedminitab">Selected object: </label><input type="color" id="zd_custom_hccjoy_dark_selectedminitab" value="#000000"> </td> </tr> </tbody> </table> <p class="noteAlt">Using Sun/Moon button in the bottom left corner will reset your custom style</p></div>';


//$(document).ready(function(){
	
//});

(window.onload = function() {
	createSettingsZD1();
	addCSSzd('/* Enforce Hand Up Colors */ .ePSlOa { background: rgb(204, 51, 64) !important; background-color: rgb(204, 51, 64) !important; color: #ffffff !important; }');
})();

function createSettingsZD1() {
	setTimeout( function() {
		if ( $('#settingsBtnZdZd').text() == '🩺') {
			chrome.storage.local.get(['zd_hccjoy_firstlaunch'], function(result) {
				if (result.zd_hccjoy_firstlaunch == null) {
					firstLaunchZd();
				}
			});
			loadSettingsMainZd();
			saveSettingsMainZd();
			cleanStyleCSSZd();
			console.log("Zendesk features enabled by HCCJOY extension");
			return;
		}
		else { console.log("HCCJOY: Waiting for page to load..."); 
		
	$('div[data-test-id="zendesk_icon"]').css("order", "10"); // Make ZD button stay at the bottom
	$('div[data-test-id="zendesk_icon"]').css("margin-top", "unset"); // Make ZD button stay at the bottom
	$('div[data-garden-id="chrome.brandmark_nav_item"]').parent().append(emptybuttoncode).next().next().next().next().next(); // Add ZD HCCJoy Settings Button
	$('div[data-garden-id="chrome.brandmark_nav_item"]').parent().append(settingsbuttoncode).next().next().next().next().next(); // Add ZD HCCJoy Settings Button
	$('div[data-garden-id="chrome.brandmark_nav_item"]').parent().append(customzdstylezdcode).next().next().next().next().next(); // Add ZD HCCJoy Settings Button
	
	$("body").append(zdsettingspackage);
	pushAllViewsZd();

	settingsModalZd = document.getElementById("settingsModalZd");
	settingsBtnZdZd = document.getElementById("settingsBtnZdZd");
	settingsBtnZdcloser = document.getElementById("settingsBtnZdcloser");
	spanSettingsCloser = document.getElementsByClassName("closesettings")[0];

	if (settingsBtnZdZd != null) { settingsBtnZdZd.onclick = function() { if (settingsModalZd.style.display == "block") {settingsModalZd.style.display = "none";} else {settingsModalZd.style.display = "block";}} }
	if (settingsBtnZdZd != null) { close_zdsettings.onclick = function() { settingsModalZd.style.display = "none"; } }
	if (settingsBtnZdZd != null) { zd_custom_design_butt.onclick = function() { settingsModalZd.style.display = "none"; if (zdcolor_picket_panel_id.style.display == "block") {zdcolor_picket_panel_id.style.display = "none";} else {zdcolor_picket_panel_id.style.display = "block";} } }
	if (settingsBtnZdZd != null) { zd_custom_design_save.onclick = function() { zdcolor_picket_panel_id.style.display = "none"; } }
	
	zd_custom_hccjoy_dark_bg = document.getElementById("zd_custom_hccjoy_dark_bg");
	zd_custom_hccjoy_dark_bg_front = document.getElementById("zd_custom_hccjoy_dark_bg_front");
	zd_custom_hccjoy_dark_bg_very_front = document.getElementById("zd_custom_hccjoy_dark_bg_very_front");
	zd_custom_hccjoy_dark_font = document.getElementById("zd_custom_hccjoy_dark_font");
	zd_custom_hccjoy_dark_font_little_darker = document.getElementById("zd_custom_hccjoy_dark_font_little_darker");
	zd_custom_hccjoy_dark_font_darker = document.getElementById("zd_custom_hccjoy_dark_font_darker");
	zd_custom_hccjoy_dark_leftbanner = document.getElementById("zd_custom_hccjoy_dark_leftbanner");
	zd_custom_hccjoy_dark_internalnote_bg = document.getElementById("zd_custom_hccjoy_dark_internalnote_bg");
	zd_custom_hccjoy_dark_publicreply_bg = document.getElementById("zd_custom_hccjoy_dark_publicreply_bg");
	zd_custom_hccjoy_dark_selectedminitab = document.getElementById("zd_custom_hccjoy_dark_selectedminitab");
	zd_custom_hccjoy_dark_publicreply_bg = document.getElementById("zd_custom_hccjoy_dark_publicreply_bg");

	if (settingsBtnZdZd != null) { 
		zd_custom_hccjoy_dark_bg.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_bg": zd_custom_hccjoy_dark_bg.value}); })
		zd_custom_hccjoy_dark_bg.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_bg": zd_custom_hccjoy_dark_bg.value}); })
		zd_custom_hccjoy_dark_bg_front.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_bg_front": zd_custom_hccjoy_dark_bg_front.value}); })
		zd_custom_hccjoy_dark_bg_front.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_bg_front": zd_custom_hccjoy_dark_bg_front.value}); })
		zd_custom_hccjoy_dark_bg_very_front.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_bg_very_front": zd_custom_hccjoy_dark_bg_very_front.value}); })
		zd_custom_hccjoy_dark_bg_very_front.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_bg_very_front": zd_custom_hccjoy_dark_bg_very_front.value}); })
		zd_custom_hccjoy_dark_font.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_font": zd_custom_hccjoy_dark_font.value}); })
		zd_custom_hccjoy_dark_font.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_font": zd_custom_hccjoy_dark_font.value}); })
		zd_custom_hccjoy_dark_font_little_darker.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_font_little_darker": zd_custom_hccjoy_dark_font_little_darker.value}); })
		zd_custom_hccjoy_dark_font_little_darker.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_font_little_darker": zd_custom_hccjoy_dark_font_little_darker.value}); })
		zd_custom_hccjoy_dark_font_darker.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_font_darker": zd_custom_hccjoy_dark_font_darker.value}); })
		zd_custom_hccjoy_dark_font_darker.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_font_darker": zd_custom_hccjoy_dark_font_darker.value}); })
		zd_custom_hccjoy_dark_leftbanner.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_leftbanner": zd_custom_hccjoy_dark_leftbanner.value}); })
		zd_custom_hccjoy_dark_leftbanner.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_leftbanner": zd_custom_hccjoy_dark_leftbanner.value}); })
		zd_custom_hccjoy_dark_internalnote_bg.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_icons": zd_custom_hccjoy_dark_icons.value}); })
		zd_custom_hccjoy_dark_internalnote_bg.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_icons": zd_custom_hccjoy_dark_icons.value}); })
		zd_custom_hccjoy_dark_publicreply_bg.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_internalnote_bg": zd_custom_hccjoy_dark_internalnote_bg.value}); })
		zd_custom_hccjoy_dark_publicreply_bg.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_internalnote_bg": zd_custom_hccjoy_dark_internalnote_bg.value}); })
		zd_custom_hccjoy_dark_selectedminitab.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_selectedminitab": zd_custom_hccjoy_dark_selectedminitab.value}); })
		zd_custom_hccjoy_dark_selectedminitab.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_selectedminitab": zd_custom_hccjoy_dark_selectedminitab.value}); })
		zd_custom_hccjoy_dark_publicreply_bg.addEventListener('input', (event) => { $(":root").css({"--hccjoy_dark_publicreply_bg": zd_custom_hccjoy_dark_publicreply_bg.value}); })
		zd_custom_hccjoy_dark_publicreply_bg.addEventListener('change', (event) => { chrome.storage.local.set({"saved_hccjoy_dark_publicreply_bg": zd_custom_hccjoy_dark_publicreply_bg.value}); })
	}
		createSettingsZD1(); }
	}, 500)
}

function firstLaunchZd() {
	$(":root").css({"--hccjoy_dark_bg": "#ffffff"}); // Fix transparent tab background
	$(":root").css({"--hccjoy_dark_bg_front": "#f8f9f9"}); // TODO
	$(":root").css({"--hccjoy_dark_bg_very_front": "#d8dcde"});// Fix blue borders
	$(":root").css({"--hccjoy_dark_font": "#2f3941"}); // Fix text links
	$(":root").css({"--hccjoy_dark_font_little_darker": "#68737D"});
	$(":root").css({"--hccjoy_dark_font_darker": "#C2C8CC"});
	$(":root").css({"--hccjoy_dark_leftbanner": "#cc40f6"});
	$(":root").css({"--hccjoy_dark_icons": "#2f3941"});
	$(":root").css({"--hccjoy_dark_internalnote_bg": "#fff7ed"});
	$(":root").css({"--hccjoy_dark_selectedminitab": "#E9EBED"});
	$(":root").css({"--hccjoy_dark_publicreply_bg": "#ffffff"});
	chrome.storage.local.set({"saved_hccjoy_dark_bg": "#ffffff"});
	chrome.storage.local.set({"saved_hccjoy_dark_bg_front": "#f8f9f9"});
	chrome.storage.local.set({"saved_hccjoy_dark_bg_very_front": "#d8dcde"});
	chrome.storage.local.set({"saved_hccjoy_dark_font": "#2f3941"});
	chrome.storage.local.set({"saved_hccjoy_dark_font_little_darker": "#68737D"});
	chrome.storage.local.set({"saved_hccjoy_dark_font_darker": "#C2C8CC"});
	chrome.storage.local.set({"saved_hccjoy_dark_leftbanner": "#cc40f6"});
	chrome.storage.local.set({"saved_hccjoy_dark_icons": "#2f3941"});
	chrome.storage.local.set({"saved_hccjoy_dark_internalnote_bg": "#fff7ed"});
	chrome.storage.local.set({"saved_hccjoy_dark_selectedminitab": "#E9EBED"});
	chrome.storage.local.set({"saved_hccjoy_dark_publicreply_bg": "#ffffff"});
	$("#zd_custom_hccjoy_dark_bg").val("#ffffff");
	$("#zd_custom_hccjoy_dark_bg_front").val("#f8f9f9");
	$("#zd_custom_hccjoy_dark_bg_very_front").val("#d8dcde");
	$("#zd_custom_hccjoy_dark_font").val("#2f3941");
	$("#zd_custom_hccjoy_dark_font_little_darker").val("#68737D");
	$("#zd_custom_hccjoy_dark_font_darker").val("#C2C8CC");
	$("#zd_custom_hccjoy_dark_leftbanner").val("#cc40f6");
	$("#zd_custom_hccjoy_dark_icons").val("#2f3941");
	$("#zd_custom_hccjoy_dark_internalnote_bg").val("#fff7ed");
	$("#zd_custom_hccjoy_dark_selectedminitab").val("#E9EBED");
	$("#zd_custom_hccjoy_dark_publicreply_bg").val("#ffffff");
	chrome.storage.local.set({"zd_hccjoy_firstlaunch": "passed"});
}
function loadSettingsMainZd() {
	
	if (chrome.storage.local.get("saved_hccjoy_dark_bg") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_bg'], function(result) {
			$(":root").css({"--hccjoy_dark_bg": result.saved_hccjoy_dark_bg});
			$("#zd_custom_hccjoy_dark_bg").val(result.saved_hccjoy_dark_bg);
		});
	} else { $(":root").css({"--hccjoy_dark_bg_front": "#ffffff"}); $("#zd_custom_hccjoy_dark_bg").val("#ffffff");}
	if (chrome.storage.local.get("saved_hccjoy_dark_bg_front") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_bg_front'], function(result) {
			$(":root").css({"--hccjoy_dark_bg_front": result.saved_hccjoy_dark_bg_front});
			$("#zd_custom_hccjoy_dark_bg_front").val(result.saved_hccjoy_dark_bg_front);
		});
	} else { $(":root").css({"--hccjoy_dark_bg_front": "#f8f9f9"}); $("#zd_custom_hccjoy_dark_bg_front").val("#f8f9f9"); }
	if (chrome.storage.local.get("saved_hccjoy_dark_bg_very_front") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_bg_very_front'], function(result) {
			$(":root").css({"--hccjoy_dark_bg_very_front": result.saved_hccjoy_dark_bg_very_front});
			$("#zd_custom_hccjoy_dark_bg_very_front").val(result.saved_hccjoy_dark_bg_very_front);
		});
	} else { $(":root").css({"--hccjoy_dark_bg_very_front": "#d8dcde"}); $("#zd_custom_hccjoy_dark_bg_very_front").val("#d8dcde");}
	if (chrome.storage.local.get("saved_hccjoy_dark_font") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_font'], function(result) {
			$(":root").css({"--hccjoy_dark_font": result.saved_hccjoy_dark_font});
			$("#zd_custom_hccjoy_dark_font").val(result.saved_hccjoy_dark_font);
		});
	} else { $(":root").css({"--hccjoy_dark_font": "#2f3941"}); $("#zd_custom_hccjoy_dark_font").val("#2f3941"); }
	if (chrome.storage.local.get("saved_hccjoy_dark_font_little_darker") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_font_little_darker'], function(result) {
			$(":root").css({"--hccjoy_dark_font_little_darker": result.saved_hccjoy_dark_font_little_darker});
			$("#zd_custom_hccjoy_dark_font_little_darker").val(result.saved_hccjoy_dark_font_little_darker);
		});
	} else { $(":root").css({"--hccjoy_dark_font_little_darker": "#68737D"}); $("#zd_custom_hccjoy_dark_font_little_darker").val("#68737D");}
	if (chrome.storage.local.get("saved_hccjoy_dark_font_darker") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_font_darker'], function(result) {
			$(":root").css({"--hccjoy_dark_font_darker": result.saved_hccjoy_dark_font_darker});
			$("#zd_custom_hccjoy_dark_font_darker").val(result.saved_hccjoy_dark_font_darker);
		});
	} else { $(":root").css({"--hccjoy_dark_font_darker": "#C2C8CC"}); $("#zd_custom_hccjoy_dark_font_darker").val("#C2C8CC");}
	if (chrome.storage.local.get("saved_hccjoy_dark_leftbanner") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_leftbanner'], function(result) {
			$(":root").css({"--hccjoy_dark_leftbanner": result.saved_hccjoy_dark_leftbanner});
			$("#zd_custom_hccjoy_dark_leftbanner").val(result.saved_hccjoy_dark_leftbanner);
		});
	} else { $(":root").css({"--hccjoy_dark_leftbanner": "#cc40f6"}); $("#zd_custom_hccjoy_dark_leftbanner").val("#cc40f6");}
	if (chrome.storage.local.get("saved_hccjoy_dark_icons") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_icons'], function(result) {
			$(":root").css({"--hccjoy_dark_icons": result.saved_hccjoy_dark_icons});
			$("#zd_custom_hccjoy_dark_icons").val(result.saved_hccjoy_dark_icons);
		});
	} else { $(":root").css({"--hccjoy_dark_icons": "#2f3941"}); $("#zd_custom_hccjoy_dark_icons").val("#2f3941");}
	if (chrome.storage.local.get("saved_hccjoy_dark_internalnote_bg") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_internalnote_bg'], function(result) {
			$(":root").css({"--hccjoy_dark_internalnote_bg": result.saved_hccjoy_dark_internalnote_bg});
			$("#zd_custom_hccjoy_dark_internalnote_bg").val(result.saved_hccjoy_dark_internalnote_bg);
		});
	} else { $(":root").css({"--hccjoy_dark_internalnote_bg": "#fff7ed"}); $("#zd_custom_hccjoy_dark_internalnote_bg").val("#fff7ed");}
	if (chrome.storage.local.get("saved_hccjoy_dark_selectedminitab") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_selectedminitab'], function(result) {
			$(":root").css({"--hccjoy_dark_selectedminitab": result.saved_hccjoy_dark_selectedminitab});
			$("#zd_custom_hccjoy_dark_selectedminitab").val(result.saved_hccjoy_dark_selectedminitab);
		});
	} else { $(":root").css({"--hccjoy_dark_selectedminitab": "#E9EBED"}); $("#zd_custom_hccjoy_dark_selectedminitab").val("#E9EBED");}
	if (chrome.storage.local.get("saved_hccjoy_dark_publicreply_bg") != null) {
		chrome.storage.local.get(['saved_hccjoy_dark_publicreply_bg'], function(result) {
			$(":root").css({"--hccjoy_dark_publicreply_bg": result.saved_hccjoy_dark_publicreply_bg});
			$("#zd_custom_hccjoy_dark_publicreply_bg").val(result.saved_hccjoy_dark_publicreply_bg);
		});
	} else { $(":root").css({"--hccjoy_dark_publicreply_bg": "#ffffff"}); $("#zd_custom_hccjoy_dark_publicreply_bg").val("#ffffff");}

	if ($(":root").css("--hccjoy_dark_bg") == "#141617") {
		$('#zdlight_switch').prop('checked', false); 
	} else { $('#zdlight_switch').prop('checked', true); }

}

function saveSettingsMainZd() {
	/*
	if (settingsBtnZdcloser != null) { settingsBtnZdcloser.onclick = function() { settingsModalZd.style.display = "none"; 
		if ($("input[name=chatFix1]").prop("checked") == true) { chrome.storage.local.set({"chatFix1Localsave": "1"}); } else { chrome.storage.local.set({"chatFix1Localsave": "0"}); };
		if ($("input[name=chatFix2]").prop("checked") == true) { chrome.storage.local.set({"crmFix7Localsave": "1"}); } else { chrome.storage.local.set({"crmFix7Localsave": "0"}); };
		if ($("input[name=chatFix3]").prop("checked") == true) { chrome.storage.local.set({"crmFix2Localsave": "1"}); } else { chrome.storage.local.set({"crmFix2Localsave": "0"}); };
		if ($("input[name=chatFix4]").prop("checked") == true) { chrome.storage.local.set({"crmFix5Localsave": "1"}); } else { chrome.storage.local.set({"crmFix5Localsave": "0"}); };
		if ($("input[name=chatFix5]").prop("checked") == true) { chrome.storage.local.set({"crmFix4Localsave": "1"}); } else { chrome.storage.local.set({"crmFix4Localsave": "0"}); };
		
		if (document.getElementById("chatwhitedes").hidden == false) { chrome.storage.local.set({"desChatMainLocalsave": "1"}); }
		else if (document.getElementById("chatbluedes").hidden == false) { chrome.storage.local.set({"desChatMainLocalsave": "2"}); }
		else if (document.getElementById("chatblackdes").hidden == false) { chrome.storage.local.set({"desChatMainLocalsave": "3"}); }
	} }
	*/
}

function pushAllViewsZd() {
	setTimeout( function() {
		if (window.location.pathname.indexOf("agent/filters") === 1 & document.getElementById("allViewsAreaZd") === null ) {
			$('div[data-garden-id="accordions.accordion"]').append('<div data-garden-id="accordions.section" data-garden-version="8.50.0" data-test-id="views_views-list_accordion_section" class="StyledSection-sc-v2t9bd-0 jjQhzx"><div data-garden-id="accordions.header" data-garden-version="8.50.0" role="heading" aria-level="4" data-garden-container-id="containers.accordion" data-garden-container-version="1.0.5" data-test-id="views_views-list_accordion_header" class="StyledHeader-sc-2c6rbr-0 iRqNez"><button data-garden-id="accordions.button" data-garden-version="8.50.0" id="buttonToHideSHowViewsZd" role="button" tabindex="0" aria-controls="13val-accordion_1.0.5--panel:1" aria-disabled="false" aria-expanded="true" type="button" data-test-id="views_views-list_accordion_label" class="sc-90e4mp-1 kjlhgA StyledButton-sc-xj3hy7-0 dDXOFd">All Views (click to show/hide)</button></div><section data-garden-id="accordions.panel" data-garden-version="8.50.0" aria-hidden="false" aria-labelledby="13val-accordion_1.0.5--trigger:1" data-test-id="views_views-list_accordion_panel" class="sc-90e4mp-2 jjCYgz StyledPanel-sc-1piryze-0 iueNeY"><div id="sectionAllViewsHiding" data-garden-id="accordions.step_inner_panel" data-garden-version="8.50.0" class="StyledInnerPanel-sc-8nbueg-0 gWpgrL"><ul id="allViewsAreaZd" data-test-id="views_views-list_personal-views-container" class="sc-19hyh7c-0 dIEMiO"></ul></div></section></div>').next().next();
			//allViewsAreaZd sectionAllViewsHiding buttonToHideSHowViewsZd
			buttonToHideSHowViewsZd.onclick = function() { if (document.getElementById("sectionAllViewsHiding").hidden === true) {document.getElementById("sectionAllViewsHiding").hidden = false; chrome.storage.local.set({"all_views_zd_status_hccjoy": "shown"});} else {document.getElementById("sectionAllViewsHiding").hidden = true; chrome.storage.local.set({"all_views_zd_status_hccjoy": "hidden"});}}
			
			// MS - Voicemails
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="17799322806043" href="/agent/filters/17799322806043" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="14val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Voicemails</div></a></li>');
			// MS - All MS Ticket View via Email
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="17673026663579" href="/agent/filters/17673026663579" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="16val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - All MS Ticket View via Email</div></a></li>');
			// MS - Inbound SMS / Text Communications
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="17807228358043" href="/agent/filters/17807228358043" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="18val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Inbound SMS / Text Communications</div></a></li>');
			// MS - Manager - Missed Chats
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19708775688859" href="/agent/filters/19708775688859" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="20val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Manager - Missed Chats</div></a></li>');
			// MS - Health Goal tickets MSK
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18005503497243" href="/agent/filters/18005503497243" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="22val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Health Goal tickets MSK</div></a></li>');
			// MS - All Health-Goal Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="17108471645723" href="/agent/filters/17108471645723" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="24val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - All Health-Goal Tickets</div></a></li>');
			// MS - Medical and Dental  Card Attachment Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="17231965436571" href="/agent/filters/17231965436571" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="26val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Medical&amp;Dental  Card Attachment Tickets</div></a></li>');
			// MS - Medical Consultations
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="20544375615899" href="/agent/filters/20544375615899" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="24val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Medical Consultations</div></a></li>');
			// MS - Telemed2PCP Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="20486392449819" href="/agent/filters/20486392449819" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="24val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Telemed2PCP Tickets</div></a></li>');
			// ALL Unsolved MS Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="14669087483035" href="/agent/filters/14669087483035" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="28val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">ALL Unsolved MS Tickets</div></a></li>');
			// ALL Unsolved MS-Default FORM Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="17674282774043" href="/agent/filters/17674282774043" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="30val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">ALL Unsolved MS-Default FORM Tickets</div></a></li>');
			// MS - MG: Find Care Feedback
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19457575144731" href="/agent/filters/19457575144731" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="32val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - MG: Find Care Feedback</div></a></li>');
			// MS - Unchecked Feedback Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="16924904415387" href="/agent/filters/16924904415387" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="34val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Unchecked Feedback Tickets</div></a></li>');
			// MS - TSAT Unchecked Feedback Tickets OR MS: All Feedback Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19324151619611" href="/agent/filters/19324151619611" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="36val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: All Feedback Tickets</div></a></li>');
			// MS - Solved & Closed Feedback Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19323408079387" href="/agent/filters/19323408079387" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="38val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Solved &amp; Closed Feedback Tickets</div></a></li>');
			// MS - All Rewards Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19865432658203" href="/agent/filters/19865432658203" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="40val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - All Rewards Tickets</div></a></li>');
			// MS: Outbound Calls
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19398006967195" href="/agent/filters/19398006967195" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="44val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Outbound Calls</div></a></li>');
			// MS: Inbound Calls
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19784053127963" href="/agent/filters/19784053127963" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="354val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Inbound Calls</div></a></li>');
			// MS - MG: In-App Feedback
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19834408626459" href="/agent/filters/19834408626459" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="356val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - MG: In-App Feedback</div></a></li>');
			// MS - MG: Cancelled BH Consults
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="20107557387675" href="/agent/filters/20107557387675" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="358val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - MG: Cancelled BH Consults</div></a></li>');
			// MS: TSAT Very Helpful
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19380596005019" href="/agent/filters/19380596005019" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="561val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: TSAT Very Helpful</div></a></li>');
			// MS: TSAT Helpful
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19370488708507" href="/agent/filters/19370488708507" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="563val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: TSAT Helpful</div></a></li>');
			// MS: TSAT Not Helpful
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19377627215131" href="/agent/filters/19377627215131" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="565val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: TSAT Not Helpful</div></a></li>');
			// MS: CSAT Very Satisfied
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19380160853019" href="/agent/filters/19380160853019" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="567val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: CSAT Very Satisfied</div></a></li>');
			// MS: CSAT Satisfied
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19379665634331" href="/agent/filters/19379665634331" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="569val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: CSAT Satisfied</div></a></li>');
			// MS: CSAT Dissatisfied
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19380221391899" href="/agent/filters/19380221391899" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="571val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: CSAT Dissatisfied</div></a></li>');
			// MS: CSAT Very Dissatisfied
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19380239667355" href="/agent/filters/19380239667355" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="573val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: CSAT Very Dissatisfied</div></a></li>');
			// MS: CSAT No rating
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19380273420699" href="/agent/filters/19380273420699" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="575val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: CSAT No rating</div></a></li>');
			// Find Care Satisfaction Survey
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19692145826715" href="/agent/filters/19692145826715" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="577val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">Find Care Satisfaction Survey</div></a></li>');
			// MS: All Message Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18723347694107" href="/agent/filters/18723347694107" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="813val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: All Message Tickets</div></a></li>');
			// MS: RX - New Tickets (№ Based)
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="20090487365275" href="/agent/filters/20090487365275" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="815val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: RX - New Tickets (№ Based)</div></a></li>');
			// MS: RX - New Tickets (v2.0)
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="20078989887771" href="/agent/filters/20078989887771" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="817val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: RX - New Tickets</div></a></li>');
			// MS: RX Savings - VIP
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18773701321883" href="/agent/filters/18773701321883" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="819val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: RX Savings - VIP</div></a></li>');
			// MS: RX Savings - Active Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19437201525147" href="/agent/filters/19437201525147" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="821val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: RX Savings - Active Tickets</div></a></li>');
			// MS: RX Savings - Feedback Tickets (10 days)
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19691216707867" href="/agent/filters/19691216707867" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="823val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: RX Savings - Feedback Tickets (10 days)</div></a></li>');
			// MS: RX Savings - Finished Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18505019901851" href="/agent/filters/18505019901851" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="825val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: RX Savings - Finished Tickets</div></a></li>');
			// MS: ParetoHealth - New Tkts 11/1
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="20034385208347" href="/agent/filters/20034385208347" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="827val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: ParetoHealth - New Tkts</div></a></li>');
			// MS: Find Care - Alt: False (temporary disabled)
			/*
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19491675686683" href="/agent/filters/19491675686683" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1129val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Find Care - Alt: False</div></a></li>');
			// MS: Critical 3+
			*/
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18773556803483" href="/agent/filters/18773556803483" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1131val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Critical 3+</div></a></li>');
			// MS: Critical lessthan3
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18918154326171" href="/agent/filters/18918154326171" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1133val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Critical &lt;3</div></a></li>');
			// MS: VIP
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18772047809307" href="/agent/filters/18772047809307" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1135val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: VIP</div></a></li>');
			// MS: Normal - OOSLA
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18942420443803" href="/agent/filters/18942420443803" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1141val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Normal - OOSLA</div></a></li>');
			// MS: Normal 7-24h
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18942231398171" href="/agent/filters/18942231398171" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1143val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Normal 7-24h</div></a></li>');
			// MS: Normal lessthan7
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18942287829915" href="/agent/filters/18942287829915" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1145val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Normal &lt;7</div></a></li>');
			// MS: Appointments
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18371092482331" href="/agent/filters/18371092482331" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1147val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Appointments</div></a></li>');
			// MS: Messages - OOSLA
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18944168674843" href="/agent/filters/18944168674843" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1149val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Messages - OOSLA</div></a></li>');
			// MS: Messages 7-23h
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18944117512219" href="/agent/filters/18944117512219" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1151val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Messages 7-23h</div></a></li>');
			// MS: HV Procedures - OOSLA
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18943556324891" href="/agent/filters/18943556324891" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1155val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: HV Procedures - OOSLA</div></a></li>');
			// MS: HV Procedures lessthan24
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18922474291483" href="/agent/filters/18922474291483" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1157val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: HV Procedures &lt;24</div></a></li>');
			// HV: Procedures Precert - OOSLA
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18942831331355" href="/agent/filters/18942831331355" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1159val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">HV: Procedures Precert - OOSLA</div></a></li>');
			// HV: Procedures Precert lessthan24
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18942658187803" href="/agent/filters/18942658187803" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="1161val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">HV: Procedures Precert &lt;24</div></a></li>');
			// MS: Training UA - Ticket Review
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19515342386715" href="/agent/filters/19515342386715" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3216val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Training UA - Ticket Review</div></a></li>');
			// MS: Training Quafon - Ticket Review
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19423133639707" href="/agent/filters/19423133639707" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3218val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Training Quafon - Ticket Review</div></a></li>');
			// MS: Tickets From Chat (test)
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19491946064411" href="/agent/filters/19491946064411" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3222val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Tickets From Chat (test)</div></a></li>');
			// MS - Tickets for review (all)
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19190533573531" href="/agent/filters/19190533573531" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3224val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Tickets for review (all)</div></a></li>');
			// Jaime - ALL Unsolved Bill Review Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18350403238811" href="/agent/filters/18350403238811" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3653val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">Jaime - ALL Unsolved Bill Review Tickets</div></a></li>');
			// MS - Bill Review New Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="20607447196955" href="/agent/filters/20607447196955" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3655val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Bill Review New Tickets</div></a></li>');
			// MS - Bill Review Active Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="15720132019483" href="/agent/filters/15720132019483" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3655val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Bill Review Active Tickets</div></a></li>');
			// MS - Bill Review - Priority Queue
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="17071602030491" href="/agent/filters/17071602030491" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3657val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Bill Review - Priority Queue</div></a></li>');
			// MS - Rapid Bill Review Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="17429872045851" href="/agent/filters/17429872045851" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3659val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Rapid Bill Review Tickets</div></a></li>');
			// MS - Bill Review - Savings Unknown Hold Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="16958311288603" href="/agent/filters/16958311288603" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3661val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Bill Review - Savings Unknown Hold Tickets</div></a></li>');
			// MS - Bill Review - Appointment Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="16997365682843" href="/agent/filters/16997365682843" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3663val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Bill Review - Appointment Tickets</div></a></li>');
			// MS: All Message Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="18723347694107" href="/agent/filters/18723347694107" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3665val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: All Message Tickets</div></a></li>');
			// MS: TSAT Very Helpful (BR)
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19455847374875" href="/agent/filters/19455847374875" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3667val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: TSAT Very Helpful (BR)</div></a></li>');
			// MS: TSAT Helpful (BR)
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19455865834395" href="/agent/filters/19455865834395" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3669val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: TSAT Helpful (BR)</div></a></li>');
			// MS: TSAT Not Helpful (BR)
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19455957535259" href="/agent/filters/19455957535259" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3673val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: TSAT Not Helpful (BR)</div></a></li>');
			// MS: All Bill Review Feedback
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="20474906934555" href="/agent/filters/20474906934555" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3673val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: All Bill Review Feedback</div></a></li>');
			// MS - Bill Review ALL CLOSED Tickets
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="16997393907355" href="/agent/filters/16997393907355" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="3671val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS - Bill Review ALL CLOSED Tickets</div></a></li>');
			// MS: Heartland Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19420543982235" href="/agent/filters/19420543982235" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="895val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Heartland Dental - New Tkts</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19435064942235" href="/agent/filters/19435064942235" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="897val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Heartland - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19376235175579" href="/agent/filters/19376235175579" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="899val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Heartland - Ticket Review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19690359737755" href="/agent/filters/19690359737755" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="907val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Heartland - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19691166295451" href="/agent/filters/19691166295451" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="909val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Heartland - Solved Tickets</div></a></li>');
			// MS: Team 1 Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19348528651547" href="/agent/filters/19348528651547" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="17val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 1 - Ticket Review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19425935014043" href="/agent/filters/19425935014043" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="19val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 1 - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19682163781531" href="/agent/filters/19682163781531" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="21val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 1 - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19680813803035" href="/agent/filters/19680813803035" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="23val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 1 - Solved Tickets</div></a></li>');
			// MS: Team 2 Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19340130961179" href="/agent/filters/19340130961179" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="368val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 2 - Ticket Review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19426006927515" href="/agent/filters/19426006927515" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="370val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 2 - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19683301554587" href="/agent/filters/19683301554587" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="372val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 2 - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19680470374171" href="/agent/filters/19680470374171" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="374val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 2 - Solved Tickets</div></a></li>');
			// MS: Team 3 Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19348435971099" href="/agent/filters/19348435971099" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="17val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 3 - Ticket Review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19428846085403" href="/agent/filters/19428846085403" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="19val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 3 - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19641860457243" href="/agent/filters/19641860457243" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="23val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 3 - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19522204988443" href="/agent/filters/19522204988443" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="25val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 3 - Solved Tickets</div></a></li>');
			// MS: Team Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19424334488987" href="/agent/filters/19424334488987" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="17val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 4 - Ticket Review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19430146812699" href="/agent/filters/19430146812699" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="19val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 4 - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19688108026523" href="/agent/filters/19688108026523" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="21val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 4 - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19514832454427" href="/agent/filters/19514832454427" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="23val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 4 - Solved Tickets</div></a></li>');
			// MS: Team 6 Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19297113355803" href="/agent/filters/19297113355803" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="284val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 6 - Tickets review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19430234471579" href="/agent/filters/19430234471579" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="286val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 6 - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19688211126683" href="/agent/filters/19688211126683" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="288val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 6 - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19680963001627" href="/agent/filters/19680963001627" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="290val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Team 6 - Solved Tickets</div></a></li>');
			// MS: HV Team Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19310048548123" href="/agent/filters/19310048548123" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="498val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: HV Team - Ticket Review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19447377415195" href="/agent/filters/19447377415195" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="500val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: HV Team - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19690538950683" href="/agent/filters/19690538950683" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="538val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: HV Team - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19690666661403" href="/agent/filters/19690666661403" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="540val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: HV Team - Solved Tickets</div></a></li>');
			// MS: Qualfon #1 Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19379886188059" href="/agent/filters/19379886188059" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="16val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #1 - Ticket Review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19434774505371" href="/agent/filters/19434774505371" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="22val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #1 - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19689935868571" href="/agent/filters/19689935868571" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="30val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #1 - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19681149447835" href="/agent/filters/19681149447835" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="32val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #1 - Solved Tickets</div></a></li>');
			// MS: Qualfon #2 Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19380197389467" href="/agent/filters/19380197389467" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="18val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #2 - Ticket Review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19434919990171" href="/agent/filters/19434919990171" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="24val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #2 - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19690222749979" href="/agent/filters/19690222749979" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="34val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #2 - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19681312787099" href="/agent/filters/19681312787099" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="36val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #2 - Solved Tickets</div></a></li>');
			// MS: Qualfon #3 Views
			$('#allViewsAreaZd').append('<li><a data-test-id="views_views-list_row" data-view-id="19380317869211" href="/agent/filters/19380317869211" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="20val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #3 - Ticket Review</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19435023473819" href="/agent/filters/19435023473819" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="26val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #3 - Active Tickets</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19690312051227" href="/agent/filters/19690312051227" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="38val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #3 - Feedback Tickets (10 days)</div></a></li><li><a data-test-id="views_views-list_row" data-view-id="19681410748059" href="/agent/filters/19681410748059" dir="ltr" class="sc-q23o7j-1 czaCOI"><div data-test-id="views_views-list_row_title" tabindex="0" aria-describedby="40val-tooltip_1.0.6" data-garden-container-id="containers.tooltip" data-garden-container-version="1.0.6" class="sc-1yrx2v-0 kPRSAK">MS: Qualfon #3 - Solved Tickets</div></a></li>');
			
			// $('#allViewsAreaZd').append('');
			if (chrome.storage.local.get("all_views_zd_status_hccjoy") != null) {
				chrome.storage.local.get(['all_views_zd_status_hccjoy'], function(result) {
					if (result.all_views_zd_status_hccjoy != null & result.all_views_zd_status_hccjoy == "hidden") {
						document.getElementById("sectionAllViewsHiding").hidden = true;
					}
				});
			}
		} else { pushAllViewsZd(); }
	}, 2000)
}

function cleanStyleCSSZd() {
	if (sunornightZdStyle != null) { zdlight_switch.addEventListener('input', (event) => {
		if (event.currentTarget.checked) {
			$(":root").css({"--hccjoy_dark_bg": "#ffffff"}); // Fix transparent tab background
			$(":root").css({"--hccjoy_dark_bg_front": "#f8f9f9"}); // TODO
			$(":root").css({"--hccjoy_dark_bg_very_front": "#d8dcde"});// Fix blue borders
			$(":root").css({"--hccjoy_dark_font": "#2f3941"}); // Fix text links
			$(":root").css({"--hccjoy_dark_font_little_darker": "#68737D"});
			$(":root").css({"--hccjoy_dark_font_darker": "#C2C8CC"});
			$(":root").css({"--hccjoy_dark_leftbanner": "#cc40f6"});
			$(":root").css({"--hccjoy_dark_icons": "#2f3941"});
			$(":root").css({"--hccjoy_dark_internalnote_bg": "#fff7ed"});
			$(":root").css({"--hccjoy_dark_selectedminitab": "#E9EBED"});
			$(":root").css({"--hccjoy_dark_publicreply_bg": "#ffffff"});
			chrome.storage.local.set({"saved_hccjoy_dark_bg": "#ffffff"});
			chrome.storage.local.set({"saved_hccjoy_dark_bg_front": "#f8f9f9"});
			chrome.storage.local.set({"saved_hccjoy_dark_bg_very_front": "#d8dcde"});
			chrome.storage.local.set({"saved_hccjoy_dark_font": "#2f3941"});
			chrome.storage.local.set({"saved_hccjoy_dark_font_little_darker": "#68737D"});
			chrome.storage.local.set({"saved_hccjoy_dark_font_darker": "#C2C8CC"});
			chrome.storage.local.set({"saved_hccjoy_dark_leftbanner": "#cc40f6"});
			chrome.storage.local.set({"saved_hccjoy_dark_icons": "#2f3941"});
			chrome.storage.local.set({"saved_hccjoy_dark_internalnote_bg": "#fff7ed"});
			chrome.storage.local.set({"saved_hccjoy_dark_selectedminitab": "#E9EBED"});
			chrome.storage.local.set({"saved_hccjoy_dark_publicreply_bg": "#ffffff"});
			$("#zd_custom_hccjoy_dark_bg").val("#ffffff");
			$("#zd_custom_hccjoy_dark_bg_front").val("#f8f9f9");
			$("#zd_custom_hccjoy_dark_bg_very_front").val("#d8dcde");
			$("#zd_custom_hccjoy_dark_font").val("#2f3941");
			$("#zd_custom_hccjoy_dark_font_little_darker").val("#68737D");
			$("#zd_custom_hccjoy_dark_font_darker").val("#C2C8CC");
			$("#zd_custom_hccjoy_dark_leftbanner").val("#cc40f6");
			$("#zd_custom_hccjoy_dark_icons").val("#2f3941");
			$("#zd_custom_hccjoy_dark_internalnote_bg").val("#fff7ed");
			$("#zd_custom_hccjoy_dark_selectedminitab").val("#E9EBED");
			$("#zd_custom_hccjoy_dark_publicreply_bg").val("#ffffff");
		} else {
			$(":root").css({"--hccjoy_dark_bg": "#141617"});
			$(":root").css({"--hccjoy_dark_bg_front": "#292c2e"});
			$(":root").css({"--hccjoy_dark_bg_very_front": "#454749"});
			$(":root").css({"--hccjoy_dark_font": "#c5c3c1"});
			$(":root").css({"--hccjoy_dark_font_little_darker": "#909090"});
			$(":root").css({"--hccjoy_dark_font_darker": "#484e52"});
			$(":root").css({"--hccjoy_dark_leftbanner": "#3f0457"});
			$(":root").css({"--hccjoy_dark_icons": "#c5c3c1"});
			$(":root").css({"--hccjoy_dark_internalnote_bg": "#4e3311"});
			$(":root").css({"--hccjoy_dark_selectedminitab": "#454749"});
			$(":root").css({"--hccjoy_dark_publicreply_bg": "#292c2e"});
			chrome.storage.local.set({"saved_hccjoy_dark_bg": "#141617"});
			chrome.storage.local.set({"saved_hccjoy_dark_bg_front": "#292c2e"});
			chrome.storage.local.set({"saved_hccjoy_dark_bg_very_front": "#454749"});
			chrome.storage.local.set({"saved_hccjoy_dark_font": "#c5c3c1"});
			chrome.storage.local.set({"saved_hccjoy_dark_font_little_darker": "#909090"});
			chrome.storage.local.set({"saved_hccjoy_dark_font_darker": "#484e52"});
			chrome.storage.local.set({"saved_hccjoy_dark_leftbanner": "#3f0457"});
			chrome.storage.local.set({"saved_hccjoy_dark_icons": "#c5c3c1"});
			chrome.storage.local.set({"saved_hccjoy_dark_internalnote_bg": "#4e3311"});
			chrome.storage.local.set({"saved_hccjoy_dark_selectedminitab": "#454749"});
			chrome.storage.local.set({"saved_hccjoy_dark_publicreply_bg": "#292c2e"});
			$("#zd_custom_hccjoy_dark_bg").val("#141617");
			$("#zd_custom_hccjoy_dark_bg_front").val("#292c2e");
			$("#zd_custom_hccjoy_dark_bg_very_front").val("#454749");
			$("#zd_custom_hccjoy_dark_font").val("#c5c3c1");
			$("#zd_custom_hccjoy_dark_font_little_darker").val("#909090");
			$("#zd_custom_hccjoy_dark_font_darker").val("#484e52");
			$("#zd_custom_hccjoy_dark_leftbanner").val("#3f0457");
			$("#zd_custom_hccjoy_dark_icons").val("#c5c3c1");
			$("#zd_custom_hccjoy_dark_internalnote_bg").val("#4e3311");
			$("#zd_custom_hccjoy_dark_selectedminitab").val("#454749");
			$("#zd_custom_hccjoy_dark_publicreply_bg").val("#292c2e");
		}
	})}
}

function addCSSzd(css){
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