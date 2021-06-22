function validParentheses(parens){
    let parenCount = 0

    for(let i = 0; i<parens.length; i++){
        if(parens[i] === "("){
            parenCount++
        }
        if(parens[i] === ")"){
            parenCount--
        }
        if(parenCount < 0){
            return false
        }
    }

    if(parenCount > 0){
        return false
    }

    return true
}