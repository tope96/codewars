export function abbrevName(name: string): string {
    const splittedName = name.split(' ');
    return `${splittedName[0][0].toUpperCase()}.${splittedName[1][0].toUpperCase()}`;
}

console.log(abbrevName("Sam Harris"))
