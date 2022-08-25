/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// Intuitive way is use binary search for
// target index, then sliding window w l & r
// to get k closest - O((log n) + k)

// there is easier, way less intuitive solution
// O((log n-k) + k)
// do binary search, for a WINDOW
// search for contiguous blocks at a time
// edge cases make it difficult
const findClosestElements = function(arr, k, x) {
    let l = 0,
        r = arr.length - k;
    
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        if (x - arr[m] > arr[m + k] - x) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return arr.slice(l, l + k)
};