/**
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = (nums) => {
    let res = 0, subArr = 0;
    nums.forEach(n => {
        subArr += n ? -subArr : 1;
        res += subArr;
    })
    return res;
};