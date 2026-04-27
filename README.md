# Example

An example for capacitor using the [audio-tour-player](https://www.npmjs.com/package/audio-tour-player) package.

Uses [![npm version](https://img.shields.io/npm/v/audio-tour-player)](https://www.npmjs.com/package/audio-tour-player)

## How to run

### Browser Dev

```
gh repo clone rdjenkins/audio-tour-player-capacitor-example
cd audio-tour-player-capacitor-example
npm install
npm run dev
```

... then 

### Android

```
npm run build
npx cap sync
npx cap open android
```

### iOS

```
npm run build
npx cap sync
npx cap open ios
```

## testing ...

This is not quite ready yet!

* works in a browser ✅
* works in Android simulator ✅
* works on Android device ✅
* needs testing on iOS (work in progress)

## The module capacitor-bridge.js

* Means that full capacitor logic doesn't need to be maintained inside audio-tour-player meaning it can stay small for the web.
* Uses MD5 hashing to create unique filenames for cached files on native platforms.
* Assumes 'everything is a blob' ... and why not?
* Uses the Cache API for web caching.
* Uses @capacitor/filesystem for native file storage.
