// undirected graph problem 
// word connected to all words that are one letter off
// can make the adj list O(n*m^2) instead of O(n^2*m)
// then do a bfs O(n^2*m) 

// build list then bfs shortest path

// trick for comparing words:
// hot => *ot, h*t, ho*
// dot => *ot, d*t, do*
// make these strings and compare
// then adj list maps patterns (*ot) to words that match
interface AdjList {
    [key: string]: string[]
}

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (!wordList.includes(endWord)) return 0;
    
    const adj: AdjList = {};
    // begin doesn't start in the list
    wordList.push(beginWord);
    // make graph
    wordList.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            const pattern = getPattern(word, i);
            adj[pattern] = adj[pattern] || [];
            adj[pattern].push(word);
        }
    })
    
    const visited: Set<string> = new Set([beginWord]);
    const q: string[] = [beginWord];
    let res: number = 1;
    // bfs
    while (q.length) {
        const qLen: number = q.length;
        for (let i = 0; i < qLen; i++) {
            const word: string = q.shift();
            if (word === endWord) return res;
            // push neighbors into the queue
            for (let j = 0; j < word.length; j++) {
                const pattern = getPattern(word, j);
                adj[pattern].forEach(neighbor => {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        q.push(neighbor)
                    };
                })
            }
        }
        res++;
    }
    return 0;
};

function getPattern(word: string, i: number): string {
    return `${word.slice(0,i)}*${word.slice(i+1)}`;
}














