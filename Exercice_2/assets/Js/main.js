function checkPassword() {
    let password = document.getElementById(`password`);
    let passwordConfirm = document.getElementById(`passwordConfirm`);
    if(password.value == passwordConfirm.value) {
        password.classList.remove('false');
        passwordConfirm.classList.remove('false');
        password.classList.add('true');
        passwordConfirm.classList.add('true')
    }else {
        password.classList.remove('true');
        passwordConfirm.classList.remove('true');
        password.classList.add('false');
        passwordConfirm.classList.add('false');
    }
}

   /*if(password.value == passwordConfirm.value) {
        password.className = 'form-control is-valid';
        passwordConfirm.className = 'form-control is-valid'
    }else {
        password.className = 'form-control is-invalid';
        passwordConfirm.className = 'form-control is-invalid';
    } */