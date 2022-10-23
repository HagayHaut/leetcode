/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const idx = nums[i] - 1;
        if (nums[i] !== nums[idx]) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            i--;
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return [nums[i], i + 1];
    }
};