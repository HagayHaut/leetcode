/**
 * @param {number[]} arr
 * @return {number}
 */
const minSetSize = function(arr) {
    const counts = {};
    arr.forEach(n => counts[n] = ++counts[n] || 1);
    const vals = Object.values(counts);
    vals.sort((a, b) => b - a);
    
    let total = 0,
        res = 0;
    
    for (const val of vals) {
        total += val;
        res++;
        if (total >= arr.length / 2) return res;
    }
};