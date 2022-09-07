/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function(n) {
    const result = Array(n).fill().map(_ => Array(n).fill(0));
    
    let curr = 0,
        left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1;
    
    while (curr < n*n) {
        // going right
        for (let i = left; i <= right; i++) {
            curr++
            result[top][i] = curr;
        }
        top++;
        
        // going down
        for (let i = top; i <= bottom; i++) {
            curr++;
            result[i][right] = curr;
        }
        right--;
        
        // going left
        for (let i = right; i >= left; i--) {
            curr++;
            result[bottom][i] = curr;
        }
        bottom--;
        
        // going up
        for (let i = bottom; i >= top; i--) {
            curr++;
            result[i][left] = curr;
        }
        left++;
    }
    
    return result;
};