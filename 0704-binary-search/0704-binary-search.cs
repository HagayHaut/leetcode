public class Solution {
    public int Search(int[] nums, int target) 
    {
        int low = 0, high = nums.Length;
        if (high == 0) return -1;
        while (low <= high && low < nums.Length)
        {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}