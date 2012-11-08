jQuery(function ($) {
	jQuery("#team, #category, #task").click(function() {
		var _id = jQuery(this).attr('id');
		$('<div id="overlay">').appendTo('body').show();
		jQuery("."+_id).show();
	});

	jQuery(".popup-close, .cancel-btn").click(function() {
		jQuery(".popup-hold").hide();
		$('#overlay').remove();
	});

	
});