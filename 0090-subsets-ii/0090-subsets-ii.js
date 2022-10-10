/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
    const result = new Set();
    if (!nums.length) return nums;
    nums.sort((a, b) => a - b);
    result.add('[]');

    for (const n of nums) {
        const prevSets = [...result].map(JSON.parse);
        
        for (const prevSet of prevSets) {
            const curSet = [...prevSet, n];
            result.add(JSON.stringify(curSet));
        }
    }
    return [...result].map(JSON.parse);
};