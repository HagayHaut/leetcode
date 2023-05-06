/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = function(nums) {
    nums.sort((a,b) => a - b);
    
    let max = 0,
        l = 0,
        r = nums.length - 1;
    
    while (l < r) {
        max = Math.max(max, nums[l++] + nums[r--]);
    }
    
    return max;
};