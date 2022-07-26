export function lastSurvivors(arr: string[], nums: number[]): string {
    let newArray = [...arr];
    nums.forEach((value, index) => {
        let toDelete = value > arr.length ? arr.length : value;
        console.log(toDelete)
        if (value === 0) {
            return;
        } else {
            let last = arr.length-1;
            for (let i = toDelete; i >= 0; i--) {
                if (last >= 0 && toDelete > 0) {
                    if (!newArray[last].split('')[index].trim()){
                        console.log('cos ' + newArray[last].split('')[index].trim())
                        i = toDelete;
                    } else {
                        console.log('usuwam ' + newArray[last].split('')[index] + ' zostalo jeszcze ' + toDelete)
                        newArray[last] = setCharAt(newArray[last], index, ' ')
                        toDelete -= 1;
                    }
                    last-=1
                }
            }
        }
    });
    return newArray.join('').replace(/ /g, '');
}

function setCharAt(str: string,index: number,chr: string) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
