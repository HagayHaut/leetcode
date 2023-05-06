# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
    nums.sort!
    res = []
    nums.each_with_index do |n, i|
        next if i > 0 && n == nums[i - 1]
        l = i + 1
        r = nums.size - 1
        while l < r do 
            cur_sum = n + nums[l] + nums[r]
            if cur_sum < 0
                l += 1
            elsif cur_sum > 0
                r -= 1 
            else
                res.push([n, nums[l], nums[r]])
                l += 1
                while nums[l] == nums[l - 1] && l < r do 
                    l += 1 
                end
            end
        end
    end
     p res
end