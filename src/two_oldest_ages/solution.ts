export function twoOldestAges(ages: number[]): number[] {
    return ages.sort((a, b) => a-b).slice(ages.length - 2);
}