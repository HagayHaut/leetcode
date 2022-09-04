/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
    if (!n) return tasks.length;
    
    const counts = Array(26).fill(0);
    tasks.forEach(t => counts[t.charCodeAt() - 'A'.charCodeAt()]++);
    counts.sort((a, b) => a - b);
    let i = 25;
    while (i >= 0 && counts[i] === counts[25]) i--;
    return Math.max(tasks.length, (counts[25] - 1)*(n + 1) + 25 - i);
};