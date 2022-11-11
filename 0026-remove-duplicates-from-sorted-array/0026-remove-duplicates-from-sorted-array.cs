public class Solution {
    public int RemoveDuplicates(int[] nums) {
        
        void swap(int l, int r) {
            int temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
        
        int l = 0;
        
        for (int r = 1; r < nums.Length; r++)
        {
            if (nums[l] != nums[r]) 
            {
                l++;
                swap(l, r);
            }
        }
        
        return l + 1;
    }
}