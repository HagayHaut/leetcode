// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false





// my solution
function XO(str) {
    const xRegex = /x/gi
    const oRegex = /o/gi
    if(!str) return true;
    return xRegex.test(str) && oRegex.test(str) ?
    str.match(xRegex).length === str.match(oRegex).length :
    false
}


// cleaner solution
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}