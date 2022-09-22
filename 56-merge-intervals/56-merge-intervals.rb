# @param {Integer[][]} intervals
# @return {Integer[][]}
def merge(intervals)
    intervals.sort! { |a, b| a[0] <=> b[0]}
    merged = [intervals[0]]
    intervals.each do |start, fin|
        if start <= merged[-1][1]
            merged[-1] = [[merged[-1][0], start].min, [merged[-1][1], fin].max]
        else
            merged << [start, fin]            
        end
    end
    merged
end