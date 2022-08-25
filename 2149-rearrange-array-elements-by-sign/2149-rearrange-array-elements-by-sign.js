/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
    const p = nums.filter(n => n > 0),
          n = nums.filter(n => n < 0),
          result = [];
    
    let i = 0;
    
    while (i < p.length) {
        result.push(p[i],n[i]);
        i++;
    }
    
    return result;
};