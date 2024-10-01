// Video file paths
const videoPaths = {
    poor: 'videos/poor.mp4',
    intermediate: 'videos/intermediate.mp4',
    expert: 'videos/expert.mp4'
};

// Elements
const levelSelector = document.getElementById('levelSelector');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');

// Function to change video based on level selection
levelSelector.addEventListener('change', function() {
    const selectedLevel = levelSelector.value;
    videoSource.src = videoPaths[selectedLevel];
    videoPlayer.load();  // Reload the video player with the new source
});
