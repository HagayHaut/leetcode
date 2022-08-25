/**
 * @param {number[]} nums
 * @return {number}
 */

// like other rotated sorted array problems:
// need to find out if you're in 
// the left or right portions
// If left, go right. If right, go left
const findMin = function(nums) {
    let l = 0,
        r = nums.length - 1,
        min = nums[0];
    
    while (l <= r) {
        if (nums[l] < nums[r]) {
            min = Math.min(min, nums[l])
            break;
        };
        const m = Math.floor((l + r) / 2);
        min = Math.min(min, nums[m])
        // in left sorted portion, so search right
        if (nums[m] >= nums[l]) {
            l = m + 1;
        }
        
        // in right sorted portion so sort left
        
        else r = m - 1;
    }
    
    return min;
};