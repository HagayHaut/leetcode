/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking dfs
const permute = function(nums) {
    const res = [];

    const dfs = function (res, arr, nums) {
        const len = nums.length;
        let tmp1, tmp2;

        if (!len) return res.push(arr);
  
        for (let i = 0; i < len; i++) {
            tmp1 = [...arr];
            tmp1.push(nums[i]);

            tmp2 = [...nums];
            tmp2.splice(i, 1);

            dfs(res, tmp1, tmp2);
      }
    };
    
    dfs(res, [], nums);
    return res;
};