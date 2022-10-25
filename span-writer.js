import loadWord from "./create-word.js";

function chooseWord() {
  return loadWord.split("");
}

let guessWord = chooseWord();

function spanGenerator(mass) {
  for (let i = 0; i < mass.length; i++) {
    word.append(document.createElement("span"));
    word.lastChild.textContent = "_";
  }
}

spanGenerator(guessWord);

export { guessWord, spanGenerator };
