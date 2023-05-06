/**
 * @param {number[]} changed
 * @return {number[]}
 */
const findOriginalArray = function(changed) {
    if (changed.length % 2) return [];
    changed.sort((a, b) => a - b);
    
    const freqs = new Map();
    const res = [];
    
    const decrementFreqOf = n => {
        const count = freqs.get(n);
        count > 1 
            ? freqs.set(n, count - 1) 
            : freqs.delete(n);
    }
    
    changed.forEach(n => {
        if (!freqs.has(n / 2)) {
            freqs.set(n, (freqs.get(n) ?? 0) + 1);
        } else {
            res.push(n / 2);
            decrementFreqOf(n / 2);
        }
    })
    
    return freqs.size ? [] : res;
};

