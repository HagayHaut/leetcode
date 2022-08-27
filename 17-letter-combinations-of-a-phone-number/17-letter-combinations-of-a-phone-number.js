/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    if (!digits) return [];
    const phone = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    const res = [];
    
    const dfs = (i, comb) => {
        if (i === digits.length) {
            res.push(comb.join(''));
            return;
        }
        // decision to include and not include;
        for (const c of phone[digits[i]]) {
            comb.push(c);
            dfs(i + 1, comb);
            comb.pop();
        }
    }
    
    dfs(0, []);
    
    return res;
};