public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;
        IDictionary<char, int> freq = new Dictionary<char, int>();
        
        foreach (char c in s) {
            if (freq.ContainsKey(c)) {
                freq[c]++;
            } else {
                freq.Add(c, 1);
            }
        }
        
        foreach (char c in t) {
            if (!freq.ContainsKey(c) || freq[c] < 1) {
                return false;
            }
            freq[c]--;
        }
        
        return true;
    }
}