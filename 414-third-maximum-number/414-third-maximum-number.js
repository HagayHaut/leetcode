/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
    const uniqs = [...new Set(nums)].sort((a, b) => b - a);
    if (uniqs.length < 3) return uniqs[0];
    return uniqs[2]
};