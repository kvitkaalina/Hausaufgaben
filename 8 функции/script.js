//Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.

function sum (a, b = 3) {
    return a + b
}
console.log(sum (1));

//Создайте массив numbers с несколькими числами.

// Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.
const numbers = [1, 2, 3, 4]
function calculateSum (masiv) {
    // переменная, в которой будет храниться сумма всех элементов массива.
    let sum = 0 
   for (let i = 0; i < masiv.length; i++) {
    sum += masiv[i]
   }
   return sum
}
console.log(calculateSum(numbers));


// Создайте массив students с объектами студентов (имя, возраст, курс).
// Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.

const students = [
    {
        studentName: 'Muhammad',
        age: 25,
        kurs: 'Web-Devolopment',
    },
    {
        studentName: 'Alina',
        age: 29,
        kurs: 'Web-Devolopment',

    },
    {
        studentName: 'Ilya',
        age: 17,
        kurs: 'Web-Devolopment',
    },
]
 
function displayStudentInfo(student) {
    return `Name: ${student.studentName} Age: ${student.age} Kurs: ${student.kurs}`   
}

console.log(displayStudentInfo(students[0]));



 



  


