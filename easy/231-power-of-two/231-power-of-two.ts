function isPowerOfTwo(n: number): boolean {
    if (!n) return false;
    if (n === 1) return true;
    
    let cur: number = 1;
    while (cur <= n) {
        if (cur === n) return true;
        cur *= 2;
    }
    return false;
};