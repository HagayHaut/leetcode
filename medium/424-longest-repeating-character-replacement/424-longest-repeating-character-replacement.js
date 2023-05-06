/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// sliding window -> shift right & open window
// until condition (windowLen - count[char] <= k)
// is false, then shift left and repeat
const characterReplacement = function(s, k) {
    // count chars in window
    const count = {}
    // maxf stores highest val in count
    let l = 0, maxf = 0, result = 0
    for(let r = 0; r < s.length; r++) {
        count[s[r]] = ++count[s[r]] || 1;
        // Update the character frequency
        maxf = Math.max(maxf, count[s[r]])
        // close window, shifting left pointer
        // until window is valid, decrementing window count
        while((r-l+1) - maxf > k) {
                count[s[l]] -= 1
                l++
          }
        result = Math.max(result, r - l +1)
    }
    return result
};