







# my solution

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    # initialize pointers
    pre = nil
    cur = head
    nextNode = nil
    # run this until cur is nil
    while cur
        # save .next to method pointer before reassignment
        nextNode = cur.next
        # reverse pointer (will be nil for initial head)
        cur.next = pre
        # advance method pointers
        pre = cur
        cur = nextNode
    end
    # pre is the new head 
    pre
end