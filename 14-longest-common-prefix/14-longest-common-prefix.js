/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let result = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (const word of strs) {
            if (word[i] !== strs[0][i]) return result;
        }
        result += strs[0][i];
    }
    return result;
};
