/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = function(s) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        res.push(i % 2 ? String.fromCharCode(s[i-1].charCodeAt() + (s[i]*1)) : s[i]);
    }
    return res.join('');
};