const login = document.querySelector(".login")
const register = document.querySelector(".register")
const loginButton = document.querySelector(".loginButton")
const registerButton = document.querySelector(".registerButton")
const joinUsButton = document.querySelector(".joinUsButton")
const logButton = document.querySelector(".logButton")
const emailRegister = document.querySelector("#emailRegister")
const emailLogin = document.querySelector("#emailLogin")
const passwoardRegister = document.querySelector("#passwoardRegister")
const passwoardLogin = document.querySelector("#passwoardLogin")
const firstNameRegister = document.querySelector("#firstNameRegister")
const lastNameRegister = document.querySelector("#lastNameRegister")
const eyePlace = document.querySelectorAll(".eyeClosed")
const allEyePlace = document.querySelectorAll(".eyeClosed")
const registerButtonBis = document.querySelector(".registerButtonBis")
const loginButtonBis = document.querySelector(".loginButtonBis")
const allvalidEmail = document.querySelectorAll(".validEmail")
const validEmail = document.querySelectorAll(".validEmail")


const emailUser = emailRegister.value
const passwoardUser = passwoardRegister.value
const firstNameUser = firstNameRegister.value
const lastNameUser = lastNameRegister.value

const eyeSlash = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>'
const eye = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>'


register.style.display = "none" 
login.style.display = "none"


allvalidEmail.forEach(validEmail => {
    validEmail.style.display = "none"
})

allEyePlace.forEach(eyePlace => {
    eyePlace.addEventListener('click', clickedBox)
    eyePlace.innerHTML = eyeSlash
})
loginButtonBis.addEventListener('click', clickedBox)
registerButtonBis.addEventListener('click', clickedBox)
loginButton.addEventListener('click', clickedBox)
registerButton.addEventListener('click', clickedBox)
joinUsButton.addEventListener('click', clickedBox)
logButton.addEventListener('click', clickedBox)




function clickedBox(event) {

    const box = event.target
    const boxClass = box.className

    const emailUser = emailRegister.value
    const passwoardUser = passwoardRegister.value
    const firstNameUser = firstNameRegister.value
    const lastNameUser = lastNameRegister.value

    const emailId = emailLogin.value
    const passwoardId = passwoardLogin.value

    if (boxClass === 'eyeClosed'){

        allEyePlace.forEach(eyePlace => {
            eyePlace.innerHTML = eye
            eyePlace.classList.remove('eyeClosed')
            eyePlace.classList.add('eyeOpened')
            passwoardRegister.type = 'text'
            passwoardLogin.type = 'text'
        })

    }
    if (boxClass === 'eyeOpened'){
        
        allEyePlace.forEach(eyePlace => {
            eyePlace.innerHTML = eyeSlash
            eyePlace.classList.remove('eyeOpened')
            eyePlace.classList.add('eyeClosed')
            passwoardRegister.type = 'password'
            passwoardLogin.type = 'password'
        })

    }

    if (boxClass === 'loginButton'){
        login.style.display = "block"
        loginButton.style.display = "none"
        registerButton.style.display = "none" 
        
    }
    if(boxClass === 'registerButton'){
        register.style.display = "block"
        loginButton.style.display = "none"
        registerButton.style.display = "none"
        
    }

    if (boxClass === 'joinUsButton'){
        checkForEmptyRegister()
        
    }

    if (boxClass === 'logButton'){
        checkForEmptyLogin()
    }

    if(boxClass === 'registerButtonBis'){
        register.style.display = "block"
        login.style.display = "none"
        eraseContent()

    }
    if(boxClass === 'loginButtonBis'){
        register.style.display = "none"
        login.style.display = "block"
        eraseContent()
    }
    
}


function checkForEmptyRegister() {
    const emailValue = emailRegister.value
    const isValidEmailFormat = isValidEmail(emailValue)

    const inputFields = [
        { element: emailRegister, value: emailValue },
        { element: passwoardRegister, value: passwoardRegister.value },
        { element: firstNameRegister, value: firstNameRegister.value },
        { element: lastNameRegister, value: lastNameRegister.value }
    ];

    inputFields.forEach(input => {
        if (input.value === '') {
            input.element.style.border = '1px solid red'
        } else {
            input.element.style.border = '1px solid black'
            
        }

        if (input.element === emailRegister && (!isValidEmailFormat || !input.value.includes('@'))) {
            input.element.style.border = '1px solid red';
            allvalidEmail.forEach(validEmail => {
                validEmail.style.display = "block"
            })
            
        }
        if(input.element === emailRegister && (isValidEmailFormat && input.value.includes('@'))) {
            input.element.style.border = '1px solid black';
            allvalidEmail.forEach(validEmail => {
                validEmail.style.display = "none"
            })
        }
    })

    const isAnyFieldEmpty = inputFields.some(input => input.value === '')
    const isEmailValid = isValidEmailFormat && emailRegister.value.includes('@')

    if (isAnyFieldEmpty || !isEmailValid) {
        return
    }

    console.log('New user Email: ', emailValue);
    console.log('New user password: ', passwoardRegister.value)
    console.log('New user first name ', firstNameRegister.value)
    console.log('New user last name: ', lastNameRegister.value)
    eraseContent()
}

function checkForEmptyLogin() {
    const fieldsToCheck = [
        { element: emailLogin, value: emailLogin.value },
        { element: passwoardLogin, value: passwoardLogin.value }
    ];

    fieldsToCheck.forEach(field => {
        if (field.value === '') {
            field.element.style.border = '1px solid red';
        } else {
            field.element.style.border = '1px solid black';
            
        }

        if (field.element === emailLogin && (!isValidEmail(field.value))) {
            field.element.style.border = '1px solid red'
            allvalidEmail.forEach(validEmail => {
                validEmail.style.display = "block"
            })
            
        }
        if (field.element === emailLogin && (isValidEmail(field.value))) {
            field.element.style.border = '1px solid black';
            allvalidEmail.forEach(validEmail => {
                validEmail.style.display = "none"
            })
        }
    })

    const isAnyFieldEmpty = fieldsToCheck.some(field => field.value === '')
    const isEmailValid = isValidEmail(emailLogin.value)

    if (isAnyFieldEmpty || (!isEmailValid && emailLogin.value !== '')) {
        
        return
    }

    if (isEmailValid) {
        console.log('User Email: ', emailLogin.value)
    }
    console.log('User password: ', passwoardLogin.value)
    eraseContent()

    fieldsToCheck.forEach(field => {
        field.element.style.border = '1px solid black'
    });
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    return emailPattern.test(email)
}
function eraseContent(){
    emailRegister.value = ''
    passwoardRegister.value = ''
    firstNameRegister.value =''
    lastNameRegister.value =''
    emailLogin.value =''
    passwoardLogin.value=''
}

