/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function(strs) {
    const groups = new Map();
    for (const word of strs) {
        const key = word.split('').sort().join('');
        groups.set(key, groups.get(key) ?? []);
        groups.get(key).push(word);
    }
    
    return Array.from(groups.values());
};