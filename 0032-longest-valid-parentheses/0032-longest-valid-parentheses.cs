public class Solution {
    public int LongestValidParentheses(string s) 
    {
        int n = s.Length;
        int maxans = 0;
        var dp = new int[n];
        for (int i = 1; i < n; i++) {
            if (s[i] == ')') {
                if (s[i - 1] == '(') {
                    dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
                } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == '(') {
                    dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
                }
                maxans = Math.Max(maxans, dp[i]);
            }
        }
        return maxans;
    }
}