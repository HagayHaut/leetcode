/**
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = function(nums) {
    let closest = nums[0];
    nums.forEach(n => {
        if (Math.abs(n) < Math.abs(closest)) {
            closest = n;
        }
        if (Math.abs(closest) === Math.abs(n)) {
            closest = Math.max(closest, n);
        }
    })
    return closest;
};