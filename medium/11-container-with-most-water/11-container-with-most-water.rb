# @param {Integer[]} height
# @return {Integer}
def max_area(height)
    max_vol = 0
    l = 0
    r = height.size - 1
    while l < r do 
        left = height[l]
        right = height[r]
        cur_vol = [left, right].min * (r - l)
        max_vol = [max_vol, cur_vol].max
        if left > right
            r -= 1
        else
            l += 1
        end
    end
    
    max_vol
end