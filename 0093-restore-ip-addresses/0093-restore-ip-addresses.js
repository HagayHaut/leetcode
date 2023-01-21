/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
    const res = [];
    
    const isValid = (start, len) => {
        return len === 1 ||
            (s[start] !== '0' && 
             (len < 3 || 
              s.slice(start, start + len) <= '255'));
    }
    
    const backtrack = (start, dots) => {
        const remLen = s.length - start,
              remNums = 4 - dots.length;
        
        if (remLen > remNums * 3 || remLen < remNums) {
            return;
        }
        
        if (dots.length === 3) {
            if (isValid(start, remLen)) {
                console.log('shittt')
                let ip = '';
                let last = 0;
                dots.forEach(dot => {
                    ip += s.slice(last, last + dot);
                    last += dot;
                    ip += '.';
                })
                ip += s.slice(start);
                res.push(ip);
                return;
            }
        }
        
        for (let i = 1; i <= 3 && i <= remLen; i++) {
            dots.push(i);
            if (isValid(start, i)) {
                backtrack(start + i, dots);
            }
            dots.pop();
        }
    }
    
    backtrack(0, []);
    
    return res;
};