import loadWord from "./create-word.js";

function gameOver(param) {
    return param ? true : false;
}

const comparisonWord = () => {

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
        if (!loadWord.split("").some((_, i) => word.children[i].textContent.toUpperCase() === letter.value.toUpperCase())) {
            tmp = loadWord.split("").reduce((acc, item, index) => {
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
                gameOver(true);
            }
        }
        else {
            tmp.forEach((_, i) => {
                word.children[tmp[i]].textContent = `${letter.value}`.toUpperCase();
            })
        }

        letter.value = '';
        if (loadWord.split("").every((item, i) => item.toUpperCase() === word.children[i].textContent.toUpperCase())) {
            gameOver(false);
        }
    }

    btn.addEventListener('click', enterLetter);
    letter.addEventListener('keypress', letterEnter);
};

export const game = gameOver();
export default comparisonWord;