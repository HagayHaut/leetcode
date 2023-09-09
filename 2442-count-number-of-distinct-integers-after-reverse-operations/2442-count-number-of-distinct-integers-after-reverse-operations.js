/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    const set = new Set();
    for (const num of nums) {
        set.add(num);
        set.add(reverseInt(num));
    }
    return set.size;
};

function reverseInt(n) {
    let r = 0;
    while (n) {
        r = r * 10 + n % 10;
        n = ~~(n / 10);
    }
    return r;
}