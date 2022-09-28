# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
    jumps = 0
    l = r = 0
    
    while r < nums.size - 1 do 
        reach = 0
        l.upto(r) { |i| reach = [reach, i + nums[i]].max }
        l = r + 1
        r = reach
        jumps += 1
    end
    
    jumps
end