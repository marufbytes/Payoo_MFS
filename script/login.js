document.getElementById('login-btn').addEventListener('click', function () {
    //1. get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber)

    //2. get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin)

    //3. match pin and mobile number
    if (contactNumber == '01234567890' && pin == '1234') {
        alert('Login successful')
        // window.location.replace("/home.html")
        window.location.href = "./home.html";
    }
    else{
        alert("Login failed")
        return;
    }


})