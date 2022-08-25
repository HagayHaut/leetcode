/**
 * @param {number} n
 * @return {string[]}
 */

// only add open parenthese if:
// openCount < n
// only add closing parentheses if:
// closeCount < OpenCount

// do it with a stack, recursively
const generateParenthesis = function(n) {
    const stack = [],
          res = [];
    
    const backtrack = (openN, closeN) => {
        if (openN === closeN && closeN === n) {
            res.push(stack.join(''));
            return;
        }
        
        if (openN < n) {
            stack.push('(');
            backtrack(openN + 1, closeN);
            // backtrack call and pop
            stack.pop();
        }
        
        if (closeN < openN) {
            stack.push(')');
            backtrack(openN, closeN + 1);
            stack.pop();
        }
    }
    
    backtrack(0,0);
    
    return res;
};