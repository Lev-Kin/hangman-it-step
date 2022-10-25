const wordArray = ['python', 'java', 'swift', 'javascript', 'kotlin', 'pascal', 'ruby', 'groovy', 'cobol', 'scala'];

function createWord (word){
    return word[Math.floor(Math.random() * word.length)];
}

const loadWord = createWord(wordArray);

export default loadWord;