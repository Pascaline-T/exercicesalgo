import { toWords } from "./index"

test("Checking function toWords", () => {
    let sentence = toWords("Bonjour+[!] tout;, le monde");

    expect(sentence).toEqual(["Bonjour", "tout", "le", "monde"]);

})