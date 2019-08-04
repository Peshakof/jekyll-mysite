$(document).ready( function($){
	
	let offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
		animationDuration = 1000, 
		$backToTop = $('#toTop');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $backToTop.addClass('cd-is-visible') : $backToTop.removeClass('cd-is-visible');
	});

	//smooth scroll to top
	$backToTop.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, animationDuration
		);
	});
});
