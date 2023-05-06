/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function(nums) {
    const len = nums.length,
          freq = {};
    nums.forEach(n => freq[n] = ++freq[n] || 1);
    return Object.keys(freq).filter(n => freq[n] > len/3);
};