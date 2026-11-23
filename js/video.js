var video;

window.addEventListener("DOMContentLoaded", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#video");

	video.autoplay = false;
	video.loop = false;
	video.pause();
	video.currenttime=0;

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
 });

