/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if (nums.length < 2) return nums;
    let l = 0;
    for (let r = 1; r < nums.length; r++) {
        if (nums[l] !== nums[r]) {
            l++;
            [nums[l], nums[r]] = [nums[r], nums[l]];
        }
    }
    
    return l + 1;
};