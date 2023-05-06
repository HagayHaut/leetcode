/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */

const executeInstructions = function(n, startPos, s) {
    const result = [];
    
    for (let i = 0; i < s.length; i++) {
        let moves = 0,
            [r, c] = startPos;
        
        for (let j = i; j < s.length; j++) {
            
            if (s[j] === 'R') c++;
            else if (s[j] === 'L') c--;
            else if (s[j] === 'D') r++;
            else r--;
            
            if (r < 0 || c < 0 || r >= n || c >= n) {
                break;
            }
            
            moves++;
        }
        
        result.push(moves);
    }
    
    return result;
};