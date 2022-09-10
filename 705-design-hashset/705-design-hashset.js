class MyHashSet {
    constructor() {
        this.data = new Map();
    }
    
    add(key) {
        this.data.set(key, true);
    }
    
    remove(key) {
        this.data.delete(key);
    }
    
    contains(key) {
        return this.data.has(key);
    }
    
    
};

/** 
 * @param {number} key
 * @return {void}
 */


/** 
 * @param {number} key
 * @return {void}
 */

/** 
 * @param {number} key
 * @return {boolean}
 */


/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */