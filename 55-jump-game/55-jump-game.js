/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    let lastTrue = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        const dist = lastTrue - i;
        if (nums[i] >= dist) {
            lastTrue = i;
        }
    }
    return !lastTrue;
};
