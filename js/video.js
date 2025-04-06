var video;

window.addEventListener("load", function () {
    console.log("Window loaded");

    video = document.getElementById("player1");

    // Disable autoplay and loop (JS-side)
    video.autoplay = false;
    video.loop = false;
    video.load(); // Re-initialize video without autoplay

    // Set initial volume display
    document.getElementById("volume").innerText = `${Math.round(video.volume * 100)}%`;

    // Play button
    document.querySelector("#play").addEventListener("click", function () {
        video.play();
        console.log("played video");
    });

    // Pause button
    document.querySelector("#pause").addEventListener("click", function () {
        video.pause();
        console.log("paused video");
    });

    // Slower
    document.querySelector("#slower").addEventListener("click", function () {
		video.playbackRate = Math.max(0.5, video.playbackRate * 0.9);
		console.log("new speed is " + video.playbackRate.toFixed(2));
	});

    // Faster
    document.querySelector("#faster").addEventListener("click", function () {
		video.playbackRate = Math.min(2, video.playbackRate / 0.9);
		console.log("new speed is " + video.playbackRate.toFixed(2));
	});

    // Skip
    document.querySelector("#skip").addEventListener("click", function () {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
            console.log("video restarted");
        } else {
            video.currentTime += 10;
            console.log("current video time: " + video.currentTime);
        }
    });

    // Mute button
    document.querySelector("#mute").addEventListener("click", function () {
        video.muted = !video.muted; // Toggle mute
        console.log(video.muted ? "Video muted" : "Video unmuted");
    });
	// Volume Slider
    const volumeSlider = document.querySelector("#slider");
    volumeSlider.addEventListener("input", function () {
        const newVolume = volumeSlider.value / 100; // Convert slider value (0-100) to a range of 0-1
        video.volume = newVolume; // Set the video's volume
        document.getElementById("volume").innerText = `${Math.round(newVolume * 100)}%`; // Update volume display
        console.log(`Volume changed to ${Math.round(newVolume * 100)}%`);
    });
	// Styled (Old School)
    document.querySelector("#vintage").addEventListener("click", function () {
        video.classList.add("oldSchool"); // Add the oldSchool class to the video element
        console.log("Applied oldSchool styling");
    });

    // Original
    document.querySelector("#orig").addEventListener("click", function () {
        video.classList.remove("oldSchool"); // Remove the oldSchool class from the video element
        console.log("Removed oldSchool styling");
    });
});

