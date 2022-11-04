public class Solution {
    public string ReverseVowels(string s) 
    {
        
        bool isVowel(char c) 
        {
            return "AEIOUaeiou".IndexOf(c) > -1;
        }
        
        char[] chars = s.ToCharArray();
        
        void swap(int l, int r) 
        {
            char temp = chars[l];
            chars[l] = chars[r];
            chars[r] = temp;
        }
        
        int l = 0, r = s.Length - 1;
        
        while (l < r) 
        {
            bool vowelL = isVowel(s[l]);
            bool vowelR = isVowel(s[r]);
            
            if (vowelL && vowelR)
            {
                swap(l, r);
                l++;
                r--;
            }
            else if (vowelL) r--;
            else if (vowelR) l++;
            else 
            {
                l++;
                r--;
            }
        }
        
        return new string(chars);
    }
}