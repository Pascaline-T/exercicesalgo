// There should be no import in this file. Only exports!
function longCoffee(number1) {
  return this.serveACup(0.15);
}

function expresso(container) {
  return this.serveACup(0.08);
}

export {longCoffee, expresso};