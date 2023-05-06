/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
    const jewelSet = new Set([...jewels]);
    
    let jewelCount = 0;
    
    for (const s of stones) {
        if (jewelSet.has(s)) jewelCount++;
    }
    
    return jewelCount;
};