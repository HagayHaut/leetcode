public class Solution {
    public bool IsPalindrome(int x) {
        int reverse = 0, temp = x;
        
        while (temp > 0) {
            reverse *= 10;
            reverse += temp % 10;
            temp /= 10;
        }
        
        return x == reverse;
    }
}