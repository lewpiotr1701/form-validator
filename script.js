// @ts-nocheck
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// Show input error message
function showError(input, message) {

    const formControl = input.parentElement;
    formControl.classList.add("error");

    const small = formControl.querySelector("small");
    small.innerText = message;

}

// Show success outline
function showSuccess(input) {

    const formControl = input.parentElement;
    formControl.classList.add("success");

}


form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (username.value === "") {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

});

