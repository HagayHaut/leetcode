public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        StringBuilder prefix = new StringBuilder();
        int minLength = int.MaxValue;
        
        foreach (var s in strs) {
            minLength = Math.Min(minLength, s.Length);
        }
        
        for (int i = 0; i < minLength; i++) {
            char c = strs[0][i];
            foreach (string str in strs) {
                if (str[i] != c) return prefix.ToString();
            }
            prefix.Append(c);
        }
        
        return prefix.ToString();
    }
}