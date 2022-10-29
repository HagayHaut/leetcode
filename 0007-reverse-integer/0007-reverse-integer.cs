public class Solution {
    public int Reverse(int x) {
        long reversed = 0;
        bool negative = x < 0;
        
        if (negative) x *= -1;
        
        while (x > 0) {
            reversed *= 10;
            reversed += x % 10;
            x /= 10;
        }
        
        if (negative) reversed *= -1;
        
        if (reversed >= int.MaxValue) return 0;
        
        int revInt = (int)reversed;
        
        if (negative && revInt > 0) {
            return 0;
        }
        
        return revInt;
    }
}