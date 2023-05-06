public class Solution {
    public void Rotate(int[] nums, int k) {
        int[] res = new int[nums.Length];
        int len = nums.Length, i = 0;
        
        foreach (int n in nums)
        {
            res[(i + k) % len] = n;
            i++;
        }
        
        i = 0;
        
        foreach (int n in res)
        {
            nums[i] = n;
            i++;
        }
    }
}