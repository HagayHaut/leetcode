public class Solution {
    public int Divide(int dividend, int divisor) {
        if (divisor == 0 || (dividend == int.MinValue && divisor == -1))
            return int.MaxValue;
        var sign = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;
        var quotient = 0;
        var absDividend = Math.Abs((long)dividend);
        var absDivisor = Math.Abs((long)divisor);
        while (absDividend >= absDivisor) {
            var shift = 0;
            while (absDividend >= (absDivisor << shift))
                shift++;
            quotient += (1 << (shift - 1));
            absDividend -= absDivisor << (shift - 1);
        }
        return sign == -1 ? -quotient : quotient;
    }
}