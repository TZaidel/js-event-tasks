const btnOpen = document.querySelector('[data-action = "open-modal"]')
const btnClose = document.querySelector('[data-action = "close-modal"]')
const backdrop = document.querySelector('.backdrop')


btnOpen.addEventListener('click', onModalOpen)
backdrop.addEventListener('click', onBackdropClick)
btnClose.addEventListener('click', onModalClose)

function onModalOpen() {
    window.addEventListener('keydown', onEscape)
    document.body.classList.add('show-modal')
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
onModalClose()
    }
}

function onModalClose() {
    window.removeEventListener('keydown', onEscape)
    document.body.classList.remove('show-modal')
}


function onEscape(event) {
    if (event.code === 'Escape') {
        onModalClose()
    } 
}