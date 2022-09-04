/**
 * @param {number[]} nums
 * @return {boolean}
 */

// dp approach
// work backwards => either add value, or don't
// for [1,5,11,5] 
// start with 5
// set is now { 0, 5 } for adding, and not
// next is 11
// set is now { 0, 5, 11, 16 }
// then 5 
// { 0, 5, 11, 16, 10, 21 }
// then 1
// { 0, 5, 11, 16, 10, 21, 1, 6, 12, 17, 22 }
// now you have the list of possible sums
// if it contains 11, return true, else false
// (you can assume if there is one 11, there is another)

// O(n * sum(nums)) time
// O(sum(nums)) space
const canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b);
    if (sum % 2) return false;
    
    let dp = new Set();
    dp.add(0);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        // can't add to it while iterating so make another
        const nextDP = new Set();
        dp.forEach(t => {
            // decision to add current, and not to
            nextDP.add(t + nums[i]);
            nextDP.add(t);
            if (t + nums[i] === sum / 2) return true;
        })
        dp = nextDP;
    }
    
    return dp.has(sum / 2);
};































