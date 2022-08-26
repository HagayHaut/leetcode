/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    
    const result = [nums[0]];
    
    nums.forEach((n, i) => {
        if (i) {
            result[i] = result[i-1] + n;
        }
    })
    
    return result;
};