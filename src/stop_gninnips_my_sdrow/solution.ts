export function spinWords(words: string): string {
    return words.split(' ').reduce((prev, word) => {
        if (word.length >= 5) {
          word = word.split('').reverse().join('');
        }

        return `${prev} ${word}`.trim();
    }, '');
}
console.log(spinWords("Hey fellow warriors"));