const form = document.querySelector('.js-register-form')

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    formData.forEach((value, name) => {
        console.log(name + '||' + value)

    })
}

