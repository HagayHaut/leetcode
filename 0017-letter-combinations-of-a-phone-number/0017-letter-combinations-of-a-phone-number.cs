public class Solution 
{
    public IList<string> LetterCombinations(string digits) 
    {
        if (digits.Length == 0)
        {
            return new List<string>();
        }
        
        IDictionary<char, string> phone = new Dictionary<char, string> 
        {
            {'2', "abc"},
            {'3', "def"},
            {'4', "ghi"},
            {'5', "jkl"},
            {'6', "mno"},
            {'7', "pqrs"},
            {'8', "tuv"},
            {'9', "wxyz"}
        };
        
        IList<string> res = new List<string>();
        
        void dfs(int i, IList<char> comb)
        {
            if (i == digits.Length)
            {
                res.Add(new string(comb.ToArray()));
                return;
            }
            
            foreach (char c in phone[digits[i]])
            {
                comb.Add(c);
                dfs(i + 1, comb);
                comb.RemoveAt(comb.Count - 1);
            }
        }
        
        dfs(0, new List<char>());
        return res;
    }
}