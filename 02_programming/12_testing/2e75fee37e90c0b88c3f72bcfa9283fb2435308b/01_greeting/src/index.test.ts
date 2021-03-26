import { greet } from "./index"

describe("checking greet", () => {

    test("greetingName with input", () => {
        const prenom = greet("pascaline");
    
        expect(prenom).toBe("Hello PASCALINE!");
    })
    
    test("greetingName without input", () => {
        const prenom = greet();
    
        expect(prenom).toBe("Hello WORLD!");
    })
})

