/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    let lastTrue = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= (lastTrue - i)) {
            lastTrue = i;
        }
    }
    return !lastTrue;
};
