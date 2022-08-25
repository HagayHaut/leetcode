/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function(strs) {
    const anags = {};
    
    for (const word of strs) {
        const key = word.split('').sort().join('');
        anags[key] = anags[key] || [];
        anags[key].push(word);
    }
    
    return Object.values(anags);
};