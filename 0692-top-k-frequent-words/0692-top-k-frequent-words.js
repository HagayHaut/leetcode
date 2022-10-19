/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
    const freqMap = {};
    words.forEach(word => freqMap[word] = ++freqMap[word] || 1);
    return Object.keys(freqMap)
            .sort((a, b) => {
                if (freqMap[a] === freqMap[b]) {
                    return b < a ? 1 : -1 
                }
                return freqMap[b] - freqMap[a];
            })
            .slice(0, k)
};