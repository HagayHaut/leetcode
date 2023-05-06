/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const freqMap = {};
    nums.forEach(n => freqMap[n] = ++freqMap[n] || 1);
    const counts = Object.entries(freqMap);
    counts.sort((a, b) => b[1] - a[1]);
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(counts[i][0])
    }
    return result;
};