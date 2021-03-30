import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return getChuckCategories();
  // return new Promise((resolve, reject) => {
  //   reject(new Error("Mauvaise comande"));
  // });
}

getCategories()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function getJoke(): any {
  // Your code goes here
  //getChuckJoke();
}
// Leave the line below for tests to work properly
export { getCategories, getJoke };
