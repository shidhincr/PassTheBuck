jQuery(function ($) {
	jQuery("#team, #category, #task").click(function() {
		var _id = jQuery(this).attr('id');
		jQuery("."+_id).show();
	});

	jQuery(".popup-close").click(function() {
		jQuery(".popup-hold").hide();
	})
});