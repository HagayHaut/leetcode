/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (num) {
  const dp = [0]
  for (let i = 1; i <= num; i++) {
    if ((i & 1) === 0) {
      dp[i] = dp[i >> 1]
    } else {
      dp[i] = dp[i - 1] + 1
    }
  }
  return dp
}

