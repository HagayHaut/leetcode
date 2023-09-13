/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (const words of strs) {
            if (words[i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};
