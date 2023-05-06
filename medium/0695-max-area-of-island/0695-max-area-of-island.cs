public class Solution {
    public int MaxAreaOfIsland(int[][] grid) {
        int m = grid.Length, n = grid[0].Length;
        Func<int,int,bool> isValid = (r, c) => r >= 0 && c >= 0 && r < m && c < n;
        int maxArea = 0;
        
        int dfs(int r, int c) {
            if (!isValid(r, c) || grid[r][c] == 0)
            {
                return 0;
            }
            
            grid[r][c] = 0;
            int islandSize = 1;
            
            islandSize += dfs(r, c + 1);
            islandSize += dfs(r, c - 1);
            islandSize += dfs(r + 1, c);
            islandSize += dfs(r - 1, c);
            
            return islandSize;
        }
        
        for (int r = 0; r < m; r++)
        {
            for (int c = 0; c < n; c++)
            {
                if (grid[r][c] == 1)
                {
                    maxArea = Math.Max(maxArea, dfs(r, c));
                }
            }
        }
        
        return maxArea;
    }
}