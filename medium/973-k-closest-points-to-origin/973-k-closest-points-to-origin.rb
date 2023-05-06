# @param {Integer[][]} points
# @param {Integer} k
# @return {Integer[][]}
def k_closest(points, k)
    dists = []
    points.each do |point|
        dists.push([get_dist(point), point[0], point[1]]) 
    end
    dists.sort! { |a, b| a[0] <=> b[0] }
    dists[0...k].map { |dist| [dist[1], dist[2]] }
end

def get_dist(point)
   point[0]**2 + point[1]**2 
end