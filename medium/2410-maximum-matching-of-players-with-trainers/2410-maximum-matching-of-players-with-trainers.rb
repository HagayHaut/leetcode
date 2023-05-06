# @param {Integer[]} players
# @param {Integer[]} trainers
# @return {Integer}
def match_players_and_trainers(players, trainers)
    players.sort!
    trainers.sort!
    
    p = 0
    res = 0
    trainers.each do |t|
        break if p == players.size
        if t >= players[p]
            res += 1
            p += 1
        end
    end
    res
end