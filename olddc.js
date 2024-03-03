var $ = window.jQuery;
var highlightslist = '<option value="">Select a highlight</option><option value="Availability: early ">Availability: early month</option><option value="Availability: mid-">Availability: mid month</option><option value="Availability: late ">Availability: late month</option><option value="Availability: next week">Availability: next week</option><option value="Availability: within two days">Availability: within two days</option><option value="The nearest available option">The nearest available option</option><option value="The nearest in-network option">The nearest in-network option</option><option value="Proximity">Proximity</option><option value="High patient ratings">High patient ratings</option><option value="Excellent patient ratings">Excellent patient ratings</option><option value="15+ years in practice">15+ years in practice</option><option value="In-house lab">In-house lab</option><option value="Onsite X-ray">Onsite X-ray</option><option value="Frames gallery onsite">Frames gallery onsite</option><option value="Free parking">Free parking</option><option value="Online scheduling">Online scheduling</option><option value="Evening and weekend hours">Evening and weekend hours</option><option value="Evening hours">Evening hours</option><option value="Weekend hours">Weekend hours</option><option value="Preferred facility">Preferred facility</option><option value="Preferred provider">Preferred provider</option><option value="Below average costs">Below average costs</option><option value="Walk-in basis">Walk-in basis</option><option value="Collect lab samples onsite">Collect lab samples onsite</option><option value="Unlimited Access 24/7">Unlimited Access 24/7</option><option value="Performs surgeries at ASC">Performs surgeries at ASC</option><option value="Provides (a type of treatment)">Provides (a type of treatment)</option><option value="Specialized in (a type of condition)">Specialized in (a type of condition)</option><option value="Performs (name of a procedure)">Performs (name of a procedure)</option></option><option value="Specialized in various types of therapy">MH various types of therapy</option></option><option value="Treats a variety of conditions">MH variety of conditions</option><option value="Medication Management">MH Medication Management</option>';

var mentalNoteTelesame = '<option value="Mental Health Telehealth visits are covered at the same rate as in-office visits;\nMental Health Outpatient Services: ">MH - Telehealth same</option>';
var mentalNoteTeleHIPA = '<option value="Due to the privacy policies of your insurance, we were not able to obtain telehealth visit coverage for you, please contact your insurance directly if you are planning to visit the provider virtually in order to avoid surprise bills;\nMental Health Outpatient Services: ">MH - Insurance HIPAA</option>';
var dentalNoteCov = '<option value="Basic Restorative: % covered after $ deductible\nExam & Cleaning: 100% covered\nPlease check your Benefits Wallet for more information.">Dental Office + Wallet</option>';
var visionFullCov = '<option value="Materials: ;\nStandard Lenses: ;\nFrames: ;\nContacts fitting: ;\nNecessary contacts: ;\nElective contacts: ;\nConventional contacts: ;\nDisposable contacts: ;\nPlease check your Benefits Wallet for more information.">Vision contacts + glasses</option>';
var visionGlasses = '<option value="Materials: ;\nStandard Lenses: ;\nFrames: ;\nPlease check your Benefits Wallet for more information.">Vision glasses</option>';
var visionCOntacts = '<option value="Contacts fitting: ;\nNecessary contacts: ;\nElective contacts: ;\nConventional contacts: ;\nDisposable contacts: ;\nPlease check your Benefits Wallet for more information.">Vision contacts</option>';
var benefitsWallet = '<option value="Please check your Benefits Wallet for more information.">Benefits Wallet</option>';
var mentalGreetingCousl = '<option value="Hello ,\nThank you for reaching out to us with your request.\n\nI have located a few nearest therapists and confirmed their in-network participation using our internal sources.\n\nPlease note, that the availability and additional practice details of these providers were not confirmed since Mental Health specialists prefer to speak with patients directly and it may be a faster way to get an appointment scheduled.\n\nAdditionally, you also have free and confidential access to the Employee Assistance Program. EAP therapists are offering help and guidance for multiple Mental Health concerns or issues. Please check your Benefits Wallet for more information.\n\nIf there is anything else we can assist you with, please let us know.\nOur team is always here for you!\n\nRegards,\nHealthJoy HCC">MH Multiple Therapists</option>';
var mentalGreetingPsy = '<option value="Hello ,\nThank you for trusting HealthJoy with your healthcare needs.\n\nI have located a few nearest Psychiatrists and confirmed their in-network participation using our internal sources.\n\nAll these providers should be able to assist with prescription management and treatment options.\n\nPlease note, that the availability and additional practice details of these options were not confirmed since Mental Health specialists prefer to speak with patients directly for more details and it may be a faster way to get an appointment scheduled.\n\nIf there is anything else we can assist you with, please let us know.\nOur team is always here for you!\n\nRegards,\nHealthJoy HCC">MH Multiple Psychiatrists</option>';
var mentalProviderFull = '<option value="Please note, that the availability and additional practice details of this provider were not confirmed since Mental Health specialists prefer to speak with patients directly and it may be a faster way to get an appointment scheduled, therefore HealthJoy team will not be able to book a visit on your behalf. Please call the office directly in order to make an appointment.">MH Multiple Full</option>';
var mentalProviderMini = '<option value="Please note, that the availability and additional practice details of this provider were not confirmed since Mental Health specialists prefer to speak with patients directly and it may be a faster way to get an appointment scheduled.">MH Multiple KB Ver</option>';
var referalReqNote = '<option value="This provider requires a doctor\'s referral in order to schedule an appointment, therefore HealthJoy team will not be able to book a visit on your behalf. Please ask your doctor to send your referral to the office directly by faxing it to (xxx) xxx-xxxx in order to make an appointment.">No TPS - Referral req.</option>';
var notpsonline1Note = '<option value="This provider does not support third-party scheduling and HealthJoy team will not be able to book a visit on your behalf. Please visit a provider\'s website in order to make an appointment.">No TPS Online only</option>';
var notpsonline2callNote = '<option value="This provider does not support third-party scheduling and HealthJoy team will not be able to book a visit on your behalf. Please call the office directly or visit a provider\'s website in order to make an appointment.">No TPS + Online</option>';
var noTpsnpSpaceNote = '<option value="This provider does not support third-party scheduling and HealthJoy team will not be able to book a visit on your behalf. Please call the office directly in order to make an appointment.">No TPS - No new line</option>';

// Optimize
// $("#myElement").parents(":eq(3)")
// .append($("<option></option>").attr("value", '123').text('ABC!')
// Spaish https://crm.healthjoy.com/decision_center/5723499?customerId=2105420

var movePreviewCardStatus; var autoQAOldcStatus; var livepicOldDCStatus;
var tktIdShownStatus; var messageLivePrewStatus; var messageEditBarStatus;
var extendedGreeterStatus;

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

$(document).ready(function(){
	injectDesignOLDQ();
    pageInit();
});

function pageInit() {
	setTimeout( function() {
			if ($('h3[class="decision-form_block-title"]').text() == "AUTODELIVERY::GROUPS::APPOINTMENTSearch for providers in HealthJoy directoryHeaderDecision DetailsInternal informationInsurance coverageAppointment DateProvider detailsInternal informationOffice detailsInternal information" || $('h3[class="decision-form_block-title"]').text() == "AUTODELIVERY::GROUPS::APPOINTMENTSearch for providers in HealthJoy directoryHeaderDecision DetailsInternal informationInsurance coverageAppointment DateProvider detailsInternal informationSelect an officeOffice detailsInternal informationOffice detailsInternal information" || $('h3[class="decision-form_block-title"]').text() == "AUTODELIVERY::GROUPS::APPOINTMENTSearch for providers in HealthJoy directoryHeaderDecision DetailsInternal informationInsurance coverageProcedureAppointment DateProvider detailsInternal informationOffice detailsInternal information") {
                console.log("Load completed - Appointment");
				previewAndGreeting();
				ticketChecker();
				apptInit();
				ticketCheckerpic();
				greetingExpandbrosOLDDC();
				if(tktIdShownStatus == "1"){
					$('#tktidtext').text($('a:contains("TicketID=")').text().substring(64));
					document.getElementById("tktidtext").hidden = false;
				}
                return;
            }
			else if ($('h3[class="decision-form_block-title"]').text() == "AUTODELIVERY::GROUPS::MESSAGEHeaderHeader title") {
                console.log("Load completed - Message!");
				
				if (movePreviewCardStatus == "1") {
				$('button:contains(" Preview Card")').attr("id", "previewCard");
				$("#previewCard").appendTo($('h1[class="workspace-disconnected-title ng-hide"]').parent());
				}
				
				stylingInitMessage();
				//stylingLiveMsg1Message();
				//stylingLiveMsg2Message();
				if(tktIdShownStatus == "1"){
					$('#tktidtext').text($('a:contains("TicketID=")').text().substring(64));
					document.getElementById("tktidtext").hidden = false;
				}
                return;
            }
			else if ($('h3:contains("Decision Details")').text() == "Decision Details" || $('h3:contains("Decision Details")').text() == "Decision DetailsDecision Details" || $('h3:contains("Decision Details")').text() == "Decision DetailsDecision DetailsDecision Details" || $('h3:contains("Decision Details")').text() == "Decision DetailsDecision DetailsDecision DetailsDecision Details") {
                console.log("Load completed - Provider or facility?");
				previewAndGreeting();
				ticketChecker();
				dcTypeSelector();
				ticketCheckerpic();
				greetingExpandbrosOLDDC();
				if(tktIdShownStatus == "1"){
					$('#tktidtext').text($('a:contains("TicketID=")').text().substring(64));
					document.getElementById("tktidtext").hidden = false;
				}
                return;
            }
			else if ($('h3:contains("Medical Bill Review card")').text() == "Medical Bill Review card" || $('h3[class="decision-form_block-title"]').text() == "AUTODELIVERY::GROUPS::BILL REVIEW" ) {
                console.log("Load completed - Bill Review");
				previewAndGreeting();
				if(tktIdShownStatus == "1"){
					$('#tktidtext').text($('a:contains("TicketID=")').text().substring(64));
					document.getElementById("tktidtext").hidden = false;
				}
                return;
            }
			else if ($('h3:contains("RX card")').text() == "RX card" || $('h3[class="decision-form_block-title"]').text() == "AUTODELIVERY::GROUPS:Rx SAVINGSHSA tip" ) {
                console.log("Load completed - RX Savings");
				if(tktIdShownStatus == "1"){
					$('#tktidtext').text($('a:contains("TicketID=")').text().substring(64));
					document.getElementById("tktidtext").hidden = false;
				}
                return;
            }
            else {
				//console.log("Waiting for page to load...");
				pageInit();
            }
	}, 250)
}

function previewAndGreeting() {
	//Preview
	if (movePreviewCardStatus == "1") {
	$('button:contains(" Preview Card")').attr("id", "previewCard");
	$("#previewCard").appendTo($('h1[class="workspace-disconnected-title ng-hide"]').parent());
	}
	//Greeting
	$('input[placeholder="Card Title"]').parent().parent().addClass("greetingzoner");
	$('textarea[category="Greetings"]').parent().parent().parent().parent().parent().appendTo('.greetingzoner');
	$('textarea[category="Greetings and Notes"]').parent().parent().parent().parent().parent().appendTo('.greetingzoner');
	$('input[placeholder="Card Title"]').parent().attr("id","rightGreeting");
	$('#rightGreeting').appendTo('.greetingzoner');
	$('#profile_id').parent().parent().parent().children().appendTo('#rightGreeting');
	$('#profile_id').appendTo('#rightGreeting');
	$('#steerage_type_id').parent().parent().parent().children().appendTo('#rightGreeting');
	$('#steerage_type_id').appendTo('#rightGreeting');
	$('#reason_for_visit').parent().children().appendTo('#rightGreeting');
	$('#reason_for_visit').appendTo('#rightGreeting');
	$('select[name="custom_steerage_type_id"]').parent().parent().parent().children().appendTo('#rightGreeting');
	$('select[name="custom_steerage_type_id"]').appendTo('#rightGreeting');
	$('#is_procedure').parent().children().appendTo('#rightGreeting');
	$('#is_procedure').appendTo('#rightGreeting');
	$('#rightGreeting').append('<br><span id="warningSelProfile" hidden>⚠️TKT possibly for a family member or profile is not selected</span>');
	//Greeting templates
	$('textarea[category="Greetings"]').parent().next().children().children().append(mentalGreetingCousl);
	$('textarea[category="Greetings"]').parent().next().children().children().append(mentalGreetingPsy);
	//Links
	$("#language").parent().append('<a target="_blank" href="https://healthjoy.awsapps.com/connect/ccp-v2/softphone">Amazon-login</a> ');
	$("#language").parent().append('<a target="_blank" href="https://healthjoy.atlassian.net/wiki/spaces/HCCKB/overview">KB</a> ');
	$("#language").parent().append('<a target="_blank" href="https://healthjoy.atlassian.net/wiki/spaces/HCCKB/pages/3604119569/Service+Updates+changelog+2022">Service Updates</a> ');
	$("#language").parent().append('<a target="_blank" href="https://healthjoy.atlassian.net/wiki/spaces/HCCKB/pages/2435252385/Card+Title+Matrix">Card Titles</a> ');
	$("#language").parent().append('<a target="_blank" href="https://healthjoy.okta.com/app/UserHome">Okta</a> ');
	//CReate verification of ticket errors
	var divVerificatorOldDC = '<span id="topWarnings" hidden><span class="hasTT">&nbsp;⚠️<table><tr> <td><span id="warningTitle" hidden>Card Title </span></td></tr><tr> <td><span id="warningGroupUT" hidden>Group UT unchecked:</span></td> <td><span id="uncheckedUT1" hidden>1</span></td> <td><span id="uncheckedUT2" hidden>2</span></td> <td><span id="uncheckedUT3" hidden>3</span></td> <td><span id="uncheckedUT4" hidden>4</span></td></tr><tr> <td><span id="warningTreatNeeds" hidden>Treats mm needs unchecked:</span></td> <td><span id="uncheckedMMNeeds1" hidden>1</span></td> <td><span id="uncheckedMMNeeds2" hidden>2</span></td> <td><span id="uncheckedMMNeeds3" hidden>3</span></td> <td><span id="uncheckedMMNeeds4" hidden>4</span></td></tr></table></span></span>';
	//$('label[class="workspace-file-upload__label"]').parent().parent().parent().parent().parent().append(divVerificatorOldDC);
	//$("#topWarnings").appendTo($('h1[class="workspace-disconnected-title ng-hide"]').parent());
	
	$("#previewCard").append(divVerificatorOldDC);
	
	//Kennion checker "\n            Kennion Benefit Advisors\n        " - class="kenionBlinker"
	if ($('a[ng-if="customer.campaign.knowledge_base_url"]').text() == '\n            Kennion Benefit Advisors\n        ') { $('label[for="custom_steerage_type_id"]').attr("class", "kenionBlinker"); console.log("BOP");}; 
	
}

function dcTypeSelector() {
	setTimeout( function() {
			if ($('h3:contains("Search for providers in HealthJoy directory")').text() == "Search for providers in HealthJoy directory") {
                console.log("Load completed - Provider DC!");
				providerVerifyInit();
				providerOfficesVerifyInit();
                return;
            }
			else if ($('h3:contains("Search for facilities in HealthJoy directory")').text() == "Search for facilities in HealthJoy directory") {
                console.log("Load completed - Facility DC!");
				facilityVerifyInit();
                return;
            }
            else {
				console.log("Waiting for page to load...");
				pageInit();
            }
	}, 250)
}

function providerVerifyInit() {
	setTimeout( function() {
			if ($('input[name="decisions[0].id"]').parent().attr("id") != "left-part00" && $('input[name="decisions[0].id"]').parent().attr("id") != "undefined") {
				providerInit0();
            }
			if ($('input[name="decisions[1].id"]').parent().attr("id") != "left-part01" && $('input[name="decisions[1].id"]').parent().attr("id") != "undefined") {
				providerInit1();
            }
			if ($('input[name="decisions[2].id"]').parent().attr("id") != "left-part02" && $('input[name="decisions[2].id"]').parent().attr("id") != "undefined") {
				providerInit2();
            }
			if ($('input[name="decisions[3].id"]').parent().attr("id") != "left-part03" && $('input[name="decisions[3].id"]').parent().attr("id") != "undefined") {
				providerInit3();
            }
			providerVerifyInit();
	}, 1000)
}

function facilityVerifyInit() {
	setTimeout( function() {
			if ($('input[name="decisions[0].id"]').parent().attr("id") != "left-part00" && $('input[name="decisions[0].id"]').parent().attr("id") != "undefined") {
				facilityInit0();
            }
			if ($('input[name="decisions[1].id"]').parent().attr("id") != "left-part01" && $('input[name="decisions[1].id"]').parent().attr("id") != "undefined") {
				facilityInit1();
            }
			if ($('input[name="decisions[2].id"]').parent().attr("id") != "left-part02" && $('input[name="decisions[2].id"]').parent().attr("id") != "undefined") {
				facilityInit2();
            }
			if ($('input[name="decisions[3].id"]').parent().attr("id") != "left-part03" && $('input[name="decisions[3].id"]').parent().attr("id") != "undefined") {
				facilityInit3();
            }
			facilityVerifyInit();
	}, 1000)
}

function providerOfficesVerifyInit() {
	setTimeout( function() {
			if ($('select[name="decisions[0].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid00" && $('select[name="decisions[0].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice00();
			}
			if ($('select[name="decisions[0].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid01" && $('select[name="decisions[0].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice01();
			}
			if ($('select[name="decisions[0].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid02" && $('select[name="decisions[0].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice02();
			}
			if ($('select[name="decisions[1].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid10" && $('select[name="decisions[1].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice10();
			}
			if ($('select[name="decisions[1].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid11" && $('select[name="decisions[1].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice11();
			}
			if ($('select[name="decisions[1].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid12" && $('select[name="decisions[1].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice12();
			}
			if ($('select[name="decisions[2].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid20" && $('select[name="decisions[2].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice20();
			}
			if ($('select[name="decisions[2].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid21" && $('select[name="decisions[2].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice21();
			}
			if ($('select[name="decisions[2].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid22" && $('select[name="decisions[2].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice22();
			}
			if ($('select[name="decisions[3].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid30" && $('select[name="decisions[3].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice30();
			}
			if ($('select[name="decisions[3].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid31" && $('select[name="decisions[3].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice31();
			}
			if ($('select[name="decisions[3].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id") != "unavailabledaysid32" && $('select[name="decisions[3].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id") != "undefined") {
			providerOffice32();
			}
			providerOfficesVerifyInit();
	}, 3000)
}

function providerInit0() {
	$('input[name="decisions[0].id"]').parent().attr("id", "left-part00");
	$('input[name="decisions[0].provider.id"]').parent().parent().parent().parent().parent().attr("id", "right-part00");
	
	$('textarea[name="decision.provider.notes"]').attr("id", "decision-provider-notes");
	
	//Internal notes provider
	$('input[name="decisions[0].provider.ein"]').parent().parent().attr("id", "internalnotesidleft0");
	$('input[name="decisions[0].provider.npi"]').parent().parent().attr("id", "internalnotesidright0");
	$('input[name="decisions[0].provider.earliest_availability"]').parent().parent().parent().parent().parent().attr("id", "availablearlid0");
	$('textarea[name="decisions[0].provider.notes"]').parent().attr("id", "providernotesid0");
	
	$("#providernotesid0").appendTo('#internalnotesidleft0');
	$('input[name="decisions[0].provider.is_thirdparty_scheduling_supported"]').parent().appendTo('#internalnotesidright0');
	$('input[name="decisions[0].provider.earliest_availability"]').parent().parent().parent().parent().parent().appendTo('#internalnotesidright0');
	$('input[name="decisions[0].provider.npi"]').parent().appendTo('#internalnotesidright0');
	$('input[name="decisions[0].provider.ein"]').parent().appendTo('#internalnotesidright0');
	
	//Main provider details
	$('select[name="decisions[0].provider.gender"]').parent().parent().parent().attr("id", "genderblock00");
	$('input[name="decisions[0].provider.website_url"]').parent().appendTo('#genderblock00');
	$('input[name="decisions[0].provider.avatar"]').parent().appendTo('#genderblock00');
	$('input[name="decisions[0].provider.avatar_default_type"]').parent().appendTo('#genderblock00');
	$('#genderblock00').append('<div class="form-group" id="avatarPreviewBox1"></div>');
	
	//$('select[name="decisions[0].provider.specialities"]').attr("id", "specialities0");
	$('select[name="decisions[0].provider.specialities"]').parent().parent().append('<span id="warningSpechialityP0" hidden>⚠️Speciality is not selected</span>');
	
	//New templates
	$('textarea[name="decisions[0].why_recommend"]').parent().next().children().children().empty();
	$('textarea[name="decisions[0].why_recommend"]').parent().next().children().children().append(highlightslist);
	$('textarea[name="decisions[0].why_recommend"]').parent().parent().parent().parent().parent().parent().parent().attr("style", "width: 100% !important");
	
	$('textarea[name="decisions[0].provider_notes"]').parent().next().children().children().append(noTpsnpSpaceNote);
	$('textarea[name="decisions[0].provider_notes"]').parent().next().children().children().append(referalReqNote);
	$('textarea[name="decisions[0].provider_notes"]').parent().next().children().children().append(notpsonline2callNote);
	$('textarea[name="decisions[0].provider_notes"]').parent().next().children().children().append(notpsonline1Note);
	$('textarea[name="decisions[0].provider_notes"]').parent().next().children().children().append(mentalProviderFull);
	$('textarea[name="decisions[0].provider_notes"]').parent().next().children().children().append(mentalProviderMini);
	
	$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(mentalNoteTelesame);
	$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(mentalNoteTeleHIPA);
	$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(dentalNoteCov);
	$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(visionFullCov);
	$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(visionGlasses);
	$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(visionCOntacts);
	$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(benefitsWallet);
	//Id's for insurance coverage
	//$('input[name="decisions[0].office_visit"]').attr("id", "office_visitp0");
}

function providerInit1() {
	$('input[name="decisions[1].id"]').parent().attr("id", "left-part01");
	$('input[name="decisions[1].provider.id"]').parent().parent().parent().parent().parent().attr("id", "right-part01");
	
	$('textarea[name="decision.provider.notes"]').attr("id", "decision-provider-notes");
	
	//Working hours
	$('select[name="decisions[1].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid10");
	$('select[name="decisions[1].provider.offices[0].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase10");
	
	$('#unavailabledaysid10').appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	
	//Internal notes provider
	$('input[name="decisions[1].provider.ein"]').parent().parent().attr("id", "internalnotesidleft1");
	$('input[name="decisions[1].provider.npi"]').parent().parent().attr("id", "internalnotesidright1");
	$('input[name="decisions[1].provider.earliest_availability"]').parent().parent().parent().parent().parent().attr("id", "availablearlid1");
	$('textarea[name="decisions[1].provider.notes"]').parent().attr("id", "providernotesid1");
	
	$("#providernotesid1").appendTo('#internalnotesidleft1');
	$('input[name="decisions[1].provider.is_thirdparty_scheduling_supported"]').parent().appendTo('#internalnotesidright1');
	$('input[name="decisions[1].provider.earliest_availability"]').parent().parent().parent().parent().parent().appendTo('#internalnotesidright1');
	$('input[name="decisions[1].provider.npi"]').parent().appendTo('#internalnotesidright1');
	$('input[name="decisions[1].provider.ein"]').parent().appendTo('#internalnotesidright1');
	
	//Main provider details
	$('select[name="decisions[1].provider.gender"]').parent().parent().parent().attr("id", "genderblock10");
	$('input[name="decisions[1].provider.website_url"]').parent().appendTo('#genderblock10');
	$('input[name="decisions[1].provider.avatar"]').parent().appendTo('#genderblock10');
	$('input[name="decisions[1].provider.avatar_default_type"]').parent().appendTo('#genderblock10');
	$('#genderblock10').append('<div class="form-group" id="avatarPreviewBox2"></div>');
	//$('select[name="decisions[1].provider.specialities"]').attr("id", "specialities1");
	$('select[name="decisions[1].provider.specialities"]').parent().parent().append('<span id="warningSpechialityP1" hidden>⚠️Speciality is not selected</span>');
	
	//New templates
	$('textarea[name="decisions[1].why_recommend"]').parent().next().children().children().empty();
	$('textarea[name="decisions[1].why_recommend"]').parent().next().children().children().append(highlightslist);
	$('textarea[name="decisions[1].why_recommend"]').parent().parent().parent().parent().parent().parent().parent().attr("style", "width: 100% !important");
	
	$('textarea[name="decisions[1].provider_notes"]').parent().next().children().children().append(referalReqNote);
	
	$('textarea[name="decisions[1].provider_notes"]').parent().next().children().children().append(mentalProviderFull);
	$('textarea[name="decisions[1].provider_notes"]').parent().next().children().children().append(mentalProviderMini);
	
	$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(mentalNoteTelesame);
	$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(mentalNoteTeleHIPA);
	$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(dentalNoteCov);
	$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(visionFullCov);
	$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(visionGlasses);
	$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(visionCOntacts);
	$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(benefitsWallet);
	
	//Id's for insurance coverage
	//$('input[name="decisions[1].office_visit"]').attr("id", "office_visitp1");
	
	//Insurance cloner test
	//$('input[name="decisions[1].office_visit"]').parent().before().before('<a style="background-color: rgb(121, 63, 193); border-color: #000;" class="ladda-button btn btn-primary" id="copyToNextP1">Duplicate from previous option</a>');
	//document.getElementById("copyToNextP1").onclick = 
	//$('#copyToNextP1').click(function() {if ( $('input[name="decisions[0].office_visit"]').val() != undefined && $('input[name="decisions[0].office_visit"]').val() != '' && $('input[name="decisions[1].office_visit"]').val() != undefined ) { $('input[name="decisions[1].office_visit"]').val($('input[name="decisions[0].office_visit"]').val());} if ( $('input[name="decisions[0].preventive_visit"]').val() != undefined && $('input[name="decisions[0].preventive_visit"]').val() != '' && $('input[name="decisions[0].preventive_visit"]').val() != undefined ) { $('input[name="decisions[1].preventive_visit"]').val($('input[name="decisions[0].preventive_visit"]').val());} if ( $('input[name="decisions[0].insurance_requires"]').val() != undefined && $('input[name="decisions[0].insurance_requires"]').val() != '' && $('input[name="decisions[0].insurance_requires"]').val() != undefined ) { $('input[name="decisions[1].insurance_requires"]').val($('input[name="decisions[0].insurance_requires"]').val());}});
}

function providerInit2() {
	$('input[name="decisions[2].id"]').parent().attr("id", "left-part02");
	$('input[name="decisions[2].provider.id"]').parent().parent().parent().parent().parent().attr("id", "right-part02");
	
	$('textarea[name="decision.provider.notes"]').attr("id", "decision-provider-notes");
	
	//Working hours
	$('select[name="decisions[2].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid20");
	$('select[name="decisions[2].provider.offices[0].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase20");
	
	$('#unavailabledaysid20').appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	
	//Internal notes provider
	$('input[name="decisions[2].provider.ein"]').parent().parent().attr("id", "internalnotesidleft2");
	$('input[name="decisions[2].provider.npi"]').parent().parent().attr("id", "internalnotesidright2");
	$('input[name="decisions[2].provider.earliest_availability"]').parent().parent().parent().parent().parent().attr("id", "availablearlid2");
	$('textarea[name="decisions[2].provider.notes"]').parent().attr("id", "providernotesid2");
	
	$("#providernotesid2").appendTo('#internalnotesidleft2');
	$('input[name="decisions[2].provider.is_thirdparty_scheduling_supported"]').parent().appendTo('#internalnotesidright2');
	$('input[name="decisions[2].provider.earliest_availability"]').parent().parent().parent().parent().parent().appendTo('#internalnotesidright2');
	$('input[name="decisions[2].provider.npi"]').parent().appendTo('#internalnotesidright2');
	$('input[name="decisions[2].provider.ein"]').parent().appendTo('#internalnotesidright2');
	
	//Main provider details
	$('select[name="decisions[2].provider.gender"]').parent().parent().parent().attr("id", "genderblock20");
	$('input[name="decisions[2].provider.website_url"]').parent().appendTo('#genderblock20');
	$('input[name="decisions[2].provider.avatar"]').parent().appendTo('#genderblock20');
	$('input[name="decisions[2].provider.avatar_default_type"]').parent().appendTo('#genderblock20');
	$('#genderblock20').append('<div class="form-group" id="avatarPreviewBox3"></div>');
	//$('select[name="decisions[2].provider.specialities"]').attr("id", "specialities2");
	$('select[name="decisions[2].provider.specialities"]').parent().parent().append('<span id="warningSpechialityP2" hidden>⚠️Speciality is not selected</span>');
	
	//New templates
	$('textarea[name="decisions[2].why_recommend"]').parent().next().children().children().empty();
	$('textarea[name="decisions[2].why_recommend"]').parent().next().children().children().append(highlightslist);
	$('textarea[name="decisions[2].why_recommend"]').parent().parent().parent().parent().parent().parent().parent().attr("style", "width: 100% !important");
	
	$('textarea[name="decisions[2].provider_notes"]').parent().next().children().children().append(referalReqNote);
	
	$('textarea[name="decisions[2].provider_notes"]').parent().next().children().children().append(mentalProviderFull);
	$('textarea[name="decisions[2].provider_notes"]').parent().next().children().children().append(mentalProviderMini);
	
	$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(mentalNoteTelesame);
	$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(mentalNoteTeleHIPA);
	$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(dentalNoteCov);
	$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(visionFullCov);
	$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(visionGlasses);
	$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(visionCOntacts);
	$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(benefitsWallet);
	//Id's for insurance coverage
	//$('input[name="decisions[2].office_visit"]').attr("id", "office_visitp2");
}

function providerInit3() {
	$('input[name="decisions[3].id"]').parent().attr("id", "left-part03");
	$('input[name="decisions[3].provider.id"]').parent().parent().parent().parent().parent().attr("id", "right-part03");
	
	$('textarea[name="decision.provider.notes"]').attr("id", "decision-provider-notes");
	
	//Working hours
	$('select[name="decisions[3].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid30");
	$('select[name="decisions[3].provider.offices[0].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase30");
	
	$('#unavailabledaysid30').appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	
	//Internal notes provider
	$('input[name="decisions[3].provider.ein"]').parent().parent().attr("id", "internalnotesidleft3");
	$('input[name="decisions[3].provider.npi"]').parent().parent().attr("id", "internalnotesidright3");
	$('input[name="decisions[3].provider.earliest_availability"]').parent().parent().parent().parent().parent().attr("id", "availablearlid3");
	$('textarea[name="decisions[3].provider.notes"]').parent().attr("id", "providernotesid3");
	
	$("#providernotesid3").appendTo('#internalnotesidleft3');
	$('input[name="decisions[3].provider.is_thirdparty_scheduling_supported"]').parent().appendTo('#internalnotesidright3');
	$('input[name="decisions[3].provider.earliest_availability"]').parent().parent().parent().parent().parent().appendTo('#internalnotesidright3');
	$('input[name="decisions[3].provider.npi"]').parent().appendTo('#internalnotesidright3');
	$('input[name="decisions[3].provider.ein"]').parent().appendTo('#internalnotesidright3');
	
	//Main provider details
	$('select[name="decisions[3].provider.gender"]').parent().parent().parent().attr("id", "genderblock30");
	$('input[name="decisions[3].provider.website_url"]').parent().appendTo('#genderblock30');
	$('input[name="decisions[3].provider.avatar"]').parent().appendTo('#genderblock30');
	$('input[name="decisions[3].provider.avatar_default_type"]').parent().appendTo('#genderblock30');
	$('#genderblock30').append('<div class="form-group" id="avatarPreviewBox4"></div>');
	//$('select[name="decisions[3].provider.specialities"]').attr("id", "specialities3");
	$('select[name="decisions[3].provider.specialities"]').parent().parent().append('<span id="warningSpechialityP3" hidden>⚠️Speciality is not selected</span>');
	
	//New templates
	$('textarea[name="decisions[3].why_recommend"]').parent().next().children().children().empty();
	$('textarea[name="decisions[3].why_recommend"]').parent().next().children().children().append(highlightslist);
	$('textarea[name="decisions[3].why_recommend"]').parent().parent().parent().parent().parent().parent().parent().attr("style", "width: 100% !important");
	
	$('textarea[name="decisions[3].provider_notes"]').parent().next().children().children().append(referalReqNote);
	
	$('textarea[name="decisions[3].provider_notes"]').parent().next().children().children().append(mentalProviderFull);
	$('textarea[name="decisions[3].provider_notes"]').parent().next().children().children().append(mentalProviderMini);
	
	$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(mentalNoteTelesame);
	$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(mentalNoteTeleHIPA);
	$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(dentalNoteCov);
	$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(visionFullCov);
	$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(visionGlasses);
	$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(visionCOntacts);
	$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(benefitsWallet);
	//Id's for insurance coverage
	//$('input[name="decisions[3].office_visit"]').attr("id", "office_visitp3");
}

function providerOffice00() {
	$('select[name="decisions[0].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid00");
	$('select[name="decisions[0].provider.offices[0].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase00");
	
	$('#unavailabledaysid00').appendTo('#unavailabledaysidbase00');
	$('input[name="decisions[0].provider.offices[0].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
	$('input[name="decisions[0].provider.offices[0].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
	$('input[name="decisions[0].provider.offices[0].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
	$('input[name="decisions[0].provider.offices[0].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
	$('input[name="decisions[0].provider.offices[0].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
	$('input[name="decisions[0].provider.offices[0].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
	$('input[name="decisions[0].provider.offices[0].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
	//console.log("Styling completed! Working hours 00");
}

function providerOffice01() {
	$('select[name="decisions[0].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid01");
	$('select[name="decisions[0].provider.offices[1].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase01");
	
	$('#unavailabledaysid01').appendTo('#unavailabledaysidbase01');
	$('input[name="decisions[0].provider.offices[1].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase01');
	$('input[name="decisions[0].provider.offices[1].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase01');
	$('input[name="decisions[0].provider.offices[1].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase01');
	$('input[name="decisions[0].provider.offices[1].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase01');
	$('input[name="decisions[0].provider.offices[1].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase01');
	$('input[name="decisions[0].provider.offices[1].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase01');
	$('input[name="decisions[0].provider.offices[1].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase01');
	//console.log("Styling completed! Working hours 01");
}

function providerOffice02() {
	$('select[name="decisions[0].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid02");
	$('select[name="decisions[0].provider.offices[2].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase02");
	
	$('#unavailabledaysid02').appendTo('#unavailabledaysidbase02');
	$('input[name="decisions[0].provider.offices[2].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase02');
	$('input[name="decisions[0].provider.offices[2].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase02');
	$('input[name="decisions[0].provider.offices[2].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase02');
	$('input[name="decisions[0].provider.offices[2].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase02');
	$('input[name="decisions[0].provider.offices[2].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase02');
	$('input[name="decisions[0].provider.offices[2].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase02');
	$('input[name="decisions[0].provider.offices[2].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase02');
	//console.log("Styling completed! Working hours 02");
}

function providerOffice10() {
	$('select[name="decisions[1].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid10");
	$('select[name="decisions[1].provider.offices[0].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase10");
	
	$('#unavailabledaysid10').appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	$('input[name="decisions[1].provider.offices[0].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase10');
	//console.log("Styling completed! Working hours 10");
}

function providerOffice11() {
	$('select[name="decisions[1].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid11");
	$('select[name="decisions[1].provider.offices[1].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase11");
	
	$('#unavailabledaysid11').appendTo('#unavailabledaysidbase11');
	$('input[name="decisions[1].provider.offices[1].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase11');
	$('input[name="decisions[1].provider.offices[1].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase11');
	$('input[name="decisions[1].provider.offices[1].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase11');
	$('input[name="decisions[1].provider.offices[1].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase11');
	$('input[name="decisions[1].provider.offices[1].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase11');
	$('input[name="decisions[1].provider.offices[1].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase11');
	$('input[name="decisions[1].provider.offices[1].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase11');
	//console.log("Styling completed! Working hours 11");
}

function providerOffice12() {
	$('select[name="decisions[1].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid12");
	$('select[name="decisions[1].provider.offices[2].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase12");
	
	$('#unavailabledaysid12').appendTo('#unavailabledaysidbase12');
	$('input[name="decisions[1].provider.offices[2].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase12');
	$('input[name="decisions[1].provider.offices[2].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase12');
	$('input[name="decisions[1].provider.offices[2].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase12');
	$('input[name="decisions[1].provider.offices[2].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase12');
	$('input[name="decisions[1].provider.offices[2].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase12');
	$('input[name="decisions[1].provider.offices[2].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase12');
	$('input[name="decisions[1].provider.offices[2].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase12');
	//console.log("Styling completed! Working hours 12");
}

function providerOffice20() {
	$('select[name="decisions[2].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid20");
	$('select[name="decisions[2].provider.offices[0].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase20");
	
	$('#unavailabledaysid20').appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	$('input[name="decisions[2].provider.offices[0].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase20');
	//console.log("Styling completed! Working hours 20");
}

function providerOffice21() {
	$('select[name="decisions[2].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid21");
	$('select[name="decisions[2].provider.offices[1].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase21");
	
	$('#unavailabledaysid21').appendTo('#unavailabledaysidbase21');
	$('input[name="decisions[2].provider.offices[1].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase21');
	$('input[name="decisions[2].provider.offices[1].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase21');
	$('input[name="decisions[2].provider.offices[1].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase21');
	$('input[name="decisions[2].provider.offices[1].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase21');
	$('input[name="decisions[2].provider.offices[1].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase21');
	$('input[name="decisions[2].provider.offices[1].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase21');
	$('input[name="decisions[2].provider.offices[1].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase21');
	//console.log("Styling completed! Working hours 21");
}

function providerOffice22() {
	$('select[name="decisions[2].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid22");
	$('select[name="decisions[2].provider.offices[2].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase22");
	
	$('#unavailabledaysid22').appendTo('#unavailabledaysidbase22');
	$('input[name="decisions[2].provider.offices[2].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase22');
	$('input[name="decisions[2].provider.offices[2].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase22');
	$('input[name="decisions[2].provider.offices[2].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase22');
	$('input[name="decisions[2].provider.offices[2].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase22');
	$('input[name="decisions[2].provider.offices[2].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase22');
	$('input[name="decisions[2].provider.offices[2].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase22');
	$('input[name="decisions[2].provider.offices[2].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase22');
	//console.log("Styling completed! Working hours 22");
}

function providerOffice30() {
	$('select[name="decisions[3].provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid30");
	$('select[name="decisions[3].provider.offices[0].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase30");
	
	$('#unavailabledaysid30').appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	$('input[name="decisions[3].provider.offices[0].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase30');
	//console.log("Styling completed! Working hours 30");
}

function providerOffice31() {
	$('select[name="decisions[3].provider.offices[1].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid31");
	$('select[name="decisions[3].provider.offices[1].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase31");
	
	$('#unavailabledaysid31').appendTo('#unavailabledaysidbase31');
	$('input[name="decisions[3].provider.offices[1].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase31');
	$('input[name="decisions[3].provider.offices[1].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase31');
	$('input[name="decisions[3].provider.offices[1].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase31');
	$('input[name="decisions[3].provider.offices[1].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase31');
	$('input[name="decisions[3].provider.offices[1].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase31');
	$('input[name="decisions[3].provider.offices[1].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase31');
	$('input[name="decisions[3].provider.offices[1].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase31');
	//console.log("Styling completed! Working hours 31");
}

function providerOffice32() {
	$('select[name="decisions[3].provider.offices[2].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid32");
	$('select[name="decisions[3].provider.offices[2].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase32");
	
	$('#unavailabledaysid32').appendTo('#unavailabledaysidbase32');
	$('input[name="decisions[3].provider.offices[2].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase32');
	$('input[name="decisions[3].provider.offices[2].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase32');
	$('input[name="decisions[3].provider.offices[2].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase32');
	$('input[name="decisions[3].provider.offices[2].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase32');
	$('input[name="decisions[3].provider.offices[2].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase32');
	$('input[name="decisions[3].provider.offices[2].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase32');
	$('input[name="decisions[3].provider.offices[2].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase32');
	//console.log("Styling completed! Working hours 32");
}

//Message
function stylingInitMessage() {
if (messageEditBarStatus == "1") {
	setTimeout( function() {
		if ($(window).scrollTop() > 585 ){        
			$('.rdw-editor-toolbar').attr("style", "top: 40px; left: 5%; z-index: 10; position: fixed;");
		} else { $('.rdw-editor-toolbar').attr("style", ""); }
		stylingInitMessage();
	}, 750)
}}

function greetingExpandbrosOLDDC() {
if (extendedGreeterStatus == "1") {
	$('textarea[category="Greetings"]').attr("maxlength", "2048");
	$('textarea[category="Greetings"]').attr("style", "height: 300px;");
	$('textarea[category="Greetings and Notes"]').attr("maxlength", "2048");
	document.getElementsByClassName("sub-title")[0].textContent = "* Maximum 2048 characters";
}}

/*
function stylingLiveMsg1Message() {
if (messageLivePrewStatus == "1") {
	$('div[aria-label="rdw-wrapper"]').parent().attr("style","width: 66% !important;");
	$('div[aria-label="rdw-wrapper"]').parent().parent().append('<div class="liveMessagePreviewcss" id="liveMessagePreviewid"></div>');
}}

function stylingLiveMsg2Message() {
if (messageLivePrewStatus == "1") {
	setTimeout( function() {
		//var ari = $('div[data-block="true"]').children().children().toArray(); console.log(ari);
		//var combinatorOfText = $('div[data-block="true"]').children().children().toArray(); console.log(combinatorOfText);
		//var combinedTxtString = combinatorOfText.join('');
		//console.log(combinedTxtString);
		
		// get all elements using the class name
// or using name $('[name="myinputs[]"]')
var combinatorOfText = $('div[data-block="true"]').children()
    // iterate over the elements
    .map(function(){ 
        // return the value
        return $(this).html(); 
    })
    // get result as an array from jQuery object
    .get()
    // join them to generate result string
    .join('<br>');
		
		$("#liveMessagePreviewid").html(combinatorOfText);
		//$("#liveMessagePreviewid").html($('.DraftEditor-editorContainer').children().children().html(combinatorOfText));
		stylingLiveMsg2Message();
	}, 2000)
}}
*/

//Facility
function facilityInit0() {
	if ($('input[name="decisions[0].id"]').parent().attr("id") != "left-part00" && $('input[name="decisions[0].id"]').parent().attr("id") != "undefined") {
		$('input[name="decisions[0].id"]').parent().attr("id", "left-part00");
		$('input[name="decisions[0].facility.id"]').parent().parent().parent().parent().parent().attr("id", "right-part00");
		
		//Working hours
		$('select[name="decisions[0].facility.unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysfid00");
		$('select[name="decisions[0].facility.unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbasef00");
		
		$('#unavailabledaysfid00').appendTo('#unavailabledaysidbasef00');
		$('input[name="decisions[0].facility.monday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef00');
		$('input[name="decisions[0].facility.tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef00');
		$('input[name="decisions[0].facility.wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef00');
		$('input[name="decisions[0].facility.thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef00');
		$('input[name="decisions[0].facility.friday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef00');
		$('input[name="decisions[0].facility.saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef00');
		$('input[name="decisions[0].facility.sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef00');
						
		//Internal notes facility
		$('input[name="decisions[0].facility.ein"]').parent().parent().attr("id", "internalnotesidrightf0");
		$('input[name="decisions[0].facility.facility_kind"]').parent().parent().parent().parent().attr("id", "internalnotesidleftf0");
		$('input[name="decisions[0].facility.earliest_availability"]').parent().parent().parent().parent().parent().attr("id", "availablearlidf0");
		$('textarea[name="decisions[0].facility.notes"]').parent().attr("id", "providernotesidf0");
		
		$("#providernotesidf0").appendTo('#internalnotesidleftf0');
		$('input[name="decisions[0].facility.facility_kind"]').parent().parent().parent().appendTo('#internalnotesidrightf0');
		$('input[name="decisions[0].facility.is_thirdparty_scheduling_supported"]').parent().appendTo('#internalnotesidrightf0');
		$('input[name="decisions[0].facility.earliest_availability"]').parent().parent().parent().parent().parent().appendTo('#internalnotesidrightf0');
		$('input[name="decisions[0].facility.npi"]').parent().appendTo('#internalnotesidrightf0');
		$('input[name="decisions[0].facility.ein"]').parent().appendTo('#internalnotesidrightf0');
		$('input[name="decisions[0].facility.facility_default_ava"]').parent().parent().parent().parent().parent().append('<div class="form-group" id="avatarPreviewBox1"></div>');
		
		//New templates
		$('textarea[name="decisions[0].why_recommend"]').parent().next().children().children().empty();
		$('textarea[name="decisions[0].why_recommend"]').parent().next().children().children().append(highlightslist);
		$('textarea[name="decisions[0].why_recommend"]').parent().parent().parent().parent().parent().parent().parent().attr("style", "width: 100% !important");
		$('textarea[name="decisions[0].recommend_note"]').parent().next().children().children().append(referalReqNote);
	
		$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(mentalNoteTelesame);
		$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(mentalNoteTeleHIPA);
		$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(dentalNoteCov);
		$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(visionFullCov);
		$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(visionGlasses);
		$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(visionCOntacts);
		$('textarea[name="decisions[0].insurance_requires"]').parent().next().children().children().append(benefitsWallet);
	}
}

function facilityInit1() {
	if ($('input[name="decisions[1].id"]').parent().attr("id") != "left-part01" && $('input[name="decisions[1].id"]').parent().attr("id") != "undefined") {
		$('input[name="decisions[1].id"]').parent().attr("id", "left-part01");
		$('input[name="decisions[1].facility.id"]').parent().parent().parent().parent().parent().attr("id", "right-part01");
		
		//Working hours
		$('select[name="decisions[1].facility.unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysfid01");
		$('select[name="decisions[1].facility.unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbasef01");
		
		$('#unavailabledaysfid01').appendTo('#unavailabledaysidbasef01');
		$('input[name="decisions[1].facility.monday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef01');
		$('input[name="decisions[1].facility.tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef01');
		$('input[name="decisions[1].facility.wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef01');
		$('input[name="decisions[1].facility.thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef01');
		$('input[name="decisions[1].facility.friday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef01');
		$('input[name="decisions[1].facility.saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef01');
		$('input[name="decisions[1].facility.sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef01');
						
		//Internal notes facility
		$('input[name="decisions[1].facility.ein"]').parent().parent().attr("id", "internalnotesidrightf1");
		$('input[name="decisions[1].facility.facility_kind"]').parent().parent().parent().parent().attr("id", "internalnotesidleftf1");
		$('input[name="decisions[1].facility.earliest_availability"]').parent().parent().parent().parent().parent().attr("id", "availablearlidf1");
		$('textarea[name="decisions[1].facility.notes"]').parent().attr("id", "providernotesidf1");
		
		$("#providernotesidf1").appendTo('#internalnotesidleftf1');
		$('input[name="decisions[1].facility.facility_kind"]').parent().parent().parent().appendTo('#internalnotesidrightf1');
		$('input[name="decisions[1].facility.is_thirdparty_scheduling_supported"]').parent().appendTo('#internalnotesidrightf1');
		$('input[name="decisions[1].facility.earliest_availability"]').parent().parent().parent().parent().parent().appendTo('#internalnotesidrightf1');
		$('input[name="decisions[1].facility.npi"]').parent().appendTo('#internalnotesidrightf1');
		$('input[name="decisions[1].facility.ein"]').parent().appendTo('#internalnotesidrightf1');
		$('input[name="decisions[1].facility.facility_default_ava"]').parent().parent().parent().parent().parent().append('<div class="form-group" id="avatarPreviewBox2"></div>');
		
		//New templates
		$('textarea[name="decisions[1].why_recommend"]').parent().next().children().children().empty();
		$('textarea[name="decisions[1].why_recommend"]').parent().next().children().children().append(highlightslist);
		$('textarea[name="decisions[1].why_recommend"]').parent().parent().parent().parent().parent().parent().parent().attr("style", "width: 100% !important");
		$('textarea[name="decisions[1].recommend_note"]').parent().next().children().children().append(referalReqNote);
	
		$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(mentalNoteTelesame);
		$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(mentalNoteTeleHIPA);
		$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(dentalNoteCov);
		$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(visionFullCov);
		$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(visionGlasses);
		$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(visionCOntacts);
		$('textarea[name="decisions[1].insurance_requires"]').parent().next().children().children().append(benefitsWallet);
	}
}

function facilityInit2() {
	if ($('input[name="decisions[2].id"]').parent().attr("id") != "left-part02" && $('input[name="decisions[2].id"]').parent().attr("id") != "undefined") {
		$('input[name="decisions[2].id"]').parent().attr("id", "left-part02");
		$('input[name="decisions[2].facility.id"]').parent().parent().parent().parent().parent().attr("id", "right-part02");
		
		//Working hours
		$('select[name="decisions[2].facility.unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysfid02");
		$('select[name="decisions[2].facility.unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbasef02");
		
		$('#unavailabledaysfid02').appendTo('#unavailabledaysidbasef02');
		$('input[name="decisions[2].facility.monday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef02');
		$('input[name="decisions[2].facility.tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef02');
		$('input[name="decisions[2].facility.wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef02');
		$('input[name="decisions[2].facility.thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef02');
		$('input[name="decisions[2].facility.friday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef02');
		$('input[name="decisions[2].facility.saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef02');
		$('input[name="decisions[2].facility.sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef02');
						
		//Internal notes facility
		$('input[name="decisions[2].facility.ein"]').parent().parent().attr("id", "internalnotesidrightf2");
		$('input[name="decisions[2].facility.facility_kind"]').parent().parent().parent().parent().attr("id", "internalnotesidleftf2");
		$('input[name="decisions[2].facility.earliest_availability"]').parent().parent().parent().parent().parent().attr("id", "availablearlidf2");
		$('textarea[name="decisions[2].facility.notes"]').parent().attr("id", "providernotesidf2");
		
		$("#providernotesidf2").appendTo('#internalnotesidleftf2');
		$('input[name="decisions[2].facility.facility_kind"]').parent().parent().parent().appendTo('#internalnotesidrightf2');
		$('input[name="decisions[2].facility.is_thirdparty_scheduling_supported"]').parent().appendTo('#internalnotesidrightf2');
		$('input[name="decisions[2].facility.earliest_availability"]').parent().parent().parent().parent().parent().appendTo('#internalnotesidrightf2');
		$('input[name="decisions[2].facility.npi"]').parent().appendTo('#internalnotesidrightf2');
		$('input[name="decisions[2].facility.ein"]').parent().appendTo('#internalnotesidrightf2');
		$('input[name="decisions[2].facility.facility_default_ava"]').parent().parent().parent().parent().parent().append('<div class="form-group" id="avatarPreviewBox3"></div>');
		
		//New templates
		$('textarea[name="decisions[2].why_recommend"]').parent().next().children().children().empty();
		$('textarea[name="decisions[2].why_recommend"]').parent().next().children().children().append(highlightslist);
		$('textarea[name="decisions[2].why_recommend"]').parent().parent().parent().parent().parent().parent().parent().attr("style", "width: 100% !important");
		$('textarea[name="decisions[2].recommend_note"]').parent().next().children().children().append(referalReqNote);
	
		$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(mentalNoteTelesame);
		$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(mentalNoteTeleHIPA);
		$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(dentalNoteCov);
		$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(visionFullCov);
		$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(visionGlasses);
		$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(visionCOntacts);
		$('textarea[name="decisions[2].insurance_requires"]').parent().next().children().children().append(benefitsWallet);
	}
}

function facilityInit3() {
	if ($('input[name="decisions[3].id"]').parent().attr("id") != "left-part03" && $('input[name="decisions[3].id"]').parent().attr("id") != "undefined") {
		$('input[name="decisions[3].id"]').parent().attr("id", "left-part03");
		$('input[name="decisions[3].facility.id"]').parent().parent().parent().parent().parent().attr("id", "right-part03");
		
		//Working hours
		$('select[name="decisions[3].facility.unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysfid03");
		$('select[name="decisions[3].facility.unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbasef03");
		
		$('#unavailabledaysfid03').appendTo('#unavailabledaysidbasef03');
		$('input[name="decisions[3].facility.monday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef03');
		$('input[name="decisions[3].facility.tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef03');
		$('input[name="decisions[3].facility.wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef03');
		$('input[name="decisions[3].facility.thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef03');
		$('input[name="decisions[3].facility.friday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef03');
		$('input[name="decisions[3].facility.saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef03');
		$('input[name="decisions[3].facility.sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbasef03');
						
		//Internal notes facility
		$('input[name="decisions[3].facility.ein"]').parent().parent().attr("id", "internalnotesidrightf3");
		$('input[name="decisions[3].facility.facility_kind"]').parent().parent().parent().parent().attr("id", "internalnotesidleftf3");
		$('input[name="decisions[3].facility.earliest_availability"]').parent().parent().parent().parent().parent().attr("id", "availablearlidf3");
		$('textarea[name="decisions[3].facility.notes"]').parent().attr("id", "providernotesidf3");
		
		$("#providernotesidf3").appendTo('#internalnotesidleftf3');
		$('input[name="decisions[3].facility.facility_kind"]').parent().parent().parent().appendTo('#internalnotesidrightf3');
		$('input[name="decisions[3].facility.is_thirdparty_scheduling_supported"]').parent().appendTo('#internalnotesidrightf3');
		$('input[name="decisions[3].facility.earliest_availability"]').parent().parent().parent().parent().parent().appendTo('#internalnotesidrightf3');
		$('input[name="decisions[3].facility.npi"]').parent().appendTo('#internalnotesidrightf3');
		$('input[name="decisions[3].facility.ein"]').parent().appendTo('#internalnotesidrightf3');
		$('input[name="decisions[3].facility.facility_default_ava"]').parent().parent().parent().parent().parent().append('<div class="form-group" id="avatarPreviewBox4"></div>');
		
		//New templates
		$('textarea[name="decisions[3].why_recommend"]').parent().next().children().children().empty();
		$('textarea[name="decisions[3].why_recommend"]').parent().next().children().children().append(highlightslist);
		$('textarea[name="decisions[3].why_recommend"]').parent().parent().parent().parent().parent().parent().parent().attr("style", "width: 100% !important");
		$('textarea[name="decisions[3].recommend_note"]').parent().next().children().children().append(referalReqNote);
	
		$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(mentalNoteTelesame);
		$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(mentalNoteTeleHIPA);
		$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(dentalNoteCov);
		$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(visionFullCov);
		$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(visionGlasses);
		$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(visionCOntacts);
		$('textarea[name="decisions[3].insurance_requires"]').parent().next().children().children().append(benefitsWallet);
	}
}

//Appointment
function apptInit() {
	setTimeout( function() {
		if ($('input[name="decision.id"]').parent().attr("id") != "left-part00" && $('input[name="decision.id"]').parent().attr("id") != "undefined") {
			$('input[name="decision.id"]').parent().attr("id", "left-part00");
			$('input[name="decision.provider.id"]').parent().parent().parent().parent().parent().attr("id", "right-part00");
			
			//Working hours
			$('select[name="decision.provider.offices[0].unavailable_days"]').parent().parent().parent().attr("id", "unavailabledaysid00");
			$('select[name="decision.provider.offices[0].unavailable_days"]').parent().parent().parent().parent().parent().children().attr("id", "unavailabledaysidbase00");
			
			$('#unavailabledaysid00').appendTo('#unavailabledaysidbase00');
			$('input[name="decision.provider.offices[0].monday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
			$('input[name="decision.provider.offices[0].tuesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
			$('input[name="decision.provider.offices[0].wednesday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
			$('input[name="decision.provider.offices[0].thursday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
			$('input[name="decision.provider.offices[0].friday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
			$('input[name="decision.provider.offices[0].saturday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
			$('input[name="decision.provider.offices[0].sunday_hours"]').parent().parent().appendTo('#unavailabledaysidbase00');
							
			//Internal notes provider
			$('input[name="decision.provider.ein"]').parent().parent().attr("id", "internalnotesidleft0");
			$('input[name="decision.provider.npi"]').parent().parent().attr("id", "internalnotesidright0");
			$('input[name="decision.provider.earliest_availability"]').parent().parent().parent().parent().parent().attr("id", "availablearlid0");
			$('textarea[name="decision.provider.notes"]').parent().attr("id", "providernotesid0");
			
			$("#providernotesid0").appendTo('#internalnotesidleft0');
			$('input[name="decision.provider.is_thirdparty_scheduling_supported"]').parent().appendTo('#internalnotesidright0');
			$('input[name="decision.provider.earliest_availability"]').parent().parent().parent().parent().parent().appendTo('#internalnotesidright0');
			$('input[name="decision.provider.npi"]').parent().appendTo('#internalnotesidright0');
			$('input[name="decision.provider.ein"]').parent().appendTo('#internalnotesidright0');
			
			//Main provider details
			$('select[name="decision.provider.gender"]').parent().parent().parent().attr("id", "genderblock00");
			$('input[name="decision.provider.website_url"]').parent().appendTo('#genderblock00');
			$('input[name="decision.provider.avatar"]').parent().appendTo('#genderblock00');
			$('input[name="decision.provider.avatar_default_type"]').parent().appendTo('#genderblock00');
			
			//New templates
			$('textarea[name="decision.insurance_requires"]').parent().next().children().children().append(mentalNoteTelesame);
			$('textarea[name="decision.insurance_requires"]').parent().next().children().children().append(mentalNoteTeleHIPA);
			$('textarea[name="decision.insurance_requires"]').parent().next().children().children().append(dentalNoteCov);
			$('textarea[name="decision.insurance_requires"]').parent().next().children().children().append(visionFullCov);
			$('textarea[name="decision.insurance_requires"]').parent().next().children().children().append(visionGlasses);
			$('textarea[name="decision.insurance_requires"]').parent().next().children().children().append(visionCOntacts);
			$('textarea[name="decision.insurance_requires"]').parent().next().children().children().append(benefitsWallet);
		}
	apptInit();
	}, 2000)
}

// $('img[class="logo"]').parent().parent().append('<div class="column ng-scope" id="topWarnings"><span id="warningTitle" hidden>VSP</span></div>');

function ticketChecker() {
if (autoQAOldcStatus == "1") {
	setTimeout( function() { 
		if (document.getElementById("header").value != null) {
			var cardTitleText = document.getElementById("header").value;
		}
			var memberFirstNameR = $('.profile-info-header-name').text().split(' ');
			var selectedMemberProfileR = $('#profile_id option:selected').text().split(' ');
			
			var autoQATotalodc; var autoQAodc1, autoQAodc2, autoQAodc3; 
			
			if (cardTitleText == "Provider" || cardTitleText == "provider" || cardTitleText == "Facility" || cardTitleText == "facility" || cardTitleText == "" || cardTitleText == "Dentist" || cardTitleText == "Provider Appointment" || cardTitleText == "Appointment" || cardTitleText == "Facility Appointment" || cardTitleText == "Vision Provider") {
				document.getElementById("warningTitle").hidden = false;
				autoQAodc1 = 1;
			}
			else {
                document.getElementById("warningTitle").hidden = true;
				autoQAodc1 = 0;
            }
			
			if (selectedMemberProfileR[0] != memberFirstNameR[12]) {
				document.getElementById("warningSelProfile").hidden = false;
			}
			else {
                document.getElementById("warningSelProfile").hidden = true;
			}
			
			//$('#profile_id option:selected').text();
			//$('#specialities0 option:selected').val(); 
			
			if ($('[name="decisions[0].provider.specialities"] option:selected').val() === undefined && document.getElementById("warningSpechialityP0") != null) { document.getElementById("warningSpechialityP0").hidden = false;
			} else if ($('[name="decisions[0].provider.specialities"] option:selected').val() != undefined && document.getElementById("warningSpechialityP0") != null) { document.getElementById("warningSpechialityP0").hidden = true; }
			
			if ($('[name="decisions[1].provider.specialities"] option:selected').val() === undefined && document.getElementById("warningSpechialityP1") != null) { document.getElementById("warningSpechialityP1").hidden = false;
			} else if ($('[name="decisions[1].provider.specialities"] option:selected').val() != undefined && document.getElementById("warningSpechialityP1") != null) { document.getElementById("warningSpechialityP1").hidden = true; }
			
			if ($('[name="decisions[2].provider.specialities"] option:selected').val() === undefined && document.getElementById("warningSpechialityP2") != null) { document.getElementById("warningSpechialityP2").hidden = false;
			} else if ($('[name="decisions[2].provider.specialities"] option:selected').val() != undefined && document.getElementById("warningSpechialityP2") != null) { document.getElementById("warningSpechialityP2").hidden = true; }
			
			if ($('[name="decisions[3].provider.specialities"] option:selected').val() === undefined && document.getElementById("warningSpechialityP3") != null) { document.getElementById("warningSpechialityP3").hidden = false;
			} else if ($('[name="decisions[3].provider.specialities"] option:selected').val() != undefined && document.getElementById("warningSpechialityP3") != null) { document.getElementById("warningSpechialityP3").hidden = true; }
			
			if (document.getElementById("decisions[0].is_unique_traits_checked") != null && document.getElementById("decisions[0].is_unique_traits_checked").value != "true") { document.getElementById("uncheckedUT1").hidden = false; } else { document.getElementById("uncheckedUT1").hidden = true; }
			if (document.getElementById("decisions[1].is_unique_traits_checked") != null && document.getElementById("decisions[1].is_unique_traits_checked").value != "true") { document.getElementById("uncheckedUT2").hidden = false; } else { document.getElementById("uncheckedUT2").hidden = true; }
			if (document.getElementById("decisions[2].is_unique_traits_checked") != null && document.getElementById("decisions[2].is_unique_traits_checked").value != "true") { document.getElementById("uncheckedUT3").hidden = false; } else { document.getElementById("uncheckedUT3").hidden = true; }
			if (document.getElementById("decisions[3].is_unique_traits_checked") != null && document.getElementById("decisions[3].is_unique_traits_checked").value != "true") { document.getElementById("uncheckedUT4").hidden = false; } else { document.getElementById("uncheckedUT4").hidden = true; }
			if (document.getElementById("uncheckedUT1").hidden == false || document.getElementById("uncheckedUT2").hidden == false || document.getElementById("uncheckedUT3").hidden == false || document.getElementById("uncheckedUT4").hidden == false) {
				document.getElementById("warningGroupUT").hidden = false; autoQAodc2 = 1;
			} else {document.getElementById("warningGroupUT").hidden = true; autoQAodc2 = 0; }
			
			if (document.getElementById("decisions[0].treats_members_needs") != null && document.getElementById("decisions[0].treats_members_needs").value != "true") { document.getElementById("uncheckedMMNeeds1").hidden = false; } else { document.getElementById("uncheckedMMNeeds1").hidden = true; }
			if (document.getElementById("decisions[1].treats_members_needs") != null && document.getElementById("decisions[1].treats_members_needs").value != "true") { document.getElementById("uncheckedMMNeeds2").hidden = false; } else { document.getElementById("uncheckedMMNeeds2").hidden = true; }
			if (document.getElementById("decisions[2].treats_members_needs") != null && document.getElementById("decisions[2].treats_members_needs").value != "true") { document.getElementById("uncheckedMMNeeds3").hidden = false; } else { document.getElementById("uncheckedMMNeeds3").hidden = true; }
			if (document.getElementById("decisions[3].treats_members_needs") != null && document.getElementById("decisions[3].treats_members_needs").value != "true") { document.getElementById("uncheckedMMNeeds4").hidden = false; } else { document.getElementById("uncheckedMMNeeds4").hidden = true; }
			if (document.getElementById("uncheckedMMNeeds1").hidden == false || document.getElementById("uncheckedMMNeeds2").hidden == false || document.getElementById("uncheckedMMNeeds3").hidden == false || document.getElementById("uncheckedMMNeeds4").hidden == false) {
				document.getElementById("warningTreatNeeds").hidden = false; autoQAodc3 = 1;
			} else {document.getElementById("warningTreatNeeds").hidden = true; autoQAodc3 = 0; }
			
			autoQATotalodc = autoQAodc1 + autoQAodc2 + autoQAodc3
			
			if (autoQATotalodc>0) {
				document.getElementById("topWarnings").hidden = false;
			} 
			else {
				document.getElementById("topWarnings").hidden = true;
			}
			
		ticketChecker();
	}, 1500)
}
}

function injectDesignOLDQ() {
	//Settings button
	setTimeout( function() {
		
		if ( $('#settingsBtn').text() == 'Settings') {
			loadDesignMainOLDQ();
			return;
		}
		else { console.log("Waiting for injection");
		
		injectDesignOLDQ(); }
	}, 500)
}

function loadDesignMainOLDQ() {
	// Main Design Save
	chrome.storage.local.get(['sradMainLocalsave'], function(result) {
		if (result.sradMainLocalsave != "1" && result.sradMainLocalsave != "1" && result.sradMainLocalsave != "2" && result.sradMainLocalsave != "3") { colorBlackFull = ""; colorWhiteFull = ""; accent075Color = ""; colorBg = ""; colorFront = ""; accentBgColor = ""; accentHoverColor = ""; accentFrontColor = ""; accent06Color = ""; }; // No save 
		
		if (result.sradMainLocalsave == "1") { completelyWhiteStyleOLD(); colorBg = "rgb(240, 240, 240)"; colorFront = "#000"; accentsWhitebgOLD(); }; // sraddefwhite
		if (result.sradMainLocalsave == "2") { completelyGreyStyleOLD(); accentsWhitebgOLD(); colorBg = "#303134"; colorFront = "#ffffff"; }; // sraddarkmain
		if (result.sradMainLocalsave == "3") { completelyBlackStyleOLD(); colorBg = "rgb(15, 15, 15)"; colorFront = "#dbdbdb"; accentsBlackbgOLD(); }; // sradblackmain
	});
	
	// Old DC (not find Care)
	chrome.storage.local.get(['oldDcFix1Localsave'], function(result) {
		if (result.oldDcFix1Localsave == "0") { movePreviewCardStatus="0"; } else { movePreviewCardStatus="1"; };
	}); // Move "Preview Card" to top bar ✔️ movePreviewCardStatus
	chrome.storage.local.get(['oldDcFix2Localsave'], function(result) {
		if (result.oldDcFix2Localsave == "0") { autoQAOldcStatus="0"; } else { autoQAOldcStatus="1"; };
	}); // Auto-QA autoQAOldcStatus ✔️
	chrome.storage.local.get (['oldDcFix3Localsave'], function(result) {
		if (result.oldDcFix3Localsave == "0") { livepicOldDCStatus="0"; } else { livepicOldDCStatus="1"; };
	}); // Live pic preview  ✔️
	chrome.storage.local.get(['oldDcFix4Localsave'], function(result) {
		if (result.oldDcFix4Localsave == "0") { extendedGreeterStatus = "0"; } else { extendedGreeterStatus = "1"; };
	}); // Reserved - 4 - Extended greeting ✔️
	/*chrome.storage.local.get(['oldDcFix5Localsave'], function(result) {
		if (result.oldDcFix5Localsave == "0") { $("input[name=oldDcFix5]").prop('checked', false); } else { $("input[name=oldDcFix5]").prop('checked', true); };
	}); // Add group search button 
	chrome.storage.local.get(['oldDcFix6Localsave'], function(result) {
		if (result.oldDcFix6Localsave == "0") { $("input[name=oldDcFix6]").prop('checked', false); } else { $("input[name=oldDcFix6]").prop('checked', true); };
	}); // UA Flag
	chrome.storage.local.get(['oldDcFix7Localsave'], function(result) {
		if (result.oldDcFix7Localsave == "0") { $("input[name=oldDcFix7]").prop('checked', false); } else { $("input[name=oldDcFix7]").prop('checked', true); };
	}); // Add group search button (TODO)
	chrome.storage.local.get(['oldDcFix8Localsave'], function(result) {
		if (result.oldDcFix8Localsave == "0") { $("input[name=oldDcFix8]").prop('checked', false); } else { $("input[name=oldDcFix8]").prop('checked', true); };
	}); */ // Live pic preview
	
	chrome.storage.local.get(['crmFix6Localsave'], function(result) {
		if (result.crmFix6Localsave == "0") { tktIdShownStatus = "0"; } else { tktIdShownStatus = "1"; };
	}); // Show TKT ID on top of the page ✔️
	
	// Message DC Saves
	chrome.storage.local.get(['messageFix1Localsave'], function(result) {
		if (result.messageFix1Localsave == "0") { messageEditBarStatus="0"; } else { messageEditBarStatus="1"; };
	}); // Message edit bar will stay on screen ✔️
	chrome.storage.local.get(['messageFix2Localsave'], function(result) {
		if (result.messageFix2Localsave == "0") { messageLivePrewStatus="0"; } else { messageLivePrewStatus="1"; };
	}); // Message Live Preview ✔️ 
	/*chrome.storage.local.get(['messageFix3Localsave'], function(result) {
		if (result.messageFix3Localsave == "0") { $("input[name=messageFix3]").prop('checked', false); } else { $("input[name=messageFix3]").prop('checked', true); };
	}); // reserved - 11
	chrome.storage.local.get(['messageFix4Localsave'], function(result) {
		if (result.messageFix4Localsave == "0") { $("input[name=messageFix4]").prop('checked', false); } else { $("input[name=messageFix4]").prop('checked', true); };
	}); // reserved - 12 */
}

function accentsWhitebgOLD() {
	chrome.storage.local.get(['sradAccentLocalsave'], function(result) {
		if (result.sradAccentLocalsave != "1" && result.sradAccentLocalsave != "2" && result.sradAccentLocalsave != "3" && result.sradAccentLocalsave != "4" && result.sradAccentLocalsave != "5" && result.sradAccentLocalsave != "6" && result.sradAccentLocalsave != "7" && result.sradAccentLocalsave != "8") { accentBgColor = "#8213a1"; accentHoverColor = "#8213a1"; accentFrontColor = "#8d0eb0"; accent06Color = "rgba(141, 14, 176, 0.6)"; }; // No save
		
		if (result.sradAccentLocalsave == "1") { accentBgColor = "#636363"; accentHoverColor = "#636363"; accentFrontColor = "#7d7d7d"; accent06Color = "rgba(125, 125, 125, 0.6)"; }; // sradgrey
		if (result.sradAccentLocalsave == "2") { accentBgColor = "#2899ce"; accentHoverColor = "#2899ce"; accentFrontColor = "#249dd6"; accent06Color = "rgba(36, 157, 214, 0.6)"; }; // sradblue
		if (result.sradAccentLocalsave == "3") { accentBgColor = "#13a126"; accentHoverColor = "#13a126"; accentFrontColor = "#0eb324"; accent06Color = "rgba(14, 179, 36, 0.6)"; }; // sradgreen
		if (result.sradAccentLocalsave == "4") { accentBgColor = "#c5c500"; accentHoverColor = "#c5c500"; accentFrontColor = "#d1d100"; accent06Color = "rgba(209, 209, 0, 0.6)"; }; // sradyellow
		if (result.sradAccentLocalsave == "5") { accentBgColor = "#c51818"; accentHoverColor = "#c51818"; accentFrontColor = "#d41313"; accent06Color = "rgba(212, 19, 19, 0.6)"; }; // sradred
		if (result.sradAccentLocalsave == "6") { accentBgColor = "#a16813"; accentHoverColor = "#a16813"; accentFrontColor = "#b8740f"; accent06Color = "rgba(184, 116, 15, 0.6)"; }; // sradorange
		if (result.sradAccentLocalsave == "7") { accentBgColor = "#8213a1"; accentHoverColor = "#8213a1"; accentFrontColor = "#8d0eb0"; accent06Color = "rgba(141, 14, 176, 0.6)"; }; // sradpurple
		if (result.sradAccentLocalsave == "8") { accentBgColor = "#c20ea4"; accentHoverColor = "#c20ea4"; accentFrontColor = "#d108b0"; accent06Color = "rgba(209, 8, 176, 0.6)"; }; // sradpink
	});
}

function accentsBlackbgOLD() {
	chrome.storage.local.get(['sradAccentLocalsave'], function(result) {
		if (result.sradAccentLocalsave != "1" && result.sradAccentLocalsave != "2" && result.sradAccentLocalsave != "3" && result.sradAccentLocalsave != "4" && result.sradAccentLocalsave != "5" && result.sradAccentLocalsave != "6" && result.sradAccentLocalsave != "7" && result.sradAccentLocalsave != "8") { accentBgColor = "#71118d"; accentHoverColor = "#5c1d6e"; accentFrontColor = "#8213a1"; accent06Color = "rgba(112, 22, 138, 0.6)"; }; // No save
		
		if (result.sradAccentLocalsave == "1") { accentBgColor = "#4a4a4a"; accentHoverColor = "#404040"; accentFrontColor = "#878787"; accent06Color = "rgba(94, 94, 94, 0.6)"; }; // sradgrey
		if (result.sradAccentLocalsave == "2") { accentBgColor = "#0c519b"; accentHoverColor = "#076ddb"; accentFrontColor = "#117bed"; accent06Color = "rgba(7, 109, 219, 0.6)"; }; // sradblue
		if (result.sradAccentLocalsave == "3") { accentBgColor = "#158d11"; accentHoverColor = "#206e1d"; accentFrontColor = "#24a113"; accent06Color = "rgba(32, 138, 22, 0.6)"; }; // sradgreen
		if (result.sradAccentLocalsave == "4") { accentBgColor = "#bfb90b"; accentHoverColor = "#6d6e1d"; accentFrontColor = "#a19c13"; accent06Color = "rgba(138, 130, 22, 0.6)"; }; // sradyellow
		if (result.sradAccentLocalsave == "5") { accentBgColor = "#8d1111"; accentHoverColor = "#6e1d1d"; accentFrontColor = "#a11313"; accent06Color = "rgba(138, 22, 22, 0.6)"; }; // sradred
		if (result.sradAccentLocalsave == "6") { accentBgColor = "#8d4b11"; accentHoverColor = "#6e4f1d"; accentFrontColor = "#a15f13"; accent06Color = "rgba(138, 88, 22, 0.6)"; }; // sradorange
		if (result.sradAccentLocalsave == "7") { accentBgColor = "#71118d"; accentHoverColor = "#5c1d6e"; accentFrontColor = "#8213a1"; accent06Color = "rgba(112, 22, 138, 0.6)"; }; // sradpurple
		if (result.sradAccentLocalsave == "8") { accentBgColor = "#8d1170"; accentHoverColor = "#6e1d5c"; accentFrontColor = "#a1138c"; accent06Color = "rgba(138, 22, 134, 0.6)"; }; // sradpink
	});
}

function completelyBlackStyleOLD(){
	setTimeout( function() {
			if (document.getElementsByClassName("decision-form_block-title")[0] != undefined) {
				// Page preloaded
				// Make initial load be fuuly black ,then preload starts and makes it transparent
				addCSSOLD('/* Top panel BG */.content-header {background: '+colorBlackFull+' !important; border-bottom: none !important;} /* Body */ body {background-color: '+colorBlackFull+' !important; color: '+colorFront+' !important;} /* Bottomlest level */ #decision-center {background-color: '+colorBlackFull+' !important;} /* Behing TKT DESICION CODE:: */ .decision-otrs-ticket {background: '+colorBlackFull+' !important;} /* DC TKT Background */ #decision-form {background: '+colorBlackFull+' !important;} /* Text forms background and text */ .form-control {background-color: '+colorBg+' !important; color: '+colorFront+' !important; } /* Text line field imput background */ input {background-color: '+colorBg+' !important;} /* Selectors background and each option text */ option {background-color: '+colorBg+' !important; color: '+colorWhiteFull+' !important;} select option {color: '+colorWhiteFull+' !important;} option:hover,option:focus {background: '+accentBgColor+' !important;} option:active,option:checked {background: '+accentFrontColor+' !important;} .css-1n7v3ny-option {background-color: '+accentHoverColor+' !important; color: '+colorWhiteFull+' !important;} ::selection {background: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important;} /* OLD DC - NEW STYLE */ #decision-form .select-div_multiple select.form-control option {color: '+colorFront+' !important;} #decision-form .decision-form_block label {color: '+colorFront+';} /* Decision Details Header etc text */ #decision-form .decision-form_block-title {color: '+accentFrontColor+' !important;} /* Insurance add + current neworks bars */ .css-yk16xz-control {background-color: '+colorBg+' !important;} .css-5duvv3-control {background-color: '+colorBg+' !important;} .css-1pahdxg-control {background-color: '+colorBlackFull+' !important;} .css-1g6gooi {color: '+colorFront+' !important;} .css-26l3qy-menu {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} .form-control {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} /* Messages */ .rdw-editor-main {background: '+colorWhiteFull+' !important;} .rdw-editor-toolbar {background: '+colorBlackFull+' !important;} /* Dropdown (message font, etc) */ .rdw-dropdown-wrapper {background: '+colorBlackFull+' !important;} .rdw-dropdown-optionwrapper {background: '+colorBlackFull+' !important;} .rdw-dropdownoption-active {background: '+accentFrontColor+' !important;} .rdw-dropdownoption-highlighted {background: '+accentHoverColor+' !important;} .rdw-colorpicker-modal {background: '+colorBlackFull+' !important;} .rdw-link-modal { background: '+colorBlackFull+' !important;} .rdw-link-modal-btn {background: '+colorBlackFull+' !important; } .rdw-image-modal {background: '+colorBlackFull+' !important;} .rdw-image-modal-btn {background: '+colorBlackFull+' !important;} /* DC Select option or office */ .nav-tabs > li > a {background-color: '+colorBg+' !important; color: '+colorFront+' !important;} .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {background-color: '+accentBgColor+' !important; color: '+colorFront+' !important;} /* BOrder when text area clicked */ .form-control:focus {border-color: '+accentBgColor+' !important; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important;} /* Radio buttons */ input[type="radio"] {accent-color: '+accentBgColor+' !important;} /* Buttons Bgs */ .btn-primary {background-color: '+accentBgColor+' ; border: none;} /* Radio buttons */ input[type="checkbox"] {accent-color: '+accentBgColor+' !important;} /* Top shelf buttons */ .btn.btn-brand-primary { background: none; background-color: '+accentBgColor+'; } /* BTNs on hover */ .btn-primary:hover { background-color: '+accentFrontColor+' !important; } .btn.btn-brand-primary:hover { background-color: '+accentFrontColor+' !important; background: '+accentFrontColor+' !important; } /* After call menu */ .dropdown-menu { background-color: '+colorBlackFull+' !important; color: '+colorFront+' !important; } .dropdown-menu>li>a { color: '+colorFront+' !important; } .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus { background-color: '+accent06Color+' !important; } .ng-scope active { background-color: '+accentBgColor+' !important; color: '+colorFront+' !important; } .modal-body { background-color: '+colorBlackFull+' !important; color: '+colorFront+' !important; } ');
				
				addCSSOLD('/* CRM dropuot */ .right-sidebar {background: '+colorBlackFull+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name {color: '+colorFront+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select {background: '+colorBlackFull+' !important; color: '+colorWhiteFull+' !important;} .panel-right {background-color: '+colorBlackFull+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content {background: '+colorBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .individual, .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .family {color: '+colorFront+' !important;} .products__page_subtitle { color: '+colorFront+'; } .products-wrapper { background-color: '+colorBg+'; } .products__title { color: '+colorFront+'; }');

				addCSSOLD('/* Bill Review */ /* Main Background */ .centered_figed_mbr .grey-light-b { background-color: '+colorBlackFull+' !important; } textarea {background-color: '+colorBg+'; color: '+colorFront+'}');

				return;
            }
            else {
				completelyBlackStyleOLD();
            }
	}, 250)
}

function completelyWhiteStyleOLD(){
	setTimeout( function() {
			if (document.getElementsByClassName("decision-form_block-title")[0] != undefined) {
				// Page preloaded
				// Make initial load be fuuly black ,then preload starts and makes it transparent
				addCSSOLD('/* Top panel BG */.content-header {background: '+colorWhiteFull+' !important; border-bottom: none !important; } /* Body */ body {background-color: '+colorWhiteFull+' !important; color: '+colorFront+' !important;} /* Bottomlest level */ #decision-center {background-color: '+colorWhiteFull+' !important;} /* Behing TKT DESICION CODE:: */ .decision-otrs-ticket {background: '+colorWhiteFull+' !important;} /* DC TKT Background */ #decision-form {background: '+colorWhiteFull+' !important;} /* Text forms background and text */ .form-control {background-color: '+colorBg+' !important; color: '+colorFront+' !important; } /* Text line field imput background */ input {background-color: '+colorBg+' !important;} /* Selectors background and each option text */ option {background-color: '+colorBg+' !important; color: '+colorBlackFull+' !important;} select option {color: '+colorBlackFull+' !important;} option:hover,option:focus {background: '+accent06Color+' !important; color: '+colorWhiteFull+' !important;} option:active,option:checked {background: '+accentFrontColor+' !important; color: '+colorWhiteFull+' !important;} .css-1n7v3ny-option {background-color: '+accentHoverColor+' !important; color: '+colorWhiteFull+' !important;} ::selection {background: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important;} /* OLD DC - NEW STYLE */ #decision-form .select-div_multiple select.form-control option {color: '+colorFront+';} #decision-form .decision-form_block label {color: '+colorFront+';} /* Decision Details Header etc text */ #decision-form .decision-form_block-title {color: '+accentFrontColor+' !important;} /* Insurance add + current neworks bars */ .css-yk16xz-control {background-color: '+colorBg+' !important;} /* Color of Current insurance network accepted */ .css-1in3il5 {color: '+accentFrontColor+' !important;}  .css-5duvv3-control {background-color: '+colorBg+' !important;} .css-1pahdxg-control {background-color: '+colorWhiteFull+' !important;} .css-1g6gooi {color: '+colorFront+' !important;} .css-26l3qy-menu {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} .form-control {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} /* Messages */ .rdw-editor-main {background: '+colorWhiteFull+' !important;} .rdw-editor-toolbar {background: '+colorWhiteFull+' !important;} /* Dropdown (message font, etc) */ .rdw-dropdown-wrapper {background: '+colorWhiteFull+' !important;} .rdw-dropdown-optionwrapper {background: '+colorWhiteFull+' !important;} .rdw-dropdownoption-active {background: '+accentFrontColor+' !important;} .rdw-dropdownoption-highlighted {background: '+accentHoverColor+' !important;} .rdw-colorpicker-modal {background: '+colorWhiteFull+' !important;} .rdw-link-modal { background: '+colorWhiteFull+' !important;} .rdw-link-modal-btn {background: '+colorWhiteFull+' !important; } .rdw-image-modal {background: '+colorWhiteFull+' !important;} .rdw-image-modal-btn {background: '+colorWhiteFull+' !important;} /* DC Select option or office */ .nav-tabs > li > a {background-color: '+colorBg+' !important; color: '+colorBlackFull+' !important;} .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {background-color: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important;} /* BOrder when text area clicked */ .form-control:focus {border-color: '+accentBgColor+' !important; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important;} /* Radio buttons */ input[type="radio"] {accent-color: '+accentBgColor+' !important;} /* Buttons Bgs */ .btn-primary {background-color: '+accentBgColor+' ; border: none;} /* Radio buttons */ input[type="checkbox"] {accent-color: '+accentBgColor+' !important;} /* Top shelf buttons */ .btn.btn-brand-primary { background: none; background-color: '+accentBgColor+'; } /* BTNs on hover */ .btn-primary:hover { background-color: '+accentFrontColor+' !important; } .btn.btn-brand-primary:hover { background-color: '+accentFrontColor+' !important; background: '+accentFrontColor+' !important; } /* After call menu */ .dropdown-menu { background-color: '+colorWhiteFull+' !important; color: '+colorBlackFull+' !important; } .dropdown-menu>li>a { color: '+colorBlackFull+' !important; } .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus { background-color: '+accent06Color+' !important; } .ng-scope active { background-color: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important; } .modal-body { background-color: '+colorWhiteFull+' !important; color: '+colorBlackFull+' !important; } ');
				
				addCSSOLD('/* CRM dropuot */ .right-sidebar {background: '+colorWhiteFull+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name {color: '+colorFront+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select {background: '+colorWhiteFull+' !important; color: '+colorBlackFull+' !important;} .panel-right {background-color: '+colorWhiteFull+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content {background: '+colorBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .individual, .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .family {color: '+colorFront+' !important;} .products__page_subtitle { color: '+colorFront+'; } .products-wrapper { background-color: '+colorBg+'; } .products__title { color: '+colorFront+'; }');

				addCSSOLD('/* Bill Review */ /* Main Background */ .centered_figed_mbr .grey-light-b { background-color: '+colorWhiteFull+' !important; } textarea {background-color: '+colorBg+'; color: '+colorBlackFull+'}');

				return;
            }
            else {
				completelyWhiteStyleOLD();
            }
	}, 250)
}

function completelyGreyStyleOLD(){
	setTimeout( function() {
			if (document.getElementsByClassName("decision-form_block-title")[0] != undefined) {
				// Page preloaded
				// Make initial load be fuuly black ,then preload starts and makes it transparent
				addCSSOLD('/* Top panel BG */.content-header {background: '+greyPageBg+' !important; border-bottom: none !important;} /* Body */ body {background-color: '+greyPageBg+' !important; color: '+colorFront+' !important;} /* Bottomlest level */ #decision-center {background-color: '+colorTransparent+' !important;} /* Behing TKT DESICION CODE:: */ .decision-otrs-ticket {background: '+colorTransparent+' !important;} /* DC TKT Background */ #decision-form {background: '+colorTransparent+' !important;} /* Text forms background and text */ .form-control {background-color: '+colorBg+' !important; color: '+colorFront+' !important; } /* Text line field imput background */ input {background-color: '+colorBg+' !important;} /* Selectors background and each option text */ option {background-color: '+colorBg+' !important; color: '+colorWhiteFull+' !important;} select option {color: '+colorWhiteFull+' !important;} option:hover,option:focus {background: '+accentBgColor+' !important;} option:active,option:checked {background: '+accentFrontColor+' !important;} .css-1n7v3ny-option {background-color: '+accentHoverColor+' !important; color: '+colorWhiteFull+' !important;} ::selection {background: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important;} /* OLD DC - NEW STYLE */ #decision-form .select-div_multiple select.form-control option {color: '+colorFront+' !important;} #decision-form .decision-form_block label {color: '+colorFront+';} /* Decision Details Header etc text */ #decision-form .decision-form_block-title {color: '+accentFrontColor+' !important;} /* Insurance add + current neworks bars */ .css-yk16xz-control {background-color: '+colorBg+' !important;} .css-5duvv3-control {background-color: '+colorBg+' !important;} .css-1pahdxg-control {background-color: '+colorBlackFull+' !important;} .css-1g6gooi {color: '+colorFront+' !important;} .css-26l3qy-menu {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} .form-control {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} /* Messages */ .rdw-editor-main {background: '+colorWhiteFull+' !important;} .rdw-editor-toolbar {background: '+greyPageBg+' !important;} /* Dropdown (message font, etc) */ .rdw-dropdown-wrapper {background: '+colorBlackFull+' !important;} .rdw-dropdown-optionwrapper {background: '+colorBlackFull+' !important;} .rdw-dropdownoption-active {background: '+accentFrontColor+' !important;} .rdw-dropdownoption-highlighted {background: '+accentHoverColor+' !important;} .rdw-colorpicker-modal {background: '+colorBlackFull+' !important;} .rdw-link-modal { background: '+colorBlackFull+' !important;} .rdw-link-modal-btn {background: '+colorBlackFull+' !important; } .rdw-image-modal {background: '+colorBlackFull+' !important;} .rdw-image-modal-btn {background: '+colorBlackFull+' !important;} /* DC Select option or office */ .nav-tabs > li > a {background-color: '+colorBg+' !important; color: '+colorFront+' !important;} .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {background-color: '+accentBgColor+' !important; color: '+colorFront+' !important;} /* BOrder when text area clicked */ .form-control:focus {border-color: '+accentBgColor+' !important; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important;} /* Radio buttons */ input[type="radio"] {accent-color: '+accentBgColor+' !important;} /* Buttons Bgs */ .btn-primary {background-color: '+accentBgColor+' ; border: none;} /* Radio buttons */ input[type="checkbox"] {accent-color: '+accentBgColor+' !important;} /* Top shelf buttons */ .btn.btn-brand-primary { background: none; background-color: '+accentBgColor+'; } /* BTNs on hover */ .btn-primary:hover { background-color: '+accentFrontColor+' !important; } .btn.btn-brand-primary:hover { background-color: '+accentFrontColor+' !important; background: '+accentFrontColor+' !important; } /* After call menu */ .dropdown-menu { background-color: '+greyPageBg+' !important; color: '+colorWhiteFull+' !important; } .dropdown-menu>li>a { color: '+colorWhiteFull+' !important; } .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus { background-color: '+accent06Color+' !important; } .ng-scope active { background-color: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important; } .modal-body { background-color: '+greyPageBg+' !important; color: '+colorWhiteFull+' !important; } ');
				
				addCSSOLD('/* CRM dropuot */ .right-sidebar {background: '+greyPageBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name {color: '+colorFront+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select {background: '+greyPageBg+' !important; color: '+colorFront+' !important;} .panel-right {background-color: '+greyPageBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content {background: '+greyPageBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .individual, .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .family {color: '+colorFront+' !important;} .products__page_subtitle { color: '+colorFront+'; } .products-wrapper { background-color: '+colorBg+'; } .products__title { color: '+colorFront+'; }');

				addCSSOLD('/* Bill Review */ /* Main Background */ .centered_figed_mbr .grey-light-b { background-color: '+greyPageBg+' !important; } textarea {background-color: '+colorBg+'; color: '+colorFront+'}');

				return;
            }
            else {
				completelyGreyStyleOLD();
            }
	}, 250)
}

function addCSSOLD(css){
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

function ticketCheckerpic() {
if (livepicOldDCStatus == "1") {
	setTimeout( function() { 
			//provPic 
			if ($('input[name="decisions[0].provider.avatar"]').val() != null && $('input[name="decisions[0].provider.avatar"]').val() != '' && $('input[name="decisions[0].provider.avatar"]').val() != undefined && $('#avatarPreview1').html() == undefined) { $('#avatarPreviewBox1').append('<img id="avatarPreview1" class="avatarPreview" src="'+$('input[name="decisions[0].provider.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[0].provider.avatar"]').val() != null && $('input[name="decisions[0].provider.avatar"]').val() != '' && $('input[name="decisions[0].provider.avatar"]').val() != undefined && $('#avatarPreview1').html() != undefined) { $('#avatarPreview1').remove(); $('#avatarPreviewBox1').append('<img id="avatarPreview1" class="avatarPreview" src="'+$('input[name="decisions[0].provider.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[0].provider.avatar"]').val() != null && $('input[name="decisions[0].provider.avatar"]').val() == '' && $('input[name="decisions[0].provider.avatar"]').val() != undefined && $('#avatarPreview1').html() != undefined) { $('#avatarPreview1').remove(); }
			
			if ($('input[name="decisions[1].provider.avatar"]').val() != null && $('input[name="decisions[1].provider.avatar"]').val() != '' && $('input[name="decisions[1].provider.avatar"]').val() != undefined && $('#avatarPreview2').html() == undefined) { $('#avatarPreviewBox2').append('<img id="avatarPreview2" class="avatarPreview" src="'+$('input[name="decisions[1].provider.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[1].provider.avatar"]').val() != null && $('input[name="decisions[1].provider.avatar"]').val() != '' && $('input[name="decisions[1].provider.avatar"]').val() != undefined && $('#avatarPreview2').html() != undefined) { $('#avatarPreview2').remove(); $('#avatarPreviewBox2').append('<img id="avatarPreview2" class="avatarPreview" src="'+$('input[name="decisions[1].provider.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[1].provider.avatar"]').val() != null && $('input[name="decisions[1].provider.avatar"]').val() == '' && $('input[name="decisions[1].provider.avatar"]').val() != undefined && $('#avatarPreview2').html() != undefined) { $('#avatarPreview2').remove(); }
			
			if ($('input[name="decisions[2].provider.avatar"]').val() != null && $('input[name="decisions[2].provider.avatar"]').val() != '' && $('input[name="decisions[2].provider.avatar"]').val() != undefined && $('#avatarPreview3').html() == undefined) { $('#avatarPreviewBox3').append('<img id="avatarPreview3" class="avatarPreview" src="'+$('input[name="decisions[2].provider.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[2].provider.avatar"]').val() != null && $('input[name="decisions[2].provider.avatar"]').val() != '' && $('input[name="decisions[2].provider.avatar"]').val() != undefined && $('#avatarPreview3').html() != undefined) { $('#avatarPreview3').remove(); $('#avatarPreviewBox3').append('<img id="avatarPreview3" class="avatarPreview" src="'+$('input[name="decisions[2].provider.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[2].provider.avatar"]').val() != null && $('input[name="decisions[2].provider.avatar"]').val() == '' && $('input[name="decisions[2].provider.avatar"]').val() != undefined && $('#avatarPreview3').html() != undefined) { $('#avatarPreview3').remove(); }
			
			if ($('input[name="decisions[3].provider.avatar"]').val() != null && $('input[name="decisions[3].provider.avatar"]').val() != '' && $('input[name="decisions[3].provider.avatar"]').val() != undefined && $('#avatarPreview4').html() == undefined) { $('#avatarPreviewBox4').append('<img id="avatarPreview4" class="avatarPreview" src="'+$('input[name="decisions[3].provider.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[3].provider.avatar"]').val() != null && $('input[name="decisions[3].provider.avatar"]').val() != '' && $('input[name="decisions[3].provider.avatar"]').val() != undefined && $('#avatarPreview4').html() != undefined) { $('#avatarPreview4').remove(); $('#avatarPreviewBox4').append('<img id="avatarPreview4" class="avatarPreview" src="'+$('input[name="decisions[3].provider.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[3].provider.avatar"]').val() != null && $('input[name="decisions[3].provider.avatar"]').val() == '' && $('input[name="decisions[3].provider.avatar"]').val() != undefined && $('#avatarPreview4').html() != undefined) { $('#avatarPreview4').remove(); }
			
			//facPic
			if ($('input[name="decisions[0].facility.avatar"]').val() != null && $('input[name="decisions[0].facility.avatar"]').val() != '' && $('input[name="decisions[0].facility.avatar"]').val() != undefined && $('#avatarPreview1').html() == undefined) { $('#avatarPreviewBox1').append('<img id="avatarPreview1" class="avatarPreview" src="'+$('input[name="decisions[0].facility.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[0].facility.avatar"]').val() != null && $('input[name="decisions[0].facility.avatar"]').val() != '' && $('input[name="decisions[0].facility.avatar"]').val() != undefined && $('#avatarPreview1').html() != undefined) { $('#avatarPreview1').remove(); $('#avatarPreviewBox1').append('<img id="avatarPreview1" class="avatarPreview" src="'+$('input[name="decisions[0].facility.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[0].facility.avatar"]').val() != null && $('input[name="decisions[0].facility.avatar"]').val() == '' && $('input[name="decisions[0].facility.avatar"]').val() != undefined && $('#avatarPreview1').html() != undefined) { $('#avatarPreview1').remove(); }
			
			if ($('input[name="decisions[1].facility.avatar"]').val() != null && $('input[name="decisions[1].facility.avatar"]').val() != '' && $('input[name="decisions[1].facility.avatar"]').val() != undefined && $('#avatarPreview2').html() == undefined) { $('#avatarPreviewBox2').append('<img id="avatarPreview2" class="avatarPreview" src="'+$('input[name="decisions[1].facility.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[1].facility.avatar"]').val() != null && $('input[name="decisions[1].facility.avatar"]').val() != '' && $('input[name="decisions[1].facility.avatar"]').val() != undefined && $('#avatarPreview2').html() != undefined) { $('#avatarPreview2').remove(); $('#avatarPreviewBox2').append('<img id="avatarPreview2" class="avatarPreview" src="'+$('input[name="decisions[1].facility.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[1].facility.avatar"]').val() != null && $('input[name="decisions[1].facility.avatar"]').val() == '' && $('input[name="decisions[1].facility.avatar"]').val() != undefined && $('#avatarPreview2').html() != undefined) { $('#avatarPreview2').remove(); }
			
			if ($('input[name="decisions[2].facility.avatar"]').val() != null && $('input[name="decisions[2].facility.avatar"]').val() != '' && $('input[name="decisions[2].facility.avatar"]').val() != undefined && $('#avatarPreview3').html() == undefined) { $('#avatarPreviewBox3').append('<img id="avatarPreview3" class="avatarPreview" src="'+$('input[name="decisions[2].facility.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[2].facility.avatar"]').val() != null && $('input[name="decisions[2].facility.avatar"]').val() != '' && $('input[name="decisions[2].facility.avatar"]').val() != undefined && $('#avatarPreview3').html() != undefined) { $('#avatarPreview3').remove(); $('#avatarPreviewBox3').append('<img id="avatarPreview3" class="avatarPreview" src="'+$('input[name="decisions[2].facility.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[2].facility.avatar"]').val() != null && $('input[name="decisions[2].facility.avatar"]').val() == '' && $('input[name="decisions[2].facility.avatar"]').val() != undefined && $('#avatarPreview3').html() != undefined) { $('#avatarPreview3').remove(); }
			
			if ($('input[name="decisions[3].facility.avatar"]').val() != null && $('input[name="decisions[3].facility.avatar"]').val() != '' && $('input[name="decisions[3].facility.avatar"]').val() != undefined && $('#avatarPreview4').html() == undefined) { $('#avatarPreviewBox4').append('<img id="avatarPreview4" class="avatarPreview" src="'+$('input[name="decisions[3].facility.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[3].facility.avatar"]').val() != null && $('input[name="decisions[3].facility.avatar"]').val() != '' && $('input[name="decisions[3].facility.avatar"]').val() != undefined && $('#avatarPreview4').html() != undefined) { $('#avatarPreview4').remove(); $('#avatarPreviewBox4').append('<img id="avatarPreview4" class="avatarPreview" src="'+$('input[name="decisions[3].facility.avatar"]').val()+'" alt="">'); }
			else if ($('input[name="decisions[3].facility.avatar"]').val() != null && $('input[name="decisions[3].facility.avatar"]').val() == '' && $('input[name="decisions[3].facility.avatar"]').val() != undefined && $('#avatarPreview4').html() != undefined) { $('#avatarPreview4').remove(); }
		ticketCheckerpic();
	}, 1500)
}
}