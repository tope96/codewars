export class G964 {

    public static stockList = (listOfArt: string[], listOfCat: string[]) => {
        if (listOfArt.length === 0 || listOfCat.length === 0) {
            return '';
        }

        const categoryMap: { [key: string]: number} = {};
        let arr: string[] = [];

        listOfCat.forEach(category => categoryMap[category] = 0);

        listOfArt.forEach(art => {
            const categorySymbol: string = art[0];

            if(categoryMap.hasOwnProperty(categorySymbol)) {
                categoryMap[categorySymbol] = categoryMap[categorySymbol] + +art.split(' ')[1];
            }
          });

          for (const key in categoryMap) {
            arr.push(`(${key} : ${categoryMap[key]})`)
          }

        return arr.join(' - ');
    }
}