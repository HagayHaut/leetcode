/**
 * @param {number[][]} board
 * @return {number}
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // adds a new node to queue
    // similar SLL push(), O(1) time
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    // removes node from queue
    // similar to SLL shift(), O(1) time
    dequeue() {
        if (!this.first) return null;
        const removeNode = this.first;
        if (this.size === 1) {
            this.last = null;
        } 
        this.first = removeNode.next;
        this.size--;
        return removeNode.value;
    }

    print() {
        const arr = [];
        let curr = this.first;
        while (curr) {
            arr.push(curr.value);
            curr = curr.next;
        }
        console.log(arr);
    }
}


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
    const q = new MyQueue();
    q.enqueue(1);
    dists[1] = 0;
    
    while (q.size) {
        const cur = q.dequeue();
        for (let next = cur + 1; next <= Math.min(cur + 6, n * n); next++) {
            const [r, c] = cells[next];
            const destination = board[r][c] === -1
                ? next
                : board[r][c];
            
            if (dists[destination] === -1) {
                dists[destination] = dists[cur] + 1;
                q.enqueue(destination);
            }
        }
    }
    
    return dists[n * n];
};