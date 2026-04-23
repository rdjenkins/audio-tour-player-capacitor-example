# Example

An example using the [audio-tour-player package](https://www.npmjs.com/package/audio-tour-player).

[![npm version](https://img.shields.io/npm/v/audio-tour-player)](https://www.npmjs.com/package/audio-tour-player)

## How to run

```
gh repo clone rdjenkins/audio-tour-player-capacitor-example
cd audio-tour-player-capacitor-example
npm install
npm run dev
```

Note - not quite ready yet ... needs testing on native platforms (work in progress)

The module capacitor-bridge.js

* Uses MD5 hashing to create unique filenames for cached audio files on native platforms.
* Uses the Cache API for web caching.
* Provides a unified interface for checking cache status, preloading assets, and clearing cache.
* Rewrites URLs to point to local cached versions when available, falling back to remote URLs when not.