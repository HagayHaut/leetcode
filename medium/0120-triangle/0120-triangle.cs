// seems like tree traveral problem

// but there are overlapping subproblems:
// minPath[r][c] = triangle[r][c] + min(minPath[r + 1][c], minPath[r + 1][c + 1])

// can be simplified to 1D array:
// for each r
// minPath[c] = traingle[r][c] + min(minPath[c], minPath[c + 1]) 

public class Solution {
    public int MinimumTotal(IList<IList<int>> triangle) {
        int n = triangle.Count;
        int[] dp = triangle[triangle.Count - 1].ToArray();
        
        for (int r = n - 2; r >= 0; r--)
        {
            for (int c = 0; c <= r; c++)
            {
                dp[c] = triangle[r][c] + Math.Min(dp[c], dp[c + 1]);
            }
        }
        
        return dp[0];
    }
}