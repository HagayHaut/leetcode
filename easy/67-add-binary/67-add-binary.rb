# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
    a_i = a.to_i(2)
    b_i = b.to_i(2)
    (a_i + b_i).to_s(2)
end