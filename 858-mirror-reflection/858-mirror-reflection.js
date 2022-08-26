/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */

// extend the square up and deal with two walls

// run through a couple cases and see:
// equation is (ext) * p = (ref) * q;

// ext = roomExtensions + 1
// ref = reflectionCount + 1

// if ext even, ref odd => 0 corner
// if ext odd, ref even => 2 corner
// if both odd => 1 corner
// can't both be even


// O(log p) time, O(1) space
const mirrorReflection = function(p, q) {
    let ext = q,
        ref = p;
    
    // they cant both end up even
    while (!(ext % 2) && !(ref % 2)) {
        ext /= 2;
        ref /= 2;
    }
    
    // at least one is odd, test all conditions
    
    // ext is odd
    if (ext % 2 && !(ref % 2)) {
        return 2;
    }
    // both are odd
    else if (ext % 2 && ref % 2) {
        return 1;
    }
    // ref is odd
    else return 0;
};