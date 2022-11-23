let inputFields = document.querySelectorAll('input');

inputFields.forEach(input => {
    input.addEventListener('focus', validateInput);
    input.addEventListener('blur', validateInput);
    input.addEventListener('keypress', validateInput);
});


function validateInput(e) {
    let inputLength = this.value.trim().length;
    let inputValid = this.checkValidity();

    if (inputLength === 0) {
        this.classList.remove('validBlur');
        this.classList.remove('invalidBlur');
    }
    if (inputValid === true && inputLength > 0) {
        this.classList.remove('invalidBlur');
        this.classList.add('validBlur');
    } else if (inputValid === false && inputLength > 0) {
        this.classList.remove('validBlur');
        this.classList.add('invalidBlur');
    }
}