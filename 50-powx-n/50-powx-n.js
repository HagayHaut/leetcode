/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// divide and conquer
// x^n === (x^n/2)*(2^n/2)

// x^-n === 1/x^n
const myPow = function(x, n) {
    const helper = (x, n) => {
        if (n === 0) return 1;
        if (x === 0) return 0;
        
        let curr = helper(x*x, Math.floor(n/2));
        return n % 2 ? x * curr : curr;
    }
    
    const res = helper(x, Math.abs(n));
    return n < 0 ? 1 / res : res;
}


