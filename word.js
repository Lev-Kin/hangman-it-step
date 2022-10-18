function chooseWord() {
    let num = Math.round(Math.random() * 3);
    return wordArray[num].split('');
}

let guessWord = choose();

function spanGenerator(mass) {
    for (let i = 0; i < mass.length; i++) {
        word.append(document.createElement('span'));
        word.lastChild.textContent = '_';
    }
}
spanGenerator(guessWord);

console.log(guessWord)