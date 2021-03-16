function numberGame(reader, min = 1, max = 100) {
  // code here
  const hiddenDigit = Math.round(Math.random() * (max - min) + min);

  function loop(userInput){
    let input = parseInt(userInput);
    if(Number.isInteger(input)){
      if(input <= max && input >= min){
        if(input === hiddenDigit){
          console.log("You won!");
          reader.close();
        } 
        else if(input < hiddenDigit){
          console.log("Too low");
          reader.question("Enter a number ", (loop));
        }
        else if(input > hiddenDigit){
          console.log("Too high");
          reader.question("Enter a number ", (loop));
        }
      } 
      else {
        console.log("The number is between 1 and 100");
        reader.question("Enter a number ", (loop));
      };
    }
    else {
      console.log("This was not a number ");
      reader.question("Enter a number ", (loop));
    }
  }
  reader.question("Enter a number ", (loop));
}



module.exports = numberGame;
