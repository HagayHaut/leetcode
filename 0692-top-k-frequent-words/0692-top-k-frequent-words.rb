# @param {String[]} words
# @param {Integer} k
# @return {String[]}
def top_k_frequent(words, k)
    freqs = words.tally.entries.sort { |a, b| b[1] != a[1] ? b[1] <=> a[1] : a[0] <=> b[0] }
    freqs[0...k].map { |e| e[0] }
end