/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
    const stack = [];
    for (const c of s) {
        if (c !== ']') {
            stack.push(c);
        }
        else {
            let curr = '';
            while (stack[stack.length - 1] !== '[') {
                curr = stack.pop() + curr;
            }
            stack.pop();
            let repeated = '',
                int = '';
            while (/\d/.test(stack[stack.length - 1])) {
                int = stack.pop() + int;
            }
            int = parseInt(int);
            while (int) {
                repeated += curr;
                int--;
            }
            stack.push(repeated);
        }
    }
    return stack.join('')
};