/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let sum = Infinity;
    
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1,
            r = nums.length - 1;
        
        while (l < r) {
            const curSum = nums[i] + nums[l] + nums[r];
            if (Math.abs(target - sum) > Math.abs(target - curSum)) {
                sum = curSum;
            }
            curSum < target ? l++ : r--;
        }
    }
    
    return sum;
};