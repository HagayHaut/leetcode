/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = function(n) {
    let target = `${n}`.split('').sort().join('');
    
    for (let i = 0; i < 30; i++) {
        if (`${1 << i}`.split('').sort().join('') === target) {
            return true;
        }
    }
    
    return false;
};

