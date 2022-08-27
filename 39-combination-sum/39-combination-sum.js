/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// backtracking decision tree problem
const combinationSum = function(candidates, target) {
    const res = [];
    
    const dfs = (comb, sum, index) => {
        if (sum > target) return;
        if (sum === target) {
            res.push([...comb]);
            return;
        }
         
        for (let i = index; i < candidates.length; i++) {
            // choose
            comb.push(candidates[i]);
            // explore
            dfs(comb, sum + candidates[i], i);
            // unchoose
            comb.pop();
        }
    }
    
    dfs([], 0, 0);
    
    return res;
};