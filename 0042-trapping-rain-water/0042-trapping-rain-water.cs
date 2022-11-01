public class Solution {
    public int Trap(int[] height) {
        int l = 0, r = height.Length - 1;
        int maxL = height[l], maxR = height[r];
        int water = 0;
        
        while (l < r)
        {
            if (height[l] < height[r])
            {
                l++;
                maxL = Math.Max(maxL, height[l]);
                water += maxL - height[l];
            }
            else 
            {
                r--;
                maxR = Math.Max(maxR, height[r]);
                water += maxR - height[r];
            }
        }
        
        return water;
    }
}