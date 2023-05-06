/**
 * @param {number[]} nums
 * @return {number}
 */

// max is either product of largest 3, 
// or smaller two and largest one
const maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    return Math.max(
        nums.slice(-3).reduce((a, b) => a * b, 1),
        [...nums.slice(0,2),nums[nums.length - 1]].reduce((a, b) => a * b, 1)
    );
};