function mumble(input: string) :string {
    return input
      .split('')
      .map((input, index) => {
        const repeter = input.repeat(index + 1)
        return (
          repeter.slice(0).toLowerCase()
        )
      })
      .join('-')
  }

console.log(mumble("abc"))

export { mumble }

// const mumble = (sentence: string): string => {
//     const lowerCase = sentence.toLowerCase().split("");
//     const duplic = lowerCase.map((element, index) => {
//       return element.repeat(index + 1);
//     });
//     return duplic.join("-");
//   };
//   export { mumble };