/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// number of subsets for a set is 2^n
// most efficient solution is O(n * 2^n)
// use backtracking - kind of a tree problem
// have a descision at each node:
// include next node, or don't 

const subsets = function(nums) {
    const result = [],
          subset = [];
    
    const dfs = i => {
        if (i >= nums.length) {
            result.push([...subset]);
            return;
        }
        
        // decision to include
        subset.push(nums[i]);
        dfs(i + 1);
        
        // decision not to include
        subset.pop();
        dfs(i + 1);
    }
    dfs(0);
    
    return result;
};