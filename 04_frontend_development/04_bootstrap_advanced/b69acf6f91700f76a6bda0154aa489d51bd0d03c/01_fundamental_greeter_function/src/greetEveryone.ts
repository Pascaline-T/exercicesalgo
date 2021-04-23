type ParamRest = string[];

export function greetEveryone(...rest : ParamRest): void {
  // Code your function here

  for (let i = 0 ; i < rest.length ; i++) {
    console.log(`Welcome to ${rest}`)
  }
}
