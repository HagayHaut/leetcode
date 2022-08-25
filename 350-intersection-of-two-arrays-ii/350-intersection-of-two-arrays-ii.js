/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    
    // make sure nums2 is always longer
    if (nums1.length > nums2.length) {
        intersect(nums2, nums1);
    }
    
    // make nums1 frequency map
    const map = new Map();
    nums1.forEach(n => {
        map.set(n, map.get(n) + 1 || 1)
    })
    
    // push n into result if in map
    // and decrement map value
    const result = [];
    nums2.forEach(n => {
        const count = map.get(n) || 0;
        if (count) {
            result.push(n);
            map.set(n, count-1);
        }
    })
    
    return result;
};