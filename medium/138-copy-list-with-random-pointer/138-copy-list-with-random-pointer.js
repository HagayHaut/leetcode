/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// gotta do two passes
// first creates copies of nodes (no linking)
// map nodes to new nodes
// second pass constructs list by connecting pointers
// uses map
const copyRandomList = function(head) {
    const map = new Map();
    let curr = head;
    
    // important!
    map.set(null, null);
    
    while (curr) {
        map.set(curr, new Node(curr.val));
        curr = curr.next;
    }
    
    curr = head;
    
    while (curr) {
        const copy = map.get(curr);
        // works because important! ^
        copy.next = map.get(curr.next);
        copy.random = map.get(curr.random);
        curr = curr.next;
    }
    
    return map.get(head);
};