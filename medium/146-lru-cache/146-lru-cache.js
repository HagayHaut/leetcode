/**
 * @param {number} capacity
 */
class Node {
    constructor(key = undefined, value = undefined) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.value = value;
    }
}

// Use Doubly Linked List
// Map keys to node references
// Update capacity as you insert/remove
class LRUCache {
    constructor(capacity) {
        // maps keys to nodes in DLL
        this.cache = {};
        this.capacity = capacity;
        this.least = new Node();
        this.most = new Node();
        this.least.next = this.most;
        this.most.prev = this.least;
    }
    
    get(key) {
        if (key in this.cache) {
            this.remove(this.cache[key]);
            this.insert(this.cache[key]);
            return this.cache[key].value;
        }
        return -1;
    }
    
    put(key, value) {
        if (key in this.cache) {
            this.cache[key].value = value;
            this.remove(this.cache[key]);
            this.insert(this.cache[key]);
            return this.cache[key].value;
        }
        this.cache[key] = new Node(key, value);
        this.insert(this.cache[key]);
        if (this.capacity < 0) {
            const lru = this.least.next;
            this.remove(lru);
            delete this.cache[lru.key];
        }
    }
    
    insert(node) {
        node.next = this.most;
        node.prev = this.most.prev;
        this.most.prev = node;
        node.prev.next = node;
        this.capacity--;
    }
    
    remove(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
        this.capacity++;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */