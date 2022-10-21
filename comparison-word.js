
import { win, lose } from "./winner-checker.js";

let numberImg;
function comparisonWord(wordCh) {

    const letter = document.getElementById('letter');
    const btn = document.getElementById('btn');
    const gallow = document.getElementById('gallow');

    console.log(wordCh);

    numberImg = count();

    function count() {
        let numberImg = 2;
        return function (a = undefined) {
            if (a) {
                numberImg = 2;
            } else {
                return numberImg > 4 ? 4 : numberImg++;
            }

        }
    }

    function letterEnter({ key }) {
        if (key === 'Enter') {
            enterLetter();
        }
    }

    function enterLetter() {
        let tmp = [];
        if (!wordCh.some((_, i) => word.children[i].textContent.toUpperCase() === letter.value.toUpperCase())) {
            tmp = wordCh.reduce((acc, item, index) => {
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
        if (wordCh.every((item, i) => item.toUpperCase() === word.children[i].textContent.toUpperCase())) {
            win();
        }
    }

    btn.addEventListener('click', enterLetter);
    letter.addEventListener('keypress', letterEnter);
};

export { numberImg };
export default comparisonWord;