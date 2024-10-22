document.getElementById('dob').value = '2020-01-01';
function validateDOB() {
    const dobInput = document.getElementById('dob');
    const dobValue = new Date(dobInput.value);
    const minDate = new Date('2000-01-01');
    const maxDate = new Date('2020-09-01');

    const validationMessage = document.getElementById('validationMessage');
    if (dobValue >= minDate && dobValue <= maxDate) {
        validationMessage.textContent = "Date of Birth is valid.";
        validationMessage.style.color = "green";
    } else {
        validationMessage.textContent = "Date of Birth is invalid. Please select a date between 01.01.2000 and 01.09.2020.";
        validationMessage.style.color = "red";
    }
}
