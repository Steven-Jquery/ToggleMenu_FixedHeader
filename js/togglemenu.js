var $ = jQuery.noConflict();
$(document).ready(function(){
	//open toggle menu
	$('.icon-menu').click(function(e){
		$('html, .navigation').addClass('fixed-body open');
		$('.wrap-overlay').show();
	});

	//closed toggle menu
	$('.icon-closed').click(function(){
		$('html, .navigation').removeClass('fixed-body open');
		$('.wrap-overlay').hide();
	});

	//fixed header
	$(window).scroll(function(e) {
		var numHeight = $('.wrap-header').outerHeight();
		var scroll = $(this).scrollTop();
		if(scroll >= numHeight){
			$('.wrap-header').addClass('fixed-header').removeClass('slideUp');
		}else{
			$('.wrap-header').removeClass('fixed-header').addClass('slideUp');
		}
	});

});

//closed toggle menu when click outsite
$(document).click(function(e){
	if(!$(e.target).closest('.navigation, .icon-menu').length){
        $('html, .navigation').removeClass('fixed-body open');
		$('.wrap-overlay').hide();
    }
});

