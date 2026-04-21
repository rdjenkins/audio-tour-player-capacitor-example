/** File and Data caching utilities
 * As used by the Celtic Quiet Places app (built with capacitor)
 * 
 * Author: Dean Jenkins, dean@celticquietplaces.com
 * (c) 2026 Celtic Quiet Places.
 */

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export function MD5(d) { var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase(); } function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }

const blobToBase64 = (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
});

// updates or creates the local store of a fetched file
async function updateFetch(remoteData, url, type = "json") {
    const filename = MD5(url) + '.' + type;
    console.log("Saving new (" + type + ") fetch call. " + filename)
    if (type === 'json') {remoteData = JSON.stringify(remoteData)}
    if (['mp3', 'ogg', 'wav', 'jpg', 'png', 'webp'].includes(type)) {
        // CONVERT BINARY TO BASE64
        remoteData = await blobToBase64(remoteData);
    }
    if (type === 'pmtiles') { alert("New offline map has downloaded."); }
    await Filesystem.writeFile({
        path: filename,
        data: remoteData,
        directory: Directory.Data,
        ...(type === 'json' || type === 'html' ? { encoding: 'utf8' } : {})
    });
}

export async function loadData(url, type = "json", update = true) {
    // Map our shorthand to standard Content-Type headers
    const mimeTypes = {
        'json': 'application/json',
        'html': 'text/html',
        'text': 'text/plain',
        'xml': 'application/xml',
        'pmtiles': 'application/x-pmtiles',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'svg': 'image/svg+xml',
        'webp': 'image/webp',
        'gif': 'image/gif',
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        // add more as needed
    };

    // Fallback to text/plain if the type isn't in our list
    const contentType = mimeTypes[type] || 'text/plain';

    // Fire and forget background update
    if (update) {
        if (type === "pmtiles") {
            await getUpdatedFetch(url, type); // pmtiles can be large and we want to wait to set the version number
        } else {
            getUpdatedFetch(url, type);            
        } 
    }

    try {
        const result = await Filesystem.readFile({
            path: MD5(url) + '.' + type,
            directory: Directory.Data,
            ...(['json', 'html', 'svg', 'text'].includes(type) ? { encoding: 'utf8' } : {})
        });

        console.log(`Returning local ${type} as Response object`);

        if (['mp3', 'ogg', 'wav', 'jpg', 'png', 'webp'].includes(type)) {
            result.data = await (await fetch(`data:application/octet-stream;base64,${result.data}`)).blob();
        }

        return new Response(result.data, {
            status: 200,
            headers: { 'Content-Type': contentType }
        });

    } catch (error) {
        console.log("No local data, falling back to online fetch");
        return fetch(url);
    }
}

async function getUpdatedFetch(url, type = "json") {
    try {
        let remoteData
        const response = await fetch(url);
        if (type === "json") {
            remoteData = await response.json();
        }
        if (type === "html") {
            remoteData = await response.text();
        }
        if (type === "svg") {
            remoteData = await response.text();
        }
        if (type === "pmtiles") {
            remoteData = await response.blob();
        }
        if (type === "jpg" || type === "png" || type === "webp" || type === "gif") {
            remoteData = await response.blob();
        }
        if (type === "mp3" || type === "ogg" || type === "wav") {
            remoteData = await response.blob();
        }
        //        const remoteData = await response.json();
        await updateFetch(remoteData, url, type);
    } catch (error) {
        console.log("Error fetching remote data: ", error);
    }
}

/**
 * Attach offline caching to any <img> element.
 * Call this after setting .src, or pass the URL and let it find/create the element.
 *
 * @param {HTMLImageElement} imgEl  - The image element to cache and update
 * @param {string} url              - The image URL to fetch and cache
 * @param {string} [format='jpg']   - Format hint passed to loadData()
 */
export function cacheImage(imgEl, url, format = 'jpg') {
    loadData(url, format)
        .then(response => response.blob())
        .then(blob => {
            const objectUrl = URL.createObjectURL(blob);
            imgEl.src = objectUrl;
        })
        .catch(err => {
            console.warn(`Could not cache image (${url}):`, err);
            // imgEl.src stays as the original online URL — graceful degradation
        });
}

/**
 * Find all <img> elements within a container and apply cacheImage() to each.
 * Safe to call immediately after innerHTML is set.
 *
 * @param {HTMLElement} container - The element whose descendant images to cache
 * @param {string} [format='jpg']
 */
export function cacheImagesIn(container) {
    container.querySelectorAll('img[src]').forEach(imgEl => {
        // Skip blob: URLs (already cached) and data: URIs
        if (!imgEl.src.startsWith('blob:') && !imgEl.src.startsWith('data:')) {
            const format = getImageFormat(imgEl.src);
            cacheImage(imgEl, imgEl.src, format);
        }
    });
}

function getImageFormat(url) {
    const ext = url.split('?')[0].split('.').pop().toLowerCase();
    return ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif'].includes(ext)
        ? (ext === 'jpeg' ? 'jpg' : ext)
        : 'jpg'; // sensible fallback
}
