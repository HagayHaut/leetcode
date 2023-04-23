public class Solution {
    public int NumberOfArrays(string s, int k) {
        int m = s.Length, n = k.ToString().Length;
        var mod = 1000000007;
        
        var dp = new int[m + 1];
        dp[0] = 1;
        
        for (int i = 0; i < m; i++)
        {
            if (s[i] == '0') continue;
            for (int j = i; j < m; j++)
            {
                var curr = long.Parse(s.Substring(i, j - i + 1));
                if (curr > k) break;
                dp[j + 1] = (dp[j + 1] + dp[i]) % mod;
            }
        }
    
        return dp[m];
    }
}