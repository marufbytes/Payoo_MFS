
document.getElementById('send-money-btn').addEventListener('click', function () {
    const sendMoneyNumber = getValueFromInput('send-money-number');

    if (sendMoneyNumber.length != 11) {
        alert("Invalid user account number!");
        return;
    }
    const sendMoneyAmount = getValueFromInput("send-money-amount");

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(sendMoneyAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    const pin = getValueFromInput('send-money-pin');
    if (pin == "1234") {
        alert("Send Money Successful");
        setBalance(newBalance);
        const history = document.getElementById('history-content');
        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-xl mt-3">
                Send money ${sendMoneyAmount} successful to ${sendMoneyNumber} at ${new Date()}
            </div>
        `;
        history.append(newHistory);
    }
    else {
        alert("Cashout Failed");
    }
});