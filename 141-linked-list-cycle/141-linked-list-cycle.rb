# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
    dummy = ListNode.new
    dummy.next = head
    slow = dummy
    fast = head
    
    while fast != slow do
        return false if !fast || !fast.next
        slow = slow.next
        fast = fast.next.next
    end
    
    true
end