// sources include: https://www.w3schools.com/tags/av_met_autoplay.asp, https://www.w3schools.com/tags/av_met_loop.asp, https://www.w3schools.com/tags/av_met_currenttime.asp, https://www.w3schools.com/tags/av_met_play.asp, https://www.w3schools.com/tags/av_met_pause.asp
// also looked at https://davidwalsh.name/video-playback-speed


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
	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Video was slowed by video.playbackRate");
		video.playbackRate = 0.10;
	});
 });

