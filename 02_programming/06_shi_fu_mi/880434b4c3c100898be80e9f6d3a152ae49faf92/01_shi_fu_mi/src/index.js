const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const playerOne = "Pascaline";
const playerTwo = "Ordinateur";
let resultPlayerOne = null;
let resultPlayerTwo = null;

function moveOrdi() {
    const min = 1
    const max = 3
    const numOrdi = Math.round(Math.random() * (max - min)) + min;
    let saveMove = null;
    if (numOrdi === 1) {
        saveMove = "Pierre"
    }
    else if (numOrdi === 2) {
        saveMove = "Feuille"
    }
    else {
        saveMove = "Ciseaux"
    }
    return saveMove
}

function partie() {
    console.log("Welcome to the game of ShiFuMi");

    console.log(`Hello Player 1: ${playerOne} and Player 2: ${playerTwo} !`);

    console.log("Pour battre l'ordinateur, vous avec le choix entre: 'Pierre', 'Feuille' et 'Ciseaux'");
    mouvement()

    function mouvement() {
        reader.question("Choose a move ", (move) => {
            resultPlayerOne = move;
            resultPlayerTwo = moveOrdi();
            const pierre = "Pierre"
            const feuille = "Feuille"
            const ciseaux = "Ciseaux"


            if (resultPlayerOne != pierre && resultPlayerOne != feuille && resultPlayerOne != ciseaux) {
                console.log("Error, the choice possible are 'Pierre', 'Feuille' et 'Ciseaux'");
                mouvement()
            }
            else {
                if (resultPlayerOne === resultPlayerTwo) {
                    console.log("Draw!");
                    // reader.question("choose a move ", (mouvement));
                }
                else if (resultPlayerOne === "Pierre" && resultPlayerTwo === "Feuille") {
                    console.log(`${playerOne} loses the game !`);
                    // reader.question("choose a move", (mouvement));
                }
                else if (resultPlayerOne === "Pierre" && resultPlayerTwo === "Ciseaux") {
                    console.log(`${playerOne} wins !`);
                    // reader.question("choose a move", (mouvement));
                }
                else if (resultPlayerOne === "Feuille" && resultPlayerTwo === "Pierre") {
                    console.log(`${playerOne} wins !`);
                    // reader.question("choose a move", (mouvement));
                }
                else if (resultPlayerOne === "Feuille" && resultPlayerTwo === "Ciseaux") {
                    console.log(`${playerOne} loses the game !`);
                }
                else if (resultPlayerOne === "ciseaux" && resultPlayerTwo === "Pierre") {
                    console.log(`${playerOne} loses the game !`);
                }
                else if (resultPlayerOne === "Ciseaux" && resultPlayerTwo === "Feuille") {
                    console.log(`${playerOne} wins!`);
                }
                partie();
            }
        });
    }
}

partie()