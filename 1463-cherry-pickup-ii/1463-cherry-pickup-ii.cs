public class Solution 
{
    public int CherryPickup(int[][] grid) 
    {
        int m = grid.Length, n = grid[0].Length;
        int[,,] memo = new int[m,n,n];
        
        for (int r = 0; r < m; r++)
        {
            for (int c = 0; c < n; c++)
            {
                for (int c2 = 0; c2 < n; c2++)
                {
                    memo[r,c,c2] = -1;
                }
            }
        }
        
        return Dfs(0, 0, n - 1, grid, memo);
    }
    
    private int Dfs(int row, int col1, int col2, int[][] grid, int[,,] memo)
    {
        if (col1 < 0 || col1 >= grid[0].Length || col2 < 0 || col2 >= grid[0].Length)
            return 0; // out of bounds
        
        if (memo[row,col1,col2] != -1)   
            return memo[row,col1,col2]; // visited
        
        int result = 0;
        
        result += grid[row][col1];
        
        if (col1 != col2)
            result += grid[row][col2];
        
        if (row != grid.Length - 1)
        {
            int max = 0;
            for (int col1v2 = col1 - 1; col1v2 <= col1 + 1; col1v2++)
            {
                for (int col2v2 = col2 - 1; col2v2 <= col2 + 1; col2v2++)
                {
                    max = Math.Max(max, Dfs(row + 1, col1v2, col2v2, grid, memo));
                }
            }
            result += max;
        }
        
        memo[row,col1,col2] = result;
        return result;
    }
}