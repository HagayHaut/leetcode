# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    l = 0
    r = nums.size - 1
    while l <= r do 
        m = (l + r) / 2
        return m if nums[m] == target
        nums[m] < target ? l = m + 1 : r = m - 1
    end
    -1
end