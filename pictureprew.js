/*
$(document).ready(function(){
    pageInitp();
});

function pageInitp() {
	setTimeout( function() {
			if ($('h3[class="decision-form_block-title"]').text() == "AUTODELIVERY::GROUPS::APPOINTMENTSearch for providers in HealthJoy directoryHeaderDecision DetailsInternal informationInsurance coverageAppointment DateProvider detailsInternal informationOffice detailsInternal information") {
				ticketCheckerpic();
                return;
            }
			else if ($('h3:contains("Decision Details")').text() == "Decision Details" || $('h3:contains("Decision Details")').text() == "Decision DetailsDecision Details" ) {
				ticketCheckerpic();
                return;
            }
            else {
				pageInitp();
            }
	}, 250)
}



function ticketCheckerpic() {
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
} */