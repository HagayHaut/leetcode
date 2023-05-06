/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLengthOfOptimalCompression = function(s, k) {
    const memo = new Map();
    
    const backtrack = (i, prevChar, prevCharCount, k) => {
        if (k < 0) return Infinity;
        if (i === s.length) return 0;
        
        const key = `${i}-${prevChar}-${prevCharCount}-${k}`;
        if (memo.has(key)) return memo.get(key);
        
        if (s[i] === prevChar) {
            const incrementBy = [1, 9, 99].includes(prevCharCount) ? 1 : 0;
            memo.set(key, incrementBy + backtrack(i + 1, prevChar, prevCharCount + 1, k))
        }
        else {
            memo.set(key, Math.min(
                1 + backtrack(i + 1, s[i], 1 , k), // decision to keep char
                backtrack(i + 1, prevChar, prevCharCount, k - 1) // decision to delete
            ))
        }
        
        return memo.get(key);
    }
    
    return backtrack(0, '', 0, k);
};