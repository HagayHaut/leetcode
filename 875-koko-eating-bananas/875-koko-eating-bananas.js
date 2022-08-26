/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

const minEatingSpeed = function(piles, h) {
    let l = 1,
        r = Math.max(...piles),
        k = 0;
    
    while (l <= r) {
        const m = (l + r) >> 1;
        let hours = 0;
        piles.forEach(p => hours += Math.ceil(p / m));
        if (hours <= h) {
            k = m;
            r = m - 1;
        }
        else l = m + 1;
    }
    return k;
};