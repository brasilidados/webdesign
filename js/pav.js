// JavaScript Document

jQuery(function($) { 
	$('#menu ul li').click(function() {
		if($(this).context.className == "inactive") {
			$('#menu ul li.active').toggleClass("active inactive");
			$(this).toggleClass("active inactive");
			$('.conteudo').hide();
			$('.conteudo#'+$(this).context.id).toggle();
		} else {
			$(this).toggleClass("active inactive");
			$('.conteudo#'+$(this).context.id).toggle();
		}
	});
	
	$('#lingua ul li').click(function() {
		if($(this).context.className == "inactive") {
			$('#lingua ul li').toggleClass("active inactive");
		}
	});
});