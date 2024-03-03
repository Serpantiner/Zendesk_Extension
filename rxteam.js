var $ = window.jQuery;

var greetRxList;
var fullCalcValueSumRX, origCalculatedSum, altMedSavedSum;
var oringCalcSum0, oringCalcSum1, oringCalcSum2, oringCalcSum3, oringCalcSum4, oringCalcSum5, oringCalcSum6, oringCalcSum7, oringCalcSumAlt0, oringCalcSumAlt1, oringCalcSumAlt2, oringCalcSumAlt3, oringCalcSumAlt4, oringCalcSumAlt5, oringCalcSumAlt6, oringCalcSumAlt7;


var greetNumba0r0 = '<option value=" ">✄—————Updated Greetings———————</option>';
var greetNumba0r1 = '<option value=" ">✄—————Original Greetings——————</</option>';

//1, Insurance offers the best savings (price checked with the insurance)
var greetRxNumba1 = '<option value="Hello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nGood news! Your Insurance Card offers the best price.\n\nI have checked all available saving options for DRUGNAME. The price at the PHARMACYNAME pharmacy starts at $XX with a savings coupon. Therefore, you can get it at the lowest cost of $XX using your insurance card at any in-network pharmacy of your choice. This amount will also be contributed to your deductible.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">1, Insurance offers the best savings (price checked with the insurance)</option>';
//2, Coupon - preferred pharmacy (price checked with the insurance)
var greetRxNumba2 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nI appreciate your request and am happy to have your results ready!\n\nI have checked all available saving options and verified that the cost for DRUGNAME with your insurance card would be $XX. A savings coupon would allow you to get it for $XX and save $XX. Your preferred pharmacy offers the best price for DRUGNAME. Please note that if the coupon is used, you do not utilize your insurance card and the spent amount would not be contributed towards your deductible. Tap on the “Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">2, Coupon - preferred pharmacy (price checked with the insurance)</option>';
//18, Preventive medication (checked with the insurance)
var greetRxNumba3 = '<option value="Preventive medication\n\nHello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nDRUGNAME is listed as a preventative medication and it is fully covered by your insurance. You can use any in-network pharmacy of your choice. \n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">18, Preventive medication (checked with the insurance)</option>';
//19, Preventive medication (the insurance does not disclose info)
var greetRxNumba4 = '<option value="Preventive medication\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\nDRUGNAME is listed as a preventative medication and may be fully covered by your insurance. Please provide your insurance card to the pharmacist to check it for you. Otherwise, you may use a savings coupon attached below to lower your out-of-pocket expenses. Tap on the “Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">19, Preventive medication (the insurance does not disclose info)</option>';
//4, Coupon - preferred pharmacy (High Volume - saving from MyPrime)
var greetRxNumba5 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nI have checked all available saving options for DRUGNAME and, according to my research, a coupon would allow you to get it for $XX and save $XX. Please note that if the coupon is used, you do not utilize your insurance card and the spent amount would not be contributed towards your deductible. Tap on the “Coupon” Tip below for the details.\nAs you have a High Deductible Health Plan, you are responsible for the full cost of the medication until your deductible is met and your insurance plan may offer better savings for an out-of-pocket price. To verify it, simply provide your insurance card at the local pharmacy of your choice.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">4, Coupon - preferred pharmacy (High Volume - saving from MyPrime)</option>';
//28, Additional - Generic alternative available
var greetRxNumba6 = '<option value="You can save $XX per month\n\nHello ,\nI appreciate your request and am happy to have your results ready!\n\nAccording to my research, GENERIC_DRUGNAME is an alternative medication for BRAND_DRUGNAME. You can see the savings for both options below.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">28, Additional - Generic alternative available</option>';
//5, Coupon - non-preferred pharmacy (No Price provided - saving from MyPrime
var greetRxNumba7 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\nI have checked all available saving options for DRUGNAME and, according to our research, the price with a savings coupon at the PHARMACYNAME pharmacy would be $XX and your preferred PHARMACYNAME pharmacy offers a coupon for $XX. If the coupon is used, you do not utilize your insurance card and the spent amount would not be contributed towards your deductible. Tap on the “Coupon” Tip below for the details.\nPlease be advised that your insurance carrier does not provide the pricing information to third parties. To verify the exact cost of the medication with your insurance card, simply provide it at the local pharmacy of your choice.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">5, Coupon - non-preferred pharmacy (No Price provided - saving from MyPrime</option>';
//6, Coupon - Plan is not active yet and we have no info
var greetRxNumba8 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\nAccording to the information I received from your prescription insurance carrier, your plan effective date is MONTH 1st, 2023. The price for generic medications with your insurance card will be approximately $XX. For now, I provide you with a coupon that can lower your out-of-pocket expenses if you need to refill your medications before your new plan becomes active. Tap on the “Coupon” Tip below for the details. Please let us know if you have any other active coverage or if there is anything else we could assist you with.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">6, Coupon - Plan is not active yet and we have no info</option>';
//3, Coupon - non-preferred pharmacy (price checked with the insurance)
var greetRxNumba9 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nI appreciate your request and am happy to have your results ready!\n\nI have checked all available saving options and verified that the cost for DRUGNAME with your insurance card would be $XX. The price with a savings coupon at the PHARMACYNAME pharmacy would be $XX and your preferred PHARMACYNAME pharmacy offers a coupon for $XX. Therefore, you would save more at PHARMACYNAME. Please note that if the coupon is used, you do not utilize your insurance card and the spent amount would not be contributed towards your deductible. Tap on the “Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">3, Coupon - non-preferred pharmacy (price checked with the insurance)</option>';
//7, Manufacturer coupon (price checked with the insurance)
var greetRxNumba10 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nI appreciate your request and am happy to have your results ready!\n\nI have checked all available saving options for DRUGNAME. The cost with your insurance would be $XX at any in-network pharmacy of your choice. You may use a coupon below together with your insurance card to get DRUGNAME for $XX and save $XX per month. The spent amount will also be contributed towards your deductible. Tap on the “Manufacturer Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">7, Manufacturer coupon (price checked with the insurance)</option>';
//8, Manufacturer coupon (No Price provided - saving from MyPrime)
var greetRxNumba11 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nI appreciate your request and am happy to have your results ready!\n\nI have checked all available saving options for DRUGNAME. You may use a coupon below together with your insurance card for additional savings of $XX per month. The spent amount will also be contributed towards your deductible. Tap on the “Manufacturer Coupon” Tip below for the details.\nPlease be advised that your insurance carrier does not provide the pricing information to third parties. To verify the exact cost of the medication with your insurance card, simply provide it at the local pharmacy of your choice.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">8, Manufacturer coupon (No Price provided - saving from MyPrime)</option>';
//9, Manufacturer coupon after PA (price verified with the insurance)
var greetRxNumba12 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nI appreciate your request and am happy to have your results ready!\n\nYour health insurance company requires a Prior Authorization in order to cover DRUGNAME. Ask your doctor to call (xxx) xxx-xxxx directly to request it. After Prior Authorization is approved you may expect to pay $XX with your insurance card. The saving coupon below can be used for additional savings of $XX after the Prior Authorization is approved. Tap on the “Manufacturer Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">9, Manufacturer coupon after PA (price verified with the insurance)</option>';
//10, Manufacturer coupon after PA (price unknown before PA)
var greetRxNumba13 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nI appreciate your request and am happy to have your results ready!\n\nYour health insurance company requires a Prior Authorization in order to cover DRUGNAME. Ask your doctor to call (xxx) xxx-xxxx directly to request it. The cost for DRUGNAME can be estimated only after Prior Authorization is approved. You may also use the coupon below for additional savings of $XX per month before or after Prior Authorization approval. Tap on the “Manufacturer Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">10, Manufacturer coupon after PA (price unknown before PA)</option>';
//11, Manufacturer coupon after ST (price verified with the insurance)
var greetRxNumba14 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\nYour insurance company requires that you go through the Step Therapy with less expensive medication first in order to have DRUGNAME covered. Ask your doctor to call (xxx) xxx-xxxx directly to get instructions on the process. After Step Therapy approval you may expect to pay $XX with your insurance card. The saving coupon below can be used for additional savings of $XX after the Step Therapy is approved. Tap on the “Manufacturer Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">11, Manufacturer coupon after ST (price verified with the insurance)</option>';
//12, Manufacturer coupon after ST (price unknown before ST)
var greetRxNumba15 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\nYour insurance company requires that you go through the Step Therapy with less expensive medication first in order to have DRUGNAME covered. Ask your doctor to call (xxx) xxx-xxxx directly to get instructions on the process. The cost for DRUGNAME can be estimated only after completing the process. You may also use the coupon below to get savings before or after the approval. Tap on the “Manufacturer Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">12, Manufacturer coupon after ST (price unknown before ST)</option>';
//15, Walmart / other pharmacy formulary (No Price provided - saving from MyP
var greetRxNumba16 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nI have checked all available saving options for DRUGNAME and, according to our research, you can get it at *Walmart/etc* pharmacy for $XX. The price at your preferred PHARMACYNAME pharmacy starts at $XX with a savings coupon.Please be advised that your insurance carrier does not provide the pricing information to third parties. To verify the exact cost of the medication with your insurance card, simply provide it at the local pharmacy of your choice.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">15, Walmart / other pharmacy formulary (No Price provided - saving from MyP</option>';
//20, Over-the-counter (OTC) drug (price checked with the insurance) 
var greetRxNumba17 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nI appreciate your request and am happy to have your results ready!\n\nI have checked all available saving options and verified that the cost for DRUGNAME with your insurance card is $XX and it will go towards your deductible.\nDRUGNAME is an over-the-counter medication. Such drugs can be sold directly to a consumer without a prescription from a healthcare professional. You can also purchase it at *put in the link for Amazon/other stores here* to save $XX.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">20, Over-the-counter (OTC) drug (price checked with the insurance)</option>';
//13, Walmart / other pharmacy formulary (price checked with the insurance)
var greetRxNumba18 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nI have checked all available saving options and verified that the cost for DRUGNAME with your insurance card would be $XX and it would go towards your deductible. The price at your preferred PHARMACYNAME pharmacy starts at $XX with a savings coupon. Therefore, it would be cheaper to get it at *Walmart/etc* pharmacy for $XX.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">13, Walmart / other pharmacy formulary (price checked with the insurance)</option>';
//14, Walmart / other pharmacy formulary (High Volume - saving from MyPrime)
var greetRxNumba19 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nI have checked all available saving options for DRUGNAME and, according to our research, you can get it at PHARMACYNAME pharmacy for $XX. The price at your preferred PHARMACYNAMEPREF pharmacy starts at $XX with a savings coupon.As you have a High Deductible Health Plan, you are responsible for the full cost of the medication until your deductible is met and your insurance plan may offer better savings for an out-of-pocket price. To verify it, simply provide your insurance card at the local pharmacy of your choice.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">14, Walmart / other pharmacy formulary (High Volume - saving from MyPrime)</option>';
//16, PA required (price checked with the insurance) 
var greetRxNumba20 = '<option value="Hello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nYour Insurance Card offers the best price.\n\nYour insurance company requires a Prior Authorization in order to cover DRUGNAME. Ask your doctor to call (xxx) xxx-xxxx directly to request it. After Prior Authorization is approved you may expect to pay ~$XX with your insurance card at any in-network pharmacy of your choice. This amount will also be contributed to your deductible. Without Prior Authorization, the price at the PREF_OR_NEAREST_PHARMACY pharmacy starts at $XX with a savings coupon. Tap on the “Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">16, PA required (price checked with the insurance)</option>';
//17, PA required (No Price provided - saving from MyPrime)
var greetRxNumba21 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\nYour insurance company requires a Prior Authorization in order to cover DRUGNAME. Ask your doctor to call (xxx) xxx-xxxx directly to request it. The cost for DRUGNAME can be estimated only after PA is approved. You may use the coupon below to get savings without the PA process. Please note that if the coupon is used, you do not utilize your insurance card and the spent amount would not be contributed towards your deductible. Tap on the “Coupon” Tip below for the details.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">17, PA required (No Price provided - saving from MyPrime)</option>';
//21, Over-the-counter (OTC) drug (No Price provided - saving from MyPrime)
var greetRxNumba22 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\nDRUGNAME is an over-the-counter medication. Such drugs can be sold directly to a consumer without a prescription from a healthcare professional. You can also purchase it for $XX at *put in the link for Amazon/other stores here* to save $XX. Please be advised that your insurance carrier does not provide the pricing information to third parties. To verify the exact cost of the medication with your insurance card, simply provide it at the local pharmacy of your choice.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">21, Over-the-counter (OTC) drug (No Price provided - saving from MyPrime)</option>';
//22, Over-the-counter (OTC) drug (High volume - saving from MyPrime)
var greetRxNumba23 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nDRUGNAME is an over-the-counter medication. Such drugs can be sold directly to a consumer without a prescription from a healthcare professional. You can also purchase it for $XX at *put in the link for Amazon/other stores here* to save $XX. As you have a High Deductible Health Plan, you are responsible for the full cost of the medication until your deductible is met and your insurance plan may offer better savings for an out-of-pocket price. To verify it, simply provide your insurance card at the local pharmacy of your choice.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">22, Over-the-counter (OTC) drug (High volume - saving from MyPrime)</option>';
//23, Over-the-counter (OTC) drug (Non-formulary - saving from the retail pri
var greetRxNumba24 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nDRUGNAME is an over-the-counter medication. Such drugs are sold directly to a consumer without a prescription from a healthcare professional. You can also purchase it for $XX at *put in the link for Amazon/other stores here* to save $XX from the average retail price. \n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">23, Over-the-counter (OTC) drug (Non-formulary - saving from the retail pri</option>';
//24, Compound medication
var greetRxNumba25 = '<option value="Your Insurance Card offers the best price / You can save $XX per 30-day supply/90-day supply\n\nHello ,\nIt’s been a Joy to assist you with your request. I have your results for you!\n\nDRUGNAME is a compound medication. Such drugs are specially mixed prescription medications used to treat complex, chronic conditions. They often require special handling and administration. You can get it at the lowest cost using your insurance card at your local in-network compound pharmacy, which can be reached at (xxx) xxx-xxxx. *add Manufacturer coupon greeting if needed* \n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">24, Compound medication</option>';
//25, Specialty medication
var greetRxNumba26 = '<option value="Your Insurance Card offers the best price / You can save $XX per 30-day supply/90-day supply\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\nSpecialty drugs are the high-cost prescription medications used to treat complex, chronic conditions. They often require special handling and administration. You can get it at the lowest cost using your insurance card at your local in-network specialty pharmacy, which can be reached at (xxx) xxx-xxxx. *add Manufacturer coupon greeting if needed*\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">25, Specialty medication</option>';
//26, Additional - Excluded/Not covered 
var greetRxNumba27 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\nI have verified that DRUGNAME is an excluded medication and it is not covered by your insurance plan. Your provider may submit a Prior authorization to your insurance carrier for review at (XXX)XXX-XXXX. In case the PA is approved, your insurance will determine the coverage level for DRUGNAME. The cheapest option we were able to find as of now - *add the correct Coupon/Walmart retail greeting*.\n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">26, Additional - Excluded/Not covered </option>';
//27, Additional - Cost Plus Drug option
var greetRxNumba28 = '<option value="You can save $XX per 30-day supply/90-day supply\n\nHello ,\nThank you for entrusting HealthJoy with your healthcare needs!\n\n*Add the needed Coupon header first* DRUGNAME is also available at Cost Plus Drug online pharmacy at the lowest price of $XX. You would need to complete the free sign-up process to place an order. \n\nWe are here for you anytime - feel free to reach out if you have any questions or concerns!\n\nI value your feedback! Please rate your experience down below.\n\nWishing you all the best,\nHCC\nHealthcare Concierge at HealthJoy">27, Additional - Cost Plus Drug option</option>';
//General greeting (aka provider, same as original)
var greetRxNumba29 = '<option value="Hello ,\nIt is a Joy to make your healthcare experience greatly simplified!\nI completed a search for the best possible savings for [medication(s)] for you near the [XXXXX] zip code and reached out to the [insurance/pharmacy/information on file] directly to ensure the information is accurate.\n\nPlease take a look at the information I have gathered, and let us know if you need anything else at all - we are here to help! \nAlso, please note, that we are not your direct insurance carrier or PBM and only advocating for you and operation information from your employer.\nI value your feedback and want to hear from you. Please rate your experience below to let me know how I am doing.\n\nWarmest wishes,\nNAME\nHealthcare Concierge at HealthJoy">General greeting (aka provider, same as original)</option>';


var greetRxArray = [greetRxNumba1, greetRxNumba2, greetRxNumba3, greetRxNumba4, greetRxNumba5, greetRxNumba6, greetRxNumba7, greetRxNumba8, greetRxNumba9, greetRxNumba10, greetRxNumba11, greetRxNumba12, greetRxNumba13, greetRxNumba14, greetRxNumba15, greetRxNumba16, greetRxNumba17, greetRxNumba18, greetRxNumba19, greetRxNumba20, greetRxNumba21, greetRxNumba22, greetRxNumba23, greetRxNumba24, greetRxNumba25, greetRxNumba26, greetRxNumba27, greetRxNumba28, greetRxNumba29];

$(document).ready(function(){
	baseDesignInjectorRX();
    pageInitRx();
});

function pageInitRx() {
	setTimeout( function() {
			if ($('h3:contains("RX card")').text() == "RX card" || $('h3[class="decision-form_block-title"]').text() == "AUTODELIVERY::GROUPS:Rx SAVINGSHSA tip" || $('h3[class="decision-form_block-title"]').text() == "AUTODELIVERY::GROUPS:Rx SAVINGS" ) {
                console.log("Load completed - RX Savings Script");
				previewAndGreetingRx();
				priceVerifyInit();
            }
            else {
				//console.log("Waiting for page to load...");
				pageInitRx();
            }
	}, 250)
}

function previewAndGreetingRx() {
	//Preview
	if (movePreviewCardStatus == "1") {
	$('button:contains(" Preview Card")').attr("id", "previewCard");
	$("#previewCard").appendTo($('h1[class="workspace-disconnected-title ng-hide"]').parent());
	}
	//CReate verification of ticket errors
	var divVerificatorOldDC = '<span id="topWarnings" hidden><span class="hasTT">&nbsp;⚠️<table><tr> <td><span id="warningTitle" hidden>Card Title </span></td></tr><tr> <td><span id="warningGroupUT" hidden>Group UT unchecked:</span></td> <td><span id="uncheckedUT1" hidden>1</span></td> <td><span id="uncheckedUT2" hidden>2</span></td> <td><span id="uncheckedUT3" hidden>3</span></td> <td><span id="uncheckedUT4" hidden>4</span></td></tr><tr> <td><span id="warningTreatNeeds" hidden>Treats mm needs unchecked:</span></td> <td><span id="uncheckedMMNeeds1" hidden>1</span></td> <td><span id="uncheckedMMNeeds2" hidden>2</span></td> <td><span id="uncheckedMMNeeds3" hidden>3</span></td> <td><span id="uncheckedMMNeeds4" hidden>4</span></td></tr></table></span></span>';
	//$('<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div> <br> <p id="drag1" draggable="true" ondragstart="drag(event)">This is a draggable paragraph. Drag this element into the rectangle.</p>').appendTo($('h1[class="workspace-disconnected-title ng-hide"]').parent());
	
	//Greeting templates
	greetRxList = $('textarea[category="RX header bar"]').parent().next().children().children();
	greetRxList.append(greetNumba0r0);
	for (let i = 0; i <= 29; i++) {
			greetRxList.append(greetRxArray[i]);
        }
	$('textarea[category="RX header bar"]').parent().next().children().children().append(greetNumba0r1);
	
	//Greetings redesign
	/*
	$('h3[class="decision-form_block-title"]:contains("HSA tip")').parent().prependTo($('label[for="header_bar"]').parent());
	$('h3[class="decision-form_block-title"]:contains("HSA tip")').parent().removeAttr("class");
	$('span[class="ladda-label"]:contains("Confirm Decision")').parent().parent().parent().appendTo($('label[for="summary"]').parent());
	
	$('label[for="header_bar"]').parent().attr("class","col-md-5");
	$('label[for="header"]').parent().prependTo($('label[for="header_bar"]').parent());
	$('label[for="header"]').parent().removeAttr("class");
	$('label[for="header_bar"]').hide();
	*/
	//$('label[for="summary"]').parent().appendTo($('label[for="header"]').parent().parent().parent());
	//$('label[for="summary"]').parent().attr("class","col-md-3 summary-header");
	//$('label[for="summary"]').parent().append('<br><br>');
	
	$('h4[class="summary"]:contains("Summary")').parent().append('<div class="col-md-12"><table id="tableRxSummary" class="tableRxSummaryCSS"><tbody id="tbodyRxSummary"> <tr style="border-bottom: solid 1px #000000;"> <td id="totalSavedRxTable" colspan="12" style="font-weight: bold; border-bottom: solid 1px #000000; outline: 1px solid darkblue; font-size: 2.2rem;">Total Savings: </td> </tr> <tr> <td>Name</td> <td>Dose</td> <td>Period</td> <td>$PPR</td> <td>$BCP</td> <td>$Savings</td> <td class="secondMedSeparator">Alt-Name</td> <td>Note</td> <td>Dose</td> <td>Period</td> <td>$BCP</td> <td>$Savings</td> </tr> <tr> <td id="medName0RxTable"></td> <td id="medDose0RxTable"></td> <td id="medPeriod0RxTable"></td> <td id="medPPR0RxTable"></td> <td id="medBCP0RxTable"></td> <td id="medSaved0RxTable"></td> <td class="secondMedSeparator" id="altmedName0RxTable"></td> <td id="altmedNote0RxTable"></td> <td id="altmedDose0RxTable"></td> <td id="altmedPeriod0RxTable"></td> <td id="altmedBCP0RxTable"></td> <td id="altmedSaved0RxTable"></td> </tr> <tr> <td id="medName1RxTable"></td> <td id="medDose1RxTable"></td> <td id="medPeriod1RxTable"></td> <td id="medPPR1RxTable"></td> <td id="medBCP1RxTable"></td> <td id="medSaved1RxTable"></td> <td class="secondMedSeparator" id="altmedName1RxTable"></td> <td id="altmedNote1RxTable"></td> <td id="altmedDose1RxTable"></td> <td id="altmedPeriod1RxTable"></td> <td id="altmedBCP1RxTable"></td> <td id="altmedSaved1RxTable"></td> </tr> <tr> <td id="medName2RxTable"></td> <td id="medDose2RxTable"></td> <td id="medPeriod2RxTable"></td> <td id="medPPR2RxTable"></td> <td id="medBCP2RxTable"></td> <td id="medSaved2RxTable"></td> <td class="secondMedSeparator" id="altmedName2RxTable"></td> <td id="altmedNote2RxTable"></td> <td id="altmedDose2RxTable"></td> <td id="altmedPeriod2RxTable"></td> <td id="altmedBCP2RxTable"></td> <td id="altmedSaved2RxTable"></td> </tr> <tr> <td id="medName3RxTable"></td> <td id="medDose3RxTable"></td> <td id="medPeriod3RxTable"></td> <td id="medPPR3RxTable"></td> <td id="medBCP3RxTable"></td> <td id="medSaved3RxTable"></td> <td class="secondMedSeparator" id="altmedName3RxTable"></td> <td id="altmedNote3RxTable"></td> <td id="altmedDose3RxTable"></td> <td id="altmedPeriod3RxTable"></td> <td id="altmedBCP3RxTable"></td> <td id="altmedSaved3RxTable"></td> </tr> <tr> <td id="medName4RxTable"></td> <td id="medDose4RxTable"></td> <td id="medPeriod4RxTable"></td> <td id="medPPR4RxTable"></td> <td id="medBCP4RxTable"></td> <td id="medSaved4RxTable"></td> <td class="secondMedSeparator" id="altmedName4RxTable"></td> <td id="altmedNote4RxTable"></td> <td id="altmedDose4RxTable"></td> <td id="altmedPeriod4RxTable"></td> <td id="altmedBCP4RxTable"></td> <td id="altmedSaved4RxTable"></td> </tr></tbody></table></div>');
	
	/*
	$('<img id="img1" src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpaomedia%2Fsmall-n-flat%2F512%2Fcat-icon.png&f=1" width="25px" height="25px" alt="emote1" title="test1name" class="emoteImage"><img id="img2" src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fes.seaicons.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fsign-check-icon.png&f=1" width="25px" height="25px" alt="emote2" title="emote2" class="emoteImage">').appendTo($('h1[class="workspace-disconnected-title ng-hide"]').parent());
	
	document.querySelectorAll('.emoteImage').forEach((emoteImage) => {
		  emoteImage.addEventListener('dragstart', (event) => {
				event.dataTransfer.setData('text', emoteImage.alt);
				event.effectAllowed = "copy";
		  });
	});
	*/
	
	$("#previewCard").append(divVerificatorOldDC);
	
	dataSumVerifyInit();
	
	spawnMedBrowserRx();
	
	chrome.storage.local.get(['rxStatusOfWyswsave'], function(result) {
		if (result.rxStatusOfWyswsave == "3") { pasteWyswigRx(); pasteWyswigRxAlt(); 
			$("#wyswRxSet1").attr("class", "wyswRxSet");
			$("#wyswRxSet2").attr("class", "wyswRxSet");
			$("#wyswRxSet3").attr("class", "wyswRxSetActive");
		}
		else if (result.rxStatusOfWyswsave == "2") { spawnWyswigRefresherRx(); 
			$("#wyswRxSet1").attr("class", "wyswRxSet");
			$("#wyswRxSet2").attr("class", "wyswRxSetActive");
			$("#wyswRxSet3").attr("class", "wyswRxSet");
		}
		else if (result.rxStatusOfWyswsave == "1") { console.log("Skipping WYSIWYG - HCC Opt Out"); 
			$("#wyswRxSet1").attr("class", "wyswRxSetActive");
			$("#wyswRxSet2").attr("class", "wyswRxSet");
			$("#wyswRxSet3").attr("class", "wyswRxSet");
		}
		else {  
			spawnWyswigRefresherRx(); 
			$("#wyswRxSet1").attr("class", "wyswRxSet");
			$("#wyswRxSet2").attr("class", "wyswRxSetActive");
			$("#wyswRxSet3").attr("class", "wyswRxSet");
		};
	});
	
	//tempInjectPanelRx();
	//fillSidePanelRx();
}

function pasteWyswigRx() {
	setTimeout( function() {
		for (let i = 0; i < 5; i++) {
			for (let u = 0; u < 6; u++) {
				
				let omedbody = $('textarea[name="decisions[' + i + '].original_medication.tips[' + u + '].body"]');
				let omedtype = $('select[name="decisions[' + i + '].original_medication.tips[' + u + '].type"]');
				let omedtitle = $('input[name="decisions[' + i + '].original_medication.tips[' + u + '].title"]');
				
				
	if ($('#wysw' + i + 'Rx' + u + 'Editor').html() == undefined) {omedbody.parent().parent().parent().parent().append('<div id="wysw' + i + 'Rx' + u + 'Editor"></div>'); }
	
	if ($('#bo' + i + 'dy' + u + 'tiprx').html() == undefined) {
	omedbody.attr("id",'bo' + i + 'dy' + u + 'tiprx');
	omedbody.parent().parent().parent().attr("id",'body' + i + 'waste' + u + 'tiprx');}
	
	if ($('#realwysw' + i + 'Ed' + u + 'tiprx').html() == undefined) {
	$('#wysw' + i + 'Rx' + u + 'Editor').summernote({
		callbacks: {
		onChange: function(contents) {
			let almostCleanContents = contents.replaceAll('<p>', "");
			let fullyCleanContents = almostCleanContents.replaceAll('</p>', "");
			$('#img' + i + 'left' + u + 'Rx').attr("alt", fullyCleanContents);
		}},
		toolbar: [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		//['fontsize', ['fontsize']],
		['color', ['color']],
		//['para', ['ul', 'ol', 'paragraph']],
		['insert', ['link', 'unlink']],
		['view', ['codeview']],
		]
	});
	
	$('#wysw' + i + 'Rx' + u + 'Editor').next().attr("id",'realwysw' + i + 'Ed' + u + 'tiprx');
	document.querySelectorAll('.textDragImage').forEach((textDragImage) => {
		  textDragImage.addEventListener('dragstart', (event) => {
				event.dataTransfer.setData('text', textDragImage.alt);
				event.effectAllowed = "copy";
		  });
	});
		if (document.getElementById('bo' + i + 'dy' + u + 'tiprx') != null && $('#bo' + i + 'dy' + u + 'tiprx').attr("listeningrxw") != "yes") {
			$('#bo' + i + 'dy' + u + 'tiprx').attr("listeningrxw", "yes");
			if ($('#bo' + i + 'dy' + u + 'tiprx').text() != "") { $('#wysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#bo' + i + 'dy' + u + 'tiprx').text()); }
			document.getElementById('bo' + i + 'dy' + u + 'tiprx').addEventListener("change", function(event) {
			$('#wysw' + i + 'Rx' + u + 'Editor').summernote('reset');
			$('#wysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#bo' + i + 'dy' + u + 'tiprx').text());
			});
		}
	}
	
	if ($('#wrap' + i + 'per' + u + 'tiprx').html() == undefined) {omedtype.parent().parent().parent().parent().attr("id",'wrap' + i + 'per' + u + 'tiprx');}
	
	if ($('#sele' + i + 'ct' + u + 'tiprx').html() == undefined) {
	omedtype.parent().parent().attr("id",'sele' + i + 'ct' + u + 'tiprx');
	omedtype.parent().parent().parent().removeAttr("class");}
	
	if ($('#tit' + i + 'le' + u + 'tiprx').html() == undefined) {
	omedtitle.parent().attr("id",'tit' + i + 'le' + u + 'tiprx');
	omedtitle.parent().parent().removeAttr("class");}
	
	
	if ($('#remo' + i + 'ver' + u + 'tiprx').html() == undefined) {
	omedbody.parent().parent().parent().next().children().children().attr("id",'remo' + i + 'ver' + u + 'tiprx');}
	
	if ($('#remove' + i + 'Rx' + u + 'TipTable').html() == undefined) {
	$('#wrap' + i + 'per' + u + 'tiprx').append('<table><thead> <tr> <th colspan="2" id="remove' + i + 'Rx' + u + 'TipTable"></th> </tr></thead><tbody> <tr> <td id="left' + i + 'Rx' + u + 'TipTableP1"></td> <td id="right' + i + 'Rx' + u + 'TipTable" rowspan="2"></td> </tr> <tr> <td id="left' + i + 'Rx' + u + 'TipTableP2"></td> </tr></tbody></table>');}
	
	if ($('#body' + i + 'waste' + u + 'tiprx').html() != undefined) {
	$('#sele' + i + 'ct' + u + 'tiprx').appendTo($('#left' + i + 'Rx' + u + 'TipTableP1'));
	$('#tit' + i + 'le' + u + 'tiprx').appendTo($('#left' + i + 'Rx' + u + 'TipTableP1'));
	$('#bo' + i + 'dy' + u + 'tiprx').appendTo($('#left' + i + 'Rx' + u + 'TipTableP2'));
	$('#realwysw' + i + 'Ed' + u + 'tiprx').appendTo($('#right' + i + 'Rx' + u + 'TipTable'));
	$('#remo' + i + 'ver' + u + 'tiprx').appendTo($('#remove' + i + 'Rx' + u + 'TipTable'));
	$('#body' + i + 'waste' + u + 'tiprx').remove();}
	
	if ($('#img' + i + 'left' + u + 'Rx').html() == undefined) {
	$('#realwysw' + i + 'Ed' + u + 'tiprx').append('<img id="img' + i + 'left' + u + 'Rx" src="https://cdn.healthjoy.com/public/application/left-arrow.256x256_1.png" width="25px" height="25px" alt="Whoopsie! Seems like you didn\'t change anything in the editor and this arrow contains deffault text. Try to make changes in the editor first." title="Drage this arrow on top of text field to paste content from editor" class="textDragImage"> <span style="color: #787878;"><- Drage this arrow on top of text field to paste  </span><img hidden id="img' + i + 'right' + u + 'Rx" src="https://cdn.healthjoy.com/public/application/right-arrow.256x256.png" width="25px" height="25px" alt="rightarrows" title="Currently doing nothing" class="textDragImage"><a style="cursor: pointer;" id="refresh' + i + 'editor' + u + 'Rx">Refresh Editor</a>'); 
	$('#img' + i + 'left' + u + 'Rx').attr("alt", $('#bo' + i + 'dy' + u + 'tiprx').text());
	
	if (document.getElementById('refresh' + i + 'editor' + u + 'Rx') != null && $('#refresh' + i + 'editor' + u + 'Rx').attr("listeningrefreshrxw") != "yes") {
		$('#refresh' + i + 'editor' + u + 'Rx').attr("listeningrefreshrxw", "yes");
	document.getElementById('refresh' + i + 'editor' + u + 'Rx').addEventListener("click", function(event) {
			$('#wysw' + i + 'Rx' + u + 'Editor').summernote('reset');
			$('#wysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#bo' + i + 'dy' + u + 'tiprx').text());
		});
	}
		
	}
	
			}
        }
		
	pasteWyswigRx();
	}, 1500)
}

function pasteWyswigRxAlt() {
	setTimeout( function() {
		for (let i = 0; i < 5; i++) {
			for (let u = 0; u < 6; u++) {
				
				let smedbody = $('textarea[name="decisions[' + i + '].similar_medication.tips[' + u + '].body"]');
				let smedtype = $('select[name="decisions[' + i + '].similar_medication.tips[' + u + '].type"]');
				let smedtitle = $('input[name="decisions[' + i + '].similar_medication.tips[' + u + '].title"]');
				
	if ($('#altwysw' + i + 'Rx' + u + 'Editor').html() == undefined) {smedbody.parent().parent().parent().parent().append('<div id="altwysw' + i + 'Rx' + u + 'Editor"></div>'); }
	
	if ($('#altbo' + i + 'dy' + u + 'tiprx').html() == undefined) {
	smedbody.attr("id",'altbo' + i + 'dy' + u + 'tiprx');
	smedbody.parent().parent().parent().attr("id",'altbody' + i + 'waste' + u + 'tiprx');}
	
	if ($('#altrealwysw' + i + 'Ed' + u + 'tiprx').html() == undefined) {
	$('#altwysw' + i + 'Rx' + u + 'Editor').summernote({
		callbacks: {
		onChange: function(contents) {
			let almostCleanContents = contents.replaceAll('<p>', "");
			let fullyCleanContents = almostCleanContents.replaceAll('</p>', "");
			$('#altimg' + i + 'left' + u + 'Rx').attr("alt", fullyCleanContents);
		}},
		toolbar: [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		//['fontsize', ['fontsize']],
		['color', ['color']],
		//['para', ['ul', 'ol', 'paragraph']],
		['insert', ['link', 'unlink']],
		['view', ['codeview']],
		]
	});
	
	$('#altwysw' + i + 'Rx' + u + 'Editor').next().attr("id",'altrealwysw' + i + 'Ed' + u + 'tiprx');
	document.querySelectorAll('.textDragImage').forEach((textDragImage) => {
		  textDragImage.addEventListener('dragstart', (event) => {
				event.dataTransfer.setData('text', textDragImage.alt);
				event.effectAllowed = "copy";
		  });
	});
		if (document.getElementById('altbo' + i + 'dy' + u + 'tiprx') != null && $('#altbo' + i + 'dy' + u + 'tiprx').attr("listeningrxw") != "yes") {
			$('#altbo' + i + 'dy' + u + 'tiprx').attr("listeningrxw", "yes");
			if ($('#altbo' + i + 'dy' + u + 'tiprx').text() != "") { $('#altwysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#altbo' + i + 'dy' + u + 'tiprx').text()); }
			document.getElementById('altbo' + i + 'dy' + u + 'tiprx').addEventListener("change", function(event) {
			$('#altwysw' + i + 'Rx' + u + 'Editor').summernote('reset');
			$('#altwysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#altbo' + i + 'dy' + u + 'tiprx').text());
		});
		}
	}
	
	if ($('#altwrap' + i + 'per' + u + 'tiprx').html() == undefined) {smedtype.parent().parent().parent().parent().attr("id",'altwrap' + i + 'per' + u + 'tiprx');}
	
	if ($('#altsele' + i + 'ct' + u + 'tiprx').html() == undefined) {
	smedtype.parent().parent().attr("id",'altsele' + i + 'ct' + u + 'tiprx');
	smedtype.parent().parent().parent().removeAttr("class");}
	
	if ($('#alttit' + i + 'le' + u + 'tiprx').html() == undefined) {
	smedtitle.parent().attr("id",'alttit' + i + 'le' + u + 'tiprx');
	smedtitle.parent().parent().removeAttr("class");}
	
	
	if ($('#altremo' + i + 'ver' + u + 'tiprx').html() == undefined) {
	smedbody.parent().parent().parent().next().children().children().attr("id",'altremo' + i + 'ver' + u + 'tiprx');}
	
	if ($('#altremove' + i + 'Rx' + u + 'TipTable').html() == undefined) {
	$('#altwrap' + i + 'per' + u + 'tiprx').append('<table><thead> <tr> <th colspan="2" id="altremove' + i + 'Rx' + u + 'TipTable"></th> </tr></thead><tbody> <tr> <td id="altleft' + i + 'Rx' + u + 'TipTableP1"></td> <td id="altright' + i + 'Rx' + u + 'TipTable" rowspan="2"></td> </tr> <tr> <td id="altleft' + i + 'Rx' + u + 'TipTableP2"></td> </tr></tbody></table>');}
	
	if ($('#altbody' + i + 'waste' + u + 'tiprx').html() != undefined) {
	$('#altsele' + i + 'ct' + u + 'tiprx').appendTo($('#altleft' + i + 'Rx' + u + 'TipTableP1'));
	$('#alttit' + i + 'le' + u + 'tiprx').appendTo($('#altleft' + i + 'Rx' + u + 'TipTableP1'));
	$('#altbo' + i + 'dy' + u + 'tiprx').appendTo($('#altleft' + i + 'Rx' + u + 'TipTableP2'));
	$('#altrealwysw' + i + 'Ed' + u + 'tiprx').appendTo($('#altright' + i + 'Rx' + u + 'TipTable'));
	$('#altremo' + i + 'ver' + u + 'tiprx').appendTo($('#altremove' + i + 'Rx' + u + 'TipTable'));
	$('#altbody' + i + 'waste' + u + 'tiprx').remove();}
	
	if ($('#altimg' + i + 'left' + u + 'Rx').html() == undefined) {
	$('#altrealwysw' + i + 'Ed' + u + 'tiprx').append('<img id="altimg' + i + 'left' + u + 'Rx" src="https://cdn.healthjoy.com/public/application/left-arrow.256x256_1.png" width="25px" height="25px" alt="Whoopsie! Seems like you didn\'t change anything in the editor and this arrow contains deffault text. Try to make changes in the editor first." title="Drage this arrow on top of text field to paste content from editor" class="textDragImage"> <span style="color: #787878;"><- Drage this arrow on top of text field to paste  </span><img hidden id="altimg' + i + 'right' + u + 'Rx" src="https://cdn.healthjoy.com/public/application/right-arrow.256x256.png" width="25px" height="25px" alt="rightarrows" title="Currently doing nothing" class="textDragImage"><a style="cursor: pointer;" id="altrefresh' + i + 'editor' + u + 'Rx">Refresh Editor</a>'); 
	$('#altimg' + i + 'left' + u + 'Rx').attr("alt", $('#altbo' + i + 'dy' + u + 'tiprx').text());
	
	if (document.getElementById('altrefresh' + i + 'editor' + u + 'Rx') != null && $('#altrefresh' + i + 'editor' + u + 'Rx').attr("listeningrefreshrxw") != "yes") {
		$('#altrefresh' + i + 'editor' + u + 'Rx').attr("listeningrefreshrxw", "yes");
	document.getElementById('altrefresh' + i + 'editor' + u + 'Rx').addEventListener("click", function(event) {
			$('#altwysw' + i + 'Rx' + u + 'Editor').summernote('reset');
			$('#altwysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#altbo' + i + 'dy' + u + 'tiprx').text());
		});
	}
	
	}
	
			}
        }
		
	pasteWyswigRxAlt();
	}, 2100)
}

var pimpochka;
function priceVerifyInit() {
	setTimeout( function() {
		for (let i = 0; i < 5; i++) {
			if ($('input[name="decisions[' + i + '].original_medication.original_price"]').val() != "") {$('input[name="decisions[' + i + '].original_medication.savings"]').attr("placeholder", "Savings: " + ($('input[name="decisions[' + i + '].original_medication.original_price"]').val() - $('input[name="decisions[' + i + '].original_medication.new_price"]').val())); $('input[name="decisions[' + i + '].original_medication.savings"]').attr("calcsum", ($('input[name="decisions[' + i + '].original_medication.original_price"]').val() - $('input[name="decisions[' + i + '].original_medication.new_price"]').val()));} else {$('input[name="decisions[' + i + '].original_medication.savings"]').attr("placeholder", "Savings: -"); $('input[name="decisions[' + i + '].original_medication.savings"]').attr("calcsum", "-");};
			
			if ($('input[name="decisions[' + i + '].original_medication.savings"]').attr("calcsum") != $('input[name="decisions[' + i + '].original_medication.savings"]').val()) { $('#medSaved' + i + 'RxTable').attr("class", "borderBlinkRx"); } else { $('#medSaved' + i + 'RxTable').removeAttr("class");}
			
			if ($('input[name="decisions[' + i + '].similar_medication.new_price"]').val() != "") {	$('input[name="decisions[' + i + '].similar_medication.savings"]').attr("placeholder", "Savings: " + ($('input[name="decisions[' + i + '].original_medication.new_price"]').val() - $('input[name="decisions[' + i + '].similar_medication.new_price"]').val()));	$('input[name="decisions[' + i + '].similar_medication.savings"]').attr("calcsum", ($('input[name="decisions[' + i + '].original_medication.new_price"]').val() - $('input[name="decisions[' + i + '].similar_medication.new_price"]').val()));} else {$('input[name="decisions[' + i + '].similar_medication.savings"]').attr("placeholder", "Savings: -"); $('input[name="decisions[' + i + '].similar_medication.savings"]').attr("calcsum", "-");};
			
			if ($('input[name="decisions[' + i + '].similar_medication.savings"]').attr("calcsum") != $('input[name="decisions[' + i + '].similar_medication.savings"]').val()) { $('#altmedSaved' + i + 'RxTable').attr("class", "borderBlinkRx"); } else { $('#altmedSaved' + i + 'RxTable').removeAttr("class");}
        }
			
			pimpochka = $('textarea[name="decisions[0].original_medication.tips[0].body"]').html();
			$("#img1").attr("alt", pimpochka);
		
	priceVerifyInit();
	}, 1000)
}

function dataSumVerifyInit() {
	setTimeout( function() {
		for (let i = 0; i < 5; i++) {
		$('#medName' + i + 'RxTable').html($('input[name="decisions[' + i + '].original_medication.name"]').val());
		$('#medDose' + i + 'RxTable').html($('input[name="decisions[' + i + '].original_medication.dose"]').val());
		$('#medPeriod' + i + 'RxTable').html($('select[name="decisions[' + i + '].original_medication.frequency"]').val());
		$('#medPPR' + i + 'RxTable').html($('input[name="decisions[' + i + '].original_medication.original_price"]').val());
		$('#medBCP' + i + 'RxTable').html($('input[name="decisions[' + i + '].original_medication.new_price"]').val());
		$('#medSaved' + i + 'RxTable').html($('input[name="decisions[' + i + '].original_medication.savings"]').val());
		
		$('#altmedName' + i + 'RxTable').html($('input[name="decisions[' + i + '].similar_medication.name"]').val());
		if ($('input[name="decisions[' + i + '].similar_medication.notes"]').val() != "" && $('input[name="decisions[' + i + '].similar_medication.notes"]').val() != undefined) { $('#altmedNote' + i + 'RxTable').html("+");}
		$('#altmedDose' + i + 'RxTable').html($('input[name="decisions[' + i + '].similar_medication.dose"]').val());
		$('#altmedPeriod' + i + 'RxTable').html($('select[name="decisions[' + i + '].similar_medication.frequency"]').val());
		$('#altmedBCP' + i + 'RxTable').html($('input[name="decisions[' + i + '].similar_medication.new_price"]').val());
		$('#altmedSaved' + i + 'RxTable').html($('input[name="decisions[' + i + '].similar_medication.savings"]').val());
		}
		
		
		if ($('input[name="decisions[0].original_medication.savings"]').val() != "-" && $('input[name="decisions[0].original_medication.savings"]').val() != "" && $('input[name="decisions[0].original_medication.savings"]').val() != undefined ) {oringCalcSum0 = $('input[name="decisions[0].original_medication.savings"]').val();} else {oringCalcSum0 = 0;}
		if ($('input[name="decisions[1].original_medication.savings"]').val() != "-" && $('input[name="decisions[1].original_medication.savings"]').val() != "" && $('input[name="decisions[1].original_medication.savings"]').val() != undefined ) {oringCalcSum1 = $('input[name="decisions[1].original_medication.savings"]').val();} else {oringCalcSum1 = 0;}
		if ($('input[name="decisions[2].original_medication.savings"]').val() != "-" && $('input[name="decisions[2].original_medication.savings"]').val() != "" && $('input[name="decisions[2].original_medication.savings"]').val() != undefined ) {oringCalcSum2 = $('input[name="decisions[2].original_medication.savings"]').val();} else {oringCalcSum2 = 0;}
		if ($('input[name="decisions[3].original_medication.savings"]').val() != "-" && $('input[name="decisions[3].original_medication.savings"]').val() != "" && $('input[name="decisions[3].original_medication.savings"]').val() != undefined ) {oringCalcSum3 = $('input[name="decisions[3].original_medication.savings"]').val();} else {oringCalcSum3 = 0;}
		if ($('input[name="decisions[4].original_medication.savings"]').val() != "-" && $('input[name="decisions[4].original_medication.savings"]').val() != "" && $('input[name="decisions[4].original_medication.savings"]').val() != undefined ) {oringCalcSum4 = $('input[name="decisions[4].original_medication.savings"]').val();} else {oringCalcSum4 = 0;}
		if ($('input[name="decisions[5].original_medication.savings"]').val() != "-" && $('input[name="decisions[5].original_medication.savings"]').val() != "" && $('input[name="decisions[5].original_medication.savings"]').val() != undefined ) {oringCalcSum5 = $('input[name="decisions[5].original_medication.savings"]').val();} else {oringCalcSum5 = 0;}
		if ($('input[name="decisions[6].original_medication.savings"]').val() != "-" && $('input[name="decisions[6].original_medication.savings"]').val() != "" && $('input[name="decisions[6].original_medication.savings"]').val() != undefined ) {oringCalcSum6 = $('input[name="decisions[6].original_medication.savings"]').val();} else {oringCalcSum6 = 0;}
		if ($('input[name="decisions[7].original_medication.savings"]').val() != "-" && $('input[name="decisions[7].original_medication.savings"]').val() != "" && $('input[name="decisions[7].original_medication.savings"]').val() != undefined ) {oringCalcSum7 = $('input[name="decisions[7].original_medication.savings"]').val();} else {oringCalcSum7 = 0;}
		if ($('input[name="decisions[0].similar_medication.savings"]').val() != "-" && $('input[name="decisions[0].similar_medication.savings"]').val() != "" && $('input[name="decisions[0].similar_medication.savings"]').val() != undefined ) {oringCalcSumAlt0 = $('input[name="decisions[0].similar_medication.savings"]').val();} else {oringCalcSumAlt0 = 0;}
		if ($('input[name="decisions[1].similar_medication.savings"]').val() != "-" && $('input[name="decisions[1].similar_medication.savings"]').val() != "" && $('input[name="decisions[1].similar_medication.savings"]').val() != undefined ) {oringCalcSumAlt1 = $('input[name="decisions[1].similar_medication.savings"]').val();} else {oringCalcSumAlt1 = 0;}
		if ($('input[name="decisions[2].similar_medication.savings"]').val() != "-" && $('input[name="decisions[2].similar_medication.savings"]').val() != "" && $('input[name="decisions[2].similar_medication.savings"]').val() != undefined ) {oringCalcSumAlt2 = $('input[name="decisions[2].similar_medication.savings"]').val();} else {oringCalcSumAlt2 = 0;}
		if ($('input[name="decisions[3].similar_medication.savings"]').val() != "-" && $('input[name="decisions[3].similar_medication.savings"]').val() != "" && $('input[name="decisions[3].similar_medication.savings"]').val() != undefined ) {oringCalcSumAlt3 = $('input[name="decisions[3].similar_medication.savings"]').val();} else {oringCalcSumAlt3 = 0;}
		if ($('input[name="decisions[4].similar_medication.savings"]').val() != "-" && $('input[name="decisions[4].similar_medication.savings"]').val() != "" && $('input[name="decisions[4].similar_medication.savings"]').val() != undefined ) {oringCalcSumAlt4 = $('input[name="decisions[4].similar_medication.savings"]').val();} else {oringCalcSumAlt4 = 0;}
		if ($('input[name="decisions[5].similar_medication.savings"]').val() != "-" && $('input[name="decisions[5].similar_medication.savings"]').val() != "" && $('input[name="decisions[5].similar_medication.savings"]').val() != undefined ) {oringCalcSumAlt5 = $('input[name="decisions[5].similar_medication.savings"]').val();} else {oringCalcSumAlt5 = 0;}
		if ($('input[name="decisions[6].similar_medication.savings"]').val() != "-" && $('input[name="decisions[6].similar_medication.savings"]').val() != "" && $('input[name="decisions[6].similar_medication.savings"]').val() != undefined ) {oringCalcSumAlt6 = $('input[name="decisions[6].similar_medication.savings"]').val();} else {oringCalcSumAlt6 = 0;}
		if ($('input[name="decisions[7].similar_medication.savings"]').val() != "-" && $('input[name="decisions[7].similar_medication.savings"]').val() != "" && $('input[name="decisions[7].similar_medication.savings"]').val() != undefined ) {oringCalcSumAlt7 = $('input[name="decisions[7].similar_medication.savings"]').val();} else {oringCalcSumAlt7 = 0;}
		
		origCalculatedSum = Number(oringCalcSum0)+Number(oringCalcSum1)+Number(oringCalcSum2)+Number(oringCalcSum3)+Number(oringCalcSum4)+Number(oringCalcSum5)+Number(oringCalcSum6)+Number(oringCalcSum7);
		
		altMedSavedSum = Number(oringCalcSumAlt0)+Number(oringCalcSumAlt1)+Number(oringCalcSumAlt2)+Number(oringCalcSumAlt3)+Number(oringCalcSumAlt4)+Number(oringCalcSumAlt5)+Number(oringCalcSumAlt6)+Number(oringCalcSumAlt7);
		
		fullCalcValueSumRX = Number(oringCalcSum0)+Number(oringCalcSum1)+Number(oringCalcSum2)+Number(oringCalcSum3)+Number(oringCalcSum4)+Number(oringCalcSum5)+Number(oringCalcSum6)+Number(oringCalcSum7)+Number(oringCalcSumAlt0)+Number(oringCalcSumAlt1)+Number(oringCalcSumAlt2)+Number(oringCalcSumAlt3)+Number(oringCalcSumAlt4)+Number(oringCalcSumAlt5)+Number(oringCalcSumAlt6)+Number(oringCalcSumAlt7);
		
		$('#totalSavedRxTable').html('Original Meds Saved: $' + origCalculatedSum + '; Alternative Meds Saved: $' + altMedSavedSum + '; Combined Total Savings: $' + fullCalcValueSumRX);
		
	dataSumVerifyInit();
	}, 2500)
}

function moverTipsDesignRx() {
	setTimeout( function() {
		for (let i = 0; i < 5; i++) {
			for (let u = 0; u < 10; u++) {
				$('input[name="decisions[' + i + '].original_medication.tips[' + u + '].title"]').parent().appendTo($('select[name="decisions[' + i + '].original_medication.tips[' + u + '].type"]').parent().parent().parent());
			}
        }
	moverTipsDesignRx();
	}, 1000)
}

function tempInjectPanelRx() {
	$('body').append('<div style="background-color: red;position: fixed;right:0%;bottom:0%;width:20%;height:60%;z-index:2;"><table class="tableRxTipserSaver"><tbody> <tr> <td id="tipserSaver0Med"></td> <td id="tipserSaver1Med"></td> </tr> <tr> <td id="alttipserSaver0Med"></td> <td id="alttipserSaver1Med"></td> </tr> <tr> <td id="tipserSaver2Med"></td> <td id="tipserSaver3Med"></td> </tr> <tr> <td id="alttipserSaver2Med"></td> <td id="alttipserSaver3Med"></td> </tr> <tr> <td id="tipserSaver4Med"></td> <td id="tipserSaver5Med"></td> </tr> <tr> <td id="alttipserSaver4Med"></td> <td id="alttipserSaver5Med"></td> </tr></tbody></table></div>');
}

function spawnWyswigRefresherRx() {
	$('body').append('<div id="wyswrefresh" style="position: fixed;cursor: pointer;border: solid 1px #971097;right:0%;bottom:0%;width:16rem;height:4rem;z-index:2;"><span style="font-size: 1.8rem;text-align: center;position: relative;top: 20%;">Refresh WYSIWYG</span></div>');
	document.getElementById("wyswrefresh").addEventListener("click", function(event) {
	
	for (let i = 0; i < 5; i++) {
			for (let u = 0; u < 6; u++) {
				
				let omedbody = $('textarea[name="decisions[' + i + '].original_medication.tips[' + u + '].body"]');
				let omedtype = $('select[name="decisions[' + i + '].original_medication.tips[' + u + '].type"]');
				let omedtitle = $('input[name="decisions[' + i + '].original_medication.tips[' + u + '].title"]');
				
				
	if ($('#wysw' + i + 'Rx' + u + 'Editor').html() == undefined) {omedbody.parent().parent().parent().parent().append('<div id="wysw' + i + 'Rx' + u + 'Editor"></div>'); }
	
	if ($('#bo' + i + 'dy' + u + 'tiprx').html() == undefined) {
	omedbody.attr("id",'bo' + i + 'dy' + u + 'tiprx');
	omedbody.parent().parent().parent().attr("id",'body' + i + 'waste' + u + 'tiprx');}
	
	if ($('#realwysw' + i + 'Ed' + u + 'tiprx').html() == undefined) {
	$('#wysw' + i + 'Rx' + u + 'Editor').summernote({
		callbacks: {
		onChange: function(contents) {
			let almostCleanContents = contents.replaceAll('<p>', "");
			let fullyCleanContents = almostCleanContents.replaceAll('</p>', "");
			$('#img' + i + 'left' + u + 'Rx').attr("alt", fullyCleanContents);
		}},
		toolbar: [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		//['fontsize', ['fontsize']],
		['color', ['color']],
		//['para', ['ul', 'ol', 'paragraph']],
		['insert', ['link', 'unlink']],
		['view', ['codeview']],
		]
	});
	
	$('#wysw' + i + 'Rx' + u + 'Editor').next().attr("id",'realwysw' + i + 'Ed' + u + 'tiprx');
	document.querySelectorAll('.textDragImage').forEach((textDragImage) => {
		  textDragImage.addEventListener('dragstart', (event) => {
				event.dataTransfer.setData('text', textDragImage.alt);
				event.effectAllowed = "copy";
		  });
	});
		if (document.getElementById('bo' + i + 'dy' + u + 'tiprx') != null && $('#bo' + i + 'dy' + u + 'tiprx').attr("listeningrxw") != "yes") {
			$('#bo' + i + 'dy' + u + 'tiprx').attr("listeningrxw", "yes");
			if ($('#bo' + i + 'dy' + u + 'tiprx').text() != "") { $('#wysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#bo' + i + 'dy' + u + 'tiprx').text()); }
			document.getElementById('bo' + i + 'dy' + u + 'tiprx').addEventListener("change", function(event) {
			$('#wysw' + i + 'Rx' + u + 'Editor').summernote('reset');
			$('#wysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#bo' + i + 'dy' + u + 'tiprx').text());
			});
		}
	}
	
	if ($('#wrap' + i + 'per' + u + 'tiprx').html() == undefined) {omedtype.parent().parent().parent().parent().attr("id",'wrap' + i + 'per' + u + 'tiprx');}
	
	if ($('#sele' + i + 'ct' + u + 'tiprx').html() == undefined) {
	omedtype.parent().parent().attr("id",'sele' + i + 'ct' + u + 'tiprx');
	omedtype.parent().parent().parent().removeAttr("class");}
	
	if ($('#tit' + i + 'le' + u + 'tiprx').html() == undefined) {
	omedtitle.parent().attr("id",'tit' + i + 'le' + u + 'tiprx');
	omedtitle.parent().parent().removeAttr("class");}
	
	
	if ($('#remo' + i + 'ver' + u + 'tiprx').html() == undefined) {
	omedbody.parent().parent().parent().next().children().children().attr("id",'remo' + i + 'ver' + u + 'tiprx');}
	
	if ($('#remove' + i + 'Rx' + u + 'TipTable').html() == undefined) {
	$('#wrap' + i + 'per' + u + 'tiprx').append('<table><thead> <tr> <th colspan="2" id="remove' + i + 'Rx' + u + 'TipTable"></th> </tr></thead><tbody> <tr> <td id="left' + i + 'Rx' + u + 'TipTableP1"></td> <td id="right' + i + 'Rx' + u + 'TipTable" rowspan="2"></td> </tr> <tr> <td id="left' + i + 'Rx' + u + 'TipTableP2"></td> </tr></tbody></table>');}
	
	if ($('#body' + i + 'waste' + u + 'tiprx').html() != undefined) {
	$('#sele' + i + 'ct' + u + 'tiprx').appendTo($('#left' + i + 'Rx' + u + 'TipTableP1'));
	$('#tit' + i + 'le' + u + 'tiprx').appendTo($('#left' + i + 'Rx' + u + 'TipTableP1'));
	$('#bo' + i + 'dy' + u + 'tiprx').appendTo($('#left' + i + 'Rx' + u + 'TipTableP2'));
	$('#realwysw' + i + 'Ed' + u + 'tiprx').appendTo($('#right' + i + 'Rx' + u + 'TipTable'));
	$('#remo' + i + 'ver' + u + 'tiprx').appendTo($('#remove' + i + 'Rx' + u + 'TipTable'));
	$('#body' + i + 'waste' + u + 'tiprx').remove();}
	
	if ($('#img' + i + 'left' + u + 'Rx').html() == undefined) {
	$('#realwysw' + i + 'Ed' + u + 'tiprx').append('<img id="img' + i + 'left' + u + 'Rx" src="https://cdn.healthjoy.com/public/application/left-arrow.256x256_1.png" width="25px" height="25px" alt="Whoopsie! Seems like you didn\'t change anything in the editor and this arrow contains deffault text. Try to make changes in the editor first." title="Drage this arrow on top of text field to paste content from editor" class="textDragImage"> <span style="color: #787878;"><- Drage this arrow on top of text field to paste  </span><img hidden id="img' + i + 'right' + u + 'Rx" src="https://cdn.healthjoy.com/public/application/right-arrow.256x256.png" width="25px" height="25px" alt="rightarrows" title="Currently doing nothing" class="textDragImage"><a style="cursor: pointer;" id="refresh' + i + 'editor' + u + 'Rx">Refresh Editor</a>'); 
	$('#img' + i + 'left' + u + 'Rx').attr("alt", $('#bo' + i + 'dy' + u + 'tiprx').text());
	
	if (document.getElementById('refresh' + i + 'editor' + u + 'Rx') != null && $('#refresh' + i + 'editor' + u + 'Rx').attr("listeningrefreshrxw") != "yes") {
		$('#refresh' + i + 'editor' + u + 'Rx').attr("listeningrefreshrxw", "yes");
	document.getElementById('refresh' + i + 'editor' + u + 'Rx').addEventListener("click", function(event) {
			$('#wysw' + i + 'Rx' + u + 'Editor').summernote('reset');
			$('#wysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#bo' + i + 'dy' + u + 'tiprx').text());
		});
	}}}}
	
			
	for (let i = 0; i < 5; i++) {
			for (let u = 0; u < 6; u++) {
	
				let smedbody = $('textarea[name="decisions[' + i + '].similar_medication.tips[' + u + '].body"]');
				let smedtype = $('select[name="decisions[' + i + '].similar_medication.tips[' + u + '].type"]');
				let smedtitle = $('input[name="decisions[' + i + '].similar_medication.tips[' + u + '].title"]');
				
	if ($('#altwysw' + i + 'Rx' + u + 'Editor').html() == undefined) {smedbody.parent().parent().parent().parent().append('<div id="altwysw' + i + 'Rx' + u + 'Editor"></div>'); }
	
	if ($('#altbo' + i + 'dy' + u + 'tiprx').html() == undefined) {
	smedbody.attr("id",'altbo' + i + 'dy' + u + 'tiprx');
	smedbody.parent().parent().parent().attr("id",'altbody' + i + 'waste' + u + 'tiprx');}
	
	if ($('#altrealwysw' + i + 'Ed' + u + 'tiprx').html() == undefined) {
	$('#altwysw' + i + 'Rx' + u + 'Editor').summernote({
		callbacks: {
		onChange: function(contents) {
			let almostCleanContents = contents.replaceAll('<p>', "");
			let fullyCleanContents = almostCleanContents.replaceAll('</p>', "");
			$('#altimg' + i + 'left' + u + 'Rx').attr("alt", fullyCleanContents);
		}},
		toolbar: [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		//['fontsize', ['fontsize']],
		['color', ['color']],
		//['para', ['ul', 'ol', 'paragraph']],
		['insert', ['link', 'unlink']],
		['view', ['codeview']],
		]
	});
	
	$('#altwysw' + i + 'Rx' + u + 'Editor').next().attr("id",'altrealwysw' + i + 'Ed' + u + 'tiprx');
	document.querySelectorAll('.textDragImage').forEach((textDragImage) => {
		  textDragImage.addEventListener('dragstart', (event) => {
				event.dataTransfer.setData('text', textDragImage.alt);
				event.effectAllowed = "copy";
		  });
	});
		if (document.getElementById('altbo' + i + 'dy' + u + 'tiprx') != null && $('#altbo' + i + 'dy' + u + 'tiprx').attr("listeningrxw") != "yes") {
			$('#altbo' + i + 'dy' + u + 'tiprx').attr("listeningrxw", "yes");
			if ($('#altbo' + i + 'dy' + u + 'tiprx').text() != "") { $('#altwysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#altbo' + i + 'dy' + u + 'tiprx').text()); }
			document.getElementById('altbo' + i + 'dy' + u + 'tiprx').addEventListener("change", function(event) {
			$('#altwysw' + i + 'Rx' + u + 'Editor').summernote('reset');
			$('#altwysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#altbo' + i + 'dy' + u + 'tiprx').text());
		});
		}
	}
	
	if ($('#altwrap' + i + 'per' + u + 'tiprx').html() == undefined) {smedtype.parent().parent().parent().parent().attr("id",'altwrap' + i + 'per' + u + 'tiprx');}
	
	if ($('#altsele' + i + 'ct' + u + 'tiprx').html() == undefined) {
	smedtype.parent().parent().attr("id",'altsele' + i + 'ct' + u + 'tiprx');
	smedtype.parent().parent().parent().removeAttr("class");}
	
	if ($('#alttit' + i + 'le' + u + 'tiprx').html() == undefined) {
	smedtitle.parent().attr("id",'alttit' + i + 'le' + u + 'tiprx');
	smedtitle.parent().parent().removeAttr("class");}
	
	
	if ($('#altremo' + i + 'ver' + u + 'tiprx').html() == undefined) {
	smedbody.parent().parent().parent().next().children().children().attr("id",'altremo' + i + 'ver' + u + 'tiprx');}
	
	if ($('#altremove' + i + 'Rx' + u + 'TipTable').html() == undefined) {
	$('#altwrap' + i + 'per' + u + 'tiprx').append('<table><thead> <tr> <th colspan="2" id="altremove' + i + 'Rx' + u + 'TipTable"></th> </tr></thead><tbody> <tr> <td id="altleft' + i + 'Rx' + u + 'TipTableP1"></td> <td id="altright' + i + 'Rx' + u + 'TipTable" rowspan="2"></td> </tr> <tr> <td id="altleft' + i + 'Rx' + u + 'TipTableP2"></td> </tr></tbody></table>');}
	
	if ($('#altbody' + i + 'waste' + u + 'tiprx').html() != undefined) {
	$('#altsele' + i + 'ct' + u + 'tiprx').appendTo($('#altleft' + i + 'Rx' + u + 'TipTableP1'));
	$('#alttit' + i + 'le' + u + 'tiprx').appendTo($('#altleft' + i + 'Rx' + u + 'TipTableP1'));
	$('#altbo' + i + 'dy' + u + 'tiprx').appendTo($('#altleft' + i + 'Rx' + u + 'TipTableP2'));
	$('#altrealwysw' + i + 'Ed' + u + 'tiprx').appendTo($('#altright' + i + 'Rx' + u + 'TipTable'));
	$('#altremo' + i + 'ver' + u + 'tiprx').appendTo($('#altremove' + i + 'Rx' + u + 'TipTable'));
	$('#altbody' + i + 'waste' + u + 'tiprx').remove();}
	
	if ($('#altimg' + i + 'left' + u + 'Rx').html() == undefined) {
	$('#altrealwysw' + i + 'Ed' + u + 'tiprx').append('<img id="altimg' + i + 'left' + u + 'Rx" src="https://cdn.healthjoy.com/public/application/left-arrow.256x256_1.png" width="25px" height="25px" alt="Whoopsie! Seems like you didn\'t change anything in the editor and this arrow contains deffault text. Try to make changes in the editor first." title="Drage this arrow on top of text field to paste content from editor" class="textDragImage"> <span style="color: #787878;"><- Drage this arrow on top of text field to paste  </span><img hidden id="altimg' + i + 'right' + u + 'Rx" src="https://cdn.healthjoy.com/public/application/right-arrow.256x256.png" width="25px" height="25px" alt="rightarrows" title="Currently doing nothing" class="textDragImage"><a style="cursor: pointer;" id="altrefresh' + i + 'editor' + u + 'Rx">Refresh Editor</a>'); 
	$('#altimg' + i + 'left' + u + 'Rx').attr("alt", $('#altbo' + i + 'dy' + u + 'tiprx').text());
	
	if (document.getElementById('altrefresh' + i + 'editor' + u + 'Rx') != null && $('#altrefresh' + i + 'editor' + u + 'Rx').attr("listeningrefreshrxw") != "yes") {
		$('#altrefresh' + i + 'editor' + u + 'Rx').attr("listeningrefreshrxw", "yes");
	document.getElementById('altrefresh' + i + 'editor' + u + 'Rx').addEventListener("click", function(event) {
			$('#altwysw' + i + 'Rx' + u + 'Editor').summernote('reset');
			$('#altwysw' + i + 'Rx' + u + 'Editor').summernote('pasteHTML', $('#altbo' + i + 'dy' + u + 'tiprx').text());
		});
	}}}}
	
	});
}

function spawnMedBrowserRx() {
	$('body').append('<div id="browerbuttonsdivrx" style="position: fixed;top:3em;left:0%;width:45px;height:16rem;z-index:4;">\
	<img id="settingsrxbrowser" src="https://cdn.healthjoy.com/public/application/settingss.png" width="20px" height="20px" title="Open Rx Tools Settings" class="buttonsRxBrowser"><br>\
	</div>');
	//<img id="singlecrxbrowser" src="https://cdn.healthjoy.com/public/application/singlecare.jpg" width="45px" height="45px" title="Open SingleCare View" class="buttonsRxBrowser">
	//<img id="goodrxbrowser" src="https://cdn.healthjoy.com/public/application/goodrx.png" width="45px" height="45px" title="Open GoodRx View" class="buttonsRxBrowser"><br>
	//<img id="wellrxbrowser" src="https://cdn.healthjoy.com/public/application/wellrx_opti.png" width="45px" height="45px" title="Open WellRx View" class="buttonsRxBrowser"><br><br>
	//<img id="refreshRxWindows" src="https://cdn.healthjoy.com/public/application/refresher_c0d71d.png" width="20px" height="20px" title="Restart currently open internal window from start (does nothing if all internal windows are closed)" class="buttonsRxBrowser">
	
	$('body').append('<div id="mainsettingsframerx" class="iframeDivRx" hidden><table class="tableRxSettings"><tbody> <tr> <td colspan="3"><center><b>Select the size of the internal browser window:</b></center><br><i>(lowering size might also decrease clarity)</i> Current size: <span id="slideRxValue">???</span><span>%</span></td> </tr> <tr> <td colspan="3"> <input type="range" min="25" max="100" value="75" class="sliderinoRxSetting" id="sizerxbrowsslide"> </td> </tr> <tr> <td colspan="3"><center><b>Select WYSIWYG Editor Status</b></center><br>None: WYSIWYG editor will not be shown; <br>Manual: WYSIWYG has to be injected manually by clicking button on bottom right (no lag option); <br>Auto: Tries to inject editor every 2 seconds automatically but will create ton of lag when working on big 5 meds tickets (depends on PC/Laptop)<br><b><i>Refresh page to apply WYSIWYG editor changes</i></b></td> </tr> <tr> <td><center><span id="wyswRxSet1" class="wyswRxSet">None</span></center></td> <td><center><span id="wyswRxSet2" class="wyswRxSet">Manual</span></center></td> <td><center><span id="wyswRxSet3" class="wyswRxSet">Auto</span></center></td> </tr></tbody></table></div>');
	
	var sliderRxSettings = document.getElementById("sizerxbrowsslide");
	var outputsizeRxSettings = document.getElementById("slideRxValue");
	outputsizeRxSettings.innerHTML = sliderRxSettings.value;

	document.getElementById("sizerxbrowsslide").addEventListener("change", function(event) {
		//inject valu einto save
		chrome.storage.local.set({"rxSizeOfWindowsave": (sliderRxSettings.value/100)});
	});
	
	$('body').append('<div id="iframedivforgrx" class="iframeDivRx" hidden></div>');
	$('body').append('<div id="iframedivforwrx" class="iframeDivRx" hidden></div>');
	//$('body').append('<div id="iframedivforsrx" class="iframeDivRx" hidden></div>');
	
	//Slider for size
	document.getElementById("sizerxbrowsslide").addEventListener("input", function(event) {
		outputsizeRxSettings.innerHTML = sliderRxSettings.value;
		$("#mainsettingsframerx").attr("style","transform: scale("+(sliderRxSettings.value/100)+");");
		$("#iframedivforgrx").attr("style","transform: scale("+(sliderRxSettings.value/100)+");");
		$("#iframedivforwrx").attr("style","transform: scale("+(sliderRxSettings.value/100)+");");
	});
	
	//get slider value and set it from save
	chrome.storage.local.get(['rxSizeOfWindowsave'], function(result) {
		outputsizeRxSettings.innerHTML = (result.rxSizeOfWindowsave*100);
		$("#mainsettingsframerx").attr("style","transform: scale("+result.rxSizeOfWindowsave +");");
		$("#iframedivforgrx").attr("style","transform: scale("+result.rxSizeOfWindowsave +");");
		$("#iframedivforwrx").attr("style","transform: scale("+result.rxSizeOfWindowsave +");");
	});
	
	//Add listeners to wysw status wyswRxSet1, wyswRxSet2, wyswRxSet3; class wyswRxSet, wyswRxSetActive
	document.getElementById("wyswRxSet1").addEventListener("click", function(event) {
		chrome.storage.local.set({"rxStatusOfWyswsave": "1"});
		$("#wyswRxSet1").attr("class", "wyswRxSetActive");
		$("#wyswRxSet2").attr("class", "wyswRxSet");
		$("#wyswRxSet3").attr("class", "wyswRxSet");
	});
	document.getElementById("wyswRxSet2").addEventListener("click", function(event) {
		chrome.storage.local.set({"rxStatusOfWyswsave": "2"});
		$("#wyswRxSet1").attr("class", "wyswRxSet");
		$("#wyswRxSet2").attr("class", "wyswRxSetActive");
		$("#wyswRxSet3").attr("class", "wyswRxSet");
	});
	document.getElementById("wyswRxSet3").addEventListener("click", function(event) {
		chrome.storage.local.set({"rxStatusOfWyswsave": "3"});
		$("#wyswRxSet1").attr("class", "wyswRxSet");
		$("#wyswRxSet2").attr("class", "wyswRxSet");
		$("#wyswRxSet3").attr("class", "wyswRxSetActive");
	});
	
	document.getElementById("settingsrxbrowser").addEventListener("click", function(event) {
		if (document.getElementById("mainsettingsframerx").hidden == false) {
			document.getElementById("mainsettingsframerx").hidden = true;
		} else if (document.getElementById("mainsettingsframerx").hidden == true) { 
		document.getElementById("mainsettingsframerx").hidden = false;
		document.getElementById("iframedivforgrx").hidden = true;
		document.getElementById("iframedivforwrx").hidden = true;
		//document.getElementById("iframedivforsrx").hidden = true;
		}
		else {prepareiFrameRx(rxLink, rxBoxid, rxframeid);
		document.getElementById("iframedivforgrx").hidden = false;
		document.getElementById("iframedivforwrx").hidden = true;
		//document.getElementById("iframedivforsrx").hidden = true;
		};
	});
	/*document.getElementById("goodrxbrowser").addEventListener("click", function(event) {
		let = rxLink = "https://www.goodrx.com";
		let = rxBoxid = "iframedivforgrx";
		let = rxframeid = "ifrgoodrxvisible";
		
		if (document.getElementById("ifrgoodrxvisible") != null && document.getElementById("iframedivforgrx").hidden == false) {
			document.getElementById("iframedivforgrx").hidden = true;
		} else if (document.getElementById("ifrgoodrxvisible") != null && document.getElementById("iframedivforgrx").hidden == true) { 
		document.getElementById("mainsettingsframerx").hidden = true;
		document.getElementById("iframedivforgrx").hidden = false;
		document.getElementById("iframedivforwrx").hidden = true;
		//document.getElementById("iframedivforsrx").hidden = true;
		}
		else {prepareiFrameRx(rxLink, rxBoxid, rxframeid);
		document.getElementById("mainsettingsframerx").hidden = true;
		document.getElementById("iframedivforgrx").hidden = false;
		document.getElementById("iframedivforwrx").hidden = true;
		//document.getElementById("iframedivforsrx").hidden = true;
		};
	});
	document.getElementById("wellrxbrowser").addEventListener("click", function(event) {
		let = rxLink = "https://www.wellrx.com";
		let = rxBoxid = "iframedivforwrx";
		let = rxframeid = "ifrwellrxvisible";
		
		if (document.getElementById("ifrwellrxvisible") != null && document.getElementById("iframedivforwrx").hidden == false) {
			document.getElementById("iframedivforwrx").hidden = true;
		} else if (document.getElementById("ifrwellrxvisible") != null && document.getElementById("iframedivforwrx").hidden == true) { 
		document.getElementById("mainsettingsframerx").hidden = true;
		document.getElementById("iframedivforgrx").hidden = true;
		document.getElementById("iframedivforwrx").hidden = false;
		//document.getElementById("iframedivforsrx").hidden = true;
		}
		else {prepareiFrameRx(rxLink, rxBoxid, rxframeid);
		document.getElementById("mainsettingsframerx").hidden = true;
		document.getElementById("iframedivforgrx").hidden = true;
		document.getElementById("iframedivforwrx").hidden = false;
		//document.getElementById("iframedivforsrx").hidden = true;
		};
	});
	document.getElementById("singlecrxbrowser").addEventListener("click", function(event) {
		let = rxLink = "https://www.singlecare.com";
		let = rxBoxid = "iframedivforsrx";
		let = rxframeid = "ifrsinglerxvisible";
		
		if (document.getElementById("ifrsinglerxvisible") != null && document.getElementById("iframedivforsrx").hidden == false) {
			document.getElementById("iframedivforsrx").hidden = true;
		} else if (document.getElementById("ifrsinglerxvisible") != null && document.getElementById("iframedivforsrx").hidden == true) { 
		document.getElementById("mainsettingsframerx").hidden = true;
		document.getElementById("iframedivforgrx").hidden = true;
		document.getElementById("iframedivforwrx").hidden = true;
		document.getElementById("iframedivforsrx").hidden = false;
		}
		else {prepareiFrameRx(rxLink, rxBoxid, rxframeid);
		document.getElementById("mainsettingsframerx").hidden = true;
		document.getElementById("iframedivforgrx").hidden = true;
		document.getElementById("iframedivforwrx").hidden = true;
		document.getElementById("iframedivforsrx").hidden = false;
		};
	});
	document.getElementById("refreshRxWindows").addEventListener("click", function(event) {
		let = rxLink1 = "https://www.goodrx.com";
		let = rxLink2 = "https://www.wellrx.com";
		//let = rxLink3 = "https://www.singlecare.com";
		
		let = rxframeid1 = "ifrgoodrxvisible";
		let = rxframeid2 = "ifrwellrxvisible";
		//let = rxframeid3 = "ifrsinglerxvisible";
		
		if (document.getElementById(rxframeid1) != null && document.getElementById("iframedivforgrx").hidden == false) {
			document.getElementById(rxframeid1).src = rxLink1;
		};
		if (document.getElementById(rxframeid2) != null && document.getElementById("iframedivforwrx").hidden == false) {
			document.getElementById(rxframeid2).src = rxLink2;
		};
		/*
		if (document.getElementById(rxframeid3) != null && document.getElementById("iframedivforsrx").hidden == false) {
			document.getElementById(rxframeid3).src = rxLink3;
		};
	});
		*/
}

function prepareiFrameRx(link, iframeboxid, iframeid) {
	//document.getElementById("iframerfordciddiv").hidden = false;
	//document.getElementById("minimizesearcher").hidden = false;
	//document.getElementById("closesearcher").hidden = false;
	var el = document.getElementById(iframeid);
    if (el != null) { el.remove(); }
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", link);
    ifrm.setAttribute("id", iframeid);
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    document.getElementById(iframeboxid).appendChild(ifrm);
}

function fillSidePanelRx() {
	//setTimeout( function() {
		for (let i = 0; i < 6; i++) {
			$('#tipserSaver0Med').append($('input[name="decisions[0].original_medication.tips[' + i + '].title"]').val());
			$('#tipserSaver1Med').append($('input[name="decisions[1].original_medication.tips[' + i + '].title"]').val());
			$('#alttipserSaver0Med').append($('input[name="decisions[0].original_medication.tips[' + i + '].title"]').val());
			$('#alttipserSaver1Med').append($('input[name="decisions[1].original_medication.tips[' + i + '].title"]').val());
        }
	//fillSidePanelRx();
	//}, 1250)
}


/*
function greetingExpandbrosOLDDC() {
if (extendedGreeterStatus == "1") {
	$('textarea[category="Greetings"]').attr("maxlength", "2048");
	$('textarea[category="Greetings and Notes"]').attr("maxlength", "2048");
	document.getElementsByClassName("sub-title")[0].textContent = "* Maximum 2048 characters";
}}
*/
/*
function injectDesignRx() {
	//Settings button
	setTimeout( function() {
		
		if ( $('#settingsBtn').text() == 'Settings') {
			loadDesignMainOLDQ();
			return;
		}
		else { console.log("Waiting for injection");
		
		injectDesignRx(); }
	}, 500)
} */

function baseDesignInjectorRX(){
	setTimeout( function() {
			if (document.getElementsByClassName("decision-form_block-title")[0] != undefined) {
				// Page preloaded
				addCSSRx('\
				/* Make all left blocks smaller */\
				.rx_decision_form .border-top-grey { width: 30%; }\
				.rx_decision_form .border-left-grey { width: 70%; }\
				/* Increase greeting and decrease summary */\
				textarea[name="header_bar"] { min-height: 250px; height: 360px; }\
				textarea.form-control[name="summary"] { min-height: 1px; height: 50px; }\
				/* Something */\
				/* Something */\
				/* Something */\
				/* Something */\
				/* Something */\
				/* Something */\
				/* Something */\
				');
				return;
            }
            else {
				baseDesignInjectorRX();
            }
	}, 250)
}

function addCSSRx(css){
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