/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const numsSameConsecDiff = function(n, k) {
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