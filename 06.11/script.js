// Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей. На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: id, username, email, address.city, phone и company.name. Стили добавляем произвольно.

const url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
    .then((res) => res.json())
    .then((date) => {
        date.forEach((item) => {
            const container = document.querySelector('.container')
            const id = document.createElement('h1')
            const username = document.createElement('p')
            const email = document.createElement('p')
            const addressCity = document.createElement('p')
            const phone = document.createElement('p')
            const companyName = document.createElement('p')

            id.innerText = `User-id: ${item.id}`
            username.innerText = `Username: ${item.username}`
            email.innerText = `Email: ${item.email}`
            addressCity.innerText = `City: ${item.address.city}`
            phone.innerText = `Tel: ${item.phone}`
            companyName.innerText = `Company: ${item.company.name}`

            container.append(id, username, email, addressCity, phone, companyName)

        })
    }) 
