/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    
    arr.forEach((n, i) => {
        sum += Math.floor(((i + 1) * (arr.length - i) + 1) / 2) * n;
    })
    
    return sum;
};