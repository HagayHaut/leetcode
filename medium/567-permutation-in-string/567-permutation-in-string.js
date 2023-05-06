/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
    const freq = {};
    for (const c of s1) {
        freq[c] = ++freq[c] || 1;
    }
    let l = 0,
        r = s1.length - 1;
    
    while (r < s2.length) {
        const subF = {};
        for (let i = l; i <= r; i++) {
            subF[s2[i]] = ++subF[s2[i]] || 1;
        }
        if (compare(freq,subF)) return true;
        l++;
        r++;
    }
    
    return false;
};

function compare(f1, f2) {
    for (const key in f1) {
        if (!f2[key] || f2[key] !== f1[key]) {
            return false;
        }
    }
    return true;
}