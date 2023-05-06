class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}
class MyCircularQueue {
    constructor(k) {
        this.space = k;
        this.front = new ListNode();
        this.back = new ListNode();
        this.back.prev = this.front;
        this.front.next = this.back;
    }
    
    enQueue(value) {
        if (this.isFull()) return false;
        const node = new ListNode(value);
        node.prev = this.back.prev;
        node.next = this.back;
        this.back.prev = node;
        node.prev.next = node;
        this.space--;
        return true;
    }
    
    deQueue() {
        if (this.isEmpty()) return false;
        this.front.next = this.front.next.next;
        this.front.next.prev = this.front;
        this.space++;
        return true;
    }
    
    Front() {
        if (this.isEmpty()) return -1;
        return this.front.next.val;
    }
    
    Rear() {
        if (this.isEmpty()) return -1;
        return this.back.prev.val;
    }
    
    isEmpty() {
        return this.front.next === this.back;
    }
    
    isFull() {
        return this.space === 0;
    }
};



/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */