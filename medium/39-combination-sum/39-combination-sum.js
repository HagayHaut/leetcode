/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// backtracking decision tree problem
const combinationSum = function(candidates, target) {
    const combinations = [];
    
    const dfs = (comb, curSum, index) => {
        if (curSum > target) return;
        if (curSum === target) return combinations.push([...comb]);
        
        for (let i = index; i < candidates.length; i++) {
            const curVal = candidates[i];
            dfs([...comb, curVal], curSum + curVal, i);
        }
    }
    
    dfs([], 0, 0);
    
    return combinations;
};