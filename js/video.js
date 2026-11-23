var video;

window.addEventListener("DOMContentLoaded", function() {
	console.log("Good job opening the window")
	console.log("Autoplay is set to false")
	console.log ("Loop is set to false")

	video = document.querySelector("#player1");

	video.autoplay = false;
	video.loop = false;
	video.pause();
	video.currentTime=0;
	
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Paused Video");
		video.pause();
	});
 });

