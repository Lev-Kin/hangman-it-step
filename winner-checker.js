function win() {
    const winWord = document.createElement('div');
    const btnReset = document.createElement('button');
    btnReset.addEventListener('click', restartGame);
    winWord.id = 'win';
    btnReset.id = 'reset';
    btnReset.textContent = 'Reset';
    wrapper.style.backgroundColor = 'green';
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
    wrapper.style.backgroundColor = 'red';
    loseWord.textContent = 'Ты проиграл!';
    wrapper.append(loseWord);
    loseWord.append(btnReset);
    btn.disabled = true;
    letter.disabled = true;
}

function restartGame() {
    console.log(word.children.length)
    for (let i = 0; i < wordMass.length; i++) {
        word.children[0].remove();
    }
    wrapper.style.backgroundColor = 'white';
    man.src = `img/1.png`;
    count(true);
    letter.value = '';
    wrapper.lastChild.remove();
    wordMass = spawnWord();
    spanGenerate(wordMass);
    console.log(wordMass);
    btn.disabled = false;
    letter.disabled = false;
}

// btn.addEventListener('click', enterLetter);
// letter.addEventListener('keypress', letterEnter);

lose();