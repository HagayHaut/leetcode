# @param {String} s
# @return {Character}
def repeated_character(s)
    seen = Set.new
    s.each_char do |c|
        return c if seen.include? c
        seen.add c
    end
end