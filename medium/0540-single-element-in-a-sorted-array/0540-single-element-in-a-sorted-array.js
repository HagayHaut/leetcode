/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
    let n = nums.length, l = 0, r = n - 1;
    
    while (l <= r) {
        const m = l + ~~((r - l) / 2);
        if ((!m || nums[m] !== nums[m - 1]) &&
            (m === n - 1 || nums[m] !== nums[m + 1])) {
            return nums[m];
        }
        const leftSize = nums[m] === nums[m - 1] ? m - 1 : m;
        if (leftSize % 2) r = m - 1;
        else l = m + 1;
    }
};