function sortArrayByParity(nums: number[]): number[] {
    if (!nums.length) return nums;
    let l: number = 0;
    for (let r: number = 0; r < nums.length; r++) {
        if (!(nums[r] % 2)) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
    }
    return nums;
};