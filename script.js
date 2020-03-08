const data = document.getElementById("parralax");
window.addEventListener("scroll",function() {

	let offset = window.pageYOffset;
	console.log('titik:'+offset * 0.7);
	data.style.backgroundPositionY =  offset *0.7+"px";
});
