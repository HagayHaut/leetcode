function movesToStamp(stamp: string, target: string): number[] {
    const N: number = target.length;
    const M: number = stamp.length;
    const output: number[] = [];
    
    let moves: number = 0;
    let maxMoves: number = 10 * N;
    let premoves: number = 0;
    
    const getQuestionMarks = (len) => {
        let res = '';
        for (let i = 0; i < len; i++) {
            res += '?';
        }
        return res;
    }
    
    const check = (trgt, src) => {
        let works = false;
        for (let i = 0; i < M; i++) {
            if (src[i] === trgt[i]) works = true;
            else if (src[i] === '?') continue;
            else return false;
        }
        
        return works;
    }
    
    while (moves < maxMoves) {
        premoves = moves;
        for (let i = 0; i < (N-M+1); i++) {
            // check if stamp is same as subsequence
            if (check(stamp, target.slice(i, i+M))) {
                moves++;
                output.push(i);
                target = `${target.slice(0,i)}${getQuestionMarks(M)}${target.slice(i+M)}`;
                if (target === getQuestionMarks(N)) {
                    return output.reverse();
                }
            }
        }
        // check if no stamps were placed
        if (premoves === moves) return [];
    }
    
    return output;
};