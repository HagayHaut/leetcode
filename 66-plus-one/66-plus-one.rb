# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    num = digits.map(&:to_s).join.to_i + 1
    num.to_s.split(//).map(&:to_i)
end