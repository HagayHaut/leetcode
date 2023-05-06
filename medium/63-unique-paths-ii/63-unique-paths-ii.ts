function uniquePathsWithObstacles(grid: number[][]): number {
    const N:number = grid.length,
          M:number = grid[0].length,
          dp:number[][] = Array(grid.length).fill(0).map((x: number) => Array(grid[0].length).fill(0));
          
    let flag: boolean = false,
        res: number = 0;
    
    // fill first row
    for (let i:number = 0; i < M; i++) {
        if (grid[0][i] === 1) flag = true;
        if (!flag) dp[0][i] = 1;
    }
    
    // base rest of rows off first
    for (let i:number = 1; i < N; i++) {
        flag = false;
        for (let j:number = 0; j < M; j++) {
            if (j === 0) {
                if (dp[i-1][0] === 0) dp[i][0] = 0;
                else dp[i][j] = grid[i][0] === 1 ? 0 : 1;
                continue;
            };
            if (grid[i][j] === 1) {
                flag = true;
                continue;
            };
            
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
        
    }
    return dp[N-1][M-1];
};