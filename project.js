const form = document.querySelector('.formWithValidation');
const validateBtn = form.querySelector('.validateBtn')

// const fieldset = document.querySelector('fieldset');
// const h1 = document.querySelector('h1');
const name = document.querySelector('.name');
const surname = document.querySelector('.surname');
const email = document.querySelector('.email');
const birthDate = document.querySelector('.birthDate');
const password = document.querySelector('.password');
const passwordRepeat = document.querySelector('.passwordRepeat');
const submit = document.querySelector('.submit');

// const btn = document.querySelector('button');

// btn.onclick = function () {
//     alert('данные отправлены');
// }


// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     name.onclick = function () {
//         console.log('снят фокус');
//     }
// })



const nameField = document.querySelector('.nameField')
const nameErrorLabel = document.querySelector('.nameErrorLabel');
name.onblur = function () {
    if (name.value.length === null || name.value.length === 0) {
        nameErrorLabel.textContent = 'Поле не может быть пустым';
        nameField.classList.add('invalid');
    } else if (name.value.length < 2) {
        nameErrorLabel.textContent = 'Имя не может быть менее 2 символов';
        nameField.classList.add('invalid');
    }
}
const surnameField = document.querySelector('.surnameField')
const surnameErrorLabel = document.querySelector('.surnameErrorLabel');
surname.onblur = function () {
    if (surname.value.length === null || surname.value.length === 0) {
        surnameErrorLabel.textContent = 'Поле не может быть пустым';
        surnameField.classList.add('invalid');
    }
}

const passwordField = document.querySelector('.passwordField')
const passwordErrorLabel = document.querySelector('.passwordErrorLabel');
password.onblur = function () {
    if (password.value.length < 6) {
        passwordErrorLabel.textContent = 'Пароль должен быть не менее 6 символов';
        passwordField.classList.add('invalid');
    }
}

// password.onfocus = function () {
//     passwordErrorLabel.textContent = '';
// }

const emailField = document.querySelector('.emailField')
const emailErrorLabel = document.querySelector('.emailErrorLabel');
email.onblur = function () {
    if (!email.value.includes('@')) {
        emailErrorLabel.textContent = 'Пожалуйста, введите правильный email.'
        emailField.classList.add('invalid');
    }
};


email.onfocus = function () {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        emailErrorLabel.textContent = "";
    }
};


const passwordRepeatField = document.querySelector('.passwordRepeatField');
const passwordRepeatErrorLabel = document.querySelector('.passwordRepeatErrorLabel');
passwordRepeat.onblur = function () {
    if (passwordRepeat.value !== password.value) {
        passwordRepeatErrorLabel.textContent = 'Пароли должны совпадать';
        passwordRepeatField.classList.add('invalid');
    }
}

const birthDateField = document.querySelector('.birthDateField');
const birthDateErrorLabel = document.querySelector('.birthDateErrorLabel');

let today = new Date()

birthDate.onblur = function () {

    const value = new Date(birthDate.value)
    console.log(value)
    console.log(today.getFullYear() >= value.getFullYear(), today.getMonth() >= value.getMonth(), today.getDate() > value.getDate())
    if (today.getFullYear() <= value.getFullYear() && today.getMonth() >= value.getMonth() && today.getDate() < value.getDate()) {
        birthDateErrorLabel.textContent = 'Дата рождения не может быть больше даты сегодняшнего дня';
        birthDateField.classList.add('invalid');
    }
}

birthDate.onfocus = function () {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        birthDateErrorLabel.textContent = "";
    }
};


    // let reg = /\w+@\w+\.\w{2,20}/gi
    // if (!reg.test(email.value)) {
    //     email.style.background = 'red';
    //     email.focus();
    //     return
    // }
    // reg = /\w{6,16}/gi
    // if (!reg.test(psw.value)) {
    //     psw.style.background = 'red';
    //     psw.focus();
    //     return
    // }
    // alert(email.value + '' + password.value);
