
// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const object = [
 {
    name: 'banana',
    price: 50,

},
{
    name: 'kiwi',
    price: 30,

},
{
    name: 'cherry',
    price: 50,

},
]
function hasExpensiveItem(arr) {
    return arr.some(items => items.price > 50 )
    
}
console.log(hasExpensiveItem);

// У вас есть массив объектов, представляющих товары с их названиями, категориями и ценами.

// Отфильтруйте товары категории "electronics".
// Затем с помощью map создайте массив с ценами этих товаров.
// С помощью reduce найдите общую стоимость всех товаров в категории "electronics".
 const object1 = [
    
    { 
        name: 'Laptop', 
        category: 'electronics', 
        price: 1200 },
    { 
        name: 'Shirt', 
        category: 'clothing', 
        price: 50 },
    { 
        name: 'Phone', 
        category: 'electronics',
         price: 800 },

 ]
 const objectElectr = object1.filter(items => items.category === 'electronics')

 const prices = objectElectr.map(items => items.price)

 const priceAll = prices.reduce((a,b) => a + b)

 console.log(priceAll);
 

// У вас есть массив объектов, представляющих студентов с именами и их средним баллом.

// Найдите первого студента со средним баллом выше 80.
// Если такой студент не найден, добавьте нового студента в начало массива с баллом 85, используя unshift.
// Верните обновленный массив студентов.

const students = [
    {
        firstName:'Tom',
        grade: 79

    },
    {
        firstName:'Tanja',
        grade: 79

    },
    {
        firstName:'Dominik',
        grade: 40

    }
]

const gradeBest = students.find(student => student.grade > 80)

// Это условие проверяет, если переменная foundStudent пуста (равна null, undefined или false). ! означает "не", так что если foundStudent не найден (не существует), код внутри фигурных скобок выполнится.
if(!gradeBest) {
students.unshift( {
    firstName:'Pascal',
        grade: 85
})
}
console.log(students);




// У вас есть массив объектов, представляющих товары в корзине с их названиями, количеством и ценой за единицу.

// Отфильтруйте товары, у которых количество больше 0.
// Примените map, чтобы пересчитать общую стоимость каждого товара (количество * цена за единицу).
// Используя reduce, найдите итоговую стоимость всех товаров в корзине.

const object2 = [
    {
        object: 'mouse',
        quantity: 0 ,
        priceOne: 50
    },
    {
        object: 'spider',
        quantity: 5,
        priceOne: 200
    },
    {
        object: 'snake',
        quantity: 10,
        priceOne: 500
    },
]

const productsAvailability = object2.filter(animals => animals.quantity > 0)
const productsAvailabilityAll = productsAvailability.map(items => items.quantity * items.priceOne)
const productsAvailabilityAllPrice = productsAvailabilityAll.reduce((total, price) => total + price);

console.log(productsAvailabilityAllPrice);  





// У вас есть массив объектов, представляющих задачи с их названиями и статусом (completed: true/false).

// Отфильтруйте задачи, которые еще не выполнены (completed: false).
// С помощью map создайте массив, содержащий только названия этих задач.
// Если массив незавершенных задач пустой, добавьте новую задачу в начало исходного массива с помощью unshift.

// У вас есть массив объектов, представляющих студентов с их именами и оценками (массив чисел).

// Используя map, для каждого студента подсчитайте его средний балл и добавьте это значение как новое свойство averageScore.
// С помощью filter оставьте только тех студентов, у которых средний балл выше 70.
// С помощью reduce найдите средний балл среди отфильтрованных студентов.
// Создавайте массив самостоятельно!




    
