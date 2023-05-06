function findKthLargest(nums: number[], k: number): number {
    const sorted = mergeSort(nums);
    
    return sorted[k-1];
};

function mergeSort(arr: number[]): number[] {
    if (arr.length === 1) return arr;
    
    const m: number = arr.length >> 1;
    const left: number[] = mergeSort(arr.slice(0,m));
    const right: number[] = mergeSort(arr.slice(m));
    
    return merge(left, right);
}

function merge(a1: number[], a2: number[]):number[] {
    const merged: number[] = [];
    let i = 0, j = 0;
    while (i < a1.length && j < a2.length) {
        if (a1[i] > a2[j]) merged.push(a1[i]), i++;
        else merged.push(a2[j]), j++;
    }
    while (i < a1.length) merged.push(a1[i++]);
    while (j < a2.length) merged.push(a2[j++]);
    
    return merged;
}

