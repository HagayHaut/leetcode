# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    max_sum = nums[0]
    cur_sum = 0
    nums.each do |n|
        cur_sum = [0, cur_sum].max
        cur_sum += n
        max_sum = [max_sum, cur_sum].max
    end
    max_sum
end