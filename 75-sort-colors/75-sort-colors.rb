# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums)
    l, m, r = 0, 0, nums.size - 1
    until m > r do 
        if nums[m] == 0
            swap nums, l, m
            l += 1
        elsif nums[m] == 2
            swap nums, m, r
            r -= 1
            m -= 1
        end
        m += 1
    end
end

def swap(nums,l,r)
    nums[l], nums[r] = nums[r], nums[l] 
end