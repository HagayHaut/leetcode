function minMutation(start: string, end: string, bank: string[]): number {
    const compare = (a, b) => {
        let count = 0;
        for (let i = 0; i < a.length; i++) {
            a[i] !== b[i] && count++;
        }
        return count === 1;
    }
    
    const dfs = (cur, count, remBank) => {
        if (cur === end) counts.push(count);
        if (!remBank.length) return;
        
        remBank.forEach((s, i) => {
            return compare(cur, s) && 
                   dfs(s, count + 1, [... remBank.slice(0, i), ...remBank.slice(i + 1)]);
        })
    }
    
    const counts: number[] = [];
    
    dfs(start, 0, bank);
    
    return counts.length 
           ? Math.min(...counts)
           : -1;
};