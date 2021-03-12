function fizzBuzz(listnumber) {
  // Code the function here.
  const tab = [];

  listnumber.forEach(numb => {

    if(numb%3 === 0 && numb%5 === 0){
      tab.push("FizzBuzz");
    }
    else if(numb%3 === 0){
      tab.push("Fizz");
    }
    else if(numb%5 === 0){
      tab.push("Buzz");
    }
    else {
      tab.push(numb);
    }
    
  });
  return tab;
}

const tab1 = [1, 6, 10, 15, 23, 27, 31, 36, 40, 45, 47, 53, 56, 61, 67, 70];

console.log(fizzBuzz(tab1));
// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
