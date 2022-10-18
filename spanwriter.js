import loadWord from "./create-word.js" 

const solution = () => {

    function chooseWord() {
    // let num = Math.round(Math.random() * 3);
    return loadWord.split('');
}

let guessWord = chooseWord();

function spanGenerator(mass) {
    for (let i = 0; i < mass.length; i++) {
        word.append(document.createElement('span'));
        word.lastChild.textContent = '_';
    }
}
spanGenerator(guessWord);

console.log(guessWord)
}

export default solution;