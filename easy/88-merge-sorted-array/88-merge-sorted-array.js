/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    // get last index of nums1
    let last = m + n - 1;
    
    // merging in reverse order
    while (m && n) {
        if (nums1[m-1] > nums2[n-1]) {
            nums1[last] = nums1[m-1];
            m--;
        }
        else { 
            nums1[last] = nums2[n-1];
            n--;
        };
        last--;
    }
    while (n > 0) {
        nums1[last] = nums2[n-1];
        n--;
        last--;
    }
};