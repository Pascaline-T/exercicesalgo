export function line(numberOfStars: number): string {
    let stars = ""
    for (let i = 1 ; i <= numberOfStars ; i++) {
        stars += "*"
    }
    return stars
}
