/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if (curr in seen && i - seen[curr] <= k) {
            return true;
        }
        seen[curr] = i;
    }
    return false;
};