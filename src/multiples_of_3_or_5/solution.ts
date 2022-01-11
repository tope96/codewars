export class Challenge {
  static solution(number: number) {
    if (number < 0) return 0;
    let sum = 0;
    for (let n = 0; n < number; n++) {
      if (this.getDigitsSum(n) % 3 === 0) {
        sum += n;
      } else if ((n % 10 === 0) || (n % 10 === 5)) {
        sum += n;
      }
    }
    return sum;
  }

  private static getDigitsSum(number: number): number {
    const arrNumber = number
      .toString()
      .split("")
      .map((i) => Number(i));
    const sum = arrNumber.reduce((a, b) => a + b);

    return sum;
  }
}

console.log(Challenge.solution(183));
