/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function(s) {
    const stack = [];
    for (const c of s) {
        if (c === '*') stack.pop();
        else stack.push(c);
    }
    return stack.join('');
};