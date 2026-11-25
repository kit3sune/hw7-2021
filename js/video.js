// sources include: https://www.w3schools.com/tags/av_met_autoplay.asp, https://www.w3schools.com/tags/av_met_loop.asp, https://www.w3schools.com/tags/av_met_currenttime.asp, https://www.w3schools.com/tags/av_met_play.asp, https://www.w3schools.com/tags/av_met_pause.asp
// also looked at https://davidwalsh.name/video-playback-speed for the speed and https://stackoverflow.com/questions/33060291/video-mute-unmute-button-javascript for the mute and unmute, i asked for help from my friend natalie as well since she has some js experince
// i watched this video too for some help with the tv modes https://www.youtube.com/watch?v=mWWMq11wIW4&t=70s

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
		video.playbackRate -= 0.10;
		console.log("Video was slowed by", video.playbackRate);
		
	
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate += 0.10;
		console.log("Video was sped up by", video.playbackRate);
		
	
	});

	document.querySelector("#skip").addEventListener("click", function() {
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		console.log("Video current time is", video.currentTime);
		
	
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted == false) {
			video.muted = true;
			// changes the button to say unmute
			document.querySelector("#mute").innerHTML = "Unmute";
			console.log("Video is muted");
		}
		else {
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
			console.log("Video is unmuted");
		}
		
	
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");

	});
 
});

