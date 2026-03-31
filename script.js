let registrationForm = document.getElementById("registrationForm")
let username = document.getElementById("username")
let usernameError = document.getElementById("usernameError")
let email = document.getElementById("email")
let emailError = document.getElementById("emailError")
let password = document.getElementById("password")
let passwordError = document.getElementById("passwordError")
let confirmPassword = document.getElementById("confirmPassword")
let confirmPasswordError = document.getElementById("confirmPasswordError")

let USERNAME_KEY = "username"

username.addEventListener("blur", (event) => {
    if (username.value == "") {
        username.setCustomValidity("Username is required!")
    } else {
        username.setCustomValidity("")
    }

    //username.reportValidity()
    usernameError.innerText = username.validationMessage
})

email.addEventListener("blur", () => {
    if (email.value.length === 0) {
        email.setCustomValidity("Email is required")
    } else {
        password.setCustomValidity("")
    }
    //email.reportValidity()
    emailError.innerText = email.validationMessage
})

password.addEventListener("blur", () => {
    if (password.value.length < 8) {
        password.setCustomValidity("Password length must be 8 minimum!")
    } else {
        password.setCustomValidity("")
    }
    //password.reportValidity()
    passwordError.innerText = password.validationMessage
})

confirmPassword.addEventListener("blur", () => {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Confirm password must be equal to password")
    }else {
        confirmPassword.setCustomValidity("")
    }
    //confirmPassword.reportValidity()
    confirmPasswordError.innerText = confirmPassword.validationMessage
})


const getSavedUsername = () => {
    if (typeof window !== "undefined") {
        const savedUsername = localStorage.getItem(USERNAME_KEY)
        return savedUsername || ""
    }
    return ""
}

const setUsername = (newUsername) => {
    localStorage.setItem(USERNAME_KEY, newUsername)
    username.value = newUsername
}


registrationForm.addEventListener("submit", (event) => {
    
    event.preventDefault()

    if (!username.validity.valid) {
        alert("Please enter your username")
        username.focus()
        return
    }
    if (!email.validity.valid) {
        alert("Please enter your email")
        email.focus()
        return
    }

    if (!password.validity.valid && password.value == "") {
        alert("Please enter your password")
        password.focus()
        return
    }

    if (!confirmPassword.validity.valid && confirmPassword.value == "" &&
        password.value !== confirmPassword.value
    ) {
        alert("Confirm password should be equal to password")
        username.focus()
        return
    }

    const formData = new FormData(registrationForm)
    const usernameValue = formData.get("username") 

    const emailValue = formData.get("email")

    const passwordValue = formData.get("password")
    const confirmPasswordValue = formData.get("confirmPassword")

    alert("Form Successfully Submitted!")

    localStorage.setItem(USERNAME_KEY, usernameValue)

    registrationForm.reset()

})

document.addEventListener("DOMContentLoaded", () => {
    const savedUsername = getSavedUsername()
    setUsername(savedUsername)
})

