public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int[] res = new int[2];
        Dictionary<int, int> seen = new Dictionary<int, int>();
        
        for (int i = 0; i < nums.Length; i++) {
            if (seen.ContainsKey(target - nums[i])) {
                res[0] = i;
                res[1] = seen[target - nums[i]];
                return res;
            }
            seen[nums[i]] = i;
        }
        return res;
    }
}