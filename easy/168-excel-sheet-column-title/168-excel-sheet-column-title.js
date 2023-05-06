/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(n) {
    let col = '';
    
    while (n > 0) {
        n--;
        col = String.fromCharCode(65 + (n % 26)) + col;
        n = Math.floor(n / 26)
    }
    
    return col;
};