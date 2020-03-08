$(window).scroll(function() {
	var data = $(window).scrollTop();
	$('section').css({
		'background-position-x': - data + 'px'
	});
});