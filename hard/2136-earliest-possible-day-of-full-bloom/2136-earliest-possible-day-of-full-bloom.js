/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
const earliestFullBloom = function(plantTime, growTime) {
    const n = growTime.length;
    const days = growTime.map((g, i) => [plantTime[i], g]).sort((a, b) => b[1] - a[1]);
    
    let max = 0, sum = 0;
    
    days.forEach(([plant, grow]) => {
        sum += plant;
        max = Math.max(max, sum + grow);
    })
    
    return max;
};