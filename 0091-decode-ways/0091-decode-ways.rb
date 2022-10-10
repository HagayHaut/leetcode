# @param {String} s
# @return {Integer}

# decision tree DP
# at every index, two decisions:
# include just self
# or self and next (if valid)
# recuring problem is number of ways 
# to solve per slice ot s

# O(n) time, O(n) space with memo
# but can be O(n) time, O(1) space -> only track two values

def num_decodings(s)
    i1, i2 = 1, 1
    n = s.size         
	1.upto(n) do |i|
		count = s[i - 1, 1] != '0' ? i1 : 0 
		count += i2 if s[i - 2, 2].between?('10', '26') && i > 1
		i2 = i1                   
		i1 = count          
	end
	i1
end