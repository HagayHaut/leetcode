public class Solution {
    public int MinPathSum(int[][] grid) {
        
        int safeGet(int r, int c) {
            return (c >= 0 && r >= 0) ? grid[r][c] : int.MaxValue;
        }
        
        int r = 0;
        foreach (int[] row in grid)
        {
            int c = 0;
            foreach (int val in row)
            {
                if (c != 0 || r != 0)
                {
                    grid[r][c] += Math.Min(safeGet(r, c - 1), safeGet(r - 1, c));
                }
                c++;
            }
            
            r++;
        }
        
        return grid[grid.Length - 1][grid[0].Length - 1];
    }
}