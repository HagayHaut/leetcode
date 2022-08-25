/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let maxSum = nums[0];
    let curSum = 0;
    nums.forEach(n => {
        curSum = Math.max(0, curSum);
        curSum += n;
        maxSum = Math.max(curSum, maxSum);
    })
    return maxSum;
};