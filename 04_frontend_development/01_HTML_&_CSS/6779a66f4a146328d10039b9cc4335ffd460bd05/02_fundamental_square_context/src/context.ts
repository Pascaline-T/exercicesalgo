import {squareNumber} from "./squareNumber"

export function context(arrayOfNumbers: number[]): number[] {
  // Code the function here
  const array = arrayOfNumbers.map((element) => {
     return squareNumber(element)
  })
  return array;
}
