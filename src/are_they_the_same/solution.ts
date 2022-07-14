export function comp(a1: number[] | null, a2: number[] | null): boolean {
    if (a1 && a2) {
        if (a1.length !== a2.length) return false;
        const squares = a2.map((number) => Math.sqrt(number));

        const sortedA1 = a1.sort((a, b) => a - b);
        const sortedA2 = squares.sort((a, b) => a - b);

        for (let i = 0; i < sortedA1.length; i++) {
            if (sortedA1[i] !== sortedA2[i]) return false;
        }
        return true;
    }
    return false;
}

const a: number[] = [121, 144, 19, 161, 19, 144, 19, 11]  ;
const b: number[] = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));
