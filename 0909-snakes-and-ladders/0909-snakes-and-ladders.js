/**
 * @param {number[][]} board
 * @return {number}
 */
const snakesAndLadders = (board) => {
    const n = board.length;
    const cells = Array(n * n + 1);
    let columns = Array(n).fill().map((_, i) => i);
    let label = 1;
    
    for (let r = n - 1; r >= 0; r--) {
        columns.forEach(c => cells[label++] = [r, c]);
        columns = columns.reverse();
    }
    
    const dists = cells.map(_ => -1);
    const q = [1]
    dists[1] = 0;
    
    while (q.length) {
        const cur = q.shift();
        for (let next = cur + 1; next <= Math.min(cur + 6, n * n); next++) {
            const [r, c] = cells[next];
            const destination = board[r][c] === -1
                ? next
                : board[r][c];
            
            if (dists[destination] === -1) {
                dists[destination] = dists[cur] + 1;
                q.push(destination);
            }
        }
    }
    
    return dists[n * n];
};