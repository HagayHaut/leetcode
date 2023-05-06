public class Solution {
    public string LongestPalindrome(string s) {
        string result = "";
        int maxLen = 0;
        
        for (int i = 0; i < s.Length; i++) {
            // odd length
            int left = i;
            int right = i;
            while (left >= 0 && right < s.Length && s[left] == s[right]) {
                int curLen = right - left + 1;
                if (maxLen < curLen) {
                    maxLen = curLen;
                    result = s.Substring(left, curLen);
                }
                left--;
                right++;
            }
            
            // even length
            left = i;
            right = i + 1;
            while (left >= 0 && right < s.Length && s[left] == s[right]) {
                int curLen = right - left + 1;
                if (maxLen < curLen) {
                    maxLen = curLen;
                    result = s.Substring(left, curLen);
                }
                left--;
                right++;
            }
        }
        
        return result;
    }
}