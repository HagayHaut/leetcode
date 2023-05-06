/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode();
    let tail = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = ~~(val / 10); 
        tail.next = new ListNode(val % 10);
        tail = tail.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    
    return dummy.next;
}




















