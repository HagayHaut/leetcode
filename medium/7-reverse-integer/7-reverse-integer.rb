# @param {Integer} x
# @return {Integer}
def reverse(x)
    if x >= 0
        reverse_arr = x.to_s.split(//).reverse
        result = reverse_arr.join('').to_i
        if result > 2147483647
            return 0
        else
            return result
        end
    else
        reverse_arr = x.to_s.split(//).reverse
        positive = reverse_arr.join('').to_i
        result = positive - 2 * positive
        if result < -2147483648
            return 0
        else
            return result
        end
    end
        
end