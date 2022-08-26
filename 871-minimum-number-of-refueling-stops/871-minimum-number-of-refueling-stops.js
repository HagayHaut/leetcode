/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(T, F, S) {
    let n = S.length, ans = 0

    // make max heap with array
    let heap = [,]
    const hpush = val => {
        let i = heap.length, par = i >> 1, temp
        heap.push(val)
        while (heap[par] < heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }
    const hpop = () => {
        if (heap.length === 1) return null
        let top = heap[1], left, right, temp,
            i = 1, child = heap[3] > heap[2] ? 3 : 2
        if (heap.length > 2) heap[1] = heap.pop()
        else heap.pop()
        while (heap[i] < heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] > heap[left] ? right : left
        }
        return top
    }

    for (let i = 0; i <= n; i++) {
        let dist = i === n ? T : S[i][0]
        while (F < dist) {
            if (heap.length === 1) return -1
            F += hpop(), ans++
        }
        if (i < n) hpush(S[i][1])
    }
    return ans
};
    
    
    
    
    
    
    
    
    