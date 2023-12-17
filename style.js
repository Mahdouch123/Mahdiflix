<script>
  var video = document.getElementById('video-ad');
  var unmuteButton = document.getElementById('unmuteButton');

  function toggleMute() {
    if (video.muted) {
      video.muted = false;
      unmuteButton.innerHTML = 'Mute';
    } else {
      video.muted = true;
      unmuteButton.innerHTML = 'Unmute';
    }
  }
</script>
</body>