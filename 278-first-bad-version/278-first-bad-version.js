/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
// [g,g,g,g,g,b,b,b,b,b,b,b,b]
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    return function(n) {
        let l = 1,
            r = n,
            res = n;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (isBadVersion(m)) {
                res = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return res;
    };
};