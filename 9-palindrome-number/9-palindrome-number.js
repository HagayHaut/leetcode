/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
        if (x < 0) return false;
    
    let div = 1;
    
    while (x >= div*10) div *= 10;
    
    while (x) {
        const left = Math.floor(x / div),
              right = x % 10;
        
        if (left !== right) return false;
        x = Math.floor((x % div) / 10);
        div /= 100;
    }
    
    return true;
};