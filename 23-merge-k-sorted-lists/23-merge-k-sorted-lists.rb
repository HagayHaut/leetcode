# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode[]} lists
# @return {ListNode}
def merge_k_lists(lists)
    res = lists[0]
    lists.each_with_index do |l, i|
        next if i == 0
        res = merge res, l
    end
    res
end

def merge(l1, l2)
    dummy = ListNode.new
    tail = dummy
    while l1 && l2
        if l1.val < l2.val
            tail.next = l1
            l1 = l1.next
        else
            tail.next = l2
            l2 = l2.next
        end
        tail = tail.next
    end
    tail.next = l1 || l2
    dummy.next
end