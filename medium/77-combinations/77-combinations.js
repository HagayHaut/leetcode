/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
    const res = [];
    
    const dfs = (comb, x) => {
        if (comb.length >= k) {
            if (comb.length === k) res.push(comb);
            return;
        }
        
        for (let i = x; i <= n; i++) {
            dfs([...comb, i], i + 1);
        }
    }
    
    dfs([], 1);
    
    return res;
};