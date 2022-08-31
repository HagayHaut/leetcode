/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) return false;
    
    let div = 1;
    while (x >= div * 10) div *= 10;
    
    while (x) {
        const left = ~~(x / div);
        const right = x % 10;
        if (left !== right) return false;
        x = ~~((x % div) / 10);
        div /= 100;
    }
    
    return true;
};