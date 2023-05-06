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
const reverseList = function(head, prev = null) {
    if (!head) return prev;
       
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
    
    return reverseList(head, prev);
};

