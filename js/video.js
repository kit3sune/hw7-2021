var video;

window.addEventListener("DOMContentLoaded", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#player1");

	video.autoplay = false;
	video.loop = false;
	video.pause();
	video.currentTime=0;
	
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
	});

 });

