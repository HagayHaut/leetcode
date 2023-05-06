# @param {Integer} row_index
# @return {Integer[]}



def get_row(n)
    (0..n).map {|r| Math.gamma(n+1)/(Math.gamma(r+1)*Math.gamma(n-r+1))}.map(&:round)
end