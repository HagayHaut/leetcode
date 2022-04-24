// STRING ALGORITHMS

// Translate to piglatin 
// 1. move all begining consonants to end, followed ny 'ay'
// 2. if starts with vowel, just add 'way'
// toPigLatin('javascipt')
// >> 'avascriptjay'
// to PigLatin('object')
// >> 'objectway'
function toPigLatin(str) {
  // Regex looking for any num of cons starting str, case insensitive
  const vowelRegex = /^[^aeiou]+/i
  // consonant(s) present in beginning
  if(vowelRegex.test(str)) {
    // .match() returns an array, in this case with only our starting consonants
    const consonants = str.match(vowelRegex);
    return str.slice(consonants[0].length) + consonants[0] + 'ay';
  }
  // volwel is presents at beginning
  else {
    return str + 'way';
  }
}

console.log(toPigLatin('slowly'))

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

// Convert string to opposite case
// toOppositeCase('Hello, Stranger!')
// >> 'hELLO, sTRANGER!'
function toOppositeCase(str) {
  const arr = str.split('');
  return arr.map(char => {
    if(char === char.toUpperCase()) {
      return char.toLowerCase();
    } else { 
      return char.toUpperCase(); 
    } 
  })
  .join('')
}

// Return a string in alphabetical order
// alphabetize('alphabetize')
// >> 'aabeehilptz'
function alphabetize(str) {
  return str.split('')
            .sort()
            .join('')
}
