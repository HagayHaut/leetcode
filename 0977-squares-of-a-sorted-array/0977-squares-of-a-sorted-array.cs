public class Solution 
{
    public int[] SortedSquares(int[] nums) 
    {
        int[] res = new int[nums.Length];
        int l = 0, r = nums.Length - 1, i = 0;
        
        while (l <= r)
        {
            int sqLeft = nums[l]*nums[l];
            int sqRight = nums[r]*nums[r];
            if (sqLeft > sqRight)
            {
                res[i] = sqLeft;
                l++;
            }
            else {
                res[i] = sqRight;
                r--;
            }
            i++;
        }
        
        return res.Reverse().ToArray();
    }
}