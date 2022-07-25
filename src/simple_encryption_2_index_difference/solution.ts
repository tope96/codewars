export function encrypt(text:string):string {
    if (text === null || text.length === 0) return text;
    const region = getRegion();
    const splittedText = text.split('');
    validate(splittedText, region);
    const switchedCase = switchCase(splittedText);
    const regionIndexes = toRegionIndexMinusEncrypt(switchedCase, region);
    regionIndexes[0] = regionMirror(regionIndexes[0], region);
    return regionIndexes.join('');
}

export function decrypt(encryptedText:string):string {
    if (encryptedText === null || encryptedText.length === 0) return encryptedText;
    const region = getRegion();
    const splittedText = encryptedText.split('');
    validate(splittedText, region);
    splittedText[0] = regionMirror(splittedText[0], region);
    const regionIndexes = toRegionIndexMinusDecrypt(splittedText, region);
    console.log(regionIndexes)
    const switchedCase = switchCase(regionIndexes);
    return switchedCase.join('');
}

function validate(arrayOfChars: string[], region: string[]) {
    arrayOfChars.forEach(value => {
        if (region.indexOf(value) === -1) throw new Error();
    })
}

function switchCase(arrayOfChars: string[]) {
    return arrayOfChars.map((value, index) => {
        if (index%2) {
            if (value === value.toUpperCase()) return value.toLocaleLowerCase()
            else return value.toUpperCase()
        }
        return value
    });
}

function toRegionIndexMinusEncrypt(arrayOfChars: string[], region: string[]) {
    const newArray = Array(arrayOfChars.length);
    newArray[0] = arrayOfChars[0];
    for (let i = 0; i<arrayOfChars.length; i++) {
        if (i+1 < arrayOfChars.length) {
            const firstIndex = region.indexOf(arrayOfChars[i]);
            const secondIndex = region.indexOf(arrayOfChars[i+1]);
            const newIndex = firstIndex-secondIndex+region.length;
            const newChar = newIndex >= 77 ? region[newIndex-region.length] : region[newIndex];
            newArray[i+1] = newChar;
        }
    }
    return newArray;
}

function toRegionIndexMinusDecrypt(arrayOfChars: string[], region: string[]) {
    const newArray = Array(arrayOfChars.length);
    newArray[0] = arrayOfChars[0];
    for (let i = 0; i<arrayOfChars.length; i++) {
        if (i+1 < arrayOfChars.length) {
            const firstIndex = region.indexOf(newArray[i]);
            const indexOfSecond = region.indexOf(arrayOfChars[i+1]);
            const indexMinus = indexOfSecond - region.length;
            const newIndex = Math.abs(indexMinus - firstIndex)
            const newChar = newIndex >= 77 ? region[newIndex-region.length] : region[newIndex];
            newArray[i+1] = newChar;
        }
    }
    return newArray;
}

function regionMirror(char: string, region: string[]) {
    const charIndex = region.indexOf(char);
    return region[region.length-charIndex-1];
}

function getRegion() {
    const digits = Array.from(Array(10).keys());
    const stringDigits = digits.map((value) => String(value));
    const charsCodeUpper = Array.from(Array(26)).map((value, index) => index+65);
    const charsCodeLower = Array.from(Array(26)).map((value, index) => index+97);
    const alphabetUpper = charsCodeUpper.map((code) => String.fromCharCode(code));
    const alphabetLower = charsCodeLower.map((code) => String.fromCharCode(code));
    const specialChars = `.,:;-?! '()$%&"`.split('');
    const region = alphabetUpper.concat(alphabetLower, stringDigits, specialChars);

    return region;
}
