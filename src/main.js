import 'audio-tour-player';
import { capacitorStorageDelegate, capacitorUrlRewriter } from './capacitor-bridge.js';


// Wait for the DOM to be ready and initiate the player
document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector('audio-tour-player');

  if (player.attributes.src) {
    console.log('Audio Player present and src attribute is set.');
  }

  // Inject the Capacitor logic
  player.storage = capacitorStorageDelegate;
  player.urlRewriter = capacitorUrlRewriter;
});