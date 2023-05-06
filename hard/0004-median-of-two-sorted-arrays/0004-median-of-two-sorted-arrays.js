/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    let totalLen = nums1.length + nums2.length;
    let i = 0;
    let j = 0;
    let curr;
    let last;

    while (i + j <= totalLen/2) {
        if (curr !== undefined) {
            last = curr;
        }
        let x1 = nums1[i];
        let x2 = nums2[j];
        if (x1 === undefined) {
            curr = x2;
            j++;
        } else if (x2 === undefined) {
          curr = x1;
          i++;
        } else if (x1 < x2) {
          curr = x1;
          i++;
        } else {
          curr = x2;
          j++;
        }
    }
    return totalLen % 2 ? curr : (last + curr) / 2;
};