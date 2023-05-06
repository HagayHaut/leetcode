/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// start two pointers at each, take them to head
// of other list when they get to the end. 
// they will intersect at the result node
// works because l1 + l2 === l2 + l1 => same length 
const getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    let a = headA,
        b = headB;
    
    while (a !== b) {
        if (!a) a = headB;
        else a = a.next;
        
        if (!b) b = headA;
        else b = b.next;
    }
    
    return a;
};