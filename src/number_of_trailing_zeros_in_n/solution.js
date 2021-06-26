function zeros (n) {
    if (n === 0){
        return 0
    }

    let divided = Math.floor(n/5)

    if(divided < 5){
        return divided
    } else {
        return zeros(divided) + divided
    }
}