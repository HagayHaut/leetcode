public class Solution 
{
    public int MaxScoreWords(string[] words, char[] letters, int[] score) 
    {
        var count = new int[26];
        foreach (var c in letters) ++count[c - 'a'];
        return Dfs(words, 0, count, score);
    }
    
    private int Dfs(string[] words, int s, int[] count, int[] score)
    {
        var res = 0;
        for (int i = s; i < words.Length; i++)
        {
            var earned = UseWord(words, i, count, score);
            if (earned > 0)
                res = Math.Max(res, earned + Dfs(words, i + 1, count, score));
            UnuseWord(words, i, count);
        }
        return res;
    }
    
    private int UseWord(string[] words, int i, int[] count, int[] score)
    {
        bool isValid = true;
        int earned = 0;
        foreach (var c in words[i])
        {
            if (--count[c - 'a'] < 0) isValid = false;
            earned += score[c - 'a'];
        }
        return isValid ? earned : -1;
    }
    
    private void UnuseWord(string[] words, int i, int[] count)
    {
        foreach (var c in words[i]) count[c - 'a']++;
    }
}