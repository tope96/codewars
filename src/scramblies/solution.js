function scramble(str1, str2) {
    let str1Array = Array.from(str1)
    let str2Array = Array.from(str2)


    for(const char of str2Array){
        let index = str1Array.indexOf(char)

        if(index === -1){
            return false
        } else {
            str1Array.splice(index, 1)
        }
    }

    return true
}