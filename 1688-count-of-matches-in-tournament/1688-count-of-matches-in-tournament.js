/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function(n) {
    let matches = 0;
    
    while (n > 1) {
        const levelMatches = n >> 1;
        n %= 2;
        n += levelMatches;
        matches += levelMatches;
    }
    
    return matches;
};