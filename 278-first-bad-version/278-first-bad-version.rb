# The is_bad_version API is already defined for you.
# @param {Integer} version
# @return {boolean} whether the version is bad
# def is_bad_version(version):

# @param {Integer} n
# @return {Integer}
def first_bad_version(n)
    l = 1
    r = n
    res = n
    
    while l <= r do 
        m = (l + r) / 2
        if is_bad_version m
            res = m
            r = m - 1
        else
            l = m + 1
        end
    end
    
    res
end