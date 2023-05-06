/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const map = {};
    for (const c of magazine) {
        map[c] = ++map[c] || 1;
    }
    for (const c of ransomNote) {
        if (!map[c]--) return false;
    }
    return true;
};

