# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
def can_construct(ransom_note, magazine)
    have = magazine.split(//).tally
    ransom_note.each_char do |c|
        return false if !have.key?(c) || have[c] < 1
        have[c] -= 1
    end
    true
end