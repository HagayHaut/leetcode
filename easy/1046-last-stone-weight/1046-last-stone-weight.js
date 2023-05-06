/**
 * @param {number[]} stones
 * @return {number}
 */
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // To Add to Heap:
    // 1. Add to the end
    // 2. "Bubble up" to correct spot
    //    a. swap with parent until <= parent
    insert(value) {
        this.values.push(value);
        return this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx-1)/2);
            const parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[idx] = parent;
            this.values[parentIdx] = element;
            idx = parentIdx;
        }
        return this.values;
    }

    // remove root from heap
    // will be max or min depending on heap
    // To Extract from Heap:
    // 1. Remove root, replace with last values
    // 2. "Sink down" to correct position
    //   a. compare w left and right
    //   b. if smaller than both, replace with bigger
    //   c. repeat until no childs/bigger than childs
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((!swap && rightChild > element)
                   || (swap && rightChild > leftChild)
                ) {
                   swap = rightChildIdx;
                }
            }
            if (!swap) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const lastStoneWeight = function(stones) {
    const heap = new MaxBinaryHeap();
    stones.forEach(stone => heap.insert(stone));
    
    while (heap.values.length > 1) {
        const max1 = heap.extractMax(),
              max2 = heap.extractMax();
        if (max1 !== max2) heap.insert(max1-max2);
    }
    
    return heap.values[0] ?? 0;
};




























