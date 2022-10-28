public class Solution {
    public int NumIslands(char[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;
        int res = 0;
        int[,] directions = new int[,] {{1,0},{-1,0},{0,1},{0,-1}};
        
        bool isValid(int r, int c) {
            return r >= 0 && r < m && c >= 0 && c < n;
        }
        
        void flood(int r, int c) {
            if (isValid(r, c) && grid[r][c] == '1') {
                grid[r][c] = '0';
                for (int i = 0; i < 4; i++) {
                    flood(r + directions[i,0], c + directions[i,1]);
                }
            }
        }
        
        for (int r = 0; r < m; r++) {
            for (int c = 0; c < n; c++) {
                if (grid[r][c] == '1') {
                    flood(r, c);
                    res++;
                }
            }
        }
        
        return res;
    }
}