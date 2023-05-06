/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(A, first) {
    const res = [first];
    A.forEach((n, i) => res.push(n ^ res[i]));
    return res;
};