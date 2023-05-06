/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let result = '',
        maxLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        // odd length palindrome
        let l = i,
            r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            const currLen = r - l + 1;
            if (maxLen < currLen) {
                maxLen = currLen;
                result = s.slice(l, r + 1);
            }
            l--;
            r++;
        }
        
        // even length palindrome
        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
             const currLen = r - l + 1;
            if (maxLen < currLen) {
                maxLen = currLen;
                result = s.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }
    return result;
};

// brute force O(n^3)
// above solution O(n^2)