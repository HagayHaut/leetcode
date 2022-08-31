/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let l = 0;
    
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== nums[r + 1]) {
            nums[l] = nums[r];
            l++;
        }
    }
    
    return l;
};