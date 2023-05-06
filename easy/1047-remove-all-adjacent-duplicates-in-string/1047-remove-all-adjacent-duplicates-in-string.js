/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function(s) {
    if (!s) return '';
    const stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        stack[stack.length - 1] === s[i] ?
            stack.pop() :
            stack.push(s[i]);
    }
    return stack.join('');
};