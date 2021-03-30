import fetch from "node-fetch"

function getCategories(): Promise<void> {
  // code the function here
  return fetch ("https://api.chucknorris.io/jokes/categories")
    .then((tabcategorie) => {
      tabcategorie
      console.log(tabcategorie);
    })
    .catch(() => {
    console.log("Erreur mauvaise commande");
    });
}

// leave line below for tests to work properly
export { getCategories }
