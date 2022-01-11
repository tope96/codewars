export class Kata {
    static highAndLow(numbers: string): string {
      const arrNumbers = numbers.split(" ").map(i => Number(i)).sort((a, b) => a-b);
      console.log(arrNumbers);
      return `${arrNumbers[arrNumbers.length-1]} ${arrNumbers[0]}`;
    }

    static highAndLowSecond(numbers: string): string {
        const arrNumbers = numbers.split(' ').map(i => +i);
        const max = Math.max(...arrNumbers);
        const min = Math.min(...arrNumbers);
        return `${max} ${min}`
    }
  }