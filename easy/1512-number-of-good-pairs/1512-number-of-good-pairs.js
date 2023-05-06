/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
    let counts = {},
        pairs = 0;
    
    nums.forEach(n => {
        if (counts[n]) pairs += counts[n];
        counts[n] = ++counts[n] || 1;
    })
    
    return pairs;
}