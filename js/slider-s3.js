$(document).ready(function () {
	$('.slider-s3').slick({

		infinite: false,
	
		rows: 2,
		slidesPerRow: 2,
		// autoplay:true,
		// autoplaySpeed:2000,
		responsive: [
			{
				breakpoint: 1264,
				settings: {
					rows: 2,
					slidesPerRow: 1,
				}

			},
			{
				breakpoint: 992,
				settings: {
					rows: 2,
					slidesPerRow: 1,
					arrows: false,
					dots: true,
					infinite: true
				}

			},
			{
				breakpoint: 626,
				settings: {
					rows: 2,
					slidesPerRow: 1,
					arrows: false,
					dots: true,
					infinite: true
				}

			},
			{
				breakpoint: 480,
				settings: {
					rows: 2,
					slidesPerRow: 1,
					arrows: false,
					dots: true,
					infinite: true
				}
			}
		]
	});

});

