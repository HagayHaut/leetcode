/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
    const result = [];
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const left = nums[l]**2,
              right = nums[r]**2;
        if (left > right) {
            result.push(left);
            l++;
        }
        else {
            result.push(right);
            r--;
        }
    }
    return result.reverse();
};