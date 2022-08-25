/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stackS = [],
          stackT = [];
    
    for (const c of s) {
        c === '#' ? stackS.pop() : stackS.push(c);
    }
    for (const c of t) {
        c === '#' ? stackT.pop() : stackT.push(c);
    }
    return stackS.join('') === stackT.join('');
};