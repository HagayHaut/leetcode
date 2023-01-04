/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumTask = (task) => {
    if (!task) return 0;
    if ([2,3].includes(task)) return 1;
    if (task === 4) return 2;
    return 1 + minimumTask(task - 3);
}


const minimumRounds = function(tasks) {
    const freqMap = {};
    tasks.forEach(t => {
        freqMap[t] = ++freqMap[t] || 1;
    })
    const counts = Object.values(freqMap);
    let res = 0;
    for (const count of counts) {
        if (count < 2) return -1;
        res += minimumTask(count);
    }
    return res;
};