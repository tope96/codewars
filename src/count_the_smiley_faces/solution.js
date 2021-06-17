function countSmileys(arr) {
    const regex = /^[:;][-~]?[)D]$/
    let count = 0

    arr.forEach(face => regex.test(face)? count++ : "" )

    return count
}