/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */


const pivotArray = function(nums, pivot) {
    const less = [],
          equal = [],
          more = [];
    nums.forEach(n => {
        if (n < pivot) less.push(n)
        else if (n > pivot) more.push(n)
        else equal.push(n);
    })
    
    return [...less, ...equal, ...more];
};