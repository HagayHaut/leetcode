/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = function(target, position, speed) {
    // map position to speed so can sort position
    const map = {};
    let res = 0;
    position.forEach((p, i) => map[p] = speed[i]);
    position.sort((a, b) => a - b);
    
    const hasCollision = (n) => {
        return (map[position.at(-1)] - map[n]) * (target - n) / map[n] >= n - position.at(-1);
    }
    
    while (position[0] !== undefined) {
        const p = position.pop();
        res++;
        while (hasCollision(p)) position.pop();
    }
    
    return res;
};