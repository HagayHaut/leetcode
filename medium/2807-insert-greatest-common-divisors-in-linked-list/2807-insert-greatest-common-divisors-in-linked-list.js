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
var insertGreatestCommonDivisors = function(head) {
    let current = head;
    while (current.next) {
        const gcd = greatestCommonDivisor(current.val, current.next.val);
        const node = new ListNode(gcd, current.next);
        current.next = node;
        current = node.next;
    }
    return head;
};

function greatestCommonDivisor(x, y) {
    return y ? greatestCommonDivisor(y, x % y) : x;
} 