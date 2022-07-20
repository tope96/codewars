export function squareSum(numbers: number[]): number {
    if (numbers.length === 0) return 0
    return numbers.reduce((prev, curr) => { return prev + Math.pow(curr, 2)}, 0)
}
