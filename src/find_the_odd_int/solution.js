function findOdd(A) {

    let hash = A.reduce((acc, curr) => {
        if(typeof acc[curr] == "undefined"){
            acc[curr] = 1
        } else {
            acc[curr] += 1
        }

        return acc
    }, {})


    for(const key in hash){
        if(hash[key] % 2 !== 0){
            return parseInt(key)
        }
    }
}