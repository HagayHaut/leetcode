public class Solution {
    public void ReverseString(char[] s) {
        int r = s.Length - 1;
        for (int l = 0; l < r; l++)
        {
            char temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            r--;
        }
    }
}