let inputFields = document.querySelectorAll('input');

inputFields.forEach(input => {
    input.addEventListener('focus', validateInput);
    input.addEventListener('blur', validateInput);
    input.addEventListener('change', validateInput);
});

function validateInput(e) {

    if (e.target.value.length === 0) {
        e.target.classList.remove('validBlur');
    }

    if (e.target.checkValidity() === true && e.target.value.length > 0) {
        e.target.classList.remove('invalidBlur');
        e.target.classList.add('validBlur');
    }

    if (e.target.checkValidity() === false && e.target.value.length > 0) {
        e.target.classList.remove('validBlur');
        e.target.classList.add('invalidBlur');
    }
}