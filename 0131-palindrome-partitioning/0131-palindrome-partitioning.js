/**
 * @param {string} s
 * @return {string[][]}
 */

// use backtracking -> try all possible partitions



const partition = function(s) {
    const res = [];
    
    const isPalindrome = (l, r) => {
        while (l < r) {
            if (s[l++] !== s[r--]) return false;
        }
        return true;
    }
    
    const backtrack = (i, part = []) => {
        if (i >= s.length) {
            return res.push(part);
        };
        
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(i, j)) {
                backtrack(j + 1, [...part, s.slice(i, j + 1)]);
            }
        }
    }
    
    backtrack(0);
    return res;
};