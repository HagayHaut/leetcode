/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */


const findAnagrams = function(s, p) {
    const freq = {},
          result = [];
    for (const c of p) {
        freq[c] = ++freq[c] || 1;
    }
    
    let subFreq = {};
    for (let i = 0; i < p.length; i++) {
        subFreq[s[i]] = ++subFreq[s[i]] || 1;
    }
    if (compare(freq, subFreq)) result.push(0);
    
    
    for (let i = p.length; i < s.length; i++) {
        const drop = s[i-p.length],
              curr = s[i];
        if (subFreq[drop] === 1) delete subFreq[drop];
        else subFreq[drop]--;
        subFreq[curr] = ++subFreq[curr] || 1;
        if (compare(subFreq, freq)) result.push(i + 1 - p.length);
    }
    
    return result;
};

function compare(a, b) {
    for (const key in a) {
        if (a[key] !== b[key]) return false;
    }
    
    return true;
}