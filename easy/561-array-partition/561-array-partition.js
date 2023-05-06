/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
    nums.sort((a, b) => b - a);
    let res = 0;
    for (let i = 1; i < nums.length; i += 2) {
        res += nums[i];
    }
    return res;
};