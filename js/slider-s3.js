$(document).ready(function () {
	$('.slider-s2').slick({

		infinite: false,
		// autoplay:true,
		// autoplaySpeed:2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true,
				}

			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					dots: true,
					infinite: true,
				}
			}
		]
	});

});

