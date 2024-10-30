// Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.
const nummers = [ 1, 2, 3, 4];
function nummersNew(array) {
    let product = 1
    for ( let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product   
}
console.log(nummersNew(nummers));

console.log ('///');

// Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для подсчета суммы всех элементов массива.
const nummers1 = [ 1, 2, 3, 4];
let sum = 0;
let i = 0;
while (i < nummers1.length ) {
    sum += nummers1[i] 
    i++

    
}
console.log(sum);


 



  


