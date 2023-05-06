/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    
    const dfs = (comb, sum, index) => {
        if (sum === target) return res.push(comb);
        
        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }
            if (candidates[i] + sum <= target) {
                dfs([...comb, candidates[i]], sum + candidates[i], i + 1);
            }
        }
    }
    
    dfs([], 0, 0);
    
    return res;
};