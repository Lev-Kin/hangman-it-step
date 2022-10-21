
const word = document.getElementById('word');

function spanGenerator(arr) {
  for (let i = 0; i < arr.length; i++) {
    word.append(document.createElement("span"));
    word.lastChild.textContent = "_";
  }
}

export default spanGenerator;
