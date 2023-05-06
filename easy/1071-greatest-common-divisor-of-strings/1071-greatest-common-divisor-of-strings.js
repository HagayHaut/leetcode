/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcd = (x, y) =>  y ? gcd(y, x % y) : x;


const gcdOfStrings = (s1, s2) => {
    if (!(s1 + s2 === s2 + s1)) return '';
    const gcdLen = gcd(s1.length, s2.length);
    return s1.slice(0, gcdLen);
};