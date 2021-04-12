export function humanPercentage(percentages: number[]): string[] {
    return percentages.map((percentage) => `${Math.round(percentage * 100)}%`);
}
