class Bird {
  age: number;
  // Write your code here.
  constructor(age: number) {
    this.age = age;
  }

 sing(): void {
  console.log("Cui cui");
 }
 fly(time: number): void {
    if(this.age <= 1) {
      console.log("The bird is too young to fly");
    } else if(this.age > 1 && this.age <= 3){
      console.log(`The bird flew ${time} meters in ${time} seconds`);
    } else if(this.age > 3){
      const ms2 = time * 2;
      console.log(`The bird flew ${ms2} meters in ${time} seconds`);
    }
  }    
      
  
}

// Leave the line below for tests to work properly.
export { Bird };
