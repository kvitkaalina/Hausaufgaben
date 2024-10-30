
// Этот метод ищет элемент с указанным идентификатором (id="box"). Это как найти конкретную коробку среди множества других по её метке.
// const box = document.getElementById('box')
// box.innerHTML = `"Это <em>курсивный</em> текст".`

// const box = document.querySelector('#box')
// box.innerHTML = `"Это <em>курсивный</em> текст".`


// Задача 1: Добавление параграфа на страницу
// Создайте функцию addParagraph, которая создает элемент <p> с текстом "Hello, World!" и добавляет его в конец тела документа.
function addParagraph() {
    var paragraph = document.createElement("p");
    paragraph.innerText = "Hello, World!";
    document.body.appendChild(paragraph);
}
console.log(document);
addParagraph()






// Задача 2: Изменение текста заголовка
// Напишите функцию changeTitle, которая находит элемент с тегом <h1> и изменяет его текст на "New Title".
function h1() {
    const h1 = document.querySelectorAll('h1');
    for (let i = 0; i < h1.length; i++) {
        h1[i].innerText = 'New Title'
    }
}
h1()




// Задача 3: Добавление элемента списка
// Создайте функцию addListItem, которая создает новый элемент списка <li> с текстом "New Item" и добавляет его в существующий список <ul> на странице.
function addListItem () {
    const addListItem = document.createElement('li')
    addListItem.textContent = 'New Item1'
    const ul = document.querySelector ('ul')
    ul.appendChild(addListItem)
}
addListItem()




// Задача 4: Замена содержимого div
// Напишите функцию replaceContent, которая находит элемент <div id="content"> и заменяет его содержимое на строку "New Content" с использованием innerHTML.
function replaceContent() {
    const replaceContent = document.getElementById('content')
    replaceContent.innerHTML = `New Content`
}
replaceContent()


// Задача 5: Добавление кнопки с обработчиком
// Создайте функцию addButton, которая создает кнопку с текстом "Click me" и добавляет ее в документ. При клике на кнопку в консоль должно выводиться сообщение "Button clicked!".

function addButton() {
    const button = document.createElement ('button')
    button.innerText = 'Click me'
    document.body.append(button)
    button.onclick = function () {
        console.log('Button clicked');
        
    }
    
}
addButton()
 

// Задача 6: Удаление элемента
// Создайте функцию removeElement, которая удаляет элемент с классом .to-remove со страницы.

// Задача 7: Добавление нового заголовка
// Напишите функцию addNewHeader, которая создает элемент <h2> с текстом "New Header" и добавляет его в начало тела документа.

// Задача 8: Вставка элемента перед другим
// Создайте функцию insertBeforeItem, которая добавляет новый элемент списка <li> с текстом "Before First" перед первым элементом в списке <ul>.

// Задача 9: Изменение стиля элемента
// Напишите функцию changeStyle, которая находит элемент с классом .styled и изменяет его цвет текста на красный.

// Задача 10: Вложенный элемент
// Создайте функцию addNestedDiv, которая создает новый элемент <div>, внутри которого будет другой элемент <p> с текстом "Nested Paragraph", и добавляет этот <div> в тело документа.














































































