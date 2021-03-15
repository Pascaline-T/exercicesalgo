function squareDigits(x){
  // Code here

  if(typeof x === "number"){
      const digits = x.toString().split('')

      const squaredDigits = digits.map(y => y * y)

      const squaredNumber = squaredDigits.join('')

      return +squaredNumber
    
  } else {
    throw "paramater is not a patate number"
  };
}

console.log(squareDigits(369))

// Leave the line below for tests to work
module.exports = squareDigits;
