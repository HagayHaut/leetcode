function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b);
    const res: number[] = [];
    nums.forEach((n, i) => n === target && res.push(i));
    return res;
};