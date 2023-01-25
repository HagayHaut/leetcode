/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverse = head => {
    let prev = null;
    let curr = head;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

const rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    
    head = reverse(head);
    let last = head;
    
    while (last.next) {
        last = last.next;
    }

    while (k--) {
        const newHead = head.next;
        head.next = null;
        last.next = head;
        last = head;
        head = newHead;
    }

    return reverse(head);
};