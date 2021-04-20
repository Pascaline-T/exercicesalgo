import { capitalize } from "./capitalize"

export function context(sentence: string): string{
  // Code here and use the function `capitalize` from exercise one
  const mytab = sentence.split(" ");
  const majuscule = mytab.map((word) => {
    return capitalize(word)
  })
  return majuscule.join(" ")
}