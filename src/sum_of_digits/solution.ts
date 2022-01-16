export const digitalRoot = (n:number):number => {
    const sumOfNumbers = n.toString().split('').map((a) => +a).reduce((a, b) => a+b);

    if(sumOfNumbers < 10) {
        return sumOfNumbers;
    } else {
        return digitalRoot(sumOfNumbers);
    }
};
