public class Solution {
    public int MinInsertions(string s) {
        int n = s.Length;
        char[] charArray = s.ToCharArray();
        Array.Reverse(charArray);
        string sReversed = new string(charArray);
        int[,] memo = new int[n + 1, n + 1];
        
        for (int i = 0; i <= n; i++)
        {
            for (int j = 0; j <= n; j++)
            {
                memo[i,j] = -1;
            }
        }
        
        return n - LongestCommonSubsequence(s, sReversed, n, n, memo);
    }
    
    private int LongestCommonSubsequence(string s1, string s2, int m, int n, int[,] memo)
    {
        if (m == 0 || n == 0) return 0;
        if (memo[m,n] != -1) return memo[m,n];
        
        if (s1[m - 1] == s2[n - 1])
            return memo[m,n] = 1 + LongestCommonSubsequence(s1, s2, m - 1, n - 1, memo);
        
        return memo[m,n] = Math.Max(LongestCommonSubsequence(s1, s2, m - 1, n, memo), 
                                   LongestCommonSubsequence(s1, s2, m, n - 1, memo));
    }
}