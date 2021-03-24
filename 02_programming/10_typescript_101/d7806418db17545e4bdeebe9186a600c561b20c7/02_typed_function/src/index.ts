type tuple = [string, number];
function handleTuple(tuple:[string, number]): void {
  tuple.forEach(element => {
    if (typeof element == "string")
    console.log(element + `The type of ${element} value is string } is FinalizationRegistry.}`);
    if (typeof element == "number")
    console.log(element + `The type of value ${element} is number`);
  });
}
// Leave the line below for tests to work properly.
export { handleTuple };

//const tuple: [string, number] = ["Welcome to Javascript", 12]; 
//function handleTuple(tuple: [string,number]){
//  if(typeof tuple[0] === "string"){
//    console.log(tuple[0]+ typeof tuple[0]);
//  }
//  if(typeof tuple[1] === "number"){
//    console.log(tuple[1] + typeof tuple[1]);
//  }
//}
//(handleTuple(tuple)); 