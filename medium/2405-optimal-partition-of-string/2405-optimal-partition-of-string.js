/**
 * @param {string} s
 * @return {number}
 */
const partitionString = function(s) {
    let set = new Set();
    let partitions = 1;
    
    for (const c of s) {
        if (set.has(c)) {
            partitions++;
            set = new Set();
        } 
        set.add(c);
    }
    
    return partitions;
};