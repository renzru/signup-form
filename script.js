let inputFields = document.querySelectorAll('input');

inputFields.forEach(input => {
    input.addEventListener('focus', validateInput);
    input.addEventListener('blur', validateInput);
    input.addEventListener('change', validateInput);
});

function validateInput(e) {
    let inputLength = e.target.value.trim().length;
    let inputValid = e.target.checkValidity();

    if (inputLength === 0) {
        e.target.classList.remove('validBlur');
        e.target.classList.remove('invalidBlur');
    }

    if (inputValid === true && inputLength > 0) {
        e.target.classList.remove('invalidBlur');
        e.target.classList.add('validBlur');
    } else if (inputValid === false && inputLength > 0) {
        e.target.classList.remove('validBlur');
        e.target.classList.add('invalidBlur');
    }
}