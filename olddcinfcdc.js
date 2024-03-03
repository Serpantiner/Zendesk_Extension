var $ = window.jQuery;


$(document).ready(function(){
	olddcInitInjector();
});

var runonlyoncecfin = 0;
function olddcInitInjector() {
	setTimeout( function() {
		if ( $('div[class="heading_3Bu89 heading-4_3Ip8F mb-10"]:contains("Search for providers")').text() == "Search for providers") {
		//if ($('div[class="provider-search mb-extralarge"]:contains("Search for providers")').text() != "") {
			injectOlddcSearch();  
			return;
		}
		else { olddcInitInjector(); }
	}, 2500)
}

// referrerPolicy="strict-origin-when-cross-origin"
var runonlyoncecf = 0;
function injectOlddcSearch() {
	if (runonlyoncecf == 0) {
		$("div[class='heading_3Bu89 heading-4_3Ip8F mb-10']:contains('Search for providers')").append('<span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Search in old DC:&nbsp;&nbsp;</span><span class="iframebuttoner" id="providersearcher" style="color: #a807de;">Provider</span><span>&nbsp;|&nbsp;</span><span class="iframebuttoner" id="facilitysearcher" style="color: #a807de;">Facility</span><span>&nbsp;&nbsp;</span><span class="iframebuttoner" id="minimizesearcher" hidden>Minimize/Expand</span><span>&nbsp;&nbsp;</span><span class="iframebuttoner" id="closesearcher" hidden>Close</span><div class="iframerfordcsearch" id="iframerfordciddiv" hidden></div>');
		
		document.getElementById("providersearcher").addEventListener("click", function(event) { 
			var fulldclink = window.location.href;
			var lnkcustid = fulldclink.substring(fulldclink.indexOf('?'));
			prepareiFrame("https://crm.healthjoy.com/decision_center/4379839"+lnkcustid);
		});
		
		document.getElementById("facilitysearcher").addEventListener("click", function(event) { 
			var fulldclink = window.location.href;
			var lnkcustid = fulldclink.substring(fulldclink.indexOf('?'));
			prepareiFrame("https://crm.healthjoy.com/decision_center/5544441"+lnkcustid);
		});
		
		document.getElementById("minimizesearcher").addEventListener("click", function(event) { 
			if (document.getElementById("iframerfordciddiv").hidden == false) {document.getElementById("iframerfordciddiv").hidden = true;} else {document.getElementById("iframerfordciddiv").hidden = false;}
		});
		
		document.getElementById("closesearcher").addEventListener("click", function(event) { 
			var el = document.getElementById('iframedolddc');
			if (el != null) { el.remove(); }
			document.getElementById("iframerfordciddiv").hidden = true;
			document.getElementById("minimizesearcher").hidden = true;
			document.getElementById("closesearcher").hidden = true;
		});
				
	runonlyoncecf++;
	}
}

function prepareiFrame(link) {
	document.getElementById("iframerfordciddiv").hidden = false;
	document.getElementById("minimizesearcher").hidden = false;
	document.getElementById("closesearcher").hidden = false;
	var el = document.getElementById('iframedolddc');
    if (el != null) { el.remove(); }
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    ifrm.setAttribute("src", link);
    ifrm.setAttribute("id", "iframedolddc");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    document.getElementById("iframerfordciddiv").appendChild(ifrm);
}