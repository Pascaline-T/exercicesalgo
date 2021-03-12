function range(num1, num2) {
  // Code the function here.
  const tab = [];
  let i = null;
  if (num1 < num2) {
    for(i=num1 ; i <= num2 ; i++) {
      tab.push(i);
    }
  }
  if (num1 > num2) {
    for(i=num1 ; i >= num2 ; i--) {
      tab.push(i);
    }
  }
  if (num1 === num2) {
    tab.push(num1);
  }
  return tab;
}

console.log(range(6,6));
// Do not remove last lines, it is for tests
module.exports = range;