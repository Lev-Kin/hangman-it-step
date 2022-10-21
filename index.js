// Игра висилица
// - верстка и разметка html
// 1 создать масив 10 слов
// 2 рандомить слова из массива
// 3 функция которая меняет картину
// 4 длину слова указать количесво _ на html
// 5 функция сравнения букв слова
// 6 запись букв в html
// 7 определения выигрыша проигрыша
// 8 вывод окна модального в браузере

import {createWord} from "./create-word.js";
import spanGenerator from "./span-writer.js";
import comparisonWord from "./comparison-word.js";

const loadWord = createWord();
spanGenerator(loadWord.split(""));
comparisonWord(loadWord.split(""));


// console.log(spanWriter);
// console.log(comparisonWord);

