/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function(nums, k) {
    let sum = 0;
    const map = new Map([[0, -1]]);
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(k !== 0) sum %= k;
        if(map.has(sum)) {
            if(i - map.get(sum) > 1) {
                return true;
            } 
        } else {
                map.set(sum, i);
        }
    }
    return false;
};