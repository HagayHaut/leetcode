function isPowerOfFour(n: number): boolean {
    if (n === 1 || n === 4) return true;
    if (n < 16) return false;
    
    let cur: number = 1;
    while (cur <= n) {
        if (cur === n) return true;
        cur *= 4;
    }
    return false;
};