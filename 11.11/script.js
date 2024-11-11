// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.

async function fetchTodosApi(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);   
}
fetchTodosApi(1)




// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.
async function fetchPostApi() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    
    
}
fetchPostApi()



// Получение списка пользователей:
// Напишите функцию, которая использует async/await для получения списка пользователей с JSONPlaceholder (https://jsonplaceholder.typicode.com/users).
// Выведите список имен пользователей в консоль.

async function fetchCodeApi() {
    const url = `https://jsonplaceholder.typicode.com/users`
    const response = await fetch(url)
    const data = await response.json()
    const result = data.map(item => item.name)
        console.log(); 
           
}
fetchCodeApi()





// Посты определенного пользователя:
// Напишите функцию, которая принимает userId и с помощью async/await получает все посты этого пользователя (https://jsonplaceholder.typicode.com/posts?userId=USER_ID).
// Выведите заголовки постов на страницу.
async function fetchUserApi(userId) {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    const response = await fetch(url)
    const data = await response.json()
    // Проходит по каждому посту и вызывает функцию renderPost.
    data.forEach(item => renderPost(item))
  
}
fetchUserApi(1)

  function renderPost(post) {
      const container = document.querySelector('.container')
     const listItem = document.createElement('div')
     listItem.textContent = post.title; 
     container.append(listItem)
  }
 







// Комментарии к посту:
// Напишите функцию, которая принимает postId и с помощью async/await получает все комментарии к этому посту (https://jsonplaceholder.typicode.com/comments?postId=POST_ID).
// Отобразите комментарии на странице.

async function fetchCommentsApi(postId) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    const response = await fetch(url)
    const data = await response.json()
    data.forEach(item => renderComment(item))
    
}

fetchCommentsApi(1)

function renderComment(post) {
    const container = document.querySelector('#comments_container')
    const comments = document.createElement('p')

    comments.innerText = post.body

    container.append(comments)
     
}

// Создание нового поста:
// Напишите функцию, которая создает новый пост через POST-запрос на JSONPlaceholder (https://jsonplaceholder.typicode.com/posts).
// Используйте async/await и отправьте данные через fetch.
// Выведите ответ сервера в консоль.

// Обновление поста:
// Напишите функцию для обновления поста (PUT запрос) через JSONPlaceholder (https://jsonplaceholder.typicode.com/posts/POST_ID).
// Используйте async/await и измените, например, заголовок поста.
// Отобразите результат на странице.

// Удаление поста:
// Напишите функцию, которая удаляет пост через async/await (DELETE запрос на https://jsonplaceholder.typicode.com/posts/POST_ID).
// Подтвердите успешное удаление, отобразив сообщение на странице.

// Получение списка задач:
// Напишите функцию, которая с помощью async/await получает список задач (https://jsonplaceholder.typicode.com/todos).
// Отфильтруйте задачи, которые не завершены, и отобразите их на странице.

// Фильтрация пользователей по имени:
// Напишите функцию, которая получает список пользователей и фильтрует тех, у кого имя начинается с определенной буквы.
// Используйте async/await для получения данных и отобразите результаты на странице.

// Множественные запросы:
// Напишите функцию, которая параллельно запрашивает список пользователей и список постов (Promise.all).
// Используйте async/await и объедините пользователей с их постами по userId.
// Отобразите данные на странице в виде списка.

// Запрос с ошибкой:
// Напишите функцию, которая намеренно делает запрос на несуществующий ресурс на JSONPlaceholder.
// Обработайте ошибку с использованием try/catch и отобразите сообщение об ошибке на странице.