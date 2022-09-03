/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const numsSameConsecDiff = function(n, k) {
    // precomputed edge case for only leading 0
    if (n === 1) return [0,1,2,3,4,5,6,7,8,9];
    
    const result = [];
    
    const backtrack = (curr) => {
        if (curr.length === n) {
            result.push(curr*1);
            return;
        }
        for (let i = 0; i < 10; i++) {
            if (!curr.length && !i) continue;
            
            const lastDigit = curr.length ? curr.slice(-1) : null;
            if (Math.abs(lastDigit*1 - i) === k || !lastDigit) {
                backtrack(curr + i);
            }
        }
    }
    
    backtrack('');
    
    return result;
};