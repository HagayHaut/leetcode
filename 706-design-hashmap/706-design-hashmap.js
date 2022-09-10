
class MyHashMap {
    constructor(size = 53) {
        this.data = Array(size);
    }
    
    put(key, value) {
        const idx = this._hash(key);
        this.data[idx] ||= [];
        for (let i = 0; i < this.data[idx].length; i++) {
            const [k, v] = this.data[idx][i];
            if (k === key) {
                this.data[idx][i][1] = value;
                return;
            }
        }
        this.data[idx].push([key, value]);
    }
    
    get(key) {
        const idx = this._hash(key);
        if (!this.data[idx]) return -1;
        for (const [k, v] of this.data[idx]) {
            if (k === key) return v;
        }
        return -1;
    }
    
    remove(key) {
        const idx = this._hash(key);
        if (this.data[idx]) {
            let removeIdx;
            for (let i = 0; i < this.data[idx].length; i++) {
                const [k, v] = this.data[idx][i];
                if (key === k) removeIdx = i;
            }
            if (removeIdx !== undefined) {
                this.data[idx].splice(removeIdx, 1);
            }
        }
    }
    
    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total; 
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

/** 
 * @param {number} key
 * @return {number}
 */


/** 
 * @param {number} key
 * @return {void}
 */


/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */