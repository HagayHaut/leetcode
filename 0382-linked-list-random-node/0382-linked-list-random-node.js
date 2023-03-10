/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
class Solution {
    
    constructor(head) {
        this.head = head;
        this.length = this.countNodes();
    }

    getRandom() {
        const randomIndex = ~~(Math.random() * this.length);
        let index = 0;
        let cur = this.head;
        while (index !== randomIndex) {
            cur = cur.next;
            index++;
        }
        return cur.val;
    }
    
    countNodes() {
        let cur = this.head;
        let count = 0;
        while (cur) {
            count++;
            cur = cur.next;
        }
        return count;
    }
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */