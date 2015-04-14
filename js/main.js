(function() {
	"use strict";
	
	$(document).ready(function(){
		$(window).load(function() {
			$(".modale").css("left", window.innerWidth * .5 - $(".modale").outerWidth() * .5);

			$("#btn-pokelol").click(function() {
				$("#overlay").stop().fadeIn();					
				$(".popup").animate({top: '20px'});					
			});

			$("#btn-bonnasse").click(function() {
				$("#overlay").stop().fadeIn();					
				$(".popup-bonnasse").animate({top: '20px'});					
			});

			$("#btn-banana").click(function() {
				$("#overlay").stop().fadeIn();					
				$(".popup-banana").animate({top: '20px'});					
			});

			$("#overlay").click(function() {
				$("#overlay").stop().fadeOut();
				$(".modale").animate({top: '-1000px'});
			});

			$("#btn-video").click(function() {
				$("#overlay").stop().fadeIn();					
				$(".popup-video").animate({top: '20px'});	
			})

			$("#btn-pokelol").css("top", $("#bg-chambre").outerHeight() * .5);
			$("#btn-mix").css("top", $("#bg-chambre").outerHeight() * .5);
			$("#btn-bonnasse").css("top", $("#bg-chambre").outerHeight() * .5 - $("#btn-bonnasse").outerHeight() * .5);
			$("#btn-banana").css("top", $("#bg-chambre").outerHeight() * .5 - $("#btn-banana").outerHeight() * .5);
			$("#btn-video").css("top", $("#bg-chambre").outerHeight() * .5 -170);
		});	

		$(window).resize(function() {
			$("#btn-pokelol").css("top", $("#bg-chambre").outerHeight() * .5);
		});
	});
})();