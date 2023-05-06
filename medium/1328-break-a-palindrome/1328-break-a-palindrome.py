class Solution:
    def breakPalindrome(self, palindrome: str) -> str:
        if len(palindrome) < 2:
            return ''
        res = list(palindrome)
        for i in range(len(res) // 2):
            if res[i] != 'a':
                res[i] = 'a'
                return ''.join(res)
        
        res[-1] = 'b'
        return ''.join(res)