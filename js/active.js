;(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		$('.logoimgslider').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
            autoplay: true,
            smartSpeed: 500,
        });
	});
	
	
	jQuery(window).on("load", function(){
		
	});
	
})(jQuery);
