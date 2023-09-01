/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let P = Array(m).fill(0).map((_, i) => i + 1);
    console.log(P);
    const res = [];
    for (const num of queries) {
        const index = P.indexOf(num);
        res.push(index);
        P.splice(index, 1);
        P.unshift(num);
    }
    return res;
};