/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = function(colors, neededTime) {
    let time = 0;
    let currChar = colors[0];
    let currVal = neededTime[0];
    
    for (let i = 1; i < colors.length; i++) {
        if (currChar !== colors[i]) {
            currChar = colors[i];
            currVal = neededTime[i];
        }
        else {
            if (neededTime[i] > currVal) {
                time += currVal;
                currVal = neededTime[i];
            }
            else time += neededTime[i];
        }
    }

    return time;
}


