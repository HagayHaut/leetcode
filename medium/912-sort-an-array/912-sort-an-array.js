/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) {
    return mergeSort(nums);
};

function merge(a1, a2) {
    let merged = [],
        i = 0,
        j = 0;
    
    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) merged.push(a1[i++]);
        else merged.push(a2[j++]);
    }
    
    while (i < a1.length) {
        merged.push(a1[i++]);
    }
    
    while (j < a2.length) {
        merged.push(a2[j++]);
    }
    
    return merged;
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2),
          left = mergeSort(arr.slice(0,mid)),
          right = mergeSort(arr.slice(mid));
    return merge(left,right);
}