/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// brute force is use decision tree 
// and increment count when target reach

// can avoid repeated work with memo
// => O(n * m) time & space

// can use dp tabulation/bottom up
// O()

// use dp array to store combinatioins per index
// dp[4] = dp[3] + dp[2] + dp[1]
const combinationSum4 = function(nums, target) {
    const dp = { 0 : 1} 
    
    for (let i = 1; i <= target; i++) {
        dp[i] = 0;
        nums.forEach(n => {
            dp[i] += (dp[i-n] || 0);
        })
    }
    return dp[target];
};