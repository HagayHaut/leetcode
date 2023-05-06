/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for (let [l,r] = [0,nums.length-1]; l <= r;) {
        const m = (l + r) >> 1;
        if (nums[m] === target) return m;
        nums[m] < target ? l = m + 1 : r = m - 1;
    }
    return -1;
};