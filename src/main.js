import 'audio-tour-player';

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector('audio-tour-player');

  if (player.attributes.src) {
    console.log('Audio Player present and src attribute is set.');
  }
});