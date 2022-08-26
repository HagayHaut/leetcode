/**
 * @param {number[]} beans
 * @return {number}
 */
const minimumRemoval = function (beans) {
    let n = beans.length;

    beans.sort((a, b) => a - b);

    let pre = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        pre[i + 1] = pre[i] + beans[i];
    }

    let post = new Array(n + 1).fill(0);
    let multipler = 1;
    for (let i = n - 2; i >= 0; i--, multipler++) {
        post[i] = post[i + 1] + multipler * (beans[i + 1] - beans[i]);
    }

    let min = Infinity;
    for (let i = 0; i < n; i++) {
        min = Math.min(min, pre[i] + post[i]);
    }
    return min;
};