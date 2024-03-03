var $ = window.jQuery;

$(document).ready(function(){
    uhcFix();
});

/*
#chromeContainer:not(.arcadeUser) #chromeHeader { position: relative !important; }
.topHeaderContent { padding: none !important; }
.filter-group > div:first-child { padding: none !important; }
.searchResults .guidedSearchResultsFiltersRedesign .result, .searchResults .results .result { padding: 4px 0px !important; }
*/

// Removes annoying banner that takes 25% of page space on UHC provider search
// Triggers few more times to ensure that it's gone after loading

function uhcFix() {
	//if (aetnaFixForAddrnameStatus == "1" || aetnaFixForAddrnameStatus == undefined || aetnaFixForAddrnameStatus == null) {
chrome.storage.local.get(['uhcFix1Localsave'], function(result) {
		console.log(result.uhcFix1Localsave);
		if (result.uhcFix1Localsave != "0") {
	setTimeout( function() {
			$('covid-banner').remove();
			$('covid-provider-disclaimer').remove();
			$('div[data-testid="covid-survey-banner"]').remove();
			uhcFix();
	}, 2000)
	
}});
}

















/*
var uhcTimer = 15000;
function uhcFix() {
	setTimeout( function() {
			if (uhcTimer <= 1) {
                uhcTimer = 15000;
                return;
            }

            if (uhcTimer >= 2) {
				$('covid-banner').remove();
				$('covid-provider-disclaimer').remove();
				$('div[data-testid="covid-survey-banner"]').remove();
				uhcFix();
                uhcTimer--;
            }
	}, 2000)
}
*/