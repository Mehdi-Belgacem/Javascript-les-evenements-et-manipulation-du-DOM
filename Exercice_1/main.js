function checkPassword() {
    let password = document.getElementById(`password`);
    let passwordConfirm = document.getElementById(`passwordConfirm`);
    if(password.value == passwordConfirm.value) {
        password.style.bordercolor = 'green';
        passwordConfirm.style.borderColor = 'green';
    }else {
        password.style.borderColor = 'red';
        passwordConfirm.style.borderColor = 'red';
    } 
}

