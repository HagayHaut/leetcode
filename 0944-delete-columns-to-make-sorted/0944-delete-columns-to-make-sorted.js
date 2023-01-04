/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
    let badColCount = 0;
    loop1:
    for (let i = 0; i < strs[0].length; i++) {
        let lastChar = 'a';
        loop2:
        for (const row of strs) {
            const char = row[i];
            if (char < lastChar) {
                badColCount++;
                continue loop1;
            }
            lastChar = char;
        }
    }   
    return badColCount;
};