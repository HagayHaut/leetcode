/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let l = 0, 
        r = nums.length - 1;
    while (l < r) {
        if (nums[l] + nums[r] === target) {
            return [l + 1, r + 1];
        }
        nums[l] + nums[r] < target ? l++ : r--;
    }
};