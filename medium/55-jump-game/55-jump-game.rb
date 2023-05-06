# @param {Integer[]} nums
# @return {Boolean}
def can_jump(nums)
    reach_end = nums.size - 1
    (nums.size - 2).downto(0) do |i|
        reach_end = i if nums[i] + i >= reach_end
    end
    reach_end == 0
end