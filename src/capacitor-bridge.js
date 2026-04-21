import { Capacitor } from '@capacitor/core';
import { MD5, loadData } from './fetchandstore';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export const capacitorStorageDelegate = {
    getStatus: async (urls, cacheName) => {
        // Use fetchandstore.js to check if files are on disk
        const progress = await checkBatchStatus(urls, cacheName);
        return {
            percent: progress.percentage,
            isComplete: progress.isDone
        };
    },
    preload: async (urls, cacheName, onProgress) => {
        // Trigger your module's download/save logic
        return await downloadFiles(urls, cacheName, (p) => {
            onProgress(p.percentage);
        });
    },
    clear: async (cacheName) => {
        return await deleteFolder(cacheName);
    }
};

export async function capacitorUrlRewriter(url) {
    // Convert a standard path to a device-internal path
    // e.g., 'audio/stop1.mp3' -> 'capacitor://localhost/_capacitor_file_/var/...'
    if (Capacitor.isNativePlatform()) {
        return getInternalPath(url);
    } else {
        return url;
    }
};

async function checkBatchStatus(urls,cacheName) {
    // function using fetchandstore.js to check if files are on disk and return progress
    return
}

async function downloadFiles(urls, cacheName, onProgress) {
    // function using fetchandstore.js to download/save files and call onProgress with percentage updates
    return
}

async function deleteFolder(cacheName) {
    // function using fetchandstore.js to delete the folder and its contents
    return
}

export async function getInternalPath(url) {
    // 1. Extract the extension (e.g., 'mp3') safely handling query params
    const extension = url.split('.').pop().split(/[?#]/)[0];
    
    // 2. Generate the filename: MD5 hash + suffix
    const filename = `${MD5(url)}.${extension}`;

    try {
        // 3. Check if the file exists in Directory.Data
        await Filesystem.stat({
            path: filename,
            directory: Directory.Data
        });

        // 4. If we didn't throw an error, the file exists. 
        // Get the native URI (e.g., file://... or content://...)
        const uriResult = await Filesystem.getUri({
            path: filename,
            directory: Directory.Data
        });

        // 5. Convert native URI to a WebView-compatible URL
        // (This handles the capacitor://localhost/ transition for you)
        //return Capacitor.convertFileSrc(uriResult.uri);
        return (Capacitor.isNativePlatform() ? uriResult.uri : filename)

    } catch (error) {
        // 6. File not found or Filesystem error - fall back to remote URL
        console.log(`audio-tour-player: ${filename} not found locally, using remote.`);
        return url;
    }
}