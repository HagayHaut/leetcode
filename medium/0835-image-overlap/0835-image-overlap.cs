public class Solution {
    public int LargestOverlap(int[][] img1, int[][] img2) {
        int n = img1.Length;
        
        bool inbounds(int r, int c) {
            return r >= 0 && r < n && c >= 0 && c < n;
        }
        
        int helper(int xDiff, int yDiff) {
            int num = 0;
            
            for (int r = 0; r < n; r++) {
                for (int c = 0; c < n; c++) {
                    if (
                        inbounds(r + yDiff, c + xDiff) &&
                        img1[r + yDiff][c + xDiff] == 1 &&
                        img2[r][c] == 1
                    ) {
                        num++;
                    }
                }
            }
            
            return num;
        }
        
        int res = 0;
        
        for (int y = -n; y < n; y++) {
            for (int x = -n; x < n; x++) {
                res = Math.Max(res, helper(y, x));
            }
        }
        
        return res;
    }
}