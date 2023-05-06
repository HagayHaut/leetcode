/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function(head) {
    let left = head,
        right = head;
    while(right && right.next) {
        left = left.next;
        right = right.next.next;
    }
    let rev = reverseList(left),
        max = 0;
    while (rev) {
        max = Math.max(max, rev.val + head.val);
        head = head.next;
        rev = rev.next;
    }
    return max;
};

function reverseList(head) {
    let cur = head,
        prev = null;
    while(cur) {
        const temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}