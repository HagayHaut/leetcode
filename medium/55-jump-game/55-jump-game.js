/**
 * @param {number[]} nums
 * @return {boolean}
 */

// DP solution: work backwards
// and figure out smallest index that 
// can reach the last spot
// if that index is 0, return true


// O(n) time, O(1) space
const canJump = function(nums) {
    let lastTrue = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= (lastTrue - i)) {
            lastTrue = i;
        }
    }
    return !lastTrue;
};
