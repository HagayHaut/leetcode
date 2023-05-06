/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s) return 0;
    
    s = s.replace(/\s/g, '');
    
    const stack = [];
    
    let curr = 0,
        op = '+',
        n = 0;
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        
        if (/\d/.test(c)) n = n * 10 + parseInt(c); // '14' -> 1 * 10 + 4
        if (/\D/.test(c) || i === s.length - 1) {
            if (op === '+') stack.push(n);
            if (op === '-') stack.push(-n);
            if (op === '*') stack.push(stack.pop() * n);
            if (op === '/') stack.push(~~(stack.pop() / n));
            op = c;
            n = 0;
        }
    }
    
    return stack.reduce((a, b) => a + b);
};