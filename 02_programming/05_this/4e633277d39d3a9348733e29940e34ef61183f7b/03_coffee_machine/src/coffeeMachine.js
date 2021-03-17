
const machine = {
  // Complete here
  litersOfCoffee: 0,
  cafeLong: 0.15,
  cafeCorse: 0.08,
  
  fillWithLitersOfCoffee: function (addcoffee) {
    this.litersOfCoffee += addcoffee;
    return this;
  },
  
  
  expresso: function(){
    if(this.litersOfCoffee >= this.cafeCorse){
      this.litersOfCoffee = this.litersOfCoffee - this.cafeCorse;
      return true;
    }
    else {
      return false;
    }
  },
  
  
  longCoffee: function(){
    if(this.litersOfCoffee >= this.cafeLong){
      this.litersOfCoffee = this.litersOfCoffee - this.cafeLong;
      return true;
    }
    else {
      return false;
    }
  },
};

module.exports = machine;
