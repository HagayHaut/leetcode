/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// do two binary searches
// go right @ target to find right edge
// go left second time to find left edge
const searchRange = function(nums, target) {
    const bs = (goLeft) => {
        let l = 0,
            r = nums.length - 1,
            res = -1;
        
        while (l <= r) {
            const m = ~~((l + r) / 2);
            if (nums[m] === target) {
                res = m;
                if (goLeft) r = m - 1;
                else l = m + 1;
            }
            else if (nums[m] < target) l = m + 1;
            else r = m - 1;
        }
        
        return res;
    }
    
    return [bs(true), bs(false)];
};