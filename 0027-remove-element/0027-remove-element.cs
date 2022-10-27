public class Solution {
    public int RemoveElement(int[] nums, int val) {
        void swap(int l, int r) {
            int temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
        
        int l = 0;
        for (int r = 0; r < nums.Length; r++) {
            if (nums[r] != val) {
                swap(l, r);
                l++;
            }
        }
        
        return l;
    }
}