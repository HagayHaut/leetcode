/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    nums.sort((a,b) => a - b);
    const len = nums.length;
    if (nums[0] !== 0) return 0;
    if (nums[len-1] !== len) return len;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
};
