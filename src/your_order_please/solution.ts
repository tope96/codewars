export function order(words:string):string{
    if (words === '') return '';

    const arrayOfWords = words.split(' ');
    const array = new Array(arrayOfWords.length);

    arrayOfWords.forEach(word => {
        const place = (+word.match(/\d+/)[0])-1;
        array[place] = word;
    })

    return array.join(' ');
}

console.log(order(""));