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
    
    let curr = dummy,
        carry = 0;
    
    while (l1 || l2 || carry) {
        const v1 = l1?.val || 0;
        const v2 = l2?.val || 0;
        const val = v1 + v2 + carry;
        
        carry = ~~(val / 10);
        curr.next = new ListNode(val % 10);
        curr = curr.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummy.next;
};




















