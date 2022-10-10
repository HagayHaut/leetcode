class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        mod = 1000000007
        dp = [[0] * (target + 1) for _ in range(n + 1)]
        dp[0][0] = 1
        for i in range(1, n + 1):
            for t in range(i, target + 1):
                if k < t:
                    dp[i][t] = dp[i][t-1] - dp[i-1][t-k-1] + dp[i-1][t-1]
                else:
                    dp[i][t] = dp[i][t-1] + dp[i-1][t-1]
                dp[i][t] %= mod
        return dp[-1][-1]
