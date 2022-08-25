/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function(items, ruleKey, ruleValue) {
    const key = ['type', 'color', 'name'].indexOf(ruleKey);
    return items.filter(x => x[key] === ruleValue).length;
};