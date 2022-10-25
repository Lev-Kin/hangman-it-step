import { guessWord } from "./span-writer.js";
import {win, lose} from "./winner-checker.js";


    const word = document.getElementById('word');
    const letter = document.getElementById('letter');
    const btn = document.getElementById('btn');
    const gallow = document.getElementById('gallow');
    
    function counter() {
        let numberImg = 2;
        return function () {
            return numberImg > 4 ? 4 : numberImg++;
        }
    }

    let numberImg = counter();

    function letterEnter({ key }) {
        if (key === 'Enter') {
            enterLetter();
        }
    }

    function enterLetter() {
        let tmp = [];
        if (!guessWord.some((_, i) => word.children[i].textContent.toUpperCase() === letter.value.toUpperCase())) {
            tmp = guessWord.reduce((acc, item, index) => {
                if (letter.value.toUpperCase() === item.toUpperCase()) {
                    acc.push(index);
                }
                return acc;
            }, []);
        }

        if (tmp.length === 0) {
            let numberCheck = numberImg();
            gallow.src = `img/${numberCheck}.png`;
            if (numberCheck === 4) {
             lose();
            }
        }
        else {
            tmp.forEach((_, i) => {
                word.children[tmp[i]].textContent = `${letter.value}`.toUpperCase();
            })
        }

        letter.value = '';
        if (guessWord.every((item, i) => item.toUpperCase() === word.children[i].textContent.toUpperCase())) {
            win();
        }
    }

    btn.addEventListener('click', enterLetter);
    letter.addEventListener('keypress', letterEnter);
 
export {enterLetter};
