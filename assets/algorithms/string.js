// STRING ALGORITHMS

// Return missing letter from abcd... string. If none, return undefined
function fearNotLetter(str) {
    /* 1. starting at second char, check that each char code is one more than the char before it
       2. If it's not, return char from code of letter before +1
       3. if all are, return undefined
    */
      for(let i=1; i<str.length;i++) {
        if(str.charCodeAt(i) !== str.charCodeAt(i-1) + 1) {
          return String.fromCharCode(str.charCodeAt(i-1)+1)
        }
      }
      return undefined;
}

// Binary translator (decodes binary byte strings to english)
function binaryTranslator(str) {
      let binaryArr = str.split(' ');
    // convert each byte to decimal, use as character code
    // convert to string and return
      return binaryArr.map((elem) => String.fromCharCode(parseInt(elem,2))).join('');
}