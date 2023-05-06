/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const mergeNodes = function(head) {
    let dummy = new ListNode();
    // skip first zero
    head = head.next;
    
    for (let prev = dummy; head; head = head.next) {
        let sum = 0;
        while (head.val !== 0) {
            sum += head.val;
            head = head.next;
        }
        prev.next = head; 
        head.val = sum;
        prev = head;
    }
    return dummy.next;
};