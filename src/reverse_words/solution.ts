export function reverseWords(str: string): string {
    return str.split(' ').map((word) => {return word.split('').reverse().join('')}).join(' ');
  }