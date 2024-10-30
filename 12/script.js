
// Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод map, чтобы создать новый массив объектов, в которых добавлено новое свойство "статус" со значением "взрослый" для тех, кто старше 18 лет, и "ребенок" для остальных.


const peoples = [

    { name: "Alice", age: 25 },

    { name: "Bob", age: 30 },

    { name: "Charlie", age: 15 }

];
const updatedPeople = peoples.map(item => {
    return {
        //  копирует все свойства текущего объекта item в новый объект.
      ...item,
    //   добавляем новое свойство status к новому объекту. Значение status зависит от возраста человека: если возраст больше или равен 18, то статус будет "взрослый", иначе – "ребенок".
      status: item.age >= 18 ? "взрослый" : "ребенок"
    };
  });

  console.log(updatedPeople);
  
// Создайте массив объектов с полями "название" и "рейтинг". Используйте метод forEach, чтобы вывести в консоль названия объектов, у которых рейтинг больше 4.


const movies = [

    { title: "Inception", rating: 4.9 },

    { title: "The Dark Knight", rating: 5.0 },

    { title: "Interstellar", rating: 4.8 },

    { title: "The Matrix", rating: 4.5 }

];

movies.forEach(movie => {
    if (movie.rating > 4) {
      console.log(movie.title);
    }
  });
