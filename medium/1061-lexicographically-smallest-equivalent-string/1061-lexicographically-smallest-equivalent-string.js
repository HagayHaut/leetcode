/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
const getSmaller = (a, b) => a < b ? a : b;

const smallestEquivalentString = (s1, s2, baseStr) => {
    const adj = {};
    
    for (let i = 0; i < s1.length; i++) {
        const [c1, c2] = [s1[i], s2[i]];
        adj[c1] ||= [];
        adj[c2] ||= [];
        adj[c1].push(c2);
        adj[c2].push(c1);
    }
    
    const seen = new Set();
    const map = {}; 
    
    for (let i = 1; i < 27; i++) {
        const char = String.fromCharCode(96 + i);
        if (adj[char] && !seen.has(char)) {
            const stack = [char];
            while (stack.length) {
                const curr = stack.pop();
                seen.add(curr);
                adj[curr].forEach(nei => {
                    map[nei] = char;
                    if (!seen.has(nei)) stack.push(nei);
                })
            }
        }
    }
    
    return [...baseStr].map(c => map[c] || c).join('');
};