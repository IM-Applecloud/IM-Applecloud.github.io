document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const billingAddress = document.getElementById('billingAddress').value;
    const billingCity = document.getElementById('billingCity').value;
    const billingState = document.getElementById('billingState').value;
    const billingPostalCode = document.getElementById('billingPostalCode').value;
    const billingCountry = document.getElementById('billingCountry').value;
    
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    console.log('Billing Address:', billingAddress);
    console.log('City:', billingCity);
    console.log('State:', billingState);
    console.log('Postal Code:', billingPostalCode);
    console.log('Country:', billingCountry);

    document.getElementById('output').innerText = 
        Card Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}\nBilling Address: ${billingAddress}\nCity: ${billingCity}\nState: ${billingState}\nPostal Code: ${billingPostalCode}\nCountry: ${billingCountry};
});