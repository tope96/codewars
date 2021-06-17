function firstNonRepeatingLetter(s) {
    if(s.length === 1){
        return s
    }

    let array = Array.from(s.toLowerCase())

    for(const [i, char] of array.entries()){
        if(array.indexOf(char) === i && array.indexOf(char, i+1) === -1){
            return s.charAt(i)
        }
    }

    return ""
}