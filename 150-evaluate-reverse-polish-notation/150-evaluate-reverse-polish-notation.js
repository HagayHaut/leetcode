/**
 * @param {string[]} tokens
 * @return {number}
 */


// reverse polish notation:
// go left to right, when get to operator, 
// apply that operator to all nums before
// and replace them with the result:
// 2   1  +  3  *
// 2 + 1     3  *
// 3        3  *
// 3 * 3
// 9

// a stack
const evalRPN = function(tokens) {
    const stack = [];
    
    tokens.forEach(x => {
        if (x === '+') {
            stack.push(stack.pop() + stack.pop());
        }
        else if (x === '-') {
            const a = stack.pop();
            stack.push(stack.pop() - a);
        }
        else if (x === '*') {
            stack.push(stack.pop() * stack.pop());
        }
        else if (x === '/') {
            const a = stack.pop();
            stack.push(Math.trunc(stack.pop() / a));
        }
        else {
            stack.push(parseInt(x));
        }
    })
    
    return stack[0];
};