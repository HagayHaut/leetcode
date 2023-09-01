/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    score.sort((a, z) => z[k] - a[k]);
    return score;
};