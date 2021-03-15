function squareDigits(x){
  // Code here

  if(typeof x === "number"){
    const squareDigits = x => {
      const digits = num.toString().split('')

      const squaredDigits = digits.map(y => y * y)

      const squaredNumber = squaredDigits.join('')

      return +squaredNumber
    }
  } else {
    throw "paramater is not a number"
  };
}

// Leave the line below for tests to work
module.exports = squareDigits;
