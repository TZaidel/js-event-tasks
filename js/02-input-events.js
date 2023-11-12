const input = document.querySelector('.js-input')
const checkbox = document.querySelector('.js-license')
const button = document.querySelector('.js-button')
const nameInBtn = document.querySelector('.js-button span')

input.addEventListener('focus', onFocus)
input.addEventListener('blur', onBlur)
input.addEventListener('input', onInputChange)
checkbox.addEventListener('change', onChange)//!використовувати тільки для чекбоксів

function onFocus(){
    console.log('focus')
}

function onBlur() {
    console.log('blur')
}

function onInputChange(event) {
    nameInBtn.textContent = event.currentTarget.value
}

function onChange(event) {
    button.disabled  = !event.currentTarget.checked
}


