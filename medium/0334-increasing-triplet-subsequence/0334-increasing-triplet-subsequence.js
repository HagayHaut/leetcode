/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function(nums) {
    let [one, two] = [Infinity, Infinity];
    for (const n of nums) {
        if (n <= one) one = n;
        else if (n <= two) two = n;
        else return true;
    }  
    return false;
};