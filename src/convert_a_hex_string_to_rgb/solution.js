function hexStringToRGB(hexString) {
    const radix = 16
    const r = parseInt(hexString.slice(1,3), radix)
    const g = parseInt(hexString.slice(3,5), radix)
    const b = parseInt(hexString.slice(5,7), radix)
    return {r: r, g: g, b: b}
}

console.log(hexStringToRGB('#FF9933'))
