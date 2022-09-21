# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
def can_construct(ransom_note, magazine)
    letters = {}
    magazine.each_char { |c| letters[c] = (letters[c] || 0) + 1 }
    ransom_note.each_char do |c|
        return false if [nil, 0].include? letters[c]
        letters[c] -= 1
    end
    true
end