class Node {
    key: number;
    val: number;
    next: Node | null;
    prev: Node | null;

    constructor(key = 0, val = 0) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

interface Cache {
    [key: string]: Node
}

class LRUCache {
    cap: number;
    cache: Cache;
    left: Node;
    right: Node;

    constructor(capacity) {
        this.cap = capacity;
        this.cache = {}; 
        this.left = new Node();
        this.right = new Node();
        this.left.next = this.right;
        this.right.prev = this.left;
    }
    
    get(key): number {
        if (key in this.cache) {
            this.remove(this.cache[key]);
            this.insert(this.cache[key]);
            return this.cache[key].val;
        }
        return -1;
    }
    
    put(key, value): void {
        if (key in this.cache) {
            this.remove(this.cache[key]);
        }
        this.cache[key] = new Node(key, value);
        this.insert(this.cache[key]);
        if (this.cap < 0) {
            const lru: Node = this.left.next;
            this.remove(lru);
            delete this.cache[lru.key];
        }
    }
    
    remove(node): void {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.cap++;
    }
    
    insert(node): void {
        node.next = this.right;
        node.prev = this.right.prev;
        node.prev.next = node;
        this.right.prev = node;
        this.cap--;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */