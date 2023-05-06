public class Solution {
    public int RomanToInt(string s) {
        IDictionary<char, int> map = new Dictionary<char, int>
        {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };
        
        int res = map[s[s.Length - 1]];
        
        for (int i = 0; i < s.Length - 1; i++)
        {
            int cur = map[s[i]];
            int nxt = map[s[i + 1]];
            res += cur < nxt ? -cur : cur;
        }
        
        return res;
    }
}