public class Solution {
    public int MaxArea(int[] height) {
        int maxVol = 0;
        
        int l = 0;
        int r = height.Length - 1;
        
        while (l < r) {
            int curVol = (r - l) * Math.Min(height[l], height[r]);
            maxVol = Math.Max(maxVol, curVol);
            if (height[l] < height[r]) {
                l++;
            } else {
                r--;
            }
        }
        
        return maxVol;
    }
}