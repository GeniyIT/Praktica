function createAllWindows(wndws) {
    for (let i of wndws) {
        i.addEventListener('click', () => {
            let newWindow = window.open('', '', '')
            newWindow.document.body.innerHTML += localStorage.getItem(i.textContent)
        })
    }
}

function createLSWinLinks() {
    const fto = document.querySelector('.fto')
    const dataLocalStorage = Object.entries(localStorage)

    fto.innerHTML = ''
    for (let i of dataLocalStorage) {
        console.log(i)
        fto.innerHTML += `<button type="button" class="btn btn-success open mb-2">${i[0]}</button>`
    }

    const openWindowsArray = document.querySelectorAll('.open')
    createAllWindows(openWindowsArray)
}

const btn = document.querySelector('button')
createLSWinLinks()


function createDocs(links) {
    for (let i of links) {
        i.addEventListener('click', async (eventSaveLink) => {
            let dataContent = (await axios.get(`/docs/${i.textContent}`)).data
            console.log(dataContent)
            localStorage.setItem(i.textContent, dataContent)
            createLSWinLinks()
        })
    }
}

function lssUpdate(data) {
    const lss = document.querySelector('.lss'), link = 'link-data'
    lss.innerHTML = ''
    for (let i = 0; i < data.length; ++i) {
        lss.innerHTML += `<button type="button" class="btn btn-info ${link} mb-2 text-light">${data[i]}</button>`
    }
    return document.querySelectorAll(`.${link}`)
}

btn.addEventListener('click', async (event) => {
    event.preventDefault()
    const input = document.querySelector('input')
    console.log(input)
    const keyWord = input.value
    let data = (await axios.post('/', {url: keyWord})).data
    const docs = lssUpdate(data)
    createDocs(docs)

    console.log(docs)
})

