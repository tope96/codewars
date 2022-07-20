export function findUniq(arr: number[]): number {
    const uniques = [...new Set(arr)];
    if (arr.indexOf(uniques[0]) === arr.lastIndexOf(uniques[0])) return uniques[0]
    else return uniques[1]
}
