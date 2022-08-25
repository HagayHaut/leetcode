/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function(key, message) {
    const map = {};
    const filtered = [...new Set(key.replace(/\s+/g, ''))];
    for (let i = 0; i < 26; i++) {
        map[filtered[i]] = getCharFromNum(i);
    }
    map[' '] = ' ';
    let res = '';
    for (const c of message) {
        res += map[c];
    }
    
    return res;
};

function getCharFromNum(num) {
    const code = 'a'.charCodeAt(0);
    return String.fromCharCode(code + num);
}