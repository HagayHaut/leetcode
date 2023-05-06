/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


const mergeKLists = function(lists) {
    if (!lists.length) return null;
    if (lists.length < 2) return lists[0];
    
    const merge = (a, b) => {
        let dummy = new ListNode(0),
            tail = dummy;
        while (a && b) {
            if (a.val < b.val) {
                tail.next = a;
                a = a.next;
            } else {
                tail.next = b;
                b = b.next;
            }
            tail = tail.next;
        }

        tail.next = a || b;
        return dummy.next;
    }
    
    return lists.reduce(merge);
}

