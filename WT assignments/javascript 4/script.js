function validateMobile() {
    const mobile = document.getElementById("mobile").value;
    const errorMessage = document.getElementById("errorMessage");
    const mobilePattern = /^[0-9]{10}$/;
    errorMessage.textContent = "";

    if (mobilePattern.test(mobile)) {
        alert("Mobile number is valid!");
    } else {
        errorMessage.textContent = "Please enter a valid 10-digit mobile number.";
    }
}
