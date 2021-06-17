function narcissistic(value) {
    let valueArray = Array.from(String(value))
    let total = 0

    valueArray.forEach(number => {
        total += Math.pow(number, valueArray.length)
    })

    return parseInt(total) === value
}