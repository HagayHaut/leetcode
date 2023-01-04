/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
    let badColCount = 0;
    outerLoop:
    for (let i = 0; i < strs[0].length; i++) {
        let lastChar = 'a';
        for (const row of strs) {
            const char = row[i];
            if (char < lastChar) {
                badColCount++;
                continue outerLoop;
            }
            lastChar = char;
        }
    }   
    return badColCount;
};