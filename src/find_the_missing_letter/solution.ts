export function findMissingLetter(array:string[]):string {
    if (array.length < 2) return ''

    const isUpperCase: boolean = array[0] === array[0].toUpperCase() ? true : false;

    const properAlphabet: string[] = getLettersFromAlphabet(array[0], array[array.length-1], isUpperCase);

    if (properAlphabet.length === array.length) return '';

    const missingLetters: string[] = properAlphabet.filter(letter => {
        return !array.includes(letter);
    });

    return missingLetters[0];
  }

  const getLettersFromAlphabet = (letterFrom: string, letterTo: string, inUpperCase:boolean=false): string[] => {
    const from: string = inUpperCase ? letterFrom.toLowerCase() : letterFrom;
    const to: string = inUpperCase ? letterTo.toLowerCase() : letterTo;

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let resultArray: string[] = alphabet.slice(alphabet.indexOf(from), alphabet.indexOf(to)+1);

    if (inUpperCase) resultArray = resultArray.map(letter => letter.toUpperCase());

    return resultArray;
  }