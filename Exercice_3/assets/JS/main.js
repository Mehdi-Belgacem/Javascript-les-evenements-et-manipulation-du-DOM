function validateName(){
    let nameRegex = /^[a-zA-Z\-À-ÿ\s]+$/;
    let name = document.getElementById('name');
    let errorMessageName = document.getElementById('errorMessageName');
    if(nameRegex.test(name.value) == false){
        errorMessageName.classList.remove('hiddenMessage');
    }else {
        errorMessageName.classList.add('hiddenMessage');
    }
}

function validateAge() {
    let ageRegex =/^[0-9]{2}$/;
    let age = document.getElementById('age');
    let errorAge = document.getElementById('errorAge');
    if(ageRegex.test(age.value)== false){
        errorAge.classList.remove('hiddenMessage');
    }else{
        errorAge.classList.add('hiddenMessage');
    }
}

function validateMail() {
    let mailRegex = /^[a-z][0-9\-\.\_a-z]*@[a-z][0-9\-\.\_a-z]*\.[a-z]+$/;
    let mail = document.getElementById('email');
    let errorMailAddress = document.getElementById('errorMailAddress');
    if(mailRegex.test(mail.value) == false) {
        errorMailAddress.classList.remove('hiddenMessage');
    }else {
        errorMailAddress.classList.add('hiddenMessage');
    }
}


// console.log(nameRegex.test(name.value)//
