/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    const dp = Array(nums.length).fill(false);
    dp[dp.length - 1] = true;
    let lastTrue = dp.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        const dist = lastTrue - i;
        if (nums[i] >= dist) {
            dp[i] = true;
            lastTrue = i;
        }
    }
    return dp[0];
};
