public class Solution 
{
    public int[][] FloodFill(int[][] image, int sr, int sc, int newColor) 
    {
        if (image[sr][sc] == newColor) return image;
        
        int m = image.Length;
        int n = image[0].Length;
        int oldColor = image[sr][sc];
        List<List<int>> directions = new()
        {
            new() {1, 0},
            new() {-1, 0},
            new() {0, 1},
            new() {0, -1},
        };
        Func<int,int,bool> isValid = (r, c) => r >= 0 && c >= 0 && r < m && c < n;
        
        void flood(int r, int c)
        {
            if (isValid(r, c) && image[r][c] == oldColor)
            {
                image[r][c] = newColor;
                
                directions.ForEach(d => flood(r + d[0], c + d[1]));
            }
        }
        
        flood(sr, sc);
        
        return image;
    }
}