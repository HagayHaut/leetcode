/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
    if (nums.length === 1) return 0;
    if (nums.length === 0) return -1;
    const sum = nums.reduce((a, b) => a + b);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - nums[i] - leftSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};