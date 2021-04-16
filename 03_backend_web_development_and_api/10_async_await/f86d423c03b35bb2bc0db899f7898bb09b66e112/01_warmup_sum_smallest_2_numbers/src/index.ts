export function sumTwoSmallestNumbers(tab:number[]):number {
    const negatif = tab.find((element) => {
        return element <0
    })
    if(tab.length < 4 || negatif < 0){
        throw new Error
    }
    else {
        const tabtri = tab.sort(function(a, b){
            return (a - b)
           })
          return tabtri[0] + tabtri[1];
    }     
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77])

