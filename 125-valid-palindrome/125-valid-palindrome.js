/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let l = 0,
        r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
}