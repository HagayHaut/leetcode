/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = function(s) {
    return s.trim().split(/\s+/g).reverse().join(' ')
}