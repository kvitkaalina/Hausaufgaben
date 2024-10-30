const container = document.querySelector('.container')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal__container')
const closeModalButton = document.querySelector('.close__modal')



const dataList = [
    {
        username: "Stanley Cooper",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
    },
    {
        username: "Stanley Cooper",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
    },
    {
        username: "Stanley Cooper",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
    }
]

function createListItem(data) {
    const listItem = document.createElement('div')

    const listImage = document.createElement('img')
    const listTitle = document.createElement('h3')
    const listParagraph = document.createElement('p')
    const listButton = document.createElement('button')


    listItem.classList.add('listItem')
    listImage.setAttribute('src', './pp.jpg')

    listTitle.innerText = data.username
    listParagraph.innerText = data.description
    listButton.innerText = 'Submit'


    listItem.append(listImage, listTitle, listParagraph, listButton)


    return listItem
}



function renderDataList(dataList, container) {
    for (let i = 0; i < dataList.length; i++) {
        const listItem = createListItem(dataList[i])
        container.append(listItem)
    }
}

renderDataList(dataList, container)


//coдаем и добавляем кнопку для модaльного окна
function createModalButton(container) {
    const modalButton = document.createElement('button')


    modalButton.classList.add('modalButton')

    modalButton.innerText = 'Modal Window'

    container.insertAdjacentElement('afterend', modalButton)

    return modalButton
}





const modalButton = createModalButton(container)

function setupModalHandlers(modalButton, modal, closeModalButton) {
    modalButton.addEventListener('click', () => {
        modal.style.display = 'flex'

    })
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none'


    })

}
setupModalHandlers(modalButton, modal, closeModalButton)


function createModalListItem(data) {
    const modalList = document.createElement('div')
    const modalTitle = document.createElement('h3')
    const modalItem = document.createElement('div')
    const modalImage = document.createElement('img')
    const modalParagraph = document.createElement('p')

    modalList.classList.add('modalList')
    modalItem.classList.add('modalItem')
    modalImage.setAttribute('src', './pp.jpg')

    modalTitle.innerText = 'Modal window'
    modalParagraph.innerText = data.description

    modalItem.append(modalImage, modalParagraph)
    modalList.append(modalTitle, modalItem)

    return modalList
}


function renderModalDataList(dataList, container) {
    for (let i = 0; i < dataList.length; i++) {
        const listItem = createModalListItem(dataList[i])
        container.insertAdjacentElement('afterbegin', listItem)
    }


}

renderModalDataList(dataList, modalContainer)
   



































