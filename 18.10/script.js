
     const dataList = [
        {
            username: 'Stanley Cooper',
            description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        },
        {
            username: "Stanley Cooper",
            description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        },
        {
            username: "Stanley Cooper",
            description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        }
    ];
    
    const container = document.querySelector('.container')
    
    for(let i = 0; i < dataList.length; i++){
        const listItem = document.createElement('div')
        const title = document.createElement('h3')
        const paragraph = document.createElement('p')
        const image = document.createElement('img')
        const btn = document.createElement('button')
    
        listItem.classList.add('listItem')
        btn.classList.add('btnS')
    
    
        container.appendChild(listItem)
        title.innerText = dataList[i].username
        paragraph.innerText = dataList[i].description
        btn.innerText = 'submit'
        image.setAttribute('src', './assest/pp.jpg');
        listItem.append(image ,title, paragraph, btn)
        
    }
    
    const btn2 = document.createElement('button')
    btn2.classList.add('btn2')
    container.insertAdjacentElement('afterend', btn2)
    btn2.innerText = 'Modal  Window'
    
    const modal = document.querySelector('.modal')
    const closeModalBtn = document.querySelector('.close__modal')
    btn2.addEventListener('click', () => {
        modal.style.display = 'flex'
    })
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
















