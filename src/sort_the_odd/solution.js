function sortArray(array) {
    if(array.length === 0){
        return []
    }

    let newArray = [...array]
    let evens = {}

    for(const [index, value] of array.entries()){
        if(value % 2 === 0){
            evens[index] = value
            newArray.splice(newArray.indexOf(value), 1)
        }
    }

    newArray.sort((a, b) => a - b)

    for(const value in evens){
        newArray.splice(value, 0, parseInt(evens[value]))
    }

    return newArray
}