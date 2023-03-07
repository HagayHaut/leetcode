/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// instead of nesting another loop from 3sum
// use recursion => kSum
// but solve for 4

const fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const sums = [],
          quad = [];
    
    const kSum = (k, start, trgt) => {
        if (k !== 2) {
            // leave 3 values at end to form quad
            for (let i = start; i< nums.length - k + 1; i++) {
                // avoid dups
                if (i > start && nums[i] === nums[i - 1]) continue;
                
                // backtracking
                quad.push(nums[i]);
                kSum(k - 1, i + 1, trgt - nums[i]);
                quad.pop();
            }
        }
        // base case -> Two Sum II
        else {
            let l = start,
            r = nums.length - 1;
        
            while (l < r) {
                if (nums[l] + nums[r] < trgt) l++;
                else if (nums[l] + nums[r] > trgt) r--;
                else {
                    sums.push([...quad, nums[l], nums[r]]);
                    l++;
                    // avoid dups
                    while (l < r && nums[l] === nums[l-1]) l++;
                }
            }
        }
    }
    
    kSum(4, 0, target);
    
    return sums;
};