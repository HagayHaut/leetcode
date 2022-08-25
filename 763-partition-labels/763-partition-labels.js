/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function(s) {
    // map items to their last index
     let lastIndex = {}
     for (let i = 0; i < s.length; i++){
          lastIndex[s[i]] = i;
     }
    
     let partitions = [],
         start = 0,
         end = 0;
    
     for (let i = 0; i < s.length; i++) {
         end = Math.max(end, lastIndex[s[i]])
         if (i === end) {
             partitions.push(end - start + 1)
             start = i + 1
         }
     }
    
    return partitions
    
    
};