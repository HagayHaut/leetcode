/**
 * @param {number[]} nums
 * @return {boolean}
 */

// use a freq map
const isPossible = function(nums) {
    const counts = {},
          end = {};
    nums.forEach(n => counts[n] = ++counts[n] || 1);
    
    for (const n of nums) {
        if (!counts[n]) continue;
        
        counts[n]--;
        
        if (end[n-1]) {
            end[n-1]--;
            end[n] = ++end[n] || 1;
        }
        else if (counts[n+1] && counts[n+2]) {
            counts[n+1]--;
            counts[n+2]--;
            end[n+2] = ++end[n+2] || 1
        }
        else {
            return false;
        }
    }
    
    return true;
};