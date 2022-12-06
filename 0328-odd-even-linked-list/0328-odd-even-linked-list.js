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
var oddEvenList = function(head) {
    let odds = new ListNode(), evens = new ListNode();
    let oHead = odds, eHead = evens, i = 1;
    
    while (head) {
        if (i++ % 2) {
            odds.next = head;
            odds = odds.next;
        }
        else {
            evens.next = head;
            evens = evens.next;
        }
        head = head.next;
    }
    evens.next = null;
    odds.next = eHead.next;
    return oHead.next;
};