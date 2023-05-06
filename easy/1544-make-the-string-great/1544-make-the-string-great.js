/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function(s) {
    const isUpper = c => c === c.toUpperCase();
    const stack = [];
    
    for (const c of s) {
        if (isUpper(c)) {
            if (c.toLowerCase() === stack[stack.length - 1]) {
                stack.pop();
            }
            else stack.push(c);
        }
        else {
            if (c.toUpperCase() === stack[stack.length - 1]) {
                stack.pop();
            }
            else stack.push(c);
        }
    }
    
    return stack.join('');
};