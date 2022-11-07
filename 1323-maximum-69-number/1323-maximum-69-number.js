/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = function(num) {
    const digits = [...`${num}`];
    const sixIdx = digits.indexOf('6');
    
    if (sixIdx === -1) return num;
    
    digits[sixIdx] = '9';
    return Number(digits.join(''));
};