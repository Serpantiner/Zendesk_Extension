var $ = window.jQuery;

var extversionchatstyle = "V1.15";

var clicksbeforelogout = 3;
var onceonlyGroupPlsChat = 0;

var settingsModal;
var settingsBtn;
var unlockBtn;
var settingsBtncloser;
var spanSettingsCloser;

var redesignStatusChat;
var benefitsWalletStatusChat;
var triclicksLogoutStatusChat;
var addSearchgroupStatusChat;
var blockerElementChat;
var designSelectedChatMagic; // Not used

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
//Panel left .panel-left { background-color: #1c2e42; }

var greetnotesModal;
var chatbookSelectorBtn;
var greetnotesBtncloser;

var settingsbuttoncode = '<button class="btn btn-brand-primary btn-logout" id="settingsBtnChat" style="margin-left: 10px;">⚙️</button>';

var cssWhiteChatInjector = 'body { background-color: #fff; color: #1c2e42; } .content-header { background: #fff; color: #000; } .content-helper { background: #fff; color: #000; } .form-control { color: #1c2e42; } .dropdown-menu { background-color: #fff; } .workspace-customerSearch .dropdown-menu__item { color: #1c2e42; } .dropdown-menu__item.ng-binding:hover { background-color: inherit; } .btn.btn-brand-white { background-color: #fff; color: #2899ce; } .btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); } .chat-date-human { background: #fff; } .chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #fff; color: #1c2e42; } .content .entry.user-unread { background-color: #dbc5ca; } .content .chat-message-sender { color: #2c3e50; } .form-control { background-color: #fff; } .dropdown-menu > li > a { color: #555; border: none; } .chat-form .chat-tools-area { background-color: #bcdaff; border: none; } .chat-upload .drop-zone { background-color: #d1e2ff; } .notification-modal .modal-content { background-color: #fff; } .notification-modal { background: rgba(40, 153, 206, 0.7); } .right-sidebar { background: #fff; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #fafafa; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #fafafa; color: #000; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgba(227, 227, 227, 0.3); color: #1c2e42; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: none; color: #2899ce; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #1c2e42; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #fff; } .typeahead-custom .typeahead-custom-i { background-color: #fff; } .typeahead-custom .typeahead-custom-i:hover { background: rgba(40, 153, 206, 0.1); } .loader-cover-area { background-color: rgba(40, 153, 206, 0.75); } .btn.btn-brand-alert { background: linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%); } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%); } .panel-left { background-color: #1c2e42; } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; } .chat-message-time-tolltip { color: #1c2e42; } .chat-message-component .chat-icr-component-resolved button { color: #1c2e42; } .content .entry.user { background-color: #f1faec; } .content .entry.bot { background-color: #EAF5FA; } .chat-message-download-title { color: #1c2e42; } .products__page_subtitle { color: #000; } .products-wrapper { background-color: #fff; } .products__title { color: #000; } ';

var cssGreyChatInjector = 'body { background-color: #1a1d21; color: #fff; } .content-header { background: #1a1d21; color: #fff; }  .content-helper { background: #1a1d21; color: #fff; } .form-control { color: #fff; } .dropdown-menu { background-color: #1a1d21; } .workspace-customerSearch .dropdown-menu__item { color: #fff; } .dropdown-menu__item.ng-binding:hover { background-color: #7e7e7e; } .btn.btn-brand-white { background-color: #1a1d21; color: #34beff; } .btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); } .chat-date-human { background: #1a1d21; } .chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #1a1d21; color: #fff; } .content .entry.user-unread { background-color: #3c0713; } .content .chat-message-sender { color: #63aef9; } .form-control { background-color: #1a1d21; } .dropdown-menu > li > a { color: #fff; border: 1px solid #747474; } .chat-form .chat-tools-area { background-color: #1a1d21; border: 1px solid #000; } .chat-upload .drop-zone { background-color: #d1e2ff; } .notification-modal .modal-content { background-color: #1a1d21; } .notification-modal { background: rgb(2 22 42 / 70%); } .right-sidebar { background: #1a1d21; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #1a1d21; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #1a1d21; color: #fff; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgb(36 36 36); color: #fff; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: #000; color: #0fa6ed; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #fff; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #1a1d21; } .typeahead-custom .typeahead-custom-i { background-color: #000; } .typeahead-custom .typeahead-custom-i:hover { background: rgb(40 40 40 / 70%); } .loader-cover-area { background-color: rgb(7 21 28 / 83%); } .btn.btn-brand-alert { background: #780101; } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: #d33030; } .panel-left { background-color: #04101e; } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; } .chat-message-time-tolltip { color: #fff; } .chat-message-component .chat-icr-component-resolved button { color: #fff; } .content .entry.user { background-color: #172c0c; } .content .entry.bot { background-color: #122934; } .chat-message-download-title { color: #2e85e5; } .products__page_subtitle { color: #fff; } .products-wrapper { background-color: #1a1d21; } .products__title { color: #fff; } ';

var cssBlackChatInjector = 'body { background-color: #000; color: #fff; } .content-header { background: #000; color: #fff; } .content-helper { background: #000; color: #fff; } .form-control { color: #fff; } .dropdown-menu { background-color: #000; } .workspace-customerSearch .dropdown-menu__item { color: #fff; } .dropdown-menu__item.ng-binding:hover { background-color: #545454; } .btn.btn-brand-white { background-color: #000; color: #34beff; } .btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); } .chat-date-human { background: #000; } .chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #000; color: #fff; } .content .entry.user-unread { background-color: #3c0713; } .content .chat-message-sender { color: #63aef9; } .form-control { background-color: #000; } .dropdown-menu > li > a { color: #fff; border: 1px solid #747474; } .chat-form .chat-tools-area { background-color: #000; border: 1px solid #666; } .chat-upload .drop-zone { background-color: #181818; } .notification-modal .modal-content { background-color: #000; } .notification-modal { background: rgb(2 22 42 / 70%); } .right-sidebar { background: #000; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #000; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #000; color: #fff; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgb(36 36 36); color: #fff; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: #000; color: #0fa6ed; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #e9e9e9; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #000; } .typeahead-custom .typeahead-custom-i { background-color: #000; } .typeahead-custom .typeahead-custom-i:hover { background: rgb(40 40 40 / 70%); } .loader-cover-area { background-color: rgb(7 21 28 / 83%); } .btn.btn-brand-alert { background: #780101; } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: #d33030; } .panel-left { background-color: rgb(1 6 12); } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; } .chat-message-time-tolltip { color: #fff; } .chat-message-component .chat-icr-component-resolved button { color: #fff; } .content .entry.user { background-color: #0b1c02; } .content .entry.bot { background-color: #06161e; } .chat-message-download-title { color: #1863b7; } .products__page_subtitle { color: #fff; } .products-wrapper { background-color: #000; } .products__title { color: #dbdbdb; } ';

//CSS 
/*
.content-header { width: calc(100% - 53.8em); }
.workspace-customerSearch { justify-content: start; }
.workspace-customerSearch .form-control { width: 17em; }
.panel-right.animate-show { padding-top: 0px; z-index: 201; }
.right-sidebar { margin-top: 0px; }
.profile-info .profile-info-header { height: 10.1em; }
.profile-info .profile-info-header .profile-info-header-title .profile-info-header-description .profile-info-header-actions { flex-direction: row; }
.profile-info .profile-info-content .profile-info-tabset .tab-content { top: 15.6em; height: calc(100% - 19em); }
.profile-info .profile-info-footer .profile-info-footer-btns { padding: 0.1em 0 0 0; }
.profile-info .profile-info-footer { height: 3.5em; }
*/

//CSS White
/*
body { background-color: #fff; color: #1c2e42; }
.content-header { background: #fff; color: #000; }
.content-helper { background: #fff; color: #000; }
.form-control { color: #1c2e42; }
.dropdown-menu { background-color: #fff; }
.workspace-customerSearch .dropdown-menu__item { color: #1c2e42; }
.dropdown-menu__item.ng-binding:hover { background-color: inherit; }
.btn.btn-brand-white { background-color: #fff; color: #2899ce; }
.btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); }
//Chat
.chat-date-human { background: #fff; }
.chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #fff; color: #1c2e42; }
.content .entry.user-unread { background-color: #dbc5ca; }
.content .chat-message-sender { color: #2c3e50; }
.form-control { background-color: #fff; }
.dropdown-menu > li > a { color: #555; border: none; }
.chat-form .chat-tools-area { background-color: #bcdaff; border: none; }
.chat-upload .drop-zone { background-color: #d1e2ff; }
//Chatout
.notification-modal .modal-content { background-color: #fff; }
.notification-modal { background: rgba(40, 153, 206, 0.7); }
//Right sidebar
.right-sidebar { background: #fff; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #fafafa; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #fafafa; color: #000; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgba(227, 227, 227, 0.3); color: #1c2e42; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: none; color: #2899ce; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #1c2e42; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #fff; }
.typeahead-custom .typeahead-custom-i { background-color: #fff; }
.typeahead-custom .typeahead-custom-i:hover { background: rgba(40, 153, 206, 0.1); }
.loader-cover-area { background-color: rgba(40, 153, 206, 0.75); }
.btn.btn-brand-alert { background: linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%); }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%); }
.panel-left { background-color: #1c2e42; }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; }

.chat-message-time-tolltip { color: #1c2e42; }
.chat-message-component .chat-icr-component-resolved button { color: #1c2e42; }
.content .entry.user { background-color: #f1faec; }
.content .entry.bot { background-color: #EAF5FA; }
.chat-message-download-title { color: #1c2e42; }
*/

//$("TAGTAGTAG").css({"background": "#fff"});
//$("TAGTAGTAG").css({"background": "#fff", "color": "#000"});
//$("TAGTAGTAG").css({"background-color": "#fff", "color": "#000"});


//CSS Dark
/*
body { background-color: #1a1d21; color: #fff; }
.content-header { background: #1a1d21; color: #fff; } 
.content-helper { background: #1a1d21; color: #fff; }
.form-control { color: #fff; }
.dropdown-menu { background-color: #1a1d21; }
.workspace-customerSearch .dropdown-menu__item { color: #fff; }
.dropdown-menu__item.ng-binding:hover { background-color: #7e7e7e; }
.btn.btn-brand-white { background-color: #1a1d21; color: #34beff; }
.btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); }
//Chat
.chat-date-human { background: #1a1d21; }
.chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #1a1d21; color: #fff; }
.content .entry.user-unread { background-color: #3c0713; }
.content .chat-message-sender { color: #63aef9; }

.form-control { background-color: #1a1d21; }
.dropdown-menu > li > a { color: #fff; border: 1px solid #747474; }
.chat-form .chat-tools-area { background-color: #1a1d21; border: 1px solid #000; }
.chat-upload .drop-zone { background-color: #181818; }
//Chatout
.notification-modal .modal-content { background-color: #1a1d21; }
.notification-modal { background: rgb(2 22 42 / 70%); }
//Right sidebar
.right-sidebar { background: #1a1d21; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #1a1d21; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #1a1d21; color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgb(36 36 36); color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: #000; color: #0fa6ed; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #1a1d21; }
.typeahead-custom .typeahead-custom-i { background-color: #000; }
.typeahead-custom .typeahead-custom-i:hover { background: rgb(40 40 40 / 70%); }
.loader-cover-area { background-color: rgb(7 21 28 / 83%); }
.btn.btn-brand-alert { background: #780101; }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: #d33030; }
.panel-left { background-color: #04101e; }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; }

.chat-message-time-tolltip { color: #fff; }
.chat-message-component .chat-icr-component-resolved button { color: #fff; }
.content .entry.user { background-color: #172c0c; }
.content .entry.bot { background-color: #122934; }
.chat-message-download-title { color: #2e85e5; }
*/

//CSS Black
/*
body { background-color: #000; color: #fff; }
.content-header { background: #000; color: #fff; }
.content-helper { background: #000; color: #fff; }
.form-control { color: #fff; }
.dropdown-menu { background-color: #000; }
.workspace-customerSearch .dropdown-menu__item { color: #fff; }
.dropdown-menu__item.ng-binding:hover { background-color: #545454; }
.btn.btn-brand-white { background-color: #000; color: #34beff; }
.btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); }
//Chat
.chat-date-human { background: #000; }
.chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #000; color: #fff; }
.content .entry.user-unread { background-color: #3c0713; }
.content .chat-message-sender { color: #63aef9; }

.form-control { background-color: #000; }
.dropdown-menu > li > a { color: #fff; border: 1px solid #747474; }
.chat-form .chat-tools-area { background-color: #000; border: 1px solid #666; }
.chat-upload .drop-zone { background-color: #181818; }
//Chatout
.notification-modal .modal-content { background-color: #000; }
.notification-modal { background: rgb(2 22 42 / 70%); }
//Right sidebar
.right-sidebar { background: #000; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #000; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #fafafa; color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgb(36 36 36); color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: #000; color: #0fa6ed; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #e9e9e9; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #000; }
.typeahead-custom .typeahead-custom-i { background-color: #000; }
.typeahead-custom .typeahead-custom-i:hover { background: rgb(40 40 40 / 70%); }
.loader-cover-area { background-color: rgb(7 21 28 / 83%); }
.btn.btn-brand-alert { background: #780101; }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: #d33030; }
.panel-left { background-color: rgb(1 6 12); }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; }

.chat-message-time-tolltip { color: #fff; }
.chat-message-component .chat-icr-component-resolved button { color: #fff; }
.content .entry.user { background-color: #0b1c02; }
.content .entry.bot { background-color: #06161e; }
.chat-message-download-title { color: #1863b7; }
*/

function saveDesMain1Chat() {
	chrome.storage.local.set({"desChatMainLocalsave": "1"});
}
function saveDesMain2Chat() {
	chrome.storage.local.set({"desChatMainLocalsave": "2"});
}
function saveDesMain3Chat() {
	chrome.storage.local.set({"desChatMainLocalsave": "3"});
}

$(document).ready(function(){
	$("body").append('<a href="#" id="unlockScreenBlockers" class="unlockScreenBlockersStyle">🔓</a>');	
	
	/*
	$('.logo').parent().append('<span>\
	<input type="radio" id="toggle3radio1des" class=radio1des name="toggle3" onchange=\'$("body").css({"background-color": "#fff", "color": "#1c2e42"}); $(".content-header").css({"background": "#fff", "color": "#000"}); $(".content-helper").css({"background": "#fff", "color": "#000"}); $(".form-control").css({"color": "#1c2e42"}); $(".dropdown-menu").css({"background-color": "#fff"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#1c2e42"}); $(".dropdown-menu__item.ng-binding:hover").css({"background-color": "#293d48"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#293d48"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#fff", "color": "#2899ce"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#fff"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#fff", "color": "#1c2e42"}); $(".content .entry.user-unread").css({"background-color": "#dbc5ca"}); $(".content .chat-message-sender").css({"color": "#2c3e50"}); $(".form-control").css({"background-color": "#fff"}); $(".dropdown-menu > li > a").css({"border": "none", "color": "#555"}); $(".chat-form .chat-tools-area").css({"background-color": "#bcdaff", "border": "none"}); $(".chat-upload .drop-zone").css({"background-color": "#d1e2ff"}); $(".notification-modal .modal-content").css({"background-color": "#fff"}); $(".notification-modal").css({"background": "rgba(40, 153, 206, 0.7)"}); $(".right-sidebar").css({"background": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#fafafa"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgba(227, 227, 227, 0.3)", "color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "none", "color": "#2899ce"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgba(40, 153, 206, 0.1)"}); $(".loader-cover-area").css({"background-color": "rgba(40, 153, 206, 0.75)"}); $(".btn.btn-brand-alert").css({"background": "linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%)"}); $(".panel-left").css({"background-color": "#1c2e42"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\' checked/>\
	<input type="radio" id="toggle3radio2des" class=radio2des name="toggle3" onchange=\'$("body").css({"background-color": "#1a1d21", "color": "#fff"}); $(".content-header").css({"background": "#1a1d21", "color": "#fff"}); $(".content-helper").css({"background": "#1a1d21", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#1a1d21"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#7e7e7e"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#1a1d21", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#1a1d21"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#1a1d21", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#1a1d21"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#1a1d21", "border": "1px solid #000"}); $(".chat-upload .drop-zone").css({"background-color": "#000"}); $(".notification-modal .modal-content").css({"background-color": "#1a1d21"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#1a1d21", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "#000", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "rgb(36 36 36)", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#1a1d21"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "#04101e"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\'/>\
	<input type="radio" id="toggle3radio3des" class=radio3des name="toggle3" onchange=\'$("body").css({"background-color": "#000", "color": "#fff"}); $(".content-header").css({"background": "#000", "color": "#fff"}); $(".content-helper").css({"background": "#000", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#000"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#545454"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#000"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#000", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#000"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#000", "border": "1px solid #666"}); $(".chat-upload .drop-zone").css({"background-color": "#181818"}); $(".notification-modal .modal-content").css({"background-color": "#000"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgb(36 36 36)", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "#000", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#e9e9e9"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "rgb(1 6 12)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\'/><span class=sliderContainer> <label class="label1des" for="toggle3radio1des"></label> <label class="label2des" for="toggle3radio2des"></label> <label class="label3des" for="toggle3radio3des"></label> <span class="slider"></span></span></span>');
	*/
	
	
	//saveDesMain2Chat(); saveDesMain3Chat(); saveDesMain1Chat();
	
	
	//$('.logo').parent().append('<span id="stylerChangerChatik"> <a href="#" id="chatwhitedes" onclick=\'document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = false; document.getElementById("chatblackdes").hidden = true; $("body").css({"background-color": "#1a1d21", "color": "#fff"}); $(".content-header").css({"background": "#1a1d21", "color": "#fff"}); $(".content-helper").css({"background": "#1a1d21", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#1a1d21"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#7e7e7e"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#1a1d21", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#1a1d21"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#1a1d21", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#1a1d21"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#1a1d21", "border": "1px solid #000"}); $(".chat-upload .drop-zone").css({"background-color": "#000"}); $(".notification-modal .modal-content").css({"background-color": "#1a1d21"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#1a1d21", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "#000", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "rgb(36 36 36)", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#1a1d21"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "#04101e"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\' style="text-decoration: none;" hidden>☀️</a> <a href="#" id="chatbluedes" onclick=\'document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = false; $("body").css({"background-color": "#000", "color": "#fff"}); $(".content-header").css({"background": "#000", "color": "#fff"}); $(".content-helper").css({"background": "#000", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#000"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#545454"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#000"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#000", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#000"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#000", "border": "1px solid #666"}); $(".chat-upload .drop-zone").css({"background-color": "#181818"}); $(".notification-modal .modal-content").css({"background-color": "#000"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgb(36 36 36)", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "#000", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#e9e9e9"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "rgb(1 6 12)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\' style="text-decoration: none;" hidden>🔆</a> <a href="#" id="chatblackdes" onclick=\'document.getElementById("chatwhitedes").hidden = false; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = true; $("body").css({"background-color": "#fff", "color": "#1c2e42"}); $(".content-header").css({"background": "#fff", "color": "#000"}); $(".content-helper").css({"background": "#fff", "color": "#000"}); $(".form-control").css({"color": "#1c2e42"}); $(".dropdown-menu").css({"background-color": "#fff"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#1c2e42"}); $(".dropdown-menu__item.ng-binding:hover").css({"background-color": "#293d48"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#293d48"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#fff", "color": "#2899ce"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#fff"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#fff", "color": "#1c2e42"}); $(".content .entry.user-unread").css({"background-color": "#dbc5ca"}); $(".content .chat-message-sender").css({"color": "#2c3e50"}); $(".form-control").css({"background-color": "#fff"}); $(".dropdown-menu > li > a").css({"border": "none", "color": "#555"}); $(".chat-form .chat-tools-area").css({"background-color": "#bcdaff", "border": "none"}); $(".chat-upload .drop-zone").css({"background-color": "#d1e2ff"}); $(".notification-modal .modal-content").css({"background-color": "#fff"}); $(".notification-modal").css({"background": "rgba(40, 153, 206, 0.7)"}); $(".right-sidebar").css({"background": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#fafafa"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgba(227, 227, 227, 0.3)", "color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "none", "color": "#2899ce"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgba(40, 153, 206, 0.1)"}); $(".loader-cover-area").css({"background-color": "rgba(40, 153, 206, 0.75)"}); $(".btn.btn-brand-alert").css({"background": "linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%)"}); $(".panel-left").css({"background-color": "#1c2e42"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\' style="text-decoration: none;" hidden>🌙</a> </span>');
	
	
	
	
	
	if (document.getElementById("unlockScreenBlockers") != null) { document.getElementById("unlockScreenBlockers").onclick = function deleteAllBlockers(){
		if(document.getElementsByClassName("modal")[0] != undefined){ blockerElementChat = document.getElementsByClassName("modal")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("react-confirm-alert-body")[0] != undefined){ blockerElementChat = document.getElementsByClassName("react-confirm-alert-body")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("loader-wrapper_AaVrp")[0] != undefined){ blockerElementChat = document.getElementsByClassName("loader-wrapper_AaVrp")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("react-confirm-alert-overlay")[0] != undefined){ blockerElementChat = document.getElementsByClassName("react-confirm-alert-overlay")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("popup-modal_1z-N8")[0] != undefined){ blockerElementChat = document.getElementsByClassName("popup-modal_1z-N8")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("popup-modal_fullscreen_2Nimt")[0] != undefined){ blockerElementChat = document.getElementsByClassName("popup-modal_fullscreen_2Nimt")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("hj-decision-loader")[0] != undefined){ blockerElementChat = document.getElementsByClassName("hj-decision-loader")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("loader-cover-area")[0] != undefined){ blockerElementChat = document.getElementsByClassName("loader-cover-area")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("modal-backdrop")[0] != undefined){ blockerElementChat = document.getElementsByClassName("modal-backdrop")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("popup_3xxDP")[0] != undefined){ blockerElementChat = document.getElementsByClassName("popup_3xxDP")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
	}} else { console.log("unlockScreenBlockers DOES NOT EXIST"); };
});

(window.onload = function() {
	createSettingsMainQChat();
})();


function createSettingsMainQChat() {
	setTimeout( function() {
		
		if ( $('#settingsBtnChat').text() == '⚙️') {
			loadSettingsMainQChat();
			saveSettingsMainQChat();
			logoutMagicChat();
			level1FixesChat();
			benefitsWalletMagicChat();
			//cleanStyleCSSChat();
			chatnotesInitInjector();
			chatfillWIthNotes();
			chatinjectSriptsforNotes();
			console.log("Settings injected");
			return;
		}
		else { console.log("Waiting for injection");
		
	$('button:contains("My profile")').parent().parent().prepend(settingsbuttoncode);
	
	$("body").append('<div id="settingsModal" class="settingsModalcss"> <div class="modal-content-css-setchat"> <span id="settingsVerChat" class="settingchatver">'+ extversionchatstyle +'</span> <span id="settingsBtncloser" class="closesettings">Save & Close</span> <!-- Main Design --> <div class="tg-wrap"> <table class="tg"> <thead> <div class="tg-wrap"> <table class="tg"> <thead> <tr hidden> <th class="tg-c3ow" colspan="8">Chat CRM Settings</th> </tr> </thead> <tbody> <tr style="border-bottom: 1px solid #424242;"> <td class="tg-c3ow" colspan="4" style="text-align: right; font-size: 28px;">Page style:</td> <td class="tg-c3ow" colspan="2"> <span id="stylerChangerChatik"> <a href="#" id="chatwhitedes" onclick=\'document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = false; document.getElementById("chatblackdes").hidden = true; $("body").css({"background-color": "#1a1d21", "color": "#fff"}); $(".content-header").css({"background": "#1a1d21", "color": "#fff"}); $(".content-helper").css({"background": "#1a1d21", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#1a1d21"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#7e7e7e"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#1a1d21", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#1a1d21"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#1a1d21", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#1a1d21"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#1a1d21", "border": "1px solid #000"}); $(".chat-upload .drop-zone").css({"background-color": "#000"}); $(".notification-modal .modal-content").css({"background-color": "#1a1d21"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#1a1d21", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "#000", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "rgb(36 36 36)", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#1a1d21"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "#04101e"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"}); $(".chat-message-time-tolltip").css({"color": "#fff"}); $(".chat-message-component .chat-icr-component-resolved button").css({"color": "#fff"}); $(".content .entry.user").css({"background-color": "#172c0c"}); $(".content .entry.bot").css({"background-color": "#122934"}); $(".chat-message-download-title").css({"color": "#2e85e5"});\' style="text-align: left; text-decoration: none; font-size: 28px;" hidden>☀️Bright</a> <a href="#" id="chatbluedes" onclick=\'document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = false; $("body").css({"background-color": "#000", "color": "#fff"}); $(".content-header").css({"background": "#000", "color": "#fff"}); $(".content-helper").css({"background": "#000", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#000"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#545454"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#000"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#000", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#000"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#000", "border": "1px solid #666"}); $(".chat-upload .drop-zone").css({"background-color": "#181818"}); $(".notification-modal .modal-content").css({"background-color": "#000"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#000", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgb(36 36 36)", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "#000", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#e9e9e9"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "rgb(1 6 12)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"}); $(".chat-message-time-tolltip").css({"color": "#fff"}); $(".chat-message-component .chat-icr-component-resolved button").css({"color": "#fff"}); $(".content .entry.user").css({"background-color": "#0b1c02"}); $(".content .entry.bot").css({"background-color": "#06161e"}); $(".chat-message-download-title").css({"color": "#1863b7"});\' style="text-align: left; text-decoration: none; font-size: 28px;" hidden>🔆Dark</a> <a href="#" id="chatblackdes" onclick=\'document.getElementById("chatwhitedes").hidden = false; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = true; $("body").css({"background-color": "#fff", "color": "#1c2e42"}); $(".content-header").css({"background": "#fff", "color": "#000"}); $(".content-helper").css({"background": "#fff", "color": "#000"}); $(".form-control").css({"color": "#1c2e42"}); $(".dropdown-menu").css({"background-color": "#fff"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#1c2e42"}); $(".dropdown-menu__item.ng-binding:hover").css({"background-color": "#293d48"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#293d48"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#fff", "color": "#2899ce"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#fff"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#fff", "color": "#1c2e42"}); $(".content .entry.user-unread").css({"background-color": "#dbc5ca"}); $(".content .chat-message-sender").css({"color": "#2c3e50"}); $(".form-control").css({"background-color": "#fff"}); $(".dropdown-menu > li > a").css({"border": "none", "color": "#555"}); $(".chat-form .chat-tools-area").css({"background-color": "#bcdaff", "border": "none"}); $(".chat-upload .drop-zone").css({"background-color": "#d1e2ff"}); $(".notification-modal .modal-content").css({"background-color": "#fff"}); $(".notification-modal").css({"background": "rgba(40, 153, 206, 0.7)"}); $(".right-sidebar").css({"background": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#fafafa"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgba(227, 227, 227, 0.3)", "color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "none", "color": "#2899ce"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgba(40, 153, 206, 0.1)"}); $(".loader-cover-area").css({"background-color": "rgba(40, 153, 206, 0.75)"}); $(".btn.btn-brand-alert").css({"background": "linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%)"}); $(".panel-left").css({"background-color": "#1c2e42"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"}); $(".chat-message-time-tolltip").css({"color": "#1c2e42"}); $(".chat-message-component .chat-icr-component-resolved button").css({"color": "#1c2e42"}); $(".content .entry.user").css({"background-color": "#f1faec"}); $(".content .entry.bot").css({"background-color": "#EAF5FA"}); $(".chat-message-download-title").css({"color": "#1c2e42"});\' style="text-align: left; text-decoration: none; font-size: 28px;" hidden>🌙Void</a> </span> </td> </tr> <tr> <td colspan="1"></td> <td class="hasTooltip" colspan="1" style="text-align: right;">💬<span>While enabled, will rearange some items on screen to make space usage more efficient</span></td> <td class="tg-c3ow" colspan="3">Tidy up design</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix1"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td colspan="1"></td> </tr> <tr> <td class="hasTooltip">💬<span>While enabled, will expand call recording preview to full width of the screen</span></td> <td class="tg-c3ow" colspan="2">Expanded Recording Preview</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix2"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>Will load Benefits Wallet inside of Insurance tab and no longer blocks the whole screen. To close/reload simply change tab to any other than Insurance</span></td> <td class="tg-c3ow" colspan="1">Inline Benefits Wallet</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix3"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <tr> <td class="hasTooltip">💬<span>When enabled, near the group name there will be quick link that will open search in KB for a group name, only useful when for some reason the group in CRM profile is not a link and just a text</span></td> <td class="tg-c3ow" colspan="2">Add group search button</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix4"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>While enabled, you will need to press Logout button 3 times to log yourself out (prevents accidental logout)</span></td> <td class="tg-c3ow" colspan="1">Require 3 clicks to logout</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix5"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> </tbody> </table> </div> </thead> </table> </div> </div></div>')
	
	
	settingsModal = document.getElementById("settingsModal");
	settingsBtn = document.getElementById("settingsBtnChat");
	settingsBtncloser = document.getElementById("settingsBtncloser");
	spanSettingsCloser = document.getElementsByClassName("closesettings")[0];
	if (settingsBtn != null) { settingsBtn.onclick = function() { settingsModal.style.display = "block"; } }
	
		createSettingsMainQChat(); }
	}, 500)
}

function loadSettingsMainQChat() {
	chrome.storage.local.get(['chatFix1Localsave'], function(result) {
		if (result.chatFix1Localsave == "0") { $("input[name=chatFix1]").prop('checked', false); redesignStatusChat = "0"; } else { $("input[name=chatFix1]").prop('checked', true); redesignStatusChat = "1"; };
	}); // Redesign
	chrome.storage.local.get(['crmFix7Localsave'], function(result) {
		if (result.crmFix7Localsave == "0") { $("input[name=chatFix2]").prop('checked', false); } else { $("input[name=chatFix2]").prop('checked', true); };
	}); // Expanded Recording Preview
	chrome.storage.local.get(['crmFix2Localsave'], function(result) {
		if (result.crmFix2Localsave == "0") { $("input[name=chatFix3]").prop('checked', false); benefitsWalletStatusChat = "0"; } else { $("input[name=chatFix3]").prop('checked', true); benefitsWalletStatusChat = "1"; };
	}); // Inline Benefits Wallet
	chrome.storage.local.get(['crmFix5Localsave'], function(result) {
		if (result.crmFix5Localsave == "0") { $("input[name=chatFix4]").prop('checked', false); addSearchgroupStatusChat = "0"; } else { $("input[name=chatFix4]").prop('checked', true); addSearchgroupStatusChat = "1"; };
	}); // Add group search button
	chrome.storage.local.get(['crmFix4Localsave'], function(result) {
		if (result.crmFix4Localsave == "0") { $("input[name=chatFix5]").prop('checked', false); triclicksLogoutStatusChat = "0"; } else { $("input[name=chatFix5]").prop('checked', true); triclicksLogoutStatusChat = "1"; };
	}); // Require 3 clicks to logout
	
	
	chrome.storage.local.get(['desChatMainLocalsave'], function(result) {
		if (result.desChatMainLocalsave == "1") { document.getElementById("chatwhitedes").hidden = false; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = true; designSelectedChatMagic = "1"; }
		
		else if (result.desChatMainLocalsave == "2") { document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = false; document.getElementById("chatblackdes").hidden = true; designSelectedChatMagic = "2"; addCSSChat(cssGreyChatInjector); }
		
		else if (result.desChatMainLocalsave == "3") { document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = false; designSelectedChatMagic = "3"; addCSSChat(cssBlackChatInjector); }
		
		else { document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = false; }
	});
}

function saveSettingsMainQChat() {
	if (settingsBtncloser != null) { settingsBtncloser.onclick = function() { settingsModal.style.display = "none"; 
		if ($("input[name=chatFix1]").prop("checked") == true) { chrome.storage.local.set({"chatFix1Localsave": "1"}); } else { chrome.storage.local.set({"chatFix1Localsave": "0"}); };
		if ($("input[name=chatFix2]").prop("checked") == true) { chrome.storage.local.set({"crmFix7Localsave": "1"}); } else { chrome.storage.local.set({"crmFix7Localsave": "0"}); };
		if ($("input[name=chatFix3]").prop("checked") == true) { chrome.storage.local.set({"crmFix2Localsave": "1"}); } else { chrome.storage.local.set({"crmFix2Localsave": "0"}); };
		if ($("input[name=chatFix4]").prop("checked") == true) { chrome.storage.local.set({"crmFix5Localsave": "1"}); } else { chrome.storage.local.set({"crmFix5Localsave": "0"}); };
		if ($("input[name=chatFix5]").prop("checked") == true) { chrome.storage.local.set({"crmFix4Localsave": "1"}); } else { chrome.storage.local.set({"crmFix4Localsave": "0"}); };
		
		if (document.getElementById("chatwhitedes").hidden == false) { chrome.storage.local.set({"desChatMainLocalsave": "1"}); }
		else if (document.getElementById("chatbluedes").hidden == false) { chrome.storage.local.set({"desChatMainLocalsave": "2"}); }
		else if (document.getElementById("chatblackdes").hidden == false) { chrome.storage.local.set({"desChatMainLocalsave": "3"}); }
	} }
	
	
	
}

function level1FixesChat() {
	setTimeout( function() {
			if (addSearchgroupStatusChat == "0") { return; }
			else if (addSearchgroupStatusChat == "1" && document.getElementsByClassName("profile-info-header-plan")[0] != undefined && onceonlyGroupPlsChat === 0) {
				document.getElementsByClassName("profile-info-header-plan")[0].setAttribute("id","groupNameAreaBOP");
				var mmGroupLink = ($("#groupNameAreaBOP").children().next().html());
				$('#groupNameAreaBOP').append('| <a id="openChatButtonBOP" target="_blank" href="https://healthjoy.atlassian.net/wiki/search?text=' + mmGroupLink + '">Search group in KB</a> |');
				onceonlyGroupPlsChat = 1;
			}
			else { level1FixesChat(); }
	}, 650)
}

function benefitsWalletMagicChat() {
	if (benefitsWalletStatusChat == "1") {
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
			}
		benefitsWalletMagicChat();
		}, 750)
	}
}

function logoutMagicChat() {
	if (triclicksLogoutStatusChat == "1") {
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
}

function cleanStyleCSSChat() {
	if (redesignStatusChat == "1") {
		addCSSChat('.content-header { width: calc(100% - 53.8em); } .workspace-file-upload { min-width: 220px; }  .workspace-customerSearch { justify-content: start; } .workspace-customerSearch .form-control { width: 19.5em; } .workspace-customerSearch .dropdown-menu { left: -24.4em; }  .panel-right.animate-show { padding-top: 0px; z-index: 201; } .right-sidebar { margin-top: 0px; } .profile-info .profile-info-header { height: 10.1em; } .profile-info .profile-info-header .profile-info-header-title .profile-info-header-description .profile-info-header-actions { flex-direction: row; } .profile-info .profile-info-content .profile-info-tabset .tab-content { top: 14.4em; height: calc(100% - 17.9em); } .profile-info .profile-info-footer .profile-info-footer-btns { padding: 0.1em 0 0 0; } .profile-info .profile-info-footer { height: 3.5em; } .panel-left { margin-top: 6.8em; height: calc(100% - 102px); } .content-helper { left: 0em; } ');
	}
}

function whiteStylerLiveChat() {
	$("body").css({"background-color": "#fff", "color": "#1c2e42"});
	$(".content-header").css({"background": "#fff", "color": "#000"});
	$(".content-helper").css({"background": "#fff", "color": "#000"});
	$(".form-control").css({"color": "#1c2e42"});
	$(".dropdown-menu").css({"background-color": "#fff"});
	$(".workspace-customerSearch .dropdown-menu__item").css({"color": "#1c2e42"});
	$(".dropdown-menu__item.ng-binding:hover").css({"background-color": "#293d48"});
	$( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css('background-color', '#293d48'); }, function() { $( this ).css('background', 'inherit'); } );
	$(".btn.btn-brand-white").css({"background-color": "#fff", "color": "#2899ce"});
	$(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"});
	$(".chat-date-human").css({"background": "#fff"});
	$(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#fff", "color": "#1c2e42"});
	$(".content .entry.user-unread").css({"background-color": "#dbc5ca"});
	$(".content .chat-message-sender").css({"color": "#2c3e50"});
	$(".form-control").css({"background-color": "#fff"});
	$(".dropdown-menu > li > a").css({"border": "none", "color": "#555"});
	$(".chat-form .chat-tools-area").css({"background-color": "#bcdaff", "border": "none"});
	$(".chat-upload .drop-zone").css({"background-color": "#d1e2ff"});
	$(".notification-modal .modal-content").css({"background-color": "#fff"});
	$(".notification-modal").css({"background": "rgba(40, 153, 206, 0.7)"});
	$(".right-sidebar").css({"background": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#fafafa"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#000"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgba(227, 227, 227, 0.3)", "color": "#1c2e42"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "none", "color": "#2899ce"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#1c2e42"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#fff"});
	$(".typeahead-custom .typeahead-custom-i").css({"background-color": "#fff"});
	$(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgba(40, 153, 206, 0.1)"});
	$(".loader-cover-area").css({"background-color": "rgba(40, 153, 206, 0.75)"});
	$(".btn.btn-brand-alert").css({"background": "linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%)"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%)"});
	$(".panel-left").css({"background-color": "#1c2e42"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});
	// 1.11 Update (Fix for products)
	$('h3[class="products__page_subtitle"]').css({"color": "#1c2e42"});
	$('div[class="products-wrapper"]').css({"background-color": "#fff"});
	$('div[class="products__title"]').css({"color": "#1c2e42"});
}

function greyStylerLiveChat() {
	$("body").css({"background-color": "#1a1d21", "color": "#fff"});
	$(".content-header").css({"background": "#1a1d21", "color": "#fff"});
	$(".content-helper").css({"background": "#1a1d21", "color": "#fff"});
	$(".form-control").css({"color": "#fff"});
	$(".dropdown-menu").css({"background-color": "#1a1d21"});
	$(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"});
	$( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css('background-color', '#7e7e7e'); }, function() { $( this ).css('background', 'inherit'); } );
	$(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"});
	$(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"});
	$(".chat-date-human").css({"background": "#1a1d21"});
	$(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#1a1d21", "color": "#fff"});
	$(".content .entry.user-unread").css({"background-color": "#3c0713"});
	$(".content .chat-message-sender").css({"color": "#63aef9"});
	$(".form-control").css({"background-color": "#1a1d21"});
	$(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"});
	$(".chat-form .chat-tools-area").css({"background-color": "#1a1d21", "border": "1px solid #000"});
	$(".chat-upload .drop-zone").css({"background-color": "#000"});
	$(".notification-modal .modal-content").css({"background-color": "#1a1d21"});
	$(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"});
	$(".right-sidebar").css({"background": "#1a1d21"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#1a1d21"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#1a1d21", "color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "#000", "color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "rgb(36 36 36)", "color": "#0fa6ed"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#1a1d21"});
	$(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"});
	$(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"});
	$(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"});
	$(".btn.btn-brand-alert").css({"background": "#780101"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"});
	$(".panel-left").css({"background-color": "#04101e"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});
	// 1.11 Update (Fix for products)
	$('h3[class="products__page_subtitle"]').css({"color": "#fff"});
	$('div[class="products-wrapper"]').css({"background-color": "#1a1d21"});
	$('div[class="products__title"]').css({"color": "#fff"});
}

function blackStylerLiveChat() {
	$("body").css({"background-color": "#000", "color": "#fff"});
	$(".content-header").css({"background": "#000", "color": "#fff"});
	$(".content-helper").css({"background": "#000", "color": "#fff"});
	$(".form-control").css({"color": "#fff"});
	$(".dropdown-menu").css({"background-color": "#000"});
	$(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"});
	$( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css('background-color', '#545454'); }, function() { $( this ).css('background', 'inherit'); } );
	$(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"});
	$(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"});
	$(".chat-date-human").css({"background": "#000"});
	$(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#000", "color": "#fff"});
	$(".content .entry.user-unread").css({"background-color": "#3c0713"});
	$(".content .chat-message-sender").css({"color": "#63aef9"});
	$(".form-control").css({"background-color": "#000"});
	$(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"});
	$(".chat-form .chat-tools-area").css({"background-color": "#000", "border": "1px solid #666"});
	$(".chat-upload .drop-zone").css({"background-color": "#181818"});
	$(".notification-modal .modal-content").css({"background-color": "#000"});
	$(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"});
	$(".right-sidebar").css({"background": "#000"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#000"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#000", "color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgb(36 36 36)", "color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "#000", "color": "#0fa6ed"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#e9e9e9"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#000"});
	$(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"});
	$(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"});
	$(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"});
	$(".btn.btn-brand-alert").css({"background": "#780101"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"});
	$(".panel-left").css({"background-color": "rgb(1 6 12)"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});
	// 1.11 Update (Fix for products)
	$('h3[class="products__page_subtitle"]').css({"color": "#fff"});
	$('div[class="products-wrapper"]').css({"background-color": "#000"});
	$('div[class="products__title"]').css({"color": "#dbdbdb"});
}


function addCSSChat(css){
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


function chatfillWIthNotes() {
	$("body").append('<div id="greetnotesModal" class="greetnnotesModalcss"> <div class="modal-content-css-greetnotes"> <span><button style="background: #000000; color: violet; border: 1px solid Violet;" id="notesfaqbut"> ? </button> Smart notes: <input type="checkbox" id="smartnotesstatus" style="transform : scale(2);"> <span id="hccnameblockid" style="padding-left: 3px;" hidden>HCC Name: <input type="text" id="hccnameboxid" name="hccnamebox" class="hccnameclas" size="10" style="max-width: 80px; height: 20px; background: rgba(0,0,0,0); color: #ffffff;"> </span> </span> <span id="greetnotesBtncloser" class="greetnotesecselec">Close</span> <!-- Main Design --> <br><br> <span class="shortcutsmartnotes" id="smartnotesfaq" hidden>Replaces [TAG] in the note with dynamic information if smart notes are enabled. <br>[HCC] - Will paste name of HCC, [MEMBER] - Will paste name from member profile, <br>[DATE] - Will paste today\'s date</span> <div class="tg-wrap"> <div class="row"> <div class="column"> <table> <tr> <th style="text-align: center;">Name</th> <th>Note</th> <th class="copybotinchik"></th> </tr> <tr> <td><span class="nametextik" id="notename1"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote1text" value=""></textarea><button class="smallbutonchik" id="note1save">💾</button></td> <td><button class="copybotinchik" id="note1copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename3"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote3text" value=""></textarea><button class="smallbutonchik" id="note3save">💾</button></td> <td><button class="copybotinchik" id="note3copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename5"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote5text" value=""></textarea><button class="smallbutonchik" id="note5save">💾</button></td> <td><button class="copybotinchik" id="note5copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename7"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote7text" value=""></textarea><button class="smallbutonchik" id="note7save">💾</button></td> <td><button class="copybotinchik" id="note7copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename9"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote9text" value=""></textarea><button class="smallbutonchik" id="note9save">💾</button></td> <td><button class="copybotinchik" id="note9copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename11"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote11text" value=""></textarea><button class="smallbutonchik" id="note11save">💾</button></td> <td><button class="copybotinchik" id="note11copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename13"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote13text" value=""></textarea><button class="smallbutonchik" id="note13save">💾</button></td> <td><button class="copybotinchik" id="note13copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename15"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote15text" value=""></textarea><button class="smallbutonchik" id="note15save">💾</button></td> <td><button class="copybotinchik" id="note15copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename17"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote17text" value=""></textarea><button class="smallbutonchik" id="note17save">💾</button></td> <td><button class="copybotinchik" id="note17copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename19"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote19text" value=""></textarea><button class="smallbutonchik" id="note19save">💾</button></td> <td><button class="copybotinchik" id="note19copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename21"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote21text" value=""></textarea><button class="smallbutonchik" id="note21save">💾</button></td> <td><button class="copybotinchik" id="note21copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename23"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote23text" value=""></textarea><button class="smallbutonchik" id="note23save">💾</button></td> <td><button class="copybotinchik" id="note23copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename25"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote25text" value=""></textarea><button class="smallbutonchik" id="note25save">💾</button></td> <td><button class="copybotinchik" id="note25copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename27"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote27text" value=""></textarea><button class="smallbutonchik" id="note27save">💾</button></td> <td><button class="copybotinchik" id="note27copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename29"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote29text" value=""></textarea><button class="smallbutonchik" id="note29save">💾</button></td> <td><button class="copybotinchik" id="note29copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename31"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote31text" value=""></textarea><button class="smallbutonchik" id="note31save">💾</button></td> <td><button class="copybotinchik" id="note31copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename33"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote33text" value=""></textarea><button class="smallbutonchik" id="note33save">💾</button></td> <td><button class="copybotinchik" id="note33copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename35"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote35text" value=""></textarea><button class="smallbutonchik" id="note35save">💾</button></td> <td><button class="copybotinchik" id="note35copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename37"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote37text" value=""></textarea><button class="smallbutonchik" id="note37save">💾</button></td> <td><button class="copybotinchik" id="note37copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename39"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote39text" value=""></textarea><button class="smallbutonchik" id="note39save">💾</button></td> <td><button class="copybotinchik" id="note39copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename41"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote41text" value=""></textarea><button class="smallbutonchik" id="note41save">💾</button></td> <td><button class="copybotinchik" id="note41copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename43"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote43text" value=""></textarea><button class="smallbutonchik" id="note43save">💾</button></td> <td><button class="copybotinchik" id="note43copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename45"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote45text" value=""></textarea><button class="smallbutonchik" id="note45save">💾</button></td> <td><button class="copybotinchik" id="note45copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename47"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote47text" value=""></textarea><button class="smallbutonchik" id="note47save">💾</button></td> <td><button class="copybotinchik" id="note47copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename49"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote49text" value=""></textarea><button class="smallbutonchik" id="note49save">💾</button></td> <td><button class="copybotinchik" id="note49copy">📋</button></td> </tr> </table> </div> <div class="column"> <table style="float: right;"> <tr> <th style="text-align: center;">Name</th> <th>Note</th> <th class="copybotinchik"></th> </tr> <tr> <td><span class="nametextik" id="notename2"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote2text" value=""></textarea><button class="smallbutonchik" id="note2save">💾</button></td> <td><button class="copybotinchik" id="note2copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename4"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote4text" value=""></textarea><button class="smallbutonchik" id="note4save">💾</button></td> <td><button class="copybotinchik" id="note4copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename6"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote6text" value=""></textarea><button class="smallbutonchik" id="note6save">💾</button></td> <td><button class="copybotinchik" id="note6copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename8"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote8text" value=""></textarea><button class="smallbutonchik" id="note8save">💾</button></td> <td><button class="copybotinchik" id="note8copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename10"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote10text" value=""></textarea><button class="smallbutonchik" id="note10save">💾</button></td> <td><button class="copybotinchik" id="note10copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename12"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote12text" value=""></textarea><button class="smallbutonchik" id="note12save">💾</button></td> <td><button class="copybotinchik" id="note12copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename14"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote14text" value=""></textarea><button class="smallbutonchik" id="note14save">💾</button></td> <td><button class="copybotinchik" id="note14copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename16"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote16text" value=""></textarea><button class="smallbutonchik" id="note16save">💾</button></td> <td><button class="copybotinchik" id="note16copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename18"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote18text" value=""></textarea><button class="smallbutonchik" id="note18save">💾</button></td> <td><button class="copybotinchik" id="note18copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename20"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote20text" value=""></textarea><button class="smallbutonchik" id="note20save">💾</button></td> <td><button class="copybotinchik" id="note20copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename22"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote22text" value=""></textarea><button class="smallbutonchik" id="note22save">💾</button></td> <td><button class="copybotinchik" id="note22copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename24"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote24text" value=""></textarea><button class="smallbutonchik" id="note24save">💾</button></td> <td><button class="copybotinchik" id="note24copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename26"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote26text" value=""></textarea><button class="smallbutonchik" id="note26save">💾</button></td> <td><button class="copybotinchik" id="note26copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename28"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote28text" value=""></textarea><button class="smallbutonchik" id="note28save">💾</button></td> <td><button class="copybotinchik" id="note28copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename30"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote30text" value=""></textarea><button class="smallbutonchik" id="note30save">💾</button></td> <td><button class="copybotinchik" id="note30copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename32"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote32text" value=""></textarea><button class="smallbutonchik" id="note32save">💾</button></td> <td><button class="copybotinchik" id="note32copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename34"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote34text" value=""></textarea><button class="smallbutonchik" id="note34save">💾</button></td> <td><button class="copybotinchik" id="note34copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename36"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote36text" value=""></textarea><button class="smallbutonchik" id="note36save">💾</button></td> <td><button class="copybotinchik" id="note36copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename38"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote38text" value=""></textarea><button class="smallbutonchik" id="note38save">💾</button></td> <td><button class="copybotinchik" id="note38copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename40"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote40text" value=""></textarea><button class="smallbutonchik" id="note40save">💾</button></td> <td><button class="copybotinchik" id="note40copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename42"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote42text" value=""></textarea><button class="smallbutonchik" id="note42save">💾</button></td> <td><button class="copybotinchik" id="note42copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename44"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote44text" value=""></textarea><button class="smallbutonchik" id="note44save">💾</button></td> <td><button class="copybotinchik" id="note44copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename46"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote46text" value=""></textarea><button class="smallbutonchik" id="note46save">💾</button></td> <td><button class="copybotinchik" id="note46copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename48"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote48text" value=""></textarea><button class="smallbutonchik" id="note48save">💾</button></td> <td><button class="copybotinchik" id="note48copy">📋</button></td> </tr> <tr> <td><span class="nametextik" id="notename50"></span></td> <td class="notewithtext"><textarea rows="1" cols="10" class="textofnotex" id="chatnote50text" value=""></textarea><button class="smallbutonchik" id="note50save">💾</button></td> <td><button class="copybotinchik" id="note50copy">📋</button></td> </tr> </table> </div> </div> </div> </div></div>');
	
	// Get the modal
	greetnotesModal = document.getElementById("greetnotesModal");
	//And closes
	greetnotesBtncloser = document.getElementById("greetnotesBtncloser");
	
	// When the user clicks on <span> (x), close the modal and save settings
	if (greetnotesBtncloser != null) { greetnotesBtncloser.onclick = function() { greetnotesModal.style.display = "none"; } }
}


function chatnotesInitInjector() {
	setTimeout( function() {
		if (document.getElementById("chatbookSelectorBtn") == null || document.getElementById("chatbookSelectorBtn") == undefined) {
			$('button:contains("My profile")').parent().parent().prepend('<table class="quickmenustyler"><tbody> <tr> <td><button class="quickselectfornoteschat" id="qucknotecopychat1">1</button><button class="quickselectfornoteschat" id="qucknotecopychat3">3</button></td> </tr></tbody></table><table class="quickmenustyler"><tbody> <tr> <td><button class="quickselectfornoteschat" id="qucknotecopychat2">2</button><button class="quickselectfornoteschat" id="qucknotecopychat4">4</button></td> </tr></tbody></table>');
			$('button:contains("My profile")').parent().parent().prepend('<button class="btn btn-brand-primary btn-logout" id="chatbookSelectorBtn" style="margin-left: 10px;">📝</button>');
			quckNotesInjectorChats();
			// Get the button that opens the modal
			chatbookSelectorBtn = document.getElementById("chatbookSelectorBtn");
			// When the user clicks the button, open the modal 
			if (chatbookSelectorBtn != null) { chatbookSelectorBtn.onclick = function() { greetnotesModal.style.display = "block"; } }
			return;
		} else { chatnotesInitInjector(); }
	}, 2000)
}

var runonlyoncecc = 0;
function chatinjectSriptsforNotes() {
	if (runonlyoncecc == 0) {
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
	chrome.storage.local.get(['chatnote1save'], function(result) {
		if (result.chatnote1save != null) { 
			document.getElementById("chatnote1text").value = result.chatnote1save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote2save'], function(result) {
		if (result.chatnote2save != null) { 
			document.getElementById("chatnote2text").value = result.chatnote2save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote3save'], function(result) {
		if (result.chatnote3save != null) { 
			document.getElementById("chatnote3text").value = result.chatnote3save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote4save'], function(result) {
		if (result.chatnote4save != null) { 
			document.getElementById("chatnote4text").value = result.chatnote4save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote5save'], function(result) {
		if (result.chatnote5save != null) { 
			document.getElementById("chatnote5text").value = result.chatnote5save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote6save'], function(result) {
		if (result.chatnote6save != null) { 
			document.getElementById("chatnote6text").value = result.chatnote6save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote7save'], function(result) {
		if (result.chatnote7save != null) { 
			document.getElementById("chatnote7text").value = result.chatnote7save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote8save'], function(result) {
		if (result.chatnote8save != null) { 
			document.getElementById("chatnote8text").value = result.chatnote8save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote9save'], function(result) {
		if (result.chatnote9save != null) { 
			document.getElementById("chatnote9text").value = result.chatnote9save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote10save'], function(result) {
		if (result.chatnote10save != null) { 
			document.getElementById("chatnote10text").value = result.chatnote10save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote11save'], function(result) {
		if (result.chatnote11save != null) { 
			document.getElementById("chatnote11text").value = result.chatnote11save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote12save'], function(result) {
		if (result.chatnote12save != null) { 
			document.getElementById("chatnote12text").value = result.chatnote12save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote13save'], function(result) {
		if (result.chatnote13save != null) { 
			document.getElementById("chatnote13text").value = result.chatnote13save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote14save'], function(result) {
		if (result.chatnote14save != null) { 
			document.getElementById("chatnote14text").value = result.chatnote14save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote15save'], function(result) {
		if (result.chatnote15save != null) { 
			document.getElementById("chatnote15text").value = result.chatnote15save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote16save'], function(result) {
		if (result.chatnote16save != null) { 
			document.getElementById("chatnote16text").value = result.chatnote16save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote17save'], function(result) {
		if (result.chatnote17save != null) { 
			document.getElementById("chatnote17text").value = result.chatnote17save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote18save'], function(result) {
		if (result.chatnote18save != null) { 
			document.getElementById("chatnote18text").value = result.chatnote18save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote19save'], function(result) {
		if (result.chatnote19save != null) { 
			document.getElementById("chatnote19text").value = result.chatnote19save;
		}
	}); 
	
	chrome.storage.local.get(['dcnote20save'], function(result) {
		if (result.chatnote20save != null) { 
			document.getElementById("chatnote20text").value = result.chatnote20save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote21save'], function(result) {
		if (result.chatnote21save != null) { 
			document.getElementById("chatnote21text").value = result.chatnote21save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote22save'], function(result) {
		if (result.chatnote22save != null) { 
			document.getElementById("chatnote22text").value = result.chatnote22save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote23save'], function(result) {
		if (result.chatnote23save != null) { 
			document.getElementById("chatnote23text").value = result.chatnote23save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote24save'], function(result) {
		if (result.chatnote24save != null) { 
			document.getElementById("chatnote24text").value = result.chatnote24save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote25save'], function(result) {
		if (result.chatnote25save != null) { 
			document.getElementById("chatnote25text").value = result.chatnote25save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote26save'], function(result) {
		if (result.chatnote26save != null) { 
			document.getElementById("chatnote26text").value = result.chatnote26save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote27save'], function(result) {
		if (result.chatnote27save != null) { 
			document.getElementById("chatnote27text").value = result.chatnote27save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote28save'], function(result) {
		if (result.chatnote28save != null) { 
			document.getElementById("chatnote28text").value = result.chatnote28save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote29save'], function(result) {
		if (result.chatnote29save != null) { 
			document.getElementById("chatnote29text").value = result.chatnote29save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote30save'], function(result) {
		if (result.chatnote30save != null) { 
			document.getElementById("chatnote30text").value = result.chatnote30save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote31save'], function(result) {
		if (result.chatnote31save != null) { 
			document.getElementById("chatnote31text").value = result.chatnote31save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote32save'], function(result) {
		if (result.chatnote32save != null) { 
			document.getElementById("chatnote32text").value = result.chatnote32save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote33save'], function(result) {
		if (result.chatnote33save != null) { 
			document.getElementById("chatnote33text").value = result.chatnote33save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote34save'], function(result) {
		if (result.chatnote34save != null) { 
			document.getElementById("chatnote34text").value = result.chatnote34save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote35save'], function(result) {
		if (result.chatnote35save != null) { 
			document.getElementById("chatnote35text").value = result.chatnote35save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote36save'], function(result) {
		if (result.chatnote36save != null) { 
			document.getElementById("chatnote36text").value = result.chatnote36save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote37save'], function(result) {
		if (result.chatnote37save != null) { 
			document.getElementById("chatnote37text").value = result.chatnote37save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote38save'], function(result) {
		if (result.chatnote38save != null) { 
			document.getElementById("chatnote38text").value = result.chatnote38save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote39save'], function(result) {
		if (result.chatnote39save != null) { 
			document.getElementById("chatnote39text").value = result.chatnote39save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote40save'], function(result) {
		if (result.chatnote40save != null) { 
			document.getElementById("chatnote40text").value = result.chatnote40save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote41save'], function(result) {
		if (result.chatnote41save != null) { 
			document.getElementById("chatnote41text").value = result.chatnote41save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote42save'], function(result) {
		if (result.chatnote42save != null) { 
			document.getElementById("chatnote42text").value = result.chatnote42save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote43save'], function(result) {
		if (result.chatnote43save != null) { 
			document.getElementById("chatnote43text").value = result.chatnote43save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote44save'], function(result) {
		if (result.chatnote44save != null) { 
			document.getElementById("chatnote44text").value = result.chatnote44save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote45save'], function(result) {
		if (result.chatnote45save != null) { 
			document.getElementById("chatnote45text").value = result.chatnote45save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote46save'], function(result) {
		if (result.chatnote46save != null) { 
			document.getElementById("chatnote46text").value = result.chatnote46save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote47save'], function(result) {
		if (result.chatnote47save != null) { 
			document.getElementById("chatnote47text").value = result.chatnote47save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote48save'], function(result) {
		if (result.chatnote48save != null) { 
			document.getElementById("chatnote48text").value = result.chatnote48save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote49save'], function(result) {
		if (result.chatnote49save != null) { 
			document.getElementById("chatnote49text").value = result.chatnote49save;
		}
	}); 
	
	chrome.storage.local.get(['chatnote50save'], function(result) {
		if (result.chatnote50save != null) { 
			document.getElementById("chatnote50text").value = result.chatnote50save;
		}
	}); 
}
	
	/* Load name of notes */
if (true) { //group elements for minimizing in editor
	chrome.storage.local.get(['namechatnote1save'], function(result) {
		
			document.getElementById("notename1").innerHTML = result.namechatnote1save;
	});
	
	chrome.storage.local.get(['namechatnote2save'], function(result) {
		
			document.getElementById("notename2").innerHTML = result.namechatnote2save;
	}); 
	
	chrome.storage.local.get(['namechatnote3save'], function(result) {
		
			document.getElementById("notename3").innerHTML = result.namechatnote3save;
	}); 
	
	chrome.storage.local.get(['namechatnote4save'], function(result) {
		
			document.getElementById("notename4").innerHTML = result.namechatnote4save;
	}); 
	
	chrome.storage.local.get(['namechatnote5save'], function(result) {
		
			document.getElementById("notename5").innerHTML = result.namechatnote5save;
	}); 
	
	chrome.storage.local.get(['namechatnote6save'], function(result) {
		
			document.getElementById("notename6").innerHTML = result.namechatnote6save;
	}); 
	
	chrome.storage.local.get(['namechatnote7save'], function(result) {
		
			document.getElementById("notename7").innerHTML = result.namechatnote7save;
	}); 
	
	chrome.storage.local.get(['namechatnote8save'], function(result) {
		
			document.getElementById("notename8").innerHTML = result.namechatnote8save;
	}); 
	
	chrome.storage.local.get(['namechatnote9save'], function(result) {
		
			document.getElementById("notename9").innerHTML = result.namechatnote9save;
	}); 
	
	chrome.storage.local.get(['namechatnote10save'], function(result) {
		
			document.getElementById("notename10").innerHTML = result.namechatnote10save;
	}); 
	
	chrome.storage.local.get(['namechatnote11save'], function(result) {
		
			document.getElementById("notename11").innerHTML = result.namechatnote11save;
	}); 
	
	chrome.storage.local.get(['namechatnote12save'], function(result) {
		
			document.getElementById("notename12").innerHTML = result.namechatnote12save;
	}); 
	
	chrome.storage.local.get(['namechatnote13save'], function(result) {
		
			document.getElementById("notename13").innerHTML = result.namechatnote13save;
	}); 
	
	chrome.storage.local.get(['namechatnote14save'], function(result) {
		
			document.getElementById("notename14").innerHTML = result.namechatnote14save;
	}); 
	
	chrome.storage.local.get(['namechatnote15save'], function(result) {
		
			document.getElementById("notename15").innerHTML = result.namechatnote15save;
	}); 
	
	chrome.storage.local.get(['namechatnote16save'], function(result) {
		
			document.getElementById("notename16").innerHTML = result.namechatnote16save;
	}); 
	
	chrome.storage.local.get(['namechatnote17save'], function(result) {
		
			document.getElementById("notename17").innerHTML = result.namechatnote17save;
	}); 
	
	chrome.storage.local.get(['namechatnote18save'], function(result) {
		
			document.getElementById("notename18").innerHTML = result.namechatnote18save;
	}); 
	
	chrome.storage.local.get(['namechatnote19save'], function(result) {
		
			document.getElementById("notename19").innerHTML = result.namechatnote19save;
	}); 
	
	chrome.storage.local.get(['namechatnote20save'], function(result) {
		
			document.getElementById("notename20").innerHTML = result.namechatnote20save;
	}); 
	
	chrome.storage.local.get(['namechatnote21save'], function(result) {
		
			document.getElementById("notename21").innerHTML = result.namechatnote21save;
	}); 
	
	chrome.storage.local.get(['namechatnote22save'], function(result) {
		
			document.getElementById("notename22").innerHTML = result.namechatnote22save;
	}); 
	
	chrome.storage.local.get(['namechatnote23save'], function(result) {
		
			document.getElementById("notename23").innerHTML = result.namechatnote23save;
	}); 
	
	chrome.storage.local.get(['namechatnote24save'], function(result) {
		
			document.getElementById("notename24").innerHTML = result.namechatnote24save;
	}); 
	
	chrome.storage.local.get(['namechatnote25save'], function(result) {
		
			document.getElementById("notename25").innerHTML = result.namechatnote25save;
	}); 
	
	chrome.storage.local.get(['namechatnote26save'], function(result) {
		
			document.getElementById("notename26").innerHTML = result.namechatnote26save;
	}); 
	
	chrome.storage.local.get(['namechatnote27save'], function(result) {
		
			document.getElementById("notename27").innerHTML = result.namechatnote27save;
	}); 
	
	chrome.storage.local.get(['namechatnote28save'], function(result) {
		
			document.getElementById("notename28").innerHTML = result.namechatnote28save;
	}); 
	
	chrome.storage.local.get(['namechatnote29save'], function(result) {
		
			document.getElementById("notename29").innerHTML = result.namechatnote29save;
	}); 
	
	chrome.storage.local.get(['namechatnote30save'], function(result) {
		
			document.getElementById("notename30").innerHTML = result.namechatnote30save;
	}); 
	
	chrome.storage.local.get(['namechatnote31save'], function(result) {
		
			document.getElementById("notename31").innerHTML = result.namechatnote31save;
	}); 
	
	chrome.storage.local.get(['namechatnote32save'], function(result) {
		
			document.getElementById("notename32").innerHTML = result.namechatnote32save;
	}); 
	
	chrome.storage.local.get(['namechatnote33save'], function(result) {
		
			document.getElementById("notename33").innerHTML = result.namechatnote33save;
	}); 
	
	chrome.storage.local.get(['namechatnote34save'], function(result) {
		
			document.getElementById("notename34").innerHTML = result.namechatnote34save;
	}); 
	
	chrome.storage.local.get(['namechatnote35save'], function(result) {
		
			document.getElementById("notename35").innerHTML = result.namechatnote35save;
	}); 
	
	chrome.storage.local.get(['namechatnote36save'], function(result) {
		
			document.getElementById("notename36").innerHTML = result.namechatnote36save;
	}); 
	
	chrome.storage.local.get(['namechatnote37save'], function(result) {
		
			document.getElementById("notename37").innerHTML = result.namechatnote37save;
	}); 
	
	chrome.storage.local.get(['namechatnote38save'], function(result) {
		
			document.getElementById("notename38").innerHTML = result.namechatnote38save;
	}); 
	
	chrome.storage.local.get(['namechatnote39save'], function(result) {
		
			document.getElementById("notename39").innerHTML = result.namechatnote39save;
	}); 
	
	chrome.storage.local.get(['namechatnote40save'], function(result) {
		
			document.getElementById("notename40").innerHTML = result.namechatnote40save;
	}); 
	
	chrome.storage.local.get(['namechatnote41save'], function(result) {
		
			document.getElementById("notename41").innerHTML = result.namechatnote41save;
	}); 
	
	chrome.storage.local.get(['namechatnote42save'], function(result) {
		
			document.getElementById("notename42").innerHTML = result.namechatnote42save;
	}); 
	
	chrome.storage.local.get(['namechatnote43save'], function(result) {
		
			document.getElementById("notename43").innerHTML = result.namechatnote43save;
	}); 
	
	chrome.storage.local.get(['namechatnote44save'], function(result) {
		
			document.getElementById("notename44").innerHTML = result.namechatnote44save;
	}); 
	
	chrome.storage.local.get(['namechatnote45save'], function(result) {
		
			document.getElementById("notename45").innerHTML = result.namechatnote45save;
	}); 
	
	chrome.storage.local.get(['namechatnote46save'], function(result) {
		
			document.getElementById("notename46").innerHTML = result.namechatnote46save;
	}); 
	
	chrome.storage.local.get(['namechatnote47save'], function(result) {
		
			document.getElementById("notename47").innerHTML = result.namechatnote47save;
	}); 
	
	chrome.storage.local.get(['namechatnote48save'], function(result) {
		
			document.getElementById("notename48").innerHTML = result.namechatnote48save;
	}); 
	
	chrome.storage.local.get(['namechatnote49save'], function(result) {
		
			document.getElementById("notename49").innerHTML = result.namechatnote49save;
	}); 
	
	chrome.storage.local.get(['namechatnote50save'], function(result) {
		
			document.getElementById("notename50").innerHTML = result.namechatnote50save;
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
	chrome.storage.local.set({'namechatnote1save': tempatename});
	document.getElementById("notename1").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote1save": document.getElementById("chatnote1text").value});
	});
	
	document.getElementById("note2save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote2save': tempatename});
	document.getElementById("notename2").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote2save": document.getElementById("chatnote2text").value});
	});
	
	document.getElementById("note3save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote3save': tempatename});
	document.getElementById("notename3").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote3save": document.getElementById("chatnote3text").value});
	});
	
	document.getElementById("note4save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote4save': tempatename});
	document.getElementById("notename4").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote4save": document.getElementById("chatnote4text").value});
	});
	
	document.getElementById("note5save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote5save': tempatename});
	document.getElementById("notename5").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote5save": document.getElementById("chatnote5text").value});
	});
	
	document.getElementById("note6save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote6save': tempatename});
	document.getElementById("notename6").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote6save": document.getElementById("chatnote6text").value});
	});
	
	document.getElementById("note7save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote7save': tempatename});
	document.getElementById("notename7").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote7save": document.getElementById("chatnote7text").value});
	});
	
	document.getElementById("note8save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote8save': tempatename});
	document.getElementById("notename8").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote8save": document.getElementById("chatnote8text").value});
	});
	
	document.getElementById("note9save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote9save': tempatename});
	document.getElementById("notename9").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote9save": document.getElementById("chatnote9text").value});
	});
	
	document.getElementById("note10save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote10save': tempatename});
	document.getElementById("notename10").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote10save": document.getElementById("chatnote10text").value});
	});
	
	document.getElementById("note11save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote11save': tempatename});
	document.getElementById("notename11").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote11save": document.getElementById("chatnote11text").value});
	});
	
	document.getElementById("note12save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote12save': tempatename});
	document.getElementById("notename12").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote12save": document.getElementById("chatnote12text").value});
	});
	
	document.getElementById("note13save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote13save': tempatename});
	document.getElementById("notename13").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote13save": document.getElementById("chatnote13text").value});
	});
	
	document.getElementById("note14save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote14save': tempatename});
	document.getElementById("notename14").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote14save": document.getElementById("chatnote14text").value});
	});
	
	document.getElementById("note15save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote15save': tempatename});
	document.getElementById("notename15").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote15save": document.getElementById("chatnote15text").value});
	});
	
	document.getElementById("note16save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote16save': tempatename});
	document.getElementById("notename16").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote16save": document.getElementById("chatnote16text").value});
	});
	
	document.getElementById("note17save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote17save': tempatename});
	document.getElementById("notename17").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote17save": document.getElementById("chatnote17text").value});
	});
	
	document.getElementById("note18save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote18save': tempatename});
	document.getElementById("notename18").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote18save": document.getElementById("chatnote18text").value});
	});
	
	document.getElementById("note19save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote19save': tempatename});
	document.getElementById("notename19").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote19save": document.getElementById("chatnote19text").value});
	});
	
	document.getElementById("note20save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote20save': tempatename});
	document.getElementById("notename20").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote20save": document.getElementById("chatnote20text").value});
	});
	
	document.getElementById("note50save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote50save': tempatename});
	document.getElementById("notename50").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote50save": document.getElementById("chatnote50text").value});
	});
	
	document.getElementById("note21save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote21save': tempatename});
	document.getElementById("notename21").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote21save": document.getElementById("chatnote21text").value});
	});
	
	document.getElementById("note22save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote22save': tempatename});
	document.getElementById("notename22").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote22save": document.getElementById("chatnote22text").value});
	});
	
	document.getElementById("note23save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote23save': tempatename});
	document.getElementById("notename23").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote23save": document.getElementById("chatnote23text").value});
	});
	
	document.getElementById("note24save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote24save': tempatename});
	document.getElementById("notename24").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote24save": document.getElementById("chatnote24text").value});
	});
	
	document.getElementById("note25save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote25save': tempatename});
	document.getElementById("notename25").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote25save": document.getElementById("chatnote25text").value});
	});
	
	document.getElementById("note26save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote26save': tempatename});
	document.getElementById("notename26").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote26save": document.getElementById("chatnote26text").value});
	});
	
	document.getElementById("note27save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote27save': tempatename});
	document.getElementById("notename27").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote27save": document.getElementById("chatnote27text").value});
	});
	
	document.getElementById("note28save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote28save': tempatename});
	document.getElementById("notename28").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote28save": document.getElementById("chatnote28text").value});
	});
	
	document.getElementById("note29save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote29save': tempatename});
	document.getElementById("notename29").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote29save": document.getElementById("chatnote29text").value});
	});
	
	document.getElementById("note30save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote30save': tempatename});
	document.getElementById("notename30").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote30save": document.getElementById("chatnote30text").value});
	});
	
	document.getElementById("note31save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote31save': tempatename});
	document.getElementById("notename31").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote31save": document.getElementById("chatnote31text").value});
	});
	
	document.getElementById("note32save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote32save': tempatename});
	document.getElementById("notename32").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote32save": document.getElementById("chatnote32text").value});
	});
	
	document.getElementById("note33save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote33save': tempatename});
	document.getElementById("notename33").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote33save": document.getElementById("chatnote33text").value});
	});
	
	document.getElementById("note34save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote34save': tempatename});
	document.getElementById("notename34").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote34save": document.getElementById("chatnote34text").value});
	});
	
	document.getElementById("note35save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote35save': tempatename});
	document.getElementById("notename35").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote35save": document.getElementById("chatnote35text").value});
	});
	
	document.getElementById("note36save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote36save': tempatename});
	document.getElementById("notename36").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote36save": document.getElementById("chatnote36text").value});
	});
	
	document.getElementById("note37save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote37save': tempatename});
	document.getElementById("notename37").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote37save": document.getElementById("chatnote37text").value});
	});
	
	document.getElementById("note38save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote38save': tempatename});
	document.getElementById("notename38").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote38save": document.getElementById("chatnote38text").value});
	});
	
	document.getElementById("note39save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote39save': tempatename});
	document.getElementById("notename39").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote39save": document.getElementById("chatnote39text").value});
	});
	
	document.getElementById("note40save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote40save': tempatename});
	document.getElementById("notename40").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote40save": document.getElementById("chatnote40text").value});
	});
	
	document.getElementById("note41save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote41save': tempatename});
	document.getElementById("notename41").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote41save": document.getElementById("chatnote41text").value});
	});
	
	document.getElementById("note42save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote42save': tempatename});
	document.getElementById("notename42").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote42save": document.getElementById("chatnote42text").value});
	});
	
	document.getElementById("note43save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote43save': tempatename});
	document.getElementById("notename43").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote43save": document.getElementById("chatnote43text").value});
	});
	
	document.getElementById("note44save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote44save': tempatename});
	document.getElementById("notename44").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote44save": document.getElementById("chatnote44text").value});
	});
	
	document.getElementById("note45save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote45save': tempatename});
	document.getElementById("notename45").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote45save": document.getElementById("chatnote45text").value});
	});
	
	document.getElementById("note46save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote46save': tempatename});
	document.getElementById("notename46").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote46save": document.getElementById("chatnote46text").value});
	});
	
	document.getElementById("note47save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote47save': tempatename});
	document.getElementById("notename47").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote47save": document.getElementById("chatnote47text").value});
	});
	
	document.getElementById("note48save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote48save': tempatename});
	document.getElementById("notename48").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote48save": document.getElementById("chatnote48text").value});
	});
	
	document.getElementById("note49save").addEventListener("click", function(event) { 
	var tempatename = prompt("Enter name for your template", "");
	chrome.storage.local.set({'namechatnote49save': tempatename});
	document.getElementById("notename49").innerHTML = tempatename;
	chrome.storage.local.set({"chatnote49save": document.getElementById("chatnote49text").value});
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
	let chatnotetext = "chatnote"+i+"text";
	
	document.getElementById(notecopy).addEventListener("click", function(event) {
	var notetext = document.getElementById(chatnotetext).value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	copyTextToClipboard(nstep3);
	}
	else {copyTextToClipboard(notetext);} 
	if (greetnotesBtncloser != null) { greetnotesModal.style.display = "none"; } });
	
} //closing For loop
	runonlyoncecc++;
	}
}

function quckNotesInjectorChats() {
	document.getElementById("qucknotecopychat1").addEventListener("click", function(event) {
	var notetext = document.getElementById("chatnote1text").value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	copyTextToClipboard(nstep3);
	}
	else {copyTextToClipboard(notetext);} 
	});
	
	document.getElementById("qucknotecopychat2").addEventListener("click", function(event) {
	var notetext = document.getElementById("chatnote2text").value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	copyTextToClipboard(nstep3);
	}
	else {copyTextToClipboard(notetext);} 
	});
	
	document.getElementById("qucknotecopychat3").addEventListener("click", function(event) {
	var notetext = document.getElementById("chatnote3text").value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	copyTextToClipboard(nstep3);
	}
	else {copyTextToClipboard(notetext);} 
	});
	
	document.getElementById("qucknotecopychat4").addEventListener("click", function(event) {
	var notetext = document.getElementById("chatnote4text").value;
	if (document.getElementById("smartnotesstatus").checked == true) {
	var mmfullname = document.getElementsByClassName('profile-info-header-name')[0].innerText;
	var mmname = mmfullname.substring(0, mmfullname.indexOf(' '));
	var nstep1, nstep2, nstep3;
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	nstep1 = notetext.replace('[HCC]', document.getElementById("hccnameboxid").value);
	nstep2 = nstep1.replace('[MEMBER]', mmname);
	nstep3 = nstep2.replace('[DATE]', today);
	copyTextToClipboard(nstep3);
	}
	else {copyTextToClipboard(notetext);} 
	});
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