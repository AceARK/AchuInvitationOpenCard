let audioPlaying = false;
	document.addEventListener("DOMContentLoaded", () => {
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			document.querySelector('.card').addEventListener('click', playMusic);
		} 
		document.getElementById('overlayClicker').addEventListener('click', playMusic);
	});
	function getSoundAndFadeAudio (audiosnippetId) {
		var sound = document.getElementById(audiosnippetId);
		// Set the point in playback that fadeout begins. This is for a 2 second fade out.
		var fadePoint = sound.duration - 5; 
		var fadeAudio = setInterval(function () {
			// Only fade if past the fade out point or not at zero already
			if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
				sound.volume = Math.max(0, sound.volume - 0.05);
			}
			// When volume at zero stop all the intervalling
			if (sound.volume <= 0.0) {
				clearInterval(fadeAudio);
			}
		}, 200);
	}
	function playMusic() {
		if(!audioPlaying) {
			audioPlaying = true;
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
				document.getElementById('clickMe').style.display = 'none';
				if(document.getElementById('overlayClicker').style.display !== 'none') {
					document.getElementById('overlayClicker').style.display = 'none';
					document.querySelector('.card').click();
					document.getElementById('backgroundMusicMobile').play();
					getSoundAndFadeAudio('backgroundMusicMobile');
					document.getElementById('content').style.visibility = 'visible';
				} else {
					document.getElementById('backgroundMusicMobile').play();
					getSoundAndFadeAudio('backgroundMusicMobile');
					document.getElementById('content').style.visibility = 'visible';
				}
			}else{
				document.getElementById('backgroundMusic').play();
				getSoundAndFadeAudio('backgroundMusic');
				document.getElementById('overlayClicker').style.display = 'none';
				document.getElementById('content').style.visibility = 'visible';
			}
		} else {
			document.getElementById('overlayClicker').removeEventListener('click', playMusic);
			document.querySelector('.card').removeEventListener('click', playMusic);
		}
	}