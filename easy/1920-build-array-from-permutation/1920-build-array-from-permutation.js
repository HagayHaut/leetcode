/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function(nums) {
    const result = [];
    nums.forEach((n, i) => result[i] = nums[nums[i]]);
    return result;
};