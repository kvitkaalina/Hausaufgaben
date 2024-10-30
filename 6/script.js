//1) Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл

const numbersArr = [1, 2, 3, 4, 5]
for (let i = 0; i < numbersArr.length; i++) {
    console.log(numbersArr[i]);
    
}

// Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. (Используйте цикл).

const arr1 = [ 4, 2, 8, 12, 5, 20, 22, 6, 9];
for ( let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 8 && arr1[i] < 20){
        console.log(arr1[i]);
    }
}

// 3) Создайте массив чисел и найдите минимальное значение.
 const arr2 = [ 4, 2, 8, 12, 5, 20, 22, 6, 9];
const minimum = Math.min(...arr2)
console.log(minimum);

// Создайте масив чисел и обновити значение элемента по индексу
const arr3 = [ 4, 2, 8, 12, 5, 20, 22, 6, 9];
const upDate = 5
const newValue = 65
// Здесь мы проверяем, что индекс upDate находится в допустимых пределах (от 0 до длины массива минус один). Если это так, мы обновляем значение элемента массива по этому индексу на newValue.
if ( upDate >= 0 && upDate < arr3.length) {
    arr3[upDate] = newValue
}
console.log(arr3);

//создайте массив слов. Найдите самое длинное слово в массиве
const words = ["apple", "banana", "cherry", "blueberry", "strawberry", "kiwi"];
// Ищем самое длинное слово
let longestWord = "";

for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord);




