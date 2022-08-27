class Solution {
    private nums: number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    reset(): number[] {
        return this.nums;
    }

    shuffle(): number[] {
        const randNums: number[] = [...this.nums];
        
        for (let i = 0; i < this.nums.length; i++) {
            const randIdx = i + Math.floor(Math.random() * (this.nums.length - i));
            this.swap(randIdx, i, randNums);
        }
        
        return randNums;
    }

    swap(i, j, arr): void {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */