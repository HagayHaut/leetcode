public class Solution {
    public int LengthOfLongestSubstring(string s) {
        HashSet<char> uniqs = new HashSet<char>();
        int res = 0;
        int left = 0;
        for (int right = 0; right < s.Length; right++) {
            while (uniqs.Contains(s[right])) {
                uniqs.Remove(s[left]);
                left++;
            }
            uniqs.Add(s[right]);
            res = Math.Max(res, uniqs.Count);
        }
        return res;
    }
}