export function backwardsPrime(start: number, stop: number): number[] {
    const primes: number[] = [];
    for (let sNumber = start; sNumber <= stop; sNumber++) {
        const reverseSNumber = +String(sNumber).split('').reverse().join('');
        if (reverseSNumber !== sNumber) {
            if (checkIfPrime(sNumber)) {
                if (checkIfPrime(reverseSNumber)) {
                    primes.push(sNumber);
                }
            }
        }
    }
    return primes;
}

function checkIfPrime(numberToCheck: number) {
    for (let i = 2, s = Math.sqrt(numberToCheck); i <= s; i++) {
        if (numberToCheck % i === 0) return false;
    }
    return true;
}
