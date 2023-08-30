/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for (let i = 2; i < n - 1; i++) {
        if (!isPalindrome(n.toString(i))) {
            return false;
        }
    }
    return true;
};

function isPalindrome(str) {
    for (let l = 0, r = str.length - 1; l < r; l++, r--) {
        if (str[l] !== str[r]) return false;
    }
    return true;
}