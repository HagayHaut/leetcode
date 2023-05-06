public class Solution {
    public bool IsToeplitzMatrix(int[][] matrix) {
        int m = matrix.Length, n = matrix[0].Length;
        
        bool isInbounds(int r, int c) {
            return r >= 0 && c >= 0 && r < m && c < n;
        }
        
        bool checkDiagonal(int r, int c) {
            int val = matrix[r][c];
            while (isInbounds(r + 1, c + 1))
            {
                if (matrix[++r][++c] != val)
                {
                    return false;
                }
            }
            return true;
        }
        
        for (int r = 0; r < m; r++)
        {
            if (!checkDiagonal(r, 0))
            {
                return false;
            }
        }
        
        for (int c = 0; c < n; c++)
        {
            if (!checkDiagonal(0, c))
            {
                return false;
            }
        }
        
        return true;
    }
}