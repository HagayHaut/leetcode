/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
// in place, instead of dfs
var flat = function (arr, n) {
    while (n--) {
        let flat = true;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                const offset = arr[i].length - 1;
                arr.splice(i, 1, ...arr[i]);
                i += offset;
                flat = false;
            }
        }
        if (flat) return arr;
    }
    return arr;
};