/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function(boxes) {
    let result = [];
    
    for (let i = 0; i < boxes.length; i++) {
        let sum = 0;
        for (let j = 0; j < boxes.length; j++) {
            if (i === j) continue;
            if (boxes[j] === '1') {
                sum += Math.abs(j - i);
            }
        }
        result[i] = sum;
    }
    
    return result;
};