/**
 * @param {number[]} satisfaction
 * @return {number}
 */
const maxSatisfaction = function(satisfaction) {
    let cur = 0, sum = 0, res = 0;
    satisfaction.sort((a, b) => b - a);

    for (let i = 0; i < satisfaction.length; i++) {
        cur += sum + satisfaction[i];
        sum += satisfaction[i];
        res = Math.max(res, cur);
    }

    return res;
};