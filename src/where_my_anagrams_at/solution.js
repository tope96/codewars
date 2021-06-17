function anagrams(word, words) {
    let anagrams = []

    words.forEach(wordInWords => {
        let wordToCheck = Array.from(word)
        let wordFromArray = Array.from(wordInWords)

        wordToCheck.forEach(char => {
            if(wordFromArray.indexOf(char) !== -1){
                wordFromArray.splice(wordFromArray.indexOf(char), 1)
            }
            if(wordFromArray.length === 0) anagrams.push(wordInWords)
        })
    })

    return anagrams
}