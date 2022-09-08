function canJump(nums: number[]): boolean {
    let canReachEnd: number = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= canReachEnd - i) canReachEnd = i;
    }
    return canReachEnd === 0;
};