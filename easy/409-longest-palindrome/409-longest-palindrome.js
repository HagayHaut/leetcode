/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    const counts = {};
    for (const char of s) {
        counts[char] = ++counts[char] || 1;
    };
    const values = Object.values(counts);
    let sum = 0;
    let flag = false;
    values.forEach(count => {
        if (count % 2 === 0) sum += count;
        else {
            sum += (count - 1);
            flag = true;
        }
    })
    return flag ? ++sum : sum;
}