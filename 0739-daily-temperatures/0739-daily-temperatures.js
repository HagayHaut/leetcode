/**
 * @param {number[]} temperatures
 * @return {number[]}
 */


// monotonic decreasing stack problem

const dailyTemperatures = function(temperatures) {
    const stack = []; // pair: [temp, index]
    const res = Array(temperatures.length).fill(0);
    temperatures.forEach((t, i) => {
        while (stack.length && t > stack.at(-1)[0]) {
            const [stackT, stackI] = stack.pop();
            res[stackI] = (i - stackI);
        }
        stack.push([t, i]);
    })
    return res;
};