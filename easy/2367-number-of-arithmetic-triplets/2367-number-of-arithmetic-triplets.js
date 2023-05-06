/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function(nums, diff) {
    const set = new Set(nums);
    let res = 0;
    nums.forEach(n => (set.has(n + diff) && set.has(n - diff)) && res++);
    return res;
};