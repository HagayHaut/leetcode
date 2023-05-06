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
const deleteMiddle = function(head) {
    if (!head || !head.next) return null;
    let dummy = new ListNode(),
        right = head,
        left;
    
    dummy.next = head;
    left = dummy;
    
    while (right && right.next) {
        right = right.next.next;
        left = left.next;
    }
    
    left.next = left.next.next;
    
    return dummy.next;
};