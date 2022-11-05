public class Solution 
{
    public int[][] FloodFill(int[][] image, int sr, int sc, int newColor) 
    {
        if (image[sr][sc] == newColor) return image;
        
        int m = image.Length;
        int n = image[0].Length;
        int oldColor = image[sr][sc];
        Func<int,int,bool> isValid = (r, c) => r >= 0 && c >= 0 && r < m && c < n;
        
        void flood(int r, int c)
        {
            if (isValid(r, c) && image[r][c] == oldColor)
            {
                image[r][c] = newColor;
                
                flood(r, c + 1);
                flood(r, c - 1);
                flood(r + 1, c);
                flood(r - 1, c);
            }
        }
        
        flood(sr, sc);
        
        return image;
    }
}