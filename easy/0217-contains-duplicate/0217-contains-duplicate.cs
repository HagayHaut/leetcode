public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet<int> uniqs = new HashSet<int>();
        
        foreach (int n in nums) {
            if (uniqs.Contains(n)) return true;
            uniqs.Add(n);
        }
        
        return false;
    }
}