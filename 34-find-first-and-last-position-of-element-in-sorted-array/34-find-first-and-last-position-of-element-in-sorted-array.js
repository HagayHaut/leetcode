/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// do two binary searches
// go right @ target to find right edge
// go left second time to find left edge
const searchRange = function(nums, target) {
    const bs = (leftBias) => {
        let l = 0,
            r = nums.length - 1,
            i = -1;
        
        while (l <= r) {
            const m = (l + r) >> 1;
            if (target > nums[m]) l = m + 1;
            else if (target < nums[m]) r = m - 1;
            else {
                i = m;
                if (leftBias) r = m - 1;
                else l = m + 1;
            }
        }
        
        return i;
    }
    
    return [bs(true), bs(false)];
};