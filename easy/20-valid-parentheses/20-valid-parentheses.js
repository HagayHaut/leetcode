/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
   const brackets = {
       '(': ')',
       '{': '}',
       '[': ']'
   }
   const stack = [];
   for (const bracket of s) {
       if (brackets[bracket]) {
            stack.push(brackets[bracket]); 
       } else {
           if (stack.pop() !== bracket) return false;
       }
   }
    return !stack.length
};