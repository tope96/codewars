function validatePIN (pin) {
    let regex4 = /^\d{4}$/g
    let regex6 = /^\d{6}$/g

    return regex4.test(pin) || regex6.test(pin)
}