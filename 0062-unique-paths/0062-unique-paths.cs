public class Solution {
    public int UniquePaths(int m, int n) {
        int[] dp = Enumerable.Repeat(1, n).ToArray();
        
        for (int i = 0; i < m - 1; i++) {
            int[] row = new int[n];
            row[0] = 1;
            for (int j = 1; j < n; j++) {
                row[j] = dp[j] + row[j - 1];
            }
            dp = row;
        }
        
        return dp[dp.Length - 1];
    }
}