import loadWord from "./create-word.js";
import aaa from './span-writer.js';

const comparisonWord = () => {

    const letter = document.getElementById('letter');
    const btn = document.getElementById('btn');
    const gallow = document.getElementById('gallow');

    let wordMass = loadWord.split("");

    let count = startCounter()

    function startCounter() {
        let count = 2;
        return function (imgName = undefined) {
            if (imgName) {
                count = 2;
            }
            else {
                return count > 5 ? 5 : count++;
            }
        }
    }

    function letterEnter({ key }) {
        if (key === 'Enter') {
            enterLetter();
        }
    }

    function enterLetter() {
        let buf = [];
        if (!wordMass.some((_, i) => word.children[i].textContent.toUpperCase() === letter.value.toUpperCase())) {
            buf = wordMass.reduce((acc, item, index) => {
                if (letter.value.toUpperCase() === item.toUpperCase()) {
                    acc.push(index);
                }
                return acc;
            }, []);
        }

        if (buf.length === 0) {
            let checkCount = count();
            gallow.src = `img/${checkCount}.png`;
            if (checkCount === 4) {
                lose();
            }
        }
        else {
            buf.forEach((_, i) => { word.children[buf[i]].textContent = `${letter.value}`.toUpperCase(); })
        }
        letter.value = '';
        if (wordMass.every((item, i) => item.toUpperCase() === word.children[i].textContent.toUpperCase())) {
            win();
        }
    }



    btn.addEventListener('click', enterLetter);
    letter.addEventListener('keypress', letterEnter);
};

export default comparisonWord;