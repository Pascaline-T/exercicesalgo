export function column(numberOfLines: number, lineContent: string): string {
    let symbol = ""
    for (let i = 1 ; i <= numberOfLines ; i++) {
        symbol += `${lineContent}\n`
    }
    return symbol
 }