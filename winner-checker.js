import { createWord } from "./create-word.js";
import spanGenerator from "./span-writer.js";
import {numberImg} from "./comparison-word.js";
import comparisonWord from "./comparison-word.js";

const word = document.getElementById('word');
const letter = document.getElementById('letter');
const btn = document.getElementById('btn');
const gallow = document.getElementById('gallow');
const wrapper = document.getElementById('wrapper');
const body = document.getElementById('body');

function win() {
    const winWord = document.createElement('div');
    const btnReset = document.createElement('button');
    btnReset.addEventListener('click', restartGame);
    winWord.id = 'win';
    btnReset.id = 'reset';
    btnReset.textContent = 'Reset';
    body.style.backgroundColor = 'green';
    winWord.textContent = 'Ты победил!'
    wrapper.append(winWord);
    winWord.append(btnReset);
    btn.disabled = true;
    letter.disabled = true;
}

function lose() {
    const loseWord = document.createElement('div');
    const btnReset = document.createElement('button');
    btnReset.addEventListener('click', restartGame);
    btnReset.id = 'btnReset'
    loseWord.id = 'lose';
    btnReset.id = 'reset';
    btnReset.textContent = 'Reset';
    body.style.backgroundColor = 'red';
    loseWord.textContent = 'Ты проиграл!';
    wrapper.append(loseWord);
    loseWord.append(btnReset);
    btn.disabled = true;
    letter.disabled = true;
}

function restartGame() {
    console.log(word.children.length)
    let length = word.children.length;
    console.log(length)
    for (let i = 0; i < length; i++) {
        word.children[0].remove();
    }
    body.style.backgroundColor = 'white';
    gallow.src = `img/1.png`;
    numberImg(true);
    letter.value = '';
    wrapper.lastChild.remove();

    const loadWord = createWord();
    console.log(loadWord);
    spanGenerator(loadWord.split(""));
    comparisonWord(loadWord.split(""));
    
    console.log(loadWord.split(""));
    btn.disabled = false;
    letter.disabled = false;

}

export { win, lose, restartGame };