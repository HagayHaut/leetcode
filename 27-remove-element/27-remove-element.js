/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    if (!nums.length) return 0;
    let validSize = 0;
    for (let right = 0 ; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[validSize] = nums[right];
            validSize++;
        }
    }
    return validSize;
};

