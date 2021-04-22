import { lottery_draw } from "./lottery_draw"

type Draw = number[]

export function contextFunction(ticket: Draw): void {
  // Code the function here
  const array = lottery_draw();

  for (let i = 0 ; i < 6 ; i++) {
    if(ticket[i] === array[i]){
      console.log("You won the lottery!")
    }else {
      console.log("You lost...")
    }
  }
}
