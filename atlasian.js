var $ = window.jQuery;

$(document).ready(function(){
    expandosComentaros();
});

function expandosComentaros() {	

	chrome.storage.local.get(['kbkbFix1Localsave'], function(result) {
		if (result.kbkbFix1Localsave == "1") { 
		addCSSAtlas('#inline-comment-sidebar { width: 44%; right: 0px; }'); 
		//$('div[aria-label="Main content area"]').children().children().html("<span>Type @ to mention someone. We’ll let them know. Select text and then press Ctrl+B to make selected text <b>bold</b>, Ctrl+I to make selected text <i>italic</i>, Ctrl+U to make selected text <u>underlined</u>.</span>");
		} 
		else { console.log("Comment expanding disabled"); };
	});

}


function addCSSAtlas(css){
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