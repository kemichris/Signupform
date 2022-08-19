let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("password don't match");
        
    } else {
        confirmPassword.setCustomValidity('');

    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
