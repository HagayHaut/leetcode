public class Solution {
    public bool IsToeplitzMatrix(int[][] matrix) {
        int m = matrix.Length, n = matrix[0].Length;
        
        bool isInbounds(int r, int c) {
            return r >= 0 && c >= 0 && r < m && c < n;
        }
        
        for (int r = 0; r < m; r++)
        {
            int rr = r, cc = 0, val = matrix[r][0];
            
            while (isInbounds(rr + 1, cc + 1))
            {
                if (matrix[++rr][++cc] != val) return false;
            }
        }
        
        for (int c = 0; c < n; c++)
        {
            int rr = 0, cc = c, val = matrix[0][c];
            
            while (isInbounds(rr + 1, cc + 1))
            {
                if (matrix[++rr][++cc] != val) return false;
            }
        }
        
        return true;
    }
}