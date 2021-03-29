import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  // Your code goes here
  getChuckCategories();
  return new Promise ((resolve) => { 
    if( === [""])
}

function getJoke(categorie): Promise<string> {
  // Your code goes here
  getChuckJoke();
}
// Leave the line below for tests to work properly
export { getCategories, getJoke };
