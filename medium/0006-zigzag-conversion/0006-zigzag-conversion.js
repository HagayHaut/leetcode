/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// just have to figure pattern for each row
// main frequency (increment) is calculated as 2*(numRows-1)
// non edge values also have another freq:
// currentIndex + increment - 2*currentRow

const convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    let res = [];
    
    for (let r = 0; r < numRows; r++) {
        const increment = 2 * (numRows - 1);
        for (let i = r; i < s.length; i += increment) {
            res.push(s[i]);
            // check if non edge
            if (r > 0 && r < numRows - 1 && i + increment - 2 * r < s.length) {
                res.push(s[i + increment - 2 * r]);
            }
        }
    }
    
    return res.join('');
};