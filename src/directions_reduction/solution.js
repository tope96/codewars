function dirReduc(arr){
    const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    const result = []

    arr.forEach(direction => {
        if(result.length) {
            const prevValue = result.pop();
            if (prevValue !== opposites[direction]) {
                result.push(prevValue);
                result.push(direction);
            }
        } else {result.push(direction)}
    })

    return result
}

dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
