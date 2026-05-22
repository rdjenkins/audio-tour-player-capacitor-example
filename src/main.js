import { capacitorStorageDelegate, capacitorJsonLoader ,capacitorUrlRewriter} from './capacitor-bridge.js';


document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector('audio-tour-player');
  if (player) {
    // timing is everything in capacitor!
    // Need a 'remove and replace the src' trick 
    // In Celtic Quiet Places we build the attribute in the HTML dynamically
    // so the src is not hardwired as in this example in index.html
    let srcValue = null;
    if (player.hasAttribute('src')) {
      srcValue = player.getAttribute('src');
      player.removeAttribute('src');
    }

    import('audio-tour-player').then(() => {
      // Inject Capacitor logic before setting src
      console.log('Injecting Capacitor logic into audio-tour-player.');
      player.storage = capacitorStorageDelegate;
      player.urlRewriter = capacitorUrlRewriter;
      player.customLoader = capacitorJsonLoader;

      // now set the src attribute if it was originally present
      // audio-tour-player will detect the changed src and initialise properly
      // when offline
      if (srcValue) {
        player.setAttribute('src', srcValue);
        console.log('Audio Player present and src attribute is set to ' + srcValue);
      }
    });
  }
});