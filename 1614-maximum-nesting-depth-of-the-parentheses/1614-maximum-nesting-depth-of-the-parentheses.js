/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function(s) {
    let open = 0,
        nested = {char: '', open: 0};
    
    for (const c of s) {
        if (c === '(') open++;
        if (c === ')') open--;
        if (open > nested.open) {
            nested = {char: c, open};
        }
    }
    
    return nested.open;
};