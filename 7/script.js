// Создайте объект, представляющий человека, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.
const human = {
    humanName: 'Alina',
    age: 29,
}
console.log(`Name: ${human.humanName}, Age: ${human.age}`);

    



// Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.

const book1 = {
    bookName: 'Шерлок Холмс',
    author: 'Артур Конан Дойль',
};
const book2 = {
    bookName: 'Война и мир',
    author: 'Лев Толстой',
};
const book3 = {
    bookName: 'Кобзар',
    author: 'Тарас Шевченко',
};

let books = [book1, book2, book3]
for (let info1 of books) {
    console.log(`${info1.bookName} : ${info1.author}`);

}
//  Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр
const rectangle = { a: 10, b: 35 }
rectangle.s = rectangle.a * rectangle.b,
    rectangle.p = 2 * (rectangle.a + rectangle.b),
    console.log(`Square: ${rectangle.s}, Perimeter: ${rectangle.p}`);

//Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов, которые имеют цвет "красный", и выведите их в консоль.
const frucht = [
    {
        fruchtName: 'Apfel',
        color: 'rot'
    },
    {
        fruchtName: 'Banane',
        color: 'gold'
    },
    {
        fruchtName: 'Mango',
        color: 'grün'
    }
];

const rotFrüchte = [];
let i = 0;

for (let fruit of frucht) {
    if (fruit.color === 'rot') {
        rotFrüchte[i] = fruit;
        i++;

    }
}
for (let fruit of rotFrüchte) {
    console.log(`Farbe: ${fruit.color}, Frucht: ${fruit.fruchtName}`);
}



// Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль
const playlist = {
    songs: [
        {
            title: 'Imagine',
            artist: 'John Lennon',
        },
        {
            title: '3 Tage am Meer',
            artist: 'AnnenMayKantereit',
        },

        {
            title: 'Billie Jean',
            artist: 'Michael Jackson',
        },
    ]
}
for (let song of playlist.songs) {
    console.log(`Title: ${song.title}, Artist: ${song.artist}`);



}








