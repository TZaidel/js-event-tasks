const button = document.querySelector('.js-clear')
const output = document.querySelector('.js-output')

window.addEventListener('keydown', onKeyDown)

function onKeyDown(event) {
    console.log('event key:', event.key, '|| event code', event.code)
    output.textContent += event.key
}

button.addEventListener('click', onClick)

function onClick(event) {
output.textContent = ''
}

//mouse events
const boxFirst = document.querySelector('.js-box-1')

boxFirst.addEventListener('mouseenter', onMouseEnter)
boxFirst.addEventListener('mouseleave', onMouseLeave)

function onMouseEnter() {
    boxFirst.classList.add('box--active')
}

function onMouseLeave() {
    boxFirst.classList.remove('box--active')
}


const boxSecond = document.querySelector('.js-box-2')

boxSecond.addEventListener('mouseover', onMouseOver)
boxSecond.addEventListener('mouseout', onMouseOut)

function onMouseOver() {
    boxSecond.classList.add('box--active')
}

function onMouseOut() {
    boxSecond.classList.remove('box--active')
}

 