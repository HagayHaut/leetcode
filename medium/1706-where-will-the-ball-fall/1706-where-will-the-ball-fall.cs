public class Solution {
    public int[] FindBall(int[][] grid) {
        
        int m = grid.Length, n = grid[0].Length;
        
        int followPath(int c) {
            int r = 0;
            
            while (r < m)
            {
                int cur = grid[r][c];
                if (cur == 1)
                {
                    if (c == n - 1 || cur != grid[r][c + 1])
                    {
                        return -1;
                    }
                    c++;
                }
                
                else {
                    if (c == 0 || cur != grid[r][c - 1])
                    {
                        return -1;
                    }
                    c--;
                }
                r++;
            }
            
            return c;
        }
        
        int[] result = new int[n];
        
        for (int c = 0; c < n; c++) 
        {
            result[c] = followPath(c);
        }
        
        return result;
    }
}