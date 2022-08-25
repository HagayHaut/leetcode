/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
    if (n <= 0) return '';
    
    let res = '1';
    
    while (n > 1) {
        let curr = '';
        
        for (let i = 0; i < res.length; i++) {
            let count = 1;
            while (i < res.length-1 && res[i] === res[i+1]) {
                count++;
                i++;
            }
            curr += `${count}${res[i]}`;
        }
        res = curr;
        n--;
    }
    
    return res;
};