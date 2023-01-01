/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
    const map = new Map();
    const words = s.split(' ');
    
    if (words.length !== pattern.length) return false;
    
    for (let i = 0; i < words.length; i++) {
        const [c, word] = [pattern[i], words[i]];
        if (
            (map.has(c) && map.get(c) !== word)
            || (!map.has(c) && [...map.values()].includes(word))
        ) {
            return false;
        }
        
        map.set(c, word);
    }
    
    return true;
};