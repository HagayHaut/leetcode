/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    const set1 = new Set(nums1),
          set2 = new Set(nums2);
    
    return [...set2].filter(n => set1.has(n));
};