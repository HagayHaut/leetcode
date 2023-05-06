/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    const limit = 2**31 - 1;
    if (!s) return 0;
    
    let negative = false,
        out = 0;
    if (s[0] === '-') negative = true;
    else if (s[0] === '+') negative === false;
    else if (!isNumeric(s[0])) return 0;
    else out = s.charCodeAt(0) - '0'.charCodeAt(0);
    
    for (let i = 1; i < s.length; i++) {
        if (isNumeric(s[i])) {
            out = out*10 + s.charCodeAt(i) - '0'.charCodeAt(0);
            if (!negative && out >= limit) return limit;
            if (negative && out >= limit + 1) return -(limit + 1);
        } else {
            break;
        }
    }
    if (!negative) return out;
    else return -out;
};

function isNumeric(s) {
    return /\d/.test(s)
}