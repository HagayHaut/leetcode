/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
    const uniqs = [...new Set(nums)].sort((a, b) => b - a);
    return uniqs.length < 3 ? uniqs[0] : uniqs[2];
};