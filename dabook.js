var $ = window.jQuery;

var greetnotesModal;
var bookSelectorBtn;
var greetnotesBtncloser;

(window.onload = function() {
	
	notesInitInjector();
	fillWIthNotes();
	injectSriptsforNotes();
	
})();

function fillWIthNotes() {
	$("body").append(
	'<div id="greetnotesModal" class="greetnnotesModalcss"> <div class="modal-content-css-greetnotes"> <span><button style="background: #000000; color: violet; border: 1px solid Violet; width: 20px;" id="notesfaqbut"> ? </button> Smart notes: <input type="checkbox" id="smartnotesstatus" style="transform : scale(2);"> <span id="hccnameblockid" style="padding-left: 3px;" hidden>HCC Name: <input type="text" id="hccnameboxid" name="hccnamebox" class="hccnameclas" size="10" style="max-width: 80px; height: 20px;"> </span> </span> <span id="greetnotesBtncloser" class="greetnotesecselec">Close</span> <!-- Main Design --> <br><br> <span class="shortcutsmartnotes" id="smartnotesfaq" hidden>Replaces [TAG] in the note with dynamic information if smart notes are enabled. <br>[HCC] - Will paste name of HCC, [MEMBER] - Will paste name from member profile, <br>[DATE] - Will paste today\'s date, [RATING] - Will paste calculated sum of ratings only (x.xxx)<br>[RATINGS] - Will paste full text line with total sum (ex.: G [5/23] HG [3/23] = 4)</span> <span class="ratings"> <br> <input type="number" id="gstars" placeholder="☆ - Google" step="0.1" min="0" max="5"> / <input type="number" id="gcount" placeholder="№ - Google" step="1" min="0" max="100000"> | <input type="number" id="hgstars" placeholder="☆ - HG" step="0.1" min="0" max="5"> / <input type="number" id="hgcount" placeholder="№ - HG" step="1" min="0" max="100000"> | <input type="number" id="vistars" placeholder="☆ - Vitals" step="0.1" min="0" max="5"> / <input type="number" id="vicount" placeholder="№ - Vitals" step="1" min="0" max="100000"> <button class="calkerhowmuch" id="calcerforreviews"> = </button> <button class="calkerhowmuch" id="clearreviews">🧹</button> <input type="text" id="totalratingnum" placeholder="X.XXX" class="totalratingnumstyle"> <button class="copycalcerres" id="copycaltulaterevnumber">📋</button> <input type="text" id="totalrating" placeholder="G / HG / Vitals" class="totalratingstyle"> <button class="copycalcerres" id="copycaltulaterev">📋</button> <br> </span> <div class="tg-wrap"> <div class="row"> <div class="column"> <table> <tr> <th style="text-align: center;">Name</th> <th>Note</th> <th class="copybotinchik"></th> </tr> <tr> <td><span class="nametextik" id="notename1"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote1text" value=""></textarea><button class="smallbutonchik" id="note1save">💾</button></td> <td><button class="copybotinchik" id="note1copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename3"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote3text" value=""></textarea><button class="smallbutonchik" id="note3save">💾</button></td> <td><button class="copybotinchik" id="note3copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename5"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote5text" value=""></textarea><button class="smallbutonchik" id="note5save">💾</button></td> <td><button class="copybotinchik" id="note5copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename7"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote7text" value=""></textarea><button class="smallbutonchik" id="note7save">💾</button></td> <td><button class="copybotinchik" id="note7copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename9"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote9text" value=""></textarea><button class="smallbutonchik" id="note9save">💾</button></td> <td><button class="copybotinchik" id="note9copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename11"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote11text" value=""></textarea><button class="smallbutonchik" id="note11save">💾</button></td> <td><button class="copybotinchik" id="note11copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename13"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote13text" value=""></textarea><button class="smallbutonchik" id="note13save">💾</button></td> <td><button class="copybotinchik" id="note13copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename15"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote15text" value=""></textarea><button class="smallbutonchik" id="note15save">💾</button></td> <td><button class="copybotinchik" id="note15copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename17"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote17text" value=""></textarea><button class="smallbutonchik" id="note17save">💾</button></td> <td><button class="copybotinchik" id="note17copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename19"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote19text" value=""></textarea><button class="smallbutonchik" id="note19save">💾</button></td> <td><button class="copybotinchik" id="note19copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename21"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote21text" value=""></textarea><button class="smallbutonchik" id="note21save">💾</button></td> <td><button class="copybotinchik" id="note21copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename23"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote23text" value=""></textarea><button class="smallbutonchik" id="note23save">💾</button></td> <td><button class="copybotinchik" id="note23copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename25"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote25text" value=""></textarea><button class="smallbutonchik" id="note25save">💾</button></td> <td><button class="copybotinchik" id="note25copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename27"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote27text" value=""></textarea><button class="smallbutonchik" id="note27save">💾</button></td> <td><button class="copybotinchik" id="note27copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename29"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote29text" value=""></textarea><button class="smallbutonchik" id="note29save">💾</button></td> <td><button class="copybotinchik" id="note29copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename31"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote31text" value=""></textarea><button class="smallbutonchik" id="note31save">💾</button></td> <td><button class="copybotinchik" id="note31copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename33"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote33text" value=""></textarea><button class="smallbutonchik" id="note33save">💾</button></td> <td><button class="copybotinchik" id="note33copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename35"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote35text" value=""></textarea><button class="smallbutonchik" id="note35save">💾</button></td> <td><button class="copybotinchik" id="note35copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename37"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote37text" value=""></textarea><button class="smallbutonchik" id="note37save">💾</button></td> <td><button class="copybotinchik" id="note37copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename39"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote39text" value=""></textarea><button class="smallbutonchik" id="note39save">💾</button></td> <td><button class="copybotinchik" id="note39copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename41"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote41text" value=""></textarea><button class="smallbutonchik" id="note41save">💾</button></td> <td><button class="copybotinchik" id="note41copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename43"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote43text" value=""></textarea><button class="smallbutonchik" id="note43save">💾</button></td> <td><button class="copybotinchik" id="note43copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename45"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote45text" value=""></textarea><button class="smallbutonchik" id="note45save">💾</button></td> <td><button class="copybotinchik" id="note45copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename47"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote47text" value=""></textarea><button class="smallbutonchik" id="note47save">💾</button></td> <td><button class="copybotinchik" id="note47copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename49"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote49text" value=""></textarea><button class="smallbutonchik" id="note49save">💾</button></td> <td><button class="copybotinchik" id="note49copy">📋</button></td> </tr> </table> </div> <div class="column"> <table style="float: right;"> <tr> <th style="text-align: center;">Name</th> <th>Note</th> <th class="copybotinchik"></th> </tr> <tr> <td><span class="nametextik" id="notename2"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote2text" value=""></textarea><button class="smallbutonchik" id="note2save">💾</button></td> <td><button class="copybotinchik" id="note2copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename4"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote4text" value=""></textarea><button class="smallbutonchik" id="note4save">💾</button></td> <td><button class="copybotinchik" id="note4copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename6"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote6text" value=""></textarea><button class="smallbutonchik" id="note6save">💾</button></td> <td><button class="copybotinchik" id="note6copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename8"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote8text" value=""></textarea><button class="smallbutonchik" id="note8save">💾</button></td> <td><button class="copybotinchik" id="note8copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename10"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote10text" value=""></textarea><button class="smallbutonchik" id="note10save">💾</button></td> <td><button class="copybotinchik" id="note10copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename12"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote12text" value=""></textarea><button class="smallbutonchik" id="note12save">💾</button></td> <td><button class="copybotinchik" id="note12copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename14"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote14text" value=""></textarea><button class="smallbutonchik" id="note14save">💾</button></td> <td><button class="copybotinchik" id="note14copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename16"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote16text" value=""></textarea><button class="smallbutonchik" id="note16save">💾</button></td> <td><button class="copybotinchik" id="note16copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename18"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote18text" value=""></textarea><button class="smallbutonchik" id="note18save">💾</button></td> <td><button class="copybotinchik" id="note18copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename20"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote20text" value=""></textarea><button class="smallbutonchik" id="note20save">💾</button></td> <td><button class="copybotinchik" id="note20copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename22"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote22text" value=""></textarea><button class="smallbutonchik" id="note22save">💾</button></td> <td><button class="copybotinchik" id="note22copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename24"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote24text" value=""></textarea><button class="smallbutonchik" id="note24save">💾</button></td> <td><button class="copybotinchik" id="note24copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename26"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote26text" value=""></textarea><button class="smallbutonchik" id="note26save">💾</button></td> <td><button class="copybotinchik" id="note26copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename28"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote28text" value=""></textarea><button class="smallbutonchik" id="note28save">💾</button></td> <td><button class="copybotinchik" id="note28copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename30"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote30text" value=""></textarea><button class="smallbutonchik" id="note30save">💾</button></td> <td><button class="copybotinchik" id="note30copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename32"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote32text" value=""></textarea><button class="smallbutonchik" id="note32save">💾</button></td> <td><button class="copybotinchik" id="note32copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename34"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote34text" value=""></textarea><button class="smallbutonchik" id="note34save">💾</button></td> <td><button class="copybotinchik" id="note34copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename36"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote36text" value=""></textarea><button class="smallbutonchik" id="note36save">💾</button></td> <td><button class="copybotinchik" id="note36copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename38"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote38text" value=""></textarea><button class="smallbutonchik" id="note38save">💾</button></td> <td><button class="copybotinchik" id="note38copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename40"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote40text" value=""></textarea><button class="smallbutonchik" id="note40save">💾</button></td> <td><button class="copybotinchik" id="note40copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename42"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote42text" value=""></textarea><button class="smallbutonchik" id="note42save">💾</button></td> <td><button class="copybotinchik" id="note42copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename44"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote44text" value=""></textarea><button class="smallbutonchik" id="note44save">💾</button></td> <td><button class="copybotinchik" id="note44copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename46"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote46text" value=""></textarea><button class="smallbutonchik" id="note46save">💾</button></td> <td><button class="copybotinchik" id="note46copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename48"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote48text" value=""></textarea><button class="smallbutonchik" id="note48save">💾</button></td> <td><button class="copybotinchik" id="note48copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename50"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="dcnote50text" value=""></textarea><button class="smallbutonchik" id="note50save">💾</button></td> <td><button class="copybotinchik" id="note50copy">📋</button></td> </tr> </table> </div> </div> </div> </div></div>');
	
	// Get the modal
	greetnotesModal = document.getElementById("greetnotesModal");
	//And closes
	greetnotesBtncloser = document.getElementById("greetnotesBtncloser");
	
	// When the user clicks on <span> (x), close the modal and save settings
	if (greetnotesBtncloser != null) { greetnotesBtncloser.onclick = function() { greetnotesModal.style.display = "none"; } }
}


function notesInitInjector() {
	setTimeout( function() {
		if (document.getElementById("bookSelectorBtn") == null || document.getElementById("bookSelectorBtn") == undefined) {
			$('button:contains("My profile")').parent().parent().prepend('<table class="quickmenustyler"><tbody> <tr> <td><button class="quickselectfornotesdc" id="qucknote1copydc">1</button><button class="quickselectfornotesdc" id="qucknote3copydc">3</button></td> </tr></tbody></table><table class="quickmenustyler"><tbody> <tr> <td><button class="quickselectfornotesdc" id="qucknote2copydc">2</button><button class="quickselectfornotesdc" id="qucknote4copydc">4</button></td> </tr></tbody></table>');
			$('button:contains("My profile")').parent().parent().prepend('<button class="btn btn-brand-primary btn-logout" id="bookSelectorBtn" style="margin-left: 10px;">📝</button>');
			quckNotesInjector();
			// Get the button that opens the modal
			bookSelectorBtn = document.getElementById("bookSelectorBtn");
			// When the user clicks the button, open the modal 
			if (bookSelectorBtn != null) { bookSelectorBtn.onclick = function() { greetnotesModal.style.display = "block"; } }
			return;
		} else { notesInitInjector(); }
	}, 2000)
}


var runonlyonce = 0;
function injectSriptsforNotes() {
	if (runonlyonce == 0) {
/* LOAD */
	document.getElementById("notesfaqbut").addEventListener("click", function(event) { 
	if (document.getElementById("smartnotesfaq").hidden == true) { document.getElementById("smartnotesfaq").hidden = false; } else { document.getElementById("smartnotesfaq").hidden = true; }
	});
		
	chrome.storage.local.get(['startnotestatustogsave'], function(result) {
		if (result.startnotestatustogsave != null && result.startnotestatustogsave == 1) {
			document.getElementById("smartnotesstatus").checked = true;
			document.getElementById("hccnameblockid").hidden = false;
		} 
	});

	chrome.storage.local.get(['nameofhccnotes'], function(result) {
			document.getElementById("hccnameboxid").value = result.nameofhccnotes;
	}); 
	
	document.getElementById("gstars").addEventListener("change", function(event) { 
	calculateRatingsNotes();
	});
	document.getElementById("gcount").addEventListener("change", function(event) { 
	calculateRatingsNotes();
	});
	document.getElementById("gcount").addEventListener("change", function(event) { 
	calculateRatingsNotes();
	});
	document.getElementById("hgstars").addEventListener("change", function(event) { 
	calculateRatingsNotes();
	});
	document.getElementById("hgcount").addEventListener("change", function(event) { 
	calculateRatingsNotes();
	});
	document.getElementById("vistars").addEventListener("change", function(event) { 
	calculateRatingsNotes();
	});
	document.getElementById("vicount").addEventListener("change", function(event) { 
	calculateRatingsNotes();
	});
	
	document.getElementById("calcerforreviews").addEventListener("click", function(event) { 
		var GoogleStars = parseFloat(document.getElementById("gstars").value);
		var GoogleReviews = parseFloat(document.getElementById("gcount").value);
		var HGStars = parseFloat(document.getElementById("hgstars").value);
		var HGReviews = parseFloat(document.getElementById("hgcount").value);
		var VitalsStars = parseFloat(document.getElementById("vistars").value);
		var VitalsReviews = parseFloat(document.getElementById("vicount").value);
		
		var StatusScore;
		
		if (isNaN(GoogleStars) || isNaN(GoogleReviews)) { GoogleStars = 0; GoogleReviews = 0; };
		if (isNaN(HGStars) || isNaN(HGReviews)) { HGStars = 0; HGReviews = 0; };
		if (isNaN(VitalsStars) || isNaN(VitalsReviews)) { VitalsStars = 0; VitalsReviews = 0; };
		
		var ScoreVar = ((GoogleStars*GoogleReviews)+(HGStars*HGReviews)+(VitalsStars*VitalsReviews))/(GoogleReviews+HGReviews+VitalsReviews);
		document.getElementById("totalratingnum").value = ScoreVar.toFixed(3);
		
		if (GoogleReviews == "0" && HGReviews == "0" && VitalsReviews == "0") { StatusScore = ""; }
		else if (GoogleReviews == "0" && !HGReviews == "0" && !VitalsReviews == "0") { StatusScore = ("HG [" + HGStars + "/" + HGReviews + "], Vitals [" + VitalsStars + "/" + VitalsReviews + "] = " + ScoreVar.toFixed(3)); }
		else if (!GoogleReviews == "0" && !HGReviews == "0" && VitalsReviews == "0") { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "], HG [" + HGStars + "/" + HGReviews + "] = " + ScoreVar.toFixed(3)); }
		else if (!GoogleReviews == "0" && !VitalsReviews == "0" && HGReviews == "0") { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "], Vitals [" + VitalsStars + "/" + VitalsReviews + "] = " + ScoreVar.toFixed(3)); }
		else if (!GoogleReviews == "0" && HGReviews == "0" && VitalsReviews == "0") { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "]"); }
		else if (GoogleReviews == "0" && !HGReviews == "0" && VitalsReviews == "0") { StatusScore = ("HG [" + HGStars + "/" + HGReviews + "]"); }
		else if (GoogleReviews == "0" && HGReviews == "0" && !VitalsReviews == "0") { StatusScore = ("Vitals [" + VitalsStars + "/" + VitalsReviews + "]"); }
		else { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "], HG [" + HGStars + "/" + HGReviews + "], Vitals [" + VitalsStars + "/" + VitalsReviews + "] = " + ScoreVar.toFixed(3)); };

		document.getElementById("totalrating").value = StatusScore;
	
	});
	
	
	document.getElementById("copycaltulaterevnumber").addEventListener("click", function(event) { 
		var GoogleStars = parseFloat(document.getElementById("gstars").value);
		var GoogleReviews = parseFloat(document.getElementById("gcount").value);
		var HGStars = parseFloat(document.getElementById("hgstars").value);
		var HGReviews = parseFloat(document.getElementById("hgcount").value);
		var VitalsStars = parseFloat(document.getElementById("vistars").value);
		var VitalsReviews = parseFloat(document.getElementById("vicount").value);
		
		var StatusScore;
		
		if (isNaN(GoogleStars) || isNaN(GoogleReviews)) { GoogleStars = 0; GoogleReviews = 0; };
		if (isNaN(HGStars) || isNaN(HGReviews)) { HGStars = 0; HGReviews = 0; };
		if (isNaN(VitalsStars) || isNaN(VitalsReviews)) { VitalsStars = 0; VitalsReviews = 0; };
		
		var ScoreVar = ((GoogleStars*GoogleReviews)+(HGStars*HGReviews)+(VitalsStars*VitalsReviews))/(GoogleReviews+HGReviews+VitalsReviews);
		copyTextToClipboard(ScoreVar.toFixed(3));
		if (greetnotesBtncloser != null) { greetnotesModal.style.display = "none"; }
	
	});
	
	
	document.getElementById("copycaltulaterev").addEventListener("click", function(event) { 
		var GoogleStars = parseFloat(document.getElementById("gstars").value);
		var GoogleReviews = parseFloat(document.getElementById("gcount").value);
		var HGStars = parseFloat(document.getElementById("hgstars").value);
		var HGReviews = parseFloat(document.getElementById("hgcount").value);
		var VitalsStars = parseFloat(document.getElementById("vistars").value);
		var VitalsReviews = parseFloat(document.getElementById("vicount").value);
		
		var StatusScore;
		
		if (isNaN(GoogleStars) || isNaN(GoogleReviews)) { GoogleStars = 0; GoogleReviews = 0; };
		if (isNaN(HGStars) || isNaN(HGReviews)) { HGStars = 0; HGReviews = 0; };
		if (isNaN(VitalsStars) || isNaN(VitalsReviews)) { VitalsStars = 0; VitalsReviews = 0; };
		
		var ScoreVar = ((GoogleStars*GoogleReviews)+(HGStars*HGReviews)+(VitalsStars*VitalsReviews))/(GoogleReviews+HGReviews+VitalsReviews);
		
		if (GoogleReviews == "0" && HGReviews == "0" && VitalsReviews == "0") { StatusScore = ""; }
		else if (GoogleReviews == "0" && !HGReviews == "0" && !VitalsReviews == "0") { StatusScore = ("HG [" + HGStars + "/" + HGReviews + "], Vitals [" + VitalsStars + "/" + VitalsReviews + "] = " + ScoreVar.toFixed(3)); }
		else if (!GoogleReviews == "0" && !HGReviews == "0" && VitalsReviews == "0") { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "], HG [" + HGStars + "/" + HGReviews + "] = " + ScoreVar.toFixed(3)); }
		else if (!GoogleReviews == "0" && !VitalsReviews == "0" && HGReviews == "0") { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "], Vitals [" + VitalsStars + "/" + VitalsReviews + "] = " + ScoreVar.toFixed(3)); }
		else if (!GoogleReviews == "0" && HGReviews == "0" && VitalsReviews == "0") { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "]"); }
		else if (GoogleReviews == "0" && !HGReviews == "0" && VitalsReviews == "0") { StatusScore = ("HG [" + HGStars + "/" + HGReviews + "]"); }
		else if (GoogleReviews == "0" && HGReviews == "0" && !VitalsReviews == "0") { StatusScore = ("Vitals [" + VitalsStars + "/" + VitalsReviews + "]"); }
		else { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "], HG [" + HGStars + "/" + HGReviews + "], Vitals [" + VitalsStars + "/" + VitalsReviews + "] = " + ScoreVar.toFixed(3)); };

		copyTextToClipboard(StatusScore);
		if (greetnotesBtncloser != null) { greetnotesModal.style.display = "none"; }
	
	});
	
	document.getElementById("clearreviews").addEventListener("click", function(event) { 
		document.getElementById("gstars").value = "";
		document.getElementById("gcount").value = "";
		document.getElementById("hgstars").value = "";
		document.getElementById("hgcount").value = "";
		document.getElementById("vistars").value = "";
		document.getElementById("vicount").value = "";
		document.getElementById("totalrating").value = "";
		document.getElementById("totalratingnum").value = "";
	});
	
	
/* For Version load
for (let i = 1; i < 51; i++) {
	let dcnotesaveload = "dcnote"+i+"save";
	let dcnotetextload = "dcnote"+i+"text";
	console.log(dcnotesaveload);
	chrome.storage.local.get([dcnotesaveload], function(result) {
		if (result.dcnotesaveload != null) { console.log("Jucing");
			document.getElementById(dcnotetextload).value = result.dcnotesaveload;
		}
	}); 
}
*/
	/* Load saved notes */
if (true) { //group elements for minimizing in editor
	chrome.storage.local.get(['dcnote1save'], function(result) {
		if (result.dcnote1save != null) { 
			document.getElementById("dcnote1text").value = result.dcnote1save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote2save'], function(result) {
		if (result.dcnote2save != null) { 
			document.getElementById("dcnote2text").value = result.dcnote2save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote3save'], function(result) {
		if (result.dcnote3save != null) { 
			document.getElementById("dcnote3text").value = result.dcnote3save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote4save'], function(result) {
		if (result.dcnote4save != null) { 
			document.getElementById("dcnote4text").value = result.dcnote4save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote5save'], function(result) {
		if (result.dcnote5save != null) { 
			document.getElementById("dcnote5text").value = result.dcnote5save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote6save'], function(result) {
		if (result.dcnote6save != null) { 
			document.getElementById("dcnote6text").value = result.dcnote6save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote7save'], function(result) {
		if (result.dcnote7save != null) { 
			document.getElementById("dcnote7text").value = result.dcnote7save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote8save'], function(result) {
		if (result.dcnote8save != null) { 
			document.getElementById("dcnote8text").value = result.dcnote8save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote9save'], function(result) {
		if (result.dcnote9save != null) { 
			document.getElementById("dcnote9text").value = result.dcnote9save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote10save'], function(result) {
		if (result.dcnote10save != null) { 
			document.getElementById("dcnote10text").value = result.dcnote10save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote11save'], function(result) {
		if (result.dcnote11save != null) { 
			document.getElementById("dcnote11text").value = result.dcnote11save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote12save'], function(result) {
		if (result.dcnote12save != null) { 
			document.getElementById("dcnote12text").value = result.dcnote12save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote13save'], function(result) {
		if (result.dcnote13save != null) { 
			document.getElementById("dcnote13text").value = result.dcnote13save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote14save'], function(result) {
		if (result.dcnote14save != null) { 
			document.getElementById("dcnote14text").value = result.dcnote14save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote15save'], function(result) {
		if (result.dcnote15save != null) { 
			document.getElementById("dcnote15text").value = result.dcnote15save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote16save'], function(result) {
		if (result.dcnote16save != null) { 
			document.getElementById("dcnote16text").value = result.dcnote16save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote17save'], function(result) {
		if (result.dcnote17save != null) { 
			document.getElementById("dcnote17text").value = result.dcnote17save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote18save'], function(result) {
		if (result.dcnote18save != null) { 
			document.getElementById("dcnote18text").value = result.dcnote18save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote19save'], function(result) {
		if (result.dcnote19save != null) { 
			document.getElementById("dcnote19text").value = result.dcnote19save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote20save'], function(result) {
		if (result.dcnote20save != null) { 
			document.getElementById("dcnote20text").value = result.dcnote20save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote21save'], function(result) {
		if (result.dcnote21save != null) { 
			document.getElementById("dcnote21text").value = result.dcnote21save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote22save'], function(result) {
		if (result.dcnote22save != null) { 
			document.getElementById("dcnote22text").value = result.dcnote22save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote23save'], function(result) {
		if (result.dcnote23save != null) { 
			document.getElementById("dcnote23text").value = result.dcnote23save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote24save'], function(result) {
		if (result.dcnote24save != null) { 
			document.getElementById("dcnote24text").value = result.dcnote24save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote25save'], function(result) {
		if (result.dcnote25save != null) { 
			document.getElementById("dcnote25text").value = result.dcnote25save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote26save'], function(result) {
		if (result.dcnote26save != null) { 
			document.getElementById("dcnote26text").value = result.dcnote26save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote27save'], function(result) {
		if (result.dcnote27save != null) { 
			document.getElementById("dcnote27text").value = result.dcnote27save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote28save'], function(result) {
		if (result.dcnote28save != null) { 
			document.getElementById("dcnote28text").value = result.dcnote28save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote29save'], function(result) {
		if (result.dcnote29save != null) { 
			document.getElementById("dcnote29text").value = result.dcnote29save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote30save'], function(result) {
		if (result.dcnote30save != null) { 
			document.getElementById("dcnote30text").value = result.dcnote30save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote31save'], function(result) {
		if (result.dcnote31save != null) { 
			document.getElementById("dcnote31text").value = result.dcnote31save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote32save'], function(result) {
		if (result.dcnote32save != null) { 
			document.getElementById("dcnote32text").value = result.dcnote32save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote33save'], function(result) {
		if (result.dcnote33save != null) { 
			document.getElementById("dcnote33text").value = result.dcnote33save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote34save'], function(result) {
		if (result.dcnote34save != null) { 
			document.getElementById("dcnote34text").value = result.dcnote34save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote35save'], function(result) {
		if (result.dcnote35save != null) { 
			document.getElementById("dcnote35text").value = result.dcnote35save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote36save'], function(result) {
		if (result.dcnote36save != null) { 
			document.getElementById("dcnote36text").value = result.dcnote36save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote37save'], function(result) {
		if (result.dcnote37save != null) { 
			document.getElementById("dcnote37text").value = result.dcnote37save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote38save'], function(result) {
		if (result.dcnote38save != null) { 
			document.getElementById("dcnote38text").value = result.dcnote38save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote39save'], function(result) {
		if (result.dcnote39save != null) { 
			document.getElementById("dcnote39text").value = result.dcnote39save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote40save'], function(result) {
		if (result.dcnote40save != null) { 
			document.getElementById("dcnote40text").value = result.dcnote40save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote41save'], function(result) {
		if (result.dcnote41save != null) { 
			document.getElementById("dcnote41text").value = result.dcnote41save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote42save'], function(result) {
		if (result.dcnote42save != null) { 
			document.getElementById("dcnote42text").value = result.dcnote42save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote43save'], function(result) {
		if (result.dcnote43save != null) { 
			document.getElementById("dcnote43text").value = result.dcnote43save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote44save'], function(result) {
		if (result.dcnote44save != null) { 
			document.getElementById("dcnote44text").value = result.dcnote44save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote45save'], function(result) {
		if (result.dcnote45save != null) { 
			document.getElementById("dcnote45text").value = result.dcnote45save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote46save'], function(result) {
		if (result.dcnote46save != null) { 
			document.getElementById("dcnote46text").value = result.dcnote46save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote47save'], function(result) {
		if (result.dcnote47save != null) { 
			document.getElementById("dcnote47text").value = result.dcnote47save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote48save'], function(result) {
		if (result.dcnote48save != null) { 
			document.getElementById("dcnote48text").value = result.dcnote48save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote49save'], function(result) {
		if (result.dcnote49save != null) { 
			document.getElementById("dcnote49text").value = result.dcnote49save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote50save'], function(result) {
		if (result.dcnote50save != null) { 
			document.getElementById("dcnote50text").value = result.dcnote50save;
		}
	}); 
}
	
	/* Load name of notes */
if (true) { //group elements for minimizing in editor
	chrome.storage.local.get(['namedcnote1save'], function(result) {
		
			document.getElementById("notename1").innerHTML = result.namedcnote1save;
	});
	
	chrome.storage.local.get(['namedcnote2save'], function(result) {
		
			document.getElementById("notename2").innerHTML = result.namedcnote2save;
	}); 
	
	chrome.storage.local.get(['namedcnote3save'], function(result) {
		
			document.getElementById("notename3").innerHTML = result.namedcnote3save;
	}); 
	
	chrome.storage.local.get(['namedcnote4save'], function(result) {
		
			document.getElementById("notename4").innerHTML = result.namedcnote4save;
	}); 
	
	chrome.storage.local.get(['namedcnote5save'], function(result) {
		
			document.getElementById("notename5").innerHTML = result.namedcnote5save;
	}); 
	
	chrome.storage.local.get(['namedcnote6save'], function(result) {
		
			document.getElementById("notename6").innerHTML = result.namedcnote6save;
	}); 
	
	chrome.storage.local.get(['namedcnote7save'], function(result) {
		
			document.getElementById("notename7").innerHTML = result.namedcnote7save;
	}); 
	
	chrome.storage.local.get(['namedcnote8save'], function(result) {
		
			document.getElementById("notename8").innerHTML = result.namedcnote8save;
	}); 
	
	chrome.storage.local.get(['namedcnote9save'], function(result) {
		
			document.getElementById("notename9").innerHTML = result.namedcnote9save;
	}); 
	
	chrome.storage.local.get(['namedcnote10save'], function(result) {
		
			document.getElementById("notename10").innerHTML = result.namedcnote10save;
	}); 
	
	chrome.storage.local.get(['namedcnote11save'], function(result) {
		
			document.getElementById("notename11").innerHTML = result.namedcnote11save;
	}); 
	
	chrome.storage.local.get(['namedcnote12save'], function(result) {
		
			document.getElementById("notename12").innerHTML = result.namedcnote12save;
	}); 
	
	chrome.storage.local.get(['namedcnote13save'], function(result) {
		
			document.getElementById("notename13").innerHTML = result.namedcnote13save;
	}); 
	
	chrome.storage.local.get(['namedcnote14save'], function(result) {
		
			document.getElementById("notename14").innerHTML = result.namedcnote14save;
	}); 
	
	chrome.storage.local.get(['namedcnote15save'], function(result) {
		
			document.getElementById("notename15").innerHTML = result.namedcnote15save;
	}); 
	
	chrome.storage.local.get(['namedcnote16save'], function(result) {
		
			document.getElementById("notename16").innerHTML = result.namedcnote16save;
	}); 
	
	chrome.storage.local.get(['namedcnote17save'], function(result) {
		
			document.getElementById("notename17").innerHTML = result.namedcnote17save;
	}); 
	
	chrome.storage.local.get(['namedcnote18save'], function(result) {
		
			document.getElementById("notename18").innerHTML = result.namedcnote18save;
	}); 
	
	chrome.storage.local.get(['namedcnote19save'], function(result) {
		
			document.getElementById("notename19").innerHTML = result.namedcnote19save;
	}); 
	
	chrome.storage.local.get(['namedcnote20save'], function(result) {
		
			document.getElementById("notename20").innerHTML = result.namedcnote20save;
	}); 
	
	chrome.storage.local.get(['namedcnote21save'], function(result) {
		
			document.getElementById("notename21").innerHTML = result.namedcnote21save;
	}); 
	
	chrome.storage.local.get(['namedcnote22save'], function(result) {
		
			document.getElementById("notename22").innerHTML = result.namedcnote22save;
	}); 
	
	chrome.storage.local.get(['namedcnote23save'], function(result) {
		
			document.getElementById("notename23").innerHTML = result.namedcnote23save;
	}); 
	
	chrome.storage.local.get(['namedcnote24save'], function(result) {
		
			document.getElementById("notename24").innerHTML = result.namedcnote24save;
	}); 
	
	chrome.storage.local.get(['namedcnote25save'], function(result) {
		
			document.getElementById("notename25").innerHTML = result.namedcnote25save;
	}); 
	
	chrome.storage.local.get(['namedcnote26save'], function(result) {
		
			document.getElementById("notename26").innerHTML = result.namedcnote26save;
	}); 
	
	chrome.storage.local.get(['namedcnote27save'], function(result) {
		
			document.getElementById("notename27").innerHTML = result.namedcnote27save;
	}); 
	
	chrome.storage.local.get(['namedcnote28save'], function(result) {
		
			document.getElementById("notename28").innerHTML = result.namedcnote28save;
	}); 
	
	chrome.storage.local.get(['namedcnote29save'], function(result) {
		
			document.getElementById("notename29").innerHTML = result.namedcnote29save;
	}); 
	
	chrome.storage.local.get(['namedcnote30save'], function(result) {
		
			document.getElementById("notename30").innerHTML = result.namedcnote30save;
	}); 
	
	chrome.storage.local.get(['namedcnote31save'], function(result) {
		
			document.getElementById("notename31").innerHTML = result.namedcnote31save;
	}); 
	
	chrome.storage.local.get(['namedcnote32save'], function(result) {
		
			document.getElementById("notename32").innerHTML = result.namedcnote32save;
	}); 
	
	chrome.storage.local.get(['namedcnote33save'], function(result) {
		
			document.getElementById("notename33").innerHTML = result.namedcnote33save;
	}); 
	
	chrome.storage.local.get(['namedcnote34save'], function(result) {
		
			document.getElementById("notename34").innerHTML = result.namedcnote34save;
	}); 
	
	chrome.storage.local.get(['namedcnote35save'], function(result) {
		
			document.getElementById("notename35").innerHTML = result.namedcnote35save;
	}); 
	
	chrome.storage.local.get(['namedcnote36save'], function(result) {
		
			document.getElementById("notename36").innerHTML = result.namedcnote36save;
	}); 
	
	chrome.storage.local.get(['namedcnote37save'], function(result) {
		
			document.getElementById("notename37").innerHTML = result.namedcnote37save;
	}); 
	
	chrome.storage.local.get(['namedcnote38save'], function(result) {
		
			document.getElementById("notename38").innerHTML = result.namedcnote38save;
	}); 
	
	chrome.storage.local.get(['namedcnote39save'], function(result) {
		
			document.getElementById("notename39").innerHTML = result.namedcnote39save;
	}); 
	
	chrome.storage.local.get(['namedcnote40save'], function(result) {
		
			document.getElementById("notename40").innerHTML = result.namedcnote40save;
	}); 
	
	chrome.storage.local.get(['namedcnote41save'], function(result) {
		
			document.getElementById("notename41").innerHTML = result.namedcnote41save;
	}); 
	
	chrome.storage.local.get(['namedcnote42save'], function(result) {
		
			document.getElementById("notename42").innerHTML = result.namedcnote42save;
	}); 
	
	chrome.storage.local.get(['namedcnote43save'], function(result) {
		
			document.getElementById("notename43").innerHTML = result.namedcnote43save;
	}); 
	
	chrome.storage.local.get(['namedcnote44save'], function(result) {
		
			document.getElementById("notename44").innerHTML = result.namedcnote44save;
	}); 
	
	chrome.storage.local.get(['namedcnote45save'], function(result) {
		
			document.getElementById("notename45").innerHTML = result.namedcnote45save;
	}); 
	
	chrome.storage.local.get(['namedcnote46save'], function(result) {
		
			document.getElementById("notename46").innerHTML = result.namedcnote46save;
	}); 
	
	chrome.storage.local.get(['namedcnote47save'], function(result) {
		
			document.getElementById("notename47").innerHTML = result.namedcnote47save;
	}); 
	
	chrome.storage.local.get(['namedcnote48save'], function(result) {
		
			document.getElementById("notename48").innerHTML = result.namedcnote48save;
	}); 
	
	chrome.storage.local.get(['namedcnote49save'], function(result) {
		
			document.getElementById("notename49").innerHTML = result.namedcnote49save;
	}); 
	
	chrome.storage.local.get(['namedcnote50save'], function(result) {
		
			document.getElementById("notename50").innerHTML = result.namedcnote50save;
	}); 
}
	
	
/* Inject event listeners & Save */
/* For version
for (let i = 1; i < 51; i++) {
	let notesave = "note"+i+"save";
	let namedcnotesave = "namedcnote"+i+"save";
	let notename = "notename"+i;
	let dcnotesave = "dcnote"+i+"save";
	let dcnotetext = "dcnote"+i+"text";
	document.getElementById(notesave).addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({namedcnotesave: tempatename});
	document.getElementById(notename).innerHTML = tempatename;
	chrome.storage.local.set({dcnotesave: document.getElementById(dcnotetext).value});
	});
}
*/
/* Create listeners for saving note text */
if (true) { //group elements for minimizing in editor
	document.getElementById("note1save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote1save': tempatename});
	document.getElementById("notename1").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote1save": document.getElementById("dcnote1text").value});
	});
	
	document.getElementById("note2save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote2save': tempatename});
	document.getElementById("notename2").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote2save": document.getElementById("dcnote2text").value});
	});
	
	document.getElementById("note3save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote3save': tempatename});
	document.getElementById("notename3").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote3save": document.getElementById("dcnote3text").value});
	});
	
	document.getElementById("note4save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote4save': tempatename});
	document.getElementById("notename4").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote4save": document.getElementById("dcnote4text").value});
	});
	
	document.getElementById("note5save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote5save': tempatename});
	document.getElementById("notename5").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote5save": document.getElementById("dcnote5text").value});
	});
	
	document.getElementById("note6save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote6save': tempatename});
	document.getElementById("notename6").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote6save": document.getElementById("dcnote6text").value});
	});
	
	document.getElementById("note7save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote7save': tempatename});
	document.getElementById("notename7").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote7save": document.getElementById("dcnote7text").value});
	});
	
	document.getElementById("note8save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote8save': tempatename});
	document.getElementById("notename8").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote8save": document.getElementById("dcnote8text").value});
	});
	
	document.getElementById("note9save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote9save': tempatename});
	document.getElementById("notename9").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote9save": document.getElementById("dcnote9text").value});
	});
	
	document.getElementById("note10save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote10save': tempatename});
	document.getElementById("notename10").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote10save": document.getElementById("dcnote10text").value});
	});
	
	document.getElementById("note11save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote11save': tempatename});
	document.getElementById("notename11").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote11save": document.getElementById("dcnote11text").value});
	});
	
	document.getElementById("note12save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote12save': tempatename});
	document.getElementById("notename12").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote12save": document.getElementById("dcnote12text").value});
	});
	
	document.getElementById("note13save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote13save': tempatename});
	document.getElementById("notename13").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote13save": document.getElementById("dcnote13text").value});
	});
	
	document.getElementById("note14save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote14save': tempatename});
	document.getElementById("notename14").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote14save": document.getElementById("dcnote14text").value});
	});
	
	document.getElementById("note15save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote15save': tempatename});
	document.getElementById("notename15").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote15save": document.getElementById("dcnote15text").value});
	});
	
	document.getElementById("note16save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote16save': tempatename});
	document.getElementById("notename16").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote16save": document.getElementById("dcnote16text").value});
	});
	
	document.getElementById("note17save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote17save': tempatename});
	document.getElementById("notename17").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote17save": document.getElementById("dcnote17text").value});
	});
	
	document.getElementById("note18save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote18save': tempatename});
	document.getElementById("notename18").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote18save": document.getElementById("dcnote18text").value});
	});
	
	document.getElementById("note19save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote19save': tempatename});
	document.getElementById("notename19").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote19save": document.getElementById("dcnote19text").value});
	});
	
	document.getElementById("note20save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote20save': tempatename});
	document.getElementById("notename20").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote20save": document.getElementById("dcnote20text").value});
	});
	
	document.getElementById("note50save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote50save': tempatename});
	document.getElementById("notename50").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote50save": document.getElementById("dcnote50text").value});
	});
	
	document.getElementById("note21save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote21save': tempatename});
	document.getElementById("notename21").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote21save": document.getElementById("dcnote21text").value});
	});
	
	document.getElementById("note22save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote22save': tempatename});
	document.getElementById("notename22").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote22save": document.getElementById("dcnote22text").value});
	});
	
	document.getElementById("note23save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote23save': tempatename});
	document.getElementById("notename23").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote23save": document.getElementById("dcnote23text").value});
	});
	
	document.getElementById("note24save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote24save': tempatename});
	document.getElementById("notename24").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote24save": document.getElementById("dcnote24text").value});
	});
	
	document.getElementById("note25save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote25save': tempatename});
	document.getElementById("notename25").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote25save": document.getElementById("dcnote25text").value});
	});
	
	document.getElementById("note26save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote26save': tempatename});
	document.getElementById("notename26").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote26save": document.getElementById("dcnote26text").value});
	});
	
	document.getElementById("note27save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote27save': tempatename});
	document.getElementById("notename27").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote27save": document.getElementById("dcnote27text").value});
	});
	
	document.getElementById("note28save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote28save': tempatename});
	document.getElementById("notename28").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote28save": document.getElementById("dcnote28text").value});
	});
	
	document.getElementById("note29save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote29save': tempatename});
	document.getElementById("notename29").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote29save": document.getElementById("dcnote29text").value});
	});
	
	document.getElementById("note30save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote30save': tempatename});
	document.getElementById("notename30").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote30save": document.getElementById("dcnote30text").value});
	});
	
	document.getElementById("note31save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote31save': tempatename});
	document.getElementById("notename31").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote31save": document.getElementById("dcnote31text").value});
	});
	
	document.getElementById("note32save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote32save': tempatename});
	document.getElementById("notename32").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote32save": document.getElementById("dcnote32text").value});
	});
	
	document.getElementById("note33save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote33save': tempatename});
	document.getElementById("notename33").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote33save": document.getElementById("dcnote33text").value});
	});
	
	document.getElementById("note34save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote34save': tempatename});
	document.getElementById("notename34").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote34save": document.getElementById("dcnote34text").value});
	});
	
	document.getElementById("note35save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote35save': tempatename});
	document.getElementById("notename35").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote35save": document.getElementById("dcnote35text").value});
	});
	
	document.getElementById("note36save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote36save': tempatename});
	document.getElementById("notename36").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote36save": document.getElementById("dcnote36text").value});
	});
	
	document.getElementById("note37save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote37save': tempatename});
	document.getElementById("notename37").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote37save": document.getElementById("dcnote37text").value});
	});
	
	document.getElementById("note38save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote38save': tempatename});
	document.getElementById("notename38").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote38save": document.getElementById("dcnote38text").value});
	});
	
	document.getElementById("note39save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote39save': tempatename});
	document.getElementById("notename39").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote39save": document.getElementById("dcnote39text").value});
	});
	
	document.getElementById("note40save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote40save': tempatename});
	document.getElementById("notename40").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote40save": document.getElementById("dcnote40text").value});
	});
	
	document.getElementById("note41save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote41save': tempatename});
	document.getElementById("notename41").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote41save": document.getElementById("dcnote41text").value});
	});
	
	document.getElementById("note42save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote42save': tempatename});
	document.getElementById("notename42").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote42save": document.getElementById("dcnote42text").value});
	});
	
	document.getElementById("note43save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote43save': tempatename});
	document.getElementById("notename43").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote43save": document.getElementById("dcnote43text").value});
	});
	
	document.getElementById("note44save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote44save': tempatename});
	document.getElementById("notename44").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote44save": document.getElementById("dcnote44text").value});
	});
	
	document.getElementById("note45save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote45save': tempatename});
	document.getElementById("notename45").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote45save": document.getElementById("dcnote45text").value});
	});
	
	document.getElementById("note46save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote46save': tempatename});
	document.getElementById("notename46").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote46save": document.getElementById("dcnote46text").value});
	});
	
	document.getElementById("note47save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote47save': tempatename});
	document.getElementById("notename47").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote47save": document.getElementById("dcnote47text").value});
	});
	
	document.getElementById("note48save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote48save': tempatename});
	document.getElementById("notename48").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote48save": document.getElementById("dcnote48text").value});
	});
	
	document.getElementById("note49save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namedcnote49save': tempatename});
	document.getElementById("notename49").innerHTML = tempatename;
	chrome.storage.local.set({"dcnote49save": document.getElementById("dcnote49text").value});
	});
	
}
	
	document.getElementById("smartnotesstatus").addEventListener("change", function(event) { 
	if (document.getElementById("smartnotesstatus").checked == true) {
		chrome.storage.local.set({"startnotestatustogsave": "1"})
		document.getElementById("hccnameblockid").hidden = false;
		}
		else {
			chrome.storage.local.set({"startnotestatustogsave": "0"})
			document.getElementById("hccnameblockid").hidden = true;
			}
	});
	
	document.getElementById("hccnameboxid").addEventListener("change", function(event) { 
	chrome.storage.local.set({"nameofhccnotes": document.getElementById("hccnameboxid").value})
	});
	
for (let i = 1; i < 51; i++) {
	let notecopy = "note"+i+"copy";
	let dcnotetext = "dcnote"+i+"text";
	
	document.getElementById(notecopy).addEventListener("click", function(event) {
	var notetext = document.getElementById(dcnotetext).value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3, nstep4, nstep5;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	var anratingnote, anratingnotefull;
	if (document.getElementById("totalratingnum") != null) { anratingnote = document.getElementById("totalratingnum").value; }
	if (document.getElementById("totalrating") != null) { anratingnotefull = document.getElementById("totalrating").value; } 
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	nstep4 = nstep3.replace('[RATING]', anratingnote);
	nstep5 = nstep4.replace('[RATINGS]', anratingnotefull);
	copyTextToClipboard(nstep5);
	}
	else {copyTextToClipboard(notetext);} 
	if (greetnotesBtncloser != null) { greetnotesModal.style.display = "none"; } });
	
} //closing For loop
	
	
runonlyonce++;
	}
}

function quckNotesInjector() {
	document.getElementById("qucknote1copydc").addEventListener("click", function(event) {
	var notetext = document.getElementById("dcnote1text").value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	var anratingnote, anratingnotefull;
	if (document.getElementById("totalratingnum") != null) { anratingnote = document.getElementById("totalratingnum").value; }
	if (document.getElementById("totalrating") != null) { anratingnotefull = document.getElementById("totalrating").value; } 
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	nstep4 = nstep3.replace('[RATING]', anratingnote);
	nstep5 = nstep4.replace('[RATINGS]', anratingnotefull);
	copyTextToClipboard(nstep5);
	}
	else {copyTextToClipboard(notetext);} 
	});
	
	document.getElementById("qucknote2copydc").addEventListener("click", function(event) {
	var notetext = document.getElementById("dcnote2text").value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	var anratingnote, anratingnotefull;
	if (document.getElementById("totalratingnum") != null) { anratingnote = document.getElementById("totalratingnum").value; }
	if (document.getElementById("totalrating") != null) { anratingnotefull = document.getElementById("totalrating").value; } 
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	nstep4 = nstep3.replace('[RATING]', anratingnote);
	nstep5 = nstep4.replace('[RATINGS]', anratingnotefull);
	copyTextToClipboard(nstep5);
	}
	else {copyTextToClipboard(notetext);} 
	});
	
	document.getElementById("qucknote3copydc").addEventListener("click", function(event) {
	var notetext = document.getElementById("dcnote3text").value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	var anratingnote, anratingnotefull;
	if (document.getElementById("totalratingnum") != null) { anratingnote = document.getElementById("totalratingnum").value; }
	if (document.getElementById("totalrating") != null) { anratingnotefull = document.getElementById("totalrating").value; } 
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	nstep4 = nstep3.replace('[RATING]', anratingnote);
	nstep5 = nstep4.replace('[RATINGS]', anratingnotefull);
	copyTextToClipboard(nstep5);
	}
	else {copyTextToClipboard(notetext);} 
	});
	
	document.getElementById("qucknote4copydc").addEventListener("click", function(event) {
	var notetext = document.getElementById("dcnote4text").value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	var anratingnote, anratingnotefull;
	if (document.getElementById("totalratingnum") != null) { anratingnote = document.getElementById("totalratingnum").value; }
	if (document.getElementById("totalrating") != null) { anratingnotefull = document.getElementById("totalrating").value; } 
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	nstep4 = nstep3.replace('[RATING]', anratingnote);
	nstep5 = nstep4.replace('[RATINGS]', anratingnotefull);
	copyTextToClipboard(nstep5);
	}
	else {copyTextToClipboard(notetext);} 
	});
}


function calculateRatingsNotes(){
	var GoogleStars = parseFloat(document.getElementById("gstars").value);
		var GoogleReviews = parseFloat(document.getElementById("gcount").value);
		var HGStars = parseFloat(document.getElementById("hgstars").value);
		var HGReviews = parseFloat(document.getElementById("hgcount").value);
		var VitalsStars = parseFloat(document.getElementById("vistars").value);
		var VitalsReviews = parseFloat(document.getElementById("vicount").value);
		
		var StatusScore;
		
		if (isNaN(GoogleStars) || isNaN(GoogleReviews)) { GoogleStars = 0; GoogleReviews = 0; };
		if (isNaN(HGStars) || isNaN(HGReviews)) { HGStars = 0; HGReviews = 0; };
		if (isNaN(VitalsStars) || isNaN(VitalsReviews)) { VitalsStars = 0; VitalsReviews = 0; };
		
		var ScoreVar = ((GoogleStars*GoogleReviews)+(HGStars*HGReviews)+(VitalsStars*VitalsReviews))/(GoogleReviews+HGReviews+VitalsReviews);
		document.getElementById("totalratingnum").value = ScoreVar.toFixed(3);
		
		if (GoogleReviews == "0" && HGReviews == "0" && VitalsReviews == "0") { StatusScore = ""; }
		else if (GoogleReviews == "0" && !HGReviews == "0" && !VitalsReviews == "0") { StatusScore = ("HG [" + HGStars + "/" + HGReviews + "], Vitals [" + VitalsStars + "/" + VitalsReviews + "] = " + ScoreVar.toFixed(3)); }
		else if (!GoogleReviews == "0" && !HGReviews == "0" && VitalsReviews == "0") { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "], HG [" + HGStars + "/" + HGReviews + "] = " + ScoreVar.toFixed(3)); }
		else if (!GoogleReviews == "0" && !VitalsReviews == "0" && HGReviews == "0") { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "], Vitals [" + VitalsStars + "/" + VitalsReviews + "] = " + ScoreVar.toFixed(3)); }
		else if (!GoogleReviews == "0" && HGReviews == "0" && VitalsReviews == "0") { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "]"); }
		else if (GoogleReviews == "0" && !HGReviews == "0" && VitalsReviews == "0") { StatusScore = ("HG [" + HGStars + "/" + HGReviews + "]"); }
		else if (GoogleReviews == "0" && HGReviews == "0" && !VitalsReviews == "0") { StatusScore = ("Vitals [" + VitalsStars + "/" + VitalsReviews + "]"); }
		else { StatusScore = ("Google [" + GoogleStars + "/" + GoogleReviews + "], HG [" + HGStars + "/" + HGReviews + "], Vitals [" + VitalsStars + "/" + VitalsReviews + "] = " + ScoreVar.toFixed(3)); };

		document.getElementById("totalrating").value = StatusScore;
}

function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }
function copyTextToClipboard(text) {
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}
	navigator.clipboard.writeText(text).then(function() {
		console.log('Async: Copying to clipboard was successful!');
	}, function(err) {
		console.error('Async: Could not copy text: ', err);
	});
}