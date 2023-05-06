/**
 * @param {number[]} nums
 * @return {number}
 */
// iterate through twice
// first: swap each val with it's index (val - 1)
// second: find index where val isn't index + 1

const firstMissingPositive = function(nums, n = nums.length) {
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    for (let i = 0; i < n; i++) {
        while (
            nums[i] > 0 && 
            nums[i] < n && 
            nums[nums[i] - 1] !== nums[i]) 
        {
            swap(i, nums[i] - 1);
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    
    return n + 1;
};