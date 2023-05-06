/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const len = needle.length
    for(let i = 0; i < haystack.length; i++) {
        if(haystack.slice(i, i+len) === needle) return i;
        if(i > haystack.length - len) break;
    }
    return -1;
};