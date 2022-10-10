# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    l = 0
    (1...nums.size).each do |r|
        if nums[l] != nums[r]
            l += 1
            nums[l], nums[r] = nums[r], nums[l]
        end
    end
    
    l + 1
end