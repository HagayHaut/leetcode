/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking dfs
const permute = function(nums) {
    const result = [];
    const n = nums.length;
    
    const dfs = (set = new Set()) => {
        if (set.size === n) {
            return result.push([...set]);
        }
        
        for (let i = 0; i < n; i++) {
            if (!set.has(nums[i])) {
                set.add(nums[i]);
                dfs(set);
                set.delete(nums[i]);
            }
        }
    }
    
    dfs();
    return result;
};