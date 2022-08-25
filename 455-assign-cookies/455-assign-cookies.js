/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);
    let fed = 0,
        i = 0,
        j = 0;
    while (j < s.length) {
        while (s[j] < g[i]) i++;
        if (i < g.length) fed++;
        i++;
        j++;
    }
    return fed;
};