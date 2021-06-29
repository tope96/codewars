function rot13(message) {
    let textArray = Array.from(message)
    let newText = ""

    textArray.forEach(char => {
        if(char.match(/[a-zA-Z]/g)){
            let ascii = char.charCodeAt(0) + 13
            let firstCode = (char === char.toUpperCase()) ? 64 : 96

            if(ascii > (firstCode+26)){
                ascii = firstCode + (ascii-(firstCode+26))
                newText += String.fromCharCode(ascii)
            } else {
                newText += String.fromCharCode(ascii)
            }
        }else{
            newText += char
        }

    })

    return newText
}
