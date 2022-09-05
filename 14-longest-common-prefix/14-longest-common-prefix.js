/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const c = strs[0][i];
        for (const word of strs) {
            if (word[i] !== c) return prefix;
        }
        prefix += c;
    }
    return prefix;
};
