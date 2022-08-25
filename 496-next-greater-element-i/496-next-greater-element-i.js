/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) {
    return nums1.map(n => {
        const otherIndex = nums2.indexOf(n);
        if (otherIndex === nums2.length - 1) return -1;
        for (let i = otherIndex + 1; i < nums2.length; i++) {
            if (nums2[i] > n) return nums2[i];
        }
        return -1;
    })
};