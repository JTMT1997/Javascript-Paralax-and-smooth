$(document).ready(function() {
	$("#data1").click(function(event) {
		data =$("#link1").offset().top;
		$('html').animate({scrollTop:data}, 5000);
	});
});
$("#data2").click(function(event) {
		data =$("#link2").offset().top;
		$('html').animate({scrollTop:data}, 5000);
	});
$("#data3").click(function(event) {
		data =$("#link3").offset().top;
		$('html,body').animate({scrollTop:data}, 5000);
	});
$("#data4").click(function(event) {
		data =$("#link4").offset().top;
		$('html,body').animate({scrollTop:data}, 5000);
	});