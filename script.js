let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() { // Sempre que o usuário mexer no slider, vai refletir no texto em sizePassword que é um ponteiro pra o elemento com id "valor"
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    pass = "";
    const n = charset.length
    for (let i = 0; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

function copyPassword() {
    alert("Senha copiada!");
    navigator.clipboard.writeText(newPassword);
}