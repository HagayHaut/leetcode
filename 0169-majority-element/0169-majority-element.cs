public class Solution {
    public int MajorityElement(int[] nums) {
        IDictionary<int, int> map = new Dictionary<int, int>();
        
        foreach (var n in nums) {
            if (map.ContainsKey(n)) {
                map[n]++;
            } else {
                map.Add(n, 1);
            }
        }
        
        int majElement = 0, majCount = 0;
        
        foreach (var n in map.Keys) {
            if (map[n] > majCount) {
                majCount = map[n];
                majElement = n;
            }
        }
        
        return majElement;
    }
}