/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function(longUrl) {
    const shortUrl = Buffer.from(longUrl, 'binary').toString('base64');
    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function(shortUrl) {
    const decoded = Buffer.from(shortUrl, 'base64').toString();
    return decoded;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */