// There should be no import in this file. Only exports!
function putLitersOfCoffee(fillWithOfCoffee) {
//   let litersOfCoffee = 0;
//   function fillWithLitersOfCoffee(liters) {
//     this.litersOfCoffee += liters;
//     return fillWithLitersOfCoffee;
    
//   };
};

function fillWithLitersOfCoffee(liters) {
  let litersOfCoffee = 0;
  this.litersOfCoffee += liters;
  return fillWithLitersOfCoffee;   
};
function consumeLitersOfCoffee(serveAcup){
  function serveACup (quantityInCentiliters) {
    if (this.litersOfCoffee - quantityInCentiliters >= 0) {
      this.litersOfCoffee -= quantityInCentiliters;
      return true;} 
    else {
      return false;}}
}

export { putLitersOfCoffee, consumeLitersOfCoffee };