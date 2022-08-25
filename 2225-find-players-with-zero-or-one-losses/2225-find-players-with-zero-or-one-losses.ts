interface FreqMap {
    [key: string]: number
}

function findWinners(matches: number[][]): number[][] {
    const losses: FreqMap = {};
    const players: Set<number> = new Set();

    matches.forEach(match => {
        losses[match[1]] = ++losses[match[1]] || 1;
        players.add(match[0]);
        players.add(match[1]);
    });
    
    const winners: number[] = [];
    const oneLoss: number[] = [];
    
    players.forEach(player => {
        if (!(player in losses)) winners.push(player);
        if (losses[player] === 1) oneLoss.push(player);
    })
    return [winners.sort((a, b) => a - b), oneLoss.sort((a, b) => a - b)];
};