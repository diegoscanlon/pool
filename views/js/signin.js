function handleKeyPress(event) {
    if (event.key === "Enter") {
        send_verification_code();
    }
}

let verificationCode = 0;

function generateVerificationCode() {
    // Generate a random 6-digit verification code
    return Math.floor(100000 + Math.random() * 900000);
}

function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
}

function send_verification_code() {
    const phoneNumber = document.getElementById("phone").value;

    if (!isValidPhoneNumber(phoneNumber)) {
        alert("Please enter a valid US phone number. No characters like () or -");
        return;
    }

    verificationCode = generateVerificationCode();

    document.getElementById("confirmation-message").style.display = "block";
    document.getElementById("verification").style.display = "block";
    document.getElementById("phone-number").style.display = "block";
}

function verify_code() {
    const enteredCode = document.getElementById("verification_code").value;
    
    if (parseInt(enteredCode) === verificationCode) {
        alert("Verification successful!");
    } else {
        alert("Verification code is incorrect. Please try again.");
    }
}
