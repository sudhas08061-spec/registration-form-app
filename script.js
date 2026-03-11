const form = document.querySelector("#form")

const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const passwordInput = document.querySelector("#password")

const toggle = document.querySelector("#toggle")
const strengthBar = document.querySelector("#strength-bar")

const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailError")
const phoneError = document.querySelector("#phoneError")
const passwordError = document.querySelector("#passwordError")

let submissions = JSON.parse(localStorage.getItem("submissions")) || []

// NAME VALIDATION
nameInput.addEventListener("input", () => {

if(nameInput.value.length < 3){
nameError.innerText = "Name must be at least 3 characters"
}else{
nameError.innerText = ""
}

})

// EMAIL VALIDATION
emailInput.addEventListener("input", () => {

if(!emailInput.value.includes("@")){
emailError.innerText = "Invalid Email"
}else{
emailError.innerText = ""
}

})

// PHONE VALIDATION
phoneInput.addEventListener("input", () => {

if(phoneInput.value.length !== 10){
phoneError.innerText = "Phone must be 10 digits"
}else{
phoneError.innerText = ""
}

})

// PASSWORD STRENGTH
passwordInput.addEventListener("input", () => {

let value = passwordInput.value

if(value.length < 4){
strengthBar.style.width = "30%"
strengthBar.style.background = "red"
passwordError.innerText = "Weak Password"
}

else if(value.length < 8){
strengthBar.style.width = "60%"
strengthBar.style.background = "orange"
passwordError.innerText = "Medium Password"
}

else{
strengthBar.style.width = "100%"
strengthBar.style.background = "green"
passwordError.innerText = "Strong Password"
}

})

// SHOW HIDE PASSWORD
toggle.addEventListener("click", () => {

if(passwordInput.type === "password"){
passwordInput.type = "text"
toggle.innerText = "Hide"
}
else{
passwordInput.type = "password"
toggle.innerText = "Show"
}

})

// FORM SUBMIT
form.addEventListener("submit", (e)=>{

e.preventDefault()

let user = {

name: nameInput.value,
email: emailInput.value,
phone: phoneInput.value,
password: passwordInput.value

}

submissions.push(user)

localStorage.setItem("submissions", JSON.stringify(submissions))

alert("Registration Saved!")

form.reset()

strengthBar.style.width = "0%"

})
