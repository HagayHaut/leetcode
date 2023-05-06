public class Solution {
    public int LongestPalindrome(string[] words) {
        IDictionary<string, int> map = new Dictionary<string, int>();
        int unpaired = 0, res = 0;
        
        string reverse(string s) {
            char[] chars = s.ToCharArray();
            Array.Reverse(chars);
            return new string(chars);
        }
        
        foreach (string word in words)
        {
            if (!map.ContainsKey(word))
            {
                map.Add(word, 0);
            }
            
            if (word[0] == word[1])
            {
                if (map[word] > 0)
                {
                    unpaired--;
                    map[word]--;
                    res += 4;
                }
                else
                {
                    map[word]++;
                    unpaired++;
                }
            }
            else {
                
                string revWord = reverse(word);
                
                if (!map.ContainsKey(revWord))
                {
                    map.Add(revWord, 0);
                }
                
                if (map[revWord] > 0)
                {
                    res += 4;
                    map[revWord]--;
                }
                else {
                    map[word]++;
                }
            }
            
        }
        
        if (unpaired > 0)
        {
            res += 2;
        }
        
        return res;
    }
}