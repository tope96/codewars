export function solve(s: string) {

    if (s.length === 0) return 0;

    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

    let sum: number = 0;
    let allSums: number[] = [];

    s.split('').forEach((letter, index) => {
        if (vowels.includes(letter)) {
            if (sum !== 0) {
                allSums.push(sum);
                sum = 0;
            }
        } else {
            sum += alphabet.indexOf(letter)+1;
        }

        if (index === s.length-1) {
            allSums.push(sum);
        }
    } )

    return Math.max(...allSums);
  }
