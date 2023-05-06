function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => {
        if (a[0] !== b[0]) return b[0] - a[0];
        else if (a[1] !== b[1]) return a[1] - b[1];
    });
    const result: number[][] = [];
    people.forEach(person => result.splice(person[1], 0, person));
    return result;
};