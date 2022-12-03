/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
    
    const freqToStr = ([c, f]) => c.repeat(f);
    
    const freqEntries = Object.entries(
        [...s].reduce((obj, c) => {
            obj[c] = obj[c] ? obj[c] + 1 : 1;
            return obj;
        }, {})
    );
    
    return freqEntries
            .sort((a, z) => z[1] - a[1])
            .map(freqToStr)
            .join('');
};