let inputFields = document.querySelectorAll('input');

inputFields.forEach(input => {
    input.addEventListener('change', validateInput);
    input.addEventListener('focus', validateInput);
    input.addEventListener('blur', () => {
        validateInput;
        input.classList.remove('onFocus');
    });
});


function validateInput() {
    let inputLength = this.value.trim().length;
    let inputValid = this.checkValidity();

    if (inputLength === 0) {
        this.classList.remove('validBlur');
        this.classList.remove('invalidBlur');
        this.classList.add('onFocus');
    }
    if (inputValid === true && inputLength > 0) {
        this.classList.remove('invalidBlur');
        this.classList.remove('onFocus');
        this.classList.add('validBlur');
    } else if (inputValid === false && inputLength > 0) {
        this.classList.remove('validBlur');
        this.classList.remove('onFocus');
        this.classList.add('invalidBlur');
    }
}