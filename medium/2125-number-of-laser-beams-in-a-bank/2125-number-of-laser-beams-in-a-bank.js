/**
 * @param {string[]} bank
 * @return {number}
 */



const numberOfBeams = function(bank) {
    const get1Count = s => (s.match(/1/g) || []).length;
    
    let sum = 0,
        prev = 0;
    
    for (const row of bank) {
        let curr = get1Count(row);
        if (curr) {
            sum += curr * prev;
            prev = curr;
        }
    }
    
    return sum;
};