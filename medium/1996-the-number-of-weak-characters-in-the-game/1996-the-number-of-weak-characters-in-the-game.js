/**
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = function(properties) {
    // sort attack decreasing, if equal defense increasing
    properties.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    let max = 0;
    let weak = 0;
    for (const [_, def] of properties) {
        if (max > def) weak++;
        max = Math.max(max, def);
    }
    return weak;
};