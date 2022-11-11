(function () {
    const form = document.querySelector("#form");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const password2 = document.querySelector("#password2");


    // Show input error message
    function showError(input, message) {

        const formControl = input.parentElement;
        formControl.className = "form-control error";

        const small = formControl.querySelector("small");
        small.innerText = message;

    }

    // Show success outline
    function showSuccess(input) {

        const formControl = input.parentElement;
        formControl.className = "form-control success";

    }

    // Check email
    function checkEmail(input) {

        if (isValidEmail(input)) {
            showSuccess(input);
        } else {
            showError(input, "Email is not valid")
        }

    }

    // Check if email is valid
    function isValidEmail(email) {

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

        return regex.test(email.value.toString().trim())

    }

    // Capitalize first letter and return string
    function capitalizeFirstLetter(input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

    // Check  required fields
    function checkRequired(inputs, inputsFlag) {

        inputs.forEach(input => {

            if (input.value.trim() === "") {
                showError(input, `${capitalizeFirstLetter(input.id)} is required`);
            } else {
                showSuccess(input);
                inputsFlag[input.id] = true;
            }

        });

    }

    // Check input length
    function checkLength(input, min, max) {

        if (input.value.length < min) {
            showError(input, `${capitalizeFirstLetter(input.id)} must be at least ${min}`);
        } else if (input.value.length > max) {
            showError(input, `${capitalizeFirstLetter(input.id)} must be less than ${max}`);
        } else {
            showSuccess(input);
        }

    }

    // Check passwords match
    function checkPasswordsMatch(input1, input2) {
        if (input1.value !== input2.value) {
            showError(input2, "Passwords do not match")
        }
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputsFlag = {
            "username": false,
            "email": false,
            "password": false,
            "password2": false
        }

        checkRequired([username, email, password, password2], inputsFlag);

        if (inputsFlag["username"]) checkLength(username, 3, 15);
        if (inputsFlag["password"]) checkLength(password, 6, 25);
        if (inputsFlag["email"]) checkEmail(email);

        checkPasswordsMatch(password, password2);

    });
})();

