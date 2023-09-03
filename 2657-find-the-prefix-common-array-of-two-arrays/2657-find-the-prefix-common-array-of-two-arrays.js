/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// mark the visited values and scan back 
// to discover other matches O(n^2)
var findThePrefixCommonArray = function(A, B, n = A.length) {
    const res = [];
    const map = {};
    for (let i = 0; i < n; i++) {
        map[B[i]] ??= 0;
        map[B[i]]++;
        let combined = 0;
        for (let j = 0; j <= i; j++) {
            if (map[A[j]]) combined++;
        }
        res.push(combined);
    }
    return res;
};