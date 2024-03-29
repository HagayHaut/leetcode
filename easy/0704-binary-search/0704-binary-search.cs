public class Solution {
    public int Search(int[] nums, int target) 
    {
        int low = 0, high = nums.Length;
        while (low <= high && low < nums.Length)
        {
            int mid = (low + high) >> 1;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}