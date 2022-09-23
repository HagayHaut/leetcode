# @param {String} paragraph
# @param {String[]} banned
# @return {String}
def most_common_word(paragraph, banned)
    words = paragraph.scan(/[a-zA-Z]+/).map(&:downcase)
    sorted = words.tally.entries.sort { |a, b| b[1] <=> a[1] }
    sorted.each do |word, _|
        return word if !banned.include? word
    end
end