/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const counts = {};
    nums.forEach(n => counts[n] = ++counts[n] || 1);
    for (const n in counts) {
        if (counts[n] > nums.length / 2) return n;
    }
};