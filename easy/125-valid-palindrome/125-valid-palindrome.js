/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let l = 0, r = str.length - 1; l < r; l++, r--) {
        if (str[l] !== str[r]) return false;
    }
    return true;
}