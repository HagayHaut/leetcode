/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
    return nums.map(n => {
        let count = 0;
        nums.forEach(num => num < n && count++);
        return count;
    })
};