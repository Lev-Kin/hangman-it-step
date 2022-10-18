const wordArray = ['python', 'java', 'swift', 'javascript'];

function createWord (word){
    return word[Math.floor(Math.random() * word.length)];
}

const loadWord = createWord(wordArray);

export default loadWord;