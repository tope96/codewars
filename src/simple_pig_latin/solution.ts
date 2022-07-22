export const pigIt = (a : string) : string =>  {
    const words = a.split(' ');

    return words.map((value, index) => {
        if (value.match(/[a-z]/i)) {
            const lettersArray = value.split('');
            const firstLetter = lettersArray.shift();
            return `${lettersArray.join('')}${firstLetter}ay`;
        }
        return value;
    }).join(' ');
}

console.log(pigIt('Hello world !'));
