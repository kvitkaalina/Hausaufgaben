// Напиши программу, которая выводит все чётные числа от 1 до N в строку через запятую.
// Пример:
// Ввод: N = 10
// Вывод: 2, 4, 6, 8, 10

function nummers(N) {
    // Создание пустого массива:
    let result = [];
    for (let i = 2; i <= N; i += 2) {
        // push - это команда, которая добавляет число в конец массива. Что бы все было по очередности
        result.push(i)
    }
    // join помогает нам объединить их в одну строку, разделённую запятыми. 
    console.log(result.join(', '));
}
nummers(10)


// Напиши программу, которая выводит все нечётные числа от N до 1 через запятую.
// Пример:
// Ввод: N = 9
// Вывод: 9, 7, 5, 3, 1

function nummers1(N) {
    let result = [];
    for (let i = 1; i <= N; i += 2) {
        result.push(i)
    }
    console.log(result.join(', '));
}
nummers1(9)

// Напиши программу, которая выводит квадраты всех чисел от 1 до N через запятую.
// Пример:
// Ввод: N = 4
// Вывод: 1, 4, 9, 16 (квадраты чисел 1, 2, 3 и 4)
function nummers2(N) {
    let result = []
    for (let i = 1; i <= N; i++) {
        result.push(i * i)
    }
    console.log(result.join(', '));
}
nummers2(4)


// Напиши программу, которая выводит все числа от 1 до N, кратные 3, через запятую.
// Пример:
// Ввод: N = 15
// Вывод: 3, 6, 9, 12, 15

function nummers3(N) {
    let result = []
    for (i = 3; i <= N; i += 3) {
        result.push(i)
    }
    console.log(result.join(', '));

}
nummers3(15)

// Напиши программу, которая вычисляет произведение всех чисел от 1 до N.

// Пример:

// Ввод: N = 4
// Вывод: Произведение: 24 (1 * 2 * 3 * 4 = 24)

function nummers4(N) {
    let res = 1
    for (let i = 1; i <= N; i++) {
        // означает умножение текущего значения res на значение i и обновление переменной res с новым значением.
        res *= i
    }
    console.log('Произведение:', res)
}
nummers4(4)

// Напиши программу, которая выводит все числа от N до 1, которые делятся на 5 без остатка.

// Пример:

// Ввод: N = 25
// Вывод: 25, 20, 15, 10, 5

function nummers5(N) {
    // Создаем пустой массив result, куда будем добавлять числа, которые делятся на 5 без остатка.
    let result = []
    // Проходим циклом от N до 1 и проверяем каждое число: делится ли оно на 5 без остатка
    for (let i = N; i >= 1; i--) {
        if (i % 5 === 0)
            result.push(i)
    }
    console.log(result.join(', '));

}
nummers5(25)
// Напиши программу, которая выводит все числа от 1 до N, пропуская каждое третье число.

// Пример:

// Ввод: N = 10
// Вывод: 1, 2, 4, 5, 7, 8, 10 (пропускаем числа 3, 6, 9)
function nummers6(N) {
    let result = [];
    for (let i = 1; i <= N; i++) {
        if (i % 3 !== 0) {
            result.push(i)
        }
    }
    console.log(result.join(', '));

}
nummers6(10)
