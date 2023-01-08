public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int l = 0;
        
        for (int r = 1; r < nums.Length; r++)
        {
            if (nums[l] != nums[r]) 
            {
                l++;
                Swap(l, r, nums);
            }
        }
        
        return l + 1;
    }
    
    void Swap(int l, int r, int[] nums)
    {
        int temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
    }
}