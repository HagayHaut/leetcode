public class Solution 
{
    public bool ContainsNearbyDuplicate(int[] nums, int k) 
    {
        IDictionary<int, int> seen = new Dictionary<int, int>();
        
        for (int i = 0; i < nums.Length; i++)
        {
            if (seen.ContainsKey(nums[i]))
            {
                if (i - seen[nums[i]] <= k)
                {
                    return true;
                }
                seen[nums[i]] = i;
            }
            else 
            {
                seen.Add(nums[i], i);
            }
        }
        
        return false;
    }
}