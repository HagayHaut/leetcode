/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//   1 1 => (3)
//     1 => (1)
// + --- 
// 1 0 0 => (4)

const addBinary = function(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  const max = Math.max(aLen, bLen);
  let res = '';
  let carry = 0;
  let val = 0;
  for (var i = 0; i < max; i++) {
    val = Number(a[aLen - 1 - i] || 0) + 
          Number(b[bLen - 1 - i] || 0) + carry;
    carry = Math.floor(val / 2);
    res = (val % 2) + res;
  }
  if (carry) res = 1 + res;
  return res;
};