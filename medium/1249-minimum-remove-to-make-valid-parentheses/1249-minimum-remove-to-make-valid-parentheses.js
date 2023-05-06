/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function(s) {
    let subres = '',
        open = 0;
    
    for (const c of s) {
        if (c === '(') open++;
        if (c === ')') {
            if (open < 1) continue;
            open--;
        }
        subres += c;
    }
    
    let res = '';
    
    for (let i = subres.length - 1; i >= 0; i--) {
        if (subres[i] === '(' && open-- > 0) continue;
        res = subres[i] + res;
    }
    
    return res;
};