export function countBits(n: number): number {
    let binary: string = ''

    if (n < 0) binary = (n >>> 3).toString(2);
    else binary = (n).toString(2);

    return [...binary].reduce((a, c) => (c === '1' ? ++a : a), 0);
}
