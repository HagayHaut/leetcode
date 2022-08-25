
class RandomizedSet {
    constructor() {
        this.map = {};
        this.arr = [];
    }
    
    // idea is to map values to their index in this.arr
    // so can remove and get random in O(1)
    insert(val) {
        if (val in this.map) return false;
        
        this.map[val] = this.arr.length;
        this.arr.push(val);
        return true;
    }
    
    // rather than deleting, pop from end and
    // put popped value in this.add index of map value
    // update index val of map key
    // delete from map
    remove(val) {
        if (val in this.map) {
            const idx = this.map[val],
                  last = this.arr[this.arr.length - 1];
            this.arr[idx] = last;
            this.arr.pop();
            this.map[last] = idx;
            delete this.map[val];
            return true;
        }
        
        return false;
    }
    
    getRandom() {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */


/** 
 * @param {number} val
 * @return {boolean}
 */

/**
 * @return {number}
 */


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */