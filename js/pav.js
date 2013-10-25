// JavaScript Document

jQuery(function($) { 
	$('#menu ul li').click(function() {
		if($(this).context.className == "inactive") {
			if($(this).context.id=="info-galeria"){
				$('#menu ul li.active').toggleClass("active inactive");
				$('.conteudo.active').removeClass("active");
				$('.fotorama#foto-fundo').fadeToggle(500);
				$('.fotorama#galeria-todas').delay(500).fadeToggle(1000);
				$('#fecha-galeria').delay(500).addClass('in');
				$('#nav').delay(500).addClass('out');
				$('#contatos').delay(500).addClass('out');
				$('#principal').delay(1000).fadeToggle(100);
			} else {
				$('#menu ul li.active').toggleClass("active inactive");
				$(this).toggleClass("active inactive");
				$('.conteudo.active').removeClass("active");
				$('.conteudo#'+$(this).context.id).addClass("active");
				if($(this).context.id=="info-local"){
				}
			}
		} else {
			$('.conteudo#'+$(this).context.id).removeClass("active");
			$(this).toggleClass("active inactive");
		}
	});
	
	$('#fecha-galeria').click(function() {
		$('#principal').toggle();
		$('.fotorama#foto-fundo').fadeToggle(500);
		$('.fotorama#galeria-todas').fadeToggle(500);
		$('#fecha-galeria').delay(500).removeClass('in');
		$('#nav').delay(500).removeClass('out');
		$('#contatos').delay(500).removeClass('out');
		
	});
	
	$('#lingua ul li').click(function() {
		if($(this).context.className == "inactive") {
			$('#lingua ul li').toggleClass("active inactive");
		}
	});
});