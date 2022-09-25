class ListNode 
    attr_accessor :next, :val, :prev
    
    def initialize(val = nil)
        @next = nil
        @val = val
        @prev = nil
    end 
end

# use a doubly linked list to make Queue, 
# wrap around and keep track of 
# beginning and end with pointers

class MyCircularQueue
    attr_accessor :space, :front, :back

    def initialize(k)
        @space = k
        @front = ListNode.new
        @back = ListNode.new
        @front.next = @back
        @back.prev = @front
    end

    def en_queue(value)
        return false if is_full()
        cur = ListNode.new value
        cur.next = @back
        cur.prev = @back.prev
        @back.prev = cur
        cur.prev.next = cur
        @space -= 1
        true
    end

    def de_queue()
        return false if is_empty()
        node = @front.next
        @front.next = @front.next.next
        @front.next.prev = @front
        @space += 1
        true
    end

    def front()
        return -1 if is_empty()
        @front.next.val
    end

    def rear()
        return -1 if is_empty()
        @back.prev.val
    end

    def is_empty()
        @front.next == @back
    end

    def is_full()
        @space == 0
    end


end

# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue.new(k)
# param_1 = obj.en_queue(value)
# param_2 = obj.de_queue()
# param_3 = obj.front()
# param_4 = obj.rear()
# param_5 = obj.is_empty()
# param_6 = obj.is_full()