# @param {Integer} num
# @return {String}
def int_to_roman(num)
    map = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    
    res = ''
    numerals = map.keys.reverse
    numerals.each do |numeral|
        count = num / map[numeral]
        num %= map[numeral]
        res += numeral.to_s * count
    end
    
    res
end