// document.getElementById('cashout-btn').addEventListener('click', function(){
//     //1. get the agent number & validate
//     const cashoutNumberInput=document.getElementById('cashout-number');
//     const cashoutNumber=cashoutNumberInput.value;
//     if(cashoutNumber!=11){
//         alert("Invalid agent number!")
//         return
//     }

//     //2. get the amount, validate, convert to Number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;

//     //3. get current balance, validate, convert to Number
//     const balanceElement = document.getElementById('balance');
//     const balance= balanceElement.innerText;

//     //4. claculate new Balance, 
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if(newBalance<0){
//         alert("Invalid Amount");
//         return;
//     }
//     //5. get the pin and verify(true, false, alert)
//     const cashoutPinInput= document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if(pin=="1234"){
//         alert("Cashout Successful");
//         balanceElement.innerText=newBalance;
//     }
//     else{
//         alert("Cashout Failed");
//     }
// })


document.getElementById('cashout-btn').addEventListener('click', function () {
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length != 11) {
        alert("Invalid agent number!")
        return
    }
    const cashoutAmount = getValueFromInput("cashout-amount");

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    const pin = getValueFromInput('cashout-pin');
    if (pin == "1234") {
        alert("Cashout Successful");
        setBalance(newBalance);
        //1. History container retrive
        const history = document.getElementById('history-content');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 rounded-xl mt-3">
        Cashout ${cashoutAmount} successful from ${cashoutNumber} at ${new Date()}
    </div>
`;

        history.append(newHistory);
    }
    else {
        alert("Cashout Failed");
    }
});