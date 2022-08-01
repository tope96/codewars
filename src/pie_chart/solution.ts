export function pieChart(obj: string): string {
    const object = JSON.parse(obj)

    const valuesSum = Object.values(object).reduce<number>((previous: number, current:number) => {
        return previous + current;
    }, 0)

    Object.values(object).forEach((value: number, index: number) => {
        object[Object.keys(object)[index]] = value/valuesSum * 360;
    })

    return JSON.stringify(object);
}

console.log(pieChart('{"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4}'));
