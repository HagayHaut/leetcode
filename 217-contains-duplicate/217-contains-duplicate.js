/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const uniques = new Set();
    
    for (const num of nums) {
        if (uniques.has(num)) return true;
        
        uniques.add(num);
    }
    
    return false;
};