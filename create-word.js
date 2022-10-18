
const wordArray = ['python', 'java', 'swift', 'javascript'];
const loadWord = function(wordArray){
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

export default loadWord;