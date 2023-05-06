/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    const isVowel = c => /[aeiou]/i.test(c);
    const chars = s.split('');
    const swap = (l, r) => {
        [chars[l], chars[r]] = [chars[r], chars[l]];
    }
    
    let l = 0, r = s.length - 1;
    
    while (l < r) {
        if (isVowel(s[l]) && isVowel(s[r])) {
            swap(l, r);
            l++;
            r--;
        }
        else if (isVowel(s[l])) r--;
        else if (isVowel(s[r])) l++;
        else l++, r--;
    }
    
    return chars.join('');
};