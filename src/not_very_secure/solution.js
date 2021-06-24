function alphanumeric(string){
    if(string.length === 0) return false

    let result = string.match(/\W|_/g)

    if(result == null) return true
    return false
}