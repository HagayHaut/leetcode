/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let rev = 0, copy = x;
    
    while (copy > 0) {
        rev *= 10;
        rev += copy % 10;
        copy = ~~(copy / 10);
    }
    
    return rev === x;
};