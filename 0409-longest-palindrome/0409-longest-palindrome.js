/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    const counts = {};
    for (const char of s) {
        counts[char] ||= 0; 
        counts[char]++;
    };
    let sum = 0;
    let flag = false;
    for (const count of Object.values(counts)) {
        if (count % 2 === 0) sum += count;
        else {
            sum += (count - 1);
            flag = true;
        }
    }
    return flag ? ++sum : sum;
}