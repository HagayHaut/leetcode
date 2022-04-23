// OBJECT ALGORITHMS

// Roman numeral converter (integer to roman numeral)
function convertToRoman(num) {
     const numerals = {
       1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X',
       40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 
       400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
     }
     const decimalKeys = Object.keys(numerals).reverse();
     let romanized = '';
     decimalKeys.forEach(key => {
      while(key<=num) {
        romanized += numerals[key];
        num -= key;
      }
     });
     return romanized;
}

// ROT-13 Caesar's cipher (codes and decodes strings)
function rot13(str) {
    // declare object containing key to letter opposite in letter wheel
      const cipher = {
        A: 'N', N: 'A', B: 'O', O: 'B', C: 'P', 
        P: 'C', D: 'Q', Q: 'D', E: 'R', R: 'E', 
        F: 'S', S: 'F', G: 'T', T: 'G', H: 'U', 
        U: 'H', I: 'V', V: 'I', J: 'W', W: 'J', 
        K: 'X', X: 'K', L: 'Y', Y: 'L', M: 'Z', 
        Z: 'M',
      }
      let result = '';
      for(let i = 0; i < str.length; i++) {
       if(str.charAt(i) == ' ' 
          || str.charAt(i) == '?'
          || str.charAt(i) == '.'
          || str.charAt(i) == '!') 
         { result += str.charAt(i); }
        else {
         for(const key in cipher) {
          if(str.charAt(i) == key) 
            { result += cipher[key]; }
         }
        }
      }
    // return final string
      return result;
}