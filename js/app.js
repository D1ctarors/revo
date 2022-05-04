$(document).ready(function(){
	$('.body-section-site-1__burger').click(function(event){
		$('.body-section-site-1__burger, .header').toggleClass('active');
		$('body').toggleClass('lock');
	})
});