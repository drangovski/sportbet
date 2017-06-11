$(function(){

	// Set equal height for casino games blocks on page load
	var maxHeight = 0;

	$(".cgames-block-inner").each(function(){
	   if ($(this).innerHeight() > maxHeight) {
	   		maxHeight = $(this).innerHeight();
	   }
	});
	$(".cgames-block-inner").css('min-height', maxHeight);


});