public class Solution {
    public int LongestPalindrome(string s) 
    {
        IDictionary<char, int> counts = new Dictionary<char, int>();
        
        foreach (char c in s)
        {
            if (!counts.ContainsKey(c))
            {
                counts.Add(c, 0);
            }
            counts[c]++;
        }
        
        bool flag = false;
        int res = 0;
        
        foreach (var entry in counts)
        {
            if (entry.Value % 2 == 0)
            {
                res += entry.Value;
            }
            else 
            {
                flag = true;
                res += (entry.Value - 1);
            }
        }
        
        return flag ? res + 1 : res;
    }
}