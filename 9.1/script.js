// У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка). Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.
const ul = document.querySelector('.item_list');
const items = ul.querySelectorAll('li');

if (items.length > 2) {
    const newItem = document.createElement('li');
    newItem.innerText = 'New Item';
    ul.replaceChild(newItem, items[items.length - 1]);
}


 



  


