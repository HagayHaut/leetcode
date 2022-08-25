/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

const flatten = function(head) {
    const stack = [];
    let curr = head;
    
    while (curr) {
        if (curr.child) {
            if (curr.next) stack.push(curr.next);
            curr.next = curr.child;
            curr.next.prev = curr;
            curr.child = null;
        }
        if (!curr.next && stack.length) {
            curr.next = stack.pop();
            curr.next.prev = curr;
        }
        curr = curr.next;
    }
    return head;
};