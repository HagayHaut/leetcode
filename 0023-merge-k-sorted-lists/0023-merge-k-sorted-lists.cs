/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeKLists(ListNode[] lists) {
        if (lists.Length == 1) return lists[0];
        if (lists.Length == 0) return null;
        
        ListNode merge(ListNode a, ListNode b) {
            ListNode dummy = new ListNode();
            ListNode tail = dummy;
            
            while (a != null && b != null)
            {
                if (a.val < b.val)
                {
                    tail.next = a;
                    a = a.next;
                }
                else
                {
                    tail.next = b;
                    b = b.next;
                }
                tail = tail.next;
            }
            
            tail.next = a == null ? b : a;
            
            return dummy.next;
        }
        
        ListNode merged = merge(lists[0], lists[1]);
        
        for (int i = 2; i < lists.Length; i++)
        {
            merged = merge(merged, lists[i]);
        }
        
        return merged;
    }
}














