# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
    dummy = ListNode.new
    dummy.next = head
    l, r = dummy, head
    n.times { r = r.next }
    while r do
        l = l.next 
        r = r.next 
    end
    l.next = l.next.next
    dummy.next
end