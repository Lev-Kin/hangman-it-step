const wordArray = ['python', 'java', 'swift', 'javascript'];

function createWord (){
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

const loadWord = createWord();

export {createWord}
export default loadWord;