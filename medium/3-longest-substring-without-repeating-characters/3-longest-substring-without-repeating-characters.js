/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let set = new Set(),
        res = 0,
        l = 0;
    for (let r = 0; r < s.length; r++) {
        if (set.has(s[r])) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            };
        }
        set.add(s[r]);
        res = Math.max(res, set.size);
    }
    return res;
};