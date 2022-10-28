public class Solution {
    public void MoveZeroes(int[] nums) {
        void swap(int l, int r) {
            int temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
        
        int l = 0;
        for (int r = 0; r < nums.Length; r++) {
            if (nums[r] != 0) {
                swap(l, r);
                l++;
            }
        }
    }
}